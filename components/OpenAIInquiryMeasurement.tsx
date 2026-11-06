'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const storageKey = 'mbp-openai-measurement-consent'
const pixelId = 'NynHRMH4ndybY6ST5nkJ5T'
type Consent = 'granted' | 'denied' | null

declare global {
  interface Window {
    oaiq?: ((...args: unknown[]) => void) & { q?: unknown[][] }
  }
}

export function OpenAIInquiryMeasurement() {
  const pathname = usePathname()
  const eligible = pathname === '/san-antonio-video-inquiry' || pathname === '/project-planner'
  const [consent, setConsent] = useState<Consent>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const privacy = navigator as Navigator & { globalPrivacyControl?: boolean }
    if (privacy.globalPrivacyControl || navigator.doNotTrack === '1') {
      setConsent('denied')
    } else {
      try {
        const saved = localStorage.getItem(storageKey)
        if (saved === 'granted' || saved === 'denied') setConsent(saved)
      } catch { /* Leave measurement off without a stored choice. */ }
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!eligible || consent !== 'granted') {
      if (consent === 'denied') window.oaiq?.('consent', false)
      return
    }
    if (!window.oaiq) {
      const queue = ((...args: unknown[]) => { queue.q.push(args) }) as ((...args: unknown[]) => void) & { q: unknown[][] }
      queue.q = []
      window.oaiq = queue
      queue('consent', true)
      queue('init', { pixelId })
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js'
      document.head.appendChild(script)
    } else {
      window.oaiq('consent', true)
    }
  }, [consent, eligible])

  function choose(value: 'granted' | 'denied') {
    try { localStorage.setItem(storageKey, value) } catch { /* Current-page choice still applies. */ }
    setConsent(value)
  }

  if (!ready || !eligible) return null
  if (consent !== null) return <button type="button" onClick={() => { window.oaiq?.('consent', false); setConsent(null) }} style={{ display: 'block', margin: '12px auto', background: 'transparent', color: '#aaa', border: '1px solid #555', padding: '8px 12px' }}>Ad measurement preferences</button>

  return (
    <aside aria-label="Optional ad measurement" style={{ background: '#171717', color: '#fff', padding: '16px 24px', borderTop: '1px solid #555' }}>
      <p style={{ maxWidth: 1000, margin: '0 auto 12px', fontSize: 14, lineHeight: 1.6 }}>Allow optional OpenAI ad measurement? It helps connect completed inquiries to our ChatGPT ads. OpenAI may use cookies and hashed contact details for matching. Your form works either way.</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
        <button type="button" onClick={() => choose('granted')} style={{ background: '#333', color: '#fff', padding: '10px 18px', border: '1px solid #aaa', cursor: 'pointer' }}>Allow ad measurement</button>
        <button type="button" onClick={() => choose('denied')} style={{ background: '#333', color: '#fff', padding: '10px 18px', border: '1px solid #aaa', cursor: 'pointer' }}>Decline ad measurement</button>
      </div>
    </aside>
  )
}
