import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const DIR = join(__dir, 'scraped-posts')

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

for (const [id, date] of Object.entries(PUBLISH_DATES)) {
  const path = join(DIR, `${id}.json`)
  try {
    const data = JSON.parse(readFileSync(path, 'utf8'))
    if (data.publishDate === date) { console.log(`  ${id}: already correct (${date})`); continue }
    data.publishDate = date
    writeFileSync(path, JSON.stringify(data, null, 2))
    console.log(`✓ ${id}: set publishDate → ${date}`)
  } catch {
    console.error(`✗ ${id}: file not found`)
  }
}
