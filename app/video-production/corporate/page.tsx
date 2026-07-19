import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import VimeoPlayer from '@/components/VimeoPlayer'
import { corporateVideoFaqs } from './content'

const clients = [
  { name: 'Carrier', logo: '/images/client-carrier.png' },
  { name: 'Frost Bank', logo: '/images/client-frost.png' },
  { name: 'H-E-B', logo: '/images/client-heb.png' },
  { name: 'San Antonio Spurs', logo: '/images/client-spurs.png' },
]

const useCases = [
  {
    number: '01',
    title: 'Brand & Company Films',
    copy: 'Give customers, partners, and employees a clear reason to understand and believe in the organization.',
  },
  {
    number: '02',
    title: 'Leadership Communications',
    copy: 'Help executives communicate strategy, change, milestones, and direction with clarity and confidence.',
  },
  {
    number: '03',
    title: 'Customer Stories',
    copy: 'Turn real experiences into credible proof for sales, marketing, presentations, and digital campaigns.',
  },
  {
    number: '04',
    title: 'Recruiting & Culture',
    copy: 'Show candidates what the work, people, purpose, and day-to-day culture actually feel like.',
  },
  {
    number: '05',
    title: 'Training & Internal Comms',
    copy: 'Make important processes, expertise, and organizational knowledge easier to absorb and share.',
  },
  {
    number: '06',
    title: 'Product & Service Stories',
    copy: 'Explain what you do, how it works, and why it matters without burying the audience in complexity.',
  },
]

const deliverables = [
  'Master brand film',
  'Short campaign cutdowns',
  'Vertical social versions',
  'Captioned deliverables',
  'Internal presentation edits',
  'Channel-ready exports',
]

const process = [
  {
    number: '01',
    title: 'Business Brief',
    copy: 'Align on the audience, objective, message, channels, stakeholders, and definition of success.',
  },
  {
    number: '02',
    title: 'Story & Approvals',
    copy: 'Build the creative approach, interview plan, script, schedule, logistics, and approval path.',
  },
  {
    number: '03',
    title: 'Production',
    copy: 'Direct the people and production with the right crew, cameras, lighting, sound, and coverage.',
  },
  {
    number: '04',
    title: 'Post & Versioning',
    copy: 'Edit, review, finish, caption, version, and prepare the content for every place it needs to work.',
  },
]

const stakeholderNeeds = [
  ['Marketing & Brand', 'Campaign films, customer proof, brand stories, and channel-ready versions.'],
  ['Internal Communications', 'Leadership updates, change communications, events, and employee stories.'],
  ['People & Culture', 'Recruiting films, onboarding content, training, and workplace storytelling.'],
  ['Sales & Business Development', 'Case studies, service explainers, pitch support, and presentation content.'],
]

export default function CorporatePage() {
  return (
    <Layout>
      <style>{`
        .corp-page{--line:rgba(255,255,255,.1);--panel:#141414;--muted:#96969b;background:#090909;color:#fff}
        .corp-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .corp-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
        .corp-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
        .corp-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none}
        .corp-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 34px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:background .18s,border-color .18s}
        .corp-button-primary{background:var(--red);color:#fff}.corp-button-primary:hover{background:#aa0000}
        .corp-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.corp-button-secondary:hover{border-color:#fff;background:rgba(255,255,255,.05)}
        .corp-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}

        .corp-hero{position:relative;min-height:800px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--line)}
        .corp-hero-image{object-fit:cover;object-position:center 44%}
        .corp-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.98) 0%,rgba(0,0,0,.84) 46%,rgba(0,0,0,.12) 79%),linear-gradient(0deg,#090909 0%,transparent 34%)}
        .corp-hero-inner{position:relative;z-index:1;width:100%;padding:180px 0 68px}
        .corp-hero-copy{max-width:900px;padding-left:32px}
        .corp-hero h1{font-size:clamp(67px,8.4vw,116px);margin:18px 0 24px}
        .corp-hero h1 em{display:block;color:var(--gold);font-size:.56em;margin-top:9px}
        .corp-hero-deck{max-width:675px;color:rgba(255,255,255,.78);font-size:17px;line-height:1.75}
        .corp-proof{display:grid;grid-template-columns:repeat(4,1fr);margin-top:62px;border:1px solid var(--line);background:rgba(9,9,9,.76);backdrop-filter:blur(10px)}
        .corp-proof-item{padding:21px 24px;border-right:1px solid var(--line)}
        .corp-proof-item:last-child{border-right:0}
        .corp-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;line-height:1;letter-spacing:.04em}
        .corp-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

        .corp-clients{background:#101010;border-bottom:1px solid var(--line)}
        .corp-clients-inner{display:grid;grid-template-columns:240px 1fr;align-items:center;min-height:132px}
        .corp-clients-title{color:#676767;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .corp-client-grid{display:grid;grid-template-columns:repeat(4,1fr);height:100%;border-left:1px solid var(--line)}
        .corp-client{display:flex;min-height:132px;align-items:center;justify-content:center;border-right:1px solid var(--line)}
        .corp-client:last-child{border-right:0}
        .corp-client img{width:auto;height:40px;max-width:130px;object-fit:contain;filter:grayscale(1) brightness(1.5);opacity:.66}

        .corp-section{padding:106px 0;border-bottom:1px solid var(--line)}
        .corp-section-head{display:grid;grid-template-columns:1fr .82fr;gap:90px;align-items:end;margin-bottom:54px}
        .corp-section-title{font-size:clamp(54px,6vw,84px);margin-top:16px}
        .corp-section-title em{color:var(--gold)}
        .corp-section-intro{max-width:630px;color:var(--muted);font-size:16px;line-height:1.75}

        .corp-use-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .corp-use{min-height:290px;display:flex;flex-direction:column;padding:31px;background:var(--panel);transition:background .18s}
        .corp-use:hover{background:#181818}
        .corp-use-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:19px;letter-spacing:.08em}
        .corp-use h3{margin-top:auto;font-family:'Bebas Neue',Impact,sans-serif;font-size:31px;font-weight:400;letter-spacing:.035em;line-height:1;text-transform:uppercase}
        .corp-use p{margin-top:15px;color:#85858a;font-size:13px;line-height:1.7}

        .corp-reel{background:#101010}
        .corp-reel-grid{display:grid;grid-template-columns:1.12fr .88fr;min-height:650px;border:1px solid var(--line);background:#151515}
        .corp-reel-media{position:relative;min-height:560px;overflow:hidden}
        .corp-reel-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .corp-reel-copy h2{font-size:clamp(54px,5.8vw,82px);margin:17px 0 23px}
        .corp-reel-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .corp-reel-copy p{color:var(--muted);font-size:15px;line-height:1.75}
        .corp-inline-link{display:inline-flex;margin-top:29px;color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .corp-inline-link span{color:var(--red);margin-left:8px}

        .corp-assets-grid{display:grid;grid-template-columns:.83fr 1.17fr;gap:72px;align-items:stretch}
        .corp-assets-image{position:relative;min-height:720px;border:1px solid var(--line);overflow:hidden}
        .corp-assets-image img{object-fit:cover;object-position:center}
        .corp-assets-copy{display:flex;flex-direction:column;justify-content:center}
        .corp-assets-copy h2{font-size:clamp(54px,5.8vw,82px);margin:16px 0 24px}
        .corp-assets-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .corp-assets-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
        .corp-deliverables{display:grid;grid-template-columns:repeat(2,1fr);margin-top:36px;border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .corp-deliverable{min-height:92px;display:flex;align-items:center;padding:20px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
        .corp-deliverable:before{content:'';width:7px;height:7px;margin-right:13px;background:var(--red)}

        .corp-process{background:#101010}
        .corp-process-grid{display:grid;grid-template-columns:1.08fr .92fr;min-height:740px;border:1px solid var(--line)}
        .corp-process-image{position:relative;min-height:600px;overflow:hidden}
        .corp-process-image img{object-fit:cover;object-position:center}
        .corp-process-copy{display:flex;flex-direction:column;justify-content:center;padding:60px}
        .corp-process-copy h2{font-size:clamp(52px,5.6vw,78px);margin:16px 0 22px}
        .corp-process-copy h2 em{display:block;color:var(--gold);font-size:.65em;margin-top:8px}
        .corp-process-copy>p{color:var(--muted);font-size:14px;line-height:1.75}
        .corp-process-list{margin-top:32px;border-top:1px solid var(--line)}
        .corp-process-item{display:grid;grid-template-columns:37px 130px 1fr;gap:14px;padding:19px 0;border-bottom:1px solid var(--line)}
        .corp-process-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:17px}
        .corp-process-item h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:21px;font-weight:400;letter-spacing:.04em}
        .corp-process-item p{color:#7f7f84;font-size:11px;line-height:1.6}

        .corp-stakeholders{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .corp-stakeholder{min-height:190px;padding:29px;background:var(--panel)}
        .corp-stakeholder h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:27px;font-weight:400;letter-spacing:.04em;text-transform:uppercase}
        .corp-stakeholder p{max-width:480px;margin-top:13px;color:#85858a;font-size:13px;line-height:1.7}

        .corp-faq-wrap{max-width:1000px}
        .corp-faq-head{text-align:center;margin-bottom:44px}
        .corp-faq-head h2{font-size:clamp(52px,6vw,80px);margin-top:13px}
        .corp-faq-head h2 em{color:var(--gold)}
        .corp-faq{border-top:1px solid var(--line)}
        .corp-faq details{border-bottom:1px solid var(--line);padding:0 4px}
        .corp-faq summary{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:78px;cursor:pointer;list-style:none;color:#eee;font-size:16px;font-weight:600}
        .corp-faq summary::-webkit-details-marker{display:none}
        .corp-faq summary:after{content:'+';color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;font-weight:400}
        .corp-faq details[open] summary:after{content:'-'}
        .corp-faq details p{max-width:800px;padding:0 0 26px;color:#8f8f94;font-size:14px;line-height:1.75}

        .corp-cta{padding:118px 0;text-align:center;background:radial-gradient(circle at 50% 110%,rgba(204,0,0,.18),transparent 45%),#0c0c0c}
        .corp-cta h2{font-size:clamp(56px,7vw,96px);margin-top:17px}
        .corp-cta h2 em{color:var(--gold)}
        .corp-cta p{margin:22px auto 0;max-width:630px;color:#9c9ca0;font-size:16px;line-height:1.7}
        .corp-cta .corp-actions{justify-content:center}

        @media(max-width:1050px){
          .corp-reel-grid,.corp-assets-grid,.corp-process-grid{grid-template-columns:1fr}
          .corp-assets-grid{gap:42px}
          .corp-assets-image{min-height:570px}
        }
        @media(max-width:760px){
          .corp-container{width:min(100% - 40px,1240px)}
          .corp-hero{min-height:780px}
          .corp-hero-image{object-position:62% center}
          .corp-hero-scrim{background:linear-gradient(90deg,rgba(0,0,0,.94),rgba(0,0,0,.45)),linear-gradient(0deg,#090909 0%,transparent 38%)}
          .corp-hero-inner{padding:138px 0 42px}
          .corp-hero-copy{padding-left:0}
          .corp-hero h1{font-size:58px}
          .corp-hero-deck{font-size:15px}
          .corp-proof{grid-template-columns:repeat(2,1fr);margin-top:42px}
          .corp-proof-item:nth-child(2){border-right:0}.corp-proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .corp-clients-inner{grid-template-columns:1fr;padding-top:24px}
          .corp-clients-title{text-align:center;padding-bottom:20px}
          .corp-client-grid{grid-template-columns:repeat(2,1fr);border-left:0;border-top:1px solid var(--line)}
          .corp-client:nth-child(2){border-right:0}.corp-client:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .corp-section{padding:76px 0}
          .corp-section-head{grid-template-columns:1fr;gap:24px}
          .corp-use-grid,.corp-stakeholders{grid-template-columns:1fr}
          .corp-use{min-height:250px;padding:26px 23px}
          .corp-reel-media{min-height:360px}
          .corp-reel-copy,.corp-process-copy{padding:39px 25px}
          .corp-assets-image{min-height:500px}
          .corp-deliverables{grid-template-columns:1fr}
          .corp-process-image{min-height:390px}
          .corp-process-item{grid-template-columns:33px 100px 1fr;gap:10px}
          .corp-faq summary{font-size:14px}
          .corp-cta{padding:84px 0}
          .corp-button{width:100%}
        }
      `}</style>

      <main className="corp-page">
        <section className="corp-hero">
          <Image
            className="corp-hero-image"
            src="/images/clients-bts-9.jpg"
            alt="Multi-camera corporate interview production for a Texas organization"
            fill
            priority
            sizes="100vw"
          />
          <div className="corp-hero-scrim" />
          <div className="corp-hero-inner">
            <div className="corp-container">
              <div className="corp-hero-copy">
                <p className="corp-eyebrow">Corporate video production in San Antonio</p>
                <h1 className="corp-display">Turn Business Goals <em>Into Stories People Remember.</em></h1>
                <p className="corp-hero-deck">
                  Media Bar helps San Antonio companies turn leadership, expertise, customer experience,
                  and complex ideas into clear corporate films built for the people who need to act.
                </p>
                <div className="corp-actions">
                  <Link href="/project-planner" className="corp-button corp-button-primary">Plan a Corporate Project</Link>
                  <Link href="/work" className="corp-button corp-button-secondary">See Our Work</Link>
                </div>
              </div>
              <div className="corp-proof" aria-label="Media Bar Productions credentials">
                <div className="corp-proof-item">
                  <div className="corp-proof-value">2011</div>
                  <div className="corp-proof-label">Producing in Texas since</div>
                </div>
                <div className="corp-proof-item">
                  <div className="corp-proof-value">3</div>
                  <div className="corp-proof-label">Emmy Awards</div>
                </div>
                <div className="corp-proof-item">
                  <div className="corp-proof-value">15</div>
                  <div className="corp-proof-label">Telly Awards</div>
                </div>
                <div className="corp-proof-item">
                  <div className="corp-proof-value">One</div>
                  <div className="corp-proof-label">Team from brief to delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="corp-clients" aria-label="Selected clients">
          <div className="corp-container corp-clients-inner">
            <p className="corp-clients-title">Trusted by Texas teams and national brands</p>
            <div className="corp-client-grid">
              {clients.map((client) => (
                <div className="corp-client" key={client.name}>
                  <Image src={client.logo} alt={`${client.name} logo`} width={150} height={54} sizes="150px" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="corp-section">
          <div className="corp-container">
            <div className="corp-section-head">
              <div>
                <p className="corp-eyebrow">Built around the communication job</p>
                <h2 className="corp-display corp-section-title">The Right Film <em>For the Moment.</em></h2>
              </div>
              <p className="corp-section-intro">
                Corporate video is not one format. The creative, production plan, and final
                deliverables should change with the audience and the decision you need them to make.
              </p>
            </div>
            <div className="corp-use-grid">
              {useCases.map((item) => (
                <article className="corp-use" key={item.title}>
                  <span className="corp-use-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="corp-section corp-reel">
          <div className="corp-container">
            <div className="corp-reel-grid">
              <div className="corp-reel-media">
                <VimeoPlayer
                  videoId="1193317757"
                  title="Media Bar corporate video production reel"
                  thumbnailUrl="https://i.vimeocdn.com/video/2158758794-61bb60f13b58d16d0ab4bcf809e6dfc02afe3a93096ad3f3b30414440de210ba-d_1280?region=us"
                />
              </div>
              <div className="corp-reel-copy">
                <p className="corp-eyebrow">Corporate production reel</p>
                <h2 className="corp-display">See the Craft. <em>Feel the Difference.</em></h2>
                <p>
                  Strong corporate work makes real people feel natural, important ideas feel clear,
                  and the organization behind them feel credible. See how Media Bar brings those
                  elements together on screen.
                </p>
                <Link href="/work" className="corp-inline-link">Explore more work <span>→</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="corp-section">
          <div className="corp-container corp-assets-grid">
            <div className="corp-assets-image">
              <Image
                src="/images/bts-dec-2.jpg"
                alt="Vertical corporate campaign framing on a production monitor"
                fill
                sizes="(max-width: 1050px) 100vw, 42vw"
              />
            </div>
            <div className="corp-assets-copy">
              <p className="corp-eyebrow">One production, more useful content</p>
              <h2 className="corp-display">Build the Story. <em>Plan the Versions.</em></h2>
              <p>
                The best time to plan a content system is before the cameras roll. We identify
                channels, formats, audiences, and review needs early so the production can capture
                what each final version requires.
              </p>
              <div className="corp-deliverables">
                {deliverables.map((item) => <div className="corp-deliverable" key={item}>{item}</div>)}
              </div>
              <Link href="/blog/corporate-video-multi-format-strategy" className="corp-inline-link">
                Read the multi-format guide <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="corp-section corp-process">
          <div className="corp-container">
            <div className="corp-process-grid">
              <div className="corp-process-image">
                <Image
                  src="/images/bts-6.jpg"
                  alt="Media Bar crew producing a corporate presenter in a studio"
                  fill
                  sizes="(max-width: 1050px) 100vw, 56vw"
                />
              </div>
              <div className="corp-process-copy">
                <p className="corp-eyebrow">A process stakeholders can follow</p>
                <h2 className="corp-display">Clear From Brief <em>To Final Delivery.</em></h2>
                <p>
                  Corporate projects involve people, schedules, messages, and approvals. Our job is
                  to keep those moving in one coordinated production plan.
                </p>
                <div className="corp-process-list">
                  {process.map((item) => (
                    <article className="corp-process-item" key={item.title}>
                      <span className="corp-process-number">{item.number}</span>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="corp-section">
          <div className="corp-container">
            <div className="corp-section-head">
              <div>
                <p className="corp-eyebrow">One production partner, many stakeholders</p>
                <h2 className="corp-display corp-section-title">Content That Works <em>Across the Business.</em></h2>
              </div>
              <p className="corp-section-intro">
                We help teams translate their priorities into a production plan that respects the
                brand, the audience, and the internal approval process.
              </p>
            </div>
            <div className="corp-stakeholders">
              {stakeholderNeeds.map(([title, copy]) => (
                <article className="corp-stakeholder" key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="corp-section">
          <div className="corp-container corp-faq-wrap">
            <div className="corp-faq-head">
              <p className="corp-eyebrow">Corporate video production FAQ</p>
              <h2 className="corp-display">What Teams <em>Ask First.</em></h2>
            </div>
            <div className="corp-faq">
              {corporateVideoFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="corp-cta">
          <div className="corp-container">
            <p className="corp-eyebrow">Start with the business objective</p>
            <h2 className="corp-display">Tell Us What the Video <em>Needs to Do.</em></h2>
            <p>
              Share the audience, message, deadline, and deliverables. We will turn them into a
              practical corporate video scope for San Antonio, Texas, or wherever the story takes us.
            </p>
            <div className="corp-actions">
              <Link href="/project-planner" className="corp-button corp-button-primary">Start the Project Planner</Link>
              <Link href="/contact" className="corp-button corp-button-secondary">Talk With Our Team</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
