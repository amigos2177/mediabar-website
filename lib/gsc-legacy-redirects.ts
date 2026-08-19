/**
 * Legacy ASP.NET crawl URLs that must 301 to a live canonical.
 * Do not rebuild the old CMS pages. Google Search Console still reports
 * truncated http://mediabarproductions.com paths from before the May 2026 cutover.
 */

export const CANONICAL_ORIGIN = 'https://www.mediabarproductions.com'
export const APEX_HOST = 'mediabarproductions.com'
export const CAREERS_PATH = '/careers'
export const NEWS_GET_FALLBACK = '/blog'

/**
 * Old /News/Get/{id}/slug articles. Specific IDs must stay ahead of the
 * /News/Get/:id/:rest* catch-all. Get/30 is the GSC "duplicate without
 * user-selected canonical" URL (national television / commercial production).
 */
export const NEWS_GET_BY_ID: Record<string, string> = {
  '45': '/blog/hire-local-video-production-companies-san-antonio',
  '44': '/blog/corporate-video-multi-format-strategy',
  '43': '/blog/best-video-production-san-antonio',
  '42': '/blog/elevate-your-brand-with-expert-video-production',
  '41': '/blog/ai-video-production-limits',
  '40': '/blog/san-antonio-conference-video-services',
  '38': '/blog/importance-of-video-production-services',
  '37': '/blog/hire-local-video-production-companies-san-antonio',
  '36': '/blog/hire-local-video-production-companies-san-antonio',
  '35': '/work',
  '34': '/blog/corporate-video-multi-format-strategy',
  '33': '/work',
  '31': '/video-production/medical', // legacy GSC video URL; do not rebuild the ASP.NET page
  '30': '/video-production/commercials', // GSC duplicate: /News/Get/30/national-television-video-production-san-anto
  '29': '/video-production/motion-graphics',
  '28': '/video-production/medical',
  '27': '/studio',
  '26': '/video-production/commercials',
  '25': '/video-production/commercials',
  '24': '/work',
  '23': '/video-production/corporate',
  '22': '/video-production/commercials',
  '21': '/video-production/commercials',
}

export const GSC_JOB_SOURCES = [
  '/Job',
  '/Job/',
  '/Job/:rest*',
  '/Job/:rest*/',
  '/Jobs',
  '/Jobs/',
  '/Jobs/:rest*',
  '/Jobs/:rest*/',
  '/jobs',
  '/jobs/',
  '/jobs/:rest*',
  '/jobs/:rest*/',
] as const

export const GSC_NEWS_GET_CATCHALL_SOURCES = [
  '/News/Get/:id',
  '/News/Get/:id/',
  '/News/Get/:id/:rest*',
  '/News/Get/:id/:rest*/',
] as const

type HostMatch = { type: 'host'; value: string }

export type GscLegacyRedirect = {
  source: string
  destination: string
  statusCode: 301
  has?: HostMatch[]
}

/** Apex one-hop to www + canonical path, plus the same 301 on www. */
export function gscLegacy301(sources: readonly string[], destPath: string): GscLegacyRedirect[] {
  return sources.flatMap((source) => [
    {
      source,
      has: [{ type: 'host', value: APEX_HOST }],
      destination: `${CANONICAL_ORIGIN}${destPath}`,
      statusCode: 301,
    },
    {
      source,
      destination: destPath,
      statusCode: 301,
    },
  ])
}

export function newsGetSourcesForId(id: string): string[] {
  return [`/News/Get/${id}`, `/News/Get/${id}/`, `/News/Get/${id}/:rest*`, `/News/Get/${id}/:rest*/`]
}

export function trimPathname(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
}

export function isLegacyJobPath(pathname: string): boolean {
  const lower = trimPathname(pathname).toLowerCase()
  return lower === '/job' || lower.startsWith('/job/') || lower === '/jobs' || lower.startsWith('/jobs/')
}

export function destinationForNewsGet(pathname: string): string | null {
  const match = trimPathname(pathname).match(/^\/news\/get(?:\/(\d+)(?:\/.*)?)?$/i)
  if (!match) return null
  const id = match[1]
  if (!id) return NEWS_GET_FALLBACK
  return NEWS_GET_BY_ID[id] ?? NEWS_GET_FALLBACK
}
