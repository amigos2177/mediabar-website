'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const TIERS = [
  {
    num: '01', title: 'Brand Story Day',
    tagline: 'One concentrated production day built around telling your company\'s story — the anchor film most businesses need first.',
    builtFor: 'Companies that need a flagship brand video — for the homepage, sales conversations, recruiting, or a launch.',
    includes: [
      'Pre-production planning and creative direction',
      'One full production day with a professional crew — director, director of photography, and audio',
      'Interview and b-roll capture at your location or in our studio',
      'Professional editing, color grading, and audio mix',
      'One primary brand film, typically 2–3 minutes',
      'Social cutdowns available when your distribution plan calls for them',
    ],
    note: null,
  },
  {
    num: '02', title: 'Content Day',
    tagline: 'Production engineered for volume — capture once, publish for weeks.',
    builtFor: 'Marketing teams that need a library of content — testimonials, social clips, FAQ videos, team features — without booking a separate shoot for each one.',
    includes: [
      'A content planning session to map every deliverable before we roll',
      'One to two full production days, multiple setups',
      'A batch of finished, platform-ready videos',
      'Editing, graphics, and captions optimized per platform',
      'Vertical and horizontal versions cut to where each piece will live',
    ],
    note: null,
  },
  {
    num: '03', title: 'Campaign',
    tagline: 'Multi-day production for work that has to perform — commercials, launch films, and multi-deliverable campaigns.',
    builtFor: 'Product launches, broadcast/OTT commercials, and campaigns where concept, casting, and craft drive the result.',
    includes: [
      'Full concept development and scripting',
      'Multi-day production with expanded crew',
      'Casting, locations, and art direction as the concept requires',
      'Complete post-production: edit, color, audio, motion graphics',
      'Deliverables versioned for broadcast, digital, and social',
    ],
    note: null,
  },
  {
    num: '04', title: 'Always-On Content',
    tagline: 'A standing monthly engagement — your video team without the payroll.',
    builtFor: 'Brands publishing video every month that want consistent quality, a crew that already knows them, and priority scheduling.',
    includes: [
      'A recurring monthly allocation of production days and finished deliverables, scoped to your publishing calendar',
      'Priority scheduling over project-based work',
      'A team that knows your brand, people, and standards — no re-onboarding every shoot',
      'Quarterly content planning',
    ],
    note: 'We cap Always-On at three client slots so retainer work never competes with itself for our editors’ time.',
  },
]

const COST_DRIVERS = [
  { icon: '✏️', title: 'Creative & pre-production', desc: 'Scripting, storyboarding, concept development' },
  { icon: '🎥', title: 'Shoot days & crew size', desc: 'One-camera interview vs. multi-cam production' },
  { icon: '📍', title: 'Locations & talent', desc: 'Travel, on-camera talent, voiceover' },
  { icon: '🚁', title: 'Specialized capture', desc: 'Aerial/drone, live multi-cam, studio work' },
  { icon: '✨', title: 'Animation & motion graphics', desc: 'From lower-thirds to full animated sequences' },
  { icon: '🎞️', title: 'Post-production depth', desc: 'Editing, color, sound design, revision rounds' },
  { icon: '📦', title: 'Deliverables', desc: 'Number of final cuts and social cut-downs' },
  { icon: '📡', title: 'Usage', desc: 'Web-only vs. broadcast/paid-media licensing' },
]

export default function PricingPage() {
  useEffect(() => {
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

        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.revealed { opacity: 1; transform: none; }

        /* ── HERO ── */
        .pr-hero {
          position: relative;
          background: var(--black);
          padding: 140px 64px 100px;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }
        .pr-hero-bg {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(100px, 18vw, 240px);
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.025);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }
        .pr-hero-inner {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
        }
        .pr-breadcrumb {
          font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: #444;
          margin-bottom: 24px; display: flex; align-items: center; gap: 8px;
        }
        .pr-breadcrumb a { color: #B0B0B0; text-decoration: none; transition: color 0.15s; }
        .pr-breadcrumb a:hover { color: #fff; }
        .pr-breadcrumb span { color: #2a2a2a; }
        .pr-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--red); margin-bottom: 16px;
        }
        .pr-h1 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(48px, 6.5vw, 84px);
          line-height: 0.95; letter-spacing: 0.02em;
          color: #fff; text-transform: uppercase; margin-bottom: 8px;
        }
        .pr-h1 em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic; font-size: 0.65em;
          color: rgba(255,255,255,0.65);
          display: block; text-transform: none;
          letter-spacing: 0.03em; margin-bottom: 4px;
        }
        .pr-subtitle {
          font-size: 16px; line-height: 1.75;
          color: #888; max-width: 700px; margin: 20px 0 0;
        }

        /* ── DRIVERS SECTION ── */
        .pr-section {
          padding: 96px 64px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .pr-section-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--red); margin-bottom: 20px;
        }
        .pr-driver-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .pr-driver-card {
          display: flex; align-items: flex-start; gap: 16px;
          background: var(--dark2); border-left: 3px solid var(--red);
          padding: 20px 24px;
        }
        .pr-driver-icon {
          font-size: 22px; flex-shrink: 0;
          width: 32px; text-align: center; padding-top: 2px;
        }
        .pr-driver-title {
          font-size: 13px; font-weight: 700; letter-spacing: 0.04em;
          color: #ddd; margin-bottom: 4px;
        }
        .pr-driver-desc {
          font-size: 13px; line-height: 1.6; color: #888;
        }

        /* ── CTA ── */
        .pr-cta-wrap {
          background: var(--dark2);
          position: relative; overflow: hidden;
          text-align: center; padding: 100px 64px;
        }
        .pr-cta-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(204,0,0,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .pr-cta-body {
          font-size: 17px; line-height: 1.75; color: #B0B0B0;
          max-width: 700px; margin: 0 auto 40px; position: relative;
        }
        .btn-red {
          background: var(--red); color: #fff;
          padding: 14px 36px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          transition: background 0.15s; display: inline-block;
          position: relative;
        }
        .btn-red:hover { background: #aa0000; }

        /* ── FAQ ── */
        .pr-faq { padding: 96px 64px; max-width: 860px; margin: 0 auto; }
        .pr-faq-item {
          border-top: 1px solid #1e1e1e;
          padding: 28px 0;
        }
        .pr-faq-item:last-child { border-bottom: 1px solid #1e1e1e; }
        .pr-faq-q { font-size: 16px; font-weight: 700; color: #eee; margin-bottom: 10px; }
        .pr-faq-a { font-size: 15px; line-height: 1.75; color: #888; }

        /* ── TIERS ── */
        .pr-tiers-section {
          padding: 96px 64px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .pr-tiers-lead {
          font-size: 16px; line-height: 1.75; color: #888;
          max-width: 680px; margin-bottom: 48px;
        }
        .pr-tier-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .pr-tier-card {
          background: var(--dark2);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-top: 3px solid var(--red);
          padding: 32px;
          display: flex; flex-direction: column;
        }
        .pr-tier-num {
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          color: var(--red); margin-bottom: 8px;
        }
        .pr-tier-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 28px; letter-spacing: 0.03em;
          color: #fff; text-transform: uppercase; margin-bottom: 8px;
        }
        .pr-tier-tagline {
          font-size: 14px; line-height: 1.6; color: #888;
          font-style: italic; margin-bottom: 20px;
        }
        .pr-tier-sub-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; margin-bottom: 6px;
        }
        .pr-tier-built-for { font-size: 13px; line-height: 1.65; color: #C0C0C0; margin-bottom: 20px; }
        .pr-tier-list { list-style: none; padding: 0; margin: 0; flex: 1; }
        .pr-tier-list li {
          font-size: 13px; line-height: 1.65; color: #888;
          padding: 4px 0 4px 18px; position: relative;
        }
        .pr-tier-list li::before { content: '—'; position: absolute; left: 0; color: var(--red); }
        .pr-tier-note {
          font-size: 12px; line-height: 1.6; color: var(--gold);
          border-top: 1px solid #2a2a2a; margin-top: 20px; padding-top: 16px;
          font-style: italic;
        }

        /* ── CTA EXTRAS ── */
        .pr-cta-headline {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          color: #fff; letter-spacing: 0.03em;
          text-transform: uppercase;
          margin-bottom: 20px; position: relative;
        }
        .pr-cta-secondary {
          font-size: 13px; color: #888; text-decoration: none;
          transition: color 0.15s; position: relative;
        }
        .pr-cta-secondary:hover { color: #fff; }

        /* ── EXAMPLE ── */
        .pr-example {
          padding: 80px 64px;
          max-width: 860px;
          margin: 0 auto;
        }
        .pr-example-text {
          font-size: 17px; line-height: 1.85; color: #C0C0C0;
          border-left: 3px solid var(--red);
          padding-left: 28px;
        }

        @media (max-width: 900px) {
          .pr-hero { padding: 120px 24px 72px; }
          .pr-tiers-section { padding: 64px 24px; }
          .pr-tier-grid { grid-template-columns: 1fr; }
          .pr-section { padding: 64px 24px; }
          .pr-driver-grid { grid-template-columns: 1fr; }
          .pr-example { padding: 64px 24px; }
          .pr-faq { padding: 64px 24px; }
          .pr-cta-wrap { padding: 72px 24px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="pr-hero">
        <div className="pr-hero-bg" aria-hidden="true">PRICING</div>
        <div className="pr-hero-inner">
          <nav className="pr-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: '#AAAAAA' }}>Pricing</span>
          </nav>
          <p className="pr-eyebrow">San Antonio Video Production</p>
          <h1 className="pr-h1">
            What Video Production Costs in San Antonio
          </h1>
          <p className="pr-subtitle">
            Every video project is scoped individually — a 30-second social spot and a multi-day brand film don&rsquo;t carry the same budget, and they shouldn&rsquo;t. But &ldquo;it depends&rdquo; isn&rsquo;t a useful answer when you&rsquo;re planning a quarter. So here&rsquo;s how we actually structure production at Media Bar, what&rsquo;s included at each level, and what moves a budget up or down — the same framework we&rsquo;ve used across 13+ years, 3 Emmy Awards, and 15 Telly Awards of work for brands like the San Antonio Spurs, H-E-B, and Frost Bank.
          </p>
          <p className="pr-subtitle" style={{ marginTop: '16px', color: '#C0C0C0' }}>
            One thing that&rsquo;s true at every level: <strong style={{ color: '#fff' }}>you own all the footage we shoot.</strong> No licensing games, no holding your masters hostage.
          </p>
        </div>
      </section>

      {/* ── TIERS ── */}
      <div style={{ background: 'var(--black)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="pr-tiers-section">
          <div className="reveal">
            <p className="pr-section-label">Four Ways to Work With Us</p>
            <p className="pr-tiers-lead">Most projects fit one of four engagement levels. Knowing which one you&rsquo;re in gets you 80% of the way to a budget conversation.</p>
            <div className="pr-tier-grid">
              {TIERS.map((tier) => (
                <div key={tier.num} className="pr-tier-card">
                  <p className="pr-tier-num">{tier.num}</p>
                  <h2 className="pr-tier-title">{tier.title}</h2>
                  <p className="pr-tier-tagline">{tier.tagline}</p>
                  <p className="pr-tier-sub-label" style={{ color: 'var(--gold)' }}>Built for</p>
                  <p className="pr-tier-built-for">{tier.builtFor}</p>
                  <p className="pr-tier-sub-label" style={{ color: '#555' }}>Included</p>
                  <ul className="pr-tier-list">
                    {tier.includes.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {tier.note && <p className="pr-tier-note">{tier.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── COST DRIVERS ── */}
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="pr-section">
          <div className="reveal">
            <p className="pr-section-label">What Affects the Budget</p>
            <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#888', maxWidth: '680px', marginBottom: '32px' }}>
              Within any engagement level, a handful of factors do most of the moving — shoot days, crew size, locations, post-production depth, and deliverable count.
            </p>
            <div className="pr-driver-grid">
              {COST_DRIVERS.map((item) => (
                <div key={item.title} className="pr-driver-card">
                  <span className="pr-driver-icon">{item.icon}</span>
                  <div>
                    <p className="pr-driver-title">{item.title}</p>
                    <p className="pr-driver-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', lineHeight: '1.75', color: 'var(--gold)', marginTop: '28px', fontStyle: 'italic' }}>
              What doesn&rsquo;t change by tier: broadcast standards. We hold every project to the bar that won the Emmys, whether it&rsquo;s a Content Day or a Campaign.
            </p>
          </div>
        </div>
      </div>

      {/* ── REALISTIC EXAMPLE ── */}
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="pr-example reveal">
          <p className="pr-section-label">A Realistic Example</p>
          <p className="pr-example-text">
            A regional financial services company books a Brand Story Day: one day of production split between executive interviews in our studio and b-roll at two of their locations. Post-production delivers a brand film plus social cutdowns sized for where they publish. One decision, one shoot, a quarter&rsquo;s worth of content.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section style={{ background: 'var(--black)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="pr-faq reveal">
          <p className="pr-section-label">Frequently Asked Questions</p>
          {[
            {
              q: 'What does video production cost in San Antonio?',
              a: 'Every project is scoped individually, so cost depends on the work involved — creative and pre-production, the number of shoot days and crew size, locations and talent, specialized capture like aerial or multi-cam, post-production depth, and how the final video will be used. We recommend the right scope for your goals rather than a one-size-fits-all package.',
            },
            {
              q: "Why don't you list fixed prices?",
              a: 'A 30-second social spot and a multi-day brand film are very different productions, so a flat price list would be misleading. We give every client a custom quote based on their specific goals, scope, and deliverables.',
            },
            {
              q: "What's included in a video production quote?",
              a: 'Our quotes account for creative and pre-production, filming, post-production (editing, color, and sound), and your final deliverables. When we wrap, you own all the footage we shoot at no extra charge.',
            },
            {
              q: 'How do I get an accurate quote for my project?',
              a: "Tell us what you're trying to accomplish — your goals, audience, timeline, and where the video will run — and we'll build a custom quote with no guesswork and no hidden fees.",
            },
            {
              q: 'How much does a corporate video cost in San Antonio?',
              a: "It depends on scope — the honest range runs from a single-day brand story production to a multi-day campaign. The biggest cost drivers are shoot days, crew size, and post-production depth. Tell us your goal and we'll recommend the right scope, not the biggest one.",
            },
            {
              q: 'Do you have minimum project sizes?',
              a: "No. We scope to the goal — if a half-day shoot gets you what you need, that's what we'll recommend.",
            },
            {
              q: 'Do we own the footage?',
              a: 'Yes — everything we shoot for you is yours, including the raw footage.',
            },
            {
              q: 'How far in advance should we book?',
              a: "Typically one to two weeks for production scheduling. Larger campaigns with casting and locations need more runway — reach out early and we'll build the timeline together.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="pr-faq-item">
              <p className="pr-faq-q">{q}</p>
              <p className="pr-faq-a">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pr-cta-wrap">
        <div className="pr-cta-glow" aria-hidden="true" />
        <h2 className="pr-cta-headline">Let&rsquo;s Scope It Right</h2>
        <p className="pr-cta-body">
          The fastest way to a real number is a 15-minute conversation about what you&rsquo;re trying to accomplish. We&rsquo;ll tell you which engagement level fits — and if a smaller scope gets you there, we&rsquo;ll say so.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', position: 'relative' }}>
          <Link href="/contact" className="btn-red" style={{ padding: '16px 48px', fontSize: '13px' }}>
            Get a Quote
          </Link>
          <Link href="/work" className="pr-cta-secondary">
            See the work first &rarr;
          </Link>
        </div>
      </section>
    </Layout>
  )
}
