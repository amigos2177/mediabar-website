'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const categories = [
  'All',
  'Pricing',
  'Process & Timeline',
  'Ownership & Delivery',
  'Services',
  'Logistics',
  'Studio',
  'Why Media Bar',
]

const faqs = [
  {
    category: 'Pricing',
    q: 'How much does a video cost?',
    a: 'It depends on the scope — but we give you a fully itemized quote so there are no surprises. A basic testimonial or interview video starts around $1,500–$3,000. A polished commercial or brand film typically runs $5,000–$25,000+. We\'ll ask the right questions and give you a real number fast.',
  },
  {
    category: 'Pricing',
    q: 'Do you charge hourly or by project?',
    a: 'Almost always by project. We scope out exactly what\'s needed — crew, gear, studio time, edit passes, graphics, music licensing — and give you a fixed price. That way you know what you\'re paying for before anything starts, and there are no hourly overruns.',
  },
  {
    category: 'Pricing',
    q: 'What\'s included in a quote?',
    a: 'Every line item: pre-production (scripting, storyboarding, shot list), production (crew, equipment, studio or location), and post-production (editing, color, audio mix, graphics, revisions). Music licensing is included when applicable. You won\'t get a vague lump sum.',
  },
  {
    category: 'Pricing',
    q: 'Do you require a deposit?',
    a: 'Yes — we typically require a 50% deposit to hold your production date, with the balance due upon delivery of the final files. For larger projects we can structure milestone payments. We\'ll outline the payment schedule in your contract.',
  },
  {
    category: 'Process & Timeline',
    q: 'How long does the production process take?',
    a: 'From kickoff to final delivery, most projects take 2–4 weeks. Rush turnarounds are available — we\'ve delivered same-day edits for live events and 48-hour cuts for time-sensitive campaigns. Timeline depends on complexity, revision rounds, and your approval speed.',
  },
  {
    category: 'Process & Timeline',
    q: 'What does the process look like from first contact to final video?',
    a: 'Step 1: Discovery call or form — you tell us what you need. Step 2: We send a detailed quote within 1 business day. Step 3: You approve and put down a deposit. Step 4: Pre-production — scripting, planning, location scouting. Step 5: Production day(s). Step 6: Edit and review — typically 2 rounds of revisions. Step 7: Final delivery in your preferred format.',
  },
  {
    category: 'Process & Timeline',
    q: 'How many revision rounds are included?',
    a: 'Two rounds of revisions are included in every project. Additional revision rounds can be added. We find that two rounds is enough for most clients who are engaged in the process — which is why we include a thorough review at the rough cut stage.',
  },
  {
    category: 'Process & Timeline',
    q: 'Can you work with our existing agency or marketing team?',
    a: 'Absolutely. We\'ve served as the production arm for agencies, in-house marketing departments, and brand teams. We can take direction from a creative brief or collaborate on concept development — whatever role you need us to fill.',
  },
  {
    category: 'Ownership & Delivery',
    q: 'Who owns the footage after production?',
    a: 'You do. All footage and final files are yours. We don\'t license it back to you, hold raw footage hostage, or restrict your use of anything we shoot for you. You\'ll receive the final deliverables and, upon request, the raw footage archive.',
  },
  {
    category: 'Ownership & Delivery',
    q: 'What file formats do you deliver in?',
    a: 'Standard delivery is H.264 MP4 at broadcast quality — ready for web, social, and presentation. We can also deliver ProRes for broadcast masters, compressed social cuts (vertical/square for Reels/TikTok/Stories), and DCP for cinema if needed. Just tell us where it\'s going.',
  },
  {
    category: 'Ownership & Delivery',
    q: 'Do you keep backups of our footage?',
    a: 'We maintain project files and delivered assets for 90 days after final delivery. After that, storage is the client\'s responsibility. We strongly recommend downloading and archiving all deliverables and raw footage immediately upon receipt.',
  },
  {
    category: 'Services',
    q: 'What types of video do you produce?',
    a: 'Corporate video, TV commercials, event coverage, interviews and documentaries, medical video, aerial/drone, motion graphics and animation, live streaming, post-production and editing, food video, and real estate video. If it involves a camera and a story, we can probably help.',
  },
  {
    category: 'Services',
    q: 'Do you do photography as well?',
    a: 'Yes — our studio is equipped for stills photography as well as video. We handle product photography, corporate headshots, event photography, and architectural/real estate photography. Ask about our combined photo+video packages.',
  },
  {
    category: 'Services',
    q: 'Can you write the script for us?',
    a: 'Yes. Scriptwriting and creative development are available as part of our full-service offering. We\'ll do a discovery session to understand your goals, audience, and message, then develop a script and/or storyboard for your review before anything goes on camera.',
  },
  {
    category: 'Services',
    q: 'Do you handle casting and talent?',
    a: 'We can source local talent through our established network of actors and on-screen talent in San Antonio. We also work with talent agencies and can source from outside the market for specific requirements. Talent fees are itemized separately in your quote.',
  },
  {
    category: 'Logistics',
    q: 'Do you travel outside San Antonio?',
    a: 'Yes. We travel throughout Texas regularly — Austin, Houston, Dallas, and beyond. We\'ve also traveled nationally and internationally for larger productions. Travel costs (flights, hotel, per diem) are itemized in the quote. For local South Texas work, there\'s typically no travel fee.',
  },
  {
    category: 'Logistics',
    q: 'Where are you located?',
    a: 'Our studio is at 8610 N New Braunfels Ave, Suite 704, San Antonio, TX 78217 — just off Loop 410 on the north side of San Antonio. We have ample parking, a loading dock, and easy freeway access.',
  },
  {
    category: 'Logistics',
    q: 'Do you shoot on location or only in the studio?',
    a: 'Both. Many of our projects are shot on location — at client facilities, retail environments, outdoor venues, and events. Our studio is available for productions that need a controlled environment. We can also combine location and studio shooting in the same project.',
  },
  {
    category: 'Studio',
    q: 'How do I book the studio?',
    a: 'Studio bookings are handled through our production team. Call us at 210-279-9442 or use the contact form to request a date. We\'ll confirm availability and send a studio rental agreement. Full-day and half-day rates are available.',
  },
  {
    category: 'Studio',
    q: 'What\'s included in a studio rental?',
    a: 'Studio rental includes access to the main production stage with the cyc wall, the DMX lighting grid, the control room, the hair and makeup station, and on-site parking. Production equipment (cameras, lenses, audio) is available as an add-on. A Media Bar crew member is available for technical support.',
  },
  {
    category: 'Studio',
    q: 'Can I rent the studio without hiring your crew?',
    a: 'Yes — we offer dry studio rental for productions that bring their own crew and equipment. We do require a walkthrough before the rental date to ensure all parties understand the facility and equipment. A studio deposit and signed rental agreement are required.',
  },
  {
    category: 'Why Media Bar',
    q: 'Why choose Media Bar over a freelancer?',
    a: 'A freelancer gives you one person. We give you a full team — director, DP, audio engineer, editor, colorist, motion graphics artist — with 13 years of process behind us. That means fewer surprises, higher production value, and someone to call if anything goes sideways.',
  },
  {
    category: 'Why Media Bar',
    q: 'What makes Media Bar different from other production companies?',
    a: 'Three Emmys and fifteen Telly Awards for a reason — we hold our work to broadcast standards regardless of budget. We own our facility, which keeps costs down and quality consistent. We\'ve been in San Antonio for 13 years and we\'re invested in this city\'s businesses in a way that a fly-in crew never will be.',
  },
  {
    category: 'Why Media Bar',
    q: 'Have you worked with brands like ours before?',
    a: 'Our client roster spans Fortune 500 brands (Unilever, Baker Hughes, Carrier), regional institutions (Frost Bank, HEB), sports organizations (San Antonio Spurs), and local San Antonio businesses. We adjust our process and approach to fit your world, not the other way around.',
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }) },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const items = document.querySelectorAll('.faq-item')
    const handlers: { el: Element; fn: EventListener }[] = []
    items.forEach((item) => {
      const btn = item.querySelector('.faq-question')
      if (!btn) return
      const fn: EventListener = () => {
        const open = item.classList.contains('open')
        items.forEach((f) => f.classList.remove('open'))
        if (!open) item.classList.add('open')
      }
      btn.addEventListener('click', fn)
      handlers.push({ el: btn, fn })
    })
    return () => handlers.forEach(({ el, fn }) => el.removeEventListener('click', fn))
  }, [activeCategory])

  const filtered = activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory)

  const grouped: Record<string, typeof faqs> = {}
  filtered.forEach((f) => {
    if (!grouped[f.category]) grouped[f.category] = []
    grouped[f.category].push(f)
  })

  return (
    <Layout>
      <style>{`
        :root{--red:#CC0000;--gold:#C9A84C;--black:#0A0A0A;--dark:#111111;--dark2:#181818}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease}.reveal.revealed{opacity:1;transform:none}

        .page-hero{position:relative;background:var(--black);padding:160px 64px 100px;overflow:hidden;border-bottom:1px solid #1a1a1a;text-align:center}
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(100px,16vw,240px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;position:relative}
        .hero-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(56px,8vw,100px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;margin-bottom:20px}
        .hero-h1 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;color:rgba(255,255,255,.55);text-transform:none}
        .hero-sub{font-size:17px;line-height:1.7;color:#C0C0C0;max-width:560px;margin:0 auto;position:relative}

        .filter-bar-wrap{position:relative}
        .filter-bar-wrap::after{content:'';position:absolute;right:0;top:0;bottom:0;width:40px;background:linear-gradient(to right,transparent,rgba(0,0,0,0.95));pointer-events:none;display:none}
        .filter-bar{background:var(--dark);border-bottom:1px solid #1e1e1e;padding:0 64px;display:flex;align-items:center;gap:4px;overflow-x:auto;scrollbar-width:none}
        .filter-bar::-webkit-scrollbar{display:none}
        .filter-pill{background:none;border:none;padding:20px 20px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#AAAAAA;cursor:pointer;white-space:nowrap;border-bottom:2px solid transparent;transition:color .15s,border-color .15s;font-family:inherit}
        .filter-pill:hover{color:#aaa}
        .filter-pill.active{color:#fff;border-bottom-color:var(--red)}

        .faq-wrap{background:var(--black)}
        .faq-inner{max-width:860px;margin:0 auto;padding:80px 64px}

        .faq-group{margin-bottom:56px}
        .faq-group-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px}
        .faq-list{display:flex;flex-direction:column;gap:2px}
        .faq-item{background:var(--dark2);border:1px solid #1e1e1e;overflow:hidden}
        .faq-question{width:100%;background:none;border:none;padding:22px 28px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;text-align:left;gap:16px;font-family:inherit}
        .faq-question-text{font-size:15px;font-weight:600;color:#ddd;letter-spacing:.01em}
        .faq-icon{font-size:20px;color:var(--red);flex-shrink:0;transition:transform .25s;font-style:normal}
        .faq-item.open .faq-icon{transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height .35s ease;padding:0 28px}
        .faq-answer p{font-size:14px;line-height:1.8;color:#C0C0C0;padding-bottom:24px}
        .faq-item.open .faq-answer{max-height:300px}

        .cta-wrap{background:var(--dark2);position:relative;overflow:hidden;text-align:center;padding:100px 64px}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(40px,6vw,72px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .cta-sub{font-size:16px;color:#B0B0B0;margin-bottom:40px;position:relative}
        .cta-actions{display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;position:relative}
        .btn-red{background:var(--red);color:#fff;padding:16px 48px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:background .15s;display:inline-block}.btn-red:hover{background:#aa0000}
        .cta-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;letter-spacing:.06em;color:#fff;transition:color .15s}.cta-phone:hover{color:var(--gold)}

        @media(max-width:900px){
          .page-hero{padding:120px 24px 72px}
          .filter-bar{padding:0 16px}
          .faq-inner{padding:56px 24px}
          .cta-wrap{padding:72px 24px}
        }
        @media(max-width:768px){
          .filter-bar-wrap::after{display:block}
        }
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">FAQ</div>
        <p className="hero-eyebrow">Common Questions</p>
        <h1 className="hero-h1">Your Questions <em>Answered</em></h1>
        <p className="hero-sub">Everything you need to know about working with Media Bar Productions — pricing, process, ownership, and more.</p>
      </section>

      <div className="filter-bar-wrap">
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="faq-wrap">
        <div className="faq-inner">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="faq-group reveal">
              {activeCategory === 'All' && <p className="faq-group-label">{category}</p>}
              <div className="faq-list">
                {items.map((f) => (
                  <div key={f.q} className="faq-item">
                    <button className="faq-question">
                      <span className="faq-question-text">{f.q}</span>
                      <em className="faq-icon">+</em>
                    </button>
                    <div className="faq-answer"><p>{f.a}</p></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="cta-wrap">
        <div className="cta-glow" aria-hidden="true" />
        <h2 className="cta-h2">Still Have a <em>Question?</em></h2>
        <p className="cta-sub">Send us a message or give us a call — we respond within one business day.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Contact Us</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
