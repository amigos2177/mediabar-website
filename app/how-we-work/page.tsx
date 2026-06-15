'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const phases = [
  {
    num: '01',
    title: 'Pre-Production',
    desc: 'We plan everything before rolling camera — script, shot list, schedule, and locations. You review and approve the plan before a single frame is captured.',
  },
  {
    num: '02',
    title: 'Production',
    desc: 'Shoot day(s) run on a detailed call sheet. You\'re welcome on set. We capture everything the brief calls for, plus selects.',
  },
  {
    num: '03',
    title: 'Post-Production',
    desc: 'Editing, color, audio mix, motion graphics. You review a rough cut in your client portal before we lock the final version.',
  },
  {
    num: '04',
    title: 'Delivered',
    desc: 'Final files in every format your distribution plan requires — web, social, broadcast. Yours to keep, with no licensing restrictions.',
  },
]

const valueProps = [
  {
    title: 'Your timeline, always current',
    desc: 'You\'ll know what\'s happening, when, and what\'s next. No chasing emails for a status update — every milestone is visible from day one.',
    image: '/portal-timeline.jpg',
    alt: 'Screenshot of the Media Bar client portal showing a live project timeline with phase milestones',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Your files, in one place',
    desc: 'Scripts, shot lists, rough cuts, and finals — organized and accessible from kickoff through delivery. No digging through email threads.',
    image: '/portal-files.jpg',
    alt: 'Screenshot of the Media Bar client portal showing organized project files and deliverables',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Your feedback, captured',
    desc: 'Frame-accurate notes. Clear revision rounds. Every comment is logged so nothing gets lost between your team and ours.',
    image: '/portal-messages.jpg',
    alt: 'Screenshot of the Media Bar client portal showing a feedback thread on a rough cut',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'What does working with Media Bar look like from first contact to final delivery?',
    a: 'Step 1: You reach out via the contact form or a call — we respond within one business day. Step 2: We send a fully itemized quote. Step 3: You approve and put down a deposit. Step 4: Pre-production — scripting, planning, and scheduling, with your sign-off before anything is captured. Step 5: Production day(s). Step 6: You review a rough cut and leave notes. Step 7: We deliver final files in every format you need, and all footage belongs to you.',
  },
  {
    q: 'How will I know where my project stands at any given moment?',
    a: 'Every project runs through a private client space — you have access to the live timeline, uploaded assets, feedback threads, and delivery files at every phase. You don\'t need to email us for a status update; the current state of your project is visible to you whenever you want to look.',
  },
  {
    q: 'How many rounds of revisions are included?',
    a: 'Two rounds of revisions are included in every project. We find that two rounds is enough for most clients who are engaged during pre-production — which is why we invest in thorough planning and a rough-cut review before locking the edit. Additional revision rounds are available if your project requires them.',
  },
  {
    q: 'Can I be on set during production?',
    a: 'Yes, and we encourage it for any project where your team has creative input or on-brand knowledge we don\'t. You\'re always welcome on set. For larger productions we\'ll coordinate a walkthrough in pre-production so shoot day runs smoothly regardless of who\'s there.',
  },
]

export default function HowWeWorkPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            obs.unobserve(e.target)
          }
        })
      },
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
        @media(prefers-reduced-motion:reduce){.reveal{opacity:1!important;transform:none!important;transition:none!important}}

        /* ─── HERO ─── */
        .hww-hero{position:relative;background:var(--black);min-height:88vh;display:flex;align-items:center;justify-content:center;overflow:hidden;border-bottom:1px solid #1a1a1a;text-align:center}
        .hww-hero-video-wrap{position:absolute;inset:0;overflow:hidden;pointer-events:none}
        .hww-hero-video-wrap video{width:100%;height:100%;object-fit:cover;display:block}
        .hww-hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.82) 100%)}
        .hww-hero-bg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(80px,14vw,220px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hww-hero-content{position:relative;z-index:2;padding:160px 24px 100px;max-width:860px;margin:0 auto}
        .hww-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px}
        .hww-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(52px,8vw,96px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;margin-bottom:20px}
        .hww-h1 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;color:rgba(255,255,255,.55);text-transform:none}
        .hww-hero-sub{font-size:17px;line-height:1.7;color:rgba(255,255,255,.65);max-width:600px;margin:0 auto 40px}

        /* ─── SHARED ─── */
        .section-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
        .section-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,5vw,60px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:24px}
        .section-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:rgba(255,255,255,.6)}
        .body-text{font-size:15px;line-height:1.8;color:#B0B0B0;margin-bottom:20px}
        .btn-red{background:var(--red);color:#fff;padding:16px 44px;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;display:inline-block;transition:background .15s;border-radius:2px}.btn-red:hover{background:#aa0000}
        .btn-outline{border:1px solid rgba(255,255,255,.3);background:transparent;color:#fff;padding:16px 44px;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;display:inline-block;transition:border-color .15s,background .15s;border-radius:2px}.btn-outline:hover{border-color:#fff;background:rgba(255,255,255,.05)}

        /* ─── INTRO ─── */
        .intro-wrap{background:var(--dark);border-bottom:1px solid #1a1a1a}
        .intro-inner{max-width:800px;margin:0 auto;padding:88px 64px;text-align:center}

        /* ─── PHASES ─── */
        .phases-wrap{background:var(--black);border-bottom:1px solid #1a1a1a}
        .phases-inner{max-width:1200px;margin:0 auto;padding:96px 64px}
        .phases-header{text-align:center;margin-bottom:56px}
        .phases-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px}
        .phase-card{background:var(--dark2);border:1px solid #1e1e1e;padding:40px 28px;position:relative;overflow:hidden;transition:border-color .2s}
        .phase-card:hover{border-color:#333}
        .phase-card::after{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--red);transform:scaleY(0);transform-origin:top;transition:transform .25s ease}
        .phase-card:hover::after{transform:scaleY(1)}
        .phase-num{font-family:'Bebas Neue',Impact,sans-serif;font-size:56px;line-height:1;color:rgba(255,255,255,.07);margin-bottom:12px;letter-spacing:.03em}
        .phase-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:22px;letter-spacing:.05em;color:#fff;margin-bottom:12px}
        .phase-desc{font-size:13px;line-height:1.75;color:#888}

        /* ─── VALUE PROPS ─── */
        .vp-wrap{background:var(--dark);border-bottom:1px solid #1a1a1a}
        .vp-inner{max-width:1200px;margin:0 auto;padding:96px 64px}
        .vp-header{text-align:center;margin-bottom:64px}
        .vp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
        .vp-card{display:flex;flex-direction:column}
        .vp-text{padding:0 0 24px}
        .vp-icon{margin-bottom:16px}
        .vp-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:22px;letter-spacing:.05em;color:#fff;margin-bottom:10px}
        .vp-desc{font-size:13px;line-height:1.75;color:#B0B0B0}
        .vp-img-wrap{border:1px solid rgba(255,255,255,0.12);overflow:hidden;border-radius:12px;aspect-ratio:16/10;background:#1c1c1c;flex:1;box-shadow:0 4px 24px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.04)}
        .vp-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;border-radius:12px;transition:transform .4s ease}
        .vp-card:hover .vp-img-wrap img{transform:scale(1.03)}

        /* ─── PRICING TEXT ─── */
        .pricing-wrap{background:var(--dark2);border-bottom:1px solid #1a1a1a}
        .pricing-inner{max-width:800px;margin:0 auto;padding:88px 64px;text-align:center}

        /* ─── CREDIBILITY ─── */
        .cred-wrap{background:var(--black);border-bottom:1px solid #1a1a1a}
        .cred-inner{max-width:1000px;margin:0 auto;padding:96px 64px;text-align:center}
        .cred-stats{display:grid;grid-template-columns:repeat(4,1fr);margin-top:56px;border:1px solid #1e1e1e;overflow:hidden}
        .cred-stat{padding:40px 32px;text-align:center;border-right:1px solid #1e1e1e;background:var(--dark2)}
        .cred-stat:last-child{border-right:none}
        .cred-num{font-family:'Bebas Neue',Impact,sans-serif;font-size:52px;line-height:1;color:#fff;letter-spacing:.02em}
        .cred-label{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-top:6px}

        /* ─── FAQ ─── */
        .faq-wrap{background:var(--dark)}
        .faq-inner{max-width:860px;margin:0 auto;padding:96px 64px}
        .faq-header{text-align:center;margin-bottom:48px}
        .faq-list{display:flex;flex-direction:column;gap:2px}
        .faq-item{background:var(--dark2);border:1px solid #1e1e1e;overflow:hidden}
        .faq-question{width:100%;background:none;border:none;padding:22px 28px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;text-align:left;gap:16px;font-family:inherit}
        .faq-question-text{font-size:15px;font-weight:600;color:#ddd;letter-spacing:.01em}
        .faq-icon{font-size:20px;color:var(--red);flex-shrink:0;transition:transform .25s;font-style:normal;line-height:1}
        .faq-item.open .faq-icon{transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height .35s ease;padding:0 28px}
        .faq-answer p{font-size:14px;line-height:1.8;color:#C0C0C0;padding-bottom:24px}
        .faq-item.open .faq-answer{max-height:400px}

        /* ─── FINAL CTA ─── */
        .cta-wrap{background:var(--dark2);position:relative;overflow:hidden;text-align:center;padding:100px 64px}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(40px,6vw,80px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .cta-sub{font-size:16px;color:#B0B0B0;margin-bottom:48px;position:relative}
        .cta-actions{display:flex;justify-content:center;align-items:center;gap:24px;flex-wrap:wrap;position:relative}

        /* ─── RESPONSIVE ─── */
        @media(max-width:1024px){
          .phases-grid{grid-template-columns:repeat(2,1fr)}
          .vp-grid{grid-template-columns:1fr 1fr}
          .cred-stats{grid-template-columns:repeat(2,1fr)}
          .cred-stat:nth-child(2){border-right:none}
          .cred-stat:nth-child(1),.cred-stat:nth-child(2){border-bottom:1px solid #1e1e1e}
        }
        @media(max-width:900px){
          .hww-hero{min-height:70vh}
          .hww-hero-content{padding:120px 24px 72px}
          .intro-inner,.faq-inner,.pricing-inner,.cred-inner{padding:64px 24px}
          .phases-inner,.vp-inner{padding:64px 24px}
          .cta-wrap{padding:72px 24px}
        }
        @media(max-width:640px){
          .phases-grid{grid-template-columns:1fr}
          .vp-grid{grid-template-columns:1fr}
          .cred-stats{grid-template-columns:1fr}
          .cred-stat{border-right:none!important;border-bottom:1px solid #1e1e1e}
          .cred-stat:last-child{border-bottom:none}
          .cta-actions{flex-direction:column;gap:16px}
        }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section className="hww-hero">
        <div className="hww-hero-bg" aria-hidden="true">PROCESS</div>
        {/*
          Hero video — add an MP4 source here when the file is ready.
          The poster="/portal-demo-poster.jpg" shows as fallback until then.
        */}
        <div className="hww-hero-video-wrap">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/portal-demo-poster.jpg"
          >
            {/* <source src="/videos/how-we-work.mp4" type="video/mp4" /> */}
          </video>
        </div>
        <div className="hww-hero-overlay" />
        <div className="hww-hero-content">
          <p className="hww-eyebrow">The Media Bar Process</p>
          <h1 className="hww-h1">How We <em>Work</em></h1>
          <p className="hww-hero-sub">
            A clear four-phase process, a private client space, and a direct line to the people doing the work — from first call to final file.
          </p>
          <Link href="/contact" className="btn-red">Start a Project</Link>
        </div>
      </section>

      {/* ─── 2. INTRO ─── */}
      <div className="intro-wrap">
        <div className="intro-inner reveal">
          <p className="section-label">Our Philosophy</p>
          <h2 className="section-h2">The work is <em>transparent</em> from day one</h2>
          <p className="body-text">
            Most production companies treat post-production like a black box — you drop off a brief and wait weeks for something to appear. We don&rsquo;t work that way. Every project has a live timeline, a shared file space, and a direct feedback loop. You always know where your project stands, what comes next, and who to call.
          </p>
          <p className="body-text" style={{ marginBottom: 0 }}>
            That transparency isn&rsquo;t a feature we added. It&rsquo;s how we&rsquo;ve always run projects — because clients who can see the work in progress make better decisions and produce better videos.
          </p>
        </div>
      </div>

      {/* ─── 3. FOUR PHASES ─── */}
      <div className="phases-wrap">
        <div className="phases-inner">
          <div className="phases-header reveal">
            <p className="section-label">The Process</p>
            <h2 className="section-h2" style={{ marginBottom: 0 }}>Four phases. <em>Always visible.</em></h2>
          </div>
          <div className="phases-grid">
            {phases.map((phase, i) => (
              <div
                key={phase.num}
                className="phase-card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="phase-num" aria-hidden="true">{phase.num}</div>
                <h3 className="phase-title">{phase.title}</h3>
                <p className="phase-desc">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 4. VALUE PROPS ─── */}
      <div className="vp-wrap">
        <div className="vp-inner">
          <div className="vp-header reveal">
            <p className="section-label">The Client Space</p>
            <h2 className="section-h2" style={{ marginBottom: 0 }}>Everything in <em>one private space</em></h2>
          </div>
          <div className="vp-grid">
            {valueProps.map((vp, i) => (
              <div
                key={vp.title}
                className="vp-card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="vp-text">
                  <div className="vp-icon">{vp.icon}</div>
                  <h3 className="vp-title">{vp.title}</h3>
                  <p className="vp-desc">{vp.desc}</p>
                </div>
                {/*
                  Replace placeholder images with real portal screenshots.
                  Paths: /portal-timeline.jpg, /portal-files.jpg, /portal-messages.jpg
                */}
                <div className="vp-img-wrap">
                  <img src={vp.image} alt={vp.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 5. TRANSPARENT PRICING ─── */}
      <div className="pricing-wrap">
        <div className="pricing-inner reveal">
          <p className="section-label">Pricing</p>
          <h2 className="section-h2">Transparent pricing. <em>Transparent process.</em></h2>
          <p className="body-text">
            The same principles that govern how we run a project govern how we quote one. Every proposal is fully itemized — pre-production, crew, post-production, and deliverables are each their own line. You know exactly what you&rsquo;re paying for before you sign anything.
          </p>
          <p className="body-text" style={{ marginBottom: '36px' }}>
            We don&rsquo;t publish a rate sheet because projects aren&rsquo;t interchangeable. What we do have is a pricing page that explains every cost driver so you understand the quote we send — not just the number at the bottom.
          </p>
          <Link href="/pricing" className="btn-red">See What Drives Cost</Link>
        </div>
      </div>

      {/* ─── 6. CREDIBILITY ─── */}
      <div className="cred-wrap">
        <div className="cred-inner">
          <div className="reveal">
            <p className="section-label">Our Standard</p>
            <h2 className="section-h2">The standard we hold <em>for everyone</em></h2>
            <p className="body-text" style={{ maxWidth: '680px', margin: '0 auto' }}>
              We apply the same four-phase process to every project. A $5,000 testimonial video and a $50,000 brand campaign go through the same review checkpoints, the same communication standard, and the same delivery requirements. The budget changes what we can capture. It doesn&rsquo;t change how we work.
            </p>
          </div>
          <div className="cred-stats reveal">
            {[
              { value: '13+', label: 'Years in Business' },
              { value: '3', label: 'Emmy Awards' },
              { value: '15', label: 'Telly Awards' },
              { value: '500+', label: 'Videos Produced' },
            ].map((s) => (
              <div key={s.label} className="cred-stat">
                <p className="cred-num">{s.value}</p>
                <p className="cred-label">{s.label}</p>
              </div>
            ))}
          </div>
          {/*
            CLIENT LOGO STRIP — omitted pending logo usage rights confirmation.
            To restore: add a grid of client logos here matching the pattern in app/about/page.tsx
          */}
        </div>
      </div>

      {/* ─── 7. FAQ ─── */}
      <div className="faq-wrap">
        <div className="faq-inner">
          <div className="faq-header reveal">
            <p className="section-label">Common Questions</p>
            <h2 className="section-h2" style={{ marginBottom: 0 }}>Common <em>questions</em></h2>
          </div>
          <div className="faq-list reveal">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-item${openFaq === i ? ' open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="faq-question-text">{f.q}</span>
                  <em className="faq-icon" aria-hidden="true">+</em>
                </button>
                <div className="faq-answer" aria-hidden={openFaq !== i}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 8. FINAL CTA ─── */}
      <section className="cta-wrap">
        <div className="cta-glow" aria-hidden="true" />
        <h2 className="cta-h2">Ready to <em>Get Started?</em></h2>
        <p className="cta-sub">Tell us about your project and we&rsquo;ll put together a detailed proposal — fast.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Start a Project</Link>
          <Link href="/work" className="btn-outline">See Our Work</Link>
        </div>
      </section>
    </Layout>
  )
}
