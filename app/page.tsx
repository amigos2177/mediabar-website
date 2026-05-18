import Link from 'next/link'
import Layout from '../components/Layout'

export const metadata = {
  title: 'Video Production San Antonio | Media Bar Productions',
  description: "San Antonio's award-winning video production company. 3 Emmy Awards, 15 Telly Awards, 13+ years. Corporate, commercial, event & medical video across Texas.",
}

const services = [
  { label: 'Corporate Video', href: '/video-production/corporate' },
  { label: 'Commercials', href: '/video-production/commercials' },
  { label: 'Event Coverage', href: '/video-production/events' },
  { label: 'Interview & Discussion', href: '/video-production/interview' },
  { label: 'Medical Video', href: '/video-production/medical' },
  { label: 'Aerial Video', href: '/video-production/aerial' },
  { label: 'Motion Graphics', href: '/video-production/motion-graphics' },
  { label: 'Live Streaming', href: '/video-production/live-streaming' },
  { label: 'Post Production', href: '/video-production/post-production' },
  { label: 'Food Video', href: '/video-production/food' },
  { label: 'Real Estate Video', href: '/video-production/real-estate' },
]

const clients = [
  'San Antonio Spurs', 'HEB', 'Unilever', 'Frost Bank',
  'Texas Tech', 'Baker Hughes', 'Kia', 'Bass Pro', 'Carrier', 'Blue Moon',
]

export default function HomePage() {
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

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: var(--black); color: #fff; font-family: system-ui, sans-serif; }

        /* ── HERO ── */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .hero-video-wrap {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-video-wrap iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 56.25vw;
          min-height: 100vh;
          min-width: 177.78vh;
          border: none;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 24px;
        }
        .hero-eyebrow {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(22px, 3vw, 36px);
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.03em;
          margin-bottom: 4px;
        }
        .hero-headline {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(72px, 12vw, 148px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #fff;
          text-transform: uppercase;
        }
        .hero-pills {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .hero-pill {
          border: 1px solid rgba(255,255,255,0.25);
          padding: 8px 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          backdrop-filter: blur(4px);
        }
        .hero-ctas {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--red);
          color: #fff;
          text-decoration: none;
          padding: 14px 36px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: background 0.15s;
        }
        .btn-primary:hover { background: #aa0000; }
        .btn-outline {
          border: 1px solid rgba(255,255,255,0.4);
          color: #fff;
          text-decoration: none;
          padding: 14px 36px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: border-color 0.15s, background 0.15s;
        }
        .btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.06); }

        /* ── CLIENTS STRIP ── */
        .clients-strip {
          background: var(--dark);
          border-top: 1px solid #1e1e1e;
          border-bottom: 1px solid #1e1e1e;
          padding: 28px 48px;
          overflow: hidden;
        }
        .clients-label {
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #444;
          margin-bottom: 20px;
        }
        .clients-row {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
        }
        .client-name {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #555;
          padding: 8px 28px;
          border-right: 1px solid #222;
          white-space: nowrap;
          transition: color 0.15s;
        }
        .client-name:last-child { border-right: none; }
        .client-name:hover { color: #999; }

        /* ── SERVICES GRID ── */
        .section {
          padding: 96px 48px;
        }
        .section-dark { background: var(--dark); }
        .section-dark2 { background: var(--dark2); }
        .section-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(42px, 6vw, 72px);
          letter-spacing: 0.03em;
          color: #fff;
          line-height: 1;
          margin-bottom: 56px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 2px;
        }
        .service-card {
          display: block;
          background: var(--dark2);
          padding: 32px 28px;
          text-decoration: none;
          border: 1px solid #1e1e1e;
          transition: background 0.15s, border-color 0.15s;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--red);
          transition: width 0.25s;
        }
        .service-card:hover { background: #1e1e1e; border-color: #2a2a2a; }
        .service-card:hover::before { width: 100%; }
        .service-card-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--red);
          margin-bottom: 12px;
        }
        .service-card-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 22px;
          letter-spacing: 0.05em;
          color: #fff;
        }

        /* ── DEMO REEL ── */
        .reel-wrap {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          max-width: 1100px;
          margin: 0 auto;
        }
        .reel-wrap iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }

        /* ── AWARDS ── */
        .awards-grid {
          display: flex;
          gap: 48px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 56px;
        }
        .award-card {
          text-align: center;
          padding: 40px 48px;
          border: 1px solid #222;
          background: var(--dark2);
          min-width: 200px;
        }
        .award-count {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 80px;
          line-height: 1;
          color: var(--gold);
          letter-spacing: 0.02em;
        }
        .award-name {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #888;
          margin-top: 8px;
        }

        /* ── FINAL CTA ── */
        .cta-section {
          background: var(--red);
          padding: 96px 48px;
          text-align: center;
        }
        .cta-headline {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(48px, 7vw, 96px);
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 36px;
          line-height: 1;
        }
        .btn-white {
          background: #fff;
          color: var(--red);
          text-decoration: none;
          padding: 16px 48px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: inline-block;
          transition: background 0.15s;
        }
        .btn-white:hover { background: rgba(255,255,255,0.88); }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/1077104073?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&controls=0"
            allow="autoplay; fullscreen"
            title="Media Bar Productions showreel background"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">San Antonio</p>
          <h1 className="hero-headline">Video Production</h1>
          <div className="hero-pills">
            <span className="hero-pill">13+ Years</span>
            <span className="hero-pill">3 Emmy Awards</span>
            <span className="hero-pill">15 Telly Awards</span>
          </div>
          <div className="hero-ctas">
            <Link href="/work" className="btn-primary">See Our Work</Link>
            <Link href="/contact" className="btn-outline">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* ── CLIENTS STRIP ── */}
      <div className="clients-strip">
        <p className="clients-label">Trusted By</p>
        <div className="clients-row">
          {clients.map((name) => (
            <span key={name} className="client-name">{name}</span>
          ))}
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <section className="section section-dark">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">Production Services</h2>
        <div className="services-grid">
          {services.map((svc, i) => (
            <Link key={svc.href} href={svc.href} className="service-card">
              <p className="service-card-num">{String(i + 1).padStart(2, '0')}</p>
              <p className="service-card-title">{svc.label}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DEMO REEL ── */}
      <section className="section section-dark2" style={{ paddingBottom: '80px' }}>
        <p className="section-label">Demo Reel</p>
        <h2 className="section-title" style={{ marginBottom: '40px' }}>See The Work</h2>
        <div className="reel-wrap">
          <iframe
            src="https://player.vimeo.com/video/1077104073?title=0&byline=0&portrait=0&color=CC0000"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Media Bar Productions Demo Reel"
          />
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <p className="section-label">Recognition</p>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Award-Winning Work</h2>
        <div className="awards-grid">
          <div className="award-card">
            <p className="award-count">3</p>
            <p className="award-name">Emmy Awards</p>
          </div>
          <div className="award-card">
            <p className="award-count">15</p>
            <p className="award-name">Telly Awards</p>
          </div>
          <div className="award-card">
            <p className="award-count">13<span style={{ fontSize: '48px' }}>+</span></p>
            <p className="award-name">Years in Business</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <h2 className="cta-headline">Let's Make Something Great</h2>
        <Link href="/contact" className="btn-white">Get a Quote</Link>
      </section>
    </Layout>
  )
}
