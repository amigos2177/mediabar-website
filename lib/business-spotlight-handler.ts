import { spotlightEmail, validateSpotlightApplication } from './business-spotlight'

type Mail = ReturnType<typeof spotlightEmail>
type Dependencies = {
  enabled: () => boolean
  send: (mail: Mail, idempotencyKey: string) => Promise<boolean>
  now?: () => number
}

const MAX_BYTES = 16_000
const WINDOW_MS = 10 * 60 * 1000

// Same per-instance throttling model as the existing contact form; bounded and expired entries removed.
export function createSpotlightHandler({ enabled, send, now = Date.now }: Dependencies) {
  const requests = new Map<string, { count: number; until: number }>()
  const json = (data: object, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
  return async function POST(request: Request) {
    const origin = request.headers.get('origin')
    // Next can normalize the internal request URL behind a proxy; compare the public Host.
    if (origin) {
      try {
        const originUrl = new URL(origin)
        const host = request.headers.get('host') || new URL(request.url).host
        if (!['http:', 'https:'].includes(originUrl.protocol) || originUrl.host !== host) throw new Error('Origin mismatch')
      } catch { return json({ error: 'Please submit using the form on our website.' }, 403) }
    }
    if (!enabled()) return json({ error: 'Applications are not being accepted through this form right now. Please check back soon.' }, 503)
    if (!request.headers.get('content-type')?.includes('application/json')) return json({ error: 'Invalid request format.' }, 415)
    if (Number(request.headers.get('content-length') || 0) > MAX_BYTES) return json({ error: 'Application is too large.' }, 413)

    const time = now()
    for (const [key, entry] of requests) if (entry.until <= time) requests.delete(key)
    if (requests.size >= 5000) return json({ error: 'The form is busy. Please try again shortly.' }, 429)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim().slice(0,100) || 'unknown'
    const entry = requests.get(ip) || { count: 0, until: time + WINDOW_MS }
    entry.count += 1
    requests.set(ip, entry)
    if (entry.count > 5) return json({ error: 'Too many attempts. Please wait ten minutes before trying again.' }, 429)

    let input: unknown
    try {
      // Limit bytes while reading as Content-Length is not trusted or always present.
      const reader = request.body?.getReader()
      if (!reader) return json({ error: 'Application is empty.' }, 400)
      const chunks: Uint8Array[] = []
      let size = 0
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        size += value.byteLength
        if (size > MAX_BYTES) { await reader.cancel(); return json({ error: 'Application is too large.' }, 413) }
        chunks.push(value)
      }
      const bytes = new Uint8Array(size)
      let offset = 0
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length }
      input = JSON.parse(new TextDecoder().decode(bytes))
    } catch { return json({ error: 'Please check your application and try again.' }, 400) }

    if (!input || typeof input !== 'object' || Array.isArray(input)) return json({ error: 'Invalid application.' }, 400)
    const body = input as Record<string, unknown>
    if (body.faxNumber) return json({ error: 'We could not accept this submission. Please try again.' }, 400)
    const result = validateSpotlightApplication(body)
    if (result.error) return json({ error: result.error }, 400)
    const submissionId = body.submissionId
    if (typeof submissionId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionId)) {
      return json({ error: 'Please refresh the page before submitting.' }, 400)
    }
    try {
      const accepted = await send(spotlightEmail(result.application!), `business-spotlight/${submissionId}`)
      if (!accepted) throw new Error('Delivery not accepted')
      return json({ success: true })
    } catch {
      // Avoid logging applicants' names, emails or stories.
      console.error('[business-spotlight] Application delivery failed')
      return json({ error: 'Your application could not be confirmed. Your answers are still here. Please try again, or email contact@mediabarproductions.com.' }, 502)
    }
  }
}
