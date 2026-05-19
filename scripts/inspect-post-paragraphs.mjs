import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const id = process.argv[2]
if (!id) { console.error('Usage: node inspect-post-paragraphs.mjs <id>'); process.exit(1) }

const data = JSON.parse(readFileSync(join(__dir, 'scraped-posts', `${id}.json`), 'utf8'))
const paras = [...data.bodyHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]

console.log(`Post ${id} — first ${Math.min(6, paras.length)} paragraphs:\n`)
paras.slice(0, 6).forEach((m, i) => {
  const text = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  console.log(`[${i}] (${text.length} chars) ${JSON.stringify(text.slice(0, 120))}`)
})
