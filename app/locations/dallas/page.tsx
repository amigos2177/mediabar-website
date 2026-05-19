'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const industries = [
  { icon: '🏦', name: 'Financial Services', desc: 'Charles Schwab, Goldman Sachs Regional HQ, Wells Fargo, and dozens of financial institutions have relocated or expanded in Dallas-Fort Worth.' },
  { icon: '💻', name: 'Technology & Data Centers', desc: 'AT&T HQ, Texas Instruments, and one of the country\'s largest concentrations of data center infrastructure. DFW tech employment grew 3.7% in 2024.' },
  { icon: '✈️', name: 'Aviation, Aerospace & Defense', desc: 'DFW Airport, American Airlines HQ, Lockheed Martin, and Bell Textron anchor one of the strongest aerospace and defense clusters in North America.' },
  { icon: '📦', name: 'Logistics & Supply Chain', desc: 'Amazon, FedEx, and a massive distribution network make DFW one of the most important logistics hubs in the country — with consistent demand for industrial and operations video.' },
  { icon: '🏥', name: 'Healthcare Systems', desc: 'Baylor Scott & White, UT Southwestern, and Texas Health Resources operate massive systems requiring institutional video for communications, training, and patient education.' },
  { icon: '🏗️', name: 'Real Estate & Development', desc: 'DFW is the fastest-growing major metro in America. Commercial real estate development, residential launches, and construction documentation are in constant demand.' },
]

const locations = [
  { icon: '🌆', name: 'Downtown Dallas Skyline', desc: 'Reunion Tower, Bank of America Plaza, and the distinctive Fountain Place tower. One of the most recognizable urban skylines in the South.' },
  { icon: '🤠', name: 'Stockyards — Fort Worth', desc: 'The Fort Worth Stockyards National Historic District is a culturally iconic location for brand work that leans into Texas heritage and authenticity.' },
  { icon: '🎭', name: 'Dallas Arts District', desc: 'The largest contiguous urban arts district in the United States. The AT&T Performing Arts Center and Nasher Sculpture Center offer unique visual environments.' },
  { icon: '🏟️', name: 'AT&T Stadium & Globe Life Field', desc: 'Home of the Dallas Cowboys and Texas Rangers. We have experience producing content at major sports venues and can navigate facility access requirements.' },
  { icon: '🌳', name: 'Klyde Warren Park', desc: 'Dallas\'s signature urban park — built over a freeway, connecting Uptown and the Arts District. A modern, dynamic location that reads as distinctly Dallas.' },
  { icon: '🛫', name: 'DFW Airport & Las Colinas', desc: 'One of the world\'s busiest airports and the corporate campus hub of Las Colinas offer environments for aviation, business, and logistics content.' },
]

export default function DallasPage() {
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
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(60px,11vw,170px);letter-spacing:.04em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;position:relative}
        .hero-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(40px,6.5vw,84px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;margin-bottom:20px}
        .hero-h1 em{color:var(--gold);font-style:normal}
        .hero-sub{font-size:17px;line-height:1.7;color:#C0C0C0;max-width:620px;margin:0 auto 28px;position:relative}
        .drive-badge{display:inline-flex;align-items:center;gap:8px;background:var(--dark2);border:1px solid #2a2a2a;padding:10px 20px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B0B0B0;position:relative}
        .drive-badge span{color:var(--gold)}

        .section-wrap{background:var(--black);border-bottom:1px solid #1a1a1a}
        .section-inner{max-width:1200px;margin:0 auto;padding:80px 64px}
        .section-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:12px;text-align:center}
        .section-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(32px,4.5vw,56px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:48px;text-align:center}
        .section-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:rgba(255,255,255,.55)}

        .cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
        .card{background:var(--dark2);border:1px solid #1e1e1e;padding:32px 28px;transition:border-color .2s}.card:hover{border-color:#333}
        .card-icon{font-size:28px;margin-bottom:14px}
        .card-name{font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.05em;color:#fff;margin-bottom:10px}
        .card-desc{font-size:13px;line-height:1.7;color:#B0B0B0}

        .dark-wrap{background:var(--dark);border-bottom:1px solid #1a1a1a}

        .why-wrap{background:var(--dark2);border-bottom:1px solid #1a1a1a}
        .why-inner{max-width:900px;margin:0 auto;padding:80px 64px;text-align:center}
        .why-list{display:flex;flex-direction:column;gap:0;margin:40px 0;text-align:left}
        .why-item{display:flex;gap:20px;align-items:flex-start;padding:20px 0;border-bottom:1px solid #2a2a2a}
        .why-item:last-child{border-bottom:none}
        .why-bullet{width:8px;height:8px;background:var(--red);flex-shrink:0;margin-top:6px}
        .why-text-title{font-size:15px;font-weight:700;color:#ddd;margin-bottom:4px}
        .why-text-desc{font-size:13px;line-height:1.7;color:#B0B0B0}

        .cta-wrap{background:var(--black);position:relative;overflow:hidden;text-align:center;padding:100px 64px}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(40px,6vw,72px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .cta-sub{font-size:16px;color:#B0B0B0;margin-bottom:40px;position:relative}
        .cta-actions{display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;position:relative}
        .btn-red{background:var(--red);color:#fff;padding:16px 48px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:background .15s;display:inline-block}.btn-red:hover{background:#aa0000}
        .cta-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;letter-spacing:.06em;color:#fff;transition:color .15s}.cta-phone:hover{color:var(--gold)}

        @media(max-width:900px){
          .page-hero{padding:120px 24px 72px}
          .cards-grid{grid-template-columns:1fr 1fr}
          .section-inner,.why-inner{padding:56px 24px}
          .cta-wrap{padding:72px 24px}
        }
        @media(max-width:600px){.cards-grid{grid-template-columns:1fr}}
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">DALLAS</div>
        <p className="hero-eyebrow">Dallas-Fort Worth Video Production</p>
        <h1 className="hero-h1">Video Production <em>Dallas-Fort Worth</em></h1>
        <p className="hero-sub">Dallas-Fort Worth is home to 24 Fortune 500 companies and is the fastest-growing major metro in America.</p>
        <div className="drive-badge">
          <span>4.5 hrs</span> from San Antonio · Overnight available
        </div>
      </section>

      <div className="section-wrap">
        <div className="section-inner">
          <p className="section-label">Industries</p>
          <h2 className="section-h2">Who We Shoot For in <em>Dallas-Fort Worth</em></h2>
          <div className="cards-grid">
            {industries.map((ind, i) => (
              <div key={ind.name} className="card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="card-icon">{ind.icon}</div>
                <h3 className="card-name">{ind.name}</h3>
                <p className="card-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dark-wrap">
        <div className="section-inner">
          <p className="section-label">On Location</p>
          <h2 className="section-h2">Filming Locations <em>We Know</em></h2>
          <div className="cards-grid">
            {locations.map((loc, i) => (
              <div key={loc.name} className="card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="card-icon">{loc.icon}</div>
                <h3 className="card-name">{loc.name}</h3>
                <p className="card-desc">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="why-wrap">
        <div className="why-inner reveal">
          <p className="section-label">Why Media Bar</p>
          <h2 className="section-h2" style={{ marginBottom: 0 }}>Why We're the Right <em>Partner</em></h2>
          <div className="why-list">
            {[
              { title: 'Emmy-Winning Quality', desc: 'Three Emmy Awards and fifteen Telly Awards. We hold every project to broadcast standards regardless of budget.' },
              { title: 'Texas-Based, Texas-Focused', desc: 'We\'re not flying in from LA or New York. We\'re four hours down I-35 and we don\'t pad your quote with coast-to-coast travel.' },
              { title: 'Full-Service Under One Roof', desc: 'Concept through delivery — scripting, production, editing, color, audio, motion graphics. No vendor-hopping.' },
              { title: 'Direct Access to Decision-Makers', desc: 'You work directly with the producers and directors doing the work — not account coordinators. Faster decisions, better results.' },
            ].map((item) => (
              <div key={item.title} className="why-item">
                <div className="why-bullet" />
                <div>
                  <p className="why-text-title">{item.title}</p>
                  <p className="why-text-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="cta-wrap">
        <div className="cta-glow" aria-hidden="true" />
        <h2 className="cta-h2">Shooting in <em>Dallas?</em></h2>
        <p className="cta-sub">Tell us about your project. We respond within one business day.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Get a Quote</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
