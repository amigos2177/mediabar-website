import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const IN_DIR = join(__dir, 'scraped-posts')
const OUT_DIR = join(__dir, '..', 'content', 'blog')
mkdirSync(OUT_DIR, { recursive: true })

const SLUG_MAP = {
  45: 'keeping-creative-in-san-antonio',
  44: 'san-antonio-corporate-video-production-competitive',
  43: 'best-video-production-san-antonio',
  42: 'elevate-your-brand-with-expert-video-production',
  41: 'boost-seo-with-video-production-ai-era',
  40: 'san-antonio-conference-video-services',
  38: 'importance-of-video-production-services',
  37: 'san-antonio-video-production-talent-local-companies',
  36: 'hire-local-video-production-companies-san-antonio',
  34: 'importance-of-corporate-video-production',
}

const IDS = [45, 44, 43, 42, 41, 40, 38, 37, 36, 34]

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '—')
    .replace(/​/g, '') // zero-width space
}

function legacySlugFragment(url) {
  // e.g. http://mediabarproductions.com/News/Get/45/why-keeping-creative-in-san-antonio-matters-n
  const m = url.match(/\/News\/Get\/(\d+)\/([^/]+)/)
  return m ? `/${m[2]}` : ''
}

function htmlToMarkdown(html) {
  let md = html

  // Remove the wrapper div(s) and nav link ("Back to News") and date heading
  md = md.replace(/<div[^>]*>/gi, '').replace(/<\/div>/gi, '')
  md = md.replace(/<p[^>]*>\s*<a[^>]*>Back to News<\/a>\s*<\/p>/gi, '')
  md = md.replace(/<h4[^>]*class=["'][^"']*date[^"']*["'][^>]*>[^<]+<\/h4>/gi, '')

  // Strip the article's own h1 (already in frontmatter title)
  md = md.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '')

  // Iframes — convert YouTube embeds to a markdown link, strip others
  md = md.replace(
    /<iframe[^>]+src=["']https?:\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/embed\/([^?"']+)[^"']*["'][^>]*>[\s\S]*?<\/iframe>/gi,
    (_, videoId) => `\n[Watch on YouTube](https://www.youtube.com/watch?v=${videoId})\n`
  )
  md = md.replace(/<iframe[\s\S]*?<\/iframe>/gi, '')

  // Links FIRST — so nested <a> inside <strong> etc keeps its href
  md = md.replace(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, inner) => {
    const text = stripTags(inner).trim()
    if (!text) return ''
    return `[${text}](${href})`
  })

  // Headings
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, inner) => `\n## ${stripTags(inner).trim()}\n`)
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, inner) => `\n### ${stripTags(inner).trim()}\n`)
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, inner) => `\n#### ${stripTags(inner).trim()}\n`)

  // Bold / italic
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, inner) => `**${stripTags(inner).trim()}**`)
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, (_, inner) => `**${stripTags(inner).trim()}**`)
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, (_, inner) => `_${stripTags(inner).trim()}_`)
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, (_, inner) => `_${stripTags(inner).trim()}_`)

  // Images
  md = md.replace(/<img[^>]+src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?[^>]*\/?>/gi, (match, src) => {
    const altMatch = match.match(/alt=["']([^"']*)["']/i)
    const altText = altMatch ? altMatch[1] : ''
    return `\n![${altText}](${src})\n`
  })

  // Lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => {
    const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    return '\n' + items.map(m => `- ${stripTags(m[1]).trim()}`).join('\n') + '\n'
  })
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => {
    const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    return '\n' + items.map((m, i) => `${i + 1}. ${stripTags(m[1]).trim()}`).join('\n') + '\n'
  })
  // stray <li> not caught above
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, inner) => `- ${stripTags(inner).trim()}`)

  // Paragraphs — convert to double-newline blocks
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => {
    const text = inner.replace(/<br\s*\/?>/gi, '\n').trim()
    const clean = stripTags(text).trim()
    return clean ? `\n${clean}\n` : ''
  })

  // Line breaks
  md = md.replace(/<br\s*\/?>/gi, '\n')

  // Strip any remaining tags
  md = md.replace(/<[^>]+>/g, '')

  // Decode entities
  md = decodeEntities(md)

  // Strip leading tabs/spaces from each line (artifact of indented HTML source)
  md = md.split('\n').map(line => line.replace(/^[\t ]+/, '')).join('\n')

  // Collapse 3+ consecutive blank lines to 2
  md = md.replace(/\n{3,}/g, '\n\n')

  return md.trim()
}

function stripTags(str) {
  return str.replace(/<[^>]+>/g, '')
}

function plainText(html) {
  return decodeEntities(stripTags(html).replace(/\s+/g, ' ')).trim()
}

function isMetaLine(t) {
  if (t.length < 40) return true
  if (/^by\s+\w/i.test(t)) return true                       // bylines: "By Ruben Garcia..."
  if (/watch on youtube/i.test(t)) return true               // YouTube link text
  if (/^https?:\/\//i.test(t)) return true                   // bare URLs
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t)) return true      // date strings M/D/YYYY
  if (/^(published|written|posted|author)\b/i.test(t)) return true
  if (/back to news/i.test(t)) return true                   // nav breadcrumb
  if ((t.match(/ - /g) || []).length >= 2) return true       // "Company - City - Service" taglines
  return false
}

function excerpt(bodyHtml, maxLen = 160) {
  const paras = [...bodyHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
  let text = ''
  for (const m of paras) {
    const t = plainText(m[1])
    if (t && !isMetaLine(t)) { text = t; break }
  }
  if (!text) text = plainText(bodyHtml)
  return text.slice(0, maxLen).replace(/\s+\S*$/, '').trim()
}

for (const id of IDS) {
  const slug = SLUG_MAP[id]
  const inPath = join(IN_DIR, `${id}.json`)
  const outPath = join(OUT_DIR, `${slug}.md`)

  let raw
  try {
    raw = JSON.parse(readFileSync(inPath, 'utf8'))
  } catch {
    console.error(`✗ ${id}: file not found`)
    continue
  }

  const title = decodeEntities(raw.title || '').replace(/"/g, '\\"')
  const date = raw.publishDate || ''
  const legacyUrl = `/News/Get/${id}${legacySlugFragment(raw.url)}`
  const ex = excerpt(raw.bodyHtml)
  const body = htmlToMarkdown(raw.bodyHtml)

  const frontmatter = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
excerpt: "${ex.replace(/"/g, '\\"')}"
legacyId: ${id}
legacyUrl: "${legacyUrl}"
---`

  const output = `${frontmatter}\n\n${body}\n`
  writeFileSync(outPath, output)
  console.log(`✓ ${id} → content/blog/${slug}.md  (${body.length} chars)`)
}

console.log('\nDone.')
