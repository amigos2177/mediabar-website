'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function CorporatePage() {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))

    // FAQ accordion
    const faqs = document.querySelectorAll('.faq-item')
    faqs.forEach((item) => {
      const question = item.querySelector('.faq-question')
      question?.addEventListener('click', () => {
        const isOpen = item.classList.contains('open')
        faqs.forEach((f) => f.classList.remove('open'))
        if (!isOpen) item.classList.add('open')
      })
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Layout>
      <style>{`
        :root {
          --red: #CC0000;
          --gold: #C9A84C;
          --black: #0A0A0A;
          --dark: #111111;
          --dark2: #181818;
        }

        /* ── REVEAL ── */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.revealed {
          opacity: 1;
          transform: none;
        }

        /* ── HERO ── */
        .corp-hero {
          position: relative;
          background: linear-gradient(to right,rgba(0,0,0,0.85),rgba(0,0,0,0.55)),url('/images/bts-dec-1.jpg') center/cover no-repeat;
          padding: 140px 64px 100px;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }
        .corp-hero-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(120px, 20vw, 260px);
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.025);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }
        .corp-hero-inner {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 64px;
          align-items: center;
        }
        .corp-breadcrumb {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #444;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .corp-breadcrumb a { color: #B0B0B0; text-decoration: none; transition: color 0.15s; }
        .corp-breadcrumb a:hover { color: #fff; }
        .corp-breadcrumb span { color: #2a2a2a; }
        .corp-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 16px;
        }
        .corp-h1 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(52px, 7vw, 88px);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .corp-h1 em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: 0.65em;
          color: rgba(255,255,255,0.65);
          display: block;
          text-transform: none;
          letter-spacing: 0.03em;
          margin-bottom: 4px;
        }
        .corp-subtitle {
          font-size: 16px;
          line-height: 1.75;
          color: #888;
          max-width: 560px;
          margin: 20px 0 36px;
        }
        .corp-hero-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn-red {
          background: var(--red);
          color: #fff;
          padding: 14px 36px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: background 0.15s;
          display: inline-block;
        }
        .btn-red:hover { background: #aa0000; }
        .btn-ghost {
          border: 1px solid #333;
          color: #fff;
          padding: 14px 36px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: border-color 0.15s, background 0.15s;
          display: inline-block;
        }
        .btn-ghost:hover { border-color: #666; background: rgba(255,255,255,0.04); }

        /* Hero stat card */
        .corp-stat-card {
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 40px 36px;
          min-width: 220px;
          flex-shrink: 0;
        }
        .corp-stat-item {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid #222;
        }
        .corp-stat-item:last-child { border-bottom: none; }
        .corp-stat-value {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 48px;
          line-height: 1;
          color: var(--gold);
          letter-spacing: 0.03em;
        }
        .corp-stat-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #AAAAAA;
          margin-top: 6px;
        }

        /* ── INTRO ── */
        .section {
          padding: 96px 64px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-full {
          padding: 96px 64px;
        }
        .section-dark { background: var(--dark); }
        .section-dark2 { background: var(--dark2); }
        .section-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 14px;
        }
        .section-h2 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1;
          letter-spacing: 0.03em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .section-h2 em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          text-transform: none;
          color: rgba(255,255,255,0.6);
        }
        .body-text {
          font-size: 15px;
          line-height: 1.8;
          color: #B0B0B0;
          margin-bottom: 20px;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .use-case-cards {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 8px;
        }
        .use-case-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--dark2);
          border-left: 3px solid var(--red);
          padding: 16px 20px;
        }
        .use-case-icon {
          font-size: 22px;
          flex-shrink: 0;
          width: 32px;
          text-align: center;
        }
        .use-case-title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #ddd;
        }

        /* ── PORTFOLIO ── */
        .portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }
        .vimeo-wrap {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          background: #000;
        }
        .vimeo-wrap iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }
        .portfolio-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          margin-top: 10px;
          padding: 0 4px;
        }
        .link-arrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          border-bottom: 1px solid var(--red);
          padding-bottom: 3px;
          transition: color 0.15s;
        }
        .link-arrow:hover { color: var(--red); }

        /* ── PROCESS ── */
        .process-wrap {
          background: var(--dark);
        }
        .process-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 96px 64px;
        }
        .process-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
        }
        .process-card {
          background: var(--dark2);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
        }
        .process-card-num {
          position: absolute;
          top: -10px;
          right: 16px;
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 120px;
          line-height: 1;
          color: rgba(204,0,0,0.07);
          pointer-events: none;
          user-select: none;
        }
        .process-card-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 28px;
          letter-spacing: 0.05em;
          color: #fff;
          margin-bottom: 14px;
          position: relative;
        }
        .process-card-desc {
          font-size: 13px;
          line-height: 1.7;
          color: #B0B0B0;
          margin-bottom: 20px;
          position: relative;
        }
        .process-card-list {
          list-style: none;
          position: relative;
        }
        .process-card-list li {
          font-size: 12px;
          color: #AAAAAA;
          padding: 4px 0;
          padding-left: 14px;
          position: relative;
          letter-spacing: 0.03em;
        }
        .process-card-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--red);
          font-size: 10px;
        }

        /* ── WHY US ── */
        .why-wrap {
          background: var(--black);
        }
        .why-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 96px 64px;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }
        .why-sticky {
          position: sticky;
          top: 96px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .why-card {
          background: var(--dark2);
          border: 1px solid #1e1e1e;
          padding: 32px 28px;
          transition: border-color 0.2s;
        }
        .why-card:hover { border-color: #333; }
        .why-card-icon {
          font-size: 28px;
          margin-bottom: 14px;
        }
        .why-card-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 20px;
          letter-spacing: 0.05em;
          color: #fff;
          margin-bottom: 10px;
        }
        .why-card-desc {
          font-size: 13px;
          line-height: 1.7;
          color: #B0B0B0;
        }

        /* ── FAQ ── */
        .faq-wrap {
          background: var(--dark);
        }
        .faq-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 96px 64px;
        }
        .faq-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .faq-item {
          background: var(--dark2);
          border: 1px solid #1e1e1e;
          overflow: hidden;
        }
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 24px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
          gap: 16px;
        }
        .faq-question-text {
          font-size: 15px;
          font-weight: 600;
          color: #ddd;
          letter-spacing: 0.01em;
        }
        .faq-icon {
          font-size: 20px;
          color: var(--red);
          flex-shrink: 0;
          transition: transform 0.25s;
          font-style: normal;
        }
        .faq-item.open .faq-icon { transform: rotate(45deg); }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.25s ease;
          padding: 0 28px;
        }
        .faq-answer p {
          font-size: 14px;
          line-height: 1.8;
          color: #C0C0C0;
          padding-bottom: 24px;
        }
        .faq-item.open .faq-answer {
          max-height: 300px;
          padding: 0 28px;
        }

        /* ── CTA ── */
        .cta-wrap {
          background: var(--dark2);
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: 100px 64px;
        }
        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(204,0,0,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-h2 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 1;
          letter-spacing: 0.03em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 16px;
          position: relative;
        }
        .cta-h2 em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          text-transform: none;
          color: var(--red);
        }
        .cta-sub {
          font-size: 16px;
          color: #B0B0B0;
          margin-bottom: 48px;
          position: relative;
        }
        .cta-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          position: relative;
        }
        .cta-phone {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 36px;
          letter-spacing: 0.06em;
          color: #fff;
          transition: color 0.15s;
        }
        .cta-phone:hover { color: var(--gold); }

        @media (max-width: 900px) {
          .corp-hero-inner { grid-template-columns: 1fr; }
          .corp-stat-card { display: flex; gap: 0; min-width: 0; width: 100%; }
          .corp-stat-item { flex: 1; border-bottom: none; border-right: 1px solid #222; }
          .corp-stat-item:last-child { border-right: none; }
          .intro-grid { grid-template-columns: 1fr; gap: 48px; }
          .portfolio-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr 1fr; }
          .why-inner { grid-template-columns: 1fr; }
          .why-sticky { position: static; }
          .why-grid { grid-template-columns: 1fr; }
          .section { padding: 64px 24px; }
          .section-full { padding: 64px 24px; }
          .process-inner { padding: 64px 24px; }
          .why-inner { padding: 64px 24px; }
          .faq-inner { padding: 64px 24px; }
          .cta-wrap { padding: 72px 24px; }
          .corp-hero { padding: 120px 24px 72px; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="corp-hero">
        <div className="corp-hero-bg-text" aria-hidden="true">CORPORATE</div>
        <div className="corp-hero-inner">
          <div>
            <nav className="corp-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/video-production">Services</Link>
              <span>/</span>
              <span style={{ color: '#AAAAAA' }}>Corporate Video</span>
            </nav>
            <p className="corp-eyebrow">Corporate &amp; Business Video</p>
            <h1 className="corp-h1">
              <em>Corporate</em>
              Video Production
            </h1>
            <p className="corp-subtitle">
              Professional corporate video production for San Antonio businesses and beyond. From brand films and executive interviews to training videos and company culture docs.
            </p>
            <div className="corp-hero-btns">
              <Link href="/contact" className="btn-red">Get a Free Quote</Link>
              <Link href="#portfolio" className="btn-ghost">See Our Work</Link>
            </div>
          </div>
          <div className="corp-stat-card reveal">
            <div className="corp-stat-item">
              <p className="corp-stat-value">3</p>
              <p className="corp-stat-label">Emmy Awards</p>
            </div>
            <div className="corp-stat-item">
              <p className="corp-stat-value">13+</p>
              <p className="corp-stat-label">Years Experience</p>
            </div>
            <div className="corp-stat-item">
              <p className="corp-stat-value">500+</p>
              <p className="corp-stat-label">Videos Produced</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <div className="intro-grid">
            <div className="reveal">
              <p className="section-label">What We Do</p>
              <h2 className="section-h2">Video That Works As<br />Hard As You Do</h2>
              <p className="body-text">
                Corporate video isn't a nice-to-have — it's one of the most powerful sales and communication tools your business has. A well-produced brand film builds trust before a prospect ever picks up the phone. A training video scales your onboarding across hundreds of employees without a single extra hour from your team.
              </p>
              <p className="body-text">
                We handle everything from scripting and storyboarding through production and final delivery. You show up, we make you look great — on time, on brand, and on budget.
              </p>
            </div>
            <div className="reveal">
              <p className="section-label">What We Produce</p>
              <div className="use-case-cards">
                {[
                  { icon: '🎬', title: 'Brand & Company Films' },
                  { icon: '🎤', title: 'Executive & Leadership Interviews' },
                  { icon: '📋', title: 'Training & Instructional Videos' },
                  { icon: '⭐', title: 'Testimonial & Case Study Videos' },
                  { icon: '🏢', title: 'Culture & Recruiting Videos' },
                  { icon: '📣', title: 'Internal Communications' },
                ].map((item) => (
                  <div key={item.title} className="use-case-card">
                    <span className="use-case-icon">{item.icon}</span>
                    <span className="use-case-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PORTFOLIO ── */}
      <div id="portfolio" style={{ background: 'var(--black)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <div className="portfolio-header reveal">
            <div>
              <p className="section-label">Our Work</p>
              <h2 className="section-h2" style={{ marginBottom: 0 }}>Corporate Video <em style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', textTransform: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.75em' }}>Portfolio</em></h2>
            </div>
            <Link href="/work" className="link-arrow">View All Work →</Link>
          </div>
          <div className="portfolio-grid reveal">
            {[
              { id: '1193317757', label: 'Corporate Brand Film' },
              { id: '1193318299', label: 'Corporate Video Production' },
              { id: '1193318830', label: 'Corporate Video Production' },
              { id: '1056209144', label: 'Corporate Video Production' },
            ].map((video) => (
              <div key={video.id}>
                <div className="vimeo-wrap">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&color=CC0000`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={video.label}
                  />
                </div>
                <p className="portfolio-label">{video.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <div className="process-wrap">
        <div className="process-inner">
          <div className="process-header reveal">
            <p className="section-label" style={{ textAlign: 'center' }}>How We Work</p>
            <h2 className="section-h2" style={{ textAlign: 'center' }}>
              Our <em style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', textTransform: 'none', color: 'rgba(255,255,255,0.6)' }}>Process</em>
            </h2>
          </div>
          <div className="process-grid">
            {[
              {
                num: '01',
                title: 'Discovery',
                desc: 'We start by understanding your goals, audience, and brand voice.',
                bullets: ['Goals & objectives', 'Target audience', 'Brand voice & tone', 'Budget & timeline'],
              },
              {
                num: '02',
                title: 'Pre-Production',
                desc: 'Every detail is locked in before we ever roll camera.',
                bullets: ['Script & storyboard', 'Location scouting', 'Crew & talent', 'Shot list & schedule'],
              },
              {
                num: '03',
                title: 'Production',
                desc: 'Professional on-set execution with a full crew.',
                bullets: ['Multi-camera capture', 'Professional lighting', 'Location audio', 'On-set director'],
              },
              {
                num: '04',
                title: 'Post-Production',
                desc: 'Polished delivery across all your required formats.',
                bullets: ['Editorial & assembly', 'Color grading', 'Music & sound design', 'Motion graphics'],
              },
            ].map((step, i) => (
              <div key={step.num} className="process-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="process-card-num" aria-hidden="true">{step.num}</div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
                <ul className="process-card-list">
                  {step.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY US ── */}
      <div className="why-wrap">
        <div className="why-inner">
          <div className="why-sticky reveal">
            <p className="section-label">Why Media Bar</p>
            <h2 className="section-h2">Why San Antonio Businesses Choose <em>Us</em></h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '🏆', title: 'Emmy Award-Winning Team', desc: 'Three Emmy Awards and 15 Telly Awards. We bring broadcast-level craft to every corporate project, regardless of budget.' },
              { icon: '📁', title: 'You Keep Your Footage', desc: 'All raw footage is yours. No licensing traps, no additional fees. You own everything we shoot for you.' },
              { icon: '📈', title: 'Results-Focused Approach', desc: 'We think about what the video needs to accomplish — not just how it looks. Every creative decision maps back to your goals.' },
              { icon: '⚡', title: 'Fast Turnarounds Available', desc: 'Need it fast? We have the in-house capacity to deliver rush projects without sacrificing quality.' },
              { icon: '🎥', title: 'Two Production Studios', desc: 'Our San Antonio facility includes two production stages with full lighting grids, backdrops, and teleprompter setups.' },
              { icon: '🤝', title: '13+ Years of Trust', desc: 'More than a decade serving San Antonio businesses — from startups to Fortune 500s. Consistent, reliable, professional.' },
            ].map((card, i) => (
              <div key={card.title} className="why-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="why-card-icon">{card.icon}</div>
                <h3 className="why-card-title">{card.title}</h3>
                <p className="why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="faq-wrap">
        <div className="faq-inner">
          <div className="faq-header reveal">
            <p className="section-label" style={{ textAlign: 'center' }}>FAQ</p>
            <h2 className="section-h2" style={{ textAlign: 'center' }}>
              Common <em style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', textTransform: 'none', color: 'rgba(255,255,255,0.6)' }}>Questions</em>
            </h2>
          </div>
          <div className="faq-list">
            {[
              {
                q: 'How much does a corporate video cost in San Antonio?',
                a: 'Corporate video production in San Antonio typically ranges from $3,000 for a simple interview-style video to $25,000+ for a full brand film with multiple locations, actors, and motion graphics. The biggest variables are shoot days, crew size, and post-production complexity. We provide detailed quotes after a brief discovery call — there are no surprises.',
              },
              {
                q: 'How long does the process take from start to finish?',
                a: 'A standard corporate video project takes 3–6 weeks from kickoff to final delivery. That includes scripting, scheduling, production, and post. Rush delivery is available if you have a hard deadline — we can turn some projects around in under two weeks depending on scope.',
              },
              {
                q: 'Do you write the script, or do we need to provide one?',
                a: 'We handle scriptwriting as part of most projects. Our production team will conduct a discovery session to understand your goals, audience, and key messages — then develop a script that hits every point. If you have a draft you\'d like us to refine, we\'re happy to work from that instead.',
              },
              {
                q: 'Will you travel outside of San Antonio for the shoot?',
                a: 'Absolutely. We regularly produce video throughout Texas — Austin, Dallas, Houston, and beyond. For out-of-market projects, travel costs are included in your quote upfront so there are no billing surprises after the fact.',
              },
              {
                q: 'How many rounds of revisions are included?',
                a: 'Our standard packages include two rounds of revisions after the initial cut. Most projects wrap within those two rounds. Additional revision rounds can be added if needed — we\'ll discuss that during the proposal stage.',
              },
              {
                q: 'Do we own the footage after the project?',
                a: 'Yes — you own all the footage. After final delivery, we provide you with the raw files along with the finished video. There are no stock footage licensing fees or usage restrictions on anything we shoot for you. It\'s your content.',
              },
            ].map((item) => (
              <div key={item.q} className="faq-item">
                <button className="faq-question">
                  <span className="faq-question-text">{item.q}</span>
                  <em className="faq-icon">+</em>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="cta-wrap">
        <div className="cta-glow" aria-hidden="true" />
        <h2 className="cta-h2">Ready To <em>Get Started?</em></h2>
        <p className="cta-sub">Tell us about your project and we'll put together a custom proposal — fast.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red" style={{ padding: '16px 48px', fontSize: '13px' }}>
            Start Your Project
          </Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
