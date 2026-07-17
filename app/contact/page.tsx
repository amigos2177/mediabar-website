'use client'

import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics'
import Layout from '../../components/Layout'

const services = [
  'Corporate Video', 'Commercials', 'Event Coverage', 'Interview & Discussion',
  'Medical Video', 'Aerial Video', 'Motion Graphics', 'Live Streaming',
  'Post Production', 'Food Video', 'Real Estate Video', 'Studio Rental', 'Other',
  'Photography',
]

const timelines = [
  'ASAP / Rush', 'Within 2 Weeks', 'Within a Month',
  '1–3 Months Out', 'Planning Ahead (3+ Months)', 'Not Sure Yet',
]

const budgets = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
]

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY = {
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

export default function ContactPage() {
  const [todayIndex, setTodayIndex] = useState<number>(-1)
  const [fields, setFields] = useState(EMPTY)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const frame = requestAnimationFrame(() => setTodayIndex(new Date().getDay()))

    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }) },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => obs.observe(el))
    return () => {
      cancelAnimationFrame(frame)
      obs.disconnect()
    }
  }, [])

  const hours: { day: string; time: string }[] = [
    { day: 'Monday', time: '8:00 AM – 5:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 5:00 PM' },
    { day: 'Wednesday', time: '8:00 AM – 5:00 PM' },
    { day: 'Thursday', time: '8:00 AM – 5:00 PM' },
    { day: 'Friday', time: '8:00 AM – 5:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ]

  function set(field: keyof typeof EMPTY) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      const data = await res.json()

      if (res.ok) {
        track('Contact Form Submitted', {
          service: fields.service || 'Not specified',
          budget: fields.budget || 'Not specified',
          timeline: fields.timeline || 'Not specified',
        })
        setStatus('success')
        setFields(EMPTY)
      } else {
        setStatus('error')
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <Layout>
      <style>{`
        :root{--red:#CC0000;--gold:#C9A84C;--black:#0A0A0A;--dark:#111111;--dark2:#181818}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease}.reveal.revealed{opacity:1;transform:none}

        .page-hero{position:relative;background:var(--black);padding:160px 64px 100px;overflow:hidden;border-bottom:1px solid #1a1a1a;text-align:center}
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(100px,16vw,240px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;position:relative}
        .hero-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(56px,8vw,100px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;margin-bottom:20px}
        .hero-h1 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;color:rgba(255,255,255,.55);text-transform:none}
        .hero-sub{font-size:17px;line-height:1.7;color:#C0C0C0;max-width:560px;margin:0 auto;position:relative}

        .promises-strip{background:var(--dark);border-bottom:1px solid #1e1e1e;display:flex;justify-content:center;flex-wrap:wrap}
        .promise-item{padding:32px 56px;text-align:center;border-right:1px solid #1e1e1e;flex:1;max-width:360px}
        .promise-item:last-child{border-right:none}
        .promise-icon{font-size:28px;margin-bottom:10px}
        .promise-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:18px;letter-spacing:.06em;color:#fff;margin-bottom:6px}
        .promise-desc{font-size:12px;color:#B0B0B0;line-height:1.6}

        .contact-wrap{background:var(--black)}
        .contact-inner{max-width:1200px;margin:0 auto;padding:96px 64px;display:grid;grid-template-columns:1.2fr 1fr;gap:80px;align-items:start}

        .form-section-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
        .form-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(32px,4vw,52px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:36px}
        .form-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:rgba(255,255,255,.55)}

        .contact-form{display:flex;flex-direction:column;gap:16px}
        .form-honeypot{position:absolute!important;left:-10000px!important;width:1px!important;height:1px!important;overflow:hidden!important}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .form-group{display:flex;flex-direction:column;gap:8px}
        .form-label{font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#B0B0B0}
        .form-input,.form-select,.form-textarea{background:var(--dark2);border:1px solid #2a2a2a;color:#fff;padding:14px 16px;font-size:14px;font-family:inherit;transition:border-color .15s;width:100%;appearance:none}
        .form-input:focus,.form-select:focus,.form-textarea:focus{outline:none;border-color:#555}
        .form-input::placeholder,.form-textarea::placeholder{color:#B0B0B0}
        .form-select{cursor:pointer}
        .form-select option{background:var(--dark2);color:#fff}
        .form-textarea{resize:vertical;min-height:130px}
        .form-submit{background:var(--red);color:#fff;border:none;padding:16px 48px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:background .15s;align-self:flex-start;font-family:inherit}
        .form-submit:hover:not(:disabled){background:#aa0000}
        .form-submit:disabled{opacity:.6;cursor:not-allowed}

        .form-error{background:#1a0000;border:1px solid #CC0000;color:#ff9999;padding:12px 16px;font-size:13px;line-height:1.5;border-radius:2px}

        .success-state{display:flex;flex-direction:column;align-items:flex-start;gap:20px;padding:48px 0}
        .success-check{width:56px;height:56px;background:var(--red);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .success-h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;letter-spacing:.04em;color:#fff;margin:0}
        .success-body{font-size:15px;line-height:1.7;color:#B0B0B0;margin:0}
        .success-reset{background:none;border:1px solid #333;color:#B0B0B0;padding:10px 24px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;font-family:inherit;transition:color .15s,border-color .15s}
        .success-reset:hover{color:#fff;border-color:#666}

        .info-panel{position:sticky;top:96px}
        .info-block{margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid #1e1e1e}
        .info-block:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
        .info-block-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
        .info-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;letter-spacing:.05em;color:#fff;transition:color .15s}
        .info-phone:hover{color:var(--gold)}
        .info-email{font-size:15px;color:#B0B0B0;transition:color .15s}.info-email:hover{color:#fff}
        .info-address{font-size:14px;line-height:1.8;color:#B0B0B0}
        .hours-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #1a1a1a;font-size:13px}
        .hours-row:last-child{border-bottom:none}
        .hours-day{color:#B0B0B0}.hours-time{color:#B0B0B0}
        .hours-row.today .hours-day,.hours-row.today .hours-time{color:var(--gold);font-weight:600}
        .map-wrap{width:100%;height:400px;overflow:hidden;border:1px solid #1e1e1e;margin-top:24px;border-radius:4px}
        .map-wrap iframe{width:100%;height:100%;border:none}

        @media(max-width:900px){
          .page-hero{padding:120px 24px 72px}
          .promises-strip{flex-direction:column}
          .promise-item{border-right:none;border-bottom:1px solid #1e1e1e;max-width:100%}
          .contact-inner{grid-template-columns:1fr;gap:56px;padding:64px 24px}
          .info-panel{position:static}
          .form-row{grid-template-columns:1fr}
        }
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">CONTACT</div>
        <p className="hero-eyebrow">Get In Touch</p>
        <h1 className="hero-h1">Start Your <em>Project</em></h1>
        <p className="hero-sub">Tell us what you&apos;re working on. We respond within one business day — no sales pressure, no runaround.</p>
      </section>

      <div className="promises-strip">
        {[
          { icon: '⚡', title: 'Response Within 1 Business Day', desc: 'You\'ll hear back from a real person — not a bot, not a form email.' },
          { icon: '🤝', title: 'No Sales Pressure', desc: 'We\'ll give you an honest assessment and a real quote. If we\'re not the right fit, we\'ll tell you.' },
          { icon: '📋', title: 'Honest Itemized Pricing', desc: 'Every quote is fully itemized. You know exactly what you\'re paying for before anything starts.' },
        ].map((p) => (
          <div key={p.title} className="promise-item reveal">
            <div className="promise-icon">{p.icon}</div>
            <p className="promise-title">{p.title}</p>
            <p className="promise-desc">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="contact-wrap">
        <div className="contact-inner">
          <div className="reveal">
            <p className="form-section-label">Send a Message</p>
            <h2 className="form-h2">Tell Us About <em>Your Project</em></h2>

            {status === 'success' ? (
              <div className="success-state">
                <div className="success-check" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="success-h3">Thanks — we got your message</h3>
                <p className="success-body">
                  We&apos;ll respond within 1 business day. If it&apos;s urgent, call us at{' '}
                  <a href="tel:2102799442" style={{ color: '#C9A84C', textDecoration: 'none' }}>210-279-9442</a>.
                </p>
                <button
                  className="success-reset"
                  onClick={() => { setStatus('idle'); setErrorMessage('') }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={fields.website}
                    onChange={set('website')}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="first_name">First Name</label>
                    <input className="form-input" id="first_name" name="first_name" type="text" placeholder="Jane" autoComplete="given-name" maxLength={80} required value={fields.firstName} onChange={set('firstName')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="last_name">Last Name</label>
                    <input className="form-input" id="last_name" name="last_name" type="text" placeholder="Smith" autoComplete="family-name" maxLength={80} required value={fields.lastName} onChange={set('lastName')} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" id="email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" maxLength={254} required value={fields.email} onChange={set('email')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input className="form-input" id="phone" name="phone" type="tel" placeholder="210-555-0100" autoComplete="tel" maxLength={40} value={fields.phone} onChange={set('phone')} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="company">Company</label>
                  <input className="form-input" id="company" name="company" type="text" placeholder="Your Company Name" autoComplete="organization" maxLength={120} value={fields.company} onChange={set('company')} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Service Needed</label>
                    <select className="form-select" id="service" name="service" value={fields.service} onChange={set('service')}>
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="timeline">Timeline</label>
                    <select className="form-select" id="timeline" name="timeline" value={fields.timeline} onChange={set('timeline')}>
                      <option value="">When do you need it?</option>
                      {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="budget">
                    Project Budget
                    <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', color: '#666', fontSize: '11px', marginLeft: '8px' }}>Optional</span>
                  </label>
                  <select className="form-select" id="budget" name="budget" value={fields.budget} onChange={set('budget')}>
                    <option value="">Select a range</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Tell Us About Your Project</label>
                  <textarea className="form-textarea" id="message" name="message" placeholder="What are you trying to accomplish? Who's the audience? Any budget range in mind?" maxLength={4000} required value={fields.message} onChange={set('message')} />
                </div>

                {status === 'error' && (
                  <div id="contact-error" className="form-error" role="alert">{errorMessage}</div>
                )}

                <button
                  type="submit"
                  className="form-submit"
                  disabled={status === 'submitting'}
                  aria-describedby={status === 'error' ? 'contact-error' : undefined}
                >
                  {status === 'submitting' ? 'Sending…' : status === 'error' ? 'Try Again →' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

          <div className="info-panel reveal">
            <div className="info-block">
              <p className="info-block-label">Phone</p>
              <a href="tel:2102799442" className="info-phone">210-279-9442</a>
            </div>
            <div className="info-block">
              <p className="info-block-label">Email</p>
              <a href="mailto:contact@mediabarproductions.com" className="info-email">contact@mediabarproductions.com</a>
            </div>
            <div className="info-block">
              <p className="info-block-label">Studio Address</p>
              <p className="info-address">
                8610 N New Braunfels Ave<br />
                Suite 704<br />
                San Antonio, TX 78217
              </p>
              <div className="map-wrap">
                <iframe
                  src="https://maps.google.com/maps?q=8610+N+New+Braunfels+Ave+San+Antonio+TX+78217&output=embed"
                  title="Media Bar Productions location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="info-block">
              <p className="info-block-label">Hours</p>
              {hours.map((h) => (
                <div
                  key={h.day}
                  className={`hours-row${todayIndex === days.indexOf(h.day) ? ' today' : ''}`}
                >
                  <span className="hours-day">{h.day}</span>
                  <span className="hours-time">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
