import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { dallasFaqs } from './content'

const clients = [
  { name: 'Carrier', logo: '/images/client-carrier.png' },
  { name: 'Frost Bank', logo: '/images/client-frost.png' },
  { name: 'Texas Tech', logo: '/images/client-texas-tech.png' },
  { name: 'Unilever', logo: '/images/client-unilever.png' },
]

const services = [
  {
    number: '01',
    title: 'Corporate Video',
    description: 'Enterprise brand films, leadership communications, recruiting, training, and customer stories.',
    href: '/video-production/corporate',
  },
  {
    number: '02',
    title: 'Commercials',
    description: 'Broadcast and digital campaigns with creative development, production, finishing, and delivery.',
    href: '/video-production/commercials',
  },
  {
    number: '03',
    title: 'Events & Conferences',
    description: 'Multi-camera coverage, speaker content, sponsor deliverables, recaps, and social cutdowns.',
    href: '/video-production/events',
  },
  {
    number: '04',
    title: 'Live Streaming',
    description: 'Reliable production for town halls, panels, launches, conferences, and hybrid audiences.',
    href: '/video-production/live-streaming',
  },
  {
    number: '05',
    title: 'Post-Production',
    description: 'Editing, color, audio, motion graphics, captions, versioning, and delivery for every channel.',
    href: '/video-production/post-production',
  },
]

const industries = [
  ['Financial & Professional Services', 'Leadership communications, customer proof, recruiting, product education, and brand campaigns.'],
  ['Aviation & Logistics', 'Operations stories, safety and training, recruiting, facility content, and executive interviews.'],
  ['Healthcare Systems', 'Patient education, provider profiles, internal communications, recruiting, and facility stories.'],
  ['Manufacturing & Defense', 'Technical demonstrations, process stories, safety, training, and workforce communications.'],
  ['Real Estate & Construction', 'Development films, aerial coverage, progress documentation, leasing, and community stories.'],
  ['Associations & Conferences', 'Speaker content, event coverage, sponsor activations, live streams, and post-event campaigns.'],
]

export default function DallasPage() {
  return (
    <Layout>
      <style>{`
        .dfw-page{--line:rgba(255,255,255,.1);--muted:#a0a0a4;background:#0a0a0a;color:#fff}
        .dfw-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .dfw-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
        .dfw-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
        .dfw-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none}
        .dfw-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 34px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:background .18s,border-color .18s}
        .dfw-button-primary{background:var(--red);color:#fff}.dfw-button-primary:hover{background:#aa0000}
        .dfw-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.dfw-button-secondary:hover{border-color:#fff;background:rgba(255,255,255,.05)}

        .dfw-hero{position:relative;min-height:760px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--line)}
        .dfw-hero-image{object-fit:cover;object-position:center 45%;filter:saturate(.75)}
        .dfw-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.96) 0%,rgba(0,0,0,.78) 48%,rgba(0,0,0,.2) 84%),linear-gradient(0deg,#0a0a0a 0%,transparent 42%)}
        .dfw-hero-inner{position:relative;z-index:1;width:100%;padding:178px 0 72px}
        .dfw-hero-copy{max-width:910px;padding-left:32px;box-sizing:border-box}
        .dfw-hero h1{font-size:clamp(58px,7.8vw,108px);margin:18px 0 24px}
        .dfw-hero h1 em{display:block;color:var(--gold);font-size:.58em;margin-top:8px}
        .dfw-hero-deck{max-width:700px;color:rgba(255,255,255,.76);font-size:17px;line-height:1.75}
        .dfw-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}
        .dfw-proof{display:grid;grid-template-columns:repeat(4,1fr);margin-top:64px;border:1px solid var(--line);background:rgba(10,10,10,.7);backdrop-filter:blur(10px)}
        .dfw-proof-item{padding:21px 24px;border-right:1px solid var(--line)}
        .dfw-proof-item:last-child{border-right:0}
        .dfw-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;line-height:1;letter-spacing:.04em}
        .dfw-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

        .dfw-clients{background:#101010;border-bottom:1px solid var(--line)}
        .dfw-clients-inner{display:grid;grid-template-columns:240px 1fr;align-items:center;min-height:132px}
        .dfw-clients-title{color:#676767;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .dfw-client-grid{display:grid;grid-template-columns:repeat(4,1fr);height:100%;border-left:1px solid var(--line)}
        .dfw-client{display:flex;align-items:center;justify-content:center;padding:22px;border-right:1px solid var(--line)}
        .dfw-client:last-child{border-right:0}
        .dfw-client img{max-height:44px;width:auto;object-fit:contain;filter:grayscale(1) brightness(.72);transition:filter .2s}
        .dfw-client:hover img{filter:none}

        .dfw-section{padding:108px 0;border-bottom:1px solid var(--line)}
        .dfw-section-head{display:grid;grid-template-columns:.55fr 1fr;gap:70px;align-items:end;margin-bottom:54px}
        .dfw-section-title{font-size:clamp(48px,6vw,78px);margin-top:13px}
        .dfw-section-intro{max-width:650px;color:var(--muted);font-size:16px;line-height:1.75}
        .dfw-services{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .dfw-service{min-height:310px;display:flex;flex-direction:column;justify-content:space-between;padding:31px 27px;background:#141414;transition:background .18s}
        .dfw-service:hover{background:#1b1b1b}
        .dfw-service-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:18px;letter-spacing:.08em}
        .dfw-service h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;font-weight:400;letter-spacing:.04em;line-height:1.05;color:#fff;margin:42px 0 14px}
        .dfw-service p{color:#888;font-size:13px;line-height:1.65}
        .dfw-service-link{display:flex;align-items:center;justify-content:space-between;margin-top:28px;color:#777;font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;transition:color .18s}
        .dfw-service:hover .dfw-service-link{color:var(--red)}

        .dfw-case-study{background:#111}
        .dfw-case-card{display:grid;grid-template-columns:1.08fr .92fr;min-height:620px;border:1px solid var(--line);background:#151515;overflow:hidden}
        .dfw-case-image{position:relative;min-height:520px}
        .dfw-case-image img{object-fit:cover}
        .dfw-case-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .dfw-case-copy h2{font-size:clamp(48px,5vw,72px);margin:16px 0 22px}
        .dfw-case-copy h2 em{display:block;color:var(--gold);font-size:.56em;margin-top:8px}
        .dfw-case-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
        .dfw-case-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);margin:32px 0}
        .dfw-case-stat{padding:16px 10px;text-align:center;background:#101010}
        .dfw-case-stat strong{display:block;font-family:'Bebas Neue',Impact,sans-serif;font-size:27px;line-height:1}
        .dfw-case-stat span{display:block;margin-top:6px;color:#777;font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
        .dfw-inline-link{color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .dfw-inline-link span{color:var(--red);margin-left:8px}

        .dfw-operations-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:72px;align-items:center}
        .dfw-operations-image{position:relative;min-height:620px;overflow:hidden}
        .dfw-operations-image img{object-fit:cover}
        .dfw-operations-copy h2{font-size:clamp(50px,6vw,80px);margin:15px 0 24px}
        .dfw-operations-copy>p{color:var(--muted);font-size:16px;line-height:1.8}
        .dfw-advantages{margin:34px 0;border-top:1px solid var(--line)}
        .dfw-advantage{display:grid;grid-template-columns:40px 1fr;gap:18px;padding:21px 0;border-bottom:1px solid var(--line)}
        .dfw-advantage-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:19px}
        .dfw-advantage h3{font-size:14px;color:#fff;margin-bottom:5px}
        .dfw-advantage p{color:#808084;font-size:13px;line-height:1.6}

        .dfw-industries{background:#111}
        .dfw-industry-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .dfw-industry{padding:30px;background:#151515}
        .dfw-industry h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:23px;font-weight:400;letter-spacing:.04em;color:#fff}
        .dfw-industry p{margin-top:10px;color:#8d8d91;font-size:13px;line-height:1.65}

        .dfw-faq-wrap{max-width:940px;margin:0 auto}
        .dfw-faq-head{text-align:center;margin-bottom:48px}
        .dfw-faq-head h2{font-size:clamp(50px,6vw,76px);margin-top:14px}
        .dfw-faq{border-top:1px solid var(--line)}
        .dfw-faq details{border-bottom:1px solid var(--line)}
        .dfw-faq summary{display:flex;justify-content:space-between;gap:24px;padding:25px 0;cursor:pointer;list-style:none;color:#eee;font-size:16px;font-weight:600}
        .dfw-faq summary::-webkit-details-marker{display:none}
        .dfw-faq summary::after{content:'+';color:var(--red);font-size:22px;font-weight:400}
        .dfw-faq details[open] summary::after{content:'-'}
        .dfw-faq details p{max-width:790px;padding:0 48px 25px 0;color:#929296;font-size:14px;line-height:1.75}

        .dfw-cta{padding:116px 0;text-align:center;background:radial-gradient(circle at 50% 50%,rgba(204,0,0,.15),transparent 42%),#101010}
        .dfw-cta h2{font-size:clamp(56px,8vw,104px)}
        .dfw-cta p{margin:22px auto 0;max-width:620px;color:#9c9ca0;font-size:16px;line-height:1.7}
        .dfw-cta .dfw-actions{justify-content:center}

        @media(max-width:1100px){
          .dfw-services{grid-template-columns:repeat(3,1fr)}
          .dfw-section-head{grid-template-columns:1fr;gap:24px}
          .dfw-case-card,.dfw-operations-grid{grid-template-columns:1fr}
          .dfw-operations-image{min-height:480px}
        }
        @media(max-width:760px){
          .dfw-container{width:min(100% - 40px,1240px)}
          .dfw-hero{min-height:720px}
          .dfw-hero-inner{padding:140px 0 42px}
          .dfw-hero-copy{padding-left:0}
          .dfw-hero-scrim{background:linear-gradient(0deg,rgba(0,0,0,.97) 0%,rgba(0,0,0,.5) 78%),linear-gradient(90deg,rgba(0,0,0,.74),transparent)}
          .dfw-hero h1{font-size:49px}
          .dfw-proof{grid-template-columns:repeat(2,1fr);margin-top:42px}
          .dfw-proof-item:nth-child(2){border-right:0}
          .dfw-proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .dfw-clients-inner{grid-template-columns:1fr;padding-top:24px}
          .dfw-clients-title{text-align:center;padding-bottom:20px}
          .dfw-client-grid{grid-template-columns:repeat(2,1fr);border-left:0;border-top:1px solid var(--line)}
          .dfw-client:nth-child(2){border-right:0}.dfw-client:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .dfw-section{padding:76px 0}
          .dfw-services,.dfw-industry-grid{grid-template-columns:1fr}
          .dfw-service{min-height:260px}
          .dfw-case-copy{padding:38px 25px}
          .dfw-case-image{min-height:340px}
          .dfw-operations-grid{gap:42px}
          .dfw-operations-image{min-height:360px}
          .dfw-case-stats{grid-template-columns:1fr}
          .dfw-faq summary{font-size:14px}
          .dfw-cta{padding:82px 0}
          .dfw-button{width:100%}
        }
      `}</style>

      <main className="dfw-page">
        <section className="dfw-hero">
          <Image
            className="dfw-hero-image"
            src="/images/clients-bts-9.jpg"
            alt="Multi-camera Media Bar Productions crew filming a healthcare discussion in Texas"
            fill
            priority
            sizes="100vw"
          />
          <div className="dfw-hero-scrim" />
          <div className="dfw-container dfw-hero-inner">
            <div className="dfw-hero-copy">
              <p className="dfw-eyebrow">Full-service Dallas-Fort Worth video production</p>
              <h1 className="dfw-display">
                DFW Video Production
                <em>Built for Complex Briefs.</em>
              </h1>
              <p className="dfw-hero-deck">
                Media Bar gives Dallas-Fort Worth organizations one experienced Texas production
                team for corporate films, commercials, events, live streams, and multi-market
                campaigns. We manage the creative, logistics, approvals, and delivery as one system.
              </p>
              <div className="dfw-actions">
                <Link className="dfw-button dfw-button-primary" href="/project-planner">Plan Your DFW Project</Link>
                <Link className="dfw-button dfw-button-secondary" href="/work">See Our Work</Link>
              </div>
            </div>
            <div className="dfw-proof">
              {[
                ['2011', 'Producing in Texas since'],
                ['3', 'Emmy Awards'],
                ['15', 'Telly Awards'],
                ['One', 'Team from brief to delivery'],
              ].map(([value, label]) => (
                <div className="dfw-proof-item" key={label}>
                  <div className="dfw-proof-value">{value}</div>
                  <div className="dfw-proof-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dfw-clients" aria-label="Selected Texas clients">
          <div className="dfw-container dfw-clients-inner">
            <p className="dfw-clients-title">Trusted by organizations across Texas</p>
            <div className="dfw-client-grid">
              {clients.map((client) => (
                <div className="dfw-client" key={client.name}>
                  <Image src={client.logo} alt={client.name} width={160} height={54} sizes="160px" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dfw-section">
          <div className="dfw-container">
            <div className="dfw-section-head">
              <div>
                <p className="dfw-eyebrow">Services for DFW organizations</p>
                <h2 className="dfw-display dfw-section-title">Enterprise Quality. <em>Direct Access.</em></h2>
              </div>
              <p className="dfw-section-intro">
                You work directly with the producers responsible for the outcome. We translate the
                brief into a production plan, coordinate the moving parts, and deliver the master
                assets and versions your teams actually need.
              </p>
            </div>
            <div className="dfw-services">
              {services.map((service) => (
                <Link className="dfw-service" href={service.href} key={service.href}>
                  <div>
                    <span className="dfw-service-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="dfw-service-link">Explore service <span aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="dfw-section dfw-case-study">
          <div className="dfw-container">
            <article className="dfw-case-card">
              <div className="dfw-case-image">
                <Image
                  src="/images/rbfcu-bts-farmmarket.jpg"
                  alt="Media Bar Productions filming an RBFCU commercial at a Texas farmers market"
                  fill
                  sizes="(max-width: 1100px) 100vw, 54vw"
                />
              </div>
              <div className="dfw-case-copy">
                <p className="dfw-eyebrow">Campaign work delivered in DFW</p>
                <h2 className="dfw-display">RBFCU <em>Go Beyond Banking</em></h2>
                <p>
                  Five broadcast commercials planned and produced as one campaign, then delivered
                  into Dallas-Fort Worth and three additional Texas markets with consistent
                  creative, finishing, and version control.
                </p>
                <div className="dfw-case-stats">
                  <div className="dfw-case-stat"><strong>5</strong><span>Broadcast spots</span></div>
                  <div className="dfw-case-stat"><strong>4</strong><span>Texas markets</span></div>
                  <div className="dfw-case-stat"><strong>5M+</strong><span>Online views</span></div>
                </div>
                <Link className="dfw-inline-link" href="/work/rbfcu-go-beyond-banking">
                  Read the case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="dfw-section">
          <div className="dfw-container dfw-operations-grid">
            <div className="dfw-operations-image">
              <Image
                src="/images/bts-dsc-1.jpg"
                alt="Media Bar Productions crew member coordinating a multi-camera production"
                fill
                sizes="(max-width: 1100px) 100vw, 44vw"
              />
            </div>
            <div className="dfw-operations-copy">
              <p className="dfw-eyebrow">Texas-wide production, tightly managed</p>
              <h2 className="dfw-display">More Moving Parts. <em>One Clear Plan.</em></h2>
              <p>
                DFW productions often involve multiple offices, stakeholders, facilities, or
                release formats. We define ownership, approvals, logistics, and deliverables before
                the shoot so production day stays focused and post-production stays predictable.
              </p>
              <div className="dfw-advantages">
                {[
                  ['01', 'Scalable Texas crews', 'We build the right crew for a focused interview, facility story, commercial, conference, or live production.'],
                  ['02', 'Stakeholder-ready workflow', 'Review rounds, decision-makers, deadlines, and version requirements are mapped before editing begins.'],
                  ['03', 'Multi-location consistency', 'One visual and production system can carry across Dallas, Fort Worth, San Antonio, Austin, and other markets.'],
                ].map(([number, title, description]) => (
                  <div className="dfw-advantage" key={title}>
                    <span className="dfw-advantage-number">{number}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </div>
                ))}
              </div>
              <Link className="dfw-inline-link" href="/how-we-work">See how we work <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="dfw-section dfw-industries">
          <div className="dfw-container">
            <div className="dfw-section-head">
              <div>
                <p className="dfw-eyebrow">Dallas-Fort Worth industry focus</p>
                <h2 className="dfw-display dfw-section-title">Content That Can <em>Move Through the Business.</em></h2>
              </div>
              <p className="dfw-section-intro">
                The best production plan accounts for more than the shoot. We shape the story,
                crew, access, approvals, and deliverables around your industry and the people who
                need to use the final content.
              </p>
            </div>
            <div className="dfw-industry-grid">
              {industries.map(([title, description]) => (
                <article className="dfw-industry" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dfw-section">
          <div className="dfw-container dfw-faq-wrap">
            <div className="dfw-faq-head">
              <p className="dfw-eyebrow">Dallas-Fort Worth video production FAQ</p>
              <h2 className="dfw-display">Before the <em>Production Starts.</em></h2>
            </div>
            <div className="dfw-faq">
              {dallasFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="dfw-cta">
          <div className="dfw-container">
            <p className="dfw-eyebrow">Your next DFW production</p>
            <h2 className="dfw-display">Bring Us the Brief. <em>We&apos;ll Build the Plan.</em></h2>
            <p>Tell us what the content needs to accomplish, who needs to approve it, and where it needs to go. We will shape the scope from there.</p>
            <div className="dfw-actions">
              <Link className="dfw-button dfw-button-primary" href="/project-planner">Start Your Project Plan</Link>
              <a className="dfw-button dfw-button-secondary" href="tel:2102799442">Call 210-279-9442</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
