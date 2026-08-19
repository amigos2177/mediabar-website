import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  APEX_HOST,
  CANONICAL_ORIGIN,
  CAREERS_PATH,
  destinationForNewsGet,
  isLegacyJobPath,
} from '@/lib/gsc-legacy-redirects'

const PRODUCTION_HOSTS = new Set([
  'www.mediabarproductions.com',
  APEX_HOST,
])

const LEGACY_SERVICE_PATHS: Record<string, string> = {
  '/events': '/video-production/events',
  '/commericals': '/video-production/commercials',
  '/commercials': '/video-production/commercials',
  '/live-streaming-webcasting-san-antonio': '/video-production/live-streaming',
  '/video-post-production': '/video-production/post-production',
}

function redirectToCanonicalPath(request: NextRequest, destPath: string) {
  const host = (request.headers.get('host') ?? '').split(':')[0]
  if (host === APEX_HOST) {
    const dest = new URL(`${CANONICAL_ORIGIN}${destPath}`)
    dest.search = request.nextUrl.search
    return NextResponse.redirect(dest, 301)
  }

  const url = request.nextUrl.clone()
  url.pathname = destPath
  return NextResponse.redirect(url, 301)
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Case-variant redirects for legacy indexed URLs that the redirects() config
  // can't handle due to Next.js routing case behavior
  if (pathname === '/Contact') {
    const url = request.nextUrl.clone()
    url.pathname = '/contact'
    return NextResponse.redirect(url, 308)
  }

  if (isLegacyJobPath(pathname)) {
    return redirectToCanonicalPath(request, CAREERS_PATH)
  }

  const newsGetDestination = destinationForNewsGet(pathname)
  if (newsGetDestination) {
    return redirectToCanonicalPath(request, newsGetDestination)
  }

  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const legacyDestination = LEGACY_SERVICE_PATHS[trimmed.toLowerCase()]
  if (legacyDestination && trimmed !== trimmed.toLowerCase()) {
    const url = request.nextUrl.clone()
    url.pathname = legacyDestination
    return NextResponse.redirect(url, 301)
  }

  // Block search engines from indexing non-production hosts (Vercel previews,
  // localhost, etc.). Production gets normal indexing.
  const host = request.headers.get('host') ?? ''
  const isProduction = PRODUCTION_HOSTS.has(host)

  const response = NextResponse.next()
  if (!isProduction) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  return response
}

export const config = {
  matcher: [
    // Run on all paths except Next internals and static files
    '/((?!_next/|favicon\\.ico|images/|.*\\..*).*)',
  ],
}
