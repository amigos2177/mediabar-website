'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'

const eventPhotos = [
  { src: '/images/photography/SeaWorld-2015-0187.jpg', alt: 'SeaWorld San Antonio event coverage with performers and guests' },
  { src: '/images/photography/SeaWorld-2015-0198.jpg', alt: 'SeaWorld San Antonio event photography capturing venue atmosphere' },
  { src: '/images/photography/SeaWorld-2015-0239.jpg', alt: 'SeaWorld San Antonio entertainment event documentation' },
  { src: '/images/photography/SeaWorld-2015-0261.jpg', alt: 'SeaWorld San Antonio event photography with crowd and performers' },
  { src: '/images/photography/Sea-World-3-0164.jpg', alt: 'SeaWorld San Antonio outdoor event coverage' },
  { src: '/images/photography/Sea-World-3-0250.jpg', alt: 'SeaWorld San Antonio event detail and atmosphere photography' },
  { src: '/images/photography/SAHCC_Gala-1123.jpg', alt: 'San Antonio Hispanic Chamber of Commerce Gala — guests and ceremony' },
]

const corporatePhotos = [
  { src: '/images/photography/DSC_6557.JPG', alt: 'Professional corporate headshot in studio lighting' },
  { src: '/images/photography/DSC_6650.JPG', alt: 'Executive portrait with professional studio backdrop' },
]

const medicalPhotos = [
  { src: '/images/photography/SAMC-0003.jpg', alt: 'Healthcare facility photography at San Antonio Medical Center' },
  { src: '/images/photography/SAMC-0022.jpg', alt: 'Healthcare professional photography at San Antonio Medical Center' },
]

const industrialPhotos = [
  { src: '/images/photography/7-Commodities_Port.png', alt: 'Port San Antonio commodities terminal — large-format industrial photography' },
  { src: '/images/photography/11-West-Rail-Bridge-.png', alt: 'West Rail Bridge San Antonio — architectural infrastructure photography' },
  { src: '/images/photography/2A8A5879.jpg', alt: 'Commercial architectural exterior photography in San Antonio' },
]

const cityPhotos = [
  { src: '/images/photography/Photography-San-Antonio-1.jpg', alt: 'On-location photography in San Antonio, Texas' },
  { src: '/images/photography/Photography-San-Antonio-2.jpg', alt: 'San Antonio community and culture photography' },
  { src: '/images/photography/Photography-San-Antonio-5.jpg', alt: 'San Antonio photography — people and sense of place' },
  { src: '/images/photography/Photography-San-Antonio-9.jpg', alt: 'San Antonio local on-location photography' },
  { src: '/images/photography/Photography-San-Antonio-10.jpg', alt: 'Visual storytelling photography across San Antonio' },
  { src: '/images/photography/Photography-San-Antonio-14.jpg', alt: 'San Antonio community event photography' },
  { src: '/images/photography/Photography-San-Antonio-20.jpg', alt: 'On-location lifestyle photography in San Antonio, Texas' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Photography Services San Antonio — Media Bar Productions',
  description: 'Professional event, corporate, healthcare, and architectural photography in San Antonio, TX. Emmy Award–winning production team with 13+ years of experience.',
  url: 'https://www.mediabarproductions.com/photography',
  image: 'https://www.mediabarproductions.com/images/photography/DSC_6557.JPG',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Media Bar Productions',
    telephone: '+12102799442',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8610 N New Braunfels Ave, Suite 704',
      addressLocality: 'San Antonio',
      addressRegion: 'TX',
      postalCode: '78217',
      addressCountry: 'US',
    },
  },
}

export default function PhotographyPage() {
  useEffect(() => {
    document.title = 'Photography Services San Antonio | Media Bar Productions'
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
      { threshold: 0.06 }
    )
    reveals.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <style>{`
        :root { --red: #CC0000; --gold: #C9A84C; --black: #0A0A0A; --dark: #111111; --dark2: #181818; }
        * { box-sizing: border-box; }

        .ph-hero {
          position: relative;
          background: linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.55)),
                      url('/images/photography/DSC_6557.JPG') center/cover no-repeat;
          padding: 140px 64px 100px;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }
        .ph-hero-ghost {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(80px, 16vw, 240px);
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.025);
          white-space: nowrap;
          pointer-events: none; user-select: none; line-height: 1;
        }
        .ph-hero-inner {
          position: relative;
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 64px; align-items: center;
        }
        .ph-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--red); margin-bottom: 16px;
        }
        .ph-h1 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(52px, 7vw, 88px);
          line-height: 0.95; letter-spacing: 0.02em; color: #fff;
          text-transform: uppercase; margin-bottom: 24px;
        }
        .ph-hero-sub {
          font-size: 16px; line-height: 1.75; color: rgba(255,255,255,0.7);
          max-width: 560px;
        }
        .ph-stat-card {
          background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 40px 36px; min-width: 220px; flex-shrink: 0;
        }
        .ph-stat-item {
          text-align: center; padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ph-stat-item:last-child { border-bottom: none; }
        .ph-stat-value {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 42px; line-height: 1; color: var(--gold); letter-spacing: 0.03em;
        }
        .ph-stat-label {
          font-size: 9px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(255,255,255,0.45); margin-top: 6px;
        }

        .ph-cat-section { padding: 80px 48px; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
        .ph-cat-inner { max-width: 1200px; margin: 0 auto; }
        .ph-section-eyebrow {
          font-size: 10px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--red); margin-bottom: 12px;
        }
        .ph-section-h2 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(32px, 4vw, 56px);
          line-height: 1; letter-spacing: 0.03em; color: #fff;
          text-transform: uppercase; margin-bottom: 12px;
        }
        .ph-section-desc {
          font-size: 14px; line-height: 1.75; color: #777;
          max-width: 680px; margin-bottom: 28px;
        }

        .ph-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .ph-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .ph-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }

        .ph-photo-item {
          position: relative; aspect-ratio: 4/3;
          overflow: hidden; background: #111;
        }
        .ph-photo-item:hover .ph-img { transform: scale(1.04); }

        .ph-cta {
          background: var(--dark);
          border-top: 0.5px solid rgba(255,255,255,0.06);
          padding: 100px 48px; text-align: center;
          position: relative; overflow: hidden;
        }
        .ph-cta::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--red), transparent);
        }
        .ph-cta-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 100%; height: 100%;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(204,0,0,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .ph-cta-h2 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 1; letter-spacing: 0.03em; color: #fff;
          text-transform: uppercase; margin-bottom: 16px; position: relative;
        }
        .ph-cta-h2 em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic; text-transform: none; color: var(--red);
        }
        .ph-cta-sub { font-size: 15px; color: #666; margin-bottom: 48px; position: relative; }
        .ph-cta-actions {
          display: flex; justify-content: center;
          align-items: center; gap: 40px; flex-wrap: wrap; position: relative;
        }
        .btn-red {
          background: var(--red); color: #fff; text-decoration: none;
          padding: 16px 48px; font-size: 13px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          display: inline-block; transition: background 0.15s;
        }
        .btn-red:hover { background: #aa0000; }
        .ph-cta-phone {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 36px; letter-spacing: 0.06em; color: #fff;
          text-decoration: none; transition: color 0.15s;
        }
        .ph-cta-phone:hover { color: var(--gold); }

        @media (max-width: 900px) {
          .ph-hero { padding: 120px 24px 72px; }
          .ph-hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .ph-stat-card { min-width: auto; }
          .ph-cat-section { padding: 56px 24px; }
          .ph-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .ph-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .ph-cta { padding: 72px 24px; }
        }
        @media (max-width: 600px) {
          .ph-grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ph-hero">
        <div className="ph-hero-ghost" aria-hidden="true">PHOTOGRAPHY</div>
        <div className="ph-hero-inner">
          <div>
            <p className="ph-eyebrow">Professional Photography Services</p>
            <h1 className="ph-h1">Photography</h1>
            <p className="ph-hero-sub">
              From executive headshots and corporate portraits to large-scale event coverage, healthcare facilities, and industrial architecture — Media Bar Productions delivers professional photography across every category San Antonio businesses need. Our Emmy and Telly Award–winning production team has been based here for 13+ years, bringing the same cinematic eye to stills that we apply to every video project.
            </p>
          </div>
          <div className="ph-stat-card">
            {[
              { value: '13+', label: 'Years Experience' },
              { value: '1000+', label: 'Events Covered' },
              { value: '★', label: 'Professional Headshots' },
            ].map((s) => (
              <div key={s.label} className="ph-stat-item">
                <p className="ph-stat-value">{s.value}</p>
                <p className="ph-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENT PHOTOGRAPHY ── */}
      <section className="ph-cat-section" style={{ background: '#0A0A0A' }}>
        <div
          className="ph-cat-inner"
          data-reveal
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity .6s ease, transform .6s ease' }}
        >
          <p className="ph-section-eyebrow">Events & Galas</p>
          <h2 className="ph-section-h2">Event Photography</h2>
          <p className="ph-section-desc">
            Coverage from SeaWorld San Antonio, SAHCC Gala, and corporate events across South Texas. Editorial-quality stills that tell the story.
          </p>
          <div className="ph-grid-4">
            {eventPhotos.map((photo) => (
              <div key={photo.src} className="ph-photo-item">
                <Image
                  className="ph-img"
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORPORATE & HEADSHOTS ── */}
      <section className="ph-cat-section" style={{ background: '#111111' }}>
        <div
          className="ph-cat-inner"
          data-reveal
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity .6s ease, transform .6s ease' }}
        >
          <p className="ph-section-eyebrow">Corporate & Headshots</p>
          <h2 className="ph-section-h2">Corporate & Headshots</h2>
          <p className="ph-section-desc">
            Polished, professional portraits and executive headshots for company sites, LinkedIn, press kits, and brand collateral.
          </p>
          <div className="ph-grid-2">
            {corporatePhotos.map((photo) => (
              <div key={photo.src} className="ph-photo-item">
                <Image
                  className="ph-img"
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  sizes="(max-width: 600px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEALTHCARE & MEDICAL ── */}
      <section className="ph-cat-section" style={{ background: '#0A0A0A' }}>
        <div
          className="ph-cat-inner"
          data-reveal
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity .6s ease, transform .6s ease' }}
        >
          <p className="ph-section-eyebrow">Healthcare & Medical</p>
          <h2 className="ph-section-h2">Healthcare & Medical</h2>
          <p className="ph-section-desc">
            Medical photography for healthcare brands — patient-friendly, clinically accurate, HIPAA-aware production practices.
          </p>
          <div className="ph-grid-2">
            {medicalPhotos.map((photo) => (
              <div key={photo.src} className="ph-photo-item">
                <Image
                  className="ph-img"
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  sizes="(max-width: 600px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL & ARCHITECTURE ── */}
      <section className="ph-cat-section" style={{ background: '#111111' }}>
        <div
          className="ph-cat-inner"
          data-reveal
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity .6s ease, transform .6s ease' }}
        >
          <p className="ph-section-eyebrow">Industrial & Architecture</p>
          <h2 className="ph-section-h2">Industrial & Architecture</h2>
          <p className="ph-section-desc">
            Large-format industrial and architectural photography — ports, infrastructure, exteriors. Cinematic compositions that scale to print and billboard.
          </p>
          <div className="ph-grid-3">
            {industrialPhotos.map((photo) => (
              <div key={photo.src} className="ph-photo-item">
                <Image
                  className="ph-img"
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  sizes="(max-width: 900px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AROUND SAN ANTONIO ── */}
      <section className="ph-cat-section" style={{ background: '#0A0A0A' }}>
        <div
          className="ph-cat-inner"
          data-reveal
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity .6s ease, transform .6s ease' }}
        >
          <p className="ph-section-eyebrow">San Antonio</p>
          <h2 className="ph-section-h2">Around San Antonio</h2>
          <p className="ph-section-desc">
            On-location work across San Antonio — culture, community, and the visual character of the city we call home.
          </p>
          <div className="ph-grid-4">
            {cityPhotos.map((photo) => (
              <div key={photo.src} className="ph-photo-item">
                <Image
                  className="ph-img"
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ph-cta">
        <div className="ph-cta-glow" aria-hidden="true" />
        <h2 className="ph-cta-h2">Ready to Book a <em>Photo Shoot?</em></h2>
        <p className="ph-cta-sub">Tell us about your project and we'll put together a custom quote — fast.</p>
        <div className="ph-cta-actions">
          <Link href="/contact" className="btn-red">Get a Quote</Link>
          <a href="tel:2102799442" className="ph-cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
