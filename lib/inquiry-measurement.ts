import { analyticsEvents } from './analytics-events'

// Deliberately page-local: no cookie or storage flag can hide later real inquiries.
export function isInternalInquiryTest(search = typeof window === 'undefined' ? '' : window.location.search) {
  return new URLSearchParams(search).get('inquiry_test') === '1'
}

const referencePattern = /^MBP-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export function inquiryReceiptProperties(receipt: unknown): { inquiry_reference?: string } {
  if (!receipt || typeof receipt !== 'object') return {}
  const reference = (receipt as Record<string, unknown>).inquiryReference
  return typeof reference === 'string' && referencePattern.test(reference)
    ? { inquiry_reference: reference }
    : {}
}

export function shouldTrackInquiry(receipt: unknown, website: string, internalTest: boolean) {
  return !website && !internalTest && !(
    receipt && typeof receipt === 'object'
    && (receipt as Record<string, unknown>).internalTest === true
  )
}

const inquiryEvents = new Set<string>([
  analyticsEvents.contactFormStarted,
  analyticsEvents.contactFormSubmitted,
  analyticsEvents.contactFormSubmissionFailed,
  analyticsEvents.projectPlannerStarted,
  analyticsEvents.projectPlannerStepCompleted,
  analyticsEvents.projectBriefSubmitted,
  analyticsEvents.projectBriefSubmissionFailed,
  analyticsEvents.faqQuestionFormStarted,
  analyticsEvents.faqQuestionSubmitted,
  analyticsEvents.faqQuestionSubmissionFailed,
  'qualified_project_inquiry',
])

export function isInquiryMeasurementEvent(eventName: string, ga4EventName: string) {
  return inquiryEvents.has(eventName) || ga4EventName === 'generate_lead'
}
