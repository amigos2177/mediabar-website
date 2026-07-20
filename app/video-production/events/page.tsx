import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import VimeoPlayer from '@/components/VimeoPlayer'
import { eventVideoFaqs } from './content'

const clients = [
  { name: 'H-E-B', logo: '/images/client-heb.png' },
  { name: 'San Antonio Spurs', logo: '/images/client-spurs.png' },
  { name: 'Texas Tech University', logo: '/images/client-texas-tech.png' },
  { name: 'Frost Bank', logo: '/images/client-frost.png' },
]

const eventTypes = [
  {
    number: '01',
    title: 'Conferences & Keynotes',
    copy: 'Stage coverage, speaker audio, presentations, audience reactions, and the connective moments that tell the full story.',
  },
  {
    number: '02',
    title: 'Galas & Awards',
    copy: 'Polished coverage of arrivals, remarks, honorees, performances, sponsors, and the energy in the room.',
  },
  {
    number: '03',
    title: 'Product Launches',
    copy: 'A clear record of the reveal plus the reactions, demonstrations, interviews, and details that support the launch.',
  },
  {
    number: '04',
    title: 'Corporate Meetings',
    copy: 'Executive messages, town halls, training sessions, panels, and internal programs captured with discretion.',
  },
  {
    number: '05',
    title: 'Community & Nonprofit',
    copy: 'Mission-driven events shaped into useful stories for donors, partners, participants, and future audiences.',
  },
  {
    number: '06',
    title: 'Performances & Sports',
    copy: 'Multi-angle coverage built around the action, atmosphere, crowd, and moments that cannot be repeated.',
  },
]

const planItems = [
  'Run of show and priority moments',
  'Stage, speaker, and camera positions',
  'Venue audio and backup recording',
  'Screens, lighting, and presentation content',
  'Audience, sponsor, and room coverage',
  'Final edits, formats, and deadlines',
]

const deliverables = [
  'Event recap film',
  'Keynote and session edits',
  'Speaker social clips',
  'Sponsor and partner content',
  'Captioned versions',
  'Channel-ready exports',
]

const process = [
  {
    number: '01',
    title: 'Event Brief',
    copy: 'Align on the program, audience, venue, schedule, priority moments, stakeholders, and intended uses.',
  },
  {
    number: '02',
    title: 'Coverage Plan',
    copy: 'Map camera positions, audio sources, crew movement, production timing, and the complete deliverable list.',
  },
  {
    number: '03',
    title: 'Live Coverage',
    copy: 'Capture the stage and the room with a coordinated crew that respects the program and attendee experience.',
  },
  {
    number: '04',
    title: 'Post & Delivery',
    copy: 'Edit, review, caption, version, and prepare the event content for every audience and destination.',
  },
]

export default function EventsPage() {
  return (
    <Layout>
      <style>{`
        .evt-page{--line:rgba(255,255,255,.1);--panel:#141414;--muted:#96969b;background:#090909;color:#fff}
        .evt-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .evt-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
        .evt-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
        .evt-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none}
        .evt-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 34px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:background .18s,border-color .18s}
        .evt-button-primary{background:var(--red);color:#fff}.evt-button-primary:hover{background:#aa0000}
        .evt-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.evt-button-secondary:hover{border-color:#fff;background:rgba(255,255,255,.05)}
        .evt-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}

        .evt-hero{position:relative;min-height:800px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--line)}
        .evt-hero-image{object-fit:cover;object-position:center}
        .evt-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.98) 0%,rgba(0,0,0,.82) 45%,rgba(0,0,0,.14) 78%),linear-gradient(0deg,#090909 0%,transparent 35%)}
        .evt-hero-inner{position:relative;z-index:1;width:100%;padding:180px 0 68px}
        .evt-hero-copy{max-width:920px;padding-left:32px}
        .evt-hero h1{font-size:clamp(68px,8.5vw,118px);margin:18px 0 24px}
        .evt-hero h1 em{display:block;color:var(--gold);font-size:.56em;margin-top:9px}
        .evt-hero-deck{max-width:680px;color:rgba(255,255,255,.8);font-size:17px;line-height:1.75}
        .evt-proof{display:grid;grid-template-columns:repeat(4,1fr);margin-top:62px;border:1px solid var(--line);background:rgba(9,9,9,.78);backdrop-filter:blur(10px)}
        .evt-proof-item{padding:21px 24px;border-right:1px solid var(--line)}
        .evt-proof-item:last-child{border-right:0}
        .evt-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:30px;line-height:1;letter-spacing:.04em}
        .evt-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

        .evt-answer{padding:52px 0;border-bottom:1px solid var(--line);background:#0f0f0f}
        .evt-answer-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:72px;align-items:start}
        .evt-answer h2{margin-top:12px;font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(34px,4vw,54px);font-weight:400;letter-spacing:.025em;line-height:1;text-transform:uppercase}
        .evt-answer-copy{color:#d3d3d5;font-size:16px;line-height:1.75}
        .evt-answer-points{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
        .evt-answer-point{padding:10px 12px;border:1px solid var(--line);color:#a5a5a9;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}

        .evt-clients{background:#101010;border-bottom:1px solid var(--line)}
        .evt-clients-inner{display:grid;grid-template-columns:250px 1fr;align-items:center;min-height:132px}
        .evt-clients-title{color:#676767;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .evt-client-grid{display:grid;grid-template-columns:repeat(4,1fr);height:100%;border-left:1px solid var(--line)}
        .evt-client{display:flex;min-height:132px;align-items:center;justify-content:center;border-right:1px solid var(--line)}
        .evt-client:last-child{border-right:0}
        .evt-client img{width:auto;height:40px;max-width:130px;object-fit:contain;filter:grayscale(1) brightness(1.5);opacity:.66}

        .evt-section{padding:106px 0;border-bottom:1px solid var(--line)}
        .evt-section-head{display:grid;grid-template-columns:1fr .82fr;gap:90px;align-items:end;margin-bottom:54px}
        .evt-section-title{font-size:clamp(54px,6vw,84px);margin-top:16px}
        .evt-section-title em{color:var(--gold)}
        .evt-section-intro{max-width:630px;color:var(--muted);font-size:16px;line-height:1.75}

        .evt-type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .evt-type{min-height:290px;display:flex;flex-direction:column;padding:31px;background:var(--panel);transition:background .18s}
        .evt-type:hover{background:#181818}
        .evt-type-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:19px;letter-spacing:.08em}
        .evt-type h3{margin-top:auto;font-family:'Bebas Neue',Impact,sans-serif;font-size:31px;font-weight:400;letter-spacing:.035em;line-height:1;text-transform:uppercase}
        .evt-type p{margin-top:15px;color:#85858a;font-size:13px;line-height:1.7}

        .evt-plan{background:#101010}
        .evt-plan-grid{display:grid;grid-template-columns:1.08fr .92fr;min-height:730px;border:1px solid var(--line);background:#151515}
        .evt-plan-image{position:relative;min-height:620px;overflow:hidden}
        .evt-plan-image img{object-fit:cover;object-position:center}
        .evt-plan-copy{display:flex;flex-direction:column;justify-content:center;padding:62px}
        .evt-plan-copy h2{font-size:clamp(54px,5.8vw,82px);margin:17px 0 23px}
        .evt-plan-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .evt-plan-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
        .evt-plan-list{display:grid;grid-template-columns:1fr 1fr;margin-top:34px;border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .evt-plan-item{min-height:92px;display:flex;align-items:center;padding:19px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);color:#ddd;font-size:10px;font-weight:700;letter-spacing:.1em;line-height:1.5;text-transform:uppercase}
        .evt-plan-item:before{content:'';width:7px;height:7px;margin-right:13px;background:var(--red);flex:0 0 auto}

        .evt-film-grid{display:grid;grid-template-columns:1.12fr .88fr;min-height:640px;border:1px solid var(--line)}
        .evt-film-media{position:relative;min-height:540px;overflow:hidden}
        .evt-film-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .evt-film-copy h2{font-size:clamp(54px,5.8vw,82px);margin:17px 0 23px}
        .evt-film-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .evt-film-copy p{color:var(--muted);font-size:15px;line-height:1.75}
        .evt-inline-link{display:inline-flex;margin-top:29px;color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .evt-inline-link span{color:var(--red);margin-left:8px}

        .evt-content{background:#101010}
        .evt-content-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:76px;align-items:stretch}
        .evt-content-image{position:relative;min-height:690px;border:1px solid var(--line);overflow:hidden}
        .evt-content-image img{object-fit:cover;object-position:center}
        .evt-content-copy{display:flex;flex-direction:column;justify-content:center}
        .evt-content-copy h2{font-size:clamp(54px,5.8vw,82px);margin:16px 0 24px}
        .evt-content-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .evt-content-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
        .evt-deliverables{display:grid;grid-template-columns:repeat(2,1fr);margin-top:36px;border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .evt-deliverable{min-height:92px;display:flex;align-items:center;padding:20px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
        .evt-deliverable:before{content:'';width:7px;height:7px;margin-right:13px;background:var(--red)}
        .evt-live-note{margin-top:26px;padding:20px 22px;border-left:3px solid var(--gold);background:#151515;color:#8f8f94;font-size:13px;line-height:1.7}
        .evt-live-note a{color:#fff;border-bottom:1px solid var(--red)}

        .evt-process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .evt-process-card{min-height:330px;padding:34px 30px;background:#141414}
        .evt-process-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.08em}
        .evt-process-card h3{margin-top:96px;font-family:'Bebas Neue',Impact,sans-serif;font-size:29px;font-weight:400;letter-spacing:.04em;line-height:1;text-transform:uppercase}
        .evt-process-card p{margin-top:16px;color:#85858a;font-size:13px;line-height:1.7}

        .evt-resources{background:#101010}
        .evt-resource-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .evt-resource{min-height:270px;display:flex;flex-direction:column;padding:34px;background:#141414;transition:background .18s}
        .evt-resource:hover{background:#191919}
        .evt-resource-tag{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .evt-resource h3{margin-top:54px;font-family:'Bebas Neue',Impact,sans-serif;font-size:34px;font-weight:400;letter-spacing:.035em;line-height:1;text-transform:uppercase}
        .evt-resource p{margin-top:16px;color:#85858a;font-size:13px;line-height:1.7}
        .evt-resource-link{margin-top:auto;padding-top:28px;color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .evt-resource-link span{color:var(--red);margin-left:8px}

        .evt-faq-wrap{max-width:1000px}
        .evt-faq-head{text-align:center;margin-bottom:44px}
        .evt-faq-head h2{font-size:clamp(52px,6vw,80px);margin-top:13px}
        .evt-faq-head h2 em{color:var(--gold)}
        .evt-faq{border-top:1px solid var(--line)}
        .evt-faq details{border-bottom:1px solid var(--line);padding:0 4px}
        .evt-faq summary{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:78px;cursor:pointer;list-style:none;color:#eee;font-size:16px;font-weight:600}
        .evt-faq summary::-webkit-details-marker{display:none}
        .evt-faq summary:after{content:'+';color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;font-weight:400}
        .evt-faq details[open] summary:after{content:'-'}
        .evt-faq details p{max-width:820px;padding:0 0 26px;color:#8f8f94;font-size:14px;line-height:1.75}

        .evt-cta{padding:118px 0;text-align:center;background:radial-gradient(circle at 50% 110%,rgba(204,0,0,.18),transparent 45%),#0c0c0c}
        .evt-cta h2{font-size:clamp(56px,7vw,96px);margin-top:17px}
        .evt-cta h2 em{color:var(--gold)}
        .evt-cta p{margin:22px auto 0;max-width:660px;color:#9c9ca0;font-size:16px;line-height:1.7}
        .evt-cta .evt-actions{justify-content:center}

        @media(max-width:1050px){
          .evt-plan-grid,.evt-film-grid,.evt-content-grid{grid-template-columns:1fr}
          .evt-content-grid{gap:42px}
          .evt-process-grid{grid-template-columns:repeat(2,1fr)}
          .evt-content-image{min-height:570px}
        }
        @media(max-width:760px){
          .evt-container{width:min(100% - 40px,1240px)}
          .evt-hero{min-height:0;display:block}
          .evt-hero-image{object-position:54% center}
          .evt-hero-scrim{background:linear-gradient(90deg,rgba(0,0,0,.95),rgba(0,0,0,.4)),linear-gradient(0deg,#090909 0%,transparent 39%)}
          .evt-hero-inner{padding:138px 0 42px}
          .evt-hero-copy{padding-left:0}
          .evt-hero h1{font-size:58px}
          .evt-hero-deck{font-size:15px}
          .evt-proof{grid-template-columns:repeat(2,1fr);margin-top:42px}
          .evt-proof-item:nth-child(2){border-right:0}.evt-proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .evt-answer-grid{grid-template-columns:1fr;gap:24px}
          .evt-clients-inner{grid-template-columns:1fr;padding-top:24px}
          .evt-clients-title{text-align:center;padding-bottom:20px}
          .evt-client-grid{grid-template-columns:repeat(2,1fr);border-left:0;border-top:1px solid var(--line)}
          .evt-client:nth-child(2){border-right:0}.evt-client:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .evt-section{padding:76px 0}
          .evt-section-head{grid-template-columns:1fr;gap:24px}
          .evt-type-grid{grid-template-columns:1fr}
          .evt-type{min-height:250px;padding:26px 23px}
          .evt-plan-image{min-height:410px}
          .evt-plan-copy,.evt-film-copy{padding:39px 25px}
          .evt-plan-list{grid-template-columns:1fr}
          .evt-film-media{min-height:360px}
          .evt-content-image{min-height:500px}
          .evt-deliverables{grid-template-columns:1fr}
          .evt-process-grid{grid-template-columns:1fr}
          .evt-process-card{min-height:270px;padding:27px 24px}
          .evt-process-card h3{margin-top:64px}
          .evt-resource-grid{grid-template-columns:1fr}
          .evt-resource{min-height:250px;padding:27px 24px}
          .evt-faq summary{font-size:14px}
          .evt-cta{padding:84px 0}
          .evt-button{width:100%}
        }
      `}</style>

      <main className="evt-page">
        <section className="evt-hero">
          <Image
            className="evt-hero-image"
            src="/images/bts-8.jpg"
            alt="Media Bar camera operator filming a San Antonio event"
            fill
            priority
            sizes="100vw"
          />
          <div className="evt-hero-scrim" />
          <div className="evt-hero-inner">
            <div className="evt-container">
              <div className="evt-hero-copy">
                <p className="evt-eyebrow">Event video production in San Antonio and across Texas</p>
                <h1 className="evt-display">Event Video <em>Production That Extends the Moment.</em></h1>
                <p className="evt-hero-deck">
                  San Antonio event video production for conferences, keynotes, galas, launches,
                  and corporate meetings, with one team planning cameras, audio, coverage, and
                  post-event delivery.
                </p>
                <div className="evt-actions">
                  <Link href="/project-planner" className="evt-button evt-button-primary">Plan Event Coverage</Link>
                  <Link href="#event-film" className="evt-button evt-button-secondary">Watch Event Work</Link>
                </div>
              </div>
              <div className="evt-proof" aria-label="Event production capabilities">
                <div className="evt-proof-item"><div className="evt-proof-value">2011</div><div className="evt-proof-label">Producing since</div></div>
                <div className="evt-proof-item"><div className="evt-proof-value">Multi</div><div className="evt-proof-label">Camera coverage</div></div>
                <div className="evt-proof-item"><div className="evt-proof-value">Clean</div><div className="evt-proof-label">Speaker audio</div></div>
                <div className="evt-proof-item"><div className="evt-proof-value">One</div><div className="evt-proof-label">Team through post</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="evt-answer" aria-labelledby="event-video-answer">
          <div className="evt-container evt-answer-grid">
            <div>
              <p className="evt-eyebrow">Quick answer</p>
              <h2 id="event-video-answer">What does an event video production company do?</h2>
            </div>
            <div>
              <p className="evt-answer-copy">
                Media Bar plans camera coverage, speaker and room audio, venue coordination,
                live production, and post-event editing for San Antonio conferences and events.
                One coordinated team can deliver recaps, full sessions, speaker clips, sponsor
                content, captions, and channel-ready versions.
              </p>
              <div className="evt-answer-points" aria-label="Event video production summary">
                {['Multi-camera coverage', 'Speaker audio', 'Event recap edits', 'Session and social content'].map((point) => (
                  <span className="evt-answer-point" key={point}>{point}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="evt-clients" aria-label="Selected clients">
          <div className="evt-container evt-clients-inner">
            <p className="evt-clients-title">Trusted by Texas organizations and national brands</p>
            <div className="evt-client-grid">
              {clients.map((client) => (
                <div className="evt-client" key={client.name}>
                  <Image src={client.logo} alt={`${client.name} logo`} width={150} height={54} sizes="150px" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="evt-section">
          <div className="evt-container">
            <div className="evt-section-head">
              <div>
                <p className="evt-eyebrow">Coverage built around the program</p>
                <h2 className="evt-display evt-section-title">Every Kind of Room. <em>One Clear Plan.</em></h2>
              </div>
              <p className="evt-section-intro">
                Every event has a different rhythm. We build the crew, camera, audio, and post-production
                approach around the program instead of forcing the event into a standard package.
              </p>
            </div>
            <div className="evt-type-grid">
              {eventTypes.map((item) => (
                <article className="evt-type" key={item.title}>
                  <span className="evt-type-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="evt-section evt-plan">
          <div className="evt-container">
            <div className="evt-plan-grid">
              <div className="evt-plan-image">
                <Image
                  src="/images/clients-bts-5.jpg"
                  alt="Camera operator covering guests at an outdoor event"
                  fill
                  sizes="(max-width: 1050px) 100vw, 54vw"
                />
              </div>
              <div className="evt-plan-copy">
                <p className="evt-eyebrow">Coverage starts before doors open</p>
                <h2 className="evt-display">Know the Moment. <em>Know Where to Be.</em></h2>
                <p>
                  A useful coverage plan connects the run of show to camera positions, audio sources,
                  crew movement, presentation screens, and the final edits. That preparation helps
                  the production stay present without becoming a distraction.
                </p>
                <div className="evt-plan-list">
                  {planItems.map((item) => <div className="evt-plan-item" key={item}>{item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="evt-section" id="event-film">
          <div className="evt-container">
            <div className="evt-film-grid">
              <div className="evt-film-media">
                <VimeoPlayer
                  videoId="946447253"
                  title="NAFA conference day two recap"
                  thumbnailUrl="https://i.vimeocdn.com/video/2092713706-9d1a0e7015828edf8e0a8d84c008d3e2ca70f844461c954092850ae214a9e460-d_1280?region=us"
                />
              </div>
              <div className="evt-film-copy">
                <p className="evt-eyebrow">Watch an event recap</p>
                <h2 className="evt-display">The Day Moves Fast. <em>The Story Should Still Land.</em></h2>
                <p>
                  A recap film condenses the speakers, atmosphere, audience, details, and momentum
                  of a live program into a piece that can extend the experience after the venue clears.
                </p>
                <Link href="/work" className="evt-inline-link">Explore more event work <span>→</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="evt-section evt-content">
          <div className="evt-container evt-content-grid">
            <div className="evt-content-image">
              <Image
                src="/images/media-library/concert-stage-performance.jpg"
                alt="Singer performing on a large concert stage captured by Media Bar"
                fill
                sizes="(max-width: 1050px) 100vw, 41vw"
              />
            </div>
            <div className="evt-content-copy">
              <p className="evt-eyebrow">The event becomes a content library</p>
              <h2 className="evt-display">One Program. <em>More Ways to Use It.</em></h2>
              <p>
                Plan the final assets before the event and the crew can capture with every destination
                in mind. The same program can support attendees, internal teams, speakers, sponsors,
                social channels, and next year&apos;s promotion.
              </p>
              <div className="evt-deliverables">
                {deliverables.map((item) => <div className="evt-deliverable" key={item}>{item}</div>)}
              </div>
              <p className="evt-live-note">
                Need the event delivered in real time? Explore our{' '}
                <Link href="/video-production/live-streaming">live streaming production</Link>{' '}
                and include venue connectivity in the event brief.
              </p>
            </div>
          </div>
        </section>

        <section className="evt-section">
          <div className="evt-container">
            <div className="evt-section-head">
              <div>
                <p className="evt-eyebrow">From schedule to screen</p>
                <h2 className="evt-display evt-section-title">A Calm Process <em>For a Live Day.</em></h2>
              </div>
              <p className="evt-section-intro">
                Live programs leave no room for guesswork. We define responsibilities, technical
                needs, priority moments, and delivery requirements before the production begins.
              </p>
            </div>
            <div className="evt-process-grid">
              {process.map((item) => (
                <article className="evt-process-card" key={item.title}>
                  <span className="evt-process-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="evt-section evt-resources">
          <div className="evt-container">
            <div className="evt-section-head">
              <div>
                <p className="evt-eyebrow">Event planning resources</p>
                <h2 className="evt-display evt-section-title">Plan the Coverage. <em>Use Every Asset.</em></h2>
              </div>
              <p className="evt-section-intro">
                These guides help event teams define scope, budget, venue needs, and the content
                system before choosing a production approach.
              </p>
            </div>
            <div className="evt-resource-grid">
              <Link href="/blog/conference-video-production-guide" className="evt-resource">
                <span className="evt-resource-tag">Content strategy guide</span>
                <h3>Turn One Conference Into a Content Library</h3>
                <p>
                  Plan recaps, session recordings, speaker clips, testimonials, and sponsor content
                  as one coordinated system.
                </p>
                <span className="evt-resource-link">Read the conference content guide <span>→</span></span>
              </Link>
              <Link href="/blog/event-conference-video-production-texas" className="evt-resource">
                <span className="evt-resource-tag">Texas planning guide</span>
                <h3>Define Scope, Budget, Venue, and Crew</h3>
                <p>
                  Compare recorded and live coverage, understand the variables that affect cost,
                  and prepare the venue for production.
                </p>
                <span className="evt-resource-link">Read the Texas event planning guide <span>→</span></span>
              </Link>
            </div>
          </div>
        </section>

        <section className="evt-section">
          <div className="evt-container evt-faq-wrap">
            <div className="evt-faq-head">
              <p className="evt-eyebrow">Event video production FAQ</p>
              <h2 className="evt-display">What Event Teams <em>Ask First.</em></h2>
            </div>
            <div className="evt-faq">
              {eventVideoFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="evt-cta">
          <div className="evt-container">
            <p className="evt-eyebrow">Start with the run of show</p>
            <h2 className="evt-display">Tell Us What Cannot <em>Be Missed.</em></h2>
            <p>
              Share the event date, venue, schedule, audience, speakers, priority moments, and
              deliverables. We will turn them into a practical coverage plan.
            </p>
            <div className="evt-actions">
              <Link href="/project-planner" className="evt-button evt-button-primary">Start the Project Planner</Link>
              <Link href="/contact" className="evt-button evt-button-secondary">Talk With Our Team</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
