import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dir, 'scraped-posts')
mkdirSync(OUT_DIR, { recursive: true })

const URL = 'http://mediabarproductions.com/News/Get/45/why-keeping-creative-in-san-antonio-matters-n'
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

const res = await fetch(URL, { headers: { 'User-Agent': UA, 'Accept': 'text/html' }, redirect: 'follow' })
if (!res.ok) { console.error(`HTTP ${res.status}`); process.exit(1) }
const html = await res.text()

// Save raw HTML
const rawPath = join(OUT_DIR, '_raw-45.html')
writeFileSync(rawPath, html)
console.log(`Saved raw HTML to scripts/scraped-posts/_raw-45.html (${html.length} chars)\n`)

// Title
const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
console.log('=== TITLE ===')
console.log(titleMatch?.[1]?.trim() ?? '(none)')

// All class names containing post|article|content|news
console.log('\n=== RELEVANT CLASS NAMES ===')
const classMatches = [...html.matchAll(/class=["']([^"']+)["']/gi)]
const relevant = new Set()
for (const m of classMatches) {
  for (const cls of m[1].split(/\s+/)) {
    if (/post|article|content|news|body|entry|text/i.test(cls)) relevant.add(cls)
  }
}
for (const cls of [...relevant].sort()) console.log(' ', cls)

// All divs with more than 1000 chars of inner content — print class + first 200 chars
console.log('\n=== LARGE DIV BLOCKS (>1000 chars inner content) ===')
const divMatches = [...html.matchAll(/<div([^>]*)>([\s\S]{1000,}?)<\/div>/gi)]
const seen = new Set()
for (const m of divMatches) {
  const attrs = m[1]
  const inner = m[2]
  const classMatch = attrs.match(/class=["']([^"']+)["']/i)
  const idMatch    = attrs.match(/id=["']([^"']+)["']/i)
  const key = `${classMatch?.[1]}-${idMatch?.[1]}`
  if (seen.has(key)) continue
  seen.add(key)
  const snippet = inner.replace(/\s+/g, ' ').slice(0, 200)
  console.log(`\n  class="${classMatch?.[1] ?? ''}"  id="${idMatch?.[1] ?? ''}"  (${inner.length} chars)`)
  console.log(`  → ${snippet}`)
}
