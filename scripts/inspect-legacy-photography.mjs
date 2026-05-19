const URL = 'http://mediabarproductions.com/photography'
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

function extract(html) {
  const get = (pattern) => { const m = html.match(pattern); return m ? m[1].trim() : null }
  const getAll = (pattern) => [...html.matchAll(pattern)].map(m => m[1].trim())

  const title = get(/<title[^>]*>([^<]+)<\/title>/i)
  const metaDesc = get(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
    ?? get(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)

  const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(m => ({ tag: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() }))
    .filter(h => h.text)

  const images = [...html.matchAll(/<img[^>]+>/gi)].map(m => {
    const src = m[0].match(/src=["']([^"']+)["']/i)?.[1] ?? ''
    const alt = m[0].match(/alt=["']([^"']*?)["']/i)?.[1] ?? ''
    return { src, alt }
  }).filter(i => i.src && !i.src.includes('modernizr') && !i.src.includes('favicon'))

  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]{10,600}?)<\/p>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, '').trim())
    .filter(p => p.length > 20)
    .slice(0, 10)

  return { title, metaDesc, headings, images, paragraphs }
}

async function run() {
  let html
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 12000)
    const res = await fetch(URL, {
      headers: { 'User-Agent': UA, 'Accept': 'text/html' },
      redirect: 'follow',
      signal: controller.signal,
    })
    clearTimeout(timer)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    html = await res.text()
  } catch (err) {
    console.error(`Failed to fetch ${URL}: ${err.message}`)
    process.exit(1)
  }

  const { title, metaDesc, headings, images, paragraphs } = extract(html)

  console.log('=== TITLE ===')
  console.log(title ?? '(none)')

  console.log('\n=== META DESCRIPTION ===')
  console.log(metaDesc ?? '(none)')

  console.log('\n=== HEADINGS ===')
  if (headings.length) headings.forEach(h => console.log(`  [${h.tag}] ${h.text}`))
  else console.log('  (none found)')

  console.log(`\n=== IMAGES (${images.length} total) ===`)
  if (images.length) images.forEach(i => console.log(`  src: ${i.src}\n  alt: ${i.alt || '(empty)'}\n`))
  else console.log('  (none found)')

  console.log('=== PARAGRAPHS (first 10) ===')
  if (paragraphs.length) paragraphs.forEach((p, i) => console.log(`  [${i + 1}] ${p.slice(0, 300)}${p.length > 300 ? '…' : ''}\n`))
  else console.log('  (none found)')
}

run()
