import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'
import CopyLinkButton from '../_components/CopyLinkButton'

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const canonical = `https://www.mediabarproductions.com/blog/${slug}`
  return {
    title: `${post.title} | Media Bar Productions`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Media Bar Productions`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: canonical,
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt },
    alternates: { canonical },
  }
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function readingTime(content: string): number {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const canonical = `https://www.mediabarproductions.com/blog/${slug}`
  const mins = readingTime(post.content)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    author: {
      '@type': 'Organization',
      name: 'Media Bar Productions',
      url: 'https://www.mediabarproductions.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Media Bar Productions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.mediabarproductions.com/images/logo.png',
      },
    },
  }

  const shareTitle = encodeURIComponent(post.title)
  const shareUrl = encodeURIComponent(canonical)

  return (
    <Layout>
      <style>{`
        :root{--red:#CC0000;--gold:#C9A84C;--black:#0A0A0A;--dark:#111111;--dark2:#181818}

        .bp-hero{position:relative;background:var(--black);padding:140px 64px 80px;overflow:hidden;border-bottom:1px solid #1a1a1a}
        .bp-hero-bg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(80px,14vw,200px);letter-spacing:.05em;color:rgba(255,255,255,.022);white-space:nowrap;pointer-events:none;user-select:none;line-height:1}
        .bp-breadcrumb{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#B0B0B0;margin-bottom:24px;position:relative}
        .bp-breadcrumb a{color:#AAAAAA;text-decoration:none;transition:color .15s}.bp-breadcrumb a:hover{color:var(--gold)}
        .bp-breadcrumb span{color:#333;margin:0 8px}
        .bp-h1{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,5vw,68px);line-height:1.05;letter-spacing:.02em;color:#fff;text-transform:uppercase;position:relative;max-width:820px;margin-bottom:20px}
        .bp-meta{font-size:13px;color:#AAAAAA;display:flex;align-items:center;gap:16px;position:relative}
        .bp-meta-date{color:var(--gold);font-weight:700;letter-spacing:.06em}
        .bp-meta-sep{color:#333}
        .bp-meta-read{color:#AAAAAA}

        .bp-body-wrap{padding:72px 64px;background:var(--black)}
        .bp-article{max-width:720px;margin:0 auto}
        .bp-content{font-size:18px;line-height:1.75;color:#aaa}
        .bp-content h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(26px,3.5vw,40px);letter-spacing:.02em;color:#fff;text-transform:uppercase;margin:2.5em 0 .75em;padding-top:.75em;border-top:2px solid var(--red)}
        .bp-content h3{font-size:20px;font-weight:700;color:#ddd;margin:2em 0 .6em;letter-spacing:.01em}
        .bp-content p{margin-bottom:1.4em}
        .bp-content a{color:var(--gold);text-underline-offset:3px;text-decoration:underline;transition:color .15s}.bp-content a:hover{color:#fff}
        .bp-content strong{color:#e0e0e0}
        .bp-content em{font-style:italic;color:#c0c0c0}
        .bp-content ul{list-style:disc;padding-left:1.5em;margin-bottom:1.4em}
        .bp-content ol{list-style:decimal;padding-left:1.5em;margin-bottom:1.4em}
        .bp-content li{margin-bottom:.5em}
        .bp-content img{width:100%;border-radius:4px;margin:1.5em 0}
        .bp-content blockquote{border-left:3px solid var(--red);padding-left:1.25em;margin:1.5em 0;color:#C0C0C0;font-style:italic}

        .bp-footer{max-width:720px;margin:0 auto;padding:48px 0 0;border-top:1px solid #1a1a1a}
        .bp-author{font-size:14px;color:#AAAAAA;margin-bottom:32px}
        .bp-author strong{color:#B0B0B0}
        .bp-share{margin-bottom:40px}
        .bp-share-label{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#B0B0B0;margin-bottom:14px}
        .bp-share-btns{display:flex;flex-wrap:wrap;gap:8px}
        .bl-share-btn{background:none;border:1px solid #2a2a2a;padding:8px 16px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#555;cursor:pointer;transition:color .15s,border-color .15s;font-family:inherit}.bl-share-btn:hover{color:#fff;border-color:#555}
        .bp-share-link{background:none;border:1px solid #2a2a2a;padding:8px 16px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#555;text-decoration:none;display:inline-block;transition:color .15s,border-color .15s}.bp-share-link:hover{color:#fff;border-color:#555}
        .bp-back{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#444;text-decoration:none;border-bottom:1px solid #2a2a2a;padding-bottom:3px;transition:color .15s,border-color .15s}.bp-back:hover{color:var(--gold);border-color:var(--gold)}

        .bp-cta{background:var(--dark2);position:relative;overflow:hidden;text-align:center;padding:100px 64px}
        .bp-cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(204,0,0,.18) 0%,transparent 70%);pointer-events:none}
        .bp-cta-h2{font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(40px,6vw,72px);line-height:1;letter-spacing:.03em;color:#fff;text-transform:uppercase;margin-bottom:16px;position:relative}
        .bp-cta-h2 em{font-family:'Playfair Display',Georgia,serif;font-style:italic;text-transform:none;color:var(--red)}
        .bp-cta-sub{font-size:16px;color:#B0B0B0;margin-bottom:40px;position:relative}
        .bp-cta-actions{display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;position:relative}
        .bp-btn-red{background:var(--red);color:#fff;padding:16px 48px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:background .15s;display:inline-block}.bp-btn-red:hover{background:#aa0000}
        .bp-cta-phone{font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;letter-spacing:.06em;color:#fff;transition:color .15s}.bp-cta-phone:hover{color:var(--gold)}

        @media(max-width:900px){
          .bp-hero{padding:120px 24px 60px}
          .bp-body-wrap{padding:48px 24px}
          .bp-cta{padding:72px 24px}
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />

      <section className="bp-hero">
        <div className="bp-hero-bg" aria-hidden="true">BLOG</div>
        <p className="bp-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          {post.title}
        </p>
        <h1 className="bp-h1">{post.title}</h1>
        <div className="bp-meta">
          <span className="bp-meta-date">{formatDate(post.date)}</span>
          <span className="bp-meta-sep">·</span>
          <span className="bp-meta-read">{mins} min read</span>
        </div>
      </section>

      <div className="bp-body-wrap">
        <article className="bp-article">
          <div
            className="bp-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="bp-footer">
            <p className="bp-author">
              <strong>By the Media Bar Productions team</strong> — San Antonio&apos;s Emmy and Telly
              award-winning video production company.
            </p>

            <div className="bp-share">
              <p className="bp-share-label">Share this article</p>
              <div className="bp-share-btns">
                <a
                  className="bp-share-link"
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="bp-share-link"
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X / Twitter
                </a>
                <a
                  className="bp-share-link"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <CopyLinkButton url={canonical} />
              </div>
            </div>

            <Link href="/blog" className="bp-back">← Back to Blog</Link>
          </footer>
        </article>
      </div>

      <section className="bp-cta">
        <div className="bp-cta-glow" aria-hidden="true" />
        <h2 className="bp-cta-h2">Ready to <em>Start a Project?</em></h2>
        <p className="bp-cta-sub">Let&apos;s build something worth watching.</p>
        <div className="bp-cta-actions">
          <Link href="/contact" className="bp-btn-red">Get a Quote</Link>
          <a href="tel:2102799442" className="bp-cta-phone">210-279-9442</a>
        </div>
      </section>
    </Layout>
  )
}
