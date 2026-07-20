'use client'

import { useEffect } from 'react'
import { track } from '@vercel/analytics'
import { analyticsEvents } from '@/lib/analytics-events'

type ConversionIntent =
  | 'phone'
  | 'email'
  | 'project-planner'
  | 'contact'
  | 'client-portal'

type PageGroup =
  | 'home'
  | 'blog'
  | 'service'
  | 'location'
  | 'work'
  | 'contact'
  | 'project-planner'
  | 'about'
  | 'pricing'
  | 'other'

type JourneyDestination =
  | ConversionIntent
  | 'service'
  | 'work'

const campaignSessionPrefix = 'mbp-campaign-viewed:'

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

function getPageGroup(pathname: string): PageGroup {
  if (pathname === '/') return 'home'
  if (pathname === '/blog' || pathname.startsWith('/blog/')) return 'blog'
  if (
    pathname === '/video-production'
    || pathname.startsWith('/video-production/')
    || pathname === '/photography'
    || pathname === '/studio'
  ) {
    return 'service'
  }
  if (pathname.startsWith('/locations/')) return 'location'
  if (pathname === '/work' || pathname.startsWith('/work/')) return 'work'
  if (pathname === '/contact') return 'contact'
  if (pathname === '/project-planner') return 'project-planner'
  if (pathname === '/about' || pathname.startsWith('/about/')) return 'about'
  if (pathname === '/pricing') return 'pricing'
  return 'other'
}

function getJourneyDestination(anchor: HTMLAnchorElement): JourneyDestination | null {
  const intent = getConversionIntent(anchor)
  if (intent) return intent

  const destination = new URL(anchor.href, window.location.href)
  if (destination.origin !== window.location.origin) return null
  if (
    destination.pathname === '/video-production'
    || destination.pathname.startsWith('/video-production/')
    || destination.pathname === '/photography'
    || destination.pathname === '/studio'
  ) {
    return 'service'
  }
  if (destination.pathname === '/work' || destination.pathname.startsWith('/work/')) {
    return 'work'
  }

  return null
}

function getPlacement(anchor: HTMLAnchorElement) {
  if (anchor.closest('nav')) return 'navigation'
  if (anchor.closest('footer')) return 'footer'
  if (anchor.closest('header')) return 'header'
  return 'page'
}

export function AnalyticsInteractions() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const source = params.get('utm_source')?.trim().slice(0, 100)
    const campaign = params.get('utm_campaign')?.trim().slice(0, 100)

    if (source || campaign) {
      const sessionKey = `${campaignSessionPrefix}${window.location.pathname}:${source || 'unknown'}:${campaign || 'unspecified'}`
      let hasTrackedCampaign = false

      try {
        hasTrackedCampaign = window.sessionStorage.getItem(sessionKey) === '1'
      } catch {
        // Tracking still works when storage is unavailable.
      }

      if (!hasTrackedCampaign) {
        track(analyticsEvents.campaignLandingViewed, {
          source: source || 'unknown',
          campaign: campaign || 'unspecified',
        })

        try {
          window.sessionStorage.setItem(sessionKey, '1')
        } catch {
          // Do not block navigation when storage is unavailable.
        }
      }
    }

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return

      const anchor = event.target.closest<HTMLAnchorElement>('a[href]')
      if (!anchor) return

      const intent = getConversionIntent(anchor)
      const placement = getPlacement(anchor)
      const sourceGroup = getPageGroup(window.location.pathname)

      if (intent) {
        track(analyticsEvents.conversionIntentClicked, {
          intent,
          placement,
        })
        track(analyticsEvents.conversionSourceClicked, {
          intent,
          source: sourceGroup,
        })
      }

      if (sourceGroup === 'blog') {
        const destination = getJourneyDestination(anchor)
        if (!destination) return

        track(analyticsEvents.blogJourneyClicked, {
          destination,
          placement,
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
