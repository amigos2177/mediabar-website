import { execFileSync } from 'node:child_process'

const SITE_ORIGIN = 'https://www.mediabarproductions.com'
const SITE_HOST = 'www.mediabarproductions.com'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const INDEXNOW_KEY = '87c34f30eb5268423b5a521989b425ca'
const KEY_LOCATION = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`
const DEPLOYMENT_URL = `${SITE_ORIGIN}/api/deployment`

const args = process.argv.slice(2)

function readOption(name) {
  const index = args.indexOf(name)
  if (index === -1) return undefined
  return args[index + 1]
}

const dryRun = args.includes('--dry-run')
const submitAll = args.includes('--all')
const waitForCommit = readOption('--wait-for')
const changedSince = readOption('--changed-since')

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function decodeXml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
}

async function fetchSitemapUrls() {
  const response = await fetch(SITEMAP_URL, {
    headers: { 'User-Agent': 'MediaBar-IndexNow/1.0' },
  })

  if (!response.ok) {
    throw new Error(`Sitemap request failed with HTTP ${response.status}`)
  }

  const xml = await response.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => decodeXml(match[1].trim()))
    .filter((value) => {
      try {
        return new URL(value).host === SITE_HOST
      } catch {
        return false
      }
    })

  return [...new Set(urls)]
}

function getChangedFiles(baseCommit) {
  if (!baseCommit || /^0+$/.test(baseCommit)) return null

  try {
    const output = execFileSync(
      'git',
      ['diff', '--name-only', baseCommit],
      { encoding: 'utf8' },
    )
    return output.split('\n').map((file) => file.trim()).filter(Boolean)
  } catch {
    return null
  }
}

function appRoutePrefix(file) {
  if (!file.startsWith('app/') || file.startsWith('app/api/')) return null

  if (
    file === 'app/layout.tsx'
    || file === 'app/globals.css'
    || file === 'app/sitemap.ts'
    || file === 'app/robots.ts'
  ) {
    return '*'
  }

  const segments = file.split('/').slice(1, -1)
    .filter((segment) => !(segment.startsWith('(') && segment.endsWith(')')))

  if (segments.length === 0) return '/'

  const dynamicIndex = segments.findIndex((segment) => segment.startsWith('['))
  if (dynamicIndex !== -1) {
    const stableSegments = segments.slice(0, dynamicIndex)
    return `/${stableSegments.join('/')}/`
  }

  return `/${segments.join('/')}`
}

function selectChangedUrls(allUrls, files) {
  if (!files || files.length === 0) return allUrls

  const sharedComponentRoutes = {
    'components/ServiceEditorialPage.tsx': [
      '/video-production/interview',
      '/video-production/live-streaming',
      '/video-production/medical',
      '/video-production/motion-graphics',
      '/video-production/post-production',
    ],
  }

  const globalChange = files.some((file) =>
    (file.startsWith('components/') && !sharedComponentRoutes[file])
    || file.startsWith('lib/')
    || file.startsWith('data/')
    || (file.startsWith('public/') && !file.endsWith('.txt'))
    || file === 'next.config.ts'
  )

  if (globalChange) return allUrls

  const selected = new Set()

  for (const file of files) {
    if (sharedComponentRoutes[file]) {
      for (const route of sharedComponentRoutes[file]) {
        selected.add(`${SITE_ORIGIN}${route}`)
      }
      continue
    }

    const blogMatch = file.match(/^content\/blog\/(.+)\.md$/)
    if (blogMatch) {
      selected.add(`${SITE_ORIGIN}/blog`)
      selected.add(`${SITE_ORIGIN}/blog/${blogMatch[1]}`)
      continue
    }

    const routePrefix = appRoutePrefix(file)
    if (!routePrefix) continue
    if (routePrefix === '*') return allUrls

    if (routePrefix.endsWith('/')) {
      for (const url of allUrls) {
        if (new URL(url).pathname.startsWith(routePrefix)) selected.add(url)
      }
      continue
    }

    const routeUrl = routePrefix === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${routePrefix}`
    if (allUrls.includes(routeUrl)) selected.add(routeUrl)
  }

  return allUrls.filter((url) => selected.has(url))
}

async function waitForProductionCommit(expectedCommit) {
  const maxAttempts = 45

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await fetch(DEPLOYMENT_URL, {
        cache: 'no-store',
        headers: { 'User-Agent': 'MediaBar-IndexNow/1.0' },
      })
      const data = response.ok ? await response.json() : null

      if (data?.commit === expectedCommit) {
        console.log(`Production is serving commit ${expectedCommit}.`)
        return
      }

      console.log(
        `Waiting for production commit ${expectedCommit}. Current: ${data?.commit ?? 'unavailable'} (${attempt}/${maxAttempts})`,
      )
    } catch (error) {
      console.log(`Production check failed (${attempt}/${maxAttempts}): ${error.message}`)
    }

    if (attempt < maxAttempts) await sleep(20_000)
  }

  throw new Error(
    `Production did not report commit ${expectedCommit}. Verify the Vercel deployment and system environment variables.`,
  )
}

async function main() {
  if (waitForCommit && !dryRun) {
    await waitForProductionCommit(waitForCommit)
  }

  const allUrls = await fetchSitemapUrls()
  const changedFiles = submitAll ? null : getChangedFiles(changedSince)
  const urlList = submitAll ? allUrls : selectChangedUrls(allUrls, changedFiles)

  if (urlList.length === 0) {
    console.log('No public indexable URLs changed. IndexNow submission skipped.')
    return
  }

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }

  if (dryRun) {
    console.log(`IndexNow dry run: ${urlList.length} URLs would be submitted.`)
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'User-Agent': 'MediaBar-IndexNow/1.0',
    },
    body: JSON.stringify(payload),
  })

  if (![200, 202].includes(response.status)) {
    const body = await response.text()
    throw new Error(`IndexNow returned HTTP ${response.status}: ${body || 'no response body'}`)
  }

  console.log(`IndexNow accepted ${urlList.length} changed URLs with HTTP ${response.status}.`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
