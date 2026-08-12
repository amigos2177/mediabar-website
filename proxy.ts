import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PRODUCTION_HOSTS = new Set([
  'www.mediabarproductions.com',
  'mediabarproductions.com',
])

const LEGACY_SERVICE_PATHS: Record<string, string> = {
  '/events': '/video-production/events',
  '/commericals': '/video-production/commercials',
  '/commercials': '/video-production/commercials',
  '/live-streaming-webcasting-san-antonio': '/video-production/live-streaming',
  '/video-post-production': '/video-production/post-production',
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
