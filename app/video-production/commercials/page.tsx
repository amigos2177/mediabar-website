import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import QuickContactBar from '@/components/QuickContactBar'
import { MediaBarAnswersFeature } from '@/components/MediaBarAnswersFeature'
import VimeoPlayer from '@/components/VimeoPlayer'
import { commercialVideoFaqs } from './content'

const clients = [
  { name: 'Unilever', logo: '/images/client-unilever.png' },
  { name: 'H-E-B', logo: '/images/client-heb.png' },
  { name: 'San Antonio Spurs', logo: '/images/client-spurs.png' },
  { name: 'Frost Bank', logo: '/images/client-frost.png' },
]

const formats = [
  {
    number: '01',
    title: 'Broadcast & CTV',
    copy: 'Commercial spots planned and finished for television, connected TV, and the technical requirements of each outlet.',
  },
  {
    number: '02',
    title: 'Paid Social',
    copy: 'Platform-aware creative with the pacing, framing, captions, and cut lengths needed for social campaigns.',
  },
  {
    number: '03',
    title: 'Pre-Roll & Digital',
    copy: 'Concise video advertising built to earn attention before the audience decides whether to keep watching.',
  },
  {
    number: '04',
    title: 'Brand Campaigns',
    copy: 'A connected family of spots that can carry one idea across audiences, products, markets, and channels.',
  },
  {
    number: '05',
    title: 'Product & Launch',
    copy: 'Commercial storytelling that makes the offer clear, gives the product context, and creates a reason to act.',
  },
  {
    number: '06',
    title: 'Public-Facing Messages',
    copy: 'Clear, memorable campaigns for organizations communicating programs, services, initiatives, or change.',
  },
]

const deliverables = [
  'Master broadcast spot',
  'Short campaign cutdowns',
  'Vertical social versions',
  'Captioned deliverables',
  'Broadcast-ready exports',
  'Digital channel versions',
]

const approaches = [
  {
    number: '01',
    title: 'One Focused Spot',
    copy: 'A single commercial built around one audience, one business objective, and one clear call to action.',
    bestFor: 'A defined offer, announcement, initiative, or flagship brand message.',
  },
  {
    number: '02',
    title: 'Campaign Family',
    copy: 'A shared creative idea developed into multiple spots for different products, messages, or audiences.',
    bestFor: 'Organizations that need consistency across a larger campaign without repeating the same story.',
  },
  {
    number: '03',
    title: 'Multi-Channel Launch',
    copy: 'A master concept planned from the beginning for television, connected TV, paid social, pre-roll, and web.',
    bestFor: 'Campaigns that need coordinated versions, aspect ratios, captions, and cut lengths.',
  },
]

const quoteDrivers = [
  'Creative concept and scripting',
  'Shoot complexity and production days',
  'Locations, permits, and logistics',
  'Talent, licensing, and usage rights',
  'Editing, sound, color, and graphics',
  'Deliverables and platform versions',
  'Where and how the commercial will run',
]

const relatedServices = [
  {
    title: 'Corporate Video',
    copy: 'Build the broader brand story behind the campaign.',
    href: '/video-production/corporate',
  },
  {
    title: 'Motion Graphics',
    copy: 'Add animation, product explanation, and branded visual systems.',
    href: '/video-production/motion-graphics',
  },
  {
    title: 'Post-Production',
    copy: 'Edit, finish, caption, version, and prepare campaign deliverables.',
    href: '/video-production/post-production',
  },
  {
    title: 'Our Work',
    copy: 'See commercial, corporate, and campaign work produced by Media Bar.',
    href: '/work',
  },
]

const process = [
  {
    number: '01',
    title: 'Strategy & Concept',
    copy: 'Define the audience, campaign objective, offer, message, tone, channels, and creative direction.',
  },
  {
    number: '02',
    title: 'Pre-Production',
    copy: 'Build the script, boards, casting, locations, schedule, art direction, crew, and approval path.',
  },
  {
    number: '03',
    title: 'Production',
    copy: 'Direct the performances and production with the right camera, lighting, sound, movement, and coverage.',
  },
  {
    number: '04',
    title: 'Post & Delivery',
    copy: 'Edit, finish, review, caption, version, and prepare every spot for its intended channel and specification.',
  },
]

export default function CommercialsPage() {
  return (
    <Layout>
      <style>{`
        .com-page{--line:rgba(255,255,255,.1);--panel:#141414;--muted:#96969b;background:#090909;color:#fff}
        .com-container{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .com-eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}
        .com-display{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;letter-spacing:.025em;line-height:.94;text-transform:uppercase}
        .com-display em{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:0;text-transform:none}
        .com-button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 34px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:background .18s,border-color .18s}
        .com-button-primary{background:var(--red);color:#fff}.com-button-primary:hover{background:#aa0000}
        .com-button-secondary{border-color:rgba(255,255,255,.32);color:#fff}.com-button-secondary:hover{border-color:#fff;background:rgba(255,255,255,.05)}
        .com-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}

        .com-hero{position:relative;min-height:800px;display:flex;align-items:flex-end;overflow:hidden;border-bottom:1px solid var(--line)}
        .com-hero-image{object-fit:cover;object-position:center}
        .com-hero-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.98) 0%,rgba(0,0,0,.84) 45%,rgba(0,0,0,.13) 78%),linear-gradient(0deg,#090909 0%,transparent 34%)}
        .com-hero-inner{position:relative;z-index:1;width:100%;padding:180px 0 68px}
        .com-hero-copy{max-width:920px;padding-left:32px}
        .com-hero h1{font-size:clamp(68px,8.5vw,118px);margin:18px 0 24px}
        .com-hero h1 em{display:block;color:var(--gold);font-size:.56em;margin-top:9px}
        .com-hero-deck{max-width:675px;color:rgba(255,255,255,.78);font-size:17px;line-height:1.75}
        .com-proof{display:grid;grid-template-columns:repeat(4,1fr);margin-top:62px;border:1px solid var(--line);background:rgba(9,9,9,.76);backdrop-filter:blur(10px)}
        .com-proof-item{padding:21px 24px;border-right:1px solid var(--line)}
        .com-proof-item:last-child{border-right:0}
        .com-proof-value{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;line-height:1;letter-spacing:.04em}
        .com-proof-label{margin-top:6px;color:#888;font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}

        .com-clients{background:#101010;border-bottom:1px solid var(--line)}
        .com-clients-inner{display:grid;grid-template-columns:240px 1fr;align-items:center;min-height:132px}
        .com-clients-title{color:#676767;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .com-client-grid{display:grid;grid-template-columns:repeat(4,1fr);height:100%;border-left:1px solid var(--line)}
        .com-client{display:flex;min-height:132px;align-items:center;justify-content:center;border-right:1px solid var(--line)}
        .com-client:last-child{border-right:0}
        .com-client img{width:auto;height:40px;max-width:130px;object-fit:contain;filter:grayscale(1) brightness(1.5);opacity:.66}

        .com-section{padding:106px 0;border-bottom:1px solid var(--line)}
        .com-section-head{display:grid;grid-template-columns:1fr .82fr;gap:90px;align-items:end;margin-bottom:54px}
        .com-section-title{font-size:clamp(54px,6vw,84px);margin-top:16px}
        .com-section-title em{color:var(--gold)}
        .com-section-intro{max-width:630px;color:var(--muted);font-size:16px;line-height:1.75}

        .com-format-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .com-format{min-height:290px;display:flex;flex-direction:column;padding:31px;background:var(--panel);transition:background .18s}
        .com-format:hover{background:#181818}
        .com-format-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:19px;letter-spacing:.08em}
        .com-format h3{margin-top:auto;font-family:'Bebas Neue',Impact,sans-serif;font-size:31px;font-weight:400;letter-spacing:.035em;line-height:1;text-transform:uppercase}
        .com-format p{margin-top:15px;color:#85858a;font-size:13px;line-height:1.7}

        .com-approach-note{display:flex;align-items:flex-start;justify-content:space-between;gap:42px;margin-bottom:34px;padding:24px 27px;border:1px solid var(--line);background:#111}
        .com-approach-note strong{font-family:'Bebas Neue',Impact,sans-serif;font-size:23px;font-weight:400;letter-spacing:.04em;text-transform:uppercase}
        .com-approach-note p{max-width:690px;color:#8d8d92;font-size:13px;line-height:1.7}
        .com-approach-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
        .com-approach{display:flex;min-height:360px;flex-direction:column;padding:34px;background:var(--panel)}
        .com-approach-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;letter-spacing:.08em}
        .com-approach h3{margin-top:64px;font-family:'Bebas Neue',Impact,sans-serif;font-size:34px;font-weight:400;letter-spacing:.035em;line-height:1;text-transform:uppercase}
        .com-approach>p{margin-top:17px;color:#8b8b90;font-size:13px;line-height:1.7}
        .com-approach-best{margin-top:auto;padding-top:25px;border-top:1px solid var(--line)}
        .com-approach-best span{display:block;margin-bottom:8px;color:var(--gold);font-size:8px;font-weight:700;letter-spacing:.17em;text-transform:uppercase}
        .com-approach-best p{color:#aaa;font-size:11px;line-height:1.6}

        .com-case{background:#101010}
        .com-case-grid{display:grid;grid-template-columns:1.06fr .94fr;min-height:710px;border:1px solid var(--line);background:#151515}
        .com-case-image{position:relative;min-height:600px;overflow:hidden}
        .com-case-image img{object-fit:cover;object-position:center}
        .com-case-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .com-case-copy h2{font-size:clamp(58px,6vw,86px);margin:17px 0 23px}
        .com-case-copy h2 em{display:block;color:var(--gold);font-size:.62em;margin-top:8px}
        .com-case-copy p{color:var(--muted);font-size:15px;line-height:1.75}
        .com-case-facts{display:grid;grid-template-columns:repeat(3,1fr);margin:35px 0;border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .com-case-fact{padding:20px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
        .com-case-fact strong{display:block;font-family:'Bebas Neue',Impact,sans-serif;font-size:30px;font-weight:400;letter-spacing:.04em}
        .com-case-fact span{display:block;margin-top:5px;color:#737378;font-size:8px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
        .com-inline-link{display:inline-flex;color:#fff;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
        .com-inline-link span{color:var(--red);margin-left:8px}

        .com-spot-grid{display:grid;grid-template-columns:1.12fr .88fr;min-height:640px;border:1px solid var(--line)}
        .com-spot-media{position:relative;min-height:540px;overflow:hidden}
        .com-spot-copy{display:flex;flex-direction:column;justify-content:center;padding:64px}
        .com-spot-copy h2{font-size:clamp(54px,5.8vw,82px);margin:17px 0 23px}
        .com-spot-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .com-spot-copy p{color:var(--muted);font-size:15px;line-height:1.75}
        .com-spot-copy .com-inline-link{margin-top:29px}

        .com-assets{background:#101010}
        .com-assets-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:72px;align-items:stretch}
        .com-assets-image{position:relative;min-height:700px;border:1px solid var(--line);overflow:hidden}
        .com-assets-image img{object-fit:cover;object-position:center}
        .com-assets-copy{display:flex;flex-direction:column;justify-content:center}
        .com-assets-copy h2{font-size:clamp(54px,5.8vw,82px);margin:16px 0 24px}
        .com-assets-copy h2 em{display:block;color:var(--gold);font-size:.64em;margin-top:8px}
        .com-assets-copy>p{color:var(--muted);font-size:15px;line-height:1.75}
        .com-deliverables{display:grid;grid-template-columns:repeat(2,1fr);margin-top:36px;border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .com-deliverable{min-height:92px;display:flex;align-items:center;padding:20px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
        .com-deliverable:before{content:'';width:7px;height:7px;margin-right:13px;background:var(--red)}

        .com-process-grid{display:grid;grid-template-columns:1.08fr .92fr;min-height:740px;border:1px solid var(--line)}
        .com-process-image{position:relative;min-height:600px;overflow:hidden}
        .com-process-image img{object-fit:cover;object-position:center}
        .com-process-copy{display:flex;flex-direction:column;justify-content:center;padding:60px}
        .com-process-copy h2{font-size:clamp(52px,5.6vw,78px);margin:16px 0 22px}
        .com-process-copy h2 em{display:block;color:var(--gold);font-size:.65em;margin-top:8px}
        .com-process-copy>p{color:var(--muted);font-size:14px;line-height:1.75}
        .com-process-list{margin-top:32px;border-top:1px solid var(--line)}
        .com-process-item{display:grid;grid-template-columns:37px 145px 1fr;gap:14px;padding:19px 0;border-bottom:1px solid var(--line)}
        .com-process-number{color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:17px}
        .com-process-item h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:21px;font-weight:400;letter-spacing:.04em}
        .com-process-item p{color:#7f7f84;font-size:11px;line-height:1.6}

        .com-scope{background:#101010}
        .com-scope-grid{display:grid;grid-template-columns:.84fr 1.16fr;gap:1px;border:1px solid var(--line);background:var(--line)}
        .com-scope-copy,.com-scope-drivers{background:#141414;padding:58px}
        .com-scope-copy h2{font-size:clamp(52px,5.5vw,78px);margin:16px 0 24px}
        .com-scope-copy h2 em{display:block;color:var(--gold);font-size:.65em;margin-top:8px}
        .com-scope-copy>p{color:var(--muted);font-size:14px;line-height:1.75}
        .com-scope-note{margin-top:31px;padding:22px;border-left:3px solid var(--red);background:#101010;color:#aaa;font-size:12px;line-height:1.7}
        .com-scope-note strong{display:block;margin-bottom:7px;color:#fff;font-size:9px;letter-spacing:.15em;text-transform:uppercase}
        .com-scope-drivers h3{font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;font-weight:400;letter-spacing:.04em;text-transform:uppercase}
        .com-driver-list{margin-top:25px;border-top:1px solid var(--line)}
        .com-driver{display:flex;align-items:center;min-height:58px;border-bottom:1px solid var(--line);color:#b7b7ba;font-size:12px;font-weight:600;letter-spacing:.04em}
        .com-driver:before{content:'';width:7px;height:7px;margin-right:15px;background:var(--red)}

        .com-faq-wrap{max-width:1000px}
        .com-faq-head{text-align:center;margin-bottom:44px}
        .com-faq-head h2{font-size:clamp(52px,6vw,80px);margin-top:13px}
        .com-faq-head h2 em{color:var(--gold)}
        .com-faq{border-top:1px solid var(--line)}
        .com-faq details{border-bottom:1px solid var(--line);padding:0 4px}
        .com-faq summary{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:78px;cursor:pointer;list-style:none;color:#eee;font-size:16px;font-weight:600}
        .com-faq summary::-webkit-details-marker{display:none}
        .com-faq summary:after{content:'+';color:var(--red);font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;font-weight:400}
        .com-faq details[open] summary:after{content:'-'}
        .com-faq details p{max-width:800px;padding:0 0 26px;color:#8f8f94;font-size:14px;line-height:1.75}

        .com-related-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;border:1px solid var(--line);background:var(--line)}
        .com-related-card{min-height:230px;display:flex;flex-direction:column;padding:28px;background:#141414;transition:background .18s}
        .com-related-card:hover{background:#1a1a1a}
        .com-related-card h3{margin-top:auto;font-family:'Bebas Neue',Impact,sans-serif;font-size:29px;font-weight:400;letter-spacing:.035em;text-transform:uppercase}
        .com-related-card p{margin-top:12px;color:#85858a;font-size:12px;line-height:1.65}
        .com-related-card span{margin-top:22px;color:var(--red);font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}

        .com-cta{padding:118px 0;text-align:center;background:radial-gradient(circle at 50% 110%,rgba(204,0,0,.18),transparent 45%),#0c0c0c}
        .com-cta h2{font-size:clamp(56px,7vw,96px);margin-top:17px}
        .com-cta h2 em{color:var(--gold)}
        .com-cta p{margin:22px auto 0;max-width:630px;color:#9c9ca0;font-size:16px;line-height:1.7}
        .com-cta .com-actions{justify-content:center}

        @media(max-width:1050px){
          .com-case-grid,.com-spot-grid,.com-assets-grid,.com-process-grid{grid-template-columns:1fr}
          .com-assets-grid{gap:42px}
          .com-assets-image{min-height:570px}
          .com-scope-grid{grid-template-columns:1fr}
          .com-related-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:760px){
          .com-container{width:min(100% - 40px,1240px)}
          .com-hero{min-height:790px}
          .com-hero-image{object-position:60% center}
          .com-hero-scrim{background:linear-gradient(90deg,rgba(0,0,0,.94),rgba(0,0,0,.44)),linear-gradient(0deg,#090909 0%,transparent 38%)}
          .com-hero-inner{padding:138px 0 42px}
          .com-hero-copy{padding-left:0}
          .com-hero h1{font-size:58px}
          .com-hero-deck{font-size:15px}
          .com-proof{grid-template-columns:repeat(2,1fr);margin-top:42px}
          .com-proof-item:nth-child(2){border-right:0}.com-proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .com-clients-inner{grid-template-columns:1fr;padding-top:24px}
          .com-clients-title{text-align:center;padding-bottom:20px}
          .com-client-grid{grid-template-columns:repeat(2,1fr);border-left:0;border-top:1px solid var(--line)}
          .com-client:nth-child(2){border-right:0}.com-client:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .com-section{padding:76px 0}
          .com-section-head{grid-template-columns:1fr;gap:24px}
          .com-format-grid{grid-template-columns:1fr}
          .com-format{min-height:250px;padding:26px 23px}
          .com-approach-note{flex-direction:column;gap:12px}
          .com-approach-grid{grid-template-columns:1fr}
          .com-approach{min-height:310px;padding:27px 23px}
          .com-approach h3{margin-top:42px}
          .com-case-image{min-height:410px}
          .com-case-copy,.com-spot-copy,.com-process-copy{padding:39px 25px}
          .com-case-facts{grid-template-columns:1fr}
          .com-spot-media{min-height:360px}
          .com-assets-image{min-height:500px}
          .com-deliverables{grid-template-columns:1fr}
          .com-process-image{min-height:410px}
          .com-process-item{grid-template-columns:33px 108px 1fr;gap:10px}
          .com-scope-copy,.com-scope-drivers{padding:39px 25px}
          .com-faq summary{font-size:14px}
          .com-related-grid{grid-template-columns:1fr}
          .com-related-card{min-height:210px}
          .com-cta{padding:84px 0}
          .com-button{width:100%}
        }
      `}</style>

      <main className="com-page">
        <section className="com-hero">
          <Image
            className="com-hero-image"
            src="/images/rbfcu-bts-porch.jpg"
            alt="Commercial production crew filming performers for a Texas campaign"
            fill
            priority
            sizes="100vw"
          />
          <div className="com-hero-scrim" />
          <div className="com-hero-inner">
            <div className="com-container">
              <div className="com-hero-copy">
                <p className="com-eyebrow">Commercial video production in San Antonio</p>
                <h1 className="com-display">Make the Spot. <em>Build the Campaign.</em></h1>
                <p className="com-hero-deck">
                  Media Bar develops and produces commercials that carry one strong idea across
                  broadcast, connected TV, digital, social, and every version the campaign needs.
                </p>
                <div className="com-actions">
                  <Link href="/project-planner" className="com-button com-button-primary">Plan a Commercial</Link>
                  <Link href="/work/rbfcu-go-beyond-banking" className="com-button com-button-secondary">See the Case Study</Link>
                </div>
              </div>
              <div className="com-proof" aria-label="Featured RBFCU campaign results and Media Bar credentials">
                <div className="com-proof-item">
                  <div className="com-proof-value">5</div>
                  <div className="com-proof-label">Broadcast spots</div>
                </div>
                <div className="com-proof-item">
                  <div className="com-proof-value">4</div>
                  <div className="com-proof-label">Texas markets</div>
                </div>
                <div className="com-proof-item">
                  <div className="com-proof-value">5M+</div>
                  <div className="com-proof-label">Campaign views</div>
                </div>
                <div className="com-proof-item">
                  <div className="com-proof-value">3</div>
                  <div className="com-proof-label">Emmy Awards</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <QuickContactBar />

        <section className="com-clients" aria-label="Selected clients">
          <div className="com-container com-clients-inner">
            <p className="com-clients-title">Commercial production for Texas teams and national brands</p>
            <div className="com-client-grid">
              {clients.map((client) => (
                <div className="com-client" key={client.name}>
                  <Image src={client.logo} alt={`${client.name} logo`} width={150} height={54} sizes="150px" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="com-section">
          <div className="com-container">
            <div className="com-section-head">
              <div>
                <p className="com-eyebrow">Built for the channel and the audience</p>
                <h2 className="com-display com-section-title">One Idea. <em>Every Place It Runs.</em></h2>
              </div>
              <p className="com-section-intro">
                A commercial is more than a thirty-second edit. The concept, performances, visual
                language, pacing, and final specifications all need to work together for the campaign.
              </p>
            </div>
            <div className="com-format-grid">
              {formats.map((item) => (
                <article className="com-format" key={item.title}>
                  <span className="com-format-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <MediaBarAnswersFeature
          title="Local TV commercials."
          emphasis="What shapes the cost?"
          description="Ruben explains how the concept, production plan, talent rights, post-production, deliverables, and media placement shape a responsible commercial estimate."
          slugs={['local-tv-commercial-cost-texas']}
          placement="commercials"
        />

        <section className="com-section">
          <div className="com-container">
            <div className="com-section-head">
              <div>
                <p className="com-eyebrow">Choose the right production approach</p>
                <h2 className="com-display com-section-title">Start With the Goal. <em>Then Build the Scope.</em></h2>
              </div>
              <p className="com-section-intro">
                The right approach depends on what the commercial must accomplish, how many
                audiences it must reach, and where the finished creative will run.
              </p>
            </div>
            <div className="com-approach-note">
              <strong>Planning approaches, not fixed packages</strong>
              <p>
                Every Media Bar commercial is quoted around its specific creative and production
                needs. These approaches help organize the conversation before we build a tailored scope.
              </p>
            </div>
            <div className="com-approach-grid">
              {approaches.map((item) => (
                <article className="com-approach" key={item.title}>
                  <span className="com-approach-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="com-approach-best">
                    <span>Best fit</span>
                    <p>{item.bestFor}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="com-section com-case">
          <div className="com-container">
            <div className="com-case-grid">
              <div className="com-case-image">
                <Image
                  src="/images/rbfcu-stills-grid.jpg"
                  alt="Scenes from the RBFCU Go Beyond Banking commercial campaign"
                  fill
                  sizes="(max-width: 1050px) 100vw, 54vw"
                />
              </div>
              <div className="com-case-copy">
                <p className="com-eyebrow">Featured campaign</p>
                <h2 className="com-display">RBFCU <em>Go Beyond Banking.</em></h2>
                <p>
                  Media Bar produced a five-spot broadcast campaign built around different ways
                  RBFCU helps members move forward. The campaign expanded across four Texas markets
                  while keeping one clear brand idea consistent.
                </p>
                <div className="com-case-facts">
                  <div className="com-case-fact"><strong>5</strong><span>Broadcast spots</span></div>
                  <div className="com-case-fact"><strong>4</strong><span>Texas markets</span></div>
                  <div className="com-case-fact"><strong>5M+</strong><span>Campaign views</span></div>
                </div>
                <Link href="/work/rbfcu-go-beyond-banking" className="com-inline-link">Read the full case study <span>→</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="com-section">
          <div className="com-container">
            <div className="com-spot-grid">
              <div className="com-spot-media">
                <VimeoPlayer
                  videoId="1138375371"
                  title="RBFCU Coyote commercial"
                  thumbnailUrl="https://i.vimeocdn.com/video/2084915704-7da55912ad6af7c76d003d5a84c9b2667b1338afb9f36bd09b64d2d3d27d0bb4-d_1280?region=us"
                />
              </div>
              <div className="com-spot-copy">
                <p className="com-eyebrow">Watch a finished spot</p>
                <h2 className="com-display">Thirty Seconds. <em>A Complete Brand Moment.</em></h2>
                <p>
                  A memorable commercial needs a clear idea, a confident performance, a purposeful
                  frame, and an edit that lands before the time runs out. Watch one of the spots
                  from the RBFCU campaign.
                </p>
                <Link href="/work" className="com-inline-link">Explore more commercial work <span>→</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="com-section com-assets">
          <div className="com-container com-assets-grid">
            <div className="com-assets-image">
              <Image
                src="/images/commercials-reel-spurs-coyote.jpg"
                alt="Commercial production with a helicopter and Media Bar crew"
                fill
                sizes="(max-width: 1050px) 100vw, 43vw"
              />
            </div>
            <div className="com-assets-copy">
              <p className="com-eyebrow">Plan the complete campaign system</p>
              <h2 className="com-display">Shoot Once. <em>Deliver Every Version.</em></h2>
              <p>
                We identify the media plan, aspect ratios, cut lengths, captions, and technical
                specifications before production. That gives the crew a clear coverage plan and
                gives the campaign more useful content from the same shoot.
              </p>
              <div className="com-deliverables">
                {deliverables.map((item) => <div className="com-deliverable" key={item}>{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="com-section com-scope">
          <div className="com-container">
            <div className="com-scope-grid">
              <div className="com-scope-copy">
                <p className="com-eyebrow">Custom commercial estimates</p>
                <h2 className="com-display">What Shapes <em>Your Production Scope.</em></h2>
                <p>
                  There is no one-size-fits-all commercial quote because every production is built
                  around a different business goal, creative idea, audience, schedule, and delivery plan.
                  We define those decisions first, then prepare a tailored estimate.
                </p>
                <div className="com-scope-note">
                  <strong>Production and media placement are different</strong>
                  Media Bar scopes the creative production and prepares the finished spots for their
                  required outlets. Media buying, airtime, and platform ad spend are separate and are
                  typically managed by the client or its media partner.
                </div>
              </div>
              <div className="com-scope-drivers">
                <h3>Main quote drivers</h3>
                <div className="com-driver-list">
                  {quoteDrivers.map((driver) => <div className="com-driver" key={driver}>{driver}</div>)}
                </div>
                <div className="com-actions">
                  <Link href="/project-planner" className="com-button com-button-primary">Build a Tailored Estimate</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="com-section">
          <div className="com-container">
            <div className="com-process-grid">
              <div className="com-process-image">
                <Image
                  src="/images/bts-spurs-coyote.jpg"
                  alt="Media Bar camera operator filming the Spurs Coyote for a commercial"
                  fill
                  sizes="(max-width: 1050px) 100vw, 56vw"
                />
              </div>
              <div className="com-process-copy">
                <p className="com-eyebrow">From campaign brief to final traffic</p>
                <h2 className="com-display">Every Decision <em>Works Backward From Air.</em></h2>
                <p>
                  Air dates and launch dates do not move. We build the creative, production, review,
                  and delivery schedule around the places the campaign needs to run.
                </p>
                <div className="com-process-list">
                  {process.map((item) => (
                    <article className="com-process-item" key={item.title}>
                      <span className="com-process-number">{item.number}</span>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="com-section">
          <div className="com-container">
            <div className="com-section-head">
              <div>
                <p className="com-eyebrow">Keep planning</p>
                <h2 className="com-display com-section-title">Build the Rest of <em>Your Campaign.</em></h2>
              </div>
              <p className="com-section-intro">
                Explore the services and proof that help turn a commercial concept into a complete,
                channel-ready campaign.
              </p>
            </div>
            <div className="com-related-grid">
              {relatedServices.map((service) => (
                <Link href={service.href} className="com-related-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <span>Explore service →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="com-section">
          <div className="com-container com-faq-wrap">
            <div className="com-faq-head">
              <p className="com-eyebrow">Commercial production FAQ</p>
              <h2 className="com-display">What Campaign Teams <em>Ask First.</em></h2>
            </div>
            <div className="com-faq">
              {commercialVideoFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="com-cta">
          <div className="com-container">
            <p className="com-eyebrow">Start with the campaign brief</p>
            <h2 className="com-display">Tell Us Where the Spot <em>Needs to Run.</em></h2>
            <p>
              Share the audience, message, channels, launch date, and deliverables. We will turn
              them into a practical commercial production scope.
            </p>
            <div className="com-actions">
              <Link href="/project-planner" className="com-button com-button-primary">Start the Project Planner</Link>
              <Link href="/contact" className="com-button com-button-secondary">Talk With Our Team</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
