import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PRODUCTION_HOSTS = new Set([
  'www.mediabarproductions.com',
  'mediabarproductions.com',
])

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Case-variant redirects for legacy indexed URLs that the redirects() config
  // can't handle due to Next.js routing case behavior
  if (pathname === '/Contact') {
    const url = request.nextUrl.clone()
    url.pathname = '/contact'
    return NextResponse.redirect(url, 308)
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
