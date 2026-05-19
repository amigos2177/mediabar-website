'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout'


const useCases = [
  { icon: '✏️', title: '2D Animation' },
  { icon: '🔵', title: 'Logo Animation' },
  { icon: '📖', title: 'Explainer Videos' },
  { icon: '📊', title: 'Animated Infographics' },
  { icon: '🎬', title: 'Title Sequences' },
  { icon: '📱', title: 'Social Motion Graphics' },
]

const processSteps = [
  { num: '01', title: 'Script & Storyboard', desc: 'We map the narrative and visual language before any animation begins.', bullets: ['Script development', 'Frame-by-frame storyboard', 'Style reference direction', 'Voice-over casting'] },
  { num: '02', title: 'Style Development', desc: 'Creating the visual language that will define your animation.', bullets: ['Style frame design', 'Color palette', 'Typography system', 'Character design (if applicable)'] },
  { num: '03', title: 'Animation', desc: 'Frame-by-frame animation with attention to timing and easing.', bullets: ['Motion design build', 'Client review checkpoint', 'Revisions & refinement', 'Sound effect timing'] },
  { num: '04', title: 'Sound & Delivery', desc: 'Final mix and delivery in every format you need.', bullets: ['Music bed', 'Sound effects', 'Voice-over integration', 'Multi-format export'] },
]

const whyCards = [
  { icon: '🎨', title: 'Motion + Live Action', desc: 'We combine motion graphics with live action production seamlessly — not just standalone animation, but integrated visual storytelling.' },
  { icon: '⚡', title: 'Fast Iteration', desc: 'We build in review checkpoints so you\'re never waiting until the end to see where the project is headed. Faster approvals, fewer surprises.' },
  { icon: '📐', title: 'Brand System Aware', desc: 'We work within your brand guidelines — or help you develop motion guidelines if you don\'t have them yet. Consistency across every animated asset.' },
  { icon: '🎯', title: 'Explainer Expertise', desc: 'Complex ideas made simple. We specialize in taking difficult concepts — technical products, processes, data — and making them visually intuitive.' },
  { icon: '📱', title: 'Social-First Options', desc: 'We design and deliver motion graphics optimized for every social format: square, vertical, 16:9. One motion project, every platform covered.' },
  { icon: '🏆', title: 'Award-Winning Creative', desc: 'Our motion work has appeared in Emmy Award-winning productions. The same creative standard applies to every animation project we take on.' },
]

const faqs = [
  { q: 'What software do you use for animation?', a: 'Our motion designers work primarily in Adobe After Effects for 2D animation, motion graphics, and compositing. For 3D work, we use Cinema 4D and Blender. For character animation, we work in Adobe Animate. The tool choice depends on the style and complexity of your project.' },
  { q: 'What file formats do you deliver?', a: 'We deliver final animation in H.264 MP4 for digital/web use, ProRes for broadcast and post-production integration, GIF for simple web loops, and WebM for web animation. We also retain all project files in case revisions are needed down the line.' },
  { q: 'Do you provide voice-over for explainer videos?', a: 'Yes. We work with a roster of professional voice-over artists and can cast the right voice for your brand — male, female, neutral, energetic, authoritative. We handle recording, editing, and integration with the animation. If you prefer to use your own voice talent, we can work with that too.' },
  { q: 'How many rounds of revisions are included?', a: 'Our standard animation packages include two rounds of revisions after each major milestone — storyboard approval, style frames, and the final animated cut. We\'ve found this covers the vast majority of projects comfortably. Additional revision rounds are available if needed.' },
  { q: 'Can you animate to an existing video or do you work standalone?', a: 'Both. We regularly add motion graphics layers to live action video — lower-thirds, data overlays, callouts, intro/outro sequences. We can work directly with your existing footage, or integrate motion work into a full production we\'re handling from scratch.' },
]

export default function MotionGraphicsPage() {
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
        .page-hero{position:relative;background:linear-gradient(to right,rgba(0,0,0,0.85),rgba(0,0,0,0.55)),url('/images/studio-2.jpg') center/cover no-repeat;padding:140px 64px 100px;overflow:hidden;border-bottom:1px solid #1a1a1a}
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(80px,13vw,200px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr auto;gap:64px;align-items:center}
        .breadcrumb{font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#444;margin-bottom:24px;display:flex;align-items:center;gap:8px}
        .breadcrumb a{color:#B0B0B0;transition:color .15s}.breadcrumb a:hover{color:#fff}.breadcrumb span{color:#2a2a2a}
        .eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px}
        .page-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(48px,6.5vw,84px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;margin-bottom:8px}
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
        .portfolio-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px}
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
        .process-list li::before{content:'—';position:absolute;left:0;color:var(--red);font-size:10px}
        .why-wrap{background:var(--black)}.why-inner{max-width:1200px;margin:0 auto;padding:96px 64px;display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:start}
        .why-sticky{position:sticky;top:96px}
        .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px}
        .why-card{background:var(--dark2);border:1px solid #1e1e1e;padding:32px 28px;transition:border-color .2s}.why-card:hover{border-color:#333}
        .why-card-icon{font-size:28px;margin-bottom:14px}
        .why-card-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.05em;color:#fff;margin-bottom:10px}
        .why-card-desc{font-size:13px;line-height:1.7;color:#B0B0B0}
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
          .intro-grid{grid-template-columns:1fr;gap:48px}.portfolio-grid{grid-template-columns:1fr}
          .process-grid{grid-template-columns:1fr 1fr}.why-inner{grid-template-columns:1fr}.why-sticky{position:static}
          .why-grid{grid-template-columns:1fr}.section{padding:64px 24px}
          .process-inner,.why-inner,.faq-inner{padding:64px 24px}.cta-wrap{padding:72px 24px}.page-hero{padding:120px 24px 72px}
        }
        @media(max-width:600px){.process-grid{grid-template-columns:1fr}}
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">MOTION</div>
        <div className="hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/video-production">Services</Link><span>/</span>
              <span style={{ color: '#AAAAAA' }}>Motion Graphics</span>
            </nav>
            <p className="eyebrow">Motion Graphics &amp; Animation</p>
            <h1 className="page-h1"><em>Motion Graphics</em>&amp; Animation</h1>
            <p className="hero-sub">Bringing brands and ideas to life in motion — from animated explainers and logo reveals to full broadcast title sequences and social content.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-red">Get a Free Quote</Link>
              <Link href="#portfolio" className="btn-ghost">See Our Work</Link>
            </div>
          </div>
          <div className="stat-card reveal">
            <div className="stat-item"><p className="stat-value">2D</p><p className="stat-label">2D &amp; 3D Animation</p></div>
            <div className="stat-item"><p className="stat-value">✓</p><p className="stat-label">Brand System Aware</p></div>
            <div className="stat-item"><p className="stat-value">All</p><p className="stat-label">Platforms Covered</p></div>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--dark)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="section">
          <div className="intro-grid">
            <div className="reveal">
              <p className="section-label">What We Do</p>
              <h2 className="section-h2">Ideas That <em>Move</em></h2>
              <p className="body-text">Motion graphics do something that static design and live video can't: they make abstract ideas concrete, they control the viewer's eye, and they create a kinetic energy that keeps audiences engaged. When a product is too complex to film, or a concept is too abstract to see, animation is the answer.</p>
              <p className="body-text">We design and animate for every context — broadcast commercials, digital explainers, social content, UI demos, data visualization, and broadcast title packages. Everything built to your brand and delivered in every format you need.</p>
            </div>
            <div className="reveal">
              <p className="section-label">What We Produce</p>
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
              <h2 className="section-h2" style={{ marginBottom: 0 }}>Motion Graphics <em>Portfolio</em></h2>
            </div>
            <Link href="/work" className="link-arrow">View All Work →</Link>
          </div>
          <div className="portfolio-grid reveal">
            {[
              { id: '1180540640', label: 'Motion Graphics' },
              { id: '849834914', label: 'Motion Graphics' },
              { id: '557693922', label: 'Motion Graphics' },
              { id: '803316101', label: 'Motion Graphics' },
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
            <h2 className="section-h2">Why Clients Choose <em>Us</em> For Motion</h2>
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
        <h2 className="cta-h2">Ready To <em>Get Moving?</em></h2>
        <p className="cta-sub">Tell us about your animation project and we'll put together a custom proposal.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red" style={{ padding: '16px 48px', fontSize: '13px' }}>Start Your Project</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
