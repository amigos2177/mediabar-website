'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/Layout'

const spots = [
  {
    vid: 'cQHqvEHFx2M',
    num: 'SPOT 01 · ANTHEM',
    title: 'We Go Beyond Banking',
    copy: "The campaign's flagship anthem spot that establishes the “Go Beyond Banking” promise and sets the visual and emotional tone for the entire library.",
    alt: 'We Go Beyond Banking, RBFCU commercial by Media Bar Productions',
  },
  {
    vid: 'M44en_QEBlQ',
    num: 'SPOT 02 · AUTO LENDING',
    title: 'RBFCU Finances the Miles That Matter',
    copy: "A story about the journeys a vehicle makes possible, positioning RBFCU's auto financing around the moments and memories it helps members reach.",
    alt: 'RBFCU Finances the Miles That Matter, RBFCU commercial by Media Bar Productions',
  },
  {
    vid: 'AT59Z4LIu8Y',
    num: 'SPOT 03 · MEMBERSHIP',
    title: 'Generations of Trust at RBFCU',
    copy: "A portrait of long-term membership, showing how families bank with RBFCU across generations and reinforcing trust as the brand's core equity.",
    alt: 'Generations of Trust at RBFCU, RBFCU commercial by Media Bar Productions',
  },
  {
    vid: 'hpHKrVXhWnY',
    num: 'SPOT 04 · CARDS & REWARDS',
    title: 'Experience More with Every Purchase',
    copy: "An everyday-value story built around RBFCU's cards and rewards, turning routine purchases into a benefit members feel.",
    alt: 'Experience More with Every Purchase, RBFCU commercial by Media Bar Productions',
  },
  {
    vid: 'CuJdvSJ9bAE',
    num: 'SPOT 05 · LIFE MILESTONES',
    title: 'From First Steps to Forever Memories',
    copy: "A milestone-driven narrative following members through life's biggest moments, the emotional heart of the “Go Beyond” promise.",
    alt: 'From First Steps to Forever Memories, RBFCU commercial by Media Bar Productions',
  },
]

export default function RbfcuCaseStudyPage() {
  const [playing, setPlaying] = useState<string | null>(null)

  return (
    <Layout>
      <style>{`
        .rb-page{--line:rgba(255,255,255,.10);--panel:#101011;--muted:#9a9a9e}
        .rb-wrap{max-width:1180px;margin:0 auto;padding:0 28px}
        .rb-disp{font-family:'Bebas Neue',Impact,sans-serif;text-transform:uppercase;font-weight:400;letter-spacing:1.5px;line-height:.96}
        .rb-it{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;text-transform:none;letter-spacing:0;color:#fff}
        .rb-eyebrow{color:var(--red);font-size:12px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase}
        .rb-btn{display:inline-block;font-weight:700;font-size:13px;letter-spacing:2px;text-transform:uppercase;padding:15px 38px;border-radius:2px;transition:.15s}
        .rb-btn.red{background:var(--red);color:#fff}
        .rb-btn.red:hover{background:#e00}
        .rb-btn.ghost{border:1px solid rgba(255,255,255,.35);color:#fff}
        .rb-btn.ghost:hover{border-color:#fff;background:rgba(255,255,255,.06)}

        /* hero */
        .rb-hero{position:relative;overflow:hidden;border-bottom:1px solid var(--line)}
        .rb-hero .rb-strip{position:absolute;inset:0;background-size:cover;background-position:center 30%;opacity:.45;filter:grayscale(6%)}
        .rb-hero .rb-scrim{position:absolute;inset:0;background:radial-gradient(120% 90% at 50% 0%,rgba(10,10,10,.55),rgba(10,10,10,.93) 70%,#0a0a0a)}
        .rb-hero .rb-inner{position:relative;z-index:2;text-align:center;padding:84px 0 64px}
        .rb-hero .rb-eyebrow{display:block;margin-bottom:20px}
        .rb-hero h1{margin:0}
        .rb-hero h1 .rb-l1{display:block;font-size:84px;color:#fff}
        .rb-hero h1 .rb-l2{display:block;font-size:54px;color:var(--gold);margin-top:4px}
        .rb-hero .rb-deck{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:21px;color:#d6d6d8;max-width:720px;margin:26px auto 0;line-height:1.5}
        .rb-pills{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:30px}
        .rb-pill{display:flex;align-items:center;gap:9px;background:#141416;border:1px solid var(--line);border-radius:3px;padding:9px 16px;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#e7e7e9}
        .rb-pill .rb-dot{width:7px;height:7px;border-radius:50%;background:var(--red)}
        .rb-hero .rb-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:34px}

        .rb-section{padding:80px 0}
        .rb-lab{display:block;margin-bottom:14px}
        h2.rb-sec{font-size:58px;color:#fff;margin-bottom:8px}
        .rb-intro{color:var(--muted);font-size:18px;max-width:780px;line-height:1.7}

        /* snapshot */
        .rb-snap{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:6px;overflow:hidden;margin:40px 0 10px}
        .rb-snap .rb-r{background:var(--panel);padding:20px 22px}
        .rb-snap .rb-k{font-size:11px;letter-spacing:1.6px;text-transform:uppercase;color:var(--red);font-weight:700}
        .rb-snap .rb-v{font-size:15px;font-weight:600;color:#fff;margin-top:6px}
        .rb-two{display:grid;grid-template-columns:1fr 1fr;gap:48px;margin-top:46px}
        .rb-two h4{font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--red);font-weight:700;margin-bottom:10px}
        .rb-two p{color:var(--muted)}

        /* work */
        .rb-work{background:#0c0c0d;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .rb-spots{display:grid;gap:24px;margin-top:40px}
        .rb-spot{display:grid;grid-template-columns:44% 56%;background:var(--panel);border:1px solid var(--line);border-radius:8px;overflow:hidden}
        .rb-player{position:relative;cursor:pointer;background:#000;aspect-ratio:16/9}
        .rb-player .rb-thumb{width:100%;height:100%;object-fit:cover;opacity:.86;transition:.2s}
        .rb-player:hover .rb-thumb{opacity:1}
        .rb-player .rb-playbtn{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:64px;height:64px;border-radius:50%;background:var(--red);box-shadow:0 6px 22px rgba(0,0,0,.5)}
        .rb-player .rb-playbtn:after{content:"";position:absolute;left:25px;top:19px;border-left:21px solid #fff;border-top:13px solid transparent;border-bottom:13px solid transparent}
        .rb-player iframe{width:100%;height:100%;border:0;display:block}
        .rb-spotmeta{padding:28px 30px;align-self:center}
        .rb-spotnum{font-size:12px;font-weight:700;letter-spacing:1.6px;color:var(--red)}
        .rb-spotmeta h3{font-family:'Bebas Neue',sans-serif;text-transform:uppercase;letter-spacing:1px;font-weight:400;font-size:28px;color:#fff;margin:7px 0 9px}
        .rb-spotmeta p{color:var(--muted);font-size:15px}
        .rb-watch{display:inline-block;margin-top:14px;color:var(--red);font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase}

        /* results */
        .rb-bigstats{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:36px}
        .rb-bigstats .rb-b{background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:30px 26px;text-align:center}
        .rb-bigstats .rb-n{font-family:'Bebas Neue',sans-serif;font-size:72px;line-height:.9;color:var(--gold);letter-spacing:1px}
        .rb-bigstats .rb-l{font-size:12px;letter-spacing:1.6px;text-transform:uppercase;color:var(--muted);margin-top:12px}
        .rb-markets{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:24px}
        .rb-markets .rb-m{text-align:center;border:1px solid var(--line);border-radius:6px;padding:18px 8px;background:var(--panel)}
        .rb-markets .rb-m .rb-city{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:1px;color:#fff}
        .rb-markets .rb-m .rb-st{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-top:3px}
        .rb-whylist{margin-top:44px;display:grid;gap:20px}
        .rb-whylist .rb-i{display:flex;gap:18px;align-items:flex-start}
        .rb-whylist .rb-no{font-family:'Bebas Neue',sans-serif;font-size:30px;color:var(--red);flex:0 0 36px;line-height:1}
        .rb-whylist .rb-h{font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:.8px;color:#fff;text-transform:uppercase}
        .rb-whylist .rb-d{color:var(--muted);font-size:15px;margin-top:2px}

        /* cta */
        .rb-cta{text-align:center;background:radial-gradient(120% 120% at 50% 0%,#161617,#0a0a0a)}
        .rb-cta .rb-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:30px}
        .rb-cta .rb-phone{display:block;margin-top:22px;font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:1px;color:#fff}

        /* faq */
        .rb-faq{background:#0c0c0d;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .rb-faq .rb-qa{max-width:880px;margin-top:34px}
        .rb-faq .rb-qitem{border-top:1px solid var(--line);padding:22px 0}
        .rb-faq .rb-qitem:first-child{border-top:0}
        .rb-faq .rb-q{font-family:'DM Sans',sans-serif;font-size:19px;font-weight:600;color:#fff;letter-spacing:0;text-transform:none;margin-bottom:8px}
        .rb-faq .rb-a{color:var(--muted);font-size:16px;line-height:1.65}

        @media(max-width:860px){
          .rb-hero h1 .rb-l1{font-size:52px}.rb-hero h1 .rb-l2{font-size:34px}
          h2.rb-sec{font-size:40px}
          .rb-spot{grid-template-columns:1fr}
          .rb-snap,.rb-bigstats{grid-template-columns:1fr}
          .rb-two{grid-template-columns:1fr;gap:28px}
          .rb-markets{grid-template-columns:1fr 1fr}
        }
      `}</style>

      <main className="rb-page">
        <article>
          {/* HERO */}
          <div className="rb-hero">
            <div
              className="rb-strip"
              aria-hidden="true"
              style={{ backgroundImage: "url('/images/rbfcu-bts-riverside.jpg')" }}
            />
            <div className="rb-scrim" />
            <div className="rb-wrap rb-inner">
              <span className="rb-eyebrow">Case Study · Broadcast Commercial Production</span>
              <h1 className="rb-disp">
                <span className="rb-l1">RBFCU</span>
                <span className="rb-l2">Go Beyond Banking</span>
              </h1>
              <p className="rb-deck">
                A five-spot broadcast campaign for one of Texas&apos;s largest credit unions, produced, edited, and co-written by Media Bar Productions and aired to millions across four major Texas markets.
              </p>
              <div className="rb-pills">
                <span className="rb-pill"><span className="rb-dot" />5 Broadcast Spots</span>
                <span className="rb-pill"><span className="rb-dot" />4 Texas Markets</span>
                <span className="rb-pill"><span className="rb-dot" />5M+ Views</span>
                <span className="rb-pill"><span className="rb-dot" />Millions Reached On-Air</span>
              </div>
              <div className="rb-ctas">
                <a className="rb-btn ghost" href="#work">Watch the Work</a>
                <Link className="rb-btn red" href="/contact">Get a Quote</Link>
              </div>
            </div>
          </div>

          {/* OVERVIEW */}
          <section className="rb-section">
            <div className="rb-wrap">
              <span className="rb-eyebrow rb-lab">The Engagement</span>
              <h2 className="rb-sec rb-disp">
                A Statewide Brand Promise, <span className="rb-it">Told Five Ways</span>
              </h2>
              <p className="rb-intro">
                Randolph-Brooks Federal Credit Union (RBFCU) is one of the largest credit unions in Texas, serving more than a million members. To bring its &ldquo;Go Beyond Banking&rdquo; promise to life on air, RBFCU needed broadcast-grade commercials that felt warm and human, not like traditional bank advertising, and that could carry across very different Texas markets while staying unmistakably on brand.
              </p>
              <p className="rb-intro" style={{ marginTop: '14px' }}>
                Media Bar Productions delivered a coordinated set of five spots: concepting and writing two of them, and handling full production and post-production across the campaign, from on-set direction and cinematography through editing, color, and final broadcast delivery.
              </p>

              <div className="rb-snap">
                <div className="rb-r"><div className="rb-k">Client</div><div className="rb-v">RBFCU (Randolph-Brooks Federal Credit Union)</div></div>
                <div className="rb-r"><div className="rb-k">Campaign</div><div className="rb-v">Go Beyond Banking</div></div>
                <div className="rb-r"><div className="rb-k">Deliverables</div><div className="rb-v">5 broadcast commercials</div></div>
                <div className="rb-r"><div className="rb-k">Media Bar Scope</div><div className="rb-v">Production · Post · Writing (2 spots)</div></div>
                <div className="rb-r"><div className="rb-k">Markets</div><div className="rb-v">San Antonio · Austin · Corpus Christi · Dallas</div></div>
                <div className="rb-r"><div className="rb-k">Distribution</div><div className="rb-v">Broadcast TV + YouTube (5M+ views)</div></div>
              </div>

              <div className="rb-two">
                <div>
                  <h4>The Challenge</h4>
                  <p>Make a financial institution feel personal. Banking advertising tends to default to rate tables and stock footage. RBFCU wanted the opposite: emotional, cinematic storytelling that showed how the credit union shows up in real members&apos; lives, and that held up at broadcast quality across four distinct Texas audiences.</p>
                </div>
                <div>
                  <h4>The Approach</h4>
                  <p>Media Bar built each spot around a single human moment, whether a first car, a growing family, a milestone purchase, or a generational relationship, letting the brand promise land through story rather than sales copy. One visual language, five chapters, fully produced and finished in-house.</p>
                </div>
              </div>
            </div>
          </section>

          {/* WORK */}
          <section className="rb-work rb-section" id="work">
            <div className="rb-wrap">
              <span className="rb-eyebrow rb-lab">The Work</span>
              <h2 className="rb-sec rb-disp">
                Five Spots, <span className="rb-it">One Campaign</span>
              </h2>
              <p className="rb-intro">
                Each commercial stands on its own and reinforces the same promise. Together they gave RBFCU a flexible, market-ready library that aired across Texas and now totals more than five million views online. Click any spot to watch.
              </p>
              <div className="rb-spots">
                {spots.map((s) => (
                  <article className="rb-spot" key={s.vid}>
                    <div
                      className="rb-player"
                      role="button"
                      tabIndex={0}
                      aria-label={`Play: ${s.title}`}
                      onClick={() => setPlaying(s.vid)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setPlaying(s.vid)
                        }
                      }}
                    >
                      {playing === s.vid ? (
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${s.vid}?autoplay=1&rel=0`}
                          title={`${s.title}, RBFCU commercial by Media Bar Productions`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <Image
                            className="rb-thumb"
                            src={`https://i.ytimg.com/vi/${s.vid}/hqdefault.jpg`}
                            alt={s.alt}
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                          />
                          <span className="rb-playbtn" aria-hidden="true" />
                        </>
                      )}
                    </div>
                    <div className="rb-spotmeta">
                      <div className="rb-spotnum">{s.num}</div>
                      <h3>{s.title}</h3>
                      <p>{s.copy}</p>
                      <a
                        className="rb-watch"
                        href={`https://www.youtube.com/watch?v=${s.vid}`}
                        target="_blank"
                        rel="noopener"
                      >
                        Watch on YouTube &rsaquo;
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* RESULTS */}
          <section className="rb-section">
            <div className="rb-wrap">
              <span className="rb-eyebrow rb-lab">Results &amp; Impact</span>
              <h2 className="rb-sec rb-disp">
                Aired to Millions. <span className="rb-it">Watched Millions More.</span>
              </h2>
              <div className="rb-bigstats">
                <div className="rb-b"><div className="rb-n">5M+</div><div className="rb-l">YouTube views across the campaign</div></div>
                <div className="rb-b"><div className="rb-n">4</div><div className="rb-l">Major Texas media markets</div></div>
                <div className="rb-b"><div className="rb-n">5</div><div className="rb-l">Broadcast-grade commercials</div></div>
              </div>
              <div className="rb-markets">
                <div className="rb-m"><div className="rb-city">San Antonio</div><div className="rb-st">Texas</div></div>
                <div className="rb-m"><div className="rb-city">Austin</div><div className="rb-st">Texas</div></div>
                <div className="rb-m"><div className="rb-city">Corpus Christi</div><div className="rb-st">Texas</div></div>
                <div className="rb-m"><div className="rb-city">Dallas</div><div className="rb-st">Texas</div></div>
              </div>
              <div className="rb-whylist">
                <div className="rb-i"><div className="rb-no">01</div><div><div className="rb-h">Story Over Sales</div><div className="rb-d">Leading with human moments made a financial brand feel personal, and made the spots watchable enough to earn millions of organic views, not just paid impressions.</div></div></div>
                <div className="rb-i"><div className="rb-no">02</div><div><div className="rb-h">One Look, Many Markets</div><div className="rb-d">A single visual language scaled cleanly from San Antonio to Dallas, giving RBFCU a consistent on-air identity across very different audiences.</div></div></div>
                <div className="rb-i"><div className="rb-no">03</div><div><div className="rb-h">Produced and Finished In-House</div><div className="rb-d">Concept, production, and post under one roof kept the campaign cohesive, on-brand, and broadcast-ready, from first frame to final delivery.</div></div></div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="rb-faq rb-section">
            <div className="rb-wrap">
              <span className="rb-eyebrow rb-lab">Common Questions</span>
              <h2 className="rb-sec rb-disp">
                RBFCU Campaign <span className="rb-it">FAQ</span>
              </h2>
              <div className="rb-qa">
                <div className="rb-qitem"><h3 className="rb-q">Who produced RBFCU&apos;s &ldquo;Go Beyond Banking&rdquo; commercial campaign?</h3><p className="rb-a">Media Bar Productions, an Emmy-winning video production company based in San Antonio, Texas, produced and edited the &ldquo;Go Beyond Banking&rdquo; campaign for RBFCU and co-wrote two of the five spots.</p></div>
                <div className="rb-qitem"><h3 className="rb-q">Where did the RBFCU &ldquo;Go Beyond Banking&rdquo; campaign air?</h3><p className="rb-a">The commercials aired on broadcast television across four major Texas markets, San Antonio, Austin, Corpus Christi, and Dallas, and are also published on YouTube.</p></div>
                <div className="rb-qitem"><h3 className="rb-q">How many commercials were in the campaign, and how many views did it earn?</h3><p className="rb-a">The campaign included five broadcast spots that together have earned more than five million views on YouTube.</p></div>
                <div className="rb-qitem"><h3 className="rb-q">What did Media Bar Productions handle on the RBFCU campaign?</h3><p className="rb-a">Media Bar Productions handled full production and post-production, including directing, cinematography, editing, color, and final broadcast delivery, and wrote two of the five commercials.</p></div>
                <div className="rb-qitem"><h3 className="rb-q">What is RBFCU?</h3><p className="rb-a">RBFCU (Randolph-Brooks Federal Credit Union) is one of the largest credit unions in Texas, serving more than a million members.</p></div>
              </div>
            </div>
          </section>
        </article>

        {/* CTA */}
        <section className="rb-cta rb-section" id="contact">
          <div className="rb-wrap">
            <span className="rb-eyebrow rb-lab">Start a Project</span>
            <h2 className="rb-sec rb-disp">
              Let&apos;s Create Your Next <span className="rb-it">Campaign.</span>
            </h2>
            <p className="rb-intro" style={{ margin: '0 auto' }}>
              Cinematic, broadcast-ready brand storytelling, concept through final delivery.
            </p>
            <div className="rb-ctas">
              <Link className="rb-btn red" href="/contact">Get a Quote</Link>
              <a className="rb-btn ghost" href="/static/RBFCU_Go_Beyond_Banking_Case_Study.pdf" download>Download the PDF</a>
            </div>
            <a className="rb-phone" href="tel:2102799442">210-279-9442</a>
          </div>
        </section>
      </main>
    </Layout>
  )
}
