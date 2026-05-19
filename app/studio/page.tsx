'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const features = [
  { icon: '💡', title: 'Full Lighting Grid', desc: 'Ceiling-mounted DMX lighting grid with LED fixtures. Any look, any intensity — fully controllable from the control room.' },
  { icon: '🎙️', title: 'Acoustic Treatment', desc: 'Professionally treated walls and ceiling for clean on-set audio. No room echo, no HVAC bleed.' },
  { icon: '🎥', title: '4K Production Ready', desc: 'All studio infrastructure is designed for 4K capture. Power, rigging points, and cable runs are all optimized for cinema cameras.' },
  { icon: '🖥️', title: 'Full Control Room', desc: 'Glass-window control room with production switcher, multi-monitor setup, and direct visual sight line to both stages.' },
  { icon: '🚗', title: 'Drive-In Access', desc: 'Large roll-up door allows vehicles and large set pieces to be brought directly into the studio space.' },
  { icon: '💄', title: 'Hair & Makeup Station', desc: 'On-site hair and makeup station keeps talent looking their best without leaving the building between setups.' },
]

const faqs = [
  { q: 'How do I book the studio?', a: 'Studio bookings are handled through our production team. Call us at 210-279-9442 or use the contact form to request a date. We\'ll confirm availability and send a studio rental agreement. Full-day and half-day rates are available.' },
  { q: 'What backdrops and backgrounds are available?', a: 'Our primary stage features a seamless cyclorama (cyc) wall that can be lit any color. We also have a collection of fabric backdrops in white, black, grey, and a selection of printed/textured options. Custom set builds are available for productions with specific background requirements.' },
  { q: 'Can I rent the studio for photography as well as video?', a: 'Yes. Our studio is fully equipped for stills photography as well as video production. We have lighting equipment that works for both disciplines and the cyc wall is particularly popular for product and portrait photography.' },
  { q: 'Where is the studio located?', a: 'We\'re located at 8610 N New Braunfels Ave, Suite 704, San Antonio, TX 78217 — just off Loop 410 on the north side. There\'s ample parking and we have a loading dock for production equipment.' },
  { q: 'Do you provide hair and makeup services?', a: 'We have an on-site hair and makeup station. We can refer you to trusted local MUA and hair stylists who work regularly in our space, or you\'re welcome to bring your own. The station is equipped with a large mirror, proper lighting, and dedicated power for styling tools.' },
]

export default function StudioPage() {
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

        .studio-hero{position:relative;height:100vh;min-height:560px;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;background:var(--dark2)}
        .studio-hero-bg{position:absolute;inset:0;background:url('/images/studio-7.jpg') center/cover no-repeat;opacity:.4}
        .studio-hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.4) 0%,rgba(0,0,0,.7) 100%)}
        .studio-hero-content{position:relative;z-index:2;padding:0 24px}
        .hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px}
        .studio-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(56px,9vw,110px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;margin-bottom:24px}
        .studio-h1 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;color:rgba(255,255,255,.6);text-transform:none;display:block;font-size:.6em;margin-bottom:8px}
        .studio-sub{font-size:17px;line-height:1.7;color:rgba(255,255,255,.7);max-width:560px;margin:0 auto 36px}
        .btn-red{background:var(--red);color:#fff;padding:14px 36px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:background .15s;display:inline-block}.btn-red:hover{background:#aa0000}

        .facts-strip{background:var(--dark);border-bottom:1px solid #1e1e1e;display:flex;justify-content:center;flex-wrap:wrap}
        .fact-item{padding:28px 52px;text-align:center;border-right:1px solid #1e1e1e}
        .fact-item:last-child{border-right:none}
        .fact-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;line-height:1;color:var(--gold);letter-spacing:.03em}
        .fact-label{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#AAAAAA;margin-top:4px}

        .section{padding:96px 64px;max-width:1200px;margin:0 auto}
        .section-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
        .section-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,5vw,60px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:40px;text-align:center}
        .section-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:rgba(255,255,255,.6)}
        .body-text{font-size:15px;line-height:1.8;color:#B0B0B0;margin-bottom:20px}

        .spaces-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
        .space-card{background:var(--dark2);border:1px solid #1e1e1e;overflow:hidden;transition:border-color .2s}.space-card:hover{border-color:#333}
        .space-img{height:200px;background:var(--dark);border-bottom:1px solid #1e1e1e;display:flex;align-items:center;justify-content:center;font-size:48px}
        .space-content{padding:32px 28px}
        .space-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:24px;letter-spacing:.05em;color:#fff;margin-bottom:12px}
        .space-desc{font-size:13px;line-height:1.75;color:#B0B0B0;margin-bottom:16px}
        .space-tags{display:flex;flex-wrap:wrap;gap:6px}
        .space-tag{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#AAAAAA;border:1px solid #2a2a2a;padding:4px 10px}

        .studio-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}
        .gallery-cell{overflow:hidden;border-radius:4px;border:1px solid #1e1e1e;height:260px}
        .gallery-cell.gallery-wide{grid-column:span 2}
        .gallery-cell img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}
        .gallery-cell:hover img{transform:scale(1.03)}

        .features-wrap{background:var(--dark)}
        .features-inner{max-width:1200px;margin:0 auto;padding:96px 64px}
        .features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
        .feature-card{background:var(--dark2);border:1px solid #1e1e1e;padding:32px 28px;transition:border-color .2s}.feature-card:hover{border-color:#333}
        .feature-icon{font-size:28px;margin-bottom:14px}
        .feature-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.05em;color:#fff;margin-bottom:10px}
        .feature-desc{font-size:13px;line-height:1.7;color:#B0B0B0}

        .faq-wrap{background:var(--black)}.faq-inner{max-width:800px;margin:0 auto;padding:96px 64px}
        .faq-header{text-align:center;margin-bottom:56px}
        .faq-list{display:flex;flex-direction:column;gap:2px}
        .faq-item{background:var(--dark2);border:1px solid #1e1e1e;overflow:hidden}
        .faq-question{width:100%;background:none;border:none;padding:24px 28px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;text-align:left;gap:16px}
        .faq-question-text{font-size:15px;font-weight:600;color:#ddd;letter-spacing:.01em}
        .faq-icon{font-size:20px;color:var(--red);flex-shrink:0;transition:transform .25s;font-style:normal}
        .faq-item.open .faq-icon{transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height .35s ease;padding:0 28px}
        .faq-answer p{font-size:14px;line-height:1.8;color:#C0C0C0;padding-bottom:24px}
        .faq-item.open .faq-answer{max-height:300px}

        .cta-wrap{background:var(--dark2);position:relative;overflow:hidden;text-align:center;padding:100px 64px}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(48px,7vw,88px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .cta-sub{font-size:16px;color:#B0B0B0;margin-bottom:48px;position:relative}
        .cta-actions{display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;position:relative}
        .cta-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;letter-spacing:.06em;color:#fff;transition:color .15s}.cta-phone:hover{color:var(--gold)}

        @media(max-width:900px){
          .facts-strip{flex-wrap:wrap}.fact-item{flex:1 1 50%;border-right:none;border-bottom:1px solid #1e1e1e}
          .spaces-grid{grid-template-columns:1fr}.features-grid{grid-template-columns:1fr 1fr}
          .section,.features-inner,.faq-inner{padding:64px 24px}.cta-wrap{padding:72px 24px}
          .studio-gallery{grid-template-columns:1fr 1fr}
          .gallery-cell{height:200px}
        }
        @media(max-width:600px){
          .features-grid{grid-template-columns:1fr}
          .studio-gallery{grid-template-columns:1fr}
          .gallery-cell{height:220px}
          .gallery-cell.gallery-wide{grid-column:span 1}
        }
      `}</style>

      <section className="studio-hero">
        <div className="studio-hero-bg" />
        <div className="studio-hero-overlay" />
        <div className="studio-hero-content">
          <p className="hero-eyebrow">San Antonio Production Facility</p>
          <h1 className="studio-h1">
            <em>Production</em>
            Studio Space
          </h1>
          <p className="studio-sub">Two fully equipped production stages in San Antonio — available for your project or ours.</p>
          <Link href="/contact" className="btn-red">Book Studio Time</Link>
        </div>
      </section>

      <div className="facts-strip">
        {[
          { value: '2', label: 'Production Stages' },
          { value: 'Cyc', label: 'Cyclorama Wall' },
          { value: '4K', label: 'Production Ready' },
          { value: '✓', label: 'Full Control Room' },
        ].map((f) => (
          <div key={f.label} className="fact-item">
            <p className="fact-value">{f.value}</p>
            <p className="fact-label">{f.label}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--black)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <p className="section-label" style={{ textAlign: 'center' }}>The Facility</p>
          <h2 className="section-h2">Our <em>Spaces</em></h2>
          <div className="spaces-grid reveal">
            {[
              {
                icon: '🎬',
                title: 'Production Studio',
                desc: 'Our primary stage features a seamless cyclorama wall that can be lit any color, a ceiling-mounted DMX lighting grid, and full acoustic treatment. Ideal for interviews, commercials, product shots, and scripted productions.',
                tags: ['Cyc Wall', 'DMX Grid', 'Acoustic Treatment', 'Drive-In Access'],
              },
              {
                icon: '🖥️',
                title: 'Control Room',
                desc: 'Glass-window control room with direct sight line to both stages. Production switcher, multi-monitor setup, and audio monitoring for live switching, multicam productions, and live streaming.',
                tags: ['Production Switcher', 'Multi-Monitor', 'Glass Window', 'Live Stream Ready'],
              },
              {
                icon: '🛋️',
                title: 'Interview Lounge',
                desc: 'A dedicated interview setup with a warm, furnished aesthetic. Perfect for executive interviews, testimonials, and podcast-style shoots where you want a natural, comfortable environment rather than a clean cyc look.',
                tags: ['Furnished Set', 'Warm Aesthetic', 'Interview Ready', '2-Camera Setup'],
              },
            ].map((space) => (
              <div key={space.title} className="space-card">
                <div className="space-img">{space.icon}</div>
                <div className="space-content">
                  <h3 className="space-title">{space.title}</h3>
                  <p className="space-desc">{space.desc}</p>
                  <div className="space-tags">
                    {space.tags.map((t) => <span key={t} className="space-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--dark2)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <p className="section-label" style={{ textAlign: 'center' }}>Studio Gallery</p>
          <h2 className="section-h2">Inside the <em>Studio</em></h2>
          <div className="studio-gallery reveal">
            <div className="gallery-cell gallery-wide"><img src="/images/studio-1.jpg" alt="" loading="lazy" /></div>
            <div className="gallery-cell"><img src="/images/studio-2.jpg" alt="" loading="lazy" /></div>
            <div className="gallery-cell"><img src="/images/studio-3.jpg" alt="" loading="lazy" /></div>
            <div className="gallery-cell gallery-wide"><img src="/images/studio-4.jpg" alt="" loading="lazy" /></div>
            <div className="gallery-cell gallery-wide"><img src="/images/studio-5.jpg" alt="" loading="lazy" /></div>
            <div className="gallery-cell"><img src="/images/studio-6.jpg" alt="" loading="lazy" /></div>
            <div className="gallery-cell"><img src="/images/studio-8.jpg" alt="" loading="lazy" /></div>
            <div className="gallery-cell gallery-wide"><img src="/images/studio-9.jpg" alt="" loading="lazy" /></div>
          </div>
        </div>
      </div>

      <div className="features-wrap">
        <div className="features-inner">
          <p className="section-label" style={{ textAlign: 'center' }}>What's Included</p>
          <h2 className="section-h2">Studio <em>Features</em></h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={f.title} className="feature-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="faq-wrap">
        <div className="faq-inner">
          <div className="faq-header reveal">
            <p className="section-label" style={{ textAlign: 'center' }}>FAQ</p>
            <h2 className="section-h2">Common <em>Questions</em></h2>
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
        <h2 className="cta-h2">Book Your <em>Studio Date</em></h2>
        <p className="cta-sub">Check availability and get a studio rental quote — we'll get back to you within one business day.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Check Availability</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
