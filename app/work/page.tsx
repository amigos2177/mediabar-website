'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const VIMEO = 'https://player.vimeo.com/video'
const PARAMS = '?title=0&byline=0&portrait=0&color=CC0000&badge=0'

const categories = [
  {
    label: 'Corporate Video',
    eyebrow: 'Corporate Video',
    href: '/video-production/corporate',
    description: 'Brand films, executive interviews, training content, and internal communications for businesses of every size. We work with companies ranging from local San Antonio brands to national Fortune 500s.',
    videos: ['1193317757', '1193318299', '1193318830', '1056209144'],
  },
  {
    label: 'TV Commercials',
    eyebrow: 'TV Commercials',
    href: '/video-production/commercials',
    description: 'Broadcast-quality TV and digital commercials for local and national brands. From concept through final delivery, we produce spots that cut through and convert.',
    videos: ['1203197473', '1126506220', '1142308210', '1142308227', '1138375371'],
  },
  {
    label: 'Event Coverage',
    eyebrow: 'Event Coverage',
    href: '/video-production/events',
    description: 'Multi-camera event coverage for conferences, galas, product launches, and live performances. We capture the energy of the room and deliver polished highlight reels that live on long after the event.',
    videos: ['946447253', '1056208254', '163617404', '299504298'],
  },
  {
    label: 'Interview & Discussion',
    eyebrow: 'Interview & Discussion',
    href: '/video-production/interview',
    description: 'Thought leadership interviews, testimonial series, and documentary-style profiles. We create the right environment for authentic, on-camera conversation that tells a compelling story.',
    videos: ['1180537582', '1180540188', '1180540381', '298919239'],
  },
  {
    label: 'Medical Video',
    eyebrow: 'Medical Video',
    href: '/video-production/medical',
    description: 'Specialized production for healthcare systems, medical device companies, and physicians. We understand compliance requirements and produce with the precision and sensitivity the subject demands.',
    videos: ['1180540550', '697230305', '298194779', '1066804582'],
  },
  {
    label: 'Aerial Video',
    eyebrow: 'Aerial Video',
    href: '/video-production/aerial',
    description: 'FAA-licensed drone operators delivering cinematic aerial footage across Texas. We integrate aerial seamlessly into ground-level productions or execute standalone drone shoots.',
    videos: ['1180537228', '1180540292'],
  },
  {
    label: 'Motion Graphics',
    eyebrow: 'Motion Graphics',
    href: '/video-production/motion-graphics',
    description: 'Animated explainers, logo animations, title sequences, and data visualization. Our motion designers bring your brand to life in motion — for broadcast, digital, or social.',
    videos: ['1180540640', '849834914', '557693922', '803316101'],
  },
  {
    label: 'Post Production',
    eyebrow: 'Post Production',
    href: '/video-production/post-production',
    description: 'Full post-production including editorial, color grading, audio mixing, and VFX. We work with your existing footage or handle the complete pipeline from acquisition to final deliverable.',
    videos: ['1180526566', '1067207585', '298056449', '666115814'],
  },
  {
    label: 'Food Video',
    eyebrow: 'Food Video',
    href: '/video-production/food',
    description: 'Appetite-driving food and beverage video for restaurants and CPG brands. Our culinary production team understands food styling and the visual language that makes viewers hungry.',
    videos: ['298056449', '697231773', '697232139', '358864530'],
  },
]

export default function WorkPage() {
  useEffect(() => {
    document.title = 'Our Work | Media Bar Productions'
    const reveals = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).style.opacity = '1'
            ;(e.target as HTMLElement).style.transform = 'none'
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    reveals.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital@1&display=swap');

        :root { --red: #CC0000; --gold: #C9A84C; --black: #0A0A0A; --dark: #111111; --dark2: #181818; }
        * { box-sizing: border-box; }

        /* ── HERO ── */
        .wk-hero {
          position: relative;
          background: var(--black);
          padding: 160px 64px 100px;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
          text-align: center;
        }
        .wk-hero-bg {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(120px, 20vw, 300px);
          letter-spacing: .05em;
          color: rgba(255,255,255,.025);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }
        .wk-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: .18em;
          text-transform: uppercase; color: var(--red); margin-bottom: 16px; position: relative;
        }
        .wk-h1 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(56px, 8vw, 100px);
          line-height: .95; letter-spacing: .02em; color: #fff;
          text-transform: uppercase; position: relative; margin-bottom: 24px;
        }
        .wk-sub {
          font-size: 17px; line-height: 1.7; color: #C0C0C0;
          max-width: 640px; margin: 0 auto; position: relative;
        }

        /* ── REEL SECTION ── */
        .reel-section {
          background: var(--black);
          padding: 80px 48px;
          border-bottom: 1px solid #1a1a1a;
        }
        .reel-inner { max-width: 1100px; margin: 0 auto; }
        .section-label {
          font-size: 10px; font-weight: 700; letter-spacing: .18em;
          text-transform: uppercase; color: var(--red); margin-bottom: 12px;
        }
        .section-h2 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1; letter-spacing: .03em; color: #fff;
          text-transform: uppercase; margin-bottom: 32px;
        }
        .section-h2 em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic; text-transform: none; color: rgba(255,255,255,.55);
        }
        .reel-wrap {
          position: relative; padding-bottom: 56.25%; height: 0;
          overflow: hidden; border-radius: 4px; background: #000;
        }
        .reel-wrap iframe {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; border: none;
        }
        .reel-stats {
          display: flex; justify-content: center; gap: 0;
          margin-top: 32px;
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          overflow: hidden;
        }
        .reel-stat {
          flex: 1;
          padding: 20px 32px;
          text-align: center;
          border-right: 0.5px solid rgba(255,255,255,0.08);
        }
        .reel-stat:last-child { border-right: none; }
        .reel-stat-value {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 28px; letter-spacing: .04em; color: #fff; line-height: 1;
        }
        .reel-stat-label {
          font-size: 10px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: #AAAAAA; margin-top: 4px;
        }

        /* ── CATEGORY SECTIONS ── */
        .cat-section { padding: 80px 48px; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
        .cat-inner { max-width: 1100px; margin: 0 auto; }
        .cat-desc {
          font-size: 15px; line-height: 1.75; color: #C0C0C0;
          max-width: 700px; margin-bottom: 12px;
        }
        .cat-link {
          display: inline-flex; align-items: center; gap: 8px;
          color: var(--red); text-decoration: none;
          font-size: 11px; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; transition: opacity .15s;
          margin-bottom: 32px;
        }
        .cat-link:hover { opacity: .7; }

        /* ── VIDEO GRID ── */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 32px;
        }
        .portfolio-grid.wide { grid-template-columns: repeat(2, 1fr); }
        .video-wrap {
          position: relative; padding-bottom: 56.25%; height: 0;
          overflow: hidden; border-radius: 4px; background: #000;
        }
        .video-wrap iframe {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; border: none;
        }

        /* ── BOTTOM CTA ── */
        .wk-cta {
          background: var(--dark);
          border-top: 0.5px solid rgba(255,255,255,0.06);
          padding: 100px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .wk-cta::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--red), transparent);
        }
        .wk-cta-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 100%; height: 100%;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(204,0,0,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .wk-cta-h2 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(54px, 7vw, 96px);
          line-height: 1; letter-spacing: .03em; color: #fff;
          text-transform: uppercase; margin-bottom: 16px; position: relative;
        }
        .wk-cta-h2 em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic; text-transform: none; color: var(--red);
        }
        .wk-cta-sub {
          font-size: 15px; color: #B0B0B0;
          margin-bottom: 48px; position: relative;
        }
        .wk-cta-actions {
          display: flex; justify-content: center;
          align-items: center; gap: 40px; flex-wrap: wrap; position: relative;
        }
        .btn-red {
          background: var(--red); color: #fff; text-decoration: none;
          padding: 16px 48px; font-size: 13px; font-weight: 700;
          letter-spacing: .12em; text-transform: uppercase;
          display: inline-block; transition: background .15s;
        }
        .btn-red:hover { background: #aa0000; }
        .wk-cta-phone {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 36px; letter-spacing: .06em; color: #fff;
          text-decoration: none; transition: color .15s;
        }
        .wk-cta-phone:hover { color: var(--gold); }

        @media (max-width: 900px) {
          .wk-hero { padding: 120px 24px 72px; }
          .reel-section, .cat-section { padding: 56px 24px; }
          .wk-cta { padding: 72px 24px; }
          .reel-stats { flex-direction: column; }
          .reel-stat { border-right: none; border-bottom: 0.5px solid rgba(255,255,255,0.08); }
          .reel-stat:last-child { border-bottom: none; }
        }
        @media (max-width: 640px) {
          .portfolio-grid, .portfolio-grid.wide { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="wk-hero">
        <div className="wk-hero-bg" aria-hidden="true">OUR WORK</div>
        <p className="wk-eyebrow">13+ Years of Award-Winning Production</p>
        <h1 className="wk-h1">Our Portfolio</h1>
        <p className="wk-sub">
          A selection of video production work from Media Bar Productions — corporate, commercial, event, medical and more across Texas and beyond.
        </p>
      </section>

      {/* ── FEATURED REEL ── */}
      <section className="reel-section">
        <div
          className="reel-inner"
          data-reveal
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity .6s ease, transform .6s ease' }}
        >
          <p className="section-label">Demo Reel</p>
          <h2 className="section-h2">FULL-SERVICE <em>Video Production</em></h2>
          <div className="reel-wrap">
            <iframe
              src={`${VIMEO}/1077104073${PARAMS}`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Media Bar Productions — Demo Reel"
            />
          </div>
          <div className="reel-stats">
            <div className="reel-stat">
              <p className="reel-stat-value">3</p>
              <p className="reel-stat-label">Emmy Awards</p>
            </div>
            <div className="reel-stat">
              <p className="reel-stat-value">15</p>
              <p className="reel-stat-label">Telly Awards</p>
            </div>
            <div className="reel-stat">
              <p className="reel-stat-value">13+</p>
              <p className="reel-stat-label">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY SECTIONS ── */}
      {categories.map((cat, i) => (
        <section
          key={cat.label}
          className="cat-section"
          style={{ background: i % 2 === 0 ? '#0A0A0A' : '#111111' }}
        >
          <div
            className="cat-inner"
            data-reveal
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity .6s ease, transform .6s ease' }}
          >
            <p className="section-label">{cat.eyebrow}</p>
            <h2 className="section-h2">{cat.label}</h2>
            <p className="cat-desc">{cat.description}</p>
            <Link href={cat.href} className="cat-link">
              See Full Service →
            </Link>
            <div className={`portfolio-grid${cat.videos.length === 2 ? ' wide' : ''}`}>
              {cat.videos.map((id) => (
                <div key={id} className="video-wrap">
                  <iframe
                    src={`${VIMEO}/${id}${PARAMS}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`${cat.label} — Media Bar Productions`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── BOTTOM CTA ── */}
      <section className="wk-cta">
        <div className="wk-cta-glow" aria-hidden="true" />
        <h2 className="wk-cta-h2">Ready To <em>Start Your Project?</em></h2>
        <p className="wk-cta-sub">Tell us about your project and we'll put together a custom quote.</p>
        <div className="wk-cta-actions">
          <Link href="/contact" className="btn-red">Get a Quote</Link>
          <a href="tel:2102799442" className="wk-cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
