'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'
import { analyticsEvents } from '@/lib/analytics-events'
import styles from './video-production-faq.module.css'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialFields = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
  website: '',
  source: 'video-production-faq',
}

export default function AskQuestionForm() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const hasTrackedStart = useRef(false)

  function updateField(
    field: keyof typeof initialFields,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (field !== 'website' && !hasTrackedStart.current) {
      hasTrackedStart.current = true
      track(analyticsEvents.faqQuestionFormStarted)
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
        body: JSON.stringify(fields),
      })
      const data = await response.json()

      if (!response.ok) {
        track(analyticsEvents.faqQuestionSubmissionFailed, { reason: 'server' })
        setStatus('error')
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      track(analyticsEvents.faqQuestionSubmitted)
      setFields(initialFields)
      setStatus('success')
    } catch {
      track(analyticsEvents.faqQuestionSubmissionFailed, { reason: 'network' })
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.questionSuccess} role="status">
        <span aria-hidden="true">✓</span>
        <p className={styles.eyebrow}>Question received</p>
        <h3>Thank you for improving the resource.</h3>
        <p>
          The Media Bar team will review your question. If it can help other
          production planners, it may inform a future update to this guide.
        </p>
        <div>
          <button
            type="button"
            onClick={() => {
              setStatus('idle')
              setErrorMessage('')
              hasTrackedStart.current = false
            }}
          >
            Ask another question
          </button>
          <Link href="/project-planner">Plan a project</Link>
        </div>
      </div>
    )
  }

  return (
    <form className={styles.questionForm} onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="faq-website">Website</label>
        <input
          id="faq-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(event) => updateField('website', event)}
        />
      </div>

      <div className={styles.questionFormRow}>
        <div className={styles.questionField}>
          <label htmlFor="faq-first-name">First name</label>
          <input
            id="faq-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            maxLength={80}
            required
            value={fields.firstName}
            onChange={(event) => updateField('firstName', event)}
          />
        </div>
        <div className={styles.questionField}>
          <label htmlFor="faq-last-name">Last name</label>
          <input
            id="faq-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            maxLength={80}
            required
            value={fields.lastName}
            onChange={(event) => updateField('lastName', event)}
          />
        </div>
      </div>

      <div className={styles.questionFormRow}>
        <div className={styles.questionField}>
          <label htmlFor="faq-email">Work email</label>
          <input
            id="faq-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            value={fields.email}
            onChange={(event) => updateField('email', event)}
          />
        </div>
        <div className={styles.questionField}>
          <label htmlFor="faq-company">Organization <span>Optional</span></label>
          <input
            id="faq-company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            value={fields.company}
            onChange={(event) => updateField('company', event)}
          />
        </div>
      </div>

      <div className={styles.questionField}>
        <label htmlFor="faq-question">What would you like to know?</label>
        <textarea
          id="faq-question"
          name="message"
          placeholder="Ask a practical question about planning, filming, editing, delivery, or producing in Texas."
          maxLength={4000}
          required
          value={fields.message}
          onChange={(event) => updateField('message', event)}
        />
      </div>

      <p className={styles.questionPrivacy}>
        We use these details only to review and respond to your question. Please
        do not include confidential, medical, legal, or personally sensitive information.
      </p>

      {status === 'error' && (
        <p id="faq-question-error" className={styles.questionError} role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className={styles.questionSubmit}
        disabled={status === 'submitting'}
        aria-describedby={status === 'error' ? 'faq-question-error' : undefined}
      >
        {status === 'submitting' ? 'Sending...' : 'Submit your question'}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
