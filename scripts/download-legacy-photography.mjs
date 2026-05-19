import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dir, '../public/images/photography')
const BASE = 'http://mediabarproductions.com'
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

mkdirSync(OUT_DIR, { recursive: true })

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

function cleanFilename(src) {
  // Strip query string, decode URI, and sanitize spaces
  const raw = decodeURIComponent(src.split('?')[0])
  return basename(raw).replace(/\s+/g, '-')
}

async function fetchWithRetry(url) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, 'Accept': 'image/*,*/*' },
      redirect: 'follow',
    })
    if (res.ok) return res
    if (attempt === 1) {
      console.log(`    → HTTP ${res.status}, retrying...`)
      await sleep(1500)
    } else {
      throw new Error(`HTTP ${res.status}`)
    }
  }
}

async function run() {
  // Step 1: fetch the photography page
  console.log('Fetching photography page...')
  let html
  try {
    const res = await fetch(`${BASE}/photography`, {
      headers: { 'User-Agent': UA, 'Accept': 'text/html' },
      redirect: 'follow',
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    html = await res.text()
  } catch (err) {
    console.error(`Failed to load photography page: ${err.message}`)
    process.exit(1)
  }

  // Step 2: extract /Content/img/set/21/ image URLs
  const matches = [...html.matchAll(/src=["']([^"']*\/Content\/img\/set\/21\/[^"']+)["']/gi)]
  const srcs = [...new Set(matches.map(m => m[1]))]

  if (!srcs.length) {
    console.error('No /Content/img/set/21/ images found on the page.')
    process.exit(1)
  }

  console.log(`Found ${srcs.length} images to download.\n`)

  let ok = 0, failed = 0

  for (let i = 0; i < srcs.length; i++) {
    const src = srcs[i]
    // Build absolute URL (strip query string for download — original file, not resized)
    const cleanSrc = src.split('?')[0]
    const url = cleanSrc.startsWith('http') ? cleanSrc : `${BASE}${cleanSrc}`
    const filename = cleanFilename(src)
    const outPath = join(OUT_DIR, filename)
    const label = `(${i + 1}/${srcs.length})`

    try {
      const res = await fetchWithRetry(url)
      const buf = Buffer.from(await res.arrayBuffer())
      writeFileSync(outPath, buf)
      const kb = (buf.length / 1024).toFixed(0)
      console.log(`✓ Downloaded ${filename} ${label} — ${kb} KB`)
      ok++
    } catch (err) {
      console.error(`✗ Failed ${filename} ${label}: ${err.message}`)
      failed++
    }

    if (i < srcs.length - 1) await sleep(500)
  }

  console.log(`\nDone. ${ok} downloaded, ${failed} failed.`)
  console.log(`Saved to: public/images/photography/`)
}

run()
