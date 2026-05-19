'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const values = [
  { icon: '🎬', title: 'The Work First', desc: 'Awards are a byproduct of doing great work — not the goal. Every project gets our full attention regardless of budget or brand size.' },
  { icon: '📁', title: 'Your Footage Belongs to You', desc: 'No licensing traps. No footage held hostage. Everything we shoot for you belongs to you, period.' },
  { icon: '📞', title: "We're Always Available", desc: 'You won\'t get passed to an account coordinator. You\'ll have direct access to the people doing the work.' },
  { icon: '💰', title: 'Honest Pricing', desc: 'Itemized quotes, no hidden fees, no scope creep surprises. You know exactly what you\'re paying for before we start.' },
  { icon: '📺', title: 'Broadcast Standards Every Time', desc: 'We apply the same technical and creative rigor to a $5,000 social video as we do to a $50,000 broadcast campaign.' },
  { icon: '🤠', title: 'San Antonio Is Home', desc: 'We\'ve been here for 13 years and we plan to stay. We\'re invested in the businesses and brands that make this city great.' },
]

const clients = [
  'San Antonio Spurs', 'HEB', 'Unilever', 'Frost Bank',
  'Baker Hughes', 'Kia', 'Bass Pro Shops', 'Kiolbassa',
  'Blue Moon', 'Carrier',
]

export default function AboutPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }) },
      { threshold: 0.12 }
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
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(140px,22vw,320px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;position:relative}
        .hero-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(56px,8vw,100px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;margin-bottom:24px}
        .hero-h1 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;color:rgba(255,255,255,.55);text-transform:none}
        .hero-sub{font-size:18px;line-height:1.7;color:#777;max-width:640px;margin:0 auto;position:relative}

        .stats-bar{background:var(--dark);border-bottom:1px solid #1e1e1e;display:flex;justify-content:center;flex-wrap:wrap}
        .stat-item{padding:28px 48px;text-align:center;border-right:1px solid #1e1e1e}
        .stat-item:last-child{border-right:none}
        .stat-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:42px;line-height:1;color:#fff;letter-spacing:.03em}
        .stat-label{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-top:4px}

        .section{padding:96px 64px;max-width:1200px;margin:0 auto}
        .section-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
        .section-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,5vw,60px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:24px}
        .section-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:rgba(255,255,255,.6)}
        .body-text{font-size:15px;line-height:1.8;color:#888;margin-bottom:20px}

        .story-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
        .pull-quote{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:26px;line-height:1.4;color:rgba(255,255,255,.7);border-left:3px solid var(--red);padding-left:24px;margin:32px 0}
        .bts-section{background:var(--black);padding:0 64px 80px}
        .bts-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;max-width:1200px;margin:0 auto}
        .bts-cell{overflow:hidden;border-radius:4px;border:1px solid #1e1e1e;height:260px}
        .bts-cell.bts-wide{grid-column:span 2}
        .bts-cell img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}
        .bts-cell:hover img{transform:scale(1.03)}

        .values-wrap{background:var(--dark)}
        .values-inner{max-width:1200px;margin:0 auto;padding:96px 64px}
        .values-header{text-align:center;margin-bottom:64px}
        .values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
        .value-card{background:var(--dark2);padding:40px 32px;border:1px solid #1e1e1e;transition:border-color .2s}
        .value-card:hover{border-color:#333}
        .value-icon{font-size:32px;margin-bottom:16px}
        .value-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:22px;letter-spacing:.05em;color:#fff;margin-bottom:12px}
        .value-desc{font-size:13px;line-height:1.75;color:#666}

        .clients-strip{background:var(--black);border-top:1px solid #1a1a1a;border-bottom:1px solid #1a1a1a;padding:36px 64px}
        .clients-label{text-align:center;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#333;margin-bottom:24px}
        .clients-row{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}
        .client-name{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#444;padding:10px 28px;border-right:1px solid #1e1e1e;white-space:nowrap;transition:color .15s}
        .client-name:last-child{border-right:none}
        .client-name:hover{color:#888}

        .cta-wrap{background:var(--dark2);position:relative;overflow:hidden;text-align:center;padding:100px 64px}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(48px,7vw,88px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .cta-sub{font-size:16px;color:#666;margin-bottom:48px;position:relative}
        .cta-actions{display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;position:relative}
        .btn-red{background:var(--red);color:#fff;padding:16px 48px;font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:background .15s;display:inline-block}.btn-red:hover{background:#aa0000}
        .cta-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;letter-spacing:.06em;color:#fff;transition:color .15s}.cta-phone:hover{color:var(--gold)}

        @media(max-width:900px){
          .page-hero{padding:120px 24px 72px}
          .stats-bar{flex-wrap:wrap}.stat-item{flex:1 1 50%;border-right:none;border-bottom:1px solid #1e1e1e}
          .story-grid{grid-template-columns:1fr;gap:48px}
          .values-grid{grid-template-columns:1fr 1fr}
          .section,.values-inner{padding:64px 24px}
          .clients-strip{padding:28px 24px}
          .cta-wrap{padding:72px 24px}
          .bts-section{padding:0 24px 56px}
          .bts-grid{grid-template-columns:1fr 1fr}
          .bts-cell.bts-wide{grid-column:span 2}
          .bts-cell{height:200px}
        }
        @media(max-width:600px){
          .values-grid{grid-template-columns:1fr}
          .bts-grid{grid-template-columns:1fr 1fr}
        }
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">ABOUT</div>
        <p className="hero-eyebrow">Media Bar Productions</p>
        <h1 className="hero-h1">About <em>Media Bar</em> Productions</h1>
        <p className="hero-sub">13 years. 3 Emmy Awards. 15 Telly Awards. Hundreds of videos for some of Texas's most recognized brands.</p>
      </section>

      <div className="stats-bar">
        {[
          { value: '13+', label: 'Years in Business' },
          { value: '3', label: 'Emmy Awards' },
          { value: '15', label: 'Telly Awards' },
          { value: '500+', label: 'Videos Produced' },
          { value: '2', label: 'Production Studios' },
        ].map((s) => (
          <div key={s.label} className="stat-item">
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--black)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <div className="story-grid">
            <div className="reveal">
              <p className="section-label">Our Story</p>
              <h2 className="section-h2">Built in San Antonio <em>For San Antonio</em></h2>
              <div className="pull-quote">"Your Vision Served Daily"</div>
              <p className="body-text">
                Media Bar Productions was founded in San Antonio in 2011 with a simple idea: that businesses in this city deserved the same quality of video production that brands in New York and Los Angeles were getting — without having to fly in a crew from either coast.
              </p>
              <p className="body-text">
                In the years since, we've grown into one of the most decorated production companies in South Texas, earning 3 Emmy Awards and 15 Telly Awards while working with everyone from the San Antonio Spurs to HEB to Unilever. Our client list has grown, our studio space has expanded, and our team has deepened — but the foundation hasn't changed.
              </p>
              <p className="body-text">
                We're still based here, still shooting here, and still betting on San Antonio. This city has given us more than we can repay, and the work we do every day is our way of paying it forward.
              </p>
              <div style={{ marginTop: '32px' }}>
                <Link href="/about/awards" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', borderBottom: '1px solid var(--red)', paddingBottom: '3px', transition: 'color .15s' }}>
                  View Our Awards →
                </Link>
              </div>
            </div>
            <div className="reveal">
              <div style={{ overflow: 'hidden', borderRadius: '4px', border: '1px solid #1e1e1e', height: '420px' }}>
                <img src="/images/bts-1.jpg" alt="Media Bar Productions behind the scenes" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bts-section">
        <div className="bts-grid reveal">
          <div className="bts-cell bts-wide"><img src="/images/bts-1.jpg" alt="" /></div>
          <div className="bts-cell"><img src="/images/bts-2.jpg" alt="" /></div>
          <div className="bts-cell"><img src="/images/bts-3.jpg" alt="" /></div>
          <div className="bts-cell bts-wide"><img src="/images/bts-4.jpg" alt="" /></div>
          <div className="bts-cell bts-wide"><img src="/images/bts-5.jpg" alt="" /></div>
          <div className="bts-cell"><img src="/images/bts-6.jpg" alt="" /></div>
          <div className="bts-cell"><img src="/images/bts-7.jpg" alt="" /></div>
          <div className="bts-cell bts-wide"><img src="/images/bts-8.jpg" alt="" /></div>
          <div className="bts-cell bts-wide"><img src="/images/bts-9.jpg" alt="" /></div>
          <div className="bts-cell"><img src="/images/bts-10.jpg" alt="" /></div>
        </div>
      </div>

      <div className="values-wrap">
        <div className="values-inner">
          <div className="values-header reveal">
            <p className="section-label" style={{ textAlign: 'center' }}>How We Operate</p>
            <h2 className="section-h2" style={{ textAlign: 'center', marginBottom: 0 }}>What We <em>Believe</em></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="value-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="clients-strip">
        <p className="clients-label">Trusted By</p>
        <div className="clients-row">
          {clients.map((name) => (
            <span key={name} className="client-name">{name}</span>
          ))}
        </div>
      </div>

      <section className="cta-wrap">
        <div className="cta-glow" aria-hidden="true" />
        <h2 className="cta-h2">Let's Make <em>Something Great</em></h2>
        <p className="cta-sub">Tell us about your project and we'll put together a custom proposal — fast.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Start a Project</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
