'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const services = [
  { label: 'Corporate Video',       href: '/video-production/corporate',       icon: '🏢' },
  { label: 'Commercials',           href: '/video-production/commercials',      icon: '📺' },
  { label: 'Event Coverage',        href: '/video-production/events',           icon: '🎪' },
  { label: 'Interview & Discussion',href: '/video-production/interview',        icon: '🎙️' },
  { label: 'Medical Video',         href: '/video-production/medical',          icon: '🏥' },
  { label: 'Aerial Video',          href: '/video-production/aerial',           icon: '🚁' },
  { label: 'Motion Graphics',       href: '/video-production/motion-graphics',  icon: '✨' },
  { label: 'Live Streaming',        href: '/video-production/live-streaming',   icon: '🔴' },
  { label: 'Post Production',       href: '/video-production/post-production',  icon: '✂️' },
  { label: 'Food Video',            href: '/video-production/food',             icon: '🍽️' },
  { label: 'Real Estate Video',     href: '/video-production/real-estate',      icon: '🏠' },
]

const clients = [
  { name: 'San Antonio Spurs', logo: '/images/client-spurs.png' },
  { name: 'HEB',               logo: '/images/client-heb.png' },
  { name: 'Unilever',          logo: '/images/client-unilever.png' },
  { name: 'Frost Bank',        logo: '/images/client-frost.png' },
  { name: 'Texas Tech',        logo: '/images/client-texas-tech.png' },
  { name: 'Baker Hughes',      logo: null },
  { name: 'Kia',               logo: null },
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
    return () => obs.disconnect()
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
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
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
          font-size: clamp(74px, 11vw, 130px);
          line-height: 0.9;
          letter-spacing: 0.04em;
          color: #fff;
          text-transform: uppercase;
        }
        .hero-pills {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .hero-pill {
          border: 1px solid rgba(255,255,255,0.22);
          padding: 9px 22px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.82);
          backdrop-filter: blur(6px);
          background: rgba(0,0,0,0.18);
        }
        .hero-ctas {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        .btn-outline {
          border: 1px solid rgba(255,255,255,0.42);
          color: #fff;
          text-decoration: none;
          padding: 15px 38px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: inline-block;
          transition: border-color 0.15s, background 0.15s;
        }
        .btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.07); }
        .btn-red {
          background: var(--red);
          color: #fff;
          text-decoration: none;
          padding: 15px 38px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: inline-block;
          transition: background 0.15s;
        }
        .btn-red:hover { background: #aa0000; }

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
          grid-template-columns: repeat(10, 1fr);
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
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 2px;
        }
        .service-card {
          display: block;
          background: var(--dark2);
          padding: 32px 28px;
          text-decoration: none;
          border: 1px solid #1e1e1e;
          border-left: 2px solid var(--red);
          transition: background 0.15s, border-top-color 0.15s;
        }
        .service-card:hover {
          background: #1a1a1a;
          border-top-color: var(--red);
        }
        .service-icon {
          font-size: 28px;
          line-height: 1;
          margin-bottom: 14px;
          display: block;
        }
        .service-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--red);
          margin-bottom: 8px;
        }
        .service-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 22px;
          letter-spacing: 0.05em;
          color: #fff;
        }

        /* ─── DEMO REEL ─── */
        .reel-wrap {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          width: 100%;
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
          font-size: clamp(54px, 8vw, 108px);
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
        @media (max-width: 960px) {
          .clients-grid { grid-template-columns: repeat(5, 1fr); }
          .client-cell:nth-child(5n) { border-right: none; }
          .client-cell:nth-child(10) { border-right: none; }
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
          <h1 className="hero-headline">Video Production</h1>
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
              <span className="service-icon" aria-hidden="true">{svc.icon}</span>
              <p className="service-num">{String(i + 1).padStart(2, '0')}</p>
              <p className="service-title">{svc.label}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 4. DEMO REEL ─── */}
      <section className="section section-dark2" data-reveal>
        <p className="eyebrow">Demo Reel</p>
        <h2 className="section-title" style={{ marginBottom: '40px' }}>See <em>The Work</em></h2>
        <div className="reel-wrap">
          <iframe
            src="https://player.vimeo.com/video/1077104073?title=0&byline=0&portrait=0&color=CC0000"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Media Bar Productions Demo Reel"
          />
        </div>
      </section>

      {/* ─── 5. AWARDS ─── */}
      <section className="section section-dark" style={{ textAlign: 'center' }} data-reveal>
        <p className="eyebrow">Recognition</p>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Award-Winning <em>Production</em></h2>
        <div className="awards-grid">
          <div className="award-card">
            <p className="award-count">3</p>
            <p className="award-name">Emmy Awards</p>
          </div>
          <div className="award-card">
            <p className="award-count">15</p>
            <p className="award-name">Telly Awards</p>
          </div>
          <div className="award-card">
            <p className="award-count">13<sup>+</sup></p>
            <p className="award-name">Years in Business</p>
          </div>
        </div>
      </section>

      {/* ─── 6. FINAL CTA ─── */}
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
