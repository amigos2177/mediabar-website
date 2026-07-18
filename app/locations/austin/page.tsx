import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { austinFaqs } from './content'

const clients = [
  { name: 'H-E-B', logo: '/images/client-heb.png' },
  { name: 'Frost Bank', logo: '/images/client-frost.png' },
  { name: 'Texas Tech', logo: '/images/client-texas-tech.png' },
  { name: 'Unilever', logo: '/images/client-unilever.png' },
]

const services = [
  {
    number: '01',
    title: 'Corporate Video',
    description: 'Brand films, product stories, executive interviews, recruiting, training, and internal communications.',
    href: '/video-production/corporate',
  },
  {
    number: '02',
    title: 'Commercials',
    description: 'Broadcast and digital campaigns with creative, production, post-production, and delivery under one roof.',
    href: '/video-production/commercials',
  },
  {
    number: '03',
    title: 'Events & Conferences',
    description: 'Multi-camera coverage, speaker content, sponsor activations, recaps, and fast-turnaround edits.',
    href: '/video-production/events',
  },
  {
    number: '04',
    title: 'Interview Production',
    description: 'Executive, customer, founder, and expert interviews produced on location or in a controlled setup.',
    href: '/video-production/interview',
  },
  {
    number: '05',
    title: 'Live Streaming',
    description: 'Reliable multi-camera production for town halls, launches, panels, conferences, and hybrid audiences.',
    href: '/video-production/live-streaming',
  },
]

const industries = [
  ['Technology & SaaS', 'Product stories, customer proof, recruiting, explainers, launches, and executive communications.'],
  ['Advanced Manufacturing', 'Facility stories, process demonstrations, safety, recruiting, and technical interviews.'],
  ['Higher Education', 'Enrollment, research, advancement, campus stories, and academic program content.'],
  ['Government & Public Sector', 'Public information, program explainers, stakeholder interviews, and event coverage.'],
  ['Healthcare & Life Sciences', 'Patient education, provider profiles, research stories, and recruiting content.'],
  ['Events & Hospitality', 'Conference coverage, sponsor content, destination films, recaps, and social cutdowns.'],
]

export default function AustinPage() {
  return (
    <Layout>
      <style>{`
        .atx-page{--line:rgba(255,255,255,.1);--muted:#a0a0a4;background:#0a0a0a;color:#fff}
        .atx-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .atx-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
        .atx-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
        .atx-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none}
        .atx-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 34px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:background .18s,border-color .18s}
        .atx-button-primary{background:var(--red);color:#fff}.atx-button-primary:hover{background:#aa0000}
        .atx-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.atx-button-secondary:hover{border-color:#fff;background:rgba(255,255,255,.05)}

        .atx-hero{position:relative;min-height:760px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--line)}
        .atx-hero-image{object-fit:cover;object-position:center 44%;filter:saturate(.82)}
        .atx-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.95) 0%,rgba(0,0,0,.74) 47%,rgba(0,0,0,.2) 82%),linear-gradient(0deg,#0a0a0a 0%,transparent 42%)}
        .atx-hero-inner{position:relative;z-index:1;width:100%;padding:178px 0 72px}
        .atx-hero-copy{max-width:900px;padding-left:32px;box-sizing:border-box}
        .atx-hero h1{font-size:clamp(60px,8.2vw,112px);margin:18px 0 24px}
        .atx-hero h1 em{display:block;color:var(--gold);font-size:.57em;margin-top:8px}
        .atx-hero-deck{max-width:690px;color:rgba(255,255,255,.76);font-size:17px;line-height:1.75}
        .atx-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}
        .atx-proof{display:grid;grid-template-columns:repeat(4,1fr);margin-top:64px;border:1px solid var(--line);background:rgba(10,10,10,.68);backdrop-filter:blur(10px)}
        .atx-proof-item{padding:21px 24px;border-right:1px solid var(--line)}
        .atx-proof-item:last-child{border-right:0}
        .atx-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;line-height:1;letter-spacing:.04em}
        .atx-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

        .atx-clients{background:#101010;border-bottom:1px solid var(--line)}
        .atx-clients-inner{display:grid;grid-template-columns:240px 1fr;align-items:center;min-height:132px}
        .atx-clients-title{color:#676767;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .atx-client-grid{display:grid;grid-template-columns:repeat(4,1fr);height:100%;border-left:1px solid var(--line)}
        .atx-client{display:flex;align-items:center;justify-content:center;padding:22px;border-right:1px solid var(--line)}
        .atx-client:last-child{border-right:0}
        .atx-client img{max-height:44px;width:auto;object-fit:contain;filter:grayscale(1) brightness(.72);transition:filter .2s}
        .atx-client:hover img{filter:none}

        .atx-section{padding:108px 0;border-bottom:1px solid var(--line)}
        .atx-section-head{display:grid;grid-template-columns:.55fr 1fr;gap:70px;align-items:end;margin-bottom:54px}
        .atx-section-title{font-size:clamp(48px,6vw,78px);margin-top:13px}
        .atx-section-intro{max-width:650px;color:var(--muted);font-size:16px;line-height:1.75}
        .atx-services{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .atx-service{min-height:310px;display:flex;flex-direction:column;justify-content:space-between;padding:31px 27px;background:#141414;transition:background .18s}
        .atx-service:hover{background:#1b1b1b}
        .atx-service-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:18px;letter-spacing:.08em}
        .atx-service h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;font-weight:400;letter-spacing:.04em;line-height:1.05;color:#fff;margin:42px 0 14px}
        .atx-service p{color:#888;font-size:13px;line-height:1.65}
        .atx-service-link{display:flex;align-items:center;justify-content:space-between;margin-top:28px;color:#777;font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;transition:color .18s}
        .atx-service:hover .atx-service-link{color:var(--red)}

        .atx-case-study{background:#111}
        .atx-case-card{display:grid;grid-template-columns:1.08fr .92fr;min-height:620px;border:1px solid var(--line);background:#151515;overflow:hidden}
        .atx-case-image{position:relative;min-height:520px}
        .atx-case-image img{object-fit:cover}
        .atx-case-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .atx-case-copy h2{font-size:clamp(48px,5vw,72px);margin:16px 0 22px}
        .atx-case-copy h2 em{display:block;color:var(--gold);font-size:.56em;margin-top:8px}
        .atx-case-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
        .atx-case-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);margin:32px 0}
        .atx-case-stat{padding:16px 10px;text-align:center;background:#101010}
        .atx-case-stat strong{display:block;font-family:'Bebas Neue',Impact,sans-serif;font-size:27px;line-height:1}
        .atx-case-stat span{display:block;margin-top:6px;color:#777;font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
        .atx-inline-link{color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .atx-inline-link span{color:var(--red);margin-left:8px}

        .atx-corridor-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:72px;align-items:center}
        .atx-corridor-image{position:relative;min-height:620px;overflow:hidden}
        .atx-corridor-image img{object-fit:cover}
        .atx-corridor-copy h2{font-size:clamp(50px,6vw,80px);margin:15px 0 24px}
        .atx-corridor-copy>p{color:var(--muted);font-size:16px;line-height:1.8}
        .atx-advantages{margin:34px 0;border-top:1px solid var(--line)}
        .atx-advantage{display:grid;grid-template-columns:40px 1fr;gap:18px;padding:21px 0;border-bottom:1px solid var(--line)}
        .atx-advantage-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:19px}
        .atx-advantage h3{font-size:14px;color:#fff;margin-bottom:5px}
        .atx-advantage p{color:#808084;font-size:13px;line-height:1.6}

        .atx-industries{background:#111}
        .atx-industry-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .atx-industry{padding:30px;background:#151515}
        .atx-industry h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:23px;font-weight:400;letter-spacing:.04em;color:#fff}
        .atx-industry p{margin-top:10px;color:#8d8d91;font-size:13px;line-height:1.65}

        .atx-faq-wrap{max-width:940px;margin:0 auto}
        .atx-faq-head{text-align:center;margin-bottom:48px}
        .atx-faq-head h2{font-size:clamp(50px,6vw,76px);margin-top:14px}
        .atx-faq{border-top:1px solid var(--line)}
        .atx-faq details{border-bottom:1px solid var(--line)}
        .atx-faq summary{display:flex;justify-content:space-between;gap:24px;padding:25px 0;cursor:pointer;list-style:none;color:#eee;font-size:16px;font-weight:600}
        .atx-faq summary::-webkit-details-marker{display:none}
        .atx-faq summary::after{content:'+';color:var(--red);font-size:22px;font-weight:400}
        .atx-faq details[open] summary::after{content:'-'}
        .atx-faq details p{max-width:790px;padding:0 48px 25px 0;color:#929296;font-size:14px;line-height:1.75}

        .atx-cta{padding:116px 0;text-align:center;background:radial-gradient(circle at 50% 50%,rgba(204,0,0,.15),transparent 42%),#101010}
        .atx-cta h2{font-size:clamp(56px,8vw,104px)}
        .atx-cta p{margin:22px auto 0;max-width:620px;color:#9c9ca0;font-size:16px;line-height:1.7}
        .atx-cta .atx-actions{justify-content:center}

        @media(max-width:1100px){
          .atx-services{grid-template-columns:repeat(3,1fr)}
          .atx-section-head{grid-template-columns:1fr;gap:24px}
          .atx-case-card,.atx-corridor-grid{grid-template-columns:1fr}
          .atx-corridor-image{min-height:480px}
        }
        @media(max-width:760px){
          .atx-container{width:min(100% - 40px,1240px)}
          .atx-hero{min-height:720px}
          .atx-hero-inner{padding:140px 0 42px}
          .atx-hero-copy{padding-left:0}
          .atx-hero-scrim{background:linear-gradient(0deg,rgba(0,0,0,.97) 0%,rgba(0,0,0,.48) 78%),linear-gradient(90deg,rgba(0,0,0,.7),transparent)}
          .atx-hero h1{font-size:54px}
          .atx-proof{grid-template-columns:repeat(2,1fr);margin-top:42px}
          .atx-proof-item:nth-child(2){border-right:0}
          .atx-proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .atx-clients-inner{grid-template-columns:1fr;padding-top:24px}
          .atx-clients-title{text-align:center;padding-bottom:20px}
          .atx-client-grid{grid-template-columns:repeat(2,1fr);border-left:0;border-top:1px solid var(--line)}
          .atx-client:nth-child(2){border-right:0}.atx-client:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .atx-section{padding:76px 0}
          .atx-services,.atx-industry-grid{grid-template-columns:1fr}
          .atx-service{min-height:260px}
          .atx-case-copy{padding:38px 25px}
          .atx-case-image{min-height:340px}
          .atx-corridor-grid{gap:42px}
          .atx-corridor-image{min-height:360px}
          .atx-case-stats{grid-template-columns:1fr}
          .atx-faq summary{font-size:14px}
          .atx-cta{padding:82px 0}
          .atx-button{width:100%}
        }
      `}</style>

      <main className="atx-page">
        <section className="atx-hero">
          <Image
            className="atx-hero-image"
            src="/images/clients-bts-5.jpg"
            alt="Media Bar Productions camera operator filming a live event in Central Texas"
            fill
            priority
            sizes="100vw"
          />
          <div className="atx-hero-scrim" />
          <div className="atx-container atx-hero-inner">
            <div className="atx-hero-copy">
              <p className="atx-eyebrow">Full-service Austin video production</p>
              <h1 className="atx-display">
                Austin Video Production
                <em>Without the Hand-Offs.</em>
              </h1>
              <p className="atx-hero-deck">
                Media Bar brings an award-winning production team up the I-35 corridor for Austin
                corporate films, commercials, events, interviews, and live productions. One team
                owns the work from first idea through final delivery.
              </p>
              <div className="atx-actions">
                <Link className="atx-button atx-button-primary" href="/project-planner">Plan Your Austin Project</Link>
                <Link className="atx-button atx-button-secondary" href="/work">See Our Work</Link>
              </div>
            </div>
            <div className="atx-proof">
              {[
                ['13+', 'Years producing in Texas'],
                ['3', 'Emmy Awards'],
                ['15', 'Telly Awards'],
                ['Full', 'Creative through delivery'],
              ].map(([value, label]) => (
                <div className="atx-proof-item" key={label}>
                  <div className="atx-proof-value">{value}</div>
                  <div className="atx-proof-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="atx-clients" aria-label="Selected Texas clients">
          <div className="atx-container atx-clients-inner">
            <p className="atx-clients-title">Trusted by organizations across Texas</p>
            <div className="atx-client-grid">
              {clients.map((client) => (
                <div className="atx-client" key={client.name}>
                  <Image src={client.logo} alt={client.name} width={160} height={54} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="atx-section">
          <div className="atx-container">
            <div className="atx-section-head">
              <div>
                <p className="atx-eyebrow">Services for Austin teams</p>
                <h2 className="atx-display atx-section-title">One Crew. <em>Every Deliverable.</em></h2>
              </div>
              <p className="atx-section-intro">
                We build the right crew and production plan around the outcome, then handle editing,
                color, audio, graphics, captions, and final delivery. Your Austin team gets one
                accountable production partner instead of a chain of disconnected vendors.
              </p>
            </div>
            <div className="atx-services">
              {services.map((service) => (
                <Link className="atx-service" href={service.href} key={service.href}>
                  <div>
                    <span className="atx-service-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="atx-service-link">Explore service <span aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="atx-section atx-case-study">
          <div className="atx-container">
            <article className="atx-case-card">
              <div className="atx-case-image">
                <Image
                  src="/images/rbfcu-bts-farmmarket.jpg"
                  alt="Media Bar Productions filming the RBFCU Go Beyond Banking commercial campaign"
                  fill
                  sizes="(max-width: 1100px) 100vw, 54vw"
                />
              </div>
              <div className="atx-case-copy">
                <p className="atx-eyebrow">Campaign work seen in Austin</p>
                <h2 className="atx-display">RBFCU <em>Go Beyond Banking</em></h2>
                <p>
                  A five-commercial broadcast campaign produced as one coordinated system, then
                  delivered across Austin and three additional Texas markets with consistent
                  creative, production quality, and finishing.
                </p>
                <div className="atx-case-stats">
                  <div className="atx-case-stat"><strong>5</strong><span>Broadcast spots</span></div>
                  <div className="atx-case-stat"><strong>4</strong><span>Texas markets</span></div>
                  <div className="atx-case-stat"><strong>5M+</strong><span>Online views</span></div>
                </div>
                <Link className="atx-inline-link" href="/work/rbfcu-go-beyond-banking">
                  Read the case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="atx-section">
          <div className="atx-container atx-corridor-grid">
            <div className="atx-corridor-image">
              <Image
                src="/images/clients-bts-8.jpg"
                alt="Multi-camera Media Bar Productions crew filming inside a Texas manufacturing facility"
                fill
                sizes="(max-width: 1100px) 100vw, 44vw"
              />
            </div>
            <div className="atx-corridor-copy">
              <p className="atx-eyebrow">Built for the Austin-San Antonio corridor</p>
              <h2 className="atx-display">Close Enough to Move Fast. <em>Built to Scale.</em></h2>
              <p>
                Our San Antonio base gives Austin clients access to a full production operation
                without flying in a distant crew. We plan travel, equipment, locations, permits,
                and local support around the schedule before production day.
              </p>
              <div className="atx-advantages">
                {[
                  ['01', 'Efficient Central Texas travel', 'Day shoots and multi-day productions are scoped clearly, including travel and logistics.'],
                  ['02', 'Flexible crew building', 'We scale from a focused interview unit to multi-camera commercial and event crews.'],
                  ['03', 'Multi-city continuity', 'One production partner can maintain the same visual system across Austin, San Antonio, and other Texas markets.'],
                ].map(([number, title, description]) => (
                  <div className="atx-advantage" key={title}>
                    <span className="atx-advantage-number">{number}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </div>
                ))}
              </div>
              <Link className="atx-inline-link" href="/how-we-work">See how we work <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="atx-section atx-industries">
          <div className="atx-container">
            <div className="atx-section-head">
              <div>
                <p className="atx-eyebrow">Austin industry experience</p>
                <h2 className="atx-display atx-section-title">Production for a <em>Fast-Moving Market.</em></h2>
              </div>
              <p className="atx-section-intro">
                Austin organizations move quickly, but the video still has to survive legal,
                leadership, brand, and distribution review. We shape the production around your
                audience, approval path, environment, and release plan.
              </p>
            </div>
            <div className="atx-industry-grid">
              {industries.map(([title, description]) => (
                <article className="atx-industry" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atx-section">
          <div className="atx-container atx-faq-wrap">
            <div className="atx-faq-head">
              <p className="atx-eyebrow">Austin video production FAQ</p>
              <h2 className="atx-display">Before We <em>Roll Camera.</em></h2>
            </div>
            <div className="atx-faq">
              {austinFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="atx-cta">
          <div className="atx-container">
            <p className="atx-eyebrow">Your next Austin production</p>
            <h2 className="atx-display">Let&apos;s Make the Plan <em>Clear.</em></h2>
            <p>Tell us what the video needs to accomplish. We will help shape the right scope, schedule, crew, and delivery plan.</p>
            <div className="atx-actions">
              <Link className="atx-button atx-button-primary" href="/project-planner">Start Your Project Plan</Link>
              <a className="atx-button atx-button-secondary" href="tel:2102799442">Call 210-279-9442</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
