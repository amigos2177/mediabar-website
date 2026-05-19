'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout'


const useCases = [
  { icon: '👔', title: 'Executive Interviews' },
  { icon: '💡', title: 'Thought Leadership' },
  { icon: '⭐', title: 'Customer Testimonials' },
  { icon: '🎙️', title: 'Panel Discussions' },
  { icon: '🎬', title: 'Documentary-Style Profiles' },
  { icon: '📹', title: 'Podcast Video Production' },
]

const processSteps = [
  { num: '01', title: 'Pre-Interview Prep', desc: 'We prepare talent and environment before a single camera rolls.', bullets: ['Question development', 'Talent briefing', 'Location selection', 'Look & feel direction'] },
  { num: '02', title: 'Lighting & Setup', desc: 'Studio-quality look whether we\'re in your office or ours.', bullets: ['3-point lighting', 'Background dressing', 'Audio check & test', 'Camera angle selection'] },
  { num: '03', title: 'Interview Direction', desc: 'We guide talent to authentic, on-camera performances.', bullets: ['Director on set', 'Teleprompter available', 'Retakes as needed', 'B-roll capture'] },
  { num: '04', title: 'Edit & Delivery', desc: 'Finished interviews that tell the story you need.', bullets: ['Interview assembly', 'B-roll integration', 'Color grade', 'Multi-format delivery'] },
]

const whyCards = [
  { icon: '🎯', title: 'We Direct, Not Just Record', desc: 'Anyone can set up a camera. We actively direct your talent — coaching delivery, pacing, and confidence to get authentic, compelling answers.' },
  { icon: '🏢', title: 'Two In-House Studios', desc: 'Our San Antonio facility includes two interview-ready stages with lighting grids, backdrops, and teleprompter setups available on short notice.' },
  { icon: '🎤', title: 'Clean Audio Always', desc: 'We use broadcast-grade lavalier and boom mics with professional audio monitoring. Bad audio is the #1 reason interview videos fail — we don\'t compromise on it.' },
  { icon: '📱', title: 'Multi-Format Delivery', desc: 'Long-form interview, short social cut, subtitle version, thumbnail pull — we deliver every format you need from the same shoot.' },
  { icon: '🔒', title: 'Confidential Productions', desc: 'Executive interviews and legal testimonials require discretion. We operate under NDA and handle sensitive productions with complete professionalism.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most single-interview edits are delivered within 3–5 business days. Rush delivery available.' },
]

const faqs = [
  { q: 'Do you direct the talent or just record?', a: 'We actively direct every interview. Before the camera rolls, we brief the subject on what to expect, help them feel comfortable, and give them guidance on pacing and delivery. During the interview, our director is on set coaching for natural, confident answers. The difference between a coached interview and an uncoached one is dramatic.' },
  { q: 'Can you shoot at our office or do we come to your studio?', a: 'Both options are available. We frequently shoot on location at client offices, conference rooms, and branded environments. We also have two production stages in San Antonio that are ready for interview setups. Location shoots require slightly more setup time but often produce more authentic, contextual results.' },
  { q: 'How long does a typical interview shoot take?', a: 'A single-subject interview shoot typically takes 2–4 hours including setup, the interview itself, and b-roll capture. If you\'re recording multiple subjects in the same day, we can often batch them efficiently. We\'ll give you a detailed timeline estimate before your shoot day.' },
  { q: 'Do you shoot with one camera or multiple?', a: 'Most interview setups use 2 cameras — a primary wide or medium shot and a closer single. This gives us cutaway coverage during editing without losing the natural flow of the conversation. For panel discussions, we scale up to 3–5 cameras depending on the number of participants.' },
  { q: 'Can you add b-roll and graphics to the interview?', a: 'Absolutely. B-roll footage (contextual shots of your workplace, product, or team in action) is what takes an interview from raw to polished. We typically capture b-roll the same day as the interview. We also add lower-thirds, motion graphic titles, and branded end cards as part of our standard post-production.' },
]

export default function InterviewPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }) },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => obs.observe(el))
    const faqs = document.querySelectorAll('.faq-item')
    faqs.forEach((item) => {
      item.querySelector('.faq-question')?.addEventListener('click', () => {
        const open = item.classList.contains('open')
        faqs.forEach((f) => f.classList.remove('open'))
        if (!open) item.classList.add('open')
      })
    })
    return () => obs.disconnect()
  }, [])

  return (
    <Layout>
      <style>{`
        :root{--red:#CC0000;--gold:#C9A84C;--black:#0A0A0A;--dark:#111111;--dark2:#181818}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease}.reveal.revealed{opacity:1;transform:none}
        .page-hero{position:relative;background:linear-gradient(to right,rgba(0,0,0,0.85),rgba(0,0,0,0.55)),url('/images/bts-7.jpg') center/cover no-repeat;padding:140px 64px 100px;overflow:hidden;border-bottom:1px solid #1a1a1a}
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(80px,14vw,200px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr auto;gap:64px;align-items:center}
        .breadcrumb{font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#444;margin-bottom:24px;display:flex;align-items:center;gap:8px}
        .breadcrumb a{color:#B0B0B0;transition:color .15s}.breadcrumb a:hover{color:#fff}.breadcrumb span{color:#2a2a2a}
        .eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px}
        .page-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(48px,6.5vw,84px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;margin-bottom:8px}
        .page-h1 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:.65em;color:rgba(255,255,255,.65);display:block;text-transform:none;letter-spacing:.03em;margin-bottom:4px}
        .hero-sub{font-size:16px;line-height:1.75;color:#888;max-width:560px;margin:20px 0 36px}
        .hero-btns{display:flex;gap:16px;flex-wrap:wrap}
        .btn-red{background:var(--red);color:#fff;padding:14px 36px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:background .15s;display:inline-block}.btn-red:hover{background:#aa0000}
        .btn-ghost{border:1px solid #333;color:#fff;padding:14px 36px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:border-color .15s,background .15s;display:inline-block}.btn-ghost:hover{border-color:#666;background:rgba(255,255,255,.04)}
        .stat-card{background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.1);padding:40px 36px;min-width:220px;flex-shrink:0}
        .stat-item{text-align:center;padding:20px 0;border-bottom:1px solid #222}.stat-item:last-child{border-bottom:none}
        .stat-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:48px;line-height:1;color:var(--gold);letter-spacing:.03em}
        .stat-label{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#AAAAAA;margin-top:6px}
        .section{padding:96px 64px;max-width:1200px;margin:0 auto}
        .section-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
        .section-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,5vw,60px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:24px}
        .section-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:rgba(255,255,255,.6)}
        .body-text{font-size:15px;line-height:1.8;color:#B0B0B0;margin-bottom:20px}
        .intro-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
        .use-case-cards{display:flex;flex-direction:column;gap:12px;margin-top:8px}
        .use-case-card{display:flex;align-items:center;gap:16px;background:var(--dark2);border-left:3px solid var(--red);padding:16px 20px}
        .use-case-icon{font-size:22px;flex-shrink:0;width:32px;text-align:center}
        .use-case-title{font-size:13px;font-weight:600;letter-spacing:.04em;color:#ddd}
        .portfolio-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px}
        .portfolio-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px}
        .vimeo-wrap{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;background:#000}
        .vimeo-wrap iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none}
        .portfolio-label{font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#fff;margin-top:10px;padding:0 4px}
        .link-arrow{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;border-bottom:1px solid var(--red);padding-bottom:3px;transition:color .15s}.link-arrow:hover{color:var(--red)}
        .process-wrap{background:var(--dark)}.process-inner{max-width:1200px;margin:0 auto;padding:96px 64px}
        .process-header{text-align:center;margin-bottom:64px}
        .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px}
        .process-card{background:var(--dark2);padding:40px 32px;position:relative;overflow:hidden}
        .process-num{position:absolute;top:-10px;right:16px;font-family:'Bebas Neue',Impact,sans-serif;font-size:120px;line-height:1;color:rgba(204,0,0,.07);pointer-events:none;user-select:none}
        .process-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:28px;letter-spacing:.05em;color:#fff;margin-bottom:14px;position:relative}
        .process-desc{font-size:13px;line-height:1.7;color:#B0B0B0;margin-bottom:20px;position:relative}
        .process-list{list-style:none;position:relative}
        .process-list li{font-size:12px;color:#AAAAAA;padding:4px 0 4px 14px;position:relative;letter-spacing:.03em}
        .process-list li::before{content:'—';position:absolute;left:0;color:var(--red);font-size:10px}
        .why-wrap{background:var(--black)}.why-inner{max-width:1200px;margin:0 auto;padding:96px 64px;display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:start}
        .why-sticky{position:sticky;top:96px}
        .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px}
        .why-card{background:var(--dark2);border:1px solid #1e1e1e;padding:32px 28px;transition:border-color .2s}.why-card:hover{border-color:#333}
        .why-card-icon{font-size:28px;margin-bottom:14px}
        .why-card-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.05em;color:#fff;margin-bottom:10px}
        .why-card-desc{font-size:13px;line-height:1.7;color:#B0B0B0}
        .faq-wrap{background:var(--dark)}.faq-inner{max-width:800px;margin:0 auto;padding:96px 64px}
        .faq-header{text-align:center;margin-bottom:56px}
        .faq-list{display:flex;flex-direction:column;gap:2px}
        .faq-item{background:var(--dark2);border:1px solid #1e1e1e;overflow:hidden}
        .faq-question{width:100%;background:none;border:none;padding:24px 28px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;text-align:left;gap:16px}
        .faq-question-text{font-size:15px;font-weight:600;color:#ddd;letter-spacing:.01em}
        .faq-icon{font-size:20px;color:var(--red);flex-shrink:0;transition:transform .25s;font-style:normal}
        .faq-item.open .faq-icon{transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height .35s ease,padding .25s ease;padding:0 28px}
        .faq-answer p{font-size:14px;line-height:1.8;color:#C0C0C0;padding-bottom:24px}
        .faq-item.open .faq-answer{max-height:300px;padding:0 28px}
        .cta-wrap{background:var(--dark2);position:relative;overflow:hidden;text-align:center;padding:100px 64px}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(48px,7vw,88px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .cta-sub{font-size:16px;color:#B0B0B0;margin-bottom:48px;position:relative}
        .cta-actions{display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;position:relative}
        .cta-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;letter-spacing:.06em;color:#fff;transition:color .15s}.cta-phone:hover{color:var(--gold)}
        @media(max-width:900px){
          .hero-inner{grid-template-columns:1fr}.stat-card{display:flex;gap:0;min-width:0;width:100%}
          .stat-item{flex:1;border-bottom:none;border-right:1px solid #222}.stat-item:last-child{border-right:none}
          .intro-grid{grid-template-columns:1fr;gap:48px}.portfolio-grid{grid-template-columns:1fr}
          .process-grid{grid-template-columns:1fr 1fr}.why-inner{grid-template-columns:1fr}.why-sticky{position:static}
          .why-grid{grid-template-columns:1fr}.section{padding:64px 24px}
          .process-inner,.why-inner,.faq-inner{padding:64px 24px}.cta-wrap{padding:72px 24px}.page-hero{padding:120px 24px 72px}
        }
        @media(max-width:600px){.process-grid{grid-template-columns:1fr}}
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">INTERVIEW</div>
        <div className="hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/video-production">Services</Link><span>/</span>
              <span style={{ color: '#AAAAAA' }}>Interview Video</span>
            </nav>
            <p className="eyebrow">Interview &amp; Discussion Video</p>
            <h1 className="page-h1"><em>Interview &amp;</em>Discussion Video</h1>
            <p className="hero-sub">We create the right environment for authentic, on-camera conversation — and the storytelling expertise to turn it into something compelling.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-red">Get a Free Quote</Link>
              <Link href="#portfolio" className="btn-ghost">See Our Work</Link>
            </div>
          </div>
          <div className="stat-card reveal">
            <div className="stat-item"><p className="stat-value">2+</p><p className="stat-label">Camera Setup</p></div>
            <div className="stat-item"><p className="stat-value">2</p><p className="stat-label">In-House Studios</p></div>
            <div className="stat-item"><p className="stat-value">✓</p><p className="stat-label">Teleprompter Available</p></div>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--dark)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <div className="intro-grid">
            <div className="reveal">
              <p className="section-label">What We Do</p>
              <h2 className="section-h2">Authentic Conversation, <em>Masterfully Told</em></h2>
              <p className="body-text">The best interview video doesn't look like an interview. It looks like someone worth listening to, saying something worth hearing, in a way that makes you want to share it. Getting there requires deliberate lighting, expert direction, and an editor who knows how to find the story in hours of footage.</p>
              <p className="body-text">We handle everything — from prepping your executives before they're on camera to delivering final cuts with b-roll, graphics, and subtitles ready for every platform.</p>
            </div>
            <div className="reveal">
              <p className="section-label">What We Produce</p>
              <div className="use-case-cards">
                {useCases.map((u) => (
                  <div key={u.title} className="use-case-card">
                    <span className="use-case-icon">{u.icon}</span>
                    <span className="use-case-title">{u.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" style={{ background: 'var(--black)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <div className="portfolio-header reveal">
            <div>
              <p className="section-label">Our Work</p>
              <h2 className="section-h2" style={{ marginBottom: 0 }}>Interview <em>Portfolio</em></h2>
            </div>
            <Link href="/work" className="link-arrow">View All Work →</Link>
          </div>
          <div className="portfolio-grid reveal">
            {[
              { id: '1180537582', label: 'Interview Production' },
              { id: '1180540188', label: 'Interview Production' },
              { id: '1180540381', label: 'Interview Production' },
              { id: '298919239', label: 'Interview Production' },
            ].map((v) => (
              <div key={v.id}>
                <div className="vimeo-wrap">
                  <iframe src={`https://player.vimeo.com/video/${v.id}?title=0&byline=0&portrait=0&color=CC0000`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={v.label} />
                </div>
                <p className="portfolio-label">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="process-wrap">
        <div className="process-inner">
          <div className="process-header reveal">
            <p className="section-label" style={{ textAlign: 'center' }}>How We Work</p>
            <h2 className="section-h2" style={{ textAlign: 'center' }}>Our <em>Process</em></h2>
          </div>
          <div className="process-grid">
            {processSteps.map((s, i) => (
              <div key={s.num} className="process-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="process-num" aria-hidden="true">{s.num}</div>
                <h3 className="process-title">{s.title}</h3>
                <p className="process-desc">{s.desc}</p>
                <ul className="process-list">{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="why-wrap">
        <div className="why-inner">
          <div className="why-sticky reveal">
            <p className="section-label">Why Media Bar</p>
            <h2 className="section-h2">Why Clients Trust <em>Us</em> On Camera</h2>
          </div>
          <div className="why-grid">
            {whyCards.map((c, i) => (
              <div key={c.title} className="why-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="why-card-icon">{c.icon}</div>
                <h3 className="why-card-title">{c.title}</h3>
                <p className="why-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="faq-wrap">
        <div className="faq-inner">
          <div className="faq-header reveal">
            <p className="section-label" style={{ textAlign: 'center' }}>FAQ</p>
            <h2 className="section-h2" style={{ textAlign: 'center' }}>Common <em>Questions</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <div key={f.q} className="faq-item">
                <button className="faq-question"><span className="faq-question-text">{f.q}</span><em className="faq-icon">+</em></button>
                <div className="faq-answer"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="cta-wrap">
        <div className="cta-glow" aria-hidden="true" />
        <h2 className="cta-h2">Ready To <em>Get Started?</em></h2>
        <p className="cta-sub">Let's talk about your interview project and put together a custom plan.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red" style={{ padding: '16px 48px', fontSize: '13px' }}>Start Your Project</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
