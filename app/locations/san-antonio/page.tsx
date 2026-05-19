'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const industries = [
  { icon: '🎖️', name: 'Military & Defense', desc: 'Military City USA. Joint Base San Antonio is one of the largest military installations in the world, anchoring a robust defense contractor ecosystem.' },
  { icon: '🏥', name: 'Healthcare & Biosciences', desc: 'UT Health San Antonio, Baptist Health System, and University Health drive one of the fastest-growing medical markets in Texas.' },
  { icon: '🌮', name: 'Tourism & Hospitality', desc: 'San Antonio draws 37 million visitors annually. The Alamo, River Walk, and SeaWorld make this one of the top tourism markets in the country.' },
  { icon: '🏦', name: 'Financial Services', desc: 'Home to Frost Bank, USAA, Valero Energy, and a growing cluster of regional financial institutions and insurance companies.' },
  { icon: '🎓', name: 'Education', desc: 'UTSA, Trinity University, and the Alamo Colleges District serve over 100,000 students, supporting a strong demand for institutional video content.' },
  { icon: '🏭', name: 'Manufacturing & Tech', desc: 'Toyota, Boeing, Rackspace, and a growing tech sector make San Antonio a manufacturing and innovation hub for South Texas.' },
]

const locations = [
  { icon: '⛪', name: 'The Alamo & Historic Missions', desc: 'The most visited site in Texas. UNESCO World Heritage Site. Iconic backdrop for brand and editorial work.' },
  { icon: '🌊', name: 'The River Walk (Paseo del Rio)', desc: '15 miles of urban waterway lined with hotels, restaurants, and cultural venues. Unmatched visual variety.' },
  { icon: '🏀', name: 'AT&T Center & Spurs Facilities', desc: 'Home of the San Antonio Spurs. We\'ve produced content here and know how to work within the facility requirements.' },
  { icon: '🎨', name: 'Pearl District & Southtown', desc: 'San Antonio\'s creative corridor. Murals, architecture, and energy that works for modern brand storytelling.' },
  { icon: '🌃', name: 'Downtown San Antonio Skyline', desc: 'Tower of the Americas, sunset views, and the iconic downtown skyline for establishing shots and aerials.' },
  { icon: '🌄', name: 'San Antonio Hill Country', desc: 'The Texas Hill Country starts minutes outside the city — natural light, landscape, and wide-open sky for outdoor productions.' },
]

export default function SanAntonioPage() {
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
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(48px,9vw,130px);letter-spacing:.04em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;position:relative}
        .hero-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(48px,7vw,90px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;margin-bottom:20px}
        .hero-h1 em{color:var(--gold);font-style:normal}
        .hero-sub{font-size:17px;line-height:1.7;color:#C0C0C0;max-width:620px;margin:0 auto 32px;position:relative}

        .stat-strip{display:flex;justify-content:center;gap:0;position:relative;z-index:1;flex-wrap:wrap}
        .stat-card{background:var(--dark2);border:1px solid #2a2a2a;padding:20px 40px;text-align:center}
        .stat-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;line-height:1;color:var(--gold);letter-spacing:.04em}
        .stat-label{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#AAAAAA;margin-top:4px}

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
        @media(max-width:600px){.cards-grid{grid-template-columns:1fr}.stat-strip{flex-direction:column;align-items:center}}
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">SAN ANTONIO</div>
        <p className="hero-eyebrow">Our Home Market</p>
        <h1 className="hero-h1">Video Production <em>San Antonio</em></h1>
        <p className="hero-sub">This is home. Media Bar Productions has been producing award-winning video in San Antonio for over 13 years.</p>
        <div className="stat-strip">
          {[
            { value: '13+', label: 'Years in Market' },
            { value: '3', label: 'Emmy Awards' },
            { value: 'Home', label: 'Base of Operations' },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-wrap">
        <div className="section-inner">
          <p className="section-label">Industries</p>
          <h2 className="section-h2">Who We Shoot For in <em>San Antonio</em></h2>
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
              { title: 'Texas-Based, Texas-Focused', desc: 'We\'ve been here for 13 years. We know the permitting requirements, the locations, and the local crews that make productions run smooth.' },
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
        <h2 className="cta-h2">Let's Work <em>Together</em></h2>
        <p className="cta-sub">Tell us about your project. We respond within one business day.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Start a Project</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
