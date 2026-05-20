import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Case-variant redirects for legacy indexed URLs that the redirects() config
  // can't handle due to Next.js routing case behavior
  if (pathname === '/Contact') {
    const url = request.nextUrl.clone()
    url.pathname = '/contact'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/Contact'],
}
