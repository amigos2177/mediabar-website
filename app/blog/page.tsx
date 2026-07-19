import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/blog'
import { buildMetadata } from '@/lib/seo'
import styles from './blog.module.css'

export const metadata = buildMetadata({
  title: 'Video Production Insights | Media Bar Productions',
  description: 'Practical guides to corporate, commercial, healthcare, event, and social video production from an award-winning San Antonio production team.',
  path: '/blog',
})

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function cleanExcerpt(excerpt: string): string {
  return excerpt
}

export default function BlogPage() {
  const posts = getAllPosts()
  const [featuredPost, ...remainingPosts] = posts

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Media Bar Productions Blog',
    description:
      'Insights and stories from San Antonio\'s Emmy and Telly award-winning video production team.',
    url: 'https://www.mediabarproductions.com/blog',
    publisher: {
      '@id': 'https://www.mediabarproductions.com/#business',
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      description: post.excerpt,
      url: `https://www.mediabarproductions.com/blog/${post.slug}`,
    })),
  }

  return (
    <Layout>
      <main className={styles.page}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />

        <header className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Media Bar field notes</p>
            <h1>
              Ideas from
              <em>inside the work.</em>
            </h1>
          </div>
          <div className={styles.heroIntro}>
            <p>
              Practical production guidance, behind-the-scenes perspective, and
              lessons from making work for brands across Texas.
            </p>
            <span>{posts.length} stories and guides</span>
          </div>
        </header>

        {featuredPost && (
          <section className={styles.featured} aria-labelledby="featured-story">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className={styles.featuredImage}
              aria-label={`Read ${featuredPost.title}`}
            >
              {featuredPost.featuredImage ? (
                <Image
                  src={featuredPost.featuredImage}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
              ) : (
                <span aria-hidden="true">MB</span>
              )}
            </Link>
            <div className={styles.featuredCopy}>
              <p className={styles.articleMeta}>
                <span>Featured</span>
                <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
              </p>
              <h2 id="featured-story">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <p>{cleanExcerpt(featuredPost.excerpt)}</p>
              <Link href={`/blog/${featuredPost.slug}`} className={styles.textLink}>
                Read the story <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        )}

        <section className={styles.archive} aria-labelledby="latest-stories">
          <div className={styles.archiveHeader}>
            <p className={styles.eyebrow}>The archive</p>
            <h2 id="latest-stories">Latest stories</h2>
          </div>

          <div className={styles.articleGrid}>
            {remainingPosts.map((post, index) => (
              <article className={styles.card} key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.cardImage}
                  aria-label={`Read ${post.title}`}
                >
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt=""
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1040px) 50vw, 33vw"
                    />
                  ) : (
                    <span aria-hidden="true">MB</span>
                  )}
                  <span className={styles.cardNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </Link>
                <div className={styles.cardCopy}>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <p>{cleanExcerpt(post.excerpt)}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.textLink}>
                    Read more <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <p className={styles.eyebrow}>Put the thinking to work</p>
          <h2>
            Have a story
            <em>worth making?</em>
          </h2>
          <div className={styles.ctaActions}>
            <Link href="/project-planner" className={styles.primaryAction}>
              Plan your project
            </Link>
            <Link href="/work" className={styles.secondaryAction}>
              Explore our work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
