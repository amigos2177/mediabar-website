'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const featuredClients = [
  { name: 'San Antonio Spurs', industry: 'Sports & Entertainment' },
  { name: 'HEB', industry: 'Retail & Grocery' },
  { name: 'Unilever', industry: 'Consumer Goods' },
  { name: 'Frost Bank', industry: 'Financial Services' },
  { name: 'Baker Hughes', industry: 'Energy' },
  { name: 'Kia', industry: 'Automotive' },
  { name: 'Bass Pro Shops', industry: 'Retail' },
  { name: 'Kiolbassa', industry: 'Food & Beverage' },
]

const additionalClients = [
  'Blue Moon', 'Carrier', 'CPS Energy', 'USAA', 'Southwest Research Institute',
  'University Health', 'Methodist Healthcare', 'H-E-B Food & Drug', 'City of San Antonio', 'San Antonio Zoo', 'Port San Antonio',
]

const industries = [
  { icon: '🏢', name: 'Corporate & Enterprise', desc: 'Internal communications, recruiting videos, brand films for Fortune 500s and regional leaders.' },
  { icon: '🏥', name: 'Healthcare & Medical', desc: 'HIPAA-compliant patient testimonials, physician profiles, and medical procedure explainers.' },
  { icon: '🍔', name: 'Food & Beverage', desc: 'CPG product videos, restaurant brand content, and food manufacturing documentation.' },
  { icon: '🏠', name: 'Real Estate', desc: 'Property tours, development showcases, and aerial coverage for residential and commercial listings.' },
  { icon: '⚡', name: 'Energy & Industrial', desc: 'Safety training, facility documentation, and corporate communications for energy companies.' },
  { icon: '🎓', name: 'Education & Nonprofit', desc: 'Fundraising appeals, program overviews, and annual report videos for institutions and nonprofits.' },
  { icon: '🏦', name: 'Financial Services', desc: 'Brand campaigns, executive interviews, and client testimonials for banks and financial firms.' },
  { icon: '🛍️', name: 'Retail & Consumer', desc: 'Product launches, commercials, and in-store content for retail brands and e-commerce.' },
  { icon: '🏟️', name: 'Sports & Entertainment', desc: 'Player features, sponsor content, and event coverage for sports teams and venues.' },
]

export default function ClientsPage() {
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
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(60px,10vw,160px);letter-spacing:.04em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;position:relative}
        .hero-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(56px,8vw,100px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;margin-bottom:20px}
        .hero-h1 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;color:rgba(255,255,255,.55);text-transform:none}
        .hero-sub{font-size:17px;line-height:1.7;color:#777;max-width:560px;margin:0 auto;position:relative}

        .stats-bar{background:var(--dark);border-bottom:1px solid #1e1e1e;display:flex;justify-content:center;flex-wrap:wrap}
        .stat-item{padding:28px 56px;text-align:center;border-right:1px solid #1e1e1e}
        .stat-item:last-child{border-right:none}
        .stat-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:42px;line-height:1;color:#fff;letter-spacing:.03em}
        .stat-label{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-top:4px}

        .section{padding:96px 64px;max-width:1200px;margin:0 auto}
        .section-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
        .section-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,5vw,60px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:48px;text-align:center}
        .section-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:rgba(255,255,255,.6)}

        .logo-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-bottom:2px}
        .logo-card{background:var(--dark2);border:1px solid #1e1e1e;padding:40px 28px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;transition:border-color .2s}.logo-card:hover{border-color:#333}
        .logo-name{font-family:'Bebas Neue',Impact,sans-serif;font-size:22px;letter-spacing:.06em;color:#fff}
        .logo-industry{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#444}

        .more-clients-wrap{background:var(--dark);border-top:1px solid #1a1a1a;border-bottom:1px solid #1a1a1a;padding:36px 64px}
        .more-clients-label{text-align:center;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#333;margin-bottom:20px}
        .more-clients-row{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}
        .more-client{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#444;padding:8px 24px;border-right:1px solid #1e1e1e;white-space:nowrap;transition:color .15s}
        .more-client:last-child{border-right:none}
        .more-client:hover{color:#888}

        .industries-wrap{background:var(--black)}
        .industries-inner{max-width:1200px;margin:0 auto;padding:96px 64px}
        .industries-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
        .industry-card{background:var(--dark2);border:1px solid #1e1e1e;padding:36px 28px;transition:border-color .2s}.industry-card:hover{border-color:#333}
        .industry-icon{font-size:28px;margin-bottom:14px}
        .industry-name{font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.05em;color:#fff;margin-bottom:10px}
        .industry-desc{font-size:13px;line-height:1.7;color:#666}

        .quote-wrap{background:var(--dark);border-top:1px solid #1a1a1a;border-bottom:1px solid #1a1a1a;padding:96px 64px;text-align:center}
        .quote-inner{max-width:760px;margin:0 auto}
        .pull-quote{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:clamp(20px,3vw,28px);line-height:1.5;color:rgba(255,255,255,.8);margin-bottom:28px}
        .quote-attr{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#555}
        .quote-attr span{color:var(--gold)}

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
          .stats-bar{flex-wrap:wrap}.stat-item{flex:1 1 50%;border-right:none;border-bottom:1px solid #1e1e1e}
          .logo-grid{grid-template-columns:repeat(2,1fr)}
          .industries-grid{grid-template-columns:1fr 1fr}
          .section,.industries-inner{padding:64px 24px}
          .more-clients-wrap,.quote-wrap,.cta-wrap{padding:56px 24px}
        }
        @media(max-width:600px){
          .logo-grid{grid-template-columns:1fr 1fr}
          .industries-grid{grid-template-columns:1fr}
        }
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">OUR CLIENTS</div>
        <p className="hero-eyebrow">Who We Work With</p>
        <h1 className="hero-h1">Brands That <em>Trust Us</em></h1>
        <p className="hero-sub">From Fortune 500 brands to San Antonio institutions — 13 years of video production for the companies that shape this region.</p>
      </section>

      <div className="stats-bar">
        {[
          { value: '13+', label: 'Years in Business' },
          { value: '500+', label: 'Videos Produced' },
          { value: '9', label: 'Industries Served' },
          { value: '3', label: 'Emmy Awards' },
        ].map((s) => (
          <div key={s.label} className="stat-item">
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--black)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <p className="section-label" style={{ textAlign: 'center' }}>Client Roster</p>
          <h2 className="section-h2">Notable <em>Clients</em></h2>
          <div className="logo-grid reveal">
            {featuredClients.map((c) => (
              <div key={c.name} className="logo-card">
                <p className="logo-name">{c.name}</p>
                <p className="logo-industry">{c.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="more-clients-wrap">
        <p className="more-clients-label">Also Includes</p>
        <div className="more-clients-row">
          {additionalClients.map((name) => (
            <span key={name} className="more-client">{name}</span>
          ))}
        </div>
      </div>

      <div className="industries-wrap">
        <div className="industries-inner">
          <p className="section-label" style={{ textAlign: 'center' }}>Sectors</p>
          <h2 className="section-h2">Industries <em>We Serve</em></h2>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div key={ind.name} className="industry-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="industry-icon">{ind.icon}</div>
                <h3 className="industry-name">{ind.name}</h3>
                <p className="industry-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="quote-wrap reveal">
        <div className="quote-inner">
          <p className="pull-quote">"We didn't want a vendor. We wanted a production partner who understood our brand, our audience, and our deadlines. Media Bar has been that partner for years."</p>
          <p className="quote-attr">— <span>Senior Marketing Director, Regional Financial Institution</span></p>
        </div>
      </div>

      <section className="cta-wrap">
        <div className="cta-glow" aria-hidden="true" />
        <h2 className="cta-h2">Join Our <em>Client List</em></h2>
        <p className="cta-sub">Tell us about your project and we'll put together a custom proposal — fast.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Start a Project</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
