import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { sanAntonioFaqs } from './content'

const clients = [
  { name: 'San Antonio Spurs', logo: '/images/client-spurs.png' },
  { name: 'H-E-B', logo: '/images/client-heb.png' },
  { name: 'Frost Bank', logo: '/images/client-frost.png' },
  { name: 'RBFCU', logo: null },
]

const services = [
  {
    number: '01',
    title: 'Corporate Video',
    description: 'Brand films, executive interviews, recruiting, training, and internal communications for San Antonio organizations.',
    href: '/video-production/corporate',
  },
  {
    number: '02',
    title: 'Commercials',
    description: 'Broadcast and digital campaigns with full creative, production, and post-production support.',
    href: '/video-production/commercials',
  },
  {
    number: '03',
    title: 'Events & Conferences',
    description: 'Multi-camera coverage, fast-turnaround highlights, speaker content, and live streaming.',
    href: '/video-production/events',
  },
  {
    number: '04',
    title: 'Medical & Healthcare',
    description: 'Patient stories, provider profiles, facility content, education, and recruiting for healthcare teams.',
    href: '/video-production/medical',
  },
  {
    number: '05',
    title: 'Studio & Interviews',
    description: 'A controlled San Antonio production space for interviews, discussions, product work, and branded content.',
    href: '/studio',
  },
  {
    number: '06',
    title: 'Post-Production',
    description: 'San Antonio editing, color, sound, graphics, captions, versioning, and final delivery.',
    href: '/video-production/post-production',
  },
]

const industries = [
  ['Financial Services', 'Commercials, member stories, executive communications, and product education.'],
  ['Healthcare', 'Patient education, provider profiles, recruiting, and facility storytelling.'],
  ['Military & Defense', 'Training, recruiting, internal communications, and mission-focused stories.'],
  ['Hospitality & Food', 'Destination films, restaurant content, events, and social campaigns.'],
  ['Education', 'Enrollment, advancement, campus stories, and academic program content.'],
  ['Real Estate & Development', 'Property films, aerial coverage, construction updates, and community stories.'],
]

export default function SanAntonioPage() {
  return (
    <Layout>
      <style>{`
        .sa-page{--line:rgba(255,255,255,.1);--muted:#a0a0a4;background:#0a0a0a;color:#fff}
        .sa-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .sa-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
        .sa-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
        .sa-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none}
        .sa-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 34px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:background .18s,border-color .18s,color .18s}
        .sa-button-primary{background:var(--red);color:#fff}.sa-button-primary:hover{background:#aa0000}
        .sa-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.sa-button-secondary:hover{border-color:#fff;background:rgba(255,255,255,.05)}

        .sa-hero{position:relative;min-height:760px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--line)}
        .sa-hero-image{object-fit:cover;object-position:center 44%;filter:saturate(.82)}
        .sa-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.94) 0%,rgba(0,0,0,.72) 46%,rgba(0,0,0,.26) 78%),linear-gradient(0deg,#0a0a0a 0%,transparent 42%)}
        .sa-hero-inner{position:relative;z-index:1;width:100%;padding:178px 0 72px}
        .sa-hero-copy{max-width:860px;padding-left:32px;box-sizing:border-box}
        .sa-hero h1{font-size:clamp(60px,8.4vw,116px);margin:18px 0 24px}
        .sa-hero h1 em{display:block;color:var(--gold);font-size:.58em;margin-top:7px}
        .sa-hero-deck{max-width:680px;color:rgba(255,255,255,.74);font-size:17px;line-height:1.75}
        .sa-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}
        .sa-proof{display:grid;grid-template-columns:repeat(4,1fr);margin-top:64px;border:1px solid var(--line);background:rgba(10,10,10,.64);backdrop-filter:blur(10px)}
        .sa-proof-item{padding:21px 24px;border-right:1px solid var(--line)}
        .sa-proof-item:last-child{border-right:0}
        .sa-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;line-height:1;color:#fff;letter-spacing:.04em}
        .sa-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

        .sa-clients{background:#101010;border-bottom:1px solid var(--line)}
        .sa-clients-inner{display:grid;grid-template-columns:240px 1fr;align-items:center;min-height:132px}
        .sa-clients-title{color:#676767;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .sa-client-grid{display:grid;grid-template-columns:repeat(4,1fr);height:100%;border-left:1px solid var(--line)}
        .sa-client{display:flex;align-items:center;justify-content:center;padding:22px;border-right:1px solid var(--line)}
        .sa-client:last-child{border-right:0}
        .sa-client img{max-height:44px;width:auto;object-fit:contain;filter:grayscale(1) brightness(.72);transition:filter .2s}
        .sa-client:hover img{filter:none}
        .sa-client-name{font-family:'Bebas Neue',Impact,sans-serif;color:#8b8b8d;font-size:30px;letter-spacing:.08em;transition:color .2s}
        .sa-client:hover .sa-client-name{color:#fff}

        .sa-section{padding:108px 0;border-bottom:1px solid var(--line)}
        .sa-section-head{display:grid;grid-template-columns:.55fr 1fr;gap:70px;align-items:end;margin-bottom:54px}
        .sa-section-title{font-size:clamp(48px,6vw,78px);margin-top:13px}
        .sa-section-intro{max-width:650px;color:var(--muted);font-size:16px;line-height:1.75}
        .sa-services{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .sa-service{min-height:310px;display:flex;flex-direction:column;justify-content:space-between;padding:31px 27px;background:#141414;transition:background .18s}
        .sa-service:hover{background:#1b1b1b}
        .sa-service-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:18px;letter-spacing:.08em}
        .sa-service h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;font-weight:400;letter-spacing:.04em;line-height:1.05;color:#fff;margin:42px 0 14px}
        .sa-service p{color:#888;font-size:13px;line-height:1.65}
        .sa-service-link{display:flex;align-items:center;justify-content:space-between;margin-top:28px;color:#777;font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;transition:color .18s}
        .sa-service:hover .sa-service-link{color:var(--red)}

        .sa-case-study{background:#111}
        .sa-case-card{display:grid;grid-template-columns:1.12fr .88fr;min-height:620px;border:1px solid var(--line);background:#151515;overflow:hidden}
        .sa-case-image{position:relative;min-height:520px}
        .sa-case-image img{object-fit:cover}
        .sa-case-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .sa-case-copy h2{font-size:clamp(48px,5vw,72px);margin:16px 0 22px}
        .sa-case-copy h2 em{display:block;color:var(--gold);font-size:.56em;margin-top:8px}
        .sa-case-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
        .sa-case-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);margin:32px 0}
        .sa-case-stat{padding:16px 10px;text-align:center;background:#101010}
        .sa-case-stat strong{display:block;font-family:'Bebas Neue',Impact,sans-serif;font-size:27px;line-height:1}
        .sa-case-stat span{display:block;margin-top:6px;color:#777;font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
        .sa-inline-link{color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .sa-inline-link span{color:var(--red);margin-left:8px}

        .sa-local-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:72px;align-items:center}
        .sa-local-image{position:relative;min-height:620px;overflow:hidden}
        .sa-local-image img{object-fit:cover}
        .sa-local-copy h2{font-size:clamp(50px,6vw,80px);margin:15px 0 24px}
        .sa-local-copy>p{color:var(--muted);font-size:16px;line-height:1.8}
        .sa-advantages{margin:34px 0;border-top:1px solid var(--line)}
        .sa-advantage{display:grid;grid-template-columns:40px 1fr;gap:18px;padding:21px 0;border-bottom:1px solid var(--line)}
        .sa-advantage-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:19px}
        .sa-advantage h3{font-size:14px;color:#fff;margin-bottom:5px}
        .sa-advantage p{color:#808084;font-size:13px;line-height:1.6}

        .sa-industries{background:#111}
        .sa-industry-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .sa-industry{padding:30px;background:#151515}
        .sa-industry h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:23px;font-weight:400;letter-spacing:.04em;color:#fff}
        .sa-industry p{margin-top:10px;color:#8d8d91;font-size:13px;line-height:1.65}

        .sa-faq-wrap{max-width:940px;margin:0 auto}
        .sa-faq-head{text-align:center;margin-bottom:48px}
        .sa-faq-head h2{font-size:clamp(50px,6vw,76px);margin-top:14px}
        .sa-faq{border-top:1px solid var(--line)}
        .sa-faq details{border-bottom:1px solid var(--line)}
        .sa-faq summary{display:flex;justify-content:space-between;gap:24px;padding:25px 0;cursor:pointer;list-style:none;color:#eee;font-size:16px;font-weight:600}
        .sa-faq summary::-webkit-details-marker{display:none}
        .sa-faq summary::after{content:'+';color:var(--red);font-size:22px;font-weight:400}
        .sa-faq details[open] summary::after{content:'-'}
        .sa-faq details p{max-width:790px;padding:0 48px 25px 0;color:#929296;font-size:14px;line-height:1.75}

        .sa-cta{padding:116px 0;text-align:center;background:radial-gradient(circle at 50% 50%,rgba(204,0,0,.15),transparent 42%),#101010}
        .sa-cta h2{font-size:clamp(56px,8vw,104px)}
        .sa-cta h2 em{color:#fff}
        .sa-cta p{margin:22px auto 0;max-width:620px;color:#9c9ca0;font-size:16px;line-height:1.7}
        .sa-cta .sa-actions{justify-content:center}

        @media(max-width:1100px){
          .sa-services{grid-template-columns:repeat(3,1fr)}
          .sa-section-head{grid-template-columns:1fr;gap:24px}
          .sa-case-card,.sa-local-grid{grid-template-columns:1fr}
          .sa-local-image{min-height:480px}
        }
        @media(max-width:760px){
          .sa-container{width:min(100% - 40px,1240px)}
          .sa-hero{min-height:720px}
          .sa-hero-inner{padding:140px 0 42px}
          .sa-hero-scrim{background:linear-gradient(0deg,rgba(0,0,0,.96) 0%,rgba(0,0,0,.52) 75%),linear-gradient(90deg,rgba(0,0,0,.7),transparent)}
          .sa-hero h1{font-size:56px}
          .sa-hero-copy{padding-left:0}
          .sa-proof{grid-template-columns:repeat(2,1fr);margin-top:42px}
          .sa-proof-item:nth-child(2){border-right:0}
          .sa-proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .sa-clients-inner{grid-template-columns:1fr;padding-top:24px}
          .sa-clients-title{text-align:center;padding-bottom:20px}
          .sa-client-grid{grid-template-columns:repeat(2,1fr);border-left:0;border-top:1px solid var(--line)}
          .sa-client:nth-child(2){border-right:0}.sa-client:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .sa-section{padding:76px 0}
          .sa-services,.sa-industry-grid{grid-template-columns:1fr}
          .sa-service{min-height:260px}
          .sa-case-copy{padding:38px 25px}
          .sa-case-image{min-height:340px}
          .sa-local-grid{gap:42px}
          .sa-local-image{min-height:360px}
          .sa-case-stats{grid-template-columns:1fr}
          .sa-actions{flex-direction:column}
          .sa-button{width:100%}
          .sa-faq summary{font-size:15px}
        }
      `}</style>

      <main className="sa-page">
        <section className="sa-hero">
          <Image
            className="sa-hero-image"
            src="/images/clients-bts-4.jpg"
            alt="Media Bar Productions filming an interview on location in San Antonio"
            fill
            priority
            sizes="100vw"
          />
          <div className="sa-hero-scrim" />
          <div className="sa-container sa-hero-inner">
            <div className="sa-hero-copy">
              <p className="sa-eyebrow">A local video production company since 2011</p>
              <h1 className="sa-display">
                Video Production Company
                <em>Built in San Antonio.</em>
              </h1>
              <p className="sa-hero-deck">
                From first idea to final delivery, Media Bar gives San Antonio organizations a local
                crew, studio support, and one experienced team for filming and post-production.
              </p>
              <div className="sa-actions">
                <Link className="sa-button sa-button-primary" href="/project-planner">Plan Your Project</Link>
                <Link className="sa-button sa-button-secondary" href="/work">See San Antonio Work</Link>
              </div>
            </div>
            <div className="sa-proof" aria-label="Media Bar Productions credentials">
              {[
                ['2011', 'Producing in San Antonio since'],
                ['3', 'Emmy Awards'],
                ['15', 'Telly Awards'],
                ['Local', 'Studio and Crew'],
              ].map(([value, label]) => (
                <div className="sa-proof-item" key={label}>
                  <div className="sa-proof-value">{value}</div>
                  <div className="sa-proof-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sa-clients" aria-label="Selected San Antonio clients">
          <div className="sa-container sa-clients-inner">
            <p className="sa-clients-title">Trusted by San Antonio organizations</p>
            <div className="sa-client-grid">
              {clients.map((client) => (
                <div className="sa-client" key={client.name}>
                  {client.logo ? (
                    <Image src={client.logo} alt={client.name} width={160} height={54} sizes="160px" />
                  ) : (
                    <span className="sa-client-name">{client.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sa-section">
          <div className="sa-container">
            <div className="sa-section-head">
              <div>
                <p className="sa-eyebrow">Services for San Antonio</p>
                <h2 className="sa-display sa-section-title">One Local Team. <em>Every Frame.</em></h2>
              </div>
              <p className="sa-section-intro">
                We handle creative development, production, editing, color, audio, motion graphics,
                captions, and final delivery. You get one accountable team and a project plan that
                stays visible from kickoff through completion.
              </p>
            </div>
            <div className="sa-services">
              {services.map((service) => (
                <Link className="sa-service" href={service.href} key={service.href}>
                  <div>
                    <span className="sa-service-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="sa-service-link">Explore service <span aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sa-section sa-case-study">
          <div className="sa-container">
            <article className="sa-case-card">
              <div className="sa-case-image">
                <Image
                  src="/images/rbfcu-bts-riverside.jpg"
                  alt="Media Bar Productions filming the RBFCU Go Beyond Banking campaign"
                  fill
                  sizes="(max-width: 1100px) 100vw, 56vw"
                />
              </div>
              <div className="sa-case-copy">
                <p className="sa-eyebrow">Featured San Antonio work</p>
                <h2 className="sa-display">RBFCU <em>Go Beyond Banking</em></h2>
                <p>
                  A five-commercial broadcast campaign created for one of Texas&apos;s largest credit
                  unions, produced and finished by Media Bar and aired across four Texas markets.
                </p>
                <div className="sa-case-stats">
                  <div className="sa-case-stat"><strong>5</strong><span>Broadcast spots</span></div>
                  <div className="sa-case-stat"><strong>4</strong><span>Texas markets</span></div>
                  <div className="sa-case-stat"><strong>5M+</strong><span>Online views</span></div>
                </div>
                <Link className="sa-inline-link" href="/work/rbfcu-go-beyond-banking">
                  Read the case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="sa-section">
          <div className="sa-container sa-local-grid">
            <div className="sa-local-image">
              <Image
                src="/images/bts-spurs-coyote.jpg"
                alt="Media Bar Productions camera operator filming with the San Antonio Spurs Coyote"
                fill
                sizes="(max-width: 1100px) 100vw, 42vw"
              />
            </div>
            <div className="sa-local-copy">
              <p className="sa-eyebrow">The local production advantage</p>
              <h2 className="sa-display">We Know the City. <em>And the Work.</em></h2>
              <p>
                Local experience makes production simpler. We understand San Antonio locations,
                venue logistics, weather, travel patterns, and the pace required to keep a real
                organization moving while cameras are on site.
              </p>
              <div className="sa-advantages">
                {[
                  ['01', 'Local crew and production base', 'A San Antonio team that can scout, plan, and respond without flying in cold.'],
                  ['02', 'Studio and location options', 'Controlled interviews in our studio or full production at your office, facility, venue, or outdoor location.'],
                  ['03', 'Texas-wide reach', 'The same team can extend a San Antonio campaign into Austin, Dallas, Houston, and markets across Texas.'],
                ].map(([number, title, description]) => (
                  <div className="sa-advantage" key={number}>
                    <span className="sa-advantage-number">{number}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </div>
                ))}
              </div>
              <Link className="sa-inline-link" href="/how-we-work">
                See how we work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="sa-section sa-industries">
          <div className="sa-container">
            <div className="sa-section-head">
              <div>
                <p className="sa-eyebrow">Local industry experience</p>
                <h2 className="sa-display sa-section-title">Stories for the <em>City We Serve.</em></h2>
              </div>
              <p className="sa-section-intro">
                San Antonio&apos;s economy is broad, and each audience expects something different.
                We adapt the production plan to your industry, approvals, environment, and distribution needs.
              </p>
            </div>
            <div className="sa-industry-grid">
              {industries.map(([title, description]) => (
                <article className="sa-industry" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sa-section">
          <div className="sa-container sa-faq-wrap">
            <div className="sa-faq-head">
              <p className="sa-eyebrow">San Antonio video production FAQ</p>
              <h2 className="sa-display">Straight Answers. <em>Before We Roll.</em></h2>
            </div>
            <div className="sa-faq">
              {sanAntonioFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="sa-cta">
          <div className="sa-container">
            <p className="sa-eyebrow">Your next San Antonio production</p>
            <h2 className="sa-display">Let&apos;s Build Something <em>Worth Watching.</em></h2>
            <p>Tell us what the video needs to accomplish. We will help shape the right scope, schedule, and production plan.</p>
            <div className="sa-actions">
              <Link className="sa-button sa-button-primary" href="/project-planner">Start Your Project Plan</Link>
              <a className="sa-button sa-button-secondary" href="tel:2102799442">Call 210-279-9442</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
