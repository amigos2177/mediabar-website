'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import GoogleReviews from '../../components/GoogleReviews'
import { MediaBarAnswersFeature } from '../../components/MediaBarAnswersFeature'
import VimeoPlayer from '../../components/VimeoPlayer'
import { VideoObjectJsonLd } from '../../components/JsonLd'

const services = [
  {
    label: 'Corporate Video',
    href: '/video-production/corporate',
    description: 'Brand films, executive stories, recruiting, training, and internal communications.',
    iconIndex: 0,
  },
  {
    label: 'Commercials',
    href: '/video-production/commercials',
    description: 'Broadcast and digital campaigns built to earn attention and stay memorable.',
    iconIndex: 1,
  },
  {
    label: 'Event Coverage',
    href: '/video-production/events',
    description: 'Event video production for conferences, galas, keynotes, recaps, and session content.',
    iconIndex: 2,
  },
  {
    label: 'Live Streaming',
    href: '/video-production/live-streaming',
    description: 'Multi-camera live production for audiences in the room and around the world.',
    iconIndex: 7,
  },
  {
    label: 'Post Production',
    href: '/video-production/post-production',
    description: 'Video post-production with editorial, color, audio, graphics, captions, and delivery.',
    iconIndex: 8,
  },
  {
    label: 'Motion Graphics',
    href: '/video-production/motion-graphics',
    description: 'Motion graphics, animation, and visual systems that make complex ideas clear.',
    iconIndex: 6,
  },
]

const svgProps = {
  width: 28, height: 28, viewBox: '0 0 24 24',
  fill: 'none', stroke: '#CC0000', strokeWidth: 1.5,
  strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
}

const serviceIcons = [
  // Corporate Video - briefcase
  <svg key="corporate" {...svgProps}>
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>,
  // Commercials - play circle
  <svg key="commercials" {...svgProps}>
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8"/>
  </svg>,
  // Event Coverage - calendar
  <svg key="events" {...svgProps}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>,
  // Interview & Discussion - mic
  <svg key="interview" {...svgProps}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="8" y1="22" x2="16" y2="22"/>
  </svg>,
  // Medical Video - plus square
  <svg key="medical" {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>,
  // Aerial Video - arrow up
  <svg key="aerial" {...svgProps}>
    <line x1="12" y1="19" x2="12" y2="5"/>
    <polyline points="5 12 12 5 19 12"/>
  </svg>,
  // Motion Graphics - layers
  <svg key="motion" {...svgProps}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>,
  // Live Streaming - wifi
  <svg key="streaming" {...svgProps}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <line x1="12" y1="20" x2="12.01" y2="20"/>
  </svg>,
  // Post Production - scissors
  <svg key="post" {...svgProps}>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>,
  // Food Video - coffee
  <svg key="food" {...svgProps}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>,
  // Real Estate Video - home
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
  const [heroVideoReady, setHeroVideoReady] = useState(false)
  const [heroVideoEnabled, setHeroVideoEnabled] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setReduceMotion(motionPreference.matches)
    updateMotionPreference()
    motionPreference.addEventListener('change', updateMotionPreference)

    let videoDelay = 0
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean }
    }).connection
    const shouldLoadBackgroundVideo = (
      !motionPreference.matches
      && !connection?.saveData
      && !window.matchMedia('(max-width: 768px)').matches
    )
    if (shouldLoadBackgroundVideo) {
      videoDelay = window.setTimeout(() => setHeroVideoEnabled(true), 1800)
    }

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
      window.clearTimeout(videoDelay)
      motionPreference.removeEventListener('change', updateMotionPreference)
    }
  }, [])

  return (
    <Layout>
      <VideoObjectJsonLd
        name="2025 Corporate Video Demo Reel"
        description="Media Bar Productions demo reel featuring corporate, commercial, event, healthcare, and branded video work produced in San Antonio and across Texas."
        thumbnailUrl="https://i.vimeocdn.com/video/2007121987-d46882b6b21b356f6dfc32d487245d5802d9508db9e6d9c699a70c7156f7da6c-d_1280?region=us"
        uploadDate="2025-04-20T00:00:00-05:00"
        duration="PT2M38S"
        embedUrl="https://player.vimeo.com/video/1077104073"
      />
      <style>{`
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
          background: #080808;
        }
        .hero-poster {
          position: absolute;
          inset: 0;
          object-fit: cover;
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
          opacity: 0;
          transition: opacity .45s ease;
        }
        .hero-video-wrap iframe.ready { opacity: 1; }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.78) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 24px;
          max-width: 1040px;
          margin: 0 auto;
          text-align: center;
        }
        .hero-eyebrow {
          font-size: 11px;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.2em;
          margin-bottom: 18px;
          text-transform: uppercase;
        }
        .hero-headline {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(54px, 10vw, 116px);
          line-height: 0.88;
          letter-spacing: 0.025em;
          color: #fff;
          text-transform: uppercase;
        }
        .hero-headline-geo {
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 0.48em;
          font-style: italic;
          font-weight: 600;
          color: rgba(255,255,255,0.76);
          letter-spacing: 0.01em;
          text-transform: none;
          margin-top: 12px;
        }
        .hero-sub {
          max-width: 690px;
          margin: 28px auto 0;
          color: rgba(255,255,255,.72);
          font-size: clamp(15px, 1.8vw, 18px);
          line-height: 1.65;
        }
        .hero-pills {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
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
          margin-top: 36px;
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
          color: #7f7f7f;
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

        /* ─── DIRECT ANSWERS ─── */
        .answer-section {
          padding: 96px 48px;
          background: #0d0d0d;
          border-bottom: 1px solid #1d1d1d;
        }
        .answer-inner {
          display: grid;
          grid-template-columns: minmax(300px, .82fr) minmax(0, 1.18fr);
          gap: 72px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .answer-intro {
          align-self: start;
          position: sticky;
          top: 112px;
        }
        .answer-title {
          margin-top: 14px;
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(46px, 5vw, 68px);
          font-weight: 400;
          letter-spacing: .03em;
          line-height: .98;
          color: #fff;
          text-transform: uppercase;
        }
        .answer-title em {
          display: block;
          margin-top: 6px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: .7em;
          font-style: italic;
          font-weight: 600;
          letter-spacing: 0;
          color: var(--gold);
          text-transform: none;
        }
        .answer-intro > p:not(.eyebrow) {
          margin: 24px 0 28px;
          color: rgba(255,255,255,.6);
          font-size: 15px;
          line-height: 1.75;
        }
        .answer-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255,255,255,.13);
          border-left: 1px solid rgba(255,255,255,.13);
        }
        .answer-card {
          min-height: 250px;
          padding: 32px;
          border-right: 1px solid rgba(255,255,255,.13);
          border-bottom: 1px solid rgba(255,255,255,.13);
          background: #121212;
        }
        .answer-card h3 {
          color: #fff;
          font-size: 16px;
          line-height: 1.35;
        }
        .answer-card p {
          margin: 14px 0 22px;
          color: #929292;
          font-size: 13px;
          line-height: 1.7;
        }
        .answer-link {
          color: #ff4d4d;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        /* ─── FEATURED WORK ─── */
        .featured-work {
          background: var(--black);
          padding: 112px 48px;
        }
        .featured-inner {
          max-width: 1240px;
          margin: 0 auto;
        }
        .featured-card {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(360px, .7fr);
          min-height: 610px;
          background: var(--dark2);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 8px;
          overflow: hidden;
        }
        .featured-visual {
          position: relative;
          min-height: 520px;
          overflow: hidden;
        }
        .featured-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 55%, rgba(10,10,10,.2));
        }
        .featured-visual img {
          object-fit: cover;
          transition: transform .7s ease;
        }
        .featured-card:hover .featured-visual img { transform: scale(1.025); }
        .featured-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 56px;
        }
        .featured-kicker {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #ff4d4d;
          margin-bottom: 18px;
        }
        .featured-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(44px, 5vw, 68px);
          line-height: .95;
          letter-spacing: .03em;
          color: #fff;
        }
        .featured-title span {
          display: block;
          margin-top: 8px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: .54em;
          font-style: italic;
          letter-spacing: 0;
          color: var(--gold);
          text-transform: none;
        }
        .featured-description {
          color: rgba(255,255,255,.6);
          font-size: 15px;
          line-height: 1.75;
          margin: 24px 0 30px;
        }
        .featured-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.1);
          margin-bottom: 34px;
        }
        .featured-stat {
          background: #141414;
          padding: 15px 12px;
          text-align: center;
        }
        .featured-stat strong {
          display: block;
          font-family: 'Bebas Neue', Impact, sans-serif;
          color: #fff;
          font-size: 25px;
          line-height: 1;
          letter-spacing: .04em;
        }
        .featured-stat span {
          display: block;
          margin-top: 6px;
          color: #999;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .13em;
          text-transform: uppercase;
        }
        .text-link {
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .17em;
          text-transform: uppercase;
          text-decoration: none;
        }
        .text-link span { color: var(--red); margin-left: 8px; }

        /* ─── SHARED SECTION ─── */
        .section { padding: 96px 48px; }
        .section-dark  { background: var(--dark); }
        .section-dark2 { background: var(--dark2); }

        .eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ff4d4d;
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
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1px;
          background: #242424;
          border: 1px solid #242424;
        }
        .service-card {
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
          color: #8a8a8a;
          margin-bottom: 10px;
        }
        .service-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 22px;
          letter-spacing: 0.05em;
          color: #fff;
        }
        .service-description {
          color: #888;
          font-size: 13px;
          line-height: 1.6;
          margin-top: 12px;
          max-width: 260px;
        }
        .service-card-cta {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8a8a8a;
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .service-card:hover .service-card-cta { color: var(--red); gap: 10px; }
        .specialty-card {
          grid-column: span 4;
          position: relative;
          display: grid;
          grid-template-columns: minmax(260px, .7fr) minmax(420px, 1.3fr);
          gap: 44px;
          align-items: center;
          min-height: 210px;
          padding: 34px 40px;
          overflow: hidden;
          background:
            radial-gradient(circle at 92% 10%, rgba(201,168,76,.13), transparent 30%),
            linear-gradient(120deg, #151515, #101010);
        }
        .specialty-card::after {
          content: '11';
          position: absolute;
          right: 26px;
          bottom: -46px;
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 210px;
          line-height: 1;
          letter-spacing: -.03em;
          color: rgba(255,255,255,.025);
          pointer-events: none;
        }
        .specialty-kicker {
          color: var(--gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .19em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .specialty-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          color: #fff;
          font-size: clamp(30px, 3vw, 44px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: .04em;
        }
        .specialty-copy {
          max-width: 420px;
          margin-top: 12px;
          color: #888;
          font-size: 13px;
          line-height: 1.6;
        }
        .specialty-links {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }
        .specialty-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-height: 46px;
          padding: 11px 15px;
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.72);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          transition: border-color .18s ease, color .18s ease, background .18s ease;
        }
        .specialty-link:hover {
          border-color: rgba(204,0,0,.65);
          background: rgba(204,0,0,.08);
          color: #fff;
        }
        .specialty-link:last-child {
          border-color: rgba(201,168,76,.35);
          color: var(--gold);
        }

        /* ─── PROCESS ─── */
        .process-layout {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 72px;
          align-items: center;
        }
        .process-intro .section-title { margin-bottom: 24px; }
        .process-intro > p {
          color: rgba(255,255,255,.58);
          font-size: 16px;
          line-height: 1.75;
          margin-bottom: 34px;
        }
        .process-steps {
          border-top: 1px solid rgba(255,255,255,.12);
        }
        .process-step {
          display: grid;
          grid-template-columns: 48px 1fr auto;
          gap: 20px;
          align-items: center;
          padding: 25px 0;
          border-bottom: 1px solid rgba(255,255,255,.12);
        }
        .process-num {
          font-family: 'Bebas Neue', Impact, sans-serif;
          color: #ff4d4d;
          font-size: 19px;
          letter-spacing: .08em;
        }
        .process-step h3 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          color: #fff;
          font-size: 26px;
          letter-spacing: .05em;
          font-weight: 400;
        }
        .process-step p {
          grid-column: 2 / 4;
          color: #999;
          font-size: 13px;
          line-height: 1.55;
          margin-top: -12px;
        }
        .process-arrow { color: #555; }

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
        .reel-duo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .reel-duo .reel-wrap { max-width: none; margin: 0; }
        .reel-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 12px;
          text-align: center;
        }
        @media (max-width: 768px) {
          .reel-duo { grid-template-columns: 1fr; gap: 32px; }
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
          color: #888;
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
          .featured-card { grid-template-columns: 1fr; }
          .featured-copy { padding: 48px; }
          .process-layout { grid-template-columns: 1fr; gap: 48px; }
          .services-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .specialty-card { grid-column: span 3; }
          .answer-inner { grid-template-columns: 1fr; gap: 48px; }
          .answer-intro { position: static; }
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
          .hero { min-height: 720px; }
          .hero-content { padding-top: 64px; }
          .featured-work { padding: 72px 20px; }
          .featured-card { min-height: 0; }
          .featured-visual { min-height: 300px; }
          .featured-copy { padding: 34px 24px 38px; }
          .featured-stats { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .specialty-card {
            grid-column: span 1;
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 32px 24px;
          }
          .specialty-links { grid-template-columns: 1fr; }
          .answer-section { padding: 72px 20px; }
          .answer-grid { grid-template-columns: 1fr; }
          .answer-card { min-height: 0; padding: 28px 24px; }
        }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section className="hero">
        <div className="hero-video-wrap">
          <Image
            className="hero-poster"
            src="/images/hero-aerial.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          {heroVideoEnabled && !reduceMotion && (
            <iframe
              className={heroVideoReady ? 'ready' : undefined}
              src="https://player.vimeo.com/video/1077104073?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&controls=0"
              allow="autoplay; fullscreen"
              title="Media Bar Productions showreel background"
              onLoad={() => setHeroVideoReady(true)}
            />
          )}
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">San Antonio video production company · Producing since 2011</p>
          <h1 className="hero-headline">
            Video Production
            <span className="hero-headline-geo">Built in San Antonio.</span>
          </h1>
          <p className="hero-sub">
            Media Bar Productions creates cinematic stories that move people and business,
            with commercials, corporate films, and event content planned, produced, and finished
            by one experienced Texas team.
          </p>
          <div className="hero-pills">
            <span className="hero-pill">Strategy to Delivery</span>
            <span className="hero-pill">3 Emmy Awards</span>
            <span className="hero-pill">Your Footage, Yours to Keep</span>
          </div>
          <div className="hero-ctas">
            <Link href="/project-planner" className="btn-red">Start a Project</Link>
            <Link href="/work" className="btn-outline">Watch Our Work</Link>
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
                ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={56}
                    sizes="(max-width: 600px) 42vw, (max-width: 1024px) 21vw, 11vw"
                  />
                )
                : <span className="client-text">{client.name}</span>
              }
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. DIRECT ANSWERS ─── */}
      <section className="answer-section" data-reveal aria-labelledby="homepage-answers-title">
        <div className="answer-inner">
          <div className="answer-intro">
            <p className="eyebrow">San Antonio Video Production</p>
            <h2 className="answer-title" id="homepage-answers-title">
              One Partner
              <em>from first idea to final delivery.</em>
            </h2>
            <p>
              Media Bar Productions is a full-service video production company based in
              San Antonio, Texas. Since 2011, our team has helped organizations plan, film,
              edit, and deliver video for audiences across Texas and beyond.
            </p>
            <Link href="/locations/san-antonio" className="text-link">
              Meet our San Antonio production team <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="answer-grid">
            <article className="answer-card">
              <h3>What does Media Bar produce?</h3>
              <p>
                Corporate films, TV and digital commercials, event coverage, interviews,
                medical video, live streams, motion graphics, food content, and post-production.
              </p>
              <Link href="/video-production" className="answer-link">
                Explore video production services →
              </Link>
            </article>
            <article className="answer-card">
              <h3>What does full-service production include?</h3>
              <p>
                Strategy, creative development, scripting, pre-production, experienced crews,
                filming, editing, color, audio, captions, and delivery for every channel.
              </p>
              <Link href="/how-we-work" className="answer-link">
                See our production process →
              </Link>
            </article>
            <article className="answer-card">
              <h3>Who owns the footage?</h3>
              <p>
                You do. Final deliverables and the footage we capture for your project belong
                to your organization, with files prepared for the platforms you need.
              </p>
              <Link href="/resources/video-production-faq" className="answer-link">
                Read the video production guide →
              </Link>
            </article>
            <article className="answer-card">
              <h3>How is a project priced?</h3>
              <p>
                Scope depends on the creative, crew, locations, talent, shoot days, and
                post-production. We recommend the right production plan before work begins.
              </p>
              <Link href="/pricing" className="answer-link">
                See what drives video cost →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <MediaBarAnswersFeature
        title="Production questions"
        emphasis="answered clearly."
        description="Short, practical guidance from Ruben Garcia and the Media Bar team, with full transcripts and deeper planning resources for every answer."
        slugs={[
          'why-corporate-videos-get-delayed',
          'corporate-video-cost-san-antonio',
        ]}
        placement="home"
      />

      {/* ─── 4. FEATURED CASE STUDY ─── */}
      <section className="featured-work" data-reveal>
        <div className="featured-inner">
          <p className="eyebrow">Featured Work</p>
          <h2 className="section-title">A Campaign Built to <em>Go Beyond</em></h2>
          <article className="featured-card">
            <div className="featured-visual">
              <Image
                src="/images/rbfcu-bts-riverside.jpg"
                alt="Media Bar Productions filming the RBFCU Go Beyond Banking commercial campaign beside a Texas river"
                fill
                sizes="(max-width: 1024px) 100vw, 62vw"
              />
            </div>
            <div className="featured-copy">
              <p className="featured-kicker">RBFCU · Broadcast Campaign</p>
              <h3 className="featured-title">
                Five Stories
                <span>One human promise.</span>
              </h3>
              <p className="featured-description">
                Media Bar co-wrote, produced, and finished a five-commercial campaign designed
                to make one of Texas&rsquo;s largest credit unions feel personal in every market.
              </p>
              <div className="featured-stats" aria-label="Campaign highlights">
                <div className="featured-stat"><strong>5</strong><span>Broadcast spots</span></div>
                <div className="featured-stat"><strong>4</strong><span>Texas markets</span></div>
                <div className="featured-stat"><strong>5M+</strong><span>Online views</span></div>
              </div>
              <Link href="/work/rbfcu-go-beyond-banking" className="text-link">
                Explore the case study <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ─── 5. SERVICES GRID ─── */}
      <section className="section section-dark" data-reveal>
        <p className="eyebrow">Our Services</p>
        <h2 className="section-title">One Team, <em>Every Frame</em></h2>
        <div className="services-grid">
          {services.map((svc, i) => (
            <Link key={svc.href} href={svc.href} className="service-card">
              <div className="service-card-top">
                <span className="service-icon" aria-hidden="true">{serviceIcons[svc.iconIndex]}</span>
                <p className="service-num">{String(i + 1).padStart(2, '0')}</p>
                <p className="service-title">{svc.label}</p>
                <p className="service-description">{svc.description}</p>
              </div>
              <span className="service-card-cta">Explore service →</span>
            </Link>
          ))}
          <aside className="specialty-card">
            <div>
              <p className="specialty-kicker">More ways to create</p>
              <h3 className="specialty-title">Specialized Production</h3>
              <p className="specialty-copy">
                The same experienced crew, adapted to the subject, setting, and audience your
                story requires.
              </p>
            </div>
            <nav className="specialty-links" aria-label="Specialized video production services">
              {[
                ['Interview & Discussion', '/video-production/interview'],
                ['Medical & Healthcare', '/video-production/medical'],
                ['Aerial & Drone', '/video-production/aerial'],
                ['Food & Beverage', '/video-production/food'],
                ['Real Estate', '/video-production/real-estate'],
                ['Explore All Services', '/video-production'],
              ].map(([label, href]) => (
                <Link className="specialty-link" href={href} key={href}>
                  <span>{label}</span><span aria-hidden="true">→</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      {/* ─── 6. DEMO REEL ─── */}
      <section className="section section-dark2" data-reveal>
        <p className="eyebrow">Demo Reel</p>
        <h2 className="section-title" style={{ marginBottom: '40px' }}>See <em>The Work</em></h2>
        <div className="reel-section-inner">
          <div className="reel-duo">
            <div>
              <p className="reel-label">Studio Showreel</p>
              <div className="reel-wrap">
                <VimeoPlayer
                  videoId="1077104073"
                  title="Media Bar Productions Demo Reel"
                  thumbnailUrl="https://i.vimeocdn.com/video/2007121987-d46882b6b21b356f6dfc32d487245d5802d9508db9e6d9c699a70c7156f7da6c-d_1280?region=us"
                  eager
                />
              </div>
            </div>
            <div>
              <p className="reel-label">Commercials Reel</p>
              <div className="reel-wrap">
                <VimeoPlayer
                  videoId="1203197473"
                  title="Media Bar Productions Commercials Reel"
                  thumbnailUrl="/images/commercials-reel-spurs-coyote.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section className="section" style={{ background: 'var(--black)' }} data-reveal>
        <div className="process-layout">
          <div className="process-intro">
            <p className="eyebrow">The Media Bar Experience</p>
            <h2 className="section-title">Big Production. <em>No Black Box.</em></h2>
            <p>
              You get a clear plan, a direct line to the team, and a private project space
              where timelines, files, feedback, approvals, and final delivery stay together.
            </p>
            <Link href="/how-we-work" className="btn-red">See How We Work</Link>
          </div>
          <div className="process-steps">
            {[
              ['01', 'Plan', 'Goals, audience, script, schedule, and approvals before cameras roll.'],
              ['02', 'Produce', 'An experienced crew, a detailed call sheet, and a calm, prepared set.'],
              ['03', 'Refine', 'Structured review rounds with feedback and versions visible in your portal.'],
              ['04', 'Deliver', 'Final files prepared for every channel, with the footage yours to keep.'],
            ].map(([num, title, description]) => (
              <div className="process-step" key={num}>
                <span className="process-num">{num}</span>
                <h3>{title}</h3>
                <span className="process-arrow" aria-hidden="true">→</span>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
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
            <p className="award-count">2011</p>
            <p className="award-name">Producing Since</p>
          </div>
        </div>
      </section>

      {/* ─── 6. COST TEASER ─── */}
      <section className="section section-dark2" style={{ textAlign: 'center' }} data-reveal>
        <p className="eyebrow">What It Costs</p>
        <h2 className="section-title" style={{ marginBottom: '24px' }}>What Goes Into the Cost of a <em>Video Production</em></h2>
        <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.55)', maxWidth: '680px', margin: '0 auto 44px' }}>
          Every project is scoped individually - a 30-second social spot and a multi-day brand film don&rsquo;t carry the same budget. We&rsquo;ll recommend the right scope for your goals, and you own all the footage we shoot.
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
