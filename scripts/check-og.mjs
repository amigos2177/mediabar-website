const BASE = 'http://localhost:3000'

const ROUTES = [
  '/',
  '/video-production',
  '/video-production/aerial',
  '/video-production/commercials',
  '/video-production/corporate',
  '/video-production/events',
  '/video-production/food',
  '/video-production/interview',
  '/video-production/live-streaming',
  '/video-production/medical',
  '/video-production/motion-graphics',
  '/video-production/post-production',
  '/video-production/real-estate',
  '/locations/austin',
  '/locations/dallas',
  '/locations/houston',
  '/locations/san-antonio',
  '/pricing',
  '/about',
  '/about/awards',
  '/clients',
  '/contact',
  '/faq',
  '/photography',
  '/studio',
  '/work',
  '/blog',
]

const DETAIL_ROUTES = ['/', '/video-production/corporate', '/locations/san-antonio', '/pricing']

async function fetchWithRetry(url, retries = 5, delayMs = 1500) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return await res.text()
      throw new Error(`HTTP ${res.status}`)
    } catch (e) {
      if (i < retries - 1) {
        await new Promise(r => setTimeout(r, delayMs))
      } else {
        throw new Error(`Failed to fetch ${url} after ${retries} attempts: ${e.message}`)
      }
    }
  }
}

function attr(html, tag, attrName) {
  // Match <tag ... attrName="value" ...> or <tag ... attrName='value' ...>
  const re = new RegExp(`<${tag}[^>]*\\s${attrName}=["']([^"']+)["']`, 'i')
  return (html.match(re) || [])[1] ?? null
}

function metaProp(html, property) {
  // property="og:X" content="..." or content="..." property="og:X"
  const fwd = new RegExp(`<meta[^>]*property=["']${property}["'][^>]*content=["']([^"']+)["']`, 'i')
  const rev = new RegExp(`<meta[^>]*content=["']([^"']+)["'][^>]*property=["']${property}["']`, 'i')
  return (html.match(fwd) || html.match(rev) || [])[1] ?? null
}

function metaName(html, name) {
  const fwd = new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']+)["']`, 'i')
  const rev = new RegExp(`<meta[^>]*content=["']([^"']+)["'][^>]*name=["']${name}["']`, 'i')
  return (html.match(fwd) || html.match(rev) || [])[1] ?? null
}

function canonical(html) {
  const fwd = /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i
  const rev = /<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i
  return (html.match(fwd) || html.match(rev) || [])[1] ?? null
}

// ── main ──────────────────────────────────────────────────────────────────────

let pass = 0, fail = 0
const cache = {}

for (const route of ROUTES) {
  const html = await fetchWithRetry(`${BASE}${route}`)
  cache[route] = html

  const can = canonical(html)
  const ogUrl = metaProp(html, 'og:url')

  const ogImage = metaProp(html, 'og:image')
  const urlMatch = can && ogUrl && can === ogUrl
  const imgPresent = !!ogImage

  if (urlMatch && imgPresent) {
    console.log(`PASS  ${route}`)
    pass++
  } else {
    console.log(`FAIL  ${route}`)
    if (!urlMatch) {
      console.log(`      canonical : ${can}`)
      console.log(`      og:url    : ${ogUrl}`)
    }
    if (!imgPresent) {
      console.log(`      og:image  : (missing)`)
    }
    fail++
  }
}

console.log(`\nSummary: ${pass} PASS  ${fail} FAIL  (${ROUTES.length} routes)\n`)

// ── detail tags ───────────────────────────────────────────────────────────────

console.log('─'.repeat(64))
console.log('Detail tags for selected routes')
console.log('─'.repeat(64))

for (const route of DETAIL_ROUTES) {
  const html = cache[route]
  const ogTitle   = metaProp(html, 'og:title')
  const ogUrl     = metaProp(html, 'og:url')
  const ogImage   = metaProp(html, 'og:image')
  const twCard    = metaName(html, 'twitter:card')

  console.log(`\n${route}`)
  console.log(`  og:title     ${ogTitle ?? '(missing)'}`)
  console.log(`  og:url       ${ogUrl   ?? '(missing)'}`)
  console.log(`  og:image     ${ogImage ?? '(missing)'}`)
  console.log(`  twitter:card ${twCard  ?? '(missing)'}`)
}
