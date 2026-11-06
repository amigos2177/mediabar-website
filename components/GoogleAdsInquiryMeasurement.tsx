'use client'

import { useEffect, useState } from 'react'

const consentKey = 'mbp-google-ads-inquiry-consent:v1'
const googleAdsId = 'AW-17889031790'
const conversionDestination = 'AW-17889031790/auecCIyWurMdEO7sk9JC'
type Consent = 'granted' | 'denied' | null

function googleTag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  // Google consumes array-like arguments, including queued events before loading.
  if (args.length) window.dataLayer.push(arguments)
}

export function GoogleAdsInquiryMeasurement() {
  const [consent, setConsent] = useState<Consent>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const privacy = navigator as Navigator & { globalPrivacyControl?: boolean }
    if (privacy.globalPrivacyControl || navigator.doNotTrack === '1') {
      setConsent('denied')
    } else {
      try {
        const saved = localStorage.getItem(consentKey)
        if (saved === 'granted' || saved === 'denied') setConsent(saved)
      } catch { /* No stored choice means no advertising measurement. */ }
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (consent !== 'granted') return
    googleTag('consent', 'update', {
      ad_storage: 'granted', ad_user_data: 'denied', ad_personalization: 'denied',
    })
    if (!document.getElementById('mbp-google-ads-inquiry-tag')) {
      googleTag('js', new Date())
      googleTag('config', googleAdsId, {
        send_page_view: false,
        allow_ad_personalization_signals: false,
      })
      const script = document.createElement('script')
      script.id = 'mbp-google-ads-inquiry-tag'
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`
      document.head.appendChild(script)
    }
    const sent = new Set<string>()
    const report = (event: Event) => {
      const id = (event as CustomEvent<{ id?: string }>).detail?.id
      if (!id || sent.has(id)) return
      sent.add(id)
      googleTag('event', 'conversion', {
        send_to: conversionDestination,
        transaction_id: id,
        // Never report production budgets as revenue or send contact details.
      })
    }
    window.addEventListener('mbp:eligible-project-inquiry', report)
    return () => window.removeEventListener('mbp:eligible-project-inquiry', report)
  }, [consent])

  function choose(value: 'granted' | 'denied') {
    const privacy = navigator as Navigator & { globalPrivacyControl?: boolean }
    const permitted = !privacy.globalPrivacyControl && navigator.doNotTrack !== '1'
    const choice = permitted ? value : 'denied'
    try { localStorage.setItem(consentKey, choice) } catch { /* Current choice still applies. */ }
    if (choice === 'denied') {
      googleTag('consent', 'update', {
        ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
      })
    }
    setConsent(choice)
  }

  if (!ready) return null
  if (consent !== null) return <button type="button" onClick={() => { choose('denied'); setConsent(null) }} style={{ display: 'block', margin: '12px auto', background: 'transparent', color: '#aaa', border: '1px solid #555', padding: '8px 12px' }}>Google ad measurement preferences</button>

  return (
    <aside aria-label="Optional Google ad measurement" style={{ background: '#171717', color: '#fff', padding: '16px 24px', borderTop: '1px solid #555' }}>
      <p style={{ maxWidth: 1000, margin: '0 auto 12px', fontSize: 14, lineHeight: 1.6 }}>Allow optional Google ad measurement? Google may use advertising cookies to connect a completed project inquiry to our Google ads. We do not send your name, email, message or production budget to Google Ads. Your form works either way.</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
        <button type="button" onClick={() => choose('granted')} style={{ background: '#333', color: '#fff', padding: '10px 18px', border: '1px solid #aaa', cursor: 'pointer' }}>Allow Google ad measurement</button>
        <button type="button" onClick={() => choose('denied')} style={{ background: '#333', color: '#fff', padding: '10px 18px', border: '1px solid #aaa', cursor: 'pointer' }}>Decline Google ad measurement</button>
      </div>
    </aside>
  )
}
