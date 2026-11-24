'use client'

import { useEffect, useRef, useState } from 'react'
import { analyticsEvents } from '@/lib/analytics-events'
import {
  captureCampaignAttribution,
  readCampaignAttribution,
  type CampaignAttribution,
} from '@/lib/campaign-attribution'
import { trackAnalyticsEvent } from '@/lib/client-analytics'
import {
  inquiryReceiptProperties,
  isInternalInquiryTest,
  shouldTrackInquiry,
} from '@/lib/inquiry-measurement'
import styles from './QuickContactBar.module.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function splitName(name: string) {
  const [firstName = '', ...rest] = name.trim().split(/\s+/)
  return { firstName, lastName: rest.join(' ') }
}

export default function QuickContactBar() {
  const [expanded, setExpanded] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [inquiryReference, setInquiryReference] = useState('')
  const hasTrackedStart = useRef(false)
  const inFlight = useRef(false)
  const campaignRef = useRef<CampaignAttribution | null>(null)

  useEffect(() => {
    campaignRef.current = captureCampaignAttribution() || readCampaignAttribution()
  }, [])

  function currentPath() {
    return typeof window !== 'undefined' ? window.location.pathname : '/'
  }

  function trackStartOnce() {
    if (hasTrackedStart.current) return
    hasTrackedStart.current = true
    trackAnalyticsEvent(analyticsEvents.contactFormStarted, {
      source: 'quick_contact_bar',
      sourcePath: currentPath(),
      sourceAction: 'quick_contact_form',
      sourcePlacement: 'quick_contact_bar',
      campaign: campaignRef.current?.utmCampaign || 'none',
      firstTouchSource: campaignRef.current?.firstTouchSource || 'direct',
      landingPage: campaignRef.current?.landingPage || currentPath(),
    })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (inFlight.current) return
    inFlight.current = true
    setStatus('submitting')
    setErrorMessage('')
    setInquiryReference('')

    const internalTest = isInternalInquiryTest()
    const path = currentPath()

    try {
      const { firstName, lastName } = splitName(name)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          internalTest,
          firstName,
          lastName,
          email,
          message,
          website,
          source: 'contact-quick-question',
          utmSource: campaignRef.current?.utmSource,
          utmMedium: campaignRef.current?.utmMedium,
          utmCampaign: campaignRef.current?.utmCampaign,
          utmContent: campaignRef.current?.utmContent,
          landingPage: campaignRef.current?.landingPage || path,
          firstTouchSource: campaignRef.current?.firstTouchSource,
          referrer: campaignRef.current?.referrer,
          sourcePage: path,
          sourceAction: 'quick_contact_form',
          sourcePlacement: 'quick_contact_bar',
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        trackAnalyticsEvent(analyticsEvents.contactFormSubmissionFailed, {
          reason: 'server',
          service: 'General inquiry',
          source: 'quick_contact_bar',
          sourcePath: path,
        })
        setStatus('error')
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      const receipt = inquiryReceiptProperties(data)
      setInquiryReference(receipt.inquiry_reference || '')
      if (shouldTrackInquiry(data, website, internalTest)) {
        trackAnalyticsEvent(
          analyticsEvents.contactFormSubmitted,
          {
            ...receipt,
            service: 'General inquiry',
            leadType: 'quick_question',
            source: 'quick_contact_bar',
            sourcePath: path,
            sourceAction: 'quick_contact_form',
            sourcePlacement: 'quick_contact_bar',
            campaign: campaignRef.current?.utmCampaign || 'none',
            firstTouchSource: campaignRef.current?.firstTouchSource || 'direct',
            landingPage: campaignRef.current?.landingPage || path,
          },
          'generate_lead',
        )
      }
      setName('')
      setEmail('')
      setMessage('')
      setWebsite('')
      setStatus('success')
    } catch {
      trackAnalyticsEvent(analyticsEvents.contactFormSubmissionFailed, {
        reason: 'network',
        service: 'General inquiry',
        source: 'quick_contact_bar',
        sourcePath: path,
      })
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      inFlight.current = false
    }
  }

  return (
    <section className={styles.section} aria-labelledby="quick-contact-title">
      <div className={styles.inner}>
        <div className={styles.message}>
          <p className={styles.eyebrow}>A simple way to start</p>
          <p id="quick-contact-title" className={styles.title}>Have a quick question?</p>
          <p>
            Send us a short note right here or{' '}
            <a
              href="mailto:contact@mediabarproductions.com?subject=Media%20Bar%20website%20question"
              data-conversion-action="email_our_team"
              className={styles.inlineLink}
            >
              email our team directly
            </a>
            . You do not need a complete brief, and a member of our team will reply personally.
          </p>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primary}
            aria-expanded={expanded}
            aria-controls="quick-contact-inline-form"
            data-conversion-action="quick_contact_form"
            onClick={() => {
              setExpanded((prev) => !prev)
              if (status === 'success') setStatus('idle')
            }}
          >
            {expanded ? 'Hide quick form' : 'Ask a quick question'}
            <span aria-hidden="true">{expanded ? '×' : '→'}</span>
          </button>
          <a href="tel:+12102799442" className={styles.phone}>
            <span>Prefer to talk?</span>
            210-279-9442
          </a>
        </div>
      </div>

      {expanded && (
        <div id="quick-contact-inline-form" className={styles.formWrap}>
          {status === 'success' ? (
            <div className={styles.successBox} role="status">
              <p className={styles.successTitle}>Message received — thank you.</p>
              <p className={styles.successCopy}>
                A producer from our San Antonio team will reply personally within one business day.
                {inquiryReference ? ` Reference: ${inquiryReference}.` : ''}
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className={styles.honeypot}
              />
              <div className={styles.field}>
                <label htmlFor="quick-contact-name">Name</label>
                <input
                  id="quick-contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    trackStartOnce()
                    setName(e.target.value)
                  }}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="quick-contact-email">Work email</label>
                <input
                  id="quick-contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    trackStartOnce()
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div className={`${styles.field} ${styles.messageField}`}>
                <label htmlFor="quick-contact-message">Question or project note</label>
                <input
                  id="quick-contact-message"
                  name="message"
                  type="text"
                  required
                  placeholder="Share your goal, timeline, or question..."
                  value={message}
                  onChange={(e) => {
                    trackStartOnce()
                    setMessage(e.target.value)
                  }}
                />
              </div>
              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send note →'}
              </button>
              {status === 'error' && (
                <p className={styles.errorText} role="alert">
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      )}
    </section>
  )
}
