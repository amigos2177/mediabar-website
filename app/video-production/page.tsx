import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import { videoProductionFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Video Production San Antonio & Texas | Media Bar',
  description:
    'San Antonio video production for corporate films, commercials, events, interviews, live streams, motion graphics, and post-production across Texas.',
  path: '/video-production',
  ogImage: '/images/bts-dsc-1.jpg',
})

const clients = [
  { name: 'Carrier', logo: '/images/client-carrier.png' },
  { name: 'Frost Bank', logo: '/images/client-frost.png' },
  { name: 'H-E-B', logo: '/images/client-heb.png' },
  { name: 'San Antonio Spurs', logo: '/images/client-spurs.png' },
]

const serviceGroups = [
  {
    number: '01',
    eyebrow: 'Story and leadership',
    title: 'Make the Message Clear.',
    description:
      'Turn expertise, leadership, customer experience, and complex subject matter into films people can understand and remember.',
    services: [
      ['Corporate Video', '/video-production/corporate'],
      ['Interview & Discussion', '/video-production/interview'],
      ['Medical Video', '/video-production/medical'],
    ],
  },
  {
    number: '02',
    eyebrow: 'Campaigns and attention',
    title: 'Give the Idea Reach.',
    description:
      'Build high-impact creative for broadcast, digital, social, product launches, hospitality, and property marketing.',
    services: [
      ['Commercials', '/video-production/commercials'],
      ['Food Video', '/video-production/food'],
      ['Real Estate Video', '/video-production/real-estate'],
    ],
  },
  {
    number: '03',
    eyebrow: 'Live and on location',
    title: 'Capture What Happens.',
    description:
      'Cover the room, the stage, the facility, and the larger environment with a coordinated production plan.',
    services: [
      ['Event Coverage', '/video-production/events'],
      ['Live Streaming', '/video-production/live-streaming'],
      ['Aerial Video', '/video-production/aerial'],
    ],
  },
  {
    number: '04',
    eyebrow: 'Finish and extend',
    title: 'Build Every Version.',
    description:
      'Shape raw footage into polished stories, explainers, campaign cutdowns, captions, graphics, and channel-ready deliverables.',
    services: [
      ['Post-Production', '/video-production/post-production'],
      ['Motion Graphics', '/video-production/motion-graphics'],
    ],
  },
]

const process = [
  {
    number: '01',
    title: 'Align',
    copy: 'Define the audience, business objective, message, stakeholders, channels, and measures of success.',
  },
  {
    number: '02',
    title: 'Plan',
    copy: 'Build the creative approach, scope, schedule, crew, locations, logistics, and approval path.',
  },
  {
    number: '03',
    title: 'Produce',
    copy: 'Direct the people and production with the right cameras, lighting, sound, movement, and coverage.',
  },
  {
    number: '04',
    title: 'Deliver',
    copy: 'Edit, review, finish, caption, version, and prepare every asset for the places it needs to work.',
  },
]

const locations = [
  ['San Antonio', '/locations/san-antonio'],
  ['Austin', '/locations/austin'],
  ['Dallas-Fort Worth', '/locations/dallas'],
  ['Houston', '/locations/houston'],
]

export default function VideoProductionPage() {
  return (
    <Layout>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production Services', url: '/video-production' },
        ]}
      />
      <ServiceJsonLd
        name="Video Production in San Antonio and Texas"
        description="Full-service San Antonio video production for corporate films, commercials, events, interviews, medical video, live streaming, motion graphics, and post-production across Texas."
        url="/video-production"
        image="https://www.mediabarproductions.com/images/bts-dsc-1.jpg"
      />
      <FAQPageJsonLd faqs={videoProductionFaqs} />

      <style>{`
        .vps-page{--line:rgba(255,255,255,.1);--panel:#141414;--muted:#96969b;background:#090909;color:#fff}
        .vps-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .vps-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
        .vps-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
        .vps-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none}
        .vps-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 34px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:background .18s,border-color .18s}
        .vps-button-primary{background:var(--red);color:#fff}.vps-button-primary:hover{background:#aa0000}
        .vps-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.vps-button-secondary:hover{border-color:#fff;background:rgba(255,255,255,.05)}
        .vps-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}

        .vps-hero{position:relative;min-height:790px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--line)}
        .vps-hero-image{object-fit:cover;object-position:center}
        .vps-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.98) 0%,rgba(0,0,0,.88) 44%,rgba(0,0,0,.16) 78%),linear-gradient(0deg,#090909 0%,transparent 36%)}
        .vps-hero-lines{position:absolute;inset:0;opacity:.09;background-image:linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px);background-size:72px 72px;mask-image:linear-gradient(90deg,#000,transparent 70%)}
        .vps-hero-inner{position:relative;z-index:1;width:100%;padding:180px 0 72px}
        .vps-hero-copy{max-width:900px;padding-left:32px}
        .vps-hero h1{font-size:clamp(66px,8.5vw,118px);margin:18px 0 24px}
        .vps-hero h1 em{display:block;color:var(--gold);font-size:.56em;margin-top:9px}
        .vps-hero-deck{max-width:680px;color:rgba(255,255,255,.76);font-size:17px;line-height:1.75}
        .vps-proof{display:grid;grid-template-columns:repeat(4,1fr);margin-top:64px;border:1px solid var(--line);background:rgba(9,9,9,.74);backdrop-filter:blur(10px)}
        .vps-proof-item{padding:21px 24px;border-right:1px solid var(--line)}
        .vps-proof-item:last-child{border-right:0}
        .vps-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;line-height:1;letter-spacing:.04em}
        .vps-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

        .vps-clients{background:#101010;border-bottom:1px solid var(--line)}
        .vps-clients-inner{display:grid;grid-template-columns:240px 1fr;align-items:center;min-height:132px}
        .vps-clients-title{color:#676767;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .vps-client-grid{display:grid;grid-template-columns:repeat(4,1fr);height:100%;border-left:1px solid var(--line)}
        .vps-client{display:flex;min-height:132px;align-items:center;justify-content:center;border-right:1px solid var(--line)}
        .vps-client:last-child{border-right:0}
        .vps-client img{width:auto;height:40px;max-width:130px;object-fit:contain;filter:grayscale(1) brightness(1.5);opacity:.66}

        .vps-section{padding:106px 0;border-bottom:1px solid var(--line)}
        .vps-section-head{display:grid;grid-template-columns:1fr .82fr;gap:90px;align-items:end;margin-bottom:54px}
        .vps-section-title{font-size:clamp(54px,6vw,84px);margin-top:16px}
        .vps-section-title em{color:var(--gold)}
        .vps-section-intro{max-width:630px;color:var(--muted);font-size:16px;line-height:1.75}

        .vps-groups{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .vps-group{min-height:420px;display:flex;flex-direction:column;padding:36px;background:var(--panel)}
        .vps-group-top{display:flex;align-items:center;justify-content:space-between}
        .vps-group-number{font-family:'Bebas Neue',Impact,sans-serif;color:var(--red);font-size:20px;letter-spacing:.08em}
        .vps-group-eyebrow{color:#626267;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .vps-group h3{max-width:470px;font-family:'Bebas Neue',Impact,sans-serif;font-size:48px;font-weight:400;line-height:.98;letter-spacing:.03em;text-transform:uppercase;margin:55px 0 17px}
        .vps-group>p{max-width:520px;color:#89898e;font-size:14px;line-height:1.7}
        .vps-service-links{margin-top:auto;padding-top:34px}
        .vps-service-link{display:flex;align-items:center;justify-content:space-between;min-height:48px;border-top:1px solid var(--line);color:#d7d7d9;font-size:11px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;transition:color .18s,padding .18s}
        .vps-service-link:hover{color:var(--red);padding-left:6px}
        .vps-service-link span{font-size:17px;color:var(--red)}

        .vps-feature{background:#101010}
        .vps-feature-grid{display:grid;grid-template-columns:1.12fr .88fr;min-height:690px;border:1px solid var(--line);background:#151515}
        .vps-feature-image{position:relative;min-height:560px;overflow:hidden}
        .vps-feature-image img{object-fit:cover;object-position:center}
        .vps-feature-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .vps-feature-copy h2{font-size:clamp(54px,5.8vw,82px);margin:17px 0 24px}
        .vps-feature-copy h2 em{display:block;color:var(--gold);font-size:.65em;margin-top:8px}
        .vps-feature-copy p{color:var(--muted);font-size:15px;line-height:1.75}
        .vps-feature-facts{display:grid;grid-template-columns:repeat(2,1fr);margin:35px 0;border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .vps-feature-fact{padding:20px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
        .vps-feature-fact strong{display:block;font-family:'Bebas Neue',Impact,sans-serif;font-size:27px;font-weight:400;letter-spacing:.04em}
        .vps-feature-fact span{display:block;margin-top:5px;color:#737378;font-size:8px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
        .vps-inline-link{display:inline-flex;color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .vps-inline-link span{color:var(--red);margin-left:8px}

        .vps-process-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:72px;align-items:stretch}
        .vps-process-image{position:relative;min-height:700px;border:1px solid var(--line);overflow:hidden}
        .vps-process-image img{object-fit:cover;object-position:center}
        .vps-process-copy{display:flex;flex-direction:column;justify-content:center}
        .vps-process-copy h2{font-size:clamp(54px,5.8vw,82px);margin:16px 0 25px}
        .vps-process-copy h2 em{display:block;color:var(--gold);font-size:.65em;margin-top:8px}
        .vps-process-intro{color:var(--muted);font-size:15px;line-height:1.75}
        .vps-process-list{margin-top:36px;border-top:1px solid var(--line)}
        .vps-process-item{display:grid;grid-template-columns:42px 130px 1fr;gap:18px;padding:22px 0;border-bottom:1px solid var(--line)}
        .vps-process-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:18px}
        .vps-process-item h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:22px;font-weight:400;letter-spacing:.04em}
        .vps-process-item p{color:#7f7f84;font-size:12px;line-height:1.65}

        .vps-locations{background:#101010}
        .vps-location-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .vps-location{min-height:150px;display:flex;flex-direction:column;justify-content:space-between;padding:28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transition:background .18s}
        .vps-location:hover{background:#171717}
        .vps-location small{color:#666;font-size:8px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}
        .vps-location strong{font-family:'Bebas Neue',Impact,sans-serif;font-size:27px;font-weight:400;letter-spacing:.04em}
        .vps-location span{color:var(--red)}

        .vps-faq-wrap{max-width:1000px}
        .vps-faq-head{text-align:center;margin-bottom:44px}
        .vps-faq-head h2{font-size:clamp(52px,6vw,80px);margin-top:13px}
        .vps-faq-head h2 em{color:var(--gold)}
        .vps-faq{border-top:1px solid var(--line)}
        .vps-faq details{border-bottom:1px solid var(--line);padding:0 4px}
        .vps-faq summary{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:78px;cursor:pointer;list-style:none;color:#eee;font-size:16px;font-weight:600}
        .vps-faq summary::-webkit-details-marker{display:none}
        .vps-faq summary:after{content:'+';color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;font-weight:400}
        .vps-faq details[open] summary:after{content:'-'}
        .vps-faq details p{max-width:780px;padding:0 0 26px;color:#8f8f94;font-size:14px;line-height:1.75}

        .vps-cta{padding:118px 0;text-align:center;background:radial-gradient(circle at 50% 110%,rgba(204,0,0,.18),transparent 45%),#0c0c0c}
        .vps-cta h2{font-size:clamp(56px,7vw,96px);margin-top:17px}
        .vps-cta h2 em{color:var(--gold)}
        .vps-cta p{margin:22px auto 0;max-width:620px;color:#9c9ca0;font-size:16px;line-height:1.7}
        .vps-cta .vps-actions{justify-content:center}

        @media(max-width:1050px){
          .vps-feature-grid,.vps-process-grid{grid-template-columns:1fr}
          .vps-process-grid{gap:42px}
          .vps-process-image{min-height:500px}
        }
        @media(max-width:760px){
          .vps-container{width:min(100% - 40px,1240px)}
          .vps-hero{min-height:760px}
          .vps-hero-inner{padding:140px 0 42px}
          .vps-hero-copy{padding-left:0}
          .vps-hero h1{font-size:59px}
          .vps-hero-deck{font-size:15px}
          .vps-proof{grid-template-columns:repeat(2,1fr);margin-top:42px}
          .vps-proof-item:nth-child(2){border-right:0}.vps-proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .vps-clients-inner{grid-template-columns:1fr;padding-top:24px}
          .vps-clients-title{text-align:center;padding-bottom:20px}
          .vps-client-grid{grid-template-columns:repeat(2,1fr);border-left:0;border-top:1px solid var(--line)}
          .vps-client:nth-child(2){border-right:0}.vps-client:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .vps-section{padding:76px 0}
          .vps-section-head{grid-template-columns:1fr;gap:24px}
          .vps-groups,.vps-location-grid{grid-template-columns:1fr}
          .vps-group{min-height:390px;padding:27px 24px}
          .vps-group h3{font-size:42px}
          .vps-feature-copy{padding:39px 25px}
          .vps-feature-image{min-height:380px}
          .vps-process-image{min-height:390px}
          .vps-process-item{grid-template-columns:34px 94px 1fr;gap:12px}
          .vps-faq summary{font-size:14px}
          .vps-cta{padding:84px 0}
          .vps-button{width:100%}
        }
      `}</style>

      <main className="vps-page">
        <section className="vps-hero">
          <Image
            className="vps-hero-image"
            src="/images/bts-dsc-1.jpg"
            alt="Media Bar Productions director monitoring a professional video production"
            fill
            priority
            sizes="100vw"
          />
          <div className="vps-hero-scrim" />
          <div className="vps-hero-lines" aria-hidden="true" />
          <div className="vps-hero-inner">
            <div className="vps-container">
              <div className="vps-hero-copy">
                <p className="vps-eyebrow">San Antonio video production across Texas</p>
                <h1 className="vps-display">One Production Team. <em>Every Version You Need.</em></h1>
                <p className="vps-hero-deck">
                  From our San Antonio home base, Media Bar brings creative, production, and
                  post-production into one experienced workflow for brands, organizations, and agencies across Texas.
                </p>
                <div className="vps-actions">
                  <Link className="vps-button vps-button-primary" href="/project-planner">Plan Your Project</Link>
                  <Link className="vps-button vps-button-secondary" href="/work">See Our Work</Link>
                </div>
              </div>
              <div className="vps-proof" aria-label="Media Bar Productions credentials">
                <div className="vps-proof-item"><div className="vps-proof-value">2011</div><div className="vps-proof-label">Producing in Texas since</div></div>
                <div className="vps-proof-item"><div className="vps-proof-value">3</div><div className="vps-proof-label">Emmy Awards</div></div>
                <div className="vps-proof-item"><div className="vps-proof-value">15</div><div className="vps-proof-label">Telly Awards</div></div>
                <div className="vps-proof-item"><div className="vps-proof-value">One</div><div className="vps-proof-label">Team from brief to delivery</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="vps-clients" aria-label="Selected clients">
          <div className="vps-container vps-clients-inner">
            <p className="vps-clients-title">Trusted by organizations across Texas</p>
            <div className="vps-client-grid">
              {clients.map((client) => (
                <div className="vps-client" key={client.name}>
                  <Image src={client.logo} alt={client.name} width={160} height={54} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vps-section">
          <div className="vps-container">
            <div className="vps-section-head">
              <div>
                <p className="vps-eyebrow">Choose by outcome</p>
                <h2 className="vps-display vps-section-title">Start With What the Video <em>Must Do.</em></h2>
              </div>
              <p className="vps-section-intro">
                You do not need to arrive with a production vocabulary. Start with the audience,
                the business need, and where the content must work. We will shape the right approach.
              </p>
            </div>
            <div className="vps-groups">
              {serviceGroups.map((group) => (
                <article className="vps-group" key={group.number}>
                  <div className="vps-group-top">
                    <span className="vps-group-number">{group.number}</span>
                    <span className="vps-group-eyebrow">{group.eyebrow}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="vps-service-links">
                    {group.services.map(([name, href]) => (
                      <Link className="vps-service-link" href={href} key={href}>
                        {name}<span aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vps-section vps-feature">
          <div className="vps-container">
            <article className="vps-feature-grid">
              <div className="vps-feature-image">
                <Image
                  src="/images/rbfcu-bts-farmmarket.jpg"
                  alt="Media Bar Productions filming the RBFCU Go Beyond Banking campaign"
                  fill
                  sizes="(max-width: 1050px) 100vw, 55vw"
                />
              </div>
              <div className="vps-feature-copy">
                <p className="vps-eyebrow">Campaign production</p>
                <h2 className="vps-display">One Idea. <em>A Complete Content System.</em></h2>
                <p>
                  A strong production plan considers the full campaign before the first frame is captured.
                  That means building the master story, cutdowns, platform versions, captions, and delivery
                  requirements into one coordinated scope.
                </p>
                <div className="vps-feature-facts">
                  <div className="vps-feature-fact"><strong>5</strong><span>Broadcast spots</span></div>
                  <div className="vps-feature-fact"><strong>One</strong><span>Coordinated campaign</span></div>
                </div>
                <Link className="vps-inline-link" href="/work/rbfcu-go-beyond-banking">
                  Read the RBFCU case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="vps-section">
          <div className="vps-container vps-process-grid">
            <div className="vps-process-image">
              <Image
                src="/images/bts-7.jpg"
                alt="Media Bar Productions crew preparing an executive interview"
                fill
                sizes="(max-width: 1050px) 100vw, 45vw"
              />
            </div>
            <div className="vps-process-copy">
              <p className="vps-eyebrow">One accountable workflow</p>
              <h2 className="vps-display">Plan the Work. <em>Protect the Outcome.</em></h2>
              <p className="vps-process-intro">
                Every project has different creative, technical, logistical, and approval needs.
                The workflow stays clear so your team always knows what comes next.
              </p>
              <div className="vps-process-list">
                {process.map((step) => (
                  <div className="vps-process-item" key={step.number}>
                    <span className="vps-process-number">{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                ))}
              </div>
              <div className="vps-actions">
                <Link className="vps-button vps-button-secondary" href="/how-we-work">See How We Work</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="vps-section vps-locations">
          <div className="vps-container">
            <div className="vps-section-head">
              <div>
                <p className="vps-eyebrow">Texas production coverage</p>
                <h2 className="vps-display vps-section-title">Local Knowledge. <em>Statewide Reach.</em></h2>
              </div>
              <p className="vps-section-intro">
                Media Bar is based in San Antonio and produces across Texas. Explore market-specific
                capabilities, logistics, industry experience, and planning guidance.
              </p>
            </div>
            <div className="vps-location-grid">
              {locations.map(([name, href], index) => (
                <Link className="vps-location" href={href} key={href}>
                  <small>Texas market 0{index + 1}</small>
                  <strong>{name}</strong>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="vps-section">
          <div className="vps-container vps-faq-wrap">
            <div className="vps-faq-head">
              <p className="vps-eyebrow">Video production FAQ</p>
              <h2 className="vps-display">Before We Build <em>the Scope.</em></h2>
            </div>
            <div className="vps-faq">
              {videoProductionFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="vps-cta">
          <div className="vps-container">
            <p className="vps-eyebrow">Your next production</p>
            <h2 className="vps-display">Bring Us the Goal. <em>We&apos;ll Build the Plan.</em></h2>
            <p>
              Tell us who the video must reach, what it needs to accomplish, and where it needs to work.
              We will turn that into a practical production scope.
            </p>
            <div className="vps-actions">
              <Link className="vps-button vps-button-primary" href="/project-planner">Start Your Project Plan</Link>
              <a className="vps-button vps-button-secondary" href="tel:2102799442">Call 210-279-9442</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
