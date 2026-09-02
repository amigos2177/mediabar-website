import Image from 'next/image'
import './home.css'
import Link from 'next/link'
import Layout from '../../components/Layout'
import GoogleReviews from '../../components/GoogleReviews'
import HomeHeroMedia from '../../components/HomeHeroMedia'
import HomeRevealObserver from '../../components/HomeRevealObserver'
import { MediaBarAnswersFeature } from '../../components/MediaBarAnswersFeature'
import VimeoPlayer from '../../components/VimeoPlayer'
import { homepageFaqs } from '../../data/homepage-faqs'

const services = [
  {
    label: 'Corporate Video Production',
    href: '/video-production/corporate',
    description: 'San Antonio brand films, executive stories, recruiting, training, and internal communications.',
    iconIndex: 0,
  },
  {
    label: 'Commercials',
    href: '/video-production/commercials',
    description: 'Broadcast and digital campaigns built to earn attention and stay memorable.',
    iconIndex: 1,
  },
  {
    label: 'Event Coverage',
    href: '/video-production/events',
    description: 'Event video production for conferences, galas, keynotes, recaps, and session content.',
    iconIndex: 2,
  },
  {
    label: 'Live Streaming',
    href: '/video-production/live-streaming',
    description: 'Multi-camera live production for audiences in the room and around the world.',
    iconIndex: 7,
  },
  {
    label: 'Post Production',
    href: '/video-production/post-production',
    description: 'Video post-production with editorial, color, audio, graphics, captions, and delivery.',
    iconIndex: 8,
  },
  {
    label: 'Motion Graphics',
    href: '/video-production/motion-graphics',
    description: 'Motion graphics, animation, and visual systems that make complex ideas clear.',
    iconIndex: 6,
  },
]

const svgProps = {
  width: 28, height: 28, viewBox: '0 0 24 24',
  fill: 'none', stroke: '#CC0000', strokeWidth: 1.5,
  strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
}

const serviceIcons = [
  // Corporate Video - briefcase
  <svg key="corporate" {...svgProps}>
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>,
  // Commercials - play circle
  <svg key="commercials" {...svgProps}>
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8"/>
  </svg>,
  // Event Coverage - calendar
  <svg key="events" {...svgProps}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>,
  // Interview & Discussion - mic
  <svg key="interview" {...svgProps}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="8" y1="22" x2="16" y2="22"/>
  </svg>,
  // Medical Video - plus square
  <svg key="medical" {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>,
  // Aerial Video - arrow up
  <svg key="aerial" {...svgProps}>
    <line x1="12" y1="19" x2="12" y2="5"/>
    <polyline points="5 12 12 5 19 12"/>
  </svg>,
  // Motion Graphics - layers
  <svg key="motion" {...svgProps}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>,
  // Live Streaming - wifi
  <svg key="streaming" {...svgProps}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <line x1="12" y1="20" x2="12.01" y2="20"/>
  </svg>,
  // Post Production - scissors
  <svg key="post" {...svgProps}>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>,
  // Food Video - coffee
  <svg key="food" {...svgProps}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>,
  // Real Estate Video - home
  <svg key="realestate" {...svgProps}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>,
]

const clients = [
  { name: 'San Antonio Spurs', logo: '/images/client-spurs.png' },
  { name: 'HEB',               logo: '/images/client-heb.png' },
  { name: 'Unilever',          logo: '/images/client-unilever.png' },
  { name: 'Frost Bank',        logo: '/images/client-frost.png' },
  { name: 'Texas Tech',        logo: '/images/client-texas-tech.png' },
  { name: 'Bass Pro Shops',    logo: '/images/client-bass-pro.png' },
  { name: 'Carrier',           logo: '/images/client-carrier.png' },
  { name: 'Blue Moon',         logo: '/images/client-blue-moon.png' },
]

export default function HomePage() {
  return (
    <Layout>
      <HomeRevealObserver />
      <div className="mbp-home">
      {/* ─── 1. HERO ─── */}
      <section className="hero">
        <HomeHeroMedia />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Media Bar Productions · Local crew since 2011</p>
          <h1 className="hero-headline">
            Video Production in San Antonio{' '}
            <span className="hero-headline-geo">Built to move people and business.</span>
          </h1>
          <p className="hero-sub">
            Media Bar Productions creates cinematic stories that move people and business,
            with commercials, branded films, and event content planned, produced, and finished
            by one experienced Texas team.
          </p>
          <div className="hero-pills">
            <span className="hero-pill">Strategy to Delivery</span>
            <span className="hero-pill">3 Emmy Awards</span>
            <span className="hero-pill">Your Footage, Yours to Keep</span>
          </div>
          <div className="hero-ctas">
            <Link href="/project-planner" className="btn-red">Start a Project</Link>
            <Link href="/contact#contact-form" className="btn-outline">Ask a Question</Link>
          </div>
        </div>
      </section>

      {/* ─── 2. CLIENTS STRIP ─── */}
      <div className="clients-strip">
        <p className="clients-label">Trusted by Texas&rsquo;s Most Recognized Brands</p>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.name} className="client-cell">
              {client.logo
                ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={56}
                    sizes="(max-width: 600px) 56px, (max-width: 1024px) 80px, 96px"
                    quality={60}
                  />
                )
                : <span className="client-text">{client.name}</span>
              }
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. DEMO REELS ─── */}
      <section className="reel-section" data-reveal>
        <div className="reel-section-inner">
          <div className="reel-header">
            <div>
              <p className="eyebrow">Selected Reels</p>
              <h2 className="section-title">See <em>The Work</em></h2>
            </div>
            <div className="reel-header-copy">
              <p className="reel-description">
                A quick look at the stories, campaigns, and production craft we bring to
                screens across Texas and beyond.
              </p>
              <Link href="/work" className="reel-all-link">
                View all work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="reel-duo">
            <article className="reel-card">
              <div className="reel-wrap">
                <VimeoPlayer
                  videoId="1077104073"
                  title="Media Bar Productions Demo Reel"
                  thumbnailUrl="https://i.vimeocdn.com/video/2007121987-d46882b6b21b356f6dfc32d487245d5802d9508db9e6d9c699a70c7156f7da6c-d_1280?region=us"
                />
              </div>
              <div className="reel-meta">
                <span className="reel-index">01</span>
                <div>
                  <h3 className="reel-name">Demo Reel</h3>
                  <p className="reel-detail">Commercials · Events · Healthcare · Branded stories</p>
                  <Link href="/work/watch/2025-demo-reel" className="reel-watch-link">
                    Watch the 2025 demo reel <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
            <article className="reel-card">
              <div className="reel-wrap">
                <VimeoPlayer
                  videoId="1203197473"
                  title="Media Bar Productions Commercials Reel"
                  thumbnailUrl="/images/commercials-reel-spurs-coyote.jpg"
                />
              </div>
              <div className="reel-meta">
                <span className="reel-index">02</span>
                <div>
                  <h3 className="reel-name">Commercials Reel</h3>
                  <p className="reel-detail">Broadcast · Digital · Campaign production</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURED CASE STUDY ─── */}
      <section className="featured-work" data-reveal>
        <div className="featured-inner">
          <p className="eyebrow">Featured Work</p>
          <h2 className="section-title">A Campaign Built to <em>Go Beyond</em></h2>
          <article className="featured-card">
            <div className="featured-visual">
              <Image
                src="/images/rbfcu-bts-riverside.jpg"
                alt="Media Bar Productions filming the RBFCU Go Beyond Banking commercial campaign beside a Texas river"
                fill
                sizes="(max-width: 1024px) 100vw, 62vw"
              />
            </div>
            <div className="featured-copy">
              <p className="featured-kicker">RBFCU · Broadcast Campaign</p>
              <h3 className="featured-title">
                Five Stories
                <span>One human promise.</span>
              </h3>
              <p className="featured-description">
                Media Bar co-wrote, produced, and finished a five-commercial campaign designed
                to make one of Texas&rsquo;s largest credit unions feel personal in every market.
              </p>
              <div className="featured-stats" aria-label="Campaign highlights">
                <div className="featured-stat"><strong>5</strong><span>Broadcast spots</span></div>
                <div className="featured-stat"><strong>4</strong><span>Texas markets</span></div>
                <div className="featured-stat"><strong>5M+</strong><span>Online views</span></div>
              </div>
              <Link href="/work/rbfcu-go-beyond-banking" className="text-link">
                Explore the case study <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ─── 5. DIRECT ANSWERS ─── */}
      <section className="answer-section" data-reveal aria-labelledby="homepage-answers-title">
        <div className="answer-inner">
          <div className="answer-intro">
            <p className="eyebrow">San Antonio Video Production</p>
            <h2 className="answer-title" id="homepage-answers-title">
              One Partner
              <em>from first idea to final delivery.</em>
            </h2>
            <p>
              Media Bar Productions is a full-service video production company based in
              San Antonio, Texas. Since 2011, our team has helped organizations plan, film,
              edit, and deliver video for audiences across Texas and beyond.
            </p>
            <Link href="/locations/san-antonio" className="text-link">
              Meet our San Antonio production team <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="answer-grid">
            {homepageFaqs.map((faq) => (
              <article className="answer-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
                <Link href={faq.href} className="answer-link">
                  {faq.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. SERVICES GRID ─── */}
      <section className="section section-dark" data-reveal>
        <p className="eyebrow">Our Services</p>
        <h2 className="section-title">One Team, <em>Every Frame</em></h2>
        <div className="services-grid">
          {services.map((svc, i) => (
            <Link key={svc.href} href={svc.href} className="service-card">
              <div className="service-card-top">
                <span className="service-icon" aria-hidden="true">{serviceIcons[svc.iconIndex]}</span>
                <p className="service-num">{String(i + 1).padStart(2, '0')}</p>
                <p className="service-title">{svc.label}</p>
                <p className="service-description">{svc.description}</p>
              </div>
              <span className="service-card-cta">Explore service →</span>
            </Link>
          ))}
          <aside className="specialty-card">
            <div>
              <p className="specialty-kicker">More ways to create</p>
              <h3 className="specialty-title">Specialized Production</h3>
              <p className="specialty-copy">
                The same experienced crew, adapted to the subject, setting, and audience your
                story requires.
              </p>
            </div>
            <nav className="specialty-links" aria-label="Specialized video production services">
              {[
                ['Interview & Discussion', '/video-production/interview'],
                ['Medical & Healthcare', '/video-production/medical'],
                ['Aerial & Drone', '/video-production/aerial'],
                ['Food & Beverage', '/video-production/food'],
                ['Real Estate', '/video-production/real-estate'],
                ['Explore All Services', '/video-production'],
              ].map(([label, href]) => (
                <Link className="specialty-link" href={href} key={href}>
                  <span>{label}</span><span aria-hidden="true">→</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      {/* ─── 7. HOW WE WORK ─── */}
      <section className="section" style={{ background: 'var(--black)' }} data-reveal>
        <div className="process-layout">
          <div className="process-intro">
            <p className="eyebrow">The Media Bar Experience</p>
            <h2 className="section-title">Big Production. <em>No Black Box.</em></h2>
            <p>
              You get a clear plan, a direct line to the team, and a private project space
              where timelines, files, feedback, approvals, and final delivery stay together.
            </p>
            <Link href="/how-we-work" className="btn-red">See How We Work</Link>
          </div>
          <div className="process-steps">
            {[
              ['01', 'Plan', 'Goals, audience, script, schedule, and approvals before cameras roll.'],
              ['02', 'Produce', 'An experienced crew, a detailed call sheet, and a calm, prepared set.'],
              ['03', 'Refine', 'Structured review rounds with feedback and versions visible in your portal.'],
              ['04', 'Deliver', 'Final files prepared for every channel, with the footage yours to keep.'],
            ].map(([num, title, description]) => (
              <div className="process-step" key={num}>
                <span className="process-num">{num}</span>
                <h3>{title}</h3>
                <span className="process-arrow" aria-hidden="true">→</span>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. MEDIA BAR ANSWERS ─── */}
      <MediaBarAnswersFeature
        title="Production questions"
        emphasis="answered clearly."
        description="Short, practical guidance from Ruben Garcia and the Media Bar team, with full transcripts and deeper planning resources for every answer."
        slugs={[
          'what-a-production-company-needs-for-an-estimate',
          'three-executive-interviews-in-one-day',
        ]}
        placement="home"
      />

      {/* ─── 9. AWARDS ─── */}
      <section className="section section-dark" style={{ textAlign: 'center' }} data-reveal>
        <p className="eyebrow">Recognition</p>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Award-Winning <em>Production</em></h2>
        <div className="awards-grid">
          <div className="award-card">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{margin: '0 auto 12px', display: 'block'}}>
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
            </svg>
            <p className="award-count">3</p>
            <p className="award-name">Emmy Awards</p>
          </div>
          <div className="award-card">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{margin: '0 auto 12px', display: 'block'}}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <p className="award-count">15</p>
            <p className="award-name">Telly Awards</p>
          </div>
          <div className="award-card">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{margin: '0 auto 12px', display: 'block'}}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <p className="award-count">2011</p>
            <p className="award-name">Producing Since</p>
          </div>
        </div>
      </section>

      {/* ─── 10. COST TEASER ─── */}
      <section className="section section-dark2" style={{ textAlign: 'center' }} data-reveal>
        <p className="eyebrow">What It Costs</p>
        <h2 className="section-title" style={{ marginBottom: '24px' }}>What Goes Into the Cost of a <em>Video Production</em></h2>
        <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.55)', maxWidth: '680px', margin: '0 auto 44px' }}>
          Every project is scoped individually - a 30-second social spot and a multi-day brand film don&rsquo;t carry the same budget. We&rsquo;ll recommend the right scope for your goals, and you own all the footage we shoot.
        </p>
        <Link href="/pricing" className="btn-red">See What Drives Cost</Link>
      </section>

      {/* ─── 11. GOOGLE REVIEWS ─── */}
      <GoogleReviews />

      {/* ─── 12. FINAL CTA ─── */}
      <section className="cta-section" data-reveal>
        <h2 className="cta-headline">Start With <em>Whatever You Know</em></h2>
        <p className="cta-sub">Plan a production or ask a quick question. Either way, a real person will help.</p>
        <div className="cta-actions">
          <Link href="/project-planner" className="btn-red">Start a Project</Link>
          <Link href="/contact#contact-form" className="btn-outline">Ask a Question</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
      </div>
    </Layout>
  )
}
