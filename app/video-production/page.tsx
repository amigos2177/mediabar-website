import Link from 'next/link'
import Layout from '../../components/Layout'

export const metadata = {
  title: 'Video Production Services San Antonio | Media Bar Productions',
  description: 'Full-service video production in San Antonio. Corporate, commercial, events, medical, aerial, motion graphics, live streaming & more. 3 Emmy Awards. Get a quote.',
}

const services = [
  {
    num: '01',
    title: 'Corporate Video',
    href: '/video-production/corporate',
    vimeoId: '1193317757',
    description: 'From executive communications and internal training to brand films and investor presentations, we create corporate video that moves people and drives results. We work closely with your team to make the message land — on time and on brand.',
    tags: ['Brand Films', 'Training & HR', 'Executive Messaging', 'Annual Reports'],
  },
  {
    num: '02',
    title: 'Commercials',
    href: '/video-production/commercials',
    vimeoId: '1126506220',
    description: 'Broadcast-quality commercials for TV, OTT, and digital platforms. We handle concept development, scripting, casting, production, and post — delivering spots that cut through and convert.',
    tags: ['TV Spots', 'Digital / Pre-Roll', 'OTT & Streaming', 'Brand Campaigns'],
  },
  {
    num: '03',
    title: 'Event Coverage',
    href: '/video-production/events',
    vimeoId: '946447253',
    description: 'Multi-camera event coverage for conferences, galas, product launches, and live performances. We capture the energy of the room and deliver polished highlight reels and full-length recordings that live on long after the event.',
    tags: ['Conferences', 'Galas & Charity Events', 'Highlight Reels', 'Multi-Camera'],
  },
  {
    num: '04',
    title: 'Interview & Discussion',
    href: '/video-production/interview',
    vimeoId: '1180537582',
    description: 'Thought leadership interviews, testimonial series, documentary-style profiles, and panel discussions. We create the right environment for authentic, on-camera conversation and deliver footage that tells a compelling story.',
    tags: ['Testimonials', 'Thought Leadership', 'Documentary Profiles', 'Podcast Video'],
  },
  {
    num: '05',
    title: 'Medical Video',
    href: '/video-production/medical',
    vimeoId: '1180540550',
    description: 'Specialized production for healthcare systems, medical device companies, pharmaceutical brands, and research institutions. We understand compliance requirements and produce with the precision and sensitivity the subject demands.',
    tags: ['Patient Stories', 'Medical Device', 'Pharma & Research', 'CME Content'],
  },
  {
    num: '06',
    title: 'Aerial Video',
    href: '/video-production/aerial',
    vimeoId: '1180537228',
    description: 'FAA-licensed drone operators delivering cinematic aerial footage across Texas. We integrate aerial seamlessly into ground-level productions or execute standalone drone shoots for real estate, construction, events, and more.',
    tags: ['FAA Licensed', 'Real Estate Aerials', 'Event Aerials', 'Cinematic Drone'],
  },
  {
    num: '07',
    title: 'Motion Graphics',
    href: '/video-production/motion-graphics',
    vimeoId: '1180540640',
    description: 'Animated explainers, title sequences, lower-thirds, logo animations, and data visualization. Our motion designers bring your brand to life in motion — for broadcast, digital, or social.',
    tags: ['Animated Explainers', 'Logo Animation', 'Data Visualization', 'Title Sequences'],
  },
  {
    num: '08',
    title: 'Live Streaming',
    href: '/video-production/live-streaming',
    vimeoId: '1056209144',
    description: 'Professional multi-camera live streaming and webcasting for hybrid events, town halls, product launches, and worship services. We handle encoding, graphics, switching, and delivery to any platform.',
    tags: ['Hybrid Events', 'Town Halls', 'Multi-Platform', 'Graphics & Switching'],
  },
  {
    num: '09',
    title: 'Post Production',
    href: '/video-production/post-production',
    vimeoId: '1180526566',
    description: 'Full post-production services including editorial, color grading, audio mixing, VFX, and delivery. We work with your existing footage or handle the complete pipeline from acquisition to final deliverable.',
    tags: ['Editorial', 'Color Grading', 'Audio Mix & Mastering', 'VFX & Compositing'],
  },
  {
    num: '10',
    title: 'Food Video',
    href: '/video-production/food',
    vimeoId: '697231773',
    description: 'Appetite-driving food and beverage video for restaurants, CPG brands, and hospitality groups. Our culinary production team understands food styling, hero shots, and the visual language that makes viewers hungry.',
    tags: ['Restaurant Campaigns', 'CPG & Packaging', 'Recipe Content', 'Hero Product Shots'],
  },
  {
    num: '11',
    title: 'Real Estate Video',
    href: '/video-production/real-estate',
    vimeoId: '1138383811',
    description: 'Cinematic property tours and lifestyle videos for luxury residential, commercial real estate, and hospitality properties. We combine ground-level walk-throughs with aerial footage to showcase every property at its best.',
    tags: ['Luxury Residential', 'Commercial Property', 'Aerial + Ground', 'Virtual Tours'],
  },
]

const stats = [
  { value: '13+', label: 'Years' },
  { value: '3', label: 'Emmy Awards' },
  { value: '15', label: 'Telly Awards' },
  { value: '11', label: 'Service Areas' },
]

export default function VideoProductionPage() {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital@1&display=swap');

        :root {
          --red: #CC0000;
          --gold: #C9A84C;
          --black: #0A0A0A;
          --dark: #111111;
          --dark2: #181818;
        }

        * { box-sizing: border-box; }

        /* ── PAGE HERO ── */
        .vp-hero {
          background: var(--black);
          padding: 160px 48px 80px;
          border-bottom: 1px solid #1a1a1a;
        }
        .vp-hero-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .vp-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 16px;
        }
        .vp-headline {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(52px, 8vw, 96px);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .vp-subtitle {
          font-size: 17px;
          line-height: 1.7;
          color: #888;
          max-width: 680px;
          margin: 0 auto;
        }

        /* ── STATS BAR ── */
        .stats-bar {
          background: var(--dark);
          border-bottom: 1px solid #1e1e1e;
          display: flex;
          justify-content: center;
        }
        .stat-item {
          padding: 28px 56px;
          text-align: center;
          border-right: 1px solid #1e1e1e;
        }
        .stat-item:last-child { border-right: none; }
        .stat-value {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 42px;
          line-height: 1;
          color: #fff;
          letter-spacing: 0.03em;
        }
        .stat-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #AAAAAA;
          margin-top: 4px;
        }

        /* ── SERVICES GRID ── */
        .services-section {
          background: var(--black);
          padding: 80px 48px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── SERVICE CARD ── */
        .svc-card {
          background: #111111;
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          overflow: hidden;
          transition: border-color 0.2s;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .svc-card:hover { border-color: rgba(255,255,255,0.2); }

        .svc-video {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          background: #000;
          flex-shrink: 0;
        }
        .svc-video iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }

        .svc-body {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .svc-num {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 12px;
          letter-spacing: 0.18em;
          color: var(--red);
          margin-bottom: 8px;
        }
        .svc-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 32px;
          line-height: 1;
          letter-spacing: 0.03em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .svc-desc {
          font-size: 14px;
          line-height: 1.75;
          color: #C0C0C0;
          margin-bottom: 20px;
          flex: 1;
        }
        .svc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }
        .svc-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
          border: 0.5px solid #2a2a2a;
          border-radius: 2px;
          padding: 5px 10px;
        }
        .svc-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--red);
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          width: fit-content;
          transition: opacity 0.15s;
        }
        .svc-link:hover { opacity: 0.75; }

        /* ── BOTTOM CTA ── */
        .vp-cta {
          background: var(--dark);
          border-top: 0.5px solid rgba(255,255,255,0.06);
          padding: 100px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .vp-cta::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--red), transparent);
        }
        .vp-cta-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(204,0,0,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .vp-cta-headline {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(54px, 7vw, 96px);
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1;
          text-transform: uppercase;
          margin-bottom: 16px;
          position: relative;
        }
        .vp-cta-headline em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          text-transform: none;
          color: var(--red);
        }
        .vp-cta-sub {
          font-size: 15px;
          color: #B0B0B0;
          margin-bottom: 48px;
          position: relative;
        }
        .vp-cta-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          position: relative;
        }
        .btn-red {
          background: var(--red);
          color: #fff;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: inline-block;
          transition: background 0.15s;
        }
        .btn-red:hover { background: #aa0000; }
        .vp-cta-phone {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 36px;
          letter-spacing: 0.06em;
          color: #fff;
          text-decoration: none;
          transition: color 0.15s;
        }
        .vp-cta-phone:hover { color: var(--gold); }

        @media (max-width: 768px) {
          .vp-hero { padding: 120px 24px 60px; }
          .stats-bar { flex-wrap: wrap; }
          .stat-item { padding: 20px 32px; border-right: none; border-bottom: 1px solid #1e1e1e; flex: 1 1 50%; }
          .services-section { padding: 48px 24px; }
          .services-grid { grid-template-columns: 1fr; }
          .vp-cta { padding: 64px 24px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="vp-hero">
        <div className="vp-hero-inner">
          <p className="vp-eyebrow">Media Bar Productions</p>
          <h1 className="vp-headline">Full-Service<br />Video Production</h1>
          <p className="vp-subtitle">
            From a 30-second commercial to a multi-day corporate documentary — we handle every aspect of video production in-house.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── SERVICES GRID ── */}
      <section className="services-section">
        <div className="services-grid">
          {services.map((svc) => (
            <Link key={svc.num} href={svc.href} style={{ textDecoration: 'none', display: 'block' }}>
              <div className="svc-card">
                <div className="svc-video">
                  <iframe
                    src={`https://player.vimeo.com/video/${svc.vimeoId}?title=0&byline=0&portrait=0&color=CC0000&badge=0`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`${svc.title} — Media Bar Productions`}
                  />
                </div>
                <div className="svc-body">
                  <p className="svc-num">{svc.num}</p>
                  <h2 className="svc-title">{svc.title}</h2>
                  <p className="svc-desc">{svc.description}</p>
                  <div className="svc-tags">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="svc-tag">{tag}</span>
                    ))}
                  </div>
                  <span className="svc-link">See Full Service →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="vp-cta">
        <div className="vp-cta-glow" aria-hidden="true" />
        <h2 className="vp-cta-headline">Ready To <em>Get Started?</em></h2>
        <p className="vp-cta-sub">Tell us about your project and we'll put together a custom quote.</p>
        <div className="vp-cta-actions">
          <Link href="/contact" className="btn-red">Get a Quote</Link>
          <a href="tel:2102799442" className="vp-cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
