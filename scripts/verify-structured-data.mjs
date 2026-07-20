import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const appOutput = path.join(root, '.next/server/app')
const failures = []

function read(relativePath) {
  const file = path.join(appOutput, relativePath)
  if (!fs.existsSync(file)) {
    failures.push(`${relativePath}: build output is missing`)
    return ''
  }
  return fs.readFileSync(file, 'utf8')
}

function schemas(relativePath) {
  const html = read(relativePath)
  const matches = [...html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
  )]

  return matches.flatMap((match) => {
    try {
      const data = JSON.parse(match[1])
      return Array.isArray(data['@graph']) ? data['@graph'] : [data]
    } catch (error) {
      failures.push(`${relativePath}: invalid JSON-LD (${error.message})`)
      return []
    }
  })
}

function hasType(nodes, type) {
  return nodes.some((node) => {
    const value = node['@type']
    return Array.isArray(value) ? value.includes(type) : value === type
  })
}

function expectType(relativePath, type) {
  const nodes = schemas(relativePath)
  if (!hasType(nodes, type)) failures.push(`${relativePath}: missing ${type}`)
  return nodes
}

const homeNodes = schemas('index.html')
for (const type of ['WebSite', 'LocalBusiness', 'VideoObject']) {
  if (!hasType(homeNodes, type)) failures.push(`index.html: missing ${type}`)
}

const business = homeNodes.find((node) => node['@type'] === 'LocalBusiness')
if (!business?.hasOfferCatalog) {
  failures.push('index.html: LocalBusiness is missing hasOfferCatalog')
}

const servicePages = [
  'video-production.html',
  'video-production/corporate.html',
  'video-production/commercials.html',
  'video-production/events.html',
  'video-production/interview.html',
  'video-production/medical.html',
  'video-production/aerial.html',
  'video-production/motion-graphics.html',
  'video-production/live-streaming.html',
  'video-production/post-production.html',
  'video-production/food.html',
  'video-production/real-estate.html',
]

for (const page of servicePages) {
  const nodes = expectType(page, 'Service')
  const service = nodes.find((node) => node['@type'] === 'Service')
  if (!String(service?.['@id'] ?? '').endsWith('#service')) {
    failures.push(`${page}: Service is missing a stable @id`)
  }
  if (service?.provider?.['@id'] !== 'https://www.mediabarproductions.com/#business') {
    failures.push(`${page}: Service provider is not connected to #business`)
  }
}

const blogDir = path.join(appOutput, 'blog')
for (const entry of fs.readdirSync(blogDir, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) continue
  const page = `blog/${entry.name}`
  const nodes = expectType(page, 'BlogPosting')
  const article = nodes.find((node) => node['@type'] === 'BlogPosting')
  if (!String(article?.['@id'] ?? '').endsWith('#article')) {
    failures.push(`${page}: BlogPosting is missing a stable @id`)
  }
  if (!article?.author || !article?.publisher || !article?.mainEntityOfPage) {
    failures.push(`${page}: BlogPosting entity relationships are incomplete`)
  }
}

const watchDir = path.join(appOutput, 'work/watch')
for (const entry of fs.readdirSync(watchDir, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) continue
  const page = `work/watch/${entry.name}`
  const nodes = expectType(page, 'VideoObject')
  const video = nodes.find((node) => node['@type'] === 'VideoObject')
  if (video?.publisher?.['@id'] !== 'https://www.mediabarproductions.com/#business') {
    failures.push(`${page}: VideoObject publisher is not connected to #business`)
  }
}

const robots = read('robots.txt.body')
for (const bot of ['OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot']) {
  if (!robots.includes(`User-Agent: ${bot}`)) {
    failures.push(`robots.txt: missing ${bot}`)
  }
}

const llms = fs.readFileSync(path.join(root, 'public/llms.txt'), 'utf8')
for (const section of ['## Primary page roles', '## Services', '## Planning guides']) {
  if (!llms.includes(section)) failures.push(`llms.txt: missing ${section}`)
}

if (failures.length) {
  console.error(`Structured-data verification failed (${failures.length})`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(
  `Structured-data verification passed: ${servicePages.length} service pages, `
  + `${fs.readdirSync(blogDir).filter((name) => name.endsWith('.html')).length} blog posts, `
  + `${fs.readdirSync(watchDir).filter((name) => name.endsWith('.html')).length} watch pages.`,
)
