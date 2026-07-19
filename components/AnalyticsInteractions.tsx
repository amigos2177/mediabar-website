'use client'

import { useEffect } from 'react'
import { track } from '@vercel/analytics'

type ConversionIntent =
  | 'phone'
  | 'email'
  | 'project-planner'
  | 'contact'
  | 'client-portal'

function getConversionIntent(anchor: HTMLAnchorElement): ConversionIntent | null {
  const href = anchor.getAttribute('href') || ''

  if (href.startsWith('tel:')) return 'phone'
  if (href.startsWith('mailto:')) return 'email'

  const destination = new URL(anchor.href, window.location.href)
  if (destination.hostname === 'portal.creativeagenda.io') return 'client-portal'
  if (destination.origin !== window.location.origin) return null
  if (destination.pathname === '/project-planner') return 'project-planner'
  if (destination.pathname === '/contact') return 'contact'

  return null
}

export function AnalyticsInteractions() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return

      const anchor = event.target.closest<HTMLAnchorElement>('a[href]')
      if (!anchor) return

      const intent = getConversionIntent(anchor)
      if (!intent) return

      track('Conversion Intent Clicked', {
        intent,
        sourcePath: window.location.pathname,
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
