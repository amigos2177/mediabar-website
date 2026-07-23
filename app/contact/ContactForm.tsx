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
import {
  clearConversionAttribution,
  readConversionAttribution,
  type ConversionAttribution,
} from '@/lib/conversion-attribution'
import styles from './contact.module.css'

const services = [
  'Corporate Video',
  'Commercials',
  'Event Coverage',
  'Interview & Discussion',
  'Medical Video',
  'Aerial Video',
  'Motion Graphics',
  'Live Streaming',
  'Post Production',
  'Food Video',
  'Real Estate Video',
  'Studio Rental',
  'Photography',
  'Other',
]

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialFields = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  timeline: '',
  message: '',
  website: '',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          utmSource: campaignAttribution.current?.utmSource,
          utmMedium: campaignAttribution.current?.utmMedium,
          utmCampaign: campaignAttribution.current?.utmCampaign,
          utmContent: campaignAttribution.current?.utmContent,
          landingPage: campaignAttribution.current?.landingPage,
          sourcePage: conversionAttribution.current?.sourcePath || '/contact',
          sourceAction: conversionAttribution.current?.action || 'contact',
          sourcePlacement: conversionAttribution.current?.placement || 'direct',
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        trackAnalyticsEvent(analyticsEvents.contactFormSubmissionFailed, {
          reason: 'server',
          service: fields.service || 'General inquiry',
          ...conversionProperties(),
        })
        setStatus('error')
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      trackAnalyticsEvent(analyticsEvents.contactFormSubmitted, {
        service: fields.service || 'General inquiry',
        leadType: 'quick_question',
        ...conversionProperties(),
      }, 'generate_lead')
      clearConversionAttribution('contact')
      setFields(initialFields)
      setStatus('success')
    } catch {
      trackAnalyticsEvent(analyticsEvents.contactFormSubmissionFailed, {
        reason: 'network',
        service: fields.service || 'General inquiry',
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
          <label htmlFor="contact-first-name">First name</label>
          <input
            id="contact-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Jane"
            maxLength={80}
            required
            value={fields.firstName}
            onChange={(event) => updateField('firstName', event)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-last-name">Last name</label>
          <input
            id="contact-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Smith"
            maxLength={80}
            required
            value={fields.lastName}
            onChange={(event) => updateField('lastName', event)}
          />
        </div>
      </div>

      <div className={styles.formRow}>
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
        <div className={styles.field}>
          <label htmlFor="contact-phone">
            Phone <span>Optional</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="210-555-0100"
            maxLength={40}
            value={fields.phone}
            onChange={(event) => updateField('phone', event)}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="contact-company">
            Company <span>Optional</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company"
            maxLength={120}
            value={fields.company}
            onChange={(event) => updateField('company', event)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-service">
            Area of interest <span>Optional</span>
          </label>
          <select
            id="contact-service"
            name="service"
            value={fields.service}
            onChange={(event) => updateField('service', event)}
          >
            <option value="">Choose one</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="What would you like to know?"
          maxLength={4000}
          required
          value={fields.message}
          onChange={(event) => updateField('message', event)}
        />
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
