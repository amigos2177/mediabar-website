import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_BODY_BYTES = 20_000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

const SERVICES = new Set([
  'Corporate Video', 'Commercials', 'Event Coverage', 'Interview & Discussion',
  'Medical Video', 'Aerial Video', 'Motion Graphics', 'Live Streaming',
  'Post Production', 'Food Video', 'Real Estate Video', 'Studio Rental', 'Other',
  'Photography',
])
const TIMELINES = new Set([
  'ASAP / Rush', 'Within 2 Weeks', 'Within a Month',
  '1-3 Months Out', 'Planning Ahead (3+ Months)', 'Not Sure Yet',
])
const BUDGETS = new Set([
  'Under $5,000', '$5,000 - $15,000', '$15,000 - $50,000',
  '$50,000+', 'Not sure yet',
])

type ContactFields = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  timeline?: string
  message: string
}

type RateLimitEntry = {
  count: number
  resetAt: number
}

let resendClient: Resend | undefined
const rateLimits = new Map<string, RateLimitEntry>()

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  resendClient ??= new Resend(apiKey)
  return resendClient
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    }
    return entities[character]
  })
}

function readString(
  body: Record<string, unknown>,
  key: string,
  maxLength: number,
) {
  const value = body[key]
  if (value === undefined || value === null || value === '') return ''
  if (typeof value !== 'string') return null

  const trimmed = value.trim()
  return trimmed.length <= maxLength ? trimmed : null
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 16px;color:#888888;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td>
      <td style="padding:8px 16px;color:#ffffff;font-size:13px;vertical-align:top">${value}</td>
    </tr>`
}

function section(title: string, rows: string) {
  return `
    <tr>
      <td colspan="2" style="padding:24px 16px 8px;border-top:1px solid #C9A84C">
        <span style="font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#C9A84C">${escapeHtml(title)}</span>
      </td>
    </tr>
    ${rows}`
}

function buildHtml(fields: ContactFields) {
  const safe = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, value ? escapeHtml(value) : value]),
  ) as ContactFields

  const contactRows = [
    row('Name', `${safe.firstName} ${safe.lastName}`),
    row('Email', safe.email),
    ...(safe.phone ? [row('Phone', safe.phone)] : []),
    ...(safe.company ? [row('Company', safe.company)] : []),
  ].join('')

  const projectFields = [
    ...(safe.service ? [row('Service', safe.service)] : []),
    ...(safe.budget ? [row('Budget', safe.budget)] : []),
    ...(safe.timeline ? [row('Timeline', safe.timeline)] : []),
  ]

  const projectSection = projectFields.length
    ? section('Project Details', projectFields.join(''))
    : ''

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:system-ui,-apple-system,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#0A0A0A">
    <tr>
      <td colspan="2" style="padding:32px 16px 16px;border-bottom:2px solid #CC0000">
        <span style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#CC0000">Media Bar Productions</span>
        <h1 style="margin:8px 0 0;font-size:22px;color:#ffffff;font-weight:700">New Project Inquiry</h1>
        <p style="margin:6px 0 0;font-size:13px;color:#888888">From ${safe.firstName} ${safe.lastName} &lt;${safe.email}&gt;</p>
      </td>
    </tr>
    ${section('Contact Info', contactRows)}
    ${projectSection}
    ${section('Message', row('', safe.message.replace(/\n/g, '<br>')))}
    <tr>
      <td colspan="2" style="padding:24px 16px;border-top:1px solid #1a1a1a">
        <p style="margin:0;font-size:11px;color:#555555">Sent from the contact form at mediabarproductions.com</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function clientIp(req: NextRequest) {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || req.headers.get('x-real-ip')
    || 'unknown'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const current = rateLimits.get(ip)

  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  current.count += 1
  return current.count > RATE_LIMIT_MAX_REQUESTS
}

function successfulBotResponse() {
  return NextResponse.json({
    success: true,
    message: 'Thanks — we got your message and will respond within 1 business day.',
  })
}

export async function POST(req: NextRequest) {
  try {
    const contentLength = Number(req.headers.get('content-length') || 0)
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Request is too large.' }, { status: 413 })
    }

    const origin = req.headers.get('origin')
    const host = req.headers.get('host')
    if (origin && host && new URL(origin).host !== host) {
      return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 })
    }

    if (isRateLimited(clientIp(req))) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes or call us at 210-279-9442.' },
        { status: 429 },
      )
    }

    let body: Record<string, unknown>
    try {
      const parsed: unknown = await req.json()
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
      }
      body = parsed as Record<string, unknown>
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const website = readString(body, 'website', 200)
    if (website) return successfulBotResponse()

    const firstName = readString(body, 'firstName', 80)
    const lastName = readString(body, 'lastName', 80)
    const email = readString(body, 'email', 254)
    const phone = readString(body, 'phone', 40)
    const company = readString(body, 'company', 120)
    const service = readString(body, 'service', 80)
    const budget = readString(body, 'budget', 80)
    const timeline = readString(body, 'timeline', 80)
    const message = readString(body, 'message', 4_000)

    if ([firstName, lastName, email, phone, company, service, budget, timeline, message].includes(null)) {
      return NextResponse.json({ error: 'One or more fields are invalid or too long.' }, { status: 400 })
    }
    if (!firstName) {
      return NextResponse.json({ error: 'First name is required.' }, { status: 400 })
    }
    if (!lastName) {
      return NextResponse.json({ error: 'Last name is required.' }, { status: 400 })
    }
    if (!email) {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }
    if (!message) {
      return NextResponse.json({ error: 'Please tell us about your project.' }, { status: 400 })
    }
    if (service && !SERVICES.has(service)) {
      return NextResponse.json({ error: 'Please select a valid service.' }, { status: 400 })
    }
    if (timeline && !TIMELINES.has(timeline)) {
      return NextResponse.json({ error: 'Please select a valid timeline.' }, { status: 400 })
    }
    if (budget && !BUDGETS.has(budget)) {
      return NextResponse.json({ error: 'Please select a valid budget.' }, { status: 400 })
    }

    const fields: ContactFields = {
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      company: company || undefined,
      service: service || undefined,
      budget: budget || undefined,
      timeline: timeline || undefined,
      message,
    }

    const { error } = await getResend().emails.send({
      from: 'Media Bar Website <forms@mediabarproductions.com>',
      to: 'contact@mediabarproductions.com',
      replyTo: email,
      subject: `New Project Inquiry from ${firstName.replace(/[\r\n]/g, ' ')} ${lastName.replace(/[\r\n]/g, ' ')}`,
      html: buildHtml(fields),
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or call us at 210-279-9442.' },
        { status: 500 },
      )
    }

    return successfulBotResponse()
  } catch (error) {
    console.error('[contact] Unhandled error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us at 210-279-9442.' },
      { status: 500 },
    )
  }
}
