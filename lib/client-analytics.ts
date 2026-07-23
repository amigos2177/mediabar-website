'use client'

import { track } from '@vercel/analytics'

type AnalyticsValue = string | number | boolean
type AnalyticsProperties = Record<string, AnalyticsValue>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (
      command: 'event',
      eventName: string,
      properties?: AnalyticsProperties,
    ) => void
  }
}

function toGa4EventName(eventName: string) {
  return eventName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 40)
}

export function trackAnalyticsEvent(
  eventName: string,
  properties: AnalyticsProperties = {},
  ga4EventName = toGa4EventName(eventName),
) {
  track(eventName, properties)
  window.gtag?.('event', ga4EventName, properties)
}
