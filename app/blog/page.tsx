'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const filters = ['All Posts', 'Industry', 'Behind the Scenes', 'San Antonio', 'Tips & Advice']

const posts = [
  { slug: 'keeping-creative-in-san-antonio', title: 'Why Keeping Creative in San Antonio Matters Now More Than Ever', date: 'July 8, 2025', category: 'San Antonio', excerpt: 'When national agencies parachute in for a shoot, they leave. We stay. That difference — being rooted here — shapes every creative decision we make and every relationship we build.', featured: true },
  { slug: 'what-makes-a-good-brand-video', title: 'What Makes a Good Brand Video (And What Kills One)', date: 'June 24, 2025', category: 'Tips & Advice', excerpt: 'Most brand videos fail in the first 8 seconds. Here\'s the framework we use to hook viewers and keep them through the message.' },
  { slug: 'emmy-awards-2025', title: 'Behind the Emmy: What That Award Actually Represents', date: 'June 10, 2025', category: 'Behind the Scenes', excerpt: 'We\'ve won three. They\'re meaningful, but not for the reason most people assume. What the Emmy process taught us about the craft.' },
  { slug: 'corporate-video-roi', title: 'How to Measure the ROI of a Corporate Video', date: 'May 28, 2025', category: 'Industry', excerpt: 'Video isn\'t a cost center — it\'s a revenue lever. But you have to set up the right metrics from the start to prove it.' },
  { slug: 'heb-commercial-bts', title: 'Behind the Scenes: The HEB Commercial That Almost Didn\'t Happen', date: 'May 14, 2025', category: 'Behind the Scenes', excerpt: 'The location fell through at 10 PM the night before. Here\'s how we rebuilt the shot list from scratch and pulled it off.' },
  { slug: 'san-antonio-film-scene', title: 'San Antonio\'s Film Scene Is Quietly Growing. Here\'s What That Means.', date: 'April 30, 2025', category: 'San Antonio', excerpt: 'More productions are choosing San Antonio over Austin. We look at why — and what it means for local businesses that need video.' },
  { slug: 'vertical-video-for-brands', title: 'Vertical Video for Brands: Stop Fighting It, Start Planning for It', date: 'April 16, 2025', category: 'Tips & Advice', excerpt: 'Your audience is watching on their phone. Your video strategy needs to account for that from day one — not as an afterthought.' },
  { slug: 'live-streaming-mistakes', title: '7 Live Streaming Mistakes That Will Kill Your Broadcast', date: 'April 2, 2025', category: 'Tips & Advice', excerpt: 'We\'ve streamed hundreds of events. Here are the mistakes we see brands and agencies make before the stream even starts.' },
  { slug: 'medical-video-hipaa', title: 'HIPAA and Medical Video: What You Actually Need to Know', date: 'March 19, 2025', category: 'Industry', excerpt: 'Patient privacy requirements are real and the penalties for violations are severe. Here\'s how to produce medical video the right way.' },
  { slug: 'food-video-lighting', title: 'Food Video Lighting: The Difference Between Appetizing and Awful', date: 'March 5, 2025', category: 'Tips & Advice', excerpt: 'Light is the difference between food that sells and food that looks like a stock photo from 2009. Here\'s how we approach it.' },
  { slug: 'spurs-production-story', title: 'Five Years Shooting for the San Antonio Spurs', date: 'February 19, 2025', category: 'Behind the Scenes', excerpt: 'What we\'ve learned about producing video at the intersection of sports, brand, and community over five seasons with the silver and black.' },
  { slug: 'drone-regulations-texas', title: 'FAA Drone Regulations in Texas: A Practical Guide for Brands', date: 'February 5, 2025', category: 'Industry', excerpt: 'Part 107 certification is just the start. Here\'s what you need to know about permits, restricted airspace, and liability before you fly.' },
  { slug: 'testimonial-video-formula', title: 'The Testimonial Video Formula That Actually Converts', date: 'January 22, 2025', category: 'Tips & Advice', excerpt: 'Most testimonial videos are boring and forgettable. Here\'s the structure we use to get authentic emotion and a compelling story every time.' },
  { slug: 'san-antonio-business-community', title: 'The San Antonio Business Community That Built Media Bar', date: 'January 8, 2025', category: 'San Antonio', excerpt: '13 years in. The clients who took a chance on us early — and what we owe them.' },
  { slug: 'motion-graphics-vs-live-action', title: 'Motion Graphics vs. Live Action: How to Choose', date: 'December 18, 2024', category: 'Industry', excerpt: 'Animation isn\'t always cheaper and live action isn\'t always better. Here\'s the decision framework we use when clients ask.' },
  { slug: 'pre-production-checklist', title: 'The Pre-Production Checklist Every Client Should See', date: 'December 4, 2024', category: 'Tips & Advice', excerpt: 'Most productions go sideways because of decisions that weren\'t made before the shoot. Here\'s everything that needs to be locked before we roll cameras.' },
  { slug: 'real-estate-video-san-antonio', title: 'Real Estate Video in San Antonio: What Actually Sells Homes', date: 'November 20, 2024', category: 'San Antonio', excerpt: 'Not all real estate video is created equal. Here\'s what separates the listings that move from the ones that sit.' },
  { slug: 'color-grading-explained', title: 'Color Grading Explained: Why It Matters More Than You Think', date: 'November 6, 2024', category: 'Behind the Scenes', excerpt: 'Your video can be perfectly shot and completely ruined in post. Here\'s how color grading works and why we treat it as a creative decision, not a cleanup step.' },
  { slug: 'event-coverage-multicam', title: 'Multi-Camera Event Coverage: What You\'re Paying For', date: 'October 23, 2024', category: 'Industry', excerpt: 'Adding a second or third camera isn\'t just about coverage — it changes what\'s possible in the edit. Here\'s how to think about camera count for your event.' },
  { slug: 'interview-lighting-setups', title: 'Three Interview Lighting Setups (And When to Use Each)', date: 'October 9, 2024', category: 'Behind the Scenes', excerpt: 'The interview is the workhorse of corporate video. The lighting setup tells the viewer something before the subject says a word.' },
  { slug: 'unilever-case-study', title: 'Producing for Unilever: Scale, Speed, and Standards', date: 'September 25, 2024', category: 'Behind the Scenes', excerpt: 'What it\'s like to produce video for a global CPG brand operating at regional speed — and what other brands can learn from that model.' },
  { slug: 'why-local-production-company', title: 'Why a Local Production Company Beats a National Agency for Most Projects', date: 'September 11, 2024', category: 'Industry', excerpt: 'National agencies charge for overhead, travel, and account management. Local companies charge for work. Here\'s how to decide which is right for your project.' },
]

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All Posts')

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }) },
      { threshold: 0.08 }
    )
    reveals.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [activeFilter])

  const featured = posts.find((p) => p.featured)
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeFilter === 'All Posts' || p.category === activeFilter)

  return (
    <Layout>
      <style>{`
        :root{--red:#CC0000;--gold:#C9A84C;--black:#0A0A0A;--dark:#111111;--dark2:#181818}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease}.reveal.revealed{opacity:1;transform:none}

        .page-hero{position:relative;background:var(--black);padding:160px 64px 100px;overflow:hidden;border-bottom:1px solid #1a1a1a;text-align:center}
        .hero-bg-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(100px,16vw,240px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;position:relative}
        .hero-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(56px,8vw,100px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;margin-bottom:20px}
        .hero-h1 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;color:rgba(255,255,255,.55);text-transform:none}
        .hero-sub{font-size:17px;line-height:1.7;color:#777;max-width:560px;margin:0 auto;position:relative}

        .blog-wrap{background:var(--black)}
        .blog-inner{max-width:1200px;margin:0 auto;padding:80px 64px}

        .featured-card{background:var(--dark2);border:1px solid #1e1e1e;display:grid;grid-template-columns:1fr 1fr;margin-bottom:64px;transition:border-color .2s}.featured-card:hover{border-color:#333}
        .featured-img{background:var(--dark);border-right:1px solid #1e1e1e;min-height:340px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:#333;font-size:12px;letter-spacing:.1em;text-transform:uppercase}
        .featured-img-icon{font-size:48px;opacity:.3}
        .featured-content{padding:48px 44px;display:flex;flex-direction:column;justify-content:center}
        .featured-badge{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:12px}
        .featured-title{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(28px,3.5vw,42px);line-height:1.1;letter-spacing:.02em;color:#fff;text-transform:uppercase;margin-bottom:16px}
        .featured-excerpt{font-size:14px;line-height:1.8;color:#777;margin-bottom:24px}
        .featured-meta{display:flex;align-items:center;gap:20px;font-size:11px;color:#555;margin-bottom:28px}
        .featured-cat{color:var(--gold);font-weight:700;letter-spacing:.1em;text-transform:uppercase}
        .read-more{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;border-bottom:1px solid var(--red);padding-bottom:3px;transition:color .15s;display:inline-block}.read-more:hover{color:var(--red)}

        .filter-bar{display:flex;gap:4px;margin-bottom:48px;flex-wrap:wrap}
        .filter-pill{background:none;border:1px solid #2a2a2a;padding:9px 18px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#555;cursor:pointer;transition:color .15s,border-color .15s,background .15s;font-family:inherit}
        .filter-pill:hover{color:#aaa;border-color:#444}
        .filter-pill.active{color:#fff;border-color:var(--red);background:rgba(204,0,0,.08)}

        .posts-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
        .post-card{background:var(--dark2);border:1px solid #1e1e1e;overflow:hidden;transition:border-color .2s;display:flex;flex-direction:column}.post-card:hover{border-color:#333}
        .post-img{height:180px;background:var(--dark);border-bottom:1px solid #1e1e1e;display:flex;align-items:center;justify-content:center;font-size:32px;opacity:.4}
        .post-content{padding:28px 24px;flex:1;display:flex;flex-direction:column}
        .post-meta{display:flex;align-items:center;gap:12px;margin-bottom:12px}
        .post-cat{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--red)}
        .post-date{font-size:11px;color:#444}
        .post-title{font-size:16px;font-weight:700;line-height:1.4;color:#ddd;margin-bottom:12px;letter-spacing:.01em;flex:1}
        .post-excerpt{font-size:13px;line-height:1.7;color:#666;margin-bottom:20px}
        .post-card .read-more{font-size:10px;margin-top:auto}

        .empty-state{text-align:center;padding:80px 24px;color:#444;font-size:15px}

        .cta-wrap{background:var(--dark2);position:relative;overflow:hidden;text-align:center;padding:100px 64px;margin-top:0}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(40px,6vw,72px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .cta-sub{font-size:16px;color:#666;margin-bottom:40px;position:relative}
        .cta-actions{display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;position:relative}
        .btn-red{background:var(--red);color:#fff;padding:16px 48px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:background .15s;display:inline-block}.btn-red:hover{background:#aa0000}
        .cta-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;letter-spacing:.06em;color:#fff;transition:color .15s}.cta-phone:hover{color:var(--gold)}

        @media(max-width:900px){
          .page-hero{padding:120px 24px 72px}
          .blog-inner{padding:56px 24px}
          .featured-card{grid-template-columns:1fr}
          .featured-img{display:none}
          .featured-content{padding:36px 28px}
          .posts-grid{grid-template-columns:1fr 1fr}
          .cta-wrap{padding:72px 24px}
        }
        @media(max-width:600px){.posts-grid{grid-template-columns:1fr}}
      `}</style>

      <section className="page-hero">
        <div className="hero-bg-text" aria-hidden="true">BLOG</div>
        <p className="hero-eyebrow">From the Studio</p>
        <h1 className="hero-h1">Production <em>Insights</em></h1>
        <p className="hero-sub">Practical advice, behind-the-scenes stories, and perspective on video production — from a team that's been doing this for 13 years in San Antonio.</p>
      </section>

      <div className="blog-wrap">
        <div className="blog-inner">
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="featured-card reveal" style={{ textDecoration: 'none' }}>
              <div className="featured-img">
                <span className="featured-img-icon">📝</span>
                <span>Featured Post</span>
              </div>
              <div className="featured-content">
                <p className="featured-badge">Featured Post</p>
                <h2 className="featured-title">{featured.title}</h2>
                <p className="featured-excerpt">{featured.excerpt}</p>
                <div className="featured-meta">
                  <span className="featured-cat">{featured.category}</span>
                  <span>{featured.date}</span>
                </div>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
          )}

          <div className="filter-bar">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-pill${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">No posts in this category yet.</div>
          ) : (
            <div className="posts-grid">
              {filtered.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="post-card reveal"
                  style={{ textDecoration: 'none', transitionDelay: `${(i % 3) * 0.06}s` }}
                >
                  <div className="post-img">📄</div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-cat">{post.category}</span>
                      <span className="post-date">{post.date}</span>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <span className="read-more">Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="cta-wrap">
        <div className="cta-glow" aria-hidden="true" />
        <h2 className="cta-h2">Ready to <em>Start a Project?</em></h2>
        <p className="cta-sub">Put the insights into practice. Tell us what you're working on.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-red">Get a Quote</Link>
          <a href="tel:2102799442" className="cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
