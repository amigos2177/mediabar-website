'use client'

import { track } from '@vercel/analytics'
import { createGa4Dispatcher } from './ga4-events'

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

const sendGa4Event = createGa4Dispatcher({
  ready: () => typeof window.gtag === 'function',
  send: (name, properties) => window.gtag?.('event', name, properties),
  onReady: (flush) => window.addEventListener('mbp:ga4-ready', flush),
})

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
  sendGa4Event(ga4EventName, properties)
  // Only the already-qualified, successful form event is reported to OpenAI.
  // No budget is represented as revenue; no form values are sent here.
  if (eventName === 'qualified_project_inquiry') {
    // Only the existing eligible-success event on this campaign's page reaches Google.
    // Keep OpenAI's existing measurement independent and unchanged.
    if (window.location.pathname === '/san-antonio-video-inquiry') {
      try {
        window.dispatchEvent(new CustomEvent('mbp:eligible-project-inquiry', {
          detail: { id: crypto.randomUUID() },
        }))
      } catch {
        // Advertising measurement must never interrupt inquiry delivery.
      }
    }
    try {
      window.oaiq?.('measure', 'lead_created', { type: 'customer_action' }, {
        event_id: crypto.randomUUID(),
      })
    } catch {
      // Optional ad measurement must never interrupt a successful inquiry.
    }
  }
}
