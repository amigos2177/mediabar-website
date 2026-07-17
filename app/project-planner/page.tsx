'use client'

import { useEffect, useRef, useState } from 'react'
import { track } from '@vercel/analytics'
import Link from 'next/link'
import Layout from '../../components/Layout'

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
  '1–3 Months Out',
  'Planning Ahead (3+ Months)',
  'Not Sure Yet',
]

const budgets = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
]

const stepLabels = ['Project', 'Deliverables', 'Logistics', 'Review']

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
  inspirationLink: string
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
  inspirationLink: '',
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
    <fieldset className="planner-fieldset">
      <legend>{legend}</legend>
      <div className="choice-grid">
        {options.map((option) => (
          <label key={option} className={`choice-card${value === option ? ' selected' : ''}`}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
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
    <fieldset className="planner-fieldset">
      <legend>{legend}</legend>
      <div className="choice-grid">
        {options.map((option) => (
          <label key={option} className={`choice-card${values.includes(option) ? ' selected' : ''}`}>
            <input
              type="checkbox"
              value={option}
              checked={values.includes(option)}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function ProjectPlannerPage() {
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
    update(key, current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value])
  }

  function validateStep() {
    if (step === 0 && (!fields.service || !fields.goal || fields.overview.trim().length < 20)) {
      return 'Choose a service and goal, then tell us a little more about the project.'
    }
    if (step === 1 && fields.deliverables.length === 0) {
      return 'Select at least one deliverable. “Not sure yet” is okay—describe that in your overview.'
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

  async function submitBrief(event: React.FormEvent) {
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
      `Inspiration or reference: ${fields.inspirationLink || 'Not provided'}`,
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

  return (
    <Layout>
      <style>{`
        :root{--red:#CC0000;--gold:#C9A84C;--black:#0A0A0A;--dark:#111;--dark2:#181818}
        .planner-page{min-height:100vh;background:var(--black);padding:132px 24px 96px}
        .planner-shell{max-width:1040px;margin:0 auto}
        .planner-intro{text-align:center;margin-bottom:46px}
        .planner-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;margin-bottom:12px}
        .planner-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(48px,7vw,84px);line-height:.95;letter-spacing:.02em;text-transform:uppercase;color:#fff}
        .planner-title em{font-family:'Playfair Display',Georgia,serif;font-size:.72em;font-style:italic;text-transform:none;color:rgba(255,255,255,.55)}
        .planner-sub{max-width:610px;margin:18px auto 0;color:#b8b8b8;font-size:16px;line-height:1.7}

        .planner-progress{display:grid;grid-template-columns:repeat(4,1fr);list-style:none;margin:0 0 24px;padding:0}
        .progress-item{position:relative;padding:0 8px 18px;border-bottom:2px solid #252525;color:#727272;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
        .progress-item span{display:block;color:inherit;font-family:'Bebas Neue',Impact,sans-serif;font-size:18px;letter-spacing:.05em}
        .progress-item.active{border-color:var(--red);color:#fff}
        .progress-item.complete{border-color:var(--gold);color:#b7a36b}

        .planner-card{display:grid;grid-template-columns:minmax(0,1fr) 250px;background:var(--dark);border:1px solid #242424;min-height:560px}
        .planner-main{padding:48px}
        .planner-aside{padding:48px 32px;background:#0d0d0d;border-left:1px solid #242424}
        .step-kicker{color:var(--gold);font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;margin-bottom:10px}
        .step-title{font-family:'Bebas Neue',Impact,sans-serif;color:#fff;font-size:clamp(34px,4vw,50px);line-height:1;letter-spacing:.03em;text-transform:uppercase;margin-bottom:10px;outline:none}
        .step-title:focus-visible{outline:none}
        .step-copy{color:#aaa;font-size:14px;line-height:1.7;margin-bottom:34px}
        .planner-fieldset{border:0;margin:0 0 30px;padding:0}
        .planner-fieldset legend,.field-label{display:block;color:#d5d5d5;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px}
        .choice-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
        .choice-card{position:relative;display:flex;align-items:center;min-height:50px;padding:12px 14px;border:1px solid #303030;background:#171717;color:#aaa;cursor:pointer;transition:border-color .15s,background .15s,color .15s}
        .choice-card:hover{border-color:#555;color:#fff}
        .choice-card.selected{border-color:var(--red);background:#210b0b;color:#fff}
        .choice-card input{position:absolute;opacity:0;pointer-events:none}
        .choice-card:has(input:focus-visible){outline:3px solid var(--gold);outline-offset:2px}
        .choice-card span{font-size:13px;line-height:1.35}
        .field{margin-bottom:22px}
        .text-input,.text-area,.select-input{width:100%;border:1px solid #303030;background:#171717;color:#fff;padding:14px 15px;font:inherit;font-size:14px}
        .text-area{min-height:130px;resize:vertical;line-height:1.6}
        .field-help{margin-top:7px;color:#777;font-size:11px;line-height:1.5}
        .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .form-honeypot{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}

        .review-list{display:grid;gap:1px;background:#2a2a2a;border:1px solid #2a2a2a;margin-bottom:26px}
        .review-row{display:grid;grid-template-columns:150px 1fr;gap:20px;background:#141414;padding:14px 16px}
        .review-label{color:#777;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
        .review-value{color:#d0d0d0;font-size:13px;line-height:1.5}
        .planner-error{margin:20px 0 0;padding:12px 14px;border:1px solid var(--red);background:#1d0606;color:#ffaaaa;font-size:13px}
        .planner-actions{display:flex;justify-content:space-between;gap:16px;margin-top:34px}
        .planner-button{border:0;padding:14px 28px;font:inherit;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}
        .planner-button.primary{margin-left:auto;background:var(--red);color:#fff}
        .planner-button.primary:hover{background:#a90000}
        .planner-button.secondary{border:1px solid #383838;background:transparent;color:#aaa}
        .planner-button:disabled{opacity:.55;cursor:not-allowed}

        .aside-label{color:var(--red);font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;margin-bottom:12px}
        .aside-title{font-family:'Bebas Neue',Impact,sans-serif;color:#fff;font-size:23px;letter-spacing:.04em;margin-bottom:10px}
        .aside-copy{color:#898989;font-size:12px;line-height:1.7;margin-bottom:28px}
        .aside-list{list-style:none;padding:0;margin:0}
        .aside-list li{position:relative;padding:10px 0 10px 18px;border-top:1px solid #242424;color:#aaa;font-size:12px;line-height:1.5}
        .aside-list li::before{content:'•';position:absolute;left:2px;color:var(--red)}

        .success-card{max-width:720px;margin:0 auto;padding:64px;background:var(--dark);border:1px solid #2a2a2a;text-align:center}
        .success-mark{display:grid;place-items:center;width:60px;height:60px;margin:0 auto 22px;border-radius:50%;background:var(--red);font-size:28px}
        .success-title{font-family:'Bebas Neue',Impact,sans-serif;color:#fff;font-size:44px;letter-spacing:.03em;text-transform:uppercase}
        .success-copy{color:#aaa;line-height:1.7;margin:12px auto 28px;max-width:500px}
        .success-link{display:inline-block;background:var(--red);color:#fff;padding:14px 28px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}

        @media(max-width:800px){
          .planner-card{grid-template-columns:1fr}
          .planner-aside{border-left:0;border-top:1px solid #242424;padding:28px}
          .planner-main{padding:32px 24px}
        }
        @media(max-width:560px){
          .planner-page{padding:112px 16px 64px}
          .choice-grid,.field-grid{grid-template-columns:1fr}
          .planner-progress{overflow-x:auto}
          .progress-item{min-width:100px}
          .progress-item span{font-size:15px}
          .review-row{grid-template-columns:1fr;gap:5px}
          .success-card{padding:44px 24px}
        }
      `}</style>

      <main className="planner-page">
        {submitted ? (
          <div className="success-card">
            <div className="success-mark" aria-hidden="true">✓</div>
            <h1 className="success-title">Your Brief Is In</h1>
            <p className="success-copy">
              Thanks, {fields.firstName}. A member of the Media Bar team will review the details
              and respond within one business day.
            </p>
            <Link href="/work" className="success-link">Explore Our Work</Link>
          </div>
        ) : (
          <div className="planner-shell">
            <header className="planner-intro">
              <p className="planner-eyebrow">Guided Project Brief</p>
              <h1 className="planner-title">Plan Your <em>Project</em></h1>
              <p className="planner-sub">
                Four focused steps give us enough context for a useful first conversation—without
                asking you to write a full creative brief.
              </p>
            </header>

            <ol className="planner-progress" aria-label="Project planner progress">
              {stepLabels.map((label, index) => (
                <li
                  key={label}
                  className={`progress-item${index === step ? ' active' : ''}${index < step ? ' complete' : ''}`}
                  aria-current={index === step ? 'step' : undefined}
                >
                  <span>0{index + 1}</span>
                  {label}
                </li>
              ))}
            </ol>

            <form className="planner-card" method="post" onSubmit={submitBrief}>
              <div className="form-honeypot" aria-hidden="true">
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

              <div className="planner-main">
                <p className="step-kicker">Step {step + 1} of {stepLabels.length}</p>

                {step === 0 && (
                  <>
                    <h2 ref={headingRef} tabIndex={-1} className="step-title">What are we making?</h2>
                    <p className="step-copy">Start with the closest fit. We can refine the format together.</p>
                    <div className="field">
                      <label className="field-label" htmlFor="planner-service">Primary service</label>
                      <select
                        id="planner-service"
                        className="select-input"
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
                    <div className="field">
                      <label className="field-label" htmlFor="planner-overview">Project overview</label>
                      <textarea
                        id="planner-overview"
                        className="text-area"
                        maxLength={2500}
                        value={fields.overview}
                        onChange={(event) => update('overview', event.target.value)}
                        placeholder="What are you trying to communicate, and who needs to see it?"
                        required
                      />
                      <p className="field-help">A few sentences are enough. Minimum 20 characters.</p>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <h2 ref={headingRef} tabIndex={-1} className="step-title">What should the shoot deliver?</h2>
                    <p className="step-copy">Choose everything that might be useful. We’ll help prioritize the list.</p>
                    <MultiChoiceGroup
                      legend="Deliverables"
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
                    <h2 ref={headingRef} tabIndex={-1} className="step-title">Timing and logistics</h2>
                    <p className="step-copy">Estimates are useful. Nothing here locks you into a scope.</p>
                    <div className="field-grid">
                      <div className="field">
                        <label className="field-label" htmlFor="planner-timeline">Timeline</label>
                        <select
                          id="planner-timeline"
                          className="select-input"
                          value={fields.timeline}
                          onChange={(event) => update('timeline', event.target.value)}
                          required
                        >
                          <option value="">Choose a timeline</option>
                          {timelines.map((timeline) => <option key={timeline}>{timeline}</option>)}
                        </select>
                      </div>
                      <div className="field">
                        <label className="field-label" htmlFor="planner-budget">Working budget</label>
                        <select
                          id="planner-budget"
                          className="select-input"
                          value={fields.budget}
                          onChange={(event) => update('budget', event.target.value)}
                        >
                          <option value="">Choose a range</option>
                          {budgets.map((budget) => <option key={budget}>{budget}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="field-grid">
                      <div className="field">
                        <label className="field-label" htmlFor="planner-location">Shoot location</label>
                        <input
                          id="planner-location"
                          className="text-input"
                          maxLength={160}
                          value={fields.shootLocation}
                          onChange={(event) => update('shootLocation', event.target.value)}
                          placeholder="City, venue, or TBD"
                        />
                      </div>
                      <div className="field">
                        <label className="field-label" htmlFor="planner-date">Target date</label>
                        <input
                          id="planner-date"
                          className="text-input"
                          type="date"
                          value={fields.targetDate}
                          onChange={(event) => update('targetDate', event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field-label" htmlFor="planner-inspiration">Reference or inspiration link</label>
                      <input
                        id="planner-inspiration"
                        className="text-input"
                        type="url"
                        maxLength={500}
                        value={fields.inspirationLink}
                        onChange={(event) => update('inspirationLink', event.target.value)}
                        placeholder="https://"
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h2 ref={headingRef} tabIndex={-1} className="step-title">Review and send</h2>
                    <p className="step-copy">Add your contact details and check the brief before it reaches our team.</p>
                    <div className="review-list">
                      <div className="review-row"><span className="review-label">Service</span><span className="review-value">{fields.service}</span></div>
                      <div className="review-row"><span className="review-label">Goal</span><span className="review-value">{fields.goal}</span></div>
                      <div className="review-row"><span className="review-label">Deliverables</span><span className="review-value">{fields.deliverables.join(', ')}</span></div>
                      <div className="review-row"><span className="review-label">Timeline</span><span className="review-value">{fields.timeline}{fields.budget ? ` · ${fields.budget}` : ''}</span></div>
                    </div>
                    <div className="field-grid">
                      <div className="field">
                        <label className="field-label" htmlFor="planner-first-name">First name</label>
                        <input id="planner-first-name" className="text-input" autoComplete="given-name" maxLength={80} required value={fields.firstName} onChange={(event) => update('firstName', event.target.value)} />
                      </div>
                      <div className="field">
                        <label className="field-label" htmlFor="planner-last-name">Last name</label>
                        <input id="planner-last-name" className="text-input" autoComplete="family-name" maxLength={80} required value={fields.lastName} onChange={(event) => update('lastName', event.target.value)} />
                      </div>
                    </div>
                    <div className="field-grid">
                      <div className="field">
                        <label className="field-label" htmlFor="planner-email">Email</label>
                        <input id="planner-email" className="text-input" type="email" autoComplete="email" maxLength={254} required value={fields.email} onChange={(event) => update('email', event.target.value)} />
                      </div>
                      <div className="field">
                        <label className="field-label" htmlFor="planner-phone">Phone</label>
                        <input id="planner-phone" className="text-input" type="tel" autoComplete="tel" maxLength={40} value={fields.phone} onChange={(event) => update('phone', event.target.value)} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field-label" htmlFor="planner-company">Company</label>
                      <input id="planner-company" className="text-input" autoComplete="organization" maxLength={120} value={fields.company} onChange={(event) => update('company', event.target.value)} />
                    </div>
                    <p className="field-help">We use these details only to respond to this project inquiry.</p>
                  </>
                )}

                {error && <div className="planner-error" role="alert">{error}</div>}

                <div className="planner-actions">
                  {step > 0 && (
                    <button type="button" className="planner-button secondary" onClick={previousStep}>
                      Back
                    </button>
                  )}
                  {step < stepLabels.length - 1 ? (
                    <button type="button" className="planner-button primary" onClick={nextStep}>
                      Save &amp; Continue
                    </button>
                  ) : (
                    <button type="submit" className="planner-button primary" disabled={submitting}>
                      {submitting ? 'Sending…' : 'Send Project Brief'}
                    </button>
                  )}
                </div>
              </div>

              <aside className="planner-aside">
                <p className="aside-label">What happens next</p>
                <h3 className="aside-title">A useful first response</h3>
                <p className="aside-copy">
                  We review every brief personally and respond within one business day. No automated
                  quote and no sales-pressure sequence.
                </p>
                <ul className="aside-list">
                  <li>We flag missing scope or scheduling questions.</li>
                  <li>We recommend the leanest practical production approach.</li>
                  <li>You receive clear next steps before committing to anything.</li>
                </ul>
              </aside>
            </form>
          </div>
        )}
      </main>
    </Layout>
  )
}
