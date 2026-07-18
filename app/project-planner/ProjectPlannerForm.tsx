'use client'

import { useEffect, useRef, useState } from 'react'
import { track } from '@vercel/analytics'
import Link from 'next/link'
import styles from './project-planner.module.css'

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
  'Photography',
  'Studio Rental',
  'Other',
]

const goals = [
  'Build brand awareness',
  'Generate leads or sales',
  'Recruit or train people',
  'Explain a product or service',
  'Capture an event',
  'Build a content library',
  'Not sure yet',
]

const deliverableOptions = [
  'Brand or hero film',
  'Commercial or paid ad',
  'Interview or testimonial',
  'Event recap or sessions',
  'Social cutdowns',
  'Photography',
  'Live stream',
  'Motion graphics',
]

const channelOptions = [
  'Website',
  'Social media',
  'Broadcast / CTV',
  'Internal communications',
  'Sales presentations',
  'Live event',
]

const timelines = [
  'ASAP / Rush',
  'Within 2 Weeks',
  'Within a Month',
  '1-3 Months Out',
  'Planning Ahead (3+ Months)',
  'Not Sure Yet',
]

const budgets = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
  'Not sure yet',
]

const stepLabels = ['Project', 'Deliverables', 'Logistics', 'Review']

const stepGuidance = [
  {
    title: 'A clear goal is enough',
    copy: 'You do not need to know the format yet. Start with the closest service and the business result you need.',
    points: ['Choose the closest service', 'Name the primary audience', 'Describe the result you want'],
  },
  {
    title: 'Think beyond one video',
    copy: 'Select every output that could be useful. We can prioritize the final list when we shape the scope.',
    points: ['Include primary deliverables', 'Consider shorter cutdowns', 'Mark every likely channel'],
  },
  {
    title: 'Estimates are welcome',
    copy: 'Timing and budget help us right-size the approach. Both can be refined after the first conversation.',
    points: ['Budget is optional', 'A city or TBD is enough', 'Share a brief, deck, or reference link'],
  },
  {
    title: 'Reviewed personally',
    copy: 'Your brief goes directly to our team. We review the details and respond within one business day.',
    points: ['No automated quote', 'No account required', 'No fixed package'],
  },
]

type PlannerFields = {
  service: string
  goal: string
  overview: string
  deliverables: string[]
  channels: string[]
  timeline: string
  budget: string
  shootLocation: string
  targetDate: string
  referenceLink: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  website: string
}

const initialFields: PlannerFields = {
  service: '',
  goal: '',
  overview: '',
  deliverables: [],
  channels: [],
  timeline: '',
  budget: '',
  shootLocation: '',
  targetDate: '',
  referenceLink: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  website: '',
}

function ChoiceGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string
  name: string
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <fieldset className={styles.fieldset}>
      <legend>{legend}</legend>
      <div className={styles.choiceGrid}>
        {options.map((option) => (
          <label
            key={option}
            className={`${styles.choiceCard} ${value === option ? styles.choiceSelected : ''}`}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
            <span className={styles.choiceMark} aria-hidden="true">✓</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function MultiChoiceGroup({
  legend,
  options,
  values,
  onChange,
}: {
  legend: string
  options: string[]
  values: string[]
  onChange: (value: string) => void
}) {
  return (
    <fieldset className={styles.fieldset}>
      <legend>{legend}</legend>
      <div className={styles.choiceGrid}>
        {options.map((option) => (
          <label
            key={option}
            className={`${styles.choiceCard} ${values.includes(option) ? styles.choiceSelected : ''}`}
          >
            <input
              type="checkbox"
              value={option}
              checked={values.includes(option)}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
            <span className={styles.choiceMark} aria-hidden="true">✓</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function ProjectPlannerForm() {
  const [step, setStep] = useState(0)
  const [fields, setFields] = useState(initialFields)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [step])

  function update<K extends keyof PlannerFields>(key: K, value: PlannerFields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
  }

  function toggleList(key: 'deliverables' | 'channels', value: string) {
    const current = fields[key]
    update(
      key,
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    )
  }

  function validateStep() {
    if (step === 0 && (!fields.service || !fields.goal || fields.overview.trim().length < 20)) {
      return 'Choose a service and goal, then add at least 20 characters about the project.'
    }
    if (step === 1 && fields.deliverables.length === 0) {
      return 'Select at least one deliverable. If you are unsure, choose the closest fit.'
    }
    if (step === 2 && !fields.timeline) {
      return 'Choose the closest timeline so we can assess scheduling.'
    }
    if (step === 3 && (!fields.firstName || !fields.lastName || !fields.email)) {
      return 'Add your name and email so we can respond to the brief.'
    }
    return ''
  }

  function nextStep() {
    const validationError = validateStep()
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    setStep((current) => Math.min(current + 1, stepLabels.length - 1))
  }

  function previousStep() {
    setError('')
    setStep((current) => Math.max(current - 1, 0))
  }

  async function submitBrief(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationError = validateStep()
    if (validationError) {
      setError(validationError)
      return
    }

    setSubmitting(true)
    setError('')

    const projectSummary = [
      `Primary goal: ${fields.goal}`,
      `Requested deliverables: ${fields.deliverables.join(', ')}`,
      `Planned channels: ${fields.channels.length ? fields.channels.join(', ') : 'Not specified'}`,
      `Shoot location: ${fields.shootLocation || 'Not specified'}`,
      `Target date: ${fields.targetDate || 'Not specified'}`,
      `Brief, deck, or reference: ${fields.referenceLink || 'Not provided'}`,
      '',
      'Project overview:',
      fields.overview.trim(),
    ].join('\n')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.firstName,
          lastName: fields.lastName,
          email: fields.email,
          phone: fields.phone,
          company: fields.company,
          service: fields.service,
          budget: fields.budget,
          timeline: fields.timeline,
          message: projectSummary,
          website: fields.website,
        }),
      })
      const result = await response.json()
      if (!response.ok) {
        setError(result.error || 'We could not send the brief. Please try again.')
        return
      }
      track('Project Brief Submitted', {
        service: fields.service,
        goal: fields.goal,
        budget: fields.budget || 'Not specified',
        timeline: fields.timeline,
        deliverableCount: fields.deliverables.length,
      })
      setSubmitted(true)
    } catch {
      setError('Network error. Please try again or call 210-279-9442.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={styles.successCard} aria-live="polite">
        <div className={styles.successMark} aria-hidden="true">✓</div>
        <p className={styles.successEyebrow}>Brief received</p>
        <h2>Thanks, {fields.firstName}.</h2>
        <p>
          A member of the Media Bar team will review the details and respond within one
          business day.
        </p>
        <ol>
          <li><span>01</span> We review your brief</li>
          <li><span>02</span> We follow up with questions</li>
          <li><span>03</span> We recommend the next step</li>
        </ol>
        <Link href="/work" className={styles.primaryButton}>Explore our work</Link>
      </div>
    )
  }

  const guidance = stepGuidance[step]

  return (
    <div className={styles.plannerShell}>
      <ol className={styles.progress} aria-label="Project planner progress">
        {stepLabels.map((label, index) => (
          <li
            key={label}
            className={`${index === step ? styles.progressActive : ''} ${index < step ? styles.progressComplete : ''}`}
            aria-current={index === step ? 'step' : undefined}
          >
            <span>0{index + 1}</span>
            <strong>{label}</strong>
          </li>
        ))}
      </ol>

      <form
        className={styles.plannerCard}
        method="post"
        onSubmit={submitBrief}
        aria-busy={submitting}
      >
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="planner-website">Website</label>
          <input
            id="planner-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={fields.website}
            onChange={(event) => update('website', event.target.value)}
          />
        </div>

        <div className={styles.plannerMain}>
          <p className={styles.stepKicker}>Step {step + 1} of {stepLabels.length}</p>

          {step === 0 && (
            <>
              <h2 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>The project</h2>
              <p className={styles.stepCopy}>Start with the closest fit. We can refine the format together.</p>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="planner-service">Primary service</label>
                <select
                  id="planner-service"
                  className={styles.control}
                  value={fields.service}
                  onChange={(event) => update('service', event.target.value)}
                  required
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => <option key={service}>{service}</option>)}
                </select>
              </div>
              <ChoiceGroup
                legend="What should the project accomplish?"
                name="goal"
                options={goals}
                value={fields.goal}
                onChange={(value) => update('goal', value)}
              />
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="planner-overview">Project overview</label>
                <textarea
                  id="planner-overview"
                  className={`${styles.control} ${styles.textarea}`}
                  maxLength={2500}
                  value={fields.overview}
                  onChange={(event) => update('overview', event.target.value)}
                  placeholder="What are you trying to communicate, and who needs to see it?"
                  required
                />
                <p className={styles.fieldHelp}>A few sentences are enough. Minimum 20 characters.</p>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h2 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>The output</h2>
              <p className={styles.stepCopy}>Choose everything that might be useful. We will help prioritize the list.</p>
              <MultiChoiceGroup
                legend="What should the project deliver?"
                options={deliverableOptions}
                values={fields.deliverables}
                onChange={(value) => toggleList('deliverables', value)}
              />
              <MultiChoiceGroup
                legend="Where will the content be used?"
                options={channelOptions}
                values={fields.channels}
                onChange={(value) => toggleList('channels', value)}
              />
            </>
          )}

          {step === 2 && (
            <>
              <h2 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>Timing and logistics</h2>
              <p className={styles.stepCopy}>Use your best estimate. Nothing here locks you into a scope.</p>
              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="planner-timeline">Timeline</label>
                  <select
                    id="planner-timeline"
                    className={styles.control}
                    value={fields.timeline}
                    onChange={(event) => update('timeline', event.target.value)}
                    required
                  >
                    <option value="">Choose a timeline</option>
                    {timelines.map((timeline) => <option key={timeline}>{timeline}</option>)}
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="planner-budget">Working budget <span>Optional</span></label>
                  <select
                    id="planner-budget"
                    className={styles.control}
                    value={fields.budget}
                    onChange={(event) => update('budget', event.target.value)}
                  >
                    <option value="">Choose a range</option>
                    {budgets.map((budget) => <option key={budget}>{budget}</option>)}
                  </select>
                </div>
              </div>
              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="planner-location">Shoot location <span>Optional</span></label>
                  <input
                    id="planner-location"
                    className={styles.control}
                    maxLength={160}
                    value={fields.shootLocation}
                    onChange={(event) => update('shootLocation', event.target.value)}
                    placeholder="City, venue, or TBD"
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="planner-date">Target date <span>Optional</span></label>
                  <input
                    id="planner-date"
                    className={styles.control}
                    type="date"
                    value={fields.targetDate}
                    onChange={(event) => update('targetDate', event.target.value)}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="planner-reference">Brief, deck, or reference link <span>Optional</span></label>
                <input
                  id="planner-reference"
                  className={styles.control}
                  type="url"
                  maxLength={500}
                  value={fields.referenceLink}
                  onChange={(event) => update('referenceLink', event.target.value)}
                  placeholder="https://"
                />
                <p className={styles.fieldHelp}>Paste a share link from Google Drive, Dropbox, Vimeo, or another service.</p>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>Review and send</h2>
              <p className={styles.stepCopy}>Check the brief and tell us where to send our response.</p>
              <div className={styles.reviewList}>
                <div><span>Service</span><strong>{fields.service}</strong></div>
                <div><span>Goal</span><strong>{fields.goal}</strong></div>
                <div><span>Deliverables</span><strong>{fields.deliverables.join(', ')}</strong></div>
                <div><span>Timeline</span><strong>{fields.timeline}{fields.budget ? ` • ${fields.budget}` : ''}</strong></div>
              </div>
              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="planner-first-name">First name</label>
                  <input id="planner-first-name" className={styles.control} autoComplete="given-name" maxLength={80} required value={fields.firstName} onChange={(event) => update('firstName', event.target.value)} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="planner-last-name">Last name</label>
                  <input id="planner-last-name" className={styles.control} autoComplete="family-name" maxLength={80} required value={fields.lastName} onChange={(event) => update('lastName', event.target.value)} />
                </div>
              </div>
              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="planner-email">Email</label>
                  <input id="planner-email" className={styles.control} type="email" autoComplete="email" maxLength={254} required value={fields.email} onChange={(event) => update('email', event.target.value)} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="planner-phone">Phone <span>Optional</span></label>
                  <input id="planner-phone" className={styles.control} type="tel" autoComplete="tel" maxLength={40} value={fields.phone} onChange={(event) => update('phone', event.target.value)} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="planner-company">Company <span>Optional</span></label>
                <input id="planner-company" className={styles.control} autoComplete="organization" maxLength={120} value={fields.company} onChange={(event) => update('company', event.target.value)} />
              </div>
              <p className={styles.privacyNote}>
                We use these details only to respond to your project inquiry. Please do not
                include confidential or sensitive information.
              </p>
            </>
          )}

          <div className={styles.status} aria-live="polite">
            {error && <div className={styles.error} role="alert">{error}</div>}
          </div>

          <div className={styles.actions}>
            {step > 0 && (
              <button type="button" className={styles.secondaryButton} onClick={previousStep} disabled={submitting}>
                Back
              </button>
            )}
            {step < stepLabels.length - 1 ? (
              <button type="button" className={styles.primaryButton} onClick={nextStep}>
                Save and continue
              </button>
            ) : (
              <button type="submit" className={styles.primaryButton} disabled={submitting}>
                {submitting ? 'Sending...' : 'Send project brief'}
              </button>
            )}
          </div>
        </div>

        <aside className={styles.plannerAside}>
          <p className={styles.asideStep}>Step 0{step + 1}</p>
          <h3>{guidance.title}</h3>
          <p>{guidance.copy}</p>
          <ul>
            {guidance.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <div className={styles.asideContact}>
            <span>Prefer a conversation?</span>
            <a href="tel:+12102799442">210-279-9442</a>
          </div>
        </aside>
      </form>
    </div>
  )
}
