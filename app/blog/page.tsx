import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Media Bar Productions',
  description:
    'Insights and stories from San Antonio\'s Emmy and Telly award-winning video production team.',
  openGraph: {
    title: 'Blog | Media Bar Productions',
    description:
      'Insights and stories from San Antonio\'s Emmy and Telly award-winning video production team.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.mediabarproductions.com/blog' },
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Media Bar Productions Blog',
    description:
      'Insights and stories from San Antonio\'s Emmy and Telly award-winning video production team.',
    url: 'https://www.mediabarproductions.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Media Bar Productions',
      url: 'https://www.mediabarproductions.com',
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      description: p.excerpt,
      url: `https://www.mediabarproductions.com/blog/${p.slug}`,
    })),
  }

  return (
    <Layout>
      <style>{`
        :root{--red:#CC0000;--gold:#C9A84C;--black:#0A0A0A;--dark:#111111;--dark2:#181818}

        .bl-hero{position:relative;background:linear-gradient(to right,rgba(0,0,0,0.85),rgba(0,0,0,0.55)),url('/images/bts-dsc-2.jpg') center/cover no-repeat;padding:160px 64px 100px;overflow:hidden;border-bottom:1px solid #1a1a1a;text-align:center}
        .bl-hero-bg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(100px,18vw,260px);letter-spacing:.05em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .bl-eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;position:relative}
        .bl-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(56px,8vw,100px);line-height:.95;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;margin-bottom:20px}
        .bl-sub{font-size:17px;line-height:1.7;color:#C0C0C0;max-width:560px;margin:0 auto;position:relative}

        .bl-wrap{background:var(--black);padding:80px 64px}
        .bl-inner{max-width:1200px;margin:0 auto}

        .bl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .bl-card{background:var(--dark2);border:1px solid #1e1e1e;overflow:hidden;display:flex;flex-direction:column;text-decoration:none;transition:border-color .2s,transform .2s,box-shadow .2s}
        .bl-card:hover{border-color:var(--red);transform:translateY(-4px);box-shadow:0 0 24px rgba(204,0,0,.15)}
        .bl-card-thumb{aspect-ratio:16/9;background:linear-gradient(135deg,#0d1520 0%,#0a0a0a 100%);border-bottom:2px solid var(--red);display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;overflow:hidden}
        .bl-card-logo{font-family:'Bebas Neue',Impact,sans-serif;font-size:28px;letter-spacing:.2em;color:rgba(255,255,255,.08);text-transform:uppercase}
        .bl-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .bl-card-date{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
        .bl-card-title{font-size:16px;font-weight:700;line-height:1.4;color:#e0e0e0;margin-bottom:12px;letter-spacing:.01em}
        .bl-card-excerpt{font-size:13px;line-height:1.7;color:#B0B0B0;margin-bottom:20px;flex:1;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
        .bl-card-more{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;border-bottom:1px solid var(--red);padding-bottom:3px;display:inline-block;transition:color .15s;align-self:flex-start}
        .bl-card:hover .bl-card-more{color:var(--red)}

        .bl-cta{background:var(--dark2);position:relative;overflow:hidden;text-align:center;padding:100px 64px}
        .bl-cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .bl-cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(40px,6vw,72px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .bl-cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .bl-cta-sub{font-size:16px;color:#B0B0B0;margin-bottom:40px;position:relative}
        .bl-cta-actions{display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;position:relative}
        .bl-btn-red{background:var(--red);color:#fff;padding:16px 48px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:background .15s;display:inline-block}.bl-btn-red:hover{background:#aa0000}
        .bl-cta-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;letter-spacing:.06em;color:#fff;transition:color .15s}.bl-cta-phone:hover{color:var(--gold)}

        @media(max-width:900px){
          .bl-hero{padding:120px 24px 72px}
          .bl-wrap{padding:56px 24px}
          .bl-grid{grid-template-columns:repeat(2,1fr);gap:16px}
          .bl-cta{padding:72px 24px}
        }
        @media(max-width:600px){.bl-grid{grid-template-columns:1fr}}
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />

      <section className="bl-hero">
        <div className="bl-hero-bg" aria-hidden="true">BLOG</div>
        <p className="bl-eyebrow">Insights &amp; Stories</p>
        <h1 className="bl-h1">Blog</h1>
        <p className="bl-sub">
          Behind-the-scenes perspective, video production insights, and industry stories from the Media Bar Productions team — rooted in San Antonio for over 13 years.
        </p>
      </section>

      <div className="bl-wrap">
        <div className="bl-inner">
          <div className="bl-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bl-card">
                <div className="bl-card-thumb">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                  ) : (
                    <span className="bl-card-logo" aria-hidden="true">MB</span>
                  )}
                </div>
                <div className="bl-card-body">
                  <p className="bl-card-date">{formatDate(post.date)}</p>
                  <h2 className="bl-card-title">{post.title}</h2>
                  <p className="bl-card-excerpt">{post.excerpt}</p>
                  <span className="bl-card-more">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="bl-cta">
        <div className="bl-cta-glow" aria-hidden="true" />
        <h2 className="bl-cta-h2">Ready to <em>Start a Project?</em></h2>
        <p className="bl-cta-sub">Put the insights into practice. Tell us what you&apos;re working on.</p>
        <div className="bl-cta-actions">
          <Link href="/contact" className="bl-btn-red">Get a Quote</Link>
          <a href="tel:2102799442" className="bl-cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
