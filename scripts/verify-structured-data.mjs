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

function walkNodes(node, visit) {
  if (!node || typeof node !== 'object') return
  if (Array.isArray(node)) {
    node.forEach((item) => walkNodes(item, visit))
    return
  }
  visit(node)
  for (const value of Object.values(node)) walkNodes(value, visit)
}

function isType(node, type) {
  const value = node?.['@type']
  return value === type || (Array.isArray(value) && value.includes(type))
}

function videoObjects(relativePath) {
  const found = []
  for (const data of schemas(relativePath)) {
    walkNodes(data, (node) => {
      if (isType(node, 'VideoObject')) found.push(node)
    })
  }
  return found
}

function expectNoVideoObject(relativePath) {
  const videos = videoObjects(relativePath)
  if (videos.length) {
    failures.push(`${relativePath}: expected 0 VideoObject nodes, found ${videos.length}`)
  }
}

function expectWatchPageVideo(relativePath, canonicalUrl) {
  const videos = videoObjects(relativePath)
  if (videos.length !== 1) {
    failures.push(`${relativePath}: expected 1 VideoObject, found ${videos.length}`)
    return
  }
  const video = videos[0]
  if (video?.publisher?.['@id'] !== 'https://www.mediabarproductions.com/#business') {
    failures.push(`${relativePath}: VideoObject publisher is not connected to #business`)
  }
  if (video?.url !== canonicalUrl) {
    failures.push(`${relativePath}: VideoObject url must be ${canonicalUrl}`)
  }
  const mainEntity = video?.mainEntityOfPage
  const mainEntityUrl = typeof mainEntity === 'string' ? mainEntity : mainEntity?.url || mainEntity?.['@id']
  if (!String(mainEntityUrl ?? '').startsWith(canonicalUrl)) {
    failures.push(`${relativePath}: VideoObject mainEntityOfPage must point at ${canonicalUrl}`)
  }
  for (const field of ['name', 'description', 'thumbnailUrl', 'uploadDate', 'embedUrl', 'duration']) {
    if (!video?.[field]) failures.push(`${relativePath}: VideoObject is missing ${field}`)
  }
}

function expectType(relativePath, type) {
  const nodes = schemas(relativePath)
  if (!hasType(nodes, type)) failures.push(`${relativePath}: missing ${type}`)
  return nodes
}

const homeNodes = schemas('index.html')
for (const type of ['WebSite', 'LocalBusiness', 'FAQPage']) {
  if (!hasType(homeNodes, type)) failures.push(`index.html: missing ${type}`)
}
expectNoVideoObject('index.html')

const homeFaq = homeNodes.find((node) => node['@type'] === 'FAQPage')
const homeQuestions = Array.isArray(homeFaq?.mainEntity)
  ? homeFaq.mainEntity.map((item) => item?.name)
  : []
for (const question of [
  'What does Media Bar produce?',
  'What does full-service production include?',
  'Who owns the footage?',
  'How is a project priced?',
]) {
  if (!homeQuestions.includes(question)) {
    failures.push(`index.html: FAQPage is missing "${question}"`)
  }
}

const business = homeNodes.find((node) => node['@type'] === 'LocalBusiness')
if (!business?.hasOfferCatalog) {
  failures.push('index.html: LocalBusiness is missing hasOfferCatalog')
}
if (business?.publishingPrinciples !== 'https://www.mediabarproductions.com/about/editorial-policy') {
  failures.push('index.html: LocalBusiness is missing publishingPrinciples')
}

const aboutNodes = schemas('about.html')
const founder = aboutNodes.find((node) => node['@type'] === 'Person')
if (founder?.['@id'] !== 'https://www.mediabarproductions.com/about#founder') {
  failures.push('about.html: founder Person identity is incomplete')
}
if (!read('about.html').includes('id="founder"')) {
  failures.push('about.html: visible founder anchor is missing')
}

const policyNodes = expectType('about/editorial-policy.html', 'WebPage')
const policy = policyNodes.find((node) => node['@type'] === 'WebPage')
if (policy?.publisher?.['@id'] !== 'https://www.mediabarproductions.com/#business') {
  failures.push('about/editorial-policy.html: publisher is not connected to #business')
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
  expectNoVideoObject(page)
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
  if (
    !article?.author
    || !article?.publisher
    || !article?.mainEntityOfPage
    || !article?.reviewedBy
    || !article?.publishingPrinciples
  ) {
    failures.push(`${page}: BlogPosting entity relationships are incomplete`)
  }
}

const watchDir = path.join(appOutput, 'work/watch')
for (const entry of fs.readdirSync(watchDir, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) continue
  const slug = entry.name.replace(/\.html$/, '')
  const page = `work/watch/${entry.name}`
  expectWatchPageVideo(page, `https://www.mediabarproductions.com/work/watch/${slug}`)
}

const answersDir = path.join(appOutput, 'resources/media-bar-answers')
for (const entry of fs.readdirSync(answersDir, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) continue
  const slug = entry.name.replace(/\.html$/, '')
  const page = `resources/media-bar-answers/${entry.name}`
  expectWatchPageVideo(
    page,
    `https://www.mediabarproductions.com/resources/media-bar-answers/${slug}`,
  )
}

expectNoVideoObject('work.html')
expectNoVideoObject('work/rbfcu-go-beyond-banking.html')
expectNoVideoObject('resources/video-production-faq.html')
expectNoVideoObject('resources/media-bar-answers.html')

// GSC 8/9/26 "Video not processed": these films were marked up on service pages.
// They already have dedicated watch pages; keep complete VideoObject there.
for (const slug of ['rbfcu-coyote-commercial', 'fleer-brilliants-superman']) {
  expectWatchPageVideo(
    `work/watch/${slug}.html`,
    `https://www.mediabarproductions.com/work/watch/${slug}`,
  )
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
if (!llms.includes('https://www.mediabarproductions.com/about/editorial-policy')) {
  failures.push('llms.txt: missing editorial standards URL')
}

const sitemap = read('sitemap.xml.body')
if (!sitemap.includes('<loc>https://www.mediabarproductions.com/about/editorial-policy</loc>')) {
  failures.push('sitemap.xml: missing editorial standards URL')
}
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const sitemapLastmods = [...sitemap.matchAll(/<lastmod>/g)].length
if (sitemapLocs.length === 0) {
  failures.push('sitemap.xml: no URL entries were generated')
} else if (sitemapLastmods < sitemapLocs.length) {
  failures.push(`sitemap.xml: ${sitemapLastmods}/${sitemapLocs.length} URLs have lastmod`)
}

const sitemapUrlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1])
const videoWatchPrefixes = [
  'https://www.mediabarproductions.com/work/watch/',
  'https://www.mediabarproductions.com/resources/media-bar-answers/',
]
for (const block of sitemapUrlBlocks) {
  if (!block.includes('<video:video>') && !block.includes('<video:')) continue
  const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]
  const isWatchUrl = videoWatchPrefixes.some((prefix) => loc?.startsWith(prefix) && loc.length > prefix.length)
  if (!isWatchUrl) {
    failures.push(`sitemap.xml: video sitemap extra is not on a watch page (${loc || 'missing loc'})`)
  }
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
