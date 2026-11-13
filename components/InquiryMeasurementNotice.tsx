'use client'

import { useSyncExternalStore } from 'react'
import { isInternalInquiryTest } from '@/lib/inquiry-measurement'

function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange)
  return () => window.removeEventListener('popstate', onChange)
}

export function InquiryTestNotice() {
  const enabled = useSyncExternalStore(subscribe, isInternalInquiryTest, () => false)
  if (!enabled) return null
  return (
    <p role="note" style={{ padding: 16, border: '1px solid #C9A84C', color: '#fff', background: '#171717' }}>
      Internal test mode. Submitting still emails our team, marked INTERNAL TEST.
      Inquiry events and lead conversions are excluded. Open the form without
      inquiry_test=1 to send a real inquiry.
    </p>
  )
}

export function InquiryReference({ reference }: { reference: string }) {
  if (!reference) return null
  return <p style={{ overflowWrap: 'anywhere' }}>Inquiry reference: <code>{reference}</code></p>
}
