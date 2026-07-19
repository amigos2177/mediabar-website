import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Video Production Crew & Careers San Antonio | Media Bar',
  description:
    'Meet the San Antonio production community behind Media Bar. Find the right path to hire our crew or introduce yourself as a freelance collaborator.',
  path: '/careers',
  ogImage: '/images/media-library/media-bar-team-photo.jpg',
})

const crewDisciplines = [
  'Camera and lighting',
  'Production sound',
  'Producing and coordination',
  'Hair, makeup, and wardrobe',
  'Art department and locations',
  'Editing, color, and motion',
]

export default function CareersPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.mediabarproductions.com/careers#page',
    name: 'Video Production Crew and Careers in San Antonio',
    url: 'https://www.mediabarproductions.com/careers',
    description:
      'Information for clients seeking a San Antonio video production crew and production professionals interested in collaborating with Media Bar Productions.',
    isPartOf: { '@id': 'https://www.mediabarproductions.com/#business' },
    about: { '@id': 'https://www.mediabarproductions.com/#business' },
  }

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Crew & Careers', url: '/careers' },
        ]}
      />

      <main className="crew-page">
        <style>{`
          .crew-page{--line:rgba(255,255,255,.11);--muted:#99999f;background:#090909;color:#fff}
          .crew-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
          .crew-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
          .crew-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none;color:var(--gold)}
          .crew-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
          .crew-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 32px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
          .crew-button-primary{background:var(--red);color:#fff}.crew-button-primary:hover{background:#a90000}
          .crew-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.crew-button-secondary:hover{border-color:#fff}
          .crew-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:34px}

          .crew-hero{position:relative;min-height:790px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--line)}
          .crew-hero-image{object-fit:cover;object-position:center}
          .crew-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.98) 0%,rgba(0,0,0,.86) 43%,rgba(0,0,0,.16) 80%),linear-gradient(0deg,#090909 0%,transparent 34%)}
          .crew-hero-inner{position:relative;z-index:1;width:100%;padding:180px 0 72px}
          .crew-hero-copy{max-width:880px;padding-left:32px}
          .crew-hero h1{font-size:clamp(68px,8.6vw,118px);margin:18px 0 24px}
          .crew-hero h1 em{display:block;font-size:.56em;margin-top:9px}
          .crew-deck{max-width:680px;color:rgba(255,255,255,.78);font-size:17px;line-height:1.75}
          .crew-proof{display:grid;grid-template-columns:repeat(3,1fr);margin-top:62px;border:1px solid var(--line);background:rgba(9,9,9,.78);backdrop-filter:blur(10px)}
          .crew-proof-item{padding:21px 24px;border-right:1px solid var(--line)}
          .crew-proof-item:last-child{border-right:0}
          .crew-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:31px;line-height:1}
          .crew-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

          .crew-section{padding:108px 0;border-bottom:1px solid var(--line)}
          .crew-intro{display:grid;grid-template-columns:.82fr 1.18fr;gap:90px;align-items:end;margin-bottom:54px}
          .crew-intro h2{font-size:clamp(54px,6vw,84px);margin-top:16px}
          .crew-intro p{color:var(--muted);font-size:16px;line-height:1.75}
          .crew-paths{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
          .crew-path{min-height:430px;display:flex;flex-direction:column;padding:40px;background:#141414}
          .crew-path-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.08em}
          .crew-path h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:48px;font-weight:400;line-height:.98;letter-spacing:.03em;text-transform:uppercase;margin:64px 0 18px}
          .crew-path p{color:#8f8f95;font-size:14px;line-height:1.72}
          .crew-path .crew-actions{margin-top:auto;padding-top:34px}

          .crew-collab{background:#101010}
          .crew-collab-grid{display:grid;grid-template-columns:1.05fr .95fr;min-height:700px;border:1px solid var(--line)}
          .crew-collab-image{position:relative;min-height:600px;overflow:hidden}
          .crew-collab-image img{object-fit:cover;object-position:center}
          .crew-collab-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
          .crew-collab-copy h2{font-size:clamp(54px,5.8vw,82px);margin:17px 0 24px}
          .crew-collab-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
          .crew-disciplines{display:grid;grid-template-columns:repeat(2,1fr);margin-top:34px;border-top:1px solid var(--line);border-left:1px solid var(--line)}
          .crew-discipline{min-height:88px;display:flex;align-items:center;padding:18px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
          .crew-discipline:before{content:'';width:7px;height:7px;margin-right:12px;background:var(--red);flex:0 0 auto}
          .crew-note{margin-top:25px;padding:19px 21px;border-left:3px solid var(--gold);background:#151515;color:#929297;font-size:13px;line-height:1.7}

          .crew-cta{padding:118px 0;text-align:center;background:radial-gradient(circle at 50% 110%,rgba(204,0,0,.18),transparent 45%),#0c0c0c}
          .crew-cta h2{font-size:clamp(56px,7vw,96px);margin-top:17px}
          .crew-cta p{margin:22px auto 0;max-width:650px;color:#9c9ca0;font-size:16px;line-height:1.7}
          .crew-cta .crew-actions{justify-content:center}

          @media(max-width:900px){
            .crew-intro,.crew-collab-grid{grid-template-columns:1fr}
            .crew-intro{gap:28px}
            .crew-collab-image{min-height:520px}
          }
          @media(max-width:720px){
            .crew-container{width:min(100% - 40px,1240px)}
            .crew-hero{min-height:760px}
            .crew-hero-inner{padding:140px 0 42px}
            .crew-hero-copy{padding-left:0}
            .crew-hero h1{font-size:61px}
            .crew-deck{font-size:15px}
            .crew-proof{grid-template-columns:1fr}
            .crew-proof-item{border-right:0;border-bottom:1px solid var(--line)}
            .crew-proof-item:last-child{border-bottom:0}
            .crew-section{padding:76px 0}
            .crew-paths{grid-template-columns:1fr}
            .crew-path{min-height:390px;padding:30px}
            .crew-collab-copy{padding:38px 26px}
            .crew-disciplines{grid-template-columns:1fr}
            .crew-cta{padding:88px 0}
          }
        `}</style>

        <section className="crew-hero">
          <Image
            src="/images/media-library/media-bar-team-photo.jpg"
            alt="Media Bar Productions crew gathered after a San Antonio production"
            fill
            priority
            sizes="100vw"
            className="crew-hero-image"
          />
          <div className="crew-hero-scrim" />
          <div className="crew-hero-inner">
            <div className="crew-container">
              <div className="crew-hero-copy">
                <p className="crew-eyebrow">Video production crew in San Antonio</p>
                <h1 className="crew-display">Built by People. <em>Ready for the Work.</em></h1>
                <p className="crew-deck">
                  Media Bar brings experienced crew, clear roles, and one accountable production
                  workflow to projects in San Antonio and across Texas.
                </p>
                <div className="crew-actions">
                  <Link href="/project-planner" className="crew-button crew-button-primary">Hire Our Crew</Link>
                  <a href="#collaborate" className="crew-button crew-button-secondary">Collaborate With Us</a>
                </div>
              </div>
              <div className="crew-proof" aria-label="Media Bar crew credentials">
                <div className="crew-proof-item"><div className="crew-proof-value">2011</div><div className="crew-proof-label">Producing in San Antonio since</div></div>
                <div className="crew-proof-item"><div className="crew-proof-value">3</div><div className="crew-proof-label">Emmy Awards</div></div>
                <div className="crew-proof-item"><div className="crew-proof-value">15</div><div className="crew-proof-label">Telly Awards</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="crew-section">
          <div className="crew-container">
            <div className="crew-intro">
              <div>
                <p className="crew-eyebrow">Two ways to connect</p>
                <h2 className="crew-display">Find the <em>Right Path.</em></h2>
              </div>
              <p>
                Clients and production professionals arrive here with different goals. Choose the
                path that fits so the right information reaches the right person.
              </p>
            </div>
            <div className="crew-paths">
              <article className="crew-path">
                <span className="crew-path-number">01</span>
                <h3>Need a Production Crew?</h3>
                <p>
                  Tell us about the audience, scope, location, schedule, deliverables, and production
                  support you need. We will help shape a practical crew and workflow.
                </p>
                <div className="crew-actions">
                  <Link href="/project-planner" className="crew-button crew-button-primary">Plan Your Project</Link>
                  <Link href="/video-production" className="crew-button crew-button-secondary">Explore Services</Link>
                </div>
              </article>
              <article className="crew-path">
                <span className="crew-path-number">02</span>
                <h3>Want to Work With Us?</h3>
                <p>
                  We build relationships with experienced freelancers and production specialists.
                  Send your role, city, portfolio or reel, and current contact information.
                </p>
                <div className="crew-actions">
                  <a href="mailto:contact@mediabarproductions.com?subject=Production%20Crew%20Introduction" className="crew-button crew-button-primary">Introduce Yourself</a>
                  <Link href="/about" className="crew-button crew-button-secondary">Meet Media Bar</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="crew-section crew-collab" id="collaborate">
          <div className="crew-container">
            <div className="crew-collab-grid">
              <div className="crew-collab-image">
                <Image
                  src="/images/media-library/media-bar-bts-25.jpg"
                  alt="San Antonio camera crew preparing a cinema camera for production"
                  fill
                  sizes="(max-width: 900px) 100vw, 53vw"
                />
              </div>
              <div className="crew-collab-copy">
                <p className="crew-eyebrow">Production collaborators</p>
                <h2 className="crew-display">Good Work Starts With <em>Good People.</em></h2>
                <p>
                  We value prepared, collaborative professionals who communicate clearly and care
                  about the people on both sides of the camera.
                </p>
                <div className="crew-disciplines">
                  {crewDisciplines.map((discipline) => (
                    <div className="crew-discipline" key={discipline}>{discipline}</div>
                  ))}
                </div>
                <p className="crew-note">
                  This page is not a promise of an active staff opening. Introductions help us learn
                  who is available for future productions and scoped freelance needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="crew-cta">
          <div className="crew-container">
            <p className="crew-eyebrow">Start the conversation</p>
            <h2 className="crew-display">Tell Us What <em>You Are Building.</em></h2>
            <p>
              Whether you need a complete production team or want to introduce your craft, send the
              details that will help us understand the fit.
            </p>
            <div className="crew-actions">
              <Link href="/project-planner" className="crew-button crew-button-primary">Plan a Production</Link>
              <a href="mailto:contact@mediabarproductions.com?subject=Production%20Crew%20Introduction" className="crew-button crew-button-secondary">Share Your Work</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
