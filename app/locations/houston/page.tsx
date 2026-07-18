import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { houstonFaqs } from './content'

const clients = [
  { name: 'Carrier', logo: '/images/client-carrier.png' },
  { name: 'Frost Bank', logo: '/images/client-frost.png' },
  { name: 'H-E-B', logo: '/images/client-heb.png' },
  { name: 'Unilever', logo: '/images/client-unilever.png' },
]

const services = [
  {
    number: '01',
    title: 'Corporate Video',
    description: 'Leadership communications, brand films, recruiting, training, and customer stories.',
    href: '/video-production/corporate',
  },
  {
    number: '02',
    title: 'Medical Video',
    description: 'Provider profiles, patient education, clinical stories, and healthcare communications.',
    href: '/video-production/medical',
  },
  {
    number: '03',
    title: 'Events & Conferences',
    description: 'Multi-camera coverage, speaker content, recaps, sponsor assets, and social cutdowns.',
    href: '/video-production/events',
  },
  {
    number: '04',
    title: 'Live Streaming',
    description: 'Reliable production for town halls, panels, conferences, launches, and hybrid teams.',
    href: '/video-production/live-streaming',
  },
  {
    number: '05',
    title: 'Aerial Production',
    description: 'FAA-compliant aerial imagery for facilities, infrastructure, real estate, and scale.',
    href: '/video-production/aerial',
  },
  {
    number: '06',
    title: 'Post-Production',
    description: 'Editing, color, audio, motion graphics, captions, versioning, and final delivery.',
    href: '/video-production/post-production',
  },
]

const industries = [
  ['Energy & Industrial', 'Facility stories, safety and training, leadership communications, technical explainers, and recruiting.'],
  ['Healthcare & Life Sciences', 'Patient education, provider profiles, research stories, internal communications, and recruiting.'],
  ['Aerospace & Aviation', 'Engineering stories, workforce communications, training, executive interviews, and event content.'],
  ['Logistics & Port Operations', 'Operations stories, process documentation, safety content, recruiting, and supply-chain communications.'],
  ['Infrastructure & Real Estate', 'Development films, progress documentation, aerial coverage, community stories, and leasing content.'],
  ['Associations & Conferences', 'Speaker content, event coverage, sponsor deliverables, live streams, and post-event campaigns.'],
]

const productionPriorities = [
  {
    number: '01',
    title: 'Site-ready planning',
    copy: 'Access, safety requirements, crew footprint, power, sound, and movement are addressed before production day.',
  },
  {
    number: '02',
    title: 'Technical translation',
    copy: 'We help subject-matter experts communicate complex work clearly without stripping away the substance.',
  },
  {
    number: '03',
    title: 'Stakeholder control',
    copy: 'Owners, reviewers, deadlines, and deliverables are mapped early so approvals remain predictable.',
  },
  {
    number: '04',
    title: 'One delivery system',
    copy: 'Master films, cutdowns, captions, social formats, and internal versions move through one coordinated workflow.',
  },
]

export default function HoustonPage() {
  return (
    <Layout>
      <style>{`
        .hou-page{--line:rgba(255,255,255,.1);--muted:#9b9ba0;--steel:#7b8a98;background:#090909;color:#fff}
        .hou-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .hou-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
        .hou-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
        .hou-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none}
        .hou-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 34px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:background .18s,border-color .18s}
        .hou-button-primary{background:var(--red);color:#fff}.hou-button-primary:hover{background:#aa0000}
        .hou-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.hou-button-secondary:hover{border-color:#fff;background:rgba(255,255,255,.05)}
        .hou-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}

        .hou-hero{position:relative;min-height:790px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--line)}
        .hou-hero-image{object-fit:cover;object-position:center 45%;filter:saturate(.72) contrast(1.04)}
        .hou-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.97) 0%,rgba(0,0,0,.82) 46%,rgba(0,0,0,.18) 83%),linear-gradient(0deg,#090909 0%,transparent 38%)}
        .hou-hero-grid{position:absolute;inset:0;opacity:.08;background-image:linear-gradient(rgba(255,255,255,.22) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.22) 1px,transparent 1px);background-size:72px 72px;mask-image:linear-gradient(90deg,#000,transparent 72%)}
        .hou-hero-inner{position:relative;z-index:1;width:100%;padding:180px 0 72px}
        .hou-hero-copy{max-width:920px;padding-left:32px;box-sizing:border-box}
        .hou-hero h1{font-size:clamp(62px,8vw,112px);margin:18px 0 24px}
        .hou-hero h1 em{display:block;color:var(--gold);font-size:.57em;margin-top:9px}
        .hou-hero-deck{max-width:690px;color:rgba(255,255,255,.76);font-size:17px;line-height:1.75}
        .hou-proof{display:grid;grid-template-columns:repeat(4,1fr);margin-top:64px;border:1px solid var(--line);background:rgba(9,9,9,.72);backdrop-filter:blur(10px)}
        .hou-proof-item{padding:21px 24px;border-right:1px solid var(--line)}
        .hou-proof-item:last-child{border-right:0}
        .hou-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;line-height:1;letter-spacing:.04em}
        .hou-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

        .hou-clients{background:#101010;border-bottom:1px solid var(--line)}
        .hou-clients-inner{display:grid;grid-template-columns:240px 1fr;align-items:center;min-height:132px}
        .hou-clients-title{color:#676767;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .hou-client-grid{display:grid;grid-template-columns:repeat(4,1fr);height:100%;border-left:1px solid var(--line)}
        .hou-client{display:flex;align-items:center;justify-content:center;padding:22px;border-right:1px solid var(--line)}
        .hou-client:last-child{border-right:0}
        .hou-client img{max-height:44px;width:auto;object-fit:contain;filter:grayscale(1) brightness(.72);transition:filter .2s}
        .hou-client:hover img{filter:none}

        .hou-section{padding:108px 0;border-bottom:1px solid var(--line)}
        .hou-section-head{display:grid;grid-template-columns:.58fr 1fr;gap:74px;align-items:end;margin-bottom:54px}
        .hou-section-title{font-size:clamp(48px,6vw,80px);margin-top:13px}
        .hou-section-title em{display:block;color:var(--gold);font-size:.74em;margin-top:6px}
        .hou-section-intro{max-width:650px;color:var(--muted);font-size:16px;line-height:1.75}

        .hou-services{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .hou-service{min-height:286px;display:flex;flex-direction:column;justify-content:space-between;padding:31px 29px;background:#141414;transition:background .18s}
        .hou-service:hover{background:#1a1a1a}
        .hou-service-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:18px;letter-spacing:.08em}
        .hou-service h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:29px;font-weight:400;letter-spacing:.04em;line-height:1.05;color:#fff;margin:38px 0 14px}
        .hou-service p{color:#888;font-size:13px;line-height:1.65}
        .hou-service-link{display:flex;align-items:center;justify-content:space-between;margin-top:27px;color:#777;font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;transition:color .18s}
        .hou-service:hover .hou-service-link{color:var(--red)}

        .hou-technical{background:#111}
        .hou-technical-card{display:grid;grid-template-columns:.95fr 1.05fr;min-height:680px;border:1px solid var(--line);background:#151515;overflow:hidden}
        .hou-technical-image{position:relative;min-height:560px}
        .hou-technical-image img{object-fit:cover;object-position:center}
        .hou-technical-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .hou-technical-copy h2{font-size:clamp(50px,5.4vw,78px);margin:17px 0 22px}
        .hou-technical-copy h2 em{display:block;color:var(--gold);font-size:.68em;margin-top:7px}
        .hou-technical-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
        .hou-priority-list{margin-top:34px;border-top:1px solid var(--line)}
        .hou-priority{display:grid;grid-template-columns:38px 1fr;gap:18px;padding:19px 0;border-bottom:1px solid var(--line)}
        .hou-priority-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:18px}
        .hou-priority h3{font-size:14px;margin-bottom:4px}
        .hou-priority p{color:#7d7d82;font-size:12px;line-height:1.6}

        .hou-interview-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:72px;align-items:center}
        .hou-interview-copy h2{font-size:clamp(50px,5.7vw,82px);margin:16px 0 24px}
        .hou-interview-copy h2 em{display:block;color:var(--gold);font-size:.67em;margin-top:7px}
        .hou-interview-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
        .hou-interview-image{position:relative;min-height:610px;overflow:hidden;border:1px solid var(--line)}
        .hou-interview-image img{object-fit:cover;object-position:center}
        .hou-inline-link{display:inline-flex;margin-top:30px;color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .hou-inline-link span{color:var(--red);margin-left:8px}

        .hou-industries{background:#101010}
        .hou-industry-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .hou-industry{min-height:190px;padding:31px 29px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
        .hou-industry h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:25px;font-weight:400;letter-spacing:.035em}
        .hou-industry p{margin-top:14px;color:#858589;font-size:13px;line-height:1.65}

        .hou-faq-wrap{max-width:1000px}
        .hou-faq-head{text-align:center;margin-bottom:44px}
        .hou-faq-head h2{font-size:clamp(50px,6vw,80px);margin-top:13px}
        .hou-faq-head h2 em{color:var(--gold)}
        .hou-faq{border-top:1px solid var(--line)}
        .hou-faq details{border-bottom:1px solid var(--line);padding:0 4px}
        .hou-faq summary{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:78px;cursor:pointer;list-style:none;color:#eee;font-size:16px;font-weight:600}
        .hou-faq summary::-webkit-details-marker{display:none}
        .hou-faq summary:after{content:'+';color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;font-weight:400}
        .hou-faq details[open] summary:after{content:'-'}
        .hou-faq details p{max-width:760px;padding:0 0 26px;color:#8f8f94;font-size:14px;line-height:1.75}

        .hou-cta{padding:118px 0;text-align:center;background:radial-gradient(circle at 50% 110%,rgba(204,0,0,.18),transparent 45%),#0c0c0c}
        .hou-cta h2{font-size:clamp(54px,7vw,94px);margin-top:17px}
        .hou-cta h2 em{color:var(--gold)}
        .hou-cta p{margin:22px auto 0;max-width:620px;color:#9c9ca0;font-size:16px;line-height:1.7}
        .hou-cta .hou-actions{justify-content:center}

        @media(max-width:1050px){
          .hou-technical-card,.hou-interview-grid{grid-template-columns:1fr}
          .hou-interview-grid{gap:42px}
          .hou-interview-image{min-height:480px}
        }
        @media(max-width:760px){
          .hou-container{width:min(100% - 40px,1240px)}
          .hou-hero{min-height:740px}
          .hou-hero-inner{padding:140px 0 42px}
          .hou-hero-copy{padding-left:0}
          .hou-hero h1{font-size:57px}
          .hou-hero-deck{font-size:15px}
          .hou-proof{grid-template-columns:repeat(2,1fr);margin-top:42px}
          .hou-proof-item:nth-child(2){border-right:0}.hou-proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .hou-clients-inner{grid-template-columns:1fr;padding-top:24px}
          .hou-clients-title{text-align:center;padding-bottom:20px}
          .hou-client-grid{grid-template-columns:repeat(2,1fr);border-left:0;border-top:1px solid var(--line)}
          .hou-client:nth-child(2){border-right:0}.hou-client:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .hou-section{padding:76px 0}
          .hou-section-head{grid-template-columns:1fr;gap:24px}
          .hou-services,.hou-industry-grid{grid-template-columns:1fr}
          .hou-service{min-height:250px}
          .hou-technical-copy{padding:38px 25px}
          .hou-technical-image{min-height:360px}
          .hou-interview-image{min-height:360px}
          .hou-faq summary{font-size:14px}
          .hou-cta{padding:84px 0}
          .hou-button{width:100%}
        }
      `}</style>

      <main className="hou-page">
        <section className="hou-hero">
          <Image
            className="hou-hero-image"
            src="/images/bts-dsc-2.jpg"
            alt="Media Bar Productions camera crew filming a corporate production"
            fill
            priority
            sizes="100vw"
          />
          <div className="hou-hero-scrim" />
          <div className="hou-hero-grid" aria-hidden="true" />
          <div className="hou-hero-inner">
            <div className="hou-container">
              <div className="hou-hero-copy">
                <p className="hou-eyebrow">Full-service Houston video production</p>
                <h1 className="hou-display">Complex Industries. <em>Clear Stories.</em></h1>
                <p className="hou-hero-deck">
                  Media Bar gives Houston organizations one experienced Texas production team for
                  corporate films, technical stories, healthcare content, events, live streams, and
                  multi-format campaigns.
                </p>
                <div className="hou-actions">
                  <Link className="hou-button hou-button-primary" href="/project-planner">Plan Your Houston Project</Link>
                  <Link className="hou-button hou-button-secondary" href="/work">See Our Work</Link>
                </div>
              </div>
              <div className="hou-proof" aria-label="Media Bar Productions credentials">
                <div className="hou-proof-item"><div className="hou-proof-value">13+</div><div className="hou-proof-label">Years producing in Texas</div></div>
                <div className="hou-proof-item"><div className="hou-proof-value">3</div><div className="hou-proof-label">Emmy Awards</div></div>
                <div className="hou-proof-item"><div className="hou-proof-value">15</div><div className="hou-proof-label">Telly Awards</div></div>
                <div className="hou-proof-item"><div className="hou-proof-value">One</div><div className="hou-proof-label">Team from brief to delivery</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="hou-clients" aria-label="Selected Texas clients">
          <div className="hou-container hou-clients-inner">
            <p className="hou-clients-title">Trusted by organizations across Texas</p>
            <div className="hou-client-grid">
              {clients.map((client) => (
                <div className="hou-client" key={client.name}>
                  <Image src={client.logo} alt={client.name} width={160} height={54} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="hou-section">
          <div className="hou-container">
            <div className="hou-section-head">
              <div>
                <p className="hou-eyebrow">Production capabilities</p>
                <h2 className="hou-display hou-section-title">Built for the <em>Brief.</em></h2>
              </div>
              <p className="hou-section-intro">
                Start with the business objective, audience, and delivery requirements. We build the
                right creative, crew, equipment, and post-production plan around the outcome.
              </p>
            </div>
            <div className="hou-services">
              {services.map((service) => (
                <Link className="hou-service" href={service.href} key={service.title}>
                  <div>
                    <span className="hou-service-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="hou-service-link">Explore service <span aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="hou-section hou-technical">
          <div className="hou-container">
            <article className="hou-technical-card">
              <div className="hou-technical-image">
                <Image
                  src="/images/bts-dec-1.jpg"
                  alt="Multi-camera Media Bar Productions interview setup"
                  fill
                  sizes="(max-width: 1050px) 100vw, 48vw"
                />
              </div>
              <div className="hou-technical-copy">
                <p className="hou-eyebrow">Production for high-stakes environments</p>
                <h2 className="hou-display">Prepared Before <em>the Crew Arrives.</em></h2>
                <p>
                  Technical, regulated, and multi-stakeholder productions work best when access,
                  ownership, safety, approvals, and deliverables are defined before the cameras roll.
                </p>
                <div className="hou-priority-list">
                  {productionPriorities.map((item) => (
                    <div className="hou-priority" key={item.title}>
                      <span className="hou-priority-number">{item.number}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="hou-section">
          <div className="hou-container hou-interview-grid">
            <div className="hou-interview-copy">
              <p className="hou-eyebrow">Executive and subject-matter interviews</p>
              <h2 className="hou-display">Make Expertise <em>Easy to Follow.</em></h2>
              <p>
                The strongest technical stories sound human. We shape interviews around what the
                audience needs to understand, create a comfortable set, and capture the coverage
                required for a polished final film.
              </p>
              <Link className="hou-inline-link" href="/video-production/interview">
                Explore interview production <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hou-interview-image">
              <Image
                src="/images/clients-bts-4.jpg"
                alt="Media Bar Productions filming an on-camera interview"
                fill
                sizes="(max-width: 1050px) 100vw, 42vw"
              />
            </div>
          </div>
        </section>

        <section className="hou-section hou-industries">
          <div className="hou-container">
            <div className="hou-section-head">
              <div>
                <p className="hou-eyebrow">Houston industry focus</p>
                <h2 className="hou-display hou-section-title">Content That Fits <em>the Work.</em></h2>
              </div>
              <p className="hou-section-intro">
                The production approach changes with the environment, audience, subject matter, and
                review process. We plan for those realities from the start.
              </p>
            </div>
            <div className="hou-industry-grid">
              {industries.map(([title, description]) => (
                <article className="hou-industry" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hou-section">
          <div className="hou-container hou-faq-wrap">
            <div className="hou-faq-head">
              <p className="hou-eyebrow">Houston video production FAQ</p>
              <h2 className="hou-display">Before the <em>Production Starts.</em></h2>
            </div>
            <div className="hou-faq">
              {houstonFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="hou-cta">
          <div className="hou-container">
            <p className="hou-eyebrow">Your next Houston production</p>
            <h2 className="hou-display">Bring Us the Complexity. <em>We&apos;ll Build the Plan.</em></h2>
            <p>
              Tell us what the content must accomplish, who needs to approve it, and where it needs
              to work. We will shape the scope from there.
            </p>
            <div className="hou-actions">
              <Link className="hou-button hou-button-primary" href="/project-planner">Start Your Project Plan</Link>
              <a className="hou-button hou-button-secondary" href="tel:2102799442">Call 210-279-9442</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
