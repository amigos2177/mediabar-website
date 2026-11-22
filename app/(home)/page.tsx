import AeProjectFeature from '@/components/AeProjectFeature'
import Image from 'next/image'
import './home.css'
import Link from 'next/link'
import Layout from '../../components/Layout'
import GoogleReviews from '../../components/GoogleReviews'
import HomeHeroMedia from '../../components/HomeHeroMedia'
import HomeRevealObserver from '../../components/HomeRevealObserver'
import { MediaBarAnswersFeature } from '../../components/MediaBarAnswersFeature'
import VimeoPlayer from '../../components/VimeoPlayer'
import LiteYouTubeEmbed from '../../components/LiteYouTubeEmbed'
import { homepageFaqs } from '../../data/homepage-faqs'

type HomepageFilm = {
  id: string
  name: string
  title: string
  detail: string
  poster: string
  youtube?: boolean
  href?: string
  linkLabel?: string
}

const featuredFilms: HomepageFilm[] = [
  {
    "id": "1077104073",
    "name": "Demo Reel",
    "title": "Media Bar Productions Demo Reel",
    "detail": "A cross-section of our work",
    "href": "/work/watch/2025-demo-reel",
    "linkLabel": "Watch the 2025 demo reel",
    "poster": "https://i.vimeocdn.com/video/2007121987-d46882b6b21b356f6dfc32d487245d5802d9508db9e6d9c699a70c7156f7da6c-d_1280?region=us"
  },
  {
    "id": "1245953306",
    "name": "RBFCU × Keldon Johnson",
    "title": "RBFCU Keldon Johnson — Music",
    "detail": "Spurs broadcast commercial · 0:30",
    "href": "/work/rbfcu-keldon-johnson",
    "linkLabel": "Explore the campaign",
    "poster": "https://i.vimeocdn.com/video/2225225563-89d9c55909e025365eb90eeab2bd206ecee4173fc68b3880721481c32e055c6c-d_1280?region=us"
  },
  {
    "id": "1180540640",
    "name": "Upper Deck · Fleer Brilliants Superman",
    "title": "Upper Deck Fleer Brilliants Superman",
    "detail": "Animated product spot · 0:30",
    "href": "/work/upper-deck-video-production",
    "linkLabel": "Explore the animation",
    "poster": "https://i.vimeocdn.com/video/2143088826-56135f2076b3f77710a0be575e322fd68adb53699cd66c09a4131a92d53658c2-d_1280?region=us"
  },
  {
    "id": "946447253",
    "name": "NAFA Conference Recap",
    "title": "NAFA Conference Recap",
    "detail": "Day two on the conference floor · 1:29",
    "href": "/work/watch/nafa-conference-recap",
    "linkLabel": "See the event project",
    "poster": "https://i.vimeocdn.com/video/2092713706-9d1a0e7015828edf8e0a8d84c008d3e2ca70f844461c954092850ae214a9e460-d_1280?region=us"
  },
  {
    "id": "1138383811",
    "name": "Boot Ranch",
    "title": "Boot Ranch lifestyle commercial",
    "detail": "Golf community and Hill Country lifestyle · 0:30",
    "href": "/work/watch/boot-ranch-golf-commercial",
    "linkLabel": "Explore the project",
    "poster": "https://i.vimeocdn.com/video/2084703048-a660f6c3242eafe247a52f09eed73a9b1806876ed35647c172e61243da5b0d68-d_960"
  },
  {
    "id": "1203197473",
    "name": "Commercials Reel",
    "title": "Media Bar Productions Commercials Reel",
    "detail": "Broadcast and digital campaigns",
    "poster": "/images/commercials-reel-spurs-coyote.jpg"
  }
]

const campaignFilms: HomepageFilm[] = [
  {
    id: 'cQHqvEHFx2M',
    youtube: true,
    name: 'RBFCU · We Go Beyond Banking',
    title: 'RBFCU — We Go Beyond Banking',
    detail: 'The opening spot in a five-commercial campaign',
    poster: 'https://i.ytimg.com/vi/cQHqvEHFx2M/maxresdefault.jpg',
    href: '/work/rbfcu-go-beyond-banking#work',
    linkLabel: 'Watch all five spots',
  },
  {
    id: '945888440',
    name: 'Knorr · Not Your Knorr-Dinary Drive-Thru',
    title: 'Knorr — Not Your Knorr-Dinary Drive-Thru',
    detail: 'Campaign film for Arc Worldwide · 1:36',
    poster: '/images/knorr-drive-thru.jpg',
    href: '/work/watch/knorr-not-your-knorr-dinary-drive-thru',
    linkLabel: 'Explore the Knorr project',
  },
  {
    id: '1180540309',
    name: 'Cystic Fibrosis Foundation · A Day in the Life',
    title: 'Cystic Fibrosis Foundation — A Day in the Life',
    detail: 'Edited from client-shot phone footage · 5:35',
    poster: '/images/cff-day-in-the-life.jpg',
  },
]

function FilmCard({ film, lightbox = false }: { film: HomepageFilm; lightbox?: boolean }) {
  return (
    <article className="reel-card">
      <div className="reel-wrap">
        {film.youtube ? (
          <LiteYouTubeEmbed youtubeId={film.id} title={film.title} thumbnailPath={film.poster} />
        ) : (
          <VimeoPlayer videoId={film.id} title={film.title} thumbnailUrl={film.poster} lightbox={lightbox} />
        )}
      </div>
      <div className="reel-meta">
        <h3 className="reel-name">{film.name}</h3>
        <p className="reel-detail">{film.detail}</p>
        {film.href && (
          <Link href={film.href} className="reel-watch-link">
            {film.linkLabel} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  )
}

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
          <p className="hero-eyebrow">Media Bar Productions · Local crew since 2010</p>
          <h1 className="hero-headline">
            Video Production in San Antonio{' '}
            <span className="hero-headline-geo">A clear plan from the start.</span>
          </h1>
          <p className="hero-sub">
            We’re a San Antonio video production company making commercials, corporate films, and event videos.
            For <Link href="/work/rbfcu-keldon-johnson">RBFCU</Link>, our crew filmed three Keldon Johnson
            commercials and a photo shoot in four hours. For <Link href="/work/watch/st-engineering-brand-film">ST Engineering</Link>,
            we filmed employees, facilities, and operations to show prospective hires the work they’d be joining.
          </p>
          <div className="hero-ctas">
            <Link href="/project-planner" className="btn-red" data-conversion-placement="home-hero">Start a Project</Link>
            <Link href="/contact#contact-form" className="btn-outline" data-conversion-placement="home-hero">Ask a Question</Link>
          </div>
          <p className="hero-next-step">
            Share your goal, timing, and the details you know in our guided project brief.
          </p>
          <div className="hero-pills">
            <span className="hero-pill">Strategy to Delivery</span>
            <span className="hero-pill">3 Lone Star Emmy Awards</span>
            <span className="hero-pill">Your Footage, Yours to Keep</span>
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
              <h2 className="section-title">See <em>The Work</em></h2>
            </div>
            <div className="reel-header-copy">
              <p className="reel-description">
                Watch a campaign spot, step onto the conference floor, or see how we bring collectible cards to life.
              </p>
              <Link href="/work" className="reel-all-link">
                View all work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="film-grid">
            {featuredFilms.map((film) => (
              <FilmCard key={film.id} film={film} lightbox />
            ))}
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
                Five Commercials
                <span>One connected campaign.</span>
              </h3>
              <dl className="featured-brief">
                <div>
                  <dt>The client needed</dt>
                  <dd>Human stories that brought RBFCU&rsquo;s &ldquo;Go Beyond Banking&rdquo; message to Texas audiences.</dd>
                </div>
                <div>
                  <dt>Media Bar handled</dt>
                  <dd>Co-writing two spots, plus production and post-production across all five.</dd>
                </div>
                <div>
                  <dt>What we delivered</dt>
                  <dd>Five broadcast commercials, finished for a campaign spanning four Texas markets.</dd>
                </div>
              </dl>
              <div className="featured-stats" aria-label="Campaign highlights">
                <div className="featured-stat"><strong>5</strong><span>Broadcast spots</span></div>
                <div className="featured-stat"><strong>4</strong><span>Texas markets</span></div>
                <div className="featured-stat"><strong>5M+</strong><span>Online views</span></div>
              </div>
              <Link href="/work/rbfcu-go-beyond-banking" className="text-link">
                See the RBFCU campaign <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <AeProjectFeature />

      {/* ─── 5. DIRECT ANSWERS ─── */}
      <section className="answer-section" data-reveal aria-labelledby="homepage-answers-title">
        <div className="answer-inner">
          <div className="answer-intro">
            <p className="eyebrow">San Antonio Video Production</p>
            <h2 className="answer-title" id="homepage-answers-title">
              In our studio{' '}
              <em>or on location?</em>
            </h2>
            <p>
              For interviews or product demonstrations, our San Antonio studio near
              Loop 410 has a white stage, overhead lighting, and acoustic treatment.
              Bring your own crew or have ours handle the shoot.
            </p>
            <p>
              When the workplace is part of the story, we come to you. For a recruiting
              film, that can mean interviewing employees and filming them at work.
              For a conference, we plan around the speaker schedule and venue access.
            </p>
            <ul className="home-project-links" aria-label="Studio and location filming">
              <li><Link href="/studio">See the studio and check availability <span aria-hidden="true">→</span></Link></li>
              <li><Link href="/locations/san-antonio">Plan a shoot at your location <span aria-hidden="true">→</span></Link></li>
            </ul>
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

      <section id="campaigns-and-stories" className="reel-section" data-reveal aria-labelledby="campaign-films-title">
        <div className="reel-section-inner">
          <h2 id="campaign-films-title" className="section-title">Campaigns <em>&amp; Stories</em></h2>
          <div className="film-grid">
            {campaignFilms.map((film) => <FilmCard key={film.id} film={film} />)}
          </div>
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
            <p className="award-name">Lone Star Emmy Awards</p>
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
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            <p className="award-count">2025</p>
            <p className="award-name">Effie Awards Finalist</p>
            <p className="award-note">Contributing production company, H-E-B &ldquo;Not Your Knorr-Dinary Drive-Thru&rdquo; for Knorr</p>
          </div>
          <div className="award-card">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{margin: '0 auto 12px', display: 'block'}}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <p className="award-count">2010</p>
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
          <Link href="/project-planner" className="btn-red" data-conversion-placement="home-final">Start a Project</Link>
          <Link href="/contact#contact-form" className="btn-outline" data-conversion-placement="home-final">Ask a Question</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
      </div>
    </Layout>
  )
}
