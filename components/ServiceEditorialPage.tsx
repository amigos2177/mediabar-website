import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import Layout from './Layout'
import VimeoPlayer from './VimeoPlayer'

type Card = {
  number: string
  title: string
  copy: string
}

type FAQ = {
  question: string
  answer: string
}

type FeaturedMedia =
  | {
      kind: 'video'
      videoId: string
      title: string
      thumbnailUrl: string
    }
  | {
      kind: 'image'
      src: string
      alt: string
    }

export type ServiceEditorialPageProps = {
  hero: {
    eyebrow: string
    title: string
    emphasis: string
    copy: string
    image: string
    alt: string
    position?: string
    primaryCta: string
    secondaryCta: string
  }
  proof: Array<{ value: string; label: string }>
  answer?: {
    eyebrow: string
    question: string
    response: string
    points: string[]
  }
  answerResource?: ReactNode
  overview: {
    eyebrow: string
    title: string
    emphasis: string
    copy: string
  }
  capabilities: Card[]
  plan: {
    eyebrow: string
    title: string
    emphasis: string
    copy: string
    image: string
    alt: string
    position?: string
    items: string[]
  }
  feature: {
    eyebrow: string
    title: string
    emphasis: string
    copy: string
    media: FeaturedMedia
    linkLabel: string
    linkHref: string
  }
  deliverables: {
    eyebrow: string
    title: string
    emphasis: string
    copy: string
    image: string
    alt: string
    position?: string
    items: string[]
    note?: ReactNode
  }
  processIntro: {
    eyebrow: string
    title: string
    emphasis: string
    copy: string
  }
  process: Card[]
  relatedLinks?: {
    eyebrow: string
    title: string
    copy: string
    links: Array<{ label: string; href: string; description: string }>
  }
  faqEyebrow: string
  faqTitle: string
  faqEmphasis: string
  faqs: FAQ[]
  cta: {
    eyebrow: string
    title: string
    emphasis: string
    copy: string
    primaryLabel: string
    secondaryLabel: string
  }
}

export function ServiceEditorialPage({
  hero,
  proof,
  answer,
  answerResource,
  overview,
  capabilities,
  plan,
  feature,
  deliverables,
  processIntro,
  process,
  relatedLinks,
  faqEyebrow,
  faqTitle,
  faqEmphasis,
  faqs,
  cta,
}: ServiceEditorialPageProps) {
  return (
    <Layout>
      <style>{`
        .sep-page{--sep-line:rgba(255,255,255,.1);--sep-panel:#141414;--sep-muted:#96969b;background:#090909;color:#fff}
        .sep-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .sep-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
        .sep-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
        .sep-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none}
        .sep-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 34px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:background .18s,border-color .18s}
        .sep-button-primary{background:var(--red);color:#fff}.sep-button-primary:hover{background:#aa0000}
        .sep-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.sep-button-secondary:hover{border-color:#fff;background:rgba(255,255,255,.05)}
        .sep-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}

        .sep-hero{position:relative;min-height:800px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--sep-line)}
        .sep-hero-image{object-fit:cover}
        .sep-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.98) 0%,rgba(0,0,0,.84) 45%,rgba(0,0,0,.13) 78%),linear-gradient(0deg,#090909 0%,transparent 35%)}
        .sep-hero-inner{position:relative;z-index:1;width:100%;padding:180px 0 68px}
        .sep-hero-copy{max-width:940px;padding-left:32px}
        .sep-hero h1{font-size:clamp(68px,8.2vw,116px);margin:18px 0 24px}
        .sep-hero h1 em{display:block;color:var(--gold);font-size:.56em;margin-top:9px}
        .sep-hero-deck{max-width:690px;color:rgba(255,255,255,.8);font-size:17px;line-height:1.75}
        .sep-proof{display:grid;grid-template-columns:repeat(4,1fr);margin-top:62px;border:1px solid var(--sep-line);background:rgba(9,9,9,.78);backdrop-filter:blur(10px)}
        .sep-proof-item{padding:21px 24px;border-right:1px solid var(--sep-line)}
        .sep-proof-item:last-child{border-right:0}
        .sep-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:30px;line-height:1;letter-spacing:.04em}
        .sep-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

        .sep-answer{padding:52px 0;border-bottom:1px solid var(--sep-line);background:#0f0f0f}
        .sep-answer-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:72px;align-items:start}
        .sep-answer h2{margin-top:12px;font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(34px,4vw,54px);font-weight:400;letter-spacing:.025em;line-height:1;text-transform:uppercase}
        .sep-answer-response{color:#d3d3d5;font-size:16px;line-height:1.75}
        .sep-answer-points{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
        .sep-answer-point{padding:10px 12px;border:1px solid var(--sep-line);color:#a5a5a9;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}

        .sep-section{padding:106px 0;border-bottom:1px solid var(--sep-line)}
        .sep-section-head{display:grid;grid-template-columns:1fr .82fr;gap:90px;align-items:end;margin-bottom:54px}
        .sep-section-title{font-size:clamp(54px,6vw,84px);margin-top:16px}
        .sep-section-title em{color:var(--gold)}
        .sep-section-intro{max-width:630px;color:var(--sep-muted);font-size:16px;line-height:1.75}

        .sep-card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--sep-line);border:1px solid var(--sep-line)}
        .sep-card{min-height:290px;display:flex;flex-direction:column;padding:31px;background:var(--sep-panel);transition:background .18s}
        .sep-card:hover{background:#181818}
        .sep-card-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:19px;letter-spacing:.08em}
        .sep-card h3{margin-top:auto;font-family:'Bebas Neue',Impact,sans-serif;font-size:31px;font-weight:400;letter-spacing:.035em;line-height:1;text-transform:uppercase}
        .sep-card p{margin-top:15px;color:#85858a;font-size:13px;line-height:1.7}

        .sep-plan{background:#101010}
        .sep-plan-grid{display:grid;grid-template-columns:1.08fr .92fr;min-height:730px;border:1px solid var(--sep-line);background:#151515}
        .sep-plan-image{position:relative;min-height:620px;overflow:hidden}
        .sep-plan-image img{object-fit:cover}
        .sep-plan-copy{display:flex;flex-direction:column;justify-content:center;padding:62px}
        .sep-plan-copy h2{font-size:clamp(54px,5.8vw,82px);margin:17px 0 23px}
        .sep-plan-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .sep-plan-copy>p{color:var(--sep-muted);font-size:15px;line-height:1.75}
        .sep-plan-list{display:grid;grid-template-columns:1fr 1fr;margin-top:34px;border-top:1px solid var(--sep-line);border-left:1px solid var(--sep-line)}
        .sep-plan-item{min-height:92px;display:flex;align-items:center;padding:19px;border-right:1px solid var(--sep-line);border-bottom:1px solid var(--sep-line);color:#ddd;font-size:10px;font-weight:700;letter-spacing:.1em;line-height:1.5;text-transform:uppercase}
        .sep-plan-item:before{content:'';width:7px;height:7px;margin-right:13px;background:var(--red);flex:0 0 auto}

        .sep-feature-grid{display:grid;grid-template-columns:1.12fr .88fr;min-height:640px;border:1px solid var(--sep-line)}
        .sep-feature-media{position:relative;min-height:540px;overflow:hidden;background:#0d0d0d}
        .sep-feature-media>img{object-fit:cover}
        .sep-feature-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .sep-feature-copy h2{font-size:clamp(54px,5.8vw,82px);margin:17px 0 23px}
        .sep-feature-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .sep-feature-copy p{color:var(--sep-muted);font-size:15px;line-height:1.75}
        .sep-inline-link{display:inline-flex;margin-top:29px;color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .sep-inline-link span{color:var(--red);margin-left:8px}

        .sep-deliverables{background:#101010}
        .sep-deliverables-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:76px;align-items:stretch}
        .sep-deliverables-image{position:relative;min-height:690px;border:1px solid var(--sep-line);overflow:hidden}
        .sep-deliverables-image img{object-fit:cover}
        .sep-deliverables-copy{display:flex;flex-direction:column;justify-content:center}
        .sep-deliverables-copy h2{font-size:clamp(54px,5.8vw,82px);margin:16px 0 24px}
        .sep-deliverables-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .sep-deliverables-copy>p{color:var(--sep-muted);font-size:15px;line-height:1.75}
        .sep-deliverable-list{display:grid;grid-template-columns:repeat(2,1fr);margin-top:36px;border-top:1px solid var(--sep-line);border-left:1px solid var(--sep-line)}
        .sep-deliverable{min-height:92px;display:flex;align-items:center;padding:20px;border-right:1px solid var(--sep-line);border-bottom:1px solid var(--sep-line);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
        .sep-deliverable:before{content:'';width:7px;height:7px;margin-right:13px;background:var(--red)}
        .sep-note{margin-top:26px;padding:20px 22px;border-left:3px solid var(--gold);background:#151515;color:#8f8f94;font-size:13px;line-height:1.7}
        .sep-note a{color:#fff;border-bottom:1px solid var(--red)}

        .sep-process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--sep-line);border:1px solid var(--sep-line)}
        .sep-process-card{min-height:330px;padding:34px 30px;background:#141414}
        .sep-process-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.08em}
        .sep-process-card h3{margin-top:96px;font-family:'Bebas Neue',Impact,sans-serif;font-size:29px;font-weight:400;letter-spacing:.04em;line-height:1;text-transform:uppercase}
        .sep-process-card p{margin-top:16px;color:#85858a;font-size:13px;line-height:1.7}

        .sep-related{background:#101010}
        .sep-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:42px;background:var(--sep-line);border:1px solid var(--sep-line)}
        .sep-related-card{display:flex;min-height:220px;flex-direction:column;padding:30px;background:#141414;color:#fff}
        .sep-related-card:hover{background:#181818}
        .sep-related-card h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:27px;font-weight:400;letter-spacing:.04em;text-transform:uppercase}
        .sep-related-card p{margin-top:15px;color:#85858a;font-size:13px;line-height:1.7}
        .sep-related-card span{margin-top:auto;padding-top:28px;color:var(--red);font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}

        .sep-faq-wrap{max-width:1000px}
        .sep-faq-head{text-align:center;margin-bottom:44px}
        .sep-faq-head h2{font-size:clamp(52px,6vw,80px);margin-top:13px}
        .sep-faq-head h2 em{color:var(--gold)}
        .sep-faq{border-top:1px solid var(--sep-line)}
        .sep-faq details{border-bottom:1px solid var(--sep-line);padding:0 4px}
        .sep-faq summary{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:78px;cursor:pointer;list-style:none;color:#eee;font-size:16px;font-weight:600}
        .sep-faq summary::-webkit-details-marker{display:none}
        .sep-faq summary:after{content:'+';color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;font-weight:400}
        .sep-faq details[open] summary:after{content:'-'}
        .sep-faq details p{max-width:820px;padding:0 0 26px;color:#8f8f94;font-size:14px;line-height:1.75}

        .sep-cta{padding:118px 0;text-align:center;background:radial-gradient(circle at 50% 110%,rgba(204,0,0,.18),transparent 45%),#0c0c0c}
        .sep-cta h2{font-size:clamp(56px,7vw,96px);margin-top:17px}
        .sep-cta h2 em{color:var(--gold)}
        .sep-cta p{margin:22px auto 0;max-width:660px;color:#9c9ca0;font-size:16px;line-height:1.7}
        .sep-cta .sep-actions{justify-content:center}

        @media(max-width:1050px){
          .sep-plan-grid,.sep-feature-grid,.sep-deliverables-grid{grid-template-columns:1fr}
          .sep-deliverables-grid{gap:42px}
          .sep-process-grid{grid-template-columns:repeat(2,1fr)}
          .sep-related-grid{grid-template-columns:1fr}
          .sep-deliverables-image{min-height:570px}
        }
        @media(max-width:760px){
          .sep-container{width:min(100% - 40px,1240px)}
          .sep-hero{min-height:0;display:block}
          .sep-hero-scrim{background:linear-gradient(90deg,rgba(0,0,0,.95),rgba(0,0,0,.4)),linear-gradient(0deg,#090909 0%,transparent 39%)}
          .sep-hero-inner{padding:138px 0 42px}
          .sep-hero-copy{padding-left:0}
          .sep-hero h1{font-size:58px}
          .sep-hero-deck{font-size:15px}
          .sep-proof{grid-template-columns:repeat(2,1fr);margin-top:42px}
          .sep-proof-item:nth-child(2){border-right:0}.sep-proof-item:nth-child(-n+2){border-bottom:1px solid var(--sep-line)}
          .sep-answer-grid{grid-template-columns:1fr;gap:24px}
          .sep-section{padding:76px 0}
          .sep-section-head{grid-template-columns:1fr;gap:24px}
          .sep-card-grid{grid-template-columns:1fr}
          .sep-card{min-height:250px;padding:26px 23px}
          .sep-plan-image{min-height:410px}
          .sep-plan-copy,.sep-feature-copy{padding:39px 25px}
          .sep-plan-list{grid-template-columns:1fr}
          .sep-feature-media{min-height:360px}
          .sep-deliverables-image{min-height:500px}
          .sep-deliverable-list{grid-template-columns:1fr}
          .sep-process-grid{grid-template-columns:1fr}
          .sep-process-card{min-height:270px;padding:27px 24px}
          .sep-process-card h3{margin-top:64px}
          .sep-faq summary{font-size:14px}
          .sep-cta{padding:84px 0}
          .sep-button{width:100%}
        }
      `}</style>

      <main className="sep-page">
        <section className="sep-hero">
          <Image
            className="sep-hero-image"
            src={hero.image}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: hero.position || 'center' }}
          />
          <div className="sep-hero-scrim" />
          <div className="sep-hero-inner">
            <div className="sep-container">
              <div className="sep-hero-copy">
                <p className="sep-eyebrow">{hero.eyebrow}</p>
                <h1 className="sep-display">{hero.title} <em>{hero.emphasis}</em></h1>
                <p className="sep-hero-deck">{hero.copy}</p>
                <div className="sep-actions">
                  <Link href="/project-planner" className="sep-button sep-button-primary">{hero.primaryCta}</Link>
                  <Link href="#featured-work" className="sep-button sep-button-secondary">{hero.secondaryCta}</Link>
                </div>
              </div>
              <div className="sep-proof" aria-label="Service capabilities">
                {proof.map((item) => (
                  <div className="sep-proof-item" key={item.label}>
                    <div className="sep-proof-value">{item.value}</div>
                    <div className="sep-proof-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {answer ? (
          <section className="sep-answer" aria-labelledby="service-answer">
            <div className="sep-container sep-answer-grid">
              <div>
                <p className="sep-eyebrow">{answer.eyebrow}</p>
                <h2 id="service-answer">{answer.question}</h2>
              </div>
              <div>
                <p className="sep-answer-response">{answer.response}</p>
                <div className="sep-answer-points" aria-label="Service summary">
                  {answer.points.map((point) => (
                    <span className="sep-answer-point" key={point}>{point}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {answerResource}

        <section className="sep-section">
          <div className="sep-container">
            <div className="sep-section-head">
              <div>
                <p className="sep-eyebrow">{overview.eyebrow}</p>
                <h2 className="sep-display sep-section-title">{overview.title} <em>{overview.emphasis}</em></h2>
              </div>
              <p className="sep-section-intro">{overview.copy}</p>
            </div>
            <div className="sep-card-grid">
              {capabilities.map((item) => (
                <article className="sep-card" key={item.title}>
                  <span className="sep-card-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sep-section sep-plan">
          <div className="sep-container">
            <div className="sep-plan-grid">
              <div className="sep-plan-image">
                <Image
                  src={plan.image}
                  alt={plan.alt}
                  fill
                  sizes="(max-width: 1050px) 100vw, 54vw"
                  style={{ objectPosition: plan.position || 'center' }}
                />
              </div>
              <div className="sep-plan-copy">
                <p className="sep-eyebrow">{plan.eyebrow}</p>
                <h2 className="sep-display">{plan.title} <em>{plan.emphasis}</em></h2>
                <p>{plan.copy}</p>
                <div className="sep-plan-list">
                  {plan.items.map((item) => <div className="sep-plan-item" key={item}>{item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sep-section" id="featured-work">
          <div className="sep-container">
            <div className="sep-feature-grid">
              <div className="sep-feature-media">
                {feature.media.kind === 'video' ? (
                  <VimeoPlayer
                    videoId={feature.media.videoId}
                    title={feature.media.title}
                    thumbnailUrl={feature.media.thumbnailUrl}
                  />
                ) : (
                  <Image
                    src={feature.media.src}
                    alt={feature.media.alt}
                    fill
                    sizes="(max-width: 1050px) 100vw, 56vw"
                  />
                )}
              </div>
              <div className="sep-feature-copy">
                <p className="sep-eyebrow">{feature.eyebrow}</p>
                <h2 className="sep-display">{feature.title} <em>{feature.emphasis}</em></h2>
                <p>{feature.copy}</p>
                <Link href={feature.linkHref} className="sep-inline-link">{feature.linkLabel} <span>→</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="sep-section sep-deliverables">
          <div className="sep-container sep-deliverables-grid">
            <div className="sep-deliverables-image">
              <Image
                src={deliverables.image}
                alt={deliverables.alt}
                fill
                sizes="(max-width: 1050px) 100vw, 41vw"
                style={{ objectPosition: deliverables.position || 'center' }}
              />
            </div>
            <div className="sep-deliverables-copy">
              <p className="sep-eyebrow">{deliverables.eyebrow}</p>
              <h2 className="sep-display">{deliverables.title} <em>{deliverables.emphasis}</em></h2>
              <p>{deliverables.copy}</p>
              <div className="sep-deliverable-list">
                {deliverables.items.map((item) => <div className="sep-deliverable" key={item}>{item}</div>)}
              </div>
              {deliverables.note && <div className="sep-note">{deliverables.note}</div>}
            </div>
          </div>
        </section>

        {relatedLinks ? (
          <section className="sep-section sep-related">
            <div className="sep-container">
              <div className="sep-section-head">
                <div>
                  <p className="sep-eyebrow">{relatedLinks.eyebrow}</p>
                  <h2 className="sep-display sep-section-title">{relatedLinks.title}</h2>
                </div>
                <p className="sep-section-intro">{relatedLinks.copy}</p>
              </div>
              <div className="sep-related-grid">
                {relatedLinks.links.map((link) => (
                  <Link className="sep-related-card" href={link.href} key={link.href}>
                    <h3>{link.label}</h3>
                    <p>{link.description}</p>
                    <span>Explore →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="sep-section">
          <div className="sep-container">
            <div className="sep-section-head">
              <div>
                <p className="sep-eyebrow">{processIntro.eyebrow}</p>
                <h2 className="sep-display sep-section-title">{processIntro.title} <em>{processIntro.emphasis}</em></h2>
              </div>
              <p className="sep-section-intro">{processIntro.copy}</p>
            </div>
            <div className="sep-process-grid">
              {process.map((item) => (
                <article className="sep-process-card" key={item.title}>
                  <span className="sep-process-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sep-section">
          <div className="sep-container sep-faq-wrap">
            <div className="sep-faq-head">
              <p className="sep-eyebrow">{faqEyebrow}</p>
              <h2 className="sep-display">{faqTitle} <em>{faqEmphasis}</em></h2>
            </div>
            <div className="sep-faq">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="sep-cta">
          <div className="sep-container">
            <p className="sep-eyebrow">{cta.eyebrow}</p>
            <h2 className="sep-display">{cta.title} <em>{cta.emphasis}</em></h2>
            <p>{cta.copy}</p>
            <div className="sep-actions">
              <Link href="/project-planner" className="sep-button sep-button-primary">{cta.primaryLabel}</Link>
              <Link href="/contact" className="sep-button sep-button-secondary">{cta.secondaryLabel}</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
