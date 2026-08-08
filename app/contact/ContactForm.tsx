'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { analyticsEvents } from '@/lib/analytics-events'
import {
  captureCampaignAttribution,
  readCampaignAttribution,
  type CampaignAttribution,
} from '@/lib/campaign-attribution'
import { trackAnalyticsEvent } from '@/lib/client-analytics'
import { discoverySources } from '@/lib/discovery-sources'
import {
  clearConversionAttribution,
  readConversionAttribution,
  type ConversionAttribution,
} from '@/lib/conversion-attribution'
import styles from './contact.module.css'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialFields = {
  name: '',
  email: '',
  message: '',
  discoverySource: '',
  website: '',
}

function splitName(name: string) {
  const [firstName = '', ...remainingNames] = name.trim().split(/\s+/)

  return {
    firstName,
    lastName: remainingNames.join(' '),
  }
}

export default function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const hasTrackedStart = useRef(false)
  const campaignAttribution = useRef<CampaignAttribution | null>(null)
  const conversionAttribution = useRef<ConversionAttribution | null>(null)

  useEffect(() => {
    campaignAttribution.current = captureCampaignAttribution() || readCampaignAttribution()
    conversionAttribution.current = readConversionAttribution('contact')
  }, [])

  function conversionProperties() {
    return {
      source: conversionAttribution.current?.sourceGroup || 'direct',
      sourcePath: conversionAttribution.current?.sourcePath || '/contact',
      sourceAction: conversionAttribution.current?.action || 'contact',
      sourcePlacement: conversionAttribution.current?.placement || 'direct',
      campaign: campaignAttribution.current?.utmCampaign || 'none',
      firstTouchSource: campaignAttribution.current?.firstTouchSource || 'direct',
      landingPage: campaignAttribution.current?.landingPage || '/contact',
    }
  }

  function updateField(
    field: keyof typeof initialFields,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    if (field !== 'website' && !hasTrackedStart.current) {
      hasTrackedStart.current = true
      trackAnalyticsEvent(analyticsEvents.contactFormStarted, conversionProperties())
    }
    setFields((current) => ({ ...current, [field]: event.target.value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const { firstName, lastName } = splitName(fields.name)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: fields.email,
          message: fields.message,
          discoverySource: fields.discoverySource,
          website: fields.website,
          source: 'contact-quick-question',
          utmSource: campaignAttribution.current?.utmSource,
          utmMedium: campaignAttribution.current?.utmMedium,
          utmCampaign: campaignAttribution.current?.utmCampaign,
          utmContent: campaignAttribution.current?.utmContent,
          landingPage: campaignAttribution.current?.landingPage,
          firstTouchSource: campaignAttribution.current?.firstTouchSource,
          referrer: campaignAttribution.current?.referrer,
          sourcePage: conversionAttribution.current?.sourcePath || '/contact',
          sourceAction: conversionAttribution.current?.action || 'contact',
          sourcePlacement: conversionAttribution.current?.placement || 'direct',
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        trackAnalyticsEvent(analyticsEvents.contactFormSubmissionFailed, {
          reason: 'server',
          service: 'General inquiry',
          ...conversionProperties(),
        })
        setStatus('error')
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      trackAnalyticsEvent(analyticsEvents.contactFormSubmitted, {
        service: 'General inquiry',
        leadType: 'quick_question',
        discoverySource: fields.discoverySource || 'not_provided',
        ...conversionProperties(),
      }, 'generate_lead')
      clearConversionAttribution('contact')
      setFields(initialFields)
      setStatus('success')
    } catch {
      trackAnalyticsEvent(analyticsEvents.contactFormSubmissionFailed, {
        reason: 'network',
        service: 'General inquiry',
        ...conversionProperties(),
      })
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successMark} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="m5 12 4 4L19 6" />
          </svg>
        </span>
        <p className={styles.eyebrow}>Message received</p>
        <h3>A real person has your note.</h3>
        <p>
          We&apos;ll respond within one business day. If the request becomes more
          detailed, you can also build a complete brief in the Project Planner.
        </p>
        <div className={styles.successActions}>
          <button
            type="button"
            onClick={() => {
              setStatus('idle')
              setErrorMessage('')
              hasTrackedStart.current = false
            }}
          >
            Send another message
          </button>
          <Link href="/project-planner">Open project planner</Link>
        </div>
      </div>
    )
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-busy={status === 'submitting'}
    >
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(event) => updateField('website', event)}
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            maxLength={160}
            required
            value={fields.name}
            onChange={(event) => updateField('name', event)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            maxLength={254}
            required
            value={fields.email}
            onChange={(event) => updateField('email', event)}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Your question</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="How can we help?"
          maxLength={4000}
          required
          value={fields.message}
          onChange={(event) => updateField('message', event)}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-discovery-source">
          How did you hear about Media Bar? <span>Optional</span>
        </label>
        <select
          id="contact-discovery-source"
          name="discoverySource"
          value={fields.discoverySource}
          onChange={(event) => updateField('discoverySource', event)}
        >
          <option value="">Choose one</option>
          {discoverySources.map((source) => (
            <option key={source} value={source}>{source}</option>
          ))}
        </select>
      </div>

      <p className={styles.privacyNote}>
        We use these details only to respond to your inquiry. Please do not include
        confidential or sensitive information.
      </p>

      {status === 'error' && (
        <p id="contact-error" className={styles.formError} role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === 'submitting'}
        aria-describedby={status === 'error' ? 'contact-error' : undefined}
      >
        {status === 'submitting' ? 'Sending...' : 'Send message'}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
