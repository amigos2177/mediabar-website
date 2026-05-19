import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const DIR = join(__dir, 'scraped-posts')
const IDS = [45, 41, 42, 43, 44, 40, 38, 36, 37, 34, 35]

function decodeEntities(str) {
  return str
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/​/g, '')  // zero-width space (appears in some titles)
    .trim()
}

const posts = IDS.map((id) => {
  const path = join(DIR, `${id}.json`)
  try {
    const data = JSON.parse(readFileSync(path, 'utf8'))
    return { id, ok: true, data }
  } catch {
    return { id, ok: false, error: 'File missing or unreadable' }
  }
})

// Detect duplicate body lengths (suggests nav-only content)
const bodyLengths = posts.filter(p => p.ok).map(p => (p.data.bodyHtml || '').length)
const lengthCounts = {}
for (const l of bodyLengths) lengthCounts[l] = (lengthCounts[l] || 0) + 1
const suspectLengths = new Set(Object.entries(lengthCounts).filter(([, c]) => c > 1).map(([l]) => Number(l)))

// Print table
const COL = { id: 3, title: 48, date: 12, body: 6, imgs: 4, flag: 30 }
const hr = '-'.repeat(COL.id + COL.title + COL.date + COL.body + COL.imgs + COL.flag + 14)

console.log()
console.log(
  'ID'.padEnd(COL.id), '|',
  'Title (48 chars)'.padEnd(COL.title), '|',
  'Date'.padEnd(COL.date), '|',
  'Body'.padStart(COL.body), '|',
  'Imgs'.padStart(COL.imgs), '|',
  'Flag'
)
console.log(hr)

const suspicious = []

for (const post of posts) {
  if (!post.ok) {
    console.log(String(post.id).padEnd(COL.id), '|', `ERROR: ${post.error}`)
    suspicious.push({ id: post.id, reason: post.error })
    continue
  }

  const { data } = post
  const title  = decodeEntities(data.title || '').slice(0, COL.title).padEnd(COL.title)
  const date   = (data.publishDate || 'missing').slice(0, COL.date).padEnd(COL.date)
  const blen   = (data.bodyHtml || '').length
  const imgs   = (data.images || []).length

  let flag = '✓ OK'
  let reason = null
  if (blen < 500) {
    flag = '⚠ SHORT'
    reason = `body only ${blen} chars`
  } else if (suspectLengths.has(blen)) {
    flag = '⚠ SAME SIZE (possible nav-only)'
    reason = `body length ${blen} shared by ${lengthCounts[blen]} posts`
  }

  if (reason) suspicious.push({ id: post.id, reason })

  console.log(
    String(post.id).padEnd(COL.id), '|',
    title, '|',
    date, '|',
    String(blen).padStart(COL.body), '|',
    String(imgs).padStart(COL.imgs), '|',
    flag
  )
}

console.log(hr)

// Summary
const passed = posts.filter(p => p.ok && !suspicious.find(s => s.id === p.id)).length
console.log()
console.log(`Quality check: ${passed}/${IDS.length} posts passed`)

if (suspicious.length) {
  console.log()
  console.log('Suspicious posts:')
  for (const s of suspicious) console.log(`  ID ${s.id}: ${s.reason}`)
} else {
  console.log('No suspicious posts detected.')
}

// Spot-check: first 300 chars of post 45 body
const post45 = posts.find(p => p.id === 45)
if (post45?.ok) {
  const snippet = (post45.data.bodyHtml || '').slice(0, 300).replace(/\s+/g, ' ')
  console.log()
  console.log('--- Spot-check: ID 45 body (first 300 chars) ---')
  console.log(snippet)
}
