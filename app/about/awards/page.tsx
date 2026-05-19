'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const emmyWins = [
  { year: '2013', category: 'Best Editor (Non-News)', award: 'Lone Star Emmy Award' },
  { year: '2012', category: 'Best Editor (Non-News)', award: 'Lone Star Emmy Award' },
  { year: '2009', category: 'Production / Camera / Assistant Editor — Interview/Discussion Category', award: 'Lone Star Emmy Award (via Carrasco Media Group)' },
]

const emmyNominations = [
  { year: '2015', category: 'Best Editor (Non-News)' },
  { year: '2014', category: 'Best Writing, Short Form (Promos, PSAs, Commercials)' },
  { year: '2013', category: 'Magazine Program Series — "The Russell Rush Haunted Tour"' },
  { year: '2010', category: 'Interview/Discussion Program — "For Love of Family"' },
]

const tellyWins = [
  { year: '2016', category: 'Online Video, Legacy', client: 'San Antonio Area Foundation', role: 'Production', level: 'Silver' },
  { year: '2016', category: 'Online Video, Legacy', client: 'San Antonio Area Foundation', role: 'Editing', level: 'Silver' },
  { year: '2016', category: 'Online Video, Testimonials', client: 'San Antonio Area Foundation', role: 'Production', level: '' },
  { year: '2016', category: 'Online Video', client: 'Down Syndrome Association of South Texas', role: 'Editing', level: '' },
  { year: '2015', category: 'Film/Video, Non-Broadcast — Charitable/Not-For-Profit', client: '', role: 'Production', level: 'Silver' },
  { year: '2015', category: 'Film/Video, Non-Broadcast', client: 'Down Syndrome Association', role: 'Editing', level: '' },
  { year: '2015', category: 'Commercial, Local TV', client: 'Shafer Services "We Need More Fans"', role: 'Production', level: '' },
  { year: '2015', category: 'Online Video, Webisodes', client: 'Russell Rush Haunted Tour / Yoakum Hospital', role: 'Editing', level: '' },
  { year: '2015', category: 'TV Programs, Segments', client: '', role: 'Editing', level: '' },
  { year: '2014', category: 'TV Programs, Entertainment', client: '', role: 'Production', level: '' },
  { year: '2014', category: 'TV Programs, Entertainment', client: '', role: 'Editing', level: '' },
  { year: '2012', category: 'TV Programs, Entertainment', client: 'Russell Rush Haunted Tour, Lockhart', role: 'Production', level: '' },
  { year: '2012', category: 'TV Programs, Entertainment', client: 'Russell Rush Haunted Tour, Lockhart', role: 'Editing', level: '' },
  { year: '2012', category: 'TV Programs, Entertainment', client: 'Russell Rush Haunted Tour, Lambermont', role: 'Production', level: '' },
  { year: '2012', category: 'TV Programs, Entertainment', client: 'Russell Rush Haunted Tour, Lambermont', role: 'Editing', level: '' },
]

export default function AwardsPage() {
  useEffect(() => {
    document.title = 'Emmy & Telly Award-Winning Video Production San Antonio | Media Bar Productions'

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

        :root { --red:#CC0000; --gold:#C9A84C; --black:#0A0A0A; --dark:#111111; --dark2:#181818; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--black); color: #fff; font-family: 'DM Sans', system-ui, sans-serif; }

        [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        [data-reveal].revealed { opacity: 1; transform: none; }

        /* ── HERO ── */
        .aw-hero {
          position: relative;
          background: var(--black);
          padding: 160px 64px 100px;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
          text-align: center;
        }
        .aw-hero-bg {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(140px, 22vw, 320px);
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.025);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }
        .aw-breadcrumb {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #444;
          margin-bottom: 20px;
          position: relative;
        }
        .aw-breadcrumb a { color: #444; text-decoration: none; transition: color 0.15s; }
        .aw-breadcrumb a:hover { color: #888; }
        .aw-breadcrumb span { margin: 0 8px; }
        .aw-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          position: relative;
        }
        .aw-h1 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(56px, 8vw, 108px);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #fff;
          text-transform: uppercase;
          position: relative;
          margin-bottom: 24px;
        }
        .aw-h1 em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: rgba(255,255,255,0.55);
          text-transform: none;
        }
        .aw-sub {
          font-size: 17px;
          line-height: 1.75;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
        }

        /* ── SHARED SECTION ── */
        .aw-section {
          padding: 96px 64px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .aw-section-wrap { }
        .aw-section-wrap.dark { background: var(--dark); }
        .aw-section-wrap.dark2 { background: var(--dark2); }

        .aw-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }
        .aw-h2 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(44px, 6vw, 80px);
          letter-spacing: 0.03em;
          color: #fff;
          line-height: 1;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .aw-body {
          font-size: 15px;
          line-height: 1.8;
          color: #777;
          max-width: 760px;
          margin-bottom: 56px;
        }

        /* ── EMMY WIN CARDS ── */
        .emmy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-bottom: 64px;
        }
        .emmy-card {
          background: var(--dark2);
          border: 1px solid #1e1e1e;
          border-top: 2px solid var(--gold);
          padding: 32px 28px;
        }
        .emmy-year {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 42px;
          color: var(--gold);
          line-height: 1;
          letter-spacing: 0.03em;
          margin-bottom: 12px;
        }
        .emmy-category {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          line-height: 1.5;
          margin-bottom: 10px;
        }
        .emmy-award-name {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
        }

        /* ── NOMINATIONS ── */
        .nom-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #444;
          margin-bottom: 20px;
        }
        .nom-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }
        .nom-card {
          background: var(--dark2);
          border: 1px solid #1a1a1a;
          padding: 20px 24px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .nom-year {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 28px;
          color: #444;
          line-height: 1;
          flex-shrink: 0;
          width: 52px;
        }
        .nom-category {
          font-size: 13px;
          color: #666;
          line-height: 1.5;
          padding-top: 4px;
        }

        /* ── TELLY GRID ── */
        .telly-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .telly-card {
          background: var(--dark2);
          border: 1px solid #1e1e1e;
          border-left: 2px solid var(--red);
          padding: 24px 22px;
          transition: background 0.15s;
        }
        .telly-card:hover { background: #1e1e1e; }
        .telly-year {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 32px;
          color: var(--red);
          line-height: 1;
          letter-spacing: 0.03em;
          margin-bottom: 8px;
        }
        .telly-category {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.04em;
          line-height: 1.4;
          margin-bottom: 6px;
        }
        .telly-client {
          font-size: 11px;
          color: #555;
          line-height: 1.4;
          margin-bottom: 6px;
        }
        .telly-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }
        .telly-role {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #444;
        }
        .telly-silver {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid var(--gold);
          padding: 2px 7px;
          border-radius: 2px;
        }

        /* ── CTA ── */
        .aw-cta {
          background: var(--dark);
          padding: 100px 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .aw-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(204,0,0,0.14) 0%, transparent 68%);
          pointer-events: none;
        }
        .aw-cta-h2 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(44px, 7vw, 88px);
          letter-spacing: 0.03em;
          color: #fff;
          line-height: 1;
          margin-bottom: 16px;
          position: relative;
        }
        .aw-cta-sub {
          font-size: 15px;
          color: #555;
          margin-bottom: 44px;
          position: relative;
        }
        .aw-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          position: relative;
        }
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
          transition: background 0.15s, box-shadow 0.15s;
        }
        .btn-red:hover { background: #aa0000; box-shadow: 0 4px 24px rgba(204,0,0,0.4); }
        .aw-phone {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 32px;
          letter-spacing: 0.06em;
          color: #fff;
          text-decoration: none;
          transition: color 0.15s;
        }
        .aw-phone:hover { color: var(--gold); }

        @media (max-width: 900px) {
          .aw-hero { padding: 120px 24px 72px; }
          .aw-section { padding: 64px 24px; }
          .emmy-grid { grid-template-columns: 1fr; }
          .nom-grid { grid-template-columns: 1fr; }
          .telly-grid { grid-template-columns: 1fr 1fr; }
          .aw-cta { padding: 72px 24px; }
        }
        @media (max-width: 600px) {
          .telly-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="aw-hero">
        <div className="aw-hero-bg" aria-hidden="true">AWARDS</div>
        <p className="aw-breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/about">About</Link>
          <span>›</span>
          Awards
        </p>
        <p className="aw-eyebrow">Lone Star Emmy &amp; Telly Award Recognition</p>
        <h1 className="aw-h1">Award-Winning <em>Video Production</em></h1>
        <p className="aw-sub">
          Media Bar Productions is one of San Antonio&rsquo;s most decorated independent video production companies — recognized by the National Academy of Television Arts &amp; Sciences and the Telly Awards for excellence in editing, production, and storytelling.
        </p>
      </section>

      {/* ── EMMY SECTION ── */}
      <div className="aw-section-wrap dark">
        <div className="aw-section" data-reveal>
          <p className="aw-label">National Academy of Television Arts &amp; Sciences — Lone Star Chapter</p>
          <h2 className="aw-h2">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
            </svg>
            3 Emmy Award Wins
          </h2>
          <p className="aw-body">
            The Emmy Award is the highest honor in television production. Earning three Lone Star Emmy Awards places Media Bar Productions among an elite group of independent production companies recognized for broadcast-level excellence.
          </p>

          <div className="emmy-grid">
            {emmyWins.map((w) => (
              <div key={`${w.year}-${w.category}`} className="emmy-card">
                <p className="emmy-year">{w.year}</p>
                <p className="emmy-category">{w.category}</p>
                <p className="emmy-award-name">{w.award}</p>
              </div>
            ))}
          </div>

          <p className="nom-label">Emmy Nominations</p>
          <div className="nom-grid">
            {emmyNominations.map((n) => (
              <div key={`${n.year}-${n.category}`} className="nom-card">
                <p className="nom-year">{n.year}</p>
                <p className="nom-category">{n.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TELLY SECTION ── */}
      <div className="aw-section-wrap">
        <div className="aw-section" data-reveal>
          <p className="aw-label">The Telly Awards</p>
          <h2 className="aw-h2">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            15 Telly Award Wins
          </h2>
          <p className="aw-body">
            The Telly Awards is the premier award honoring excellence in video and television across all screens. Our 15 Telly Awards span online video, broadcast commercials, film production, and television programming — a testament to the breadth and consistency of our work.
          </p>

          <div className="telly-grid">
            {tellyWins.map((t, i) => (
              <div key={i} className="telly-card">
                <p className="telly-year">{t.year}</p>
                <p className="telly-category">{t.category}</p>
                {t.client && <p className="telly-client">{t.client}</p>}
                <div className="telly-meta">
                  <span className="telly-role">{t.role}</span>
                  {t.level === 'Silver' && <span className="telly-silver">Silver</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="aw-cta" data-reveal>
        <h2 className="aw-cta-h2">Work With an Award-Winning Team</h2>
        <p className="aw-cta-sub">Every project gets the same level of care that earned us these awards.</p>
        <div className="aw-cta-actions">
          <Link href="/contact" className="btn-red">Get a Quote</Link>
          <a href="tel:2102799442" className="aw-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
