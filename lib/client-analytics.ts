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
  // Only the already-qualified, successful form event is reported to OpenAI.
  // No budget is represented as revenue; no form values are sent here.
  if (eventName === 'qualified_project_inquiry') {
    try {
      window.oaiq?.('measure', 'lead_created', { type: 'customer_action' }, {
        event_id: crypto.randomUUID(),
      })
    } catch {
      // Optional ad measurement must never interrupt a successful inquiry.
    }
  }
}
