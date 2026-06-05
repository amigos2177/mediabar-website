'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

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

        @media (max-width: 900px) {
          .pr-hero { padding: 120px 24px 72px; }
          .pr-section { padding: 64px 24px; }
          .pr-driver-grid { grid-template-columns: 1fr; }
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
            <em>What Goes Into </em>
            the Cost of a Video Production
          </h1>
          <p className="pr-subtitle">
            Every project is scoped individually — a 30-second social spot and a multi-day brand film don't carry the same budget. Here's what actually moves the number, so you can plan realistically before we talk specifics.
          </p>
        </div>
      </section>

      {/* ── COST DRIVERS ── */}
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="pr-section">
          <div className="reveal">
            <p className="pr-section-label">What Affects the Budget</p>
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
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="pr-cta-wrap">
        <div className="pr-cta-glow" aria-hidden="true" />
        <p className="pr-cta-body">
          Most of our work falls into a few clear bands, and we'll recommend the right scope for your goals — not the most expensive one. And when we wrap, you own all the footage we shoot, at no extra charge.
        </p>
        <Link href="/contact" className="btn-red" style={{ padding: '16px 48px', fontSize: '13px' }}>
          Request a Quote
        </Link>
      </section>
    </Layout>
  )
}
