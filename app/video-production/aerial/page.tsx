'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import QuickContactBar from '@/components/QuickContactBar'


const useCases = [
  { icon: '🏢', title: 'Corporate Aerial' },
  { icon: '🏠', title: 'Real Estate Aerials' },
  { icon: '🏗️', title: 'Construction Progress' },
  { icon: '🎪', title: 'Event Aerial Coverage' },
  { icon: '⚡', title: 'Infrastructure & Utilities' },
  { icon: '🎬', title: 'Film & Commercial' },
]

const processSteps = [
  { num: '01', title: 'Location Assessment', desc: 'We evaluate airspace, obstructions, and optimal flight paths before the shoot.', bullets: ['Airspace class check', 'FAA LAANC authorization', 'Weather window planning', 'Safety hazard review'] },
  { num: '02', title: 'Permitting & Planning', desc: 'All regulatory requirements handled before we arrive on site.', bullets: ['FAA waivers if needed', 'Property permission', 'Flight plan filing', 'Shot list development'] },
  { num: '03', title: 'Aerial Shoot', desc: 'Cinematic drone capture with real-time monitoring.', bullets: ['Dual-operator setup', 'Live camera feed', 'Multi-angle passes', 'Ground safety crew'] },
  { num: '04', title: 'Integration & Delivery', desc: 'Aerial footage seamlessly combined with ground-level production.', bullets: ['Color matching', 'Ground + air edit', 'Color grade', 'Multi-format delivery'] },
]

const whyCards = [
  { icon: '✈️', title: 'FAA Part 107 Certified', desc: 'All our drone operators hold FAA Part 107 Remote Pilot Certificates. We handle all airspace authorizations and waivers - you don\'t have to worry about compliance.' },
  { icon: '🎥', title: 'Cinema-Grade Aerial', desc: 'We fly Inspire and Mavic 3 Cine platforms with interchangeable lens systems, capturing aerial footage that matches your ground cameras in quality and color.' },
  { icon: '🤝', title: 'Ground + Air Same Day', desc: 'We integrate aerial and ground production in a single shoot day. No need to coordinate two separate crews - one team handles everything.' },
  { icon: '🗺️', title: 'All of Texas', desc: 'We fly throughout San Antonio, Austin, Dallas, Houston, and across Texas. Travel costs are bundled into your quote upfront.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most aerial-only projects are delivered within 3-5 business days. Combined aerial + ground productions follow standard post timelines.' },
  { icon: '🏆', title: 'Emmy Award-Winning Team', desc: 'The same award-winning crew that handles ground production brings that same craft to the air. Aerial footage is only as good as the people operating it.' },
]

const faqs = [
  { q: 'Are your drone operators FAA certified?', a: 'Yes. All of our drone pilots hold FAA Part 107 Remote Pilot Certificates, which is the required certification for commercial drone operations in the United States. We also maintain current liability insurance that covers drone operations and provide certificates of insurance on request.' },
  { q: 'What happens if the weather doesn\'t cooperate?', a: 'We monitor weather conditions closely in the days leading up to your shoot. High winds, rain, and certain cloud conditions can ground drone operations. We build weather contingency into our scheduling and have a clear rescheduling policy - if conditions are unsafe, we reschedule at no additional cost.' },
  { q: 'How high can you fly?', a: 'Under standard FAA Part 107 rules, drone operations are limited to 400 feet above ground level. For certain projects in controlled airspace, we obtain LAANC authorization or FAA waivers that allow operation at different altitudes. We\'ll determine the right authorization for your location and project requirements during planning.' },
  { q: 'What drone and camera do you use?', a: 'Our primary platform is the DJI Inspire 3 with interchangeable lens systems, which captures true cinema-quality aerial footage. For projects where the drone needs to move more nimbly or operate in tighter spaces, we also fly the Mavic 3 Cine. Both platforms deliver footage that matches broadcast and cinema quality standards.' },
  { q: 'Can you combine aerial with ground-level video production?', a: 'Yes - and that\'s where the real magic happens. A production that combines cinematic drone work with ground-level interviews, b-roll, and action sequences tells a much more complete story. We regularly run aerial and ground crews simultaneously, then integrate the footage in post for a seamless final cut.' },
]

export default function AerialPage() {
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
        .page-hero{position:relative;background:#0a0a0a;padding:140px 64px 100px;overflow:hidden;border-bottom:1px solid #1a1a1a}
        .page-hero-image{object-fit:cover;z-index:0}
        .page-hero-scrim{position:absolute;inset:0;z-index:1;background:linear-gradient(to right,rgba(0,0,0,0.85),rgba(0,0,0,0.55))}
        .hero-bg-text{position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(120px,18vw,260px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-inner{position:relative;z-index:2;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr auto;gap:64px;align-items:center}
        .breadcrumb{font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#444;margin-bottom:24px;display:flex;align-items:center;gap:8px}
        .breadcrumb a{color:#B0B0B0;transition:color .15s}.breadcrumb a:hover{color:#fff}.breadcrumb span{color:#2a2a2a}
        .eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px}
        .page-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(52px,7vw,88px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;margin-bottom:8px}
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
        .portfolio-grid-wide{display:grid;grid-template-columns:1fr 1fr;gap:4px}
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
        .process-list li::before{content:'•';position:absolute;left:0;color:var(--red);font-size:10px}
        .why-wrap{background:var(--black)}.why-inner{max-width:1200px;margin:0 auto;padding:96px 64px;display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:start}
        .why-sticky{position:sticky;top:96px}
        .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px}
        .why-card{background:var(--dark2);border:1px solid #1e1e1e;padding:32px 28px;transition:border-color .2s}.why-card:hover{border-color:#333}
        .why-card-icon{font-size:28px;margin-bottom:14px}
        .why-card-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.05em;color:#fff;margin-bottom:10px}
        .why-card-desc{font-size:13px;line-height:1.7;color:#B0B0B0}
        .related-wrap{background:var(--dark);border-bottom:1px solid #1a1a1a}
        .related-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #2a2a2a;border-left:1px solid #2a2a2a}
        .related-card{display:flex;min-height:210px;flex-direction:column;padding:30px;border-right:1px solid #2a2a2a;border-bottom:1px solid #2a2a2a;color:#fff}
        .related-card:hover{background:#181818}
        .related-card h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:27px;font-weight:400;letter-spacing:.04em;text-transform:uppercase}
        .related-card p{margin-top:15px;color:#AAAAAA;font-size:13px;line-height:1.7}
        .related-card span{margin-top:auto;padding-top:28px;color:var(--red);font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
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
          .intro-grid{grid-template-columns:1fr;gap:48px}.portfolio-grid-wide{grid-template-columns:1fr}
          .process-grid{grid-template-columns:1fr 1fr}.why-inner{grid-template-columns:1fr}.why-sticky{position:static}
          .why-grid,.related-grid{grid-template-columns:1fr}.section{padding:64px 24px}
          .process-inner,.why-inner,.faq-inner{padding:64px 24px}.cta-wrap{padding:72px 24px}.page-hero{padding:120px 24px 72px}
        }
        @media(max-width:600px){.process-grid{grid-template-columns:1fr}}
      `}</style>

      <section className="page-hero">
        <Image
          className="page-hero-image"
          src="/images/hero-aerial.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-scrim" aria-hidden="true" />
        <div className="hero-bg-text" aria-hidden="true">AERIAL</div>
        <div className="hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/video-production">Services</Link><span>/</span>
              <span style={{ color: '#AAAAAA' }}>Aerial Video</span>
            </nav>
            <p className="eyebrow">FAA Part 107 Certified Drone Production</p>
            <h1 className="page-h1"><em>Aerial &amp; Drone</em>Video in San Antonio</h1>
            <p className="hero-sub">Cinematic aerial footage that elevates your production - from sweeping establishing shots to tight detail passes. FAA certified, fully insured, operating throughout Texas.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-red">Get a Free Quote</Link>
              <Link href="#portfolio" className="btn-ghost">See Our Work</Link>
            </div>
          </div>
          <div className="stat-card reveal">
            <div className="stat-item"><p className="stat-value">107</p><p className="stat-label">FAA Part 107 Certified</p></div>
            <div className="stat-item"><p className="stat-value">TX</p><p className="stat-label">All of Texas</p></div>
            <div className="stat-item"><p className="stat-value">1</p><p className="stat-label">Ground + Air Same Day</p></div>
          </div>
        </div>
      </section>

      <QuickContactBar />

      <div style={{ background: 'var(--dark)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <div className="intro-grid">
            <div className="reveal">
              <p className="section-label">What We Do</p>
              <h2 className="section-h2">The View From <em>Above</em></h2>
              <p className="body-text">Aerial footage changes the way audiences see a subject. A single sweeping drone shot can establish scale, reveal context, and create a cinematic quality that ground cameras simply can&apos;t match. Done right, it&apos;s invisible - it serves the story rather than showing off.</p>
              <p className="body-text">We integrate aerial seamlessly with ground-level production. Our FAA Part 107 certified pilots operate cinema-grade drone systems and work in coordination with your ground crew to ensure every aerial shot matches the look of your overall production.</p>
            </div>
            <div className="reveal">
              <p className="section-label">What We Shoot</p>
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
              <h2 className="section-h2" style={{ marginBottom: 0 }}>Aerial <em>Portfolio</em></h2>
            </div>
            <Link href="/work" className="link-arrow">View All Work →</Link>
          </div>
          <div className="portfolio-grid-wide reveal">
            {[
              { id: '1180537228', label: 'Aerial Production' },
              { id: '1180540292', label: 'Aerial Production' },
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
            <h2 className="section-h2">Why Clients Choose <em>Us</em> For Aerial</h2>
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

      <div className="related-wrap">
        <div className="section">
          <p className="section-label">Plan the complete production</p>
          <h2 className="section-h2">Connect Aerial With <em>the Story</em></h2>
          <div className="related-grid">
            <Link className="related-card" href="/video-production/real-estate">
              <h3>Real Estate Video</h3>
              <p>Combine property interiors, exterior details, and location context in one coordinated production.</p>
              <span>Explore real estate video →</span>
            </Link>
            <Link className="related-card" href="/video-production/events">
              <h3>Event Video Production</h3>
              <p>Use aerial coverage as one part of a larger conference, performance, or outdoor event plan.</p>
              <span>Explore event video →</span>
            </Link>
            <Link className="related-card" href="/video-production">
              <h3>All Video Services</h3>
              <p>Connect drone footage with interviews, commercial production, motion graphics, and post-production.</p>
              <span>Explore all services →</span>
            </Link>
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
        <h2 className="cta-h2">Ready To <em>Fly?</em></h2>
        <p className="cta-sub">Tell us about your aerial production needs and we&apos;ll put together a custom plan.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red" style={{ padding: '16px 48px', fontSize: '13px' }}>Get a Quote</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
