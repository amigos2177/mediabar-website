import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dir, 'scraped-posts')
mkdirSync(OUT_DIR, { recursive: true })

const ALL_URLS = [
  'http://mediabarproductions.com/News/Get/45/why-keeping-creative-in-san-antonio-matters-n',
  'http://mediabarproductions.com/News/Get/41/stay-ahead-in-the-ai-era-boost-your-seo-with',
  'http://mediabarproductions.com/News/Get/42/elevate-your-brand-with-expert-video-producti',
  'http://mediabarproductions.com/News/Get/43/unlock-your-brands-potential-with-the-best-vi',
  'http://mediabarproductions.com/News/Get/44/why-san-antonio-businesses-need-corporate-vid',
  'http://mediabarproductions.com/News/Get/40/capture-your-conference-san-antonios-best-con',
  'http://mediabarproductions.com/News/Get/38/the-importance-of-video-production-services-f',
  'http://mediabarproductions.com/News/Get/36/how-hiring-local-video-production-companies-c',
  'http://mediabarproductions.com/News/Get/37/showcasing-san-antonios-video-production-tale',
  'http://mediabarproductions.com/News/Get/34/the-importance-of-corporate-video-production',
  'http://mediabarproductions.com/News/Get/35/unpacking-our-latest-shoot-good-vibes-and-gre',
]

// Authoritative publish dates (ISO format) — sourced from /News index page
const PUBLISH_DATES = {
  45: '2025-07-08',
  41: '2024-10-21',
  42: '2024-10-21',
  43: '2024-10-21',
  44: '2024-10-21',
  40: '2024-09-23',
  38: '2024-05-15',
  36: '2023-09-27',
  37: '2023-09-27',
  34: '2023-09-26',
  35: '2023-09-26',
}

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

// Filter URLs to only the IDs passed as CLI args (e.g. node scrape-blog-posts.mjs 45 41 44 35)
// If no args, process all.
const filterIds = process.argv.slice(2).map(String)
const URLS = filterIds.length
  ? ALL_URLS.filter(u => filterIds.includes(u.match(/\/News\/Get\/(\d+)\//)[1]))
  : ALL_URLS

function idFromUrl(url) {
  return url.match(/\/News\/Get\/(\d+)\//)[1]
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function fetchWithRetry(url) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' },
      redirect: 'follow',
    })
    if (res.ok) return res
    if (attempt === 1) {
      console.log(`  → HTTP ${res.status}, retrying once...`)
      await sleep(2000)
    } else {
      throw new Error(`HTTP ${res.status}`)
    }
  }
}

function extract(html, url) {
  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
  const title = titleMatch ? titleMatch[1].trim() : ''

  // Meta description
  const metaMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)
  const metaDescription = metaMatch ? metaMatch[1].trim() : ''

  // Date — this site puts it in <h4 class="date color-yellow">M/D/YYYY</h4>
  const dateMatch = html.match(/<h4[^>]*class=["'][^"']*date[^"']*["'][^>]*>([^<]+)<\/h4>/i)
  const publishDateRaw = dateMatch ? dateMatch[1].trim() : ''

  // Body — the site wraps article content in HTML comments:
  //   <!-- Start Render Body --> ... <!-- End Render Body -->
  let bodyHtml = ''
  const renderBodyMatch = html.match(/<!--\s*Start Render Body\s*-->([\s\S]*?)<!--\s*End Render Body\s*-->/i)
  if (renderBodyMatch) {
    bodyHtml = renderBodyMatch[1]
  } else {
    // Fallback: look for <main>, then <article>, then largest <p>-rich block
    const mainMatch = html.match(/<main[^>]*>([\s\S]+?)<\/main>/i)
    if (mainMatch) {
      bodyHtml = mainMatch[1]
    } else {
      const articleMatch = html.match(/<article[^>]*>([\s\S]+?)<\/article>/i)
      bodyHtml = articleMatch ? articleMatch[1] : html
    }
  }

  // Extract inline images from body (before cleaning)
  const imgMatches = [...bodyHtml.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)]
  const images = imgMatches.map(m => {
    const src = m[1]
    const altMatch = m[0].match(/alt=["']([^"']*)["']/i)
    return { src: src.startsWith('http') ? src : new URL(src, url).href, alt: altMatch ? altMatch[1] : '' }
  })

  // Clean body
  const cleaned = bodyHtml
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim()

  return { title, metaDescription, publishDateRaw, bodyHtml: cleaned, images }
}

async function scrapeAll() {
  if (filterIds.length) console.log(`Scraping ${filterIds.length} post(s): ${filterIds.join(', ')}\n`)

  for (const url of URLS) {
    const id = idFromUrl(url)
    try {
      const res = await fetchWithRetry(url)
      const html = await res.text()
      const data = extract(html, url)

      // Use hardcoded date map (authoritative); fall back to what was found in HTML
      const publishDate = PUBLISH_DATES[id] ?? data.publishDateRaw

      const output = {
        id,
        url,
        scrapedAt: new Date().toISOString(),
        title: data.title,
        metaDescription: data.metaDescription,
        publishDate,
        images: data.images,
        bodyHtml: data.bodyHtml,
      }

      const outPath = join(OUT_DIR, `${id}.json`)
      writeFileSync(outPath, JSON.stringify(output, null, 2))

      const shortTitle = data.title.slice(0, 55)
      console.log(`✓ Fetched post ${id} ("${shortTitle}...")`)
      console.log(`  date: ${publishDate || '✗ missing'}  images: ${data.images.length}  body: ${data.bodyHtml.length} chars`)
    } catch (err) {
      console.error(`✗ Failed post ${id} (${url}): ${err.message}`)
    }

    if (url !== URLS.at(-1)) await sleep(1000)
  }

  console.log('\nDone. Files written to scripts/scraped-posts/')
}

scrapeAll()
