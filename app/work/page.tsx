'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const categories = [
  { icon: '🏢', label: 'Corporate Video' },
  { icon: '📺', label: 'Commercials' },
  { icon: '🎤', label: 'Events' },
  { icon: '🎙️', label: 'Interview & Doc' },
  { icon: '🏥', label: 'Medical' },
  { icon: '✈️', label: 'Aerial' },
  { icon: '🎨', label: 'Motion Graphics' },
  { icon: '📡', label: 'Live Streaming' },
  { icon: '🍔', label: 'Food Video' },
  { icon: '🏠', label: 'Real Estate' },
]

export default function WorkPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }) },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <Layout>
      <style>{`
        :root{--red:#CC0000;--gold:#C9A84C;--black:#0A0A0A;--dark:#111111;--dark2:#181818}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease}.reveal.revealed{opacity:1;transform:none}

        .page-hero{position:relative;background:var(--black);padding:160px 64px 100px;overflow:hidden;border-bottom:1px solid #1a1a1a;text-align:center}
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(120px,20vw,300px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;position:relative}
        .hero-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(56px,8vw,100px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;margin-bottom:20px}
        .hero-h1 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;color:rgba(255,255,255,.55);text-transform:none}
        .hero-sub{font-size:17px;line-height:1.7;color:#777;max-width:620px;margin:0 auto;position:relative}

        .cats-strip{background:var(--dark);border-bottom:1px solid #1e1e1e;padding:28px 64px;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:8px}
        .cat-pill{background:none;border:1px solid #2a2a2a;padding:7px 16px;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#555;display:flex;align-items:center;gap:6px;white-space:nowrap}
        .cat-pill-icon{font-size:13px}

        .coming-wrap{background:var(--black);border-bottom:1px solid #1a1a1a}
        .coming-inner{max-width:800px;margin:0 auto;padding:96px 64px;text-align:center}
        .coming-icon{font-size:56px;margin-bottom:24px;opacity:.6}
        .coming-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,5vw,60px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:20px}
        .coming-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:rgba(255,255,255,.5)}
        .coming-body{font-size:16px;line-height:1.8;color:#777;margin-bottom:32px}
        .coming-link{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;border-bottom:1px solid var(--red);padding-bottom:3px;transition:color .15s;display:inline-block}.coming-link:hover{color:var(--red)}

        .services-wrap{background:var(--dark)}
        .services-inner{max-width:1200px;margin:0 auto;padding:96px 64px}
        .section-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:14px;text-align:center}
        .section-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,4.5vw,56px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:48px;text-align:center}
        .section-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:rgba(255,255,255,.55)}
        .services-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:2px}
        .service-card{background:var(--dark2);border:1px solid #1e1e1e;padding:28px 20px;text-align:center;transition:border-color .2s}.service-card:hover{border-color:#333}
        .service-icon{font-size:28px;margin-bottom:10px}
        .service-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#666}

        .clients-strip{background:var(--black);border-top:1px solid #1a1a1a;border-bottom:1px solid #1a1a1a;padding:32px 64px}
        .clients-label{text-align:center;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#333;margin-bottom:20px}
        .clients-row{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}
        .client-name{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#444;padding:8px 24px;border-right:1px solid #1e1e1e;white-space:nowrap;transition:color .15s}
        .client-name:last-child{border-right:none}
        .client-name:hover{color:#888}

        .cta-wrap{background:var(--dark2);position:relative;overflow:hidden;text-align:center;padding:100px 64px}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(48px,7vw,88px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .cta-sub{font-size:16px;color:#666;margin-bottom:48px;position:relative}
        .cta-actions{display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;position:relative}
        .btn-red{background:var(--red);color:#fff;padding:16px 48px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:background .15s;display:inline-block}.btn-red:hover{background:#aa0000}
        .cta-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;letter-spacing:.06em;color:#fff;transition:color .15s}.cta-phone:hover{color:var(--gold)}

        @media(max-width:900px){
          .page-hero{padding:120px 24px 72px}
          .cats-strip{padding:20px 24px}
          .coming-inner,.services-inner{padding:64px 24px}
          .services-grid{grid-template-columns:repeat(2,1fr)}
          .clients-strip{padding:28px 24px}
          .cta-wrap{padding:72px 24px}
        }
        @media(max-width:480px){.services-grid{grid-template-columns:1fr 1fr}}
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">WORK</div>
        <p className="hero-eyebrow">Portfolio</p>
        <h1 className="hero-h1">Our <em>Work</em></h1>
        <p className="hero-sub">A selection of video production work from Media Bar Productions — 13+ years of corporate, commercial, event, and brand video across Texas.</p>
      </section>

      <div className="cats-strip">
        {categories.map((c) => (
          <div key={c.label} className="cat-pill">
            <span className="cat-pill-icon">{c.icon}</span>
            {c.label}
          </div>
        ))}
      </div>

      <div className="coming-wrap">
        <div className="coming-inner reveal">
          <div className="coming-icon">🎬</div>
          <h2 className="coming-h2">Full Portfolio <em>Coming Soon</em></h2>
          <p className="coming-body">
            We're building out our full online portfolio. In the meantime, we're happy to share work specific to your industry, budget range, or project type — just reach out and tell us what you're looking for.
          </p>
          <Link href="/contact" className="coming-link">
            Request Industry-Specific Samples →
          </Link>
        </div>
      </div>

      <div className="services-wrap">
        <div className="services-inner">
          <p className="section-label">What We Produce</p>
          <h2 className="section-h2">Every Type of <em>Video</em></h2>
          <div className="services-grid">
            {categories.map((c, i) => (
              <div key={c.label} className="service-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="service-icon">{c.icon}</div>
                <p className="service-label">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="clients-strip">
        <p className="clients-label">Clients We've Produced For</p>
        <div className="clients-row">
          {['San Antonio Spurs', 'HEB', 'Unilever', 'Frost Bank', 'Baker Hughes', 'Kia', 'Bass Pro Shops', 'Kiolbassa', 'Blue Moon', 'Carrier'].map((name) => (
            <span key={name} className="client-name">{name}</span>
          ))}
        </div>
      </div>

      <section className="cta-wrap">
        <div className="cta-glow" aria-hidden="true" />
        <h2 className="cta-h2">Start Your <em>Project</em></h2>
        <p className="cta-sub">Tell us what you're working on and we'll share relevant work from our portfolio.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Contact Us</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
