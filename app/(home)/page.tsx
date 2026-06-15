'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import GoogleReviews from '../../components/GoogleReviews'

const services = [
  { label: 'Corporate Video',        href: '/video-production/corporate' },
  { label: 'Commercials',            href: '/video-production/commercials' },
  { label: 'Event Coverage',         href: '/video-production/events' },
  { label: 'Interview & Discussion', href: '/video-production/interview' },
  { label: 'Medical Video',          href: '/video-production/medical' },
  { label: 'Aerial Video',           href: '/video-production/aerial' },
  { label: 'Motion Graphics',        href: '/video-production/motion-graphics' },
  { label: 'Live Streaming',         href: '/video-production/live-streaming' },
  { label: 'Post Production',        href: '/video-production/post-production' },
  { label: 'Food Video',             href: '/video-production/food' },
  { label: 'Real Estate Video',      href: '/video-production/real-estate' },
]

const svgProps = {
  width: 28, height: 28, viewBox: '0 0 24 24',
  fill: 'none', stroke: '#CC0000', strokeWidth: 1.5,
  strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
}

const serviceIcons = [
  // Corporate Video — briefcase
  <svg key="corporate" {...svgProps}>
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>,
  // Commercials — play circle
  <svg key="commercials" {...svgProps}>
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8"/>
  </svg>,
  // Event Coverage — calendar
  <svg key="events" {...svgProps}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>,
  // Interview & Discussion — mic
  <svg key="interview" {...svgProps}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="8" y1="22" x2="16" y2="22"/>
  </svg>,
  // Medical Video — plus square
  <svg key="medical" {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>,
  // Aerial Video — arrow up
  <svg key="aerial" {...svgProps}>
    <line x1="12" y1="19" x2="12" y2="5"/>
    <polyline points="5 12 12 5 19 12"/>
  </svg>,
  // Motion Graphics — layers
  <svg key="motion" {...svgProps}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>,
  // Live Streaming — wifi
  <svg key="streaming" {...svgProps}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <line x1="12" y1="20" x2="12.01" y2="20"/>
  </svg>,
  // Post Production — scissors
  <svg key="post" {...svgProps}>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>,
  // Food Video — coffee
  <svg key="food" {...svgProps}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>,
  // Real Estate Video — home
  <svg key="realestate" {...svgProps}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>,
]

const clients = [
  { name: 'San Antonio Spurs', logo: '/images/client-spurs.png' },
  { name: 'HEB',               logo: '/images/client-heb.png' },
  { name: 'Unilever',          logo: '/images/client-unilever.png' },
  { name: 'Frost Bank',        logo: '/images/client-frost.png' },
  { name: 'Texas Tech',        logo: '/images/client-texas-tech.png' },
  { name: 'Bass Pro Shops',    logo: '/images/client-bass-pro.png' },
  { name: 'Carrier',           logo: '/images/client-carrier.png' },
  { name: 'Blue Moon',         logo: '/images/client-blue-moon.png' },
]

export default function HomePage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).classList.add('revealed')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add('revealed'))
    }, 1500)
    return () => {
      obs.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital@1&family=DM+Sans:wght@400;600;700&display=swap');

        :root {
          --red: #CC0000;
          --gold: #C9A84C;
          --black: #0A0A0A;
          --dark: #111111;
          --dark2: #181818;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--black); color: #fff; font-family: 'DM Sans', system-ui, sans-serif; }

        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
          animation: reveal-fallback 0.001s 3s forwards;
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
          animation: none;
        }
        @keyframes reveal-fallback {
          to { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
        }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .hero-video-wrap {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-video-wrap iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 56.25vw;
          min-height: 100vh;
          min-width: 177.78vh;
          border: none;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.78) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 24px;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .hero-eyebrow {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(22px, 3vw, 38px);
          color: rgba(255,255,255,0.78);
          letter-spacing: 0.04em;
          margin-bottom: 6px;
        }
        .hero-headline {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(48px, 13vw, 130px);
          line-height: 0.9;
          letter-spacing: 0.04em;
          color: #fff;
          text-transform: uppercase;
        }
        .hero-headline-geo {
          font-size: 0.65em;
          color: var(--gold);
          letter-spacing: 0.06em;
        }
        .hero-pills {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .hero-pill {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          border: 0.5px solid rgba(255,255,255,0.15);
          border-radius: 2px;
          padding: 10px 24px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.82);
        }
        .hero-pill::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--red);
          border-radius: 50%;
          margin-right: 10px;
          vertical-align: middle;
        }
        .hero-ctas {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 48px;
          flex-wrap: wrap;
        }
        .btn-outline {
          border: 1px solid rgba(255,255,255,0.35);
          background: transparent;
          color: #fff;
          text-decoration: none;
          padding: 16px 44px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: inline-block;
          border-radius: 2px;
          transition: border-color 0.15s, background 0.15s;
        }
        .btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.05); }
        .btn-red {
          background: var(--red);
          color: #fff;
          text-decoration: none;
          padding: 16px 44px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: inline-block;
          border-radius: 2px;
          border: none;
          transition: background 0.15s, box-shadow 0.15s;
        }
        .btn-red:hover { background: #aa0000; box-shadow: 0 4px 24px rgba(204,0,0,0.4); }

        /* ─── CLIENTS STRIP ─── */
        .clients-strip {
          background: var(--dark);
          border-top: 1px solid #1d1d1d;
          border-bottom: 1px solid #1d1d1d;
          padding: 32px 40px;
        }
        .clients-label {
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3a3a3a;
          margin-bottom: 22px;
        }
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          align-items: center;
        }
        .client-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60px;
          padding: 6px 12px;
          border-right: 1px solid #1e1e1e;
        }
        .client-cell:last-child { border-right: none; }
        .client-cell img {
          max-height: 40px;
          max-width: 100%;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.6);
          transition: filter 0.2s;
        }
        .client-cell img:hover { filter: grayscale(0%) brightness(1); }
        .client-text {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.26);
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.15s;
        }
        .client-cell:hover .client-text { color: rgba(255,255,255,0.55); }

        /* ─── SHARED SECTION ─── */
        .section { padding: 96px 48px; }
        .section-dark  { background: var(--dark); }
        .section-dark2 { background: var(--dark2); }

        .eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 14px;
        }
        .section-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(46px, 6vw, 78px);
          letter-spacing: 0.03em;
          color: #fff;
          line-height: 1;
          margin-bottom: 56px;
        }
        .section-title em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: 0.85em;
          letter-spacing: 0.01em;
        }

        /* ─── SERVICES GRID ─── */
        .services-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1px;
          background: #242424;
          border: 1px solid #242424;
        }
        .service-card {
          flex: 1 1 220px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 210px;
          background: var(--dark2);
          padding: 32px 28px;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .service-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--red);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.25s ease;
        }
        .service-card:hover {
          background: #1c1c1c;
        }
        .service-card:hover::before {
          transform: scaleY(1);
        }
        .service-card-top { display: flex; flex-direction: column; }
        .service-icon {
          display: block;
          margin-bottom: 18px;
          width: 28px;
          height: 28px;
        }
        .service-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #5a5a5a;
          margin-bottom: 10px;
        }
        .service-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 22px;
          letter-spacing: 0.05em;
          color: #fff;
        }
        .service-card-cta {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #5a5a5a;
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .service-card:hover .service-card-cta { color: var(--red); gap: 10px; }

        /* ─── DEMO REEL ─── */
        .reel-section-inner {
          padding: 0 48px;
        }
        .reel-wrap {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          max-width: 1100px;
          margin: 0 auto;
          border-radius: 4px;
        }
        .reel-wrap iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ─── AWARDS ─── */
        .awards-grid {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 56px;
        }
        .award-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 56px;
          border: 1px solid #222;
          background: var(--dark2);
          min-width: 210px;
        }
        .award-count {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 96px;
          line-height: 1;
          color: var(--gold);
          letter-spacing: 0.02em;
        }
        .award-count sup {
          font-size: 0.44em;
          vertical-align: super;
          line-height: 0;
        }
        .award-name {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #555;
          margin-top: 10px;
        }

        /* ─── FINAL CTA ─── */
        .cta-section {
          background: var(--dark);
          padding: 112px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 65% 85% at 50% 50%, rgba(204,0,0,0.16) 0%, transparent 68%);
          pointer-events: none;
        }
        .cta-headline {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(38px, 10vw, 108px);
          letter-spacing: 0.03em;
          color: #fff;
          line-height: 1;
          margin-bottom: 20px;
          position: relative;
        }
        .cta-headline em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: 0.85em;
          letter-spacing: 0.01em;
        }
        .cta-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.03em;
          margin-bottom: 44px;
          position: relative;
        }
        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 36px;
          flex-wrap: wrap;
          position: relative;
        }
        .cta-phone {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.15s;
        }
        .cta-phone:hover { color: #fff; }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .clients-grid { grid-template-columns: repeat(4, 1fr); }
          .client-cell:nth-child(4n) { border-right: none; }
        }
        @media (max-width: 768px) {
          .reel-section-inner { padding: 0 24px; }
        }
        @media (max-width: 600px) {
          .section { padding: 64px 20px; }
          .clients-strip { padding: 28px 16px; }
          .clients-grid { grid-template-columns: repeat(2, 1fr); }
          .client-cell:nth-child(2n) { border-right: none; }
          .client-cell img { max-height: 28px; }
          .client-text { font-size: 12px; }
          .award-card { padding: 36px 28px; min-width: 160px; }
          .award-count { font-size: 72px; }
        }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section className="hero">
        <div className="hero-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/1077104073?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&controls=0"
            allow="autoplay; fullscreen"
            title="Media Bar Productions showreel background"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">San Antonio</p>
          <h1 className="hero-headline">Video Production <span className="hero-headline-geo">in San Antonio</span></h1>
          <div className="hero-pills">
            <span className="hero-pill">13+ Years</span>
            <span className="hero-pill">3 Emmy Awards</span>
            <span className="hero-pill">15 Telly Awards</span>
          </div>
          <div className="hero-ctas">
            <Link href="/work" className="btn-outline">See Our Work</Link>
            <Link href="/contact" className="btn-red">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* ─── 2. CLIENTS STRIP ─── */}
      <div className="clients-strip">
        <p className="clients-label">Trusted by Texas&rsquo;s Most Recognized Brands</p>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.name} className="client-cell">
              {client.logo
                ? <img src={client.logo} alt={client.name} />
                : <span className="client-text">{client.name}</span>
              }
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. SERVICES GRID ─── */}
      <section className="section section-dark" data-reveal>
        <p className="eyebrow">Our Services</p>
        <h2 className="section-title">Full-Service <em>Video Production</em></h2>
        <div className="services-grid">
          {services.map((svc, i) => (
            <Link key={svc.href} href={svc.href} className="service-card">
              <div className="service-card-top">
                <span className="service-icon" aria-hidden="true">{serviceIcons[i]}</span>
                <p className="service-num">{String(i + 1).padStart(2, '0')}</p>
                <p className="service-title">{svc.label}</p>
              </div>
              <span className="service-card-cta">See Examples →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 4. DEMO REEL ─── */}
      <section className="section section-dark2" data-reveal>
        <p className="eyebrow">Demo Reel</p>
        <h2 className="section-title" style={{ marginBottom: '40px' }}>See <em>The Work</em></h2>
        <div className="reel-section-inner">
          <div className="reel-wrap">
            <iframe
              src="https://player.vimeo.com/video/1077104073?title=0&byline=0&portrait=0&color=CC0000"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Media Bar Productions Demo Reel"
            />
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK TEASER ─── */}
      <section className="section" style={{ background: 'var(--black)', textAlign: 'center' }} data-reveal>
        <p className="eyebrow">The Media Bar Experience</p>
        <h2 className="section-title">You&rsquo;ll never wonder where <em>your project stands.</em></h2>
        <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '0 auto 44px' }}>
          {/* TODO: Replace with your copy */}
          A private client space, a four-phase process, and a direct line to the people doing the work — visible to you at every step.
        </p>
        <Link href="/how-we-work" className="btn-red">See how we work &rarr;</Link>
      </section>

      {/* ─── 5. AWARDS ─── */}
      <section className="section section-dark" style={{ textAlign: 'center' }} data-reveal>
        <p className="eyebrow">Recognition</p>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Award-Winning <em>Production</em></h2>
        <div className="awards-grid">
          <div className="award-card">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{margin: '0 auto 12px', display: 'block'}}>
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
            </svg>
            <p className="award-count">3</p>
            <p className="award-name">Emmy Awards</p>
          </div>
          <div className="award-card">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{margin: '0 auto 12px', display: 'block'}}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <p className="award-count">15</p>
            <p className="award-name">Telly Awards</p>
          </div>
          <div className="award-card">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{margin: '0 auto 12px', display: 'block'}}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <p className="award-count">13<sup>+</sup></p>
            <p className="award-name">Years in Business</p>
          </div>
        </div>
      </section>

      {/* ─── 6. COST TEASER ─── */}
      <section className="section section-dark2" style={{ textAlign: 'center' }} data-reveal>
        <p className="eyebrow">What It Costs</p>
        <h2 className="section-title" style={{ marginBottom: '24px' }}>What Goes Into the Cost of a <em>Video Production</em></h2>
        <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.55)', maxWidth: '680px', margin: '0 auto 44px' }}>
          Every project is scoped individually — a 30-second social spot and a multi-day brand film don&rsquo;t carry the same budget. We&rsquo;ll recommend the right scope for your goals, and you own all the footage we shoot.
        </p>
        <Link href="/pricing" className="btn-red">See What Drives Cost</Link>
      </section>

      {/* ─── 7. GOOGLE REVIEWS ─── */}
      <GoogleReviews />

      {/* ─── 7. FINAL CTA ─── */}
      <section className="cta-section" data-reveal>
        <h2 className="cta-headline">Let&rsquo;s Make <em>Something Great</em></h2>
        <p className="cta-sub">Ready to tell your story? Let&rsquo;s build something memorable together.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Get a Quote</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
