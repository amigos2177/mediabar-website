'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { InquiryReference, InquiryTestNotice } from '@/components/InquiryMeasurementNotice'
import { inquiryReceiptProperties, isInternalInquiryTest, shouldTrackInquiry } from '@/lib/inquiry-measurement'
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
  service: '',
  budget: '',
}

function splitName(name: string) {
  const [firstName = '', ...remainingNames] = name.trim().split(/\s+/)

  return {
    firstName,
    lastName: remainingNames.join(' '),
  }
}

export default function ContactForm({ projectInquiry = false }: { projectInquiry?: boolean }) {
  const [fields, setFields] = useState(initialFields)
  const [inquiryReference, setInquiryReference] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const hasTrackedStart = useRef(false)
  const submissionInFlight = useRef(false)
  const formPath = projectInquiry ? '/san-antonio-video-inquiry' : '/contact'
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
    if (submissionInFlight.current) return
    submissionInFlight.current = true
    setStatus('submitting')
    setErrorMessage('')

    const internalTest = isInternalInquiryTest()
    setInquiryReference('')
    try {
      const { firstName, lastName } = splitName(fields.name)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          internalTest,
          firstName,
          lastName,
          email: fields.email,
          message: fields.message,
          discoverySource: fields.discoverySource,
          website: fields.website,
          ...(projectInquiry ? { service: fields.service, budget: fields.budget } : { source: 'contact-quick-question' }),
          utmSource: campaignAttribution.current?.utmSource,
          utmMedium: campaignAttribution.current?.utmMedium,
          utmCampaign: campaignAttribution.current?.utmCampaign,
          utmContent: campaignAttribution.current?.utmContent,
          landingPage: campaignAttribution.current?.landingPage,
          firstTouchSource: campaignAttribution.current?.firstTouchSource,
          referrer: campaignAttribution.current?.referrer,
          sourcePage: projectInquiry ? formPath : conversionAttribution.current?.sourcePath || '/contact',
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

      const receiptProperties = inquiryReceiptProperties(data)
      setInquiryReference(receiptProperties.inquiry_reference || '')
      const trackSubmission = shouldTrackInquiry(data, fields.website, internalTest)
      if (trackSubmission) {
        trackAnalyticsEvent(analyticsEvents.contactFormSubmitted, {
          ...receiptProperties,
          service: projectInquiry ? fields.service : 'General inquiry',
          leadType: projectInquiry ? 'project_inquiry' : 'quick_question',
          discoverySource: fields.discoverySource || 'not_provided',
          ...conversionProperties(),
        }, 'generate_lead')
      }
      if (projectInquiry && trackSubmission &&
        ['Corporate Video', 'Commercials'].includes(fields.service) &&
        ['$5,000 - $15,000', '$15,000 - $50,000', '$50,000+'].includes(fields.budget)) {
        trackAnalyticsEvent('qualified_project_inquiry', {
          ...receiptProperties,
          ...conversionProperties(),
          sourcePath: formPath,
          service: fields.service,
          budget_range: fields.budget,
          leadType: 'project_inquiry',
        })
      }
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
    } finally {
      submissionInFlight.current = false
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
        <InquiryTestNotice />
        <p className={styles.eyebrow}>Message received</p>
        <InquiryReference reference={inquiryReference} />
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
      <InquiryTestNotice />
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

      {projectInquiry && (
        <div className={styles.formRow}>
          <div className={styles.field}>
            <label htmlFor="contact-service">Project type</label>
            <select id="contact-service" required value={fields.service} onChange={(event) => updateField('service', event)}>
              <option value="">Choose a service</option>
              {['Corporate Video', 'Commercials', 'Other'].map((service) => <option key={service}>{service}</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-budget">Working budget</label>
            <select id="contact-budget" required value={fields.budget} onChange={(event) => updateField('budget', event)}>
              <option value="">Choose a range</option>
              {['Under $5,000', '$5,000 - $15,000', '$15,000 - $50,000', '$50,000+', 'Not sure yet'].map((budget) => <option key={budget}>{budget}</option>)}
            </select>
          </div>
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="contact-message">{projectInquiry ? 'Tell us about the project' : 'Your question'}</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder={projectInquiry ? 'What are you producing, and when do you need it? A few sentences are enough.' : 'How can we help?'}
          maxLength={4000}
          required
          value={fields.message}
          onChange={(event) => updateField('message', event)}
        />
      </div>

      {!projectInquiry && <div className={styles.field}>
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
      </div>}

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
        {status === 'submitting' ? 'Sending...' : projectInquiry ? 'Discuss my project' : 'Send message'}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
