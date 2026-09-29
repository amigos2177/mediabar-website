'use client'

import { useRef, useState, type FormEvent } from 'react'
import { spotlightCities, spotlightPublicationPermission } from '@/lib/business-spotlight'
import styles from './spotlight.module.css'

export default function SpotlightForm({ preview = false }: { preview?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'preview'>('idle')
  const [error, setError] = useState('')
  const feedback = useRef<HTMLDivElement>(null)
  const pending = useRef(false)
  const submission = useRef<{ payload: string; id: string } | null>(null)

  function focusFeedback() { requestAnimationFrame(() => feedback.current?.focus()) }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending.current) return
    const form = event.currentTarget
    const values = new FormData(form)
    const body = Object.fromEntries(values.entries())
    const payload = JSON.stringify({ ...body, eligible: values.has('eligible'), participation: values.has('participation'), publicationPermission: values.has('publicationPermission'), contactPermission: values.has('contactPermission') })
    setError('')
    if (preview) { setStatus('preview'); focusFeedback(); return }
    if (submission.current?.payload !== payload) submission.current = { payload, id: crypto.randomUUID() }
    pending.current = true
    setStatus('sending')
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20_000)
    try {
      const response = await fetch('/api/business-spotlight', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...JSON.parse(payload), submissionId: submission.current.id }),
        signal: controller.signal,
      })
      const result = await response.json()
      if (!response.ok || result.success !== true) throw new Error(result.error || 'Your application could not be confirmed. Please try again.')
      setStatus('success')
      form.reset()
    } catch (failure) {
      setStatus('idle')
      setError(failure instanceof Error && failure.name !== 'AbortError' ? failure.message : 'We could not confirm your submission. Your answers are still here. Please try again.')
    } finally { clearTimeout(timeout); pending.current = false; focusFeedback() }
  }

  if (status === 'success') return (
    <div className={styles.success} ref={feedback} tabIndex={-1} role="status">
      <span className={styles.eyebrow}>Application received</span>
      <h3>Thank you for sharing your story.</h3>
      <p>Our team will review it for the Texas Business Spotlight YouTube series. If your business is shortlisted, we’ll contact you by email to discuss the story and filming schedule.</p>
      <p>Submitting an application does not guarantee selection. You have not been added to a marketing list.</p>
      <a href="#details">Review the participation details ↑</a>
    </div>
  )

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Business Spotlight application">
      <p className={styles.formNote}>All fields are required unless marked optional. A few thoughtful sentences are enough.</p>
      <fieldset disabled={status === 'sending'}>
        <legend className={styles.srOnly}>Your business and story</legend>
        <div className={styles.formGrid}>
          <label>Business name<input name="businessName" required maxLength={120} autoComplete="organization" /></label>
          <label>Your name<input name="contactName" required maxLength={120} autoComplete="name" /></label>
          <label>Email address<input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
          <label>Business location<select name="city" required defaultValue=""><option value="" disabled>Select a city</option>{spotlightCities.map(city => <option key={city}>{city}</option>)}</select></label>
        </div>
        <label>Website or social profile <span>(optional)</span><input name="businessLink" type="url" maxLength={500} placeholder="https://" autoComplete="url" /></label>
        <label htmlFor="spotlight-story">What’s the story behind your business?</label>
        <p id="story-help" className={styles.hint}>Tell us what you do, who you serve, and what you wish more people knew. You don’t need a polished pitch.</p>
        <textarea id="spotlight-story" name="story" required minLength={20} maxLength={2000} rows={6} aria-describedby="story-help" />
        <label htmlFor="spotlight-visuals">What could we film at your business?</label>
        <p id="visuals-help" className={styles.hint}>Your team at work, a product being made, your space, or the way you help customers.</p>
        <textarea id="spotlight-visuals" name="visuals" required minLength={10} maxLength={1000} rows={4} aria-describedby="visuals-help" />
        <div className={styles.trap} aria-hidden="true"><label>Fax number<input name="faxNumber" tabIndex={-1} autoComplete="off" /></label></div>
        <div className={styles.checks}>
          <label><input name="eligible" type="checkbox" required /><span>I am authorized to represent an operating business in San Antonio, Boerne, or New Braunfels.</span></label>
          <label><input name="participation" type="checkbox" required /><span>I’ve read the <a href="#details">participation details</a>. If selected, I can coordinate scheduling and filming permissions.</span></label>
          <label><input name="publicationPermission" type="checkbox" required /><span>{spotlightPublicationPermission}</span></label>
          <label><input name="contactPermission" type="checkbox" required /><span>Media Bar may use these details to review my application and contact me about this pilot.</span></label>
        </div>
        <button className={styles.button} type="submit">{status === 'sending' ? 'Submitting…' : preview ? 'Preview submission' : 'Share your story'}<span aria-hidden="true">↗</span></button>
      </fieldset>
      <div ref={feedback} tabIndex={-1} className={error || status === 'preview' ? styles.feedback : undefined} role={error ? 'alert' : 'status'} aria-live="polite">
        {error || (status === 'preview' ? 'Preview complete. No application was sent or stored. The live form will send your application to the Media Bar team.' : '')}
      </div>
      <p className={styles.privacy}>Your submission goes privately to the Media Bar team for selection and follow-up. It is not published as an application or added to a marketing list. Please don’t include confidential information. Questions or removal requests: <a href="mailto:contact@mediabarproductions.com">contact@mediabarproductions.com</a>.</p>
    </form>
  )
}
