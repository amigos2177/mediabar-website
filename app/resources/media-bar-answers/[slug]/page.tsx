import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import LiteYouTubeEmbed from '@/components/LiteYouTubeEmbed'
import {
  BreadcrumbJsonLd,
  EducationalGuideJsonLd,
  FAQPageJsonLd,
} from '@/components/JsonLd'
import {
  getMediaBarAnswer,
  mediaBarAnswersEpisodes,
} from '@/data/media-bar-answers'
import { buildMetadata } from '@/lib/seo'
import styles from '../media-bar-answers.module.css'

const libraryPath = '/resources/media-bar-answers'

export const dynamicParams = false

export function generateStaticParams() {
  return mediaBarAnswersEpisodes.map((episode) => ({ slug: episode.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const episode = getMediaBarAnswer(slug)
  if (!episode) return {}

  return buildMetadata({
    title: episode.video.metaTitle ?? episode.video.title,
    description: episode.video.description,
    path: `${libraryPath}/${episode.slug}`,
    ogImage: episode.video.thumbnailUrl,
  })
}

export default async function MediaBarAnswerEpisodePage({ params }: Props) {
  const { slug } = await params
  const episode = getMediaBarAnswer(slug)
  if (!episode) notFound()

  const path = `${libraryPath}/${episode.slug}`
  const relatedEpisodes = mediaBarAnswersEpisodes.filter((item) => item.slug !== episode.slug)
  const articleBody = [
    episode.directAnswer,
    ...episode.takeaways,
    ...episode.transcript,
  ].join('\n\n')

  return (
    <Layout>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Media Bar Answers', url: libraryPath },
        { name: episode.shortTitle, url: path },
      ]} />
      <EducationalGuideJsonLd
        title={episode.video.title}
        description={episode.video.description}
        url={path}
        datePublished={episode.video.uploadDate}
        dateModified={episode.dateModified ?? '2026-08-10'}
        image={episode.video.thumbnailUrl}
        articleBody={articleBody}
        articleSection={`Media Bar Answers: ${episode.category}`}
        sameAs={`https://www.youtube.com/watch?v=${episode.video.youtubeId}`}
        collectionUrl={libraryPath}
      />
      {episode.pageFaqs?.length ? <FAQPageJsonLd faqs={episode.pageFaqs} /> : null}

      <main className={`${styles.page} ${styles.episodePage}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={libraryPath}>Media Bar Answers</Link>
          <span>/</span>
          <span>Episode {episode.episode}</span>
        </nav>

        <article>
          <header className={styles.episodeHeader}>
            <div>
              <p className={styles.eyebrow}>
                Media Bar Answers / Episode {episode.episode} / {episode.category}
              </p>
              <h1>{episode.video.title}</h1>
            </div>
            <p>{episode.video.description}</p>
          </header>

          <LiteYouTubeEmbed
            youtubeId={episode.video.youtubeId}
            title={episode.video.title}
            thumbnailPath={episode.video.thumbnailPath}
            className={styles.videoFrame}
            priority
          />

          <p className={styles.disclosure}>
            This video features Ruben Garcia&apos;s digital avatar. The guidance
            and script come directly from Media Bar Productions.
            {' '}
            <a
              href={`https://www.youtube.com/watch?v=${episode.video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              data-media-bar-answer={episode.slug}
              data-media-bar-answer-action="youtube"
              data-media-bar-answer-placement="episode"
            >
              Watch on YouTube <span aria-hidden="true">↗</span>
            </a>
          </p>

          <section className={styles.answerSection} aria-labelledby="short-answer-heading">
            <p className={styles.eyebrow}>The short answer</p>
            <h2 id="short-answer-heading">{episode.faqQuestion}</h2>
            <p className={styles.directAnswer}>{episode.directAnswer}</p>
          </section>

          <section className={styles.takeawaySection} aria-labelledby="takeaways-heading">
            <div>
              <p className={styles.eyebrow}>Three practical takeaways</p>
              <h2 id="takeaways-heading">What to carry into your project.</h2>
            </div>
            <ol>
              {episode.takeaways.map((takeaway, index) => (
                <li key={takeaway}>
                  <span>0{index + 1}</span>
                  <p>{takeaway}</p>
                </li>
              ))}
            </ol>
          </section>

          {episode.budgetComparison && (
            <section className={styles.comparisonSection} aria-labelledby="budget-comparison-heading">
              <div className={styles.comparisonIntro}>
                <div>
                  <p className={styles.eyebrow}>{episode.budgetComparison.eyebrow}</p>
                  <h2 id="budget-comparison-heading">{episode.budgetComparison.heading}</h2>
                </div>
                <p>{episode.budgetComparison.introduction}</p>
              </div>
              <div className={styles.comparisonGrid}>
                {episode.budgetComparison.columns.map((column) => (
                  <article className={styles.comparisonCard} key={column.title}>
                    <h3>{column.title}</h3>
                    <p>{column.description}</p>
                    <ul>
                      {column.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
              <p className={styles.comparisonNote}>{episode.budgetComparison.coordination}</p>
            </section>
          )}

          {episode.pageFaqs?.length ? (
            <section className={styles.episodeFaq} aria-labelledby="episode-faq-heading">
              <div>
                <p className={styles.eyebrow}>Commercial cost FAQ</p>
                <h2 id="episode-faq-heading">Questions to answer before requesting an estimate.</h2>
              </div>
              <div className={styles.episodeFaqList}>
                {episode.pageFaqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <section className={styles.transcriptSection} aria-labelledby="transcript-heading">
            <div className={styles.transcriptIntro}>
              <div>
                <p className={styles.eyebrow}>Full transcript</p>
                <h2 id="transcript-heading">{episode.shortTitle}</h2>
              </div>
              <p>
                Presented by Ruben Garcia, founder and executive producer of
                Media Bar Productions in San Antonio, Texas.
              </p>
            </div>
            <div className={styles.transcriptCopy}>
              {episode.transcript.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className={styles.relatedSection} aria-labelledby="related-heading">
            <div>
              <p className={styles.eyebrow}>Keep planning</p>
              <h2 id="related-heading">Related guidance and next steps.</h2>
            </div>
            <div className={styles.relatedLinks}>
              <Link href={episode.faqHref}>
                <span>Matching FAQ answer</span>
                <strong>{episode.faqQuestion}</strong>
              </Link>
              <Link href={episode.serviceLink.href}>
                <span>Related Media Bar resource</span>
                <strong>{episode.serviceLink.label}</strong>
              </Link>
              {episode.relatedLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  data-media-bar-answer={episode.slug}
                  data-media-bar-answer-action={link.href === '/project-planner' ? 'project-planner' : 'related-resource'}
                  data-media-bar-answer-placement="episode"
                >
                  <span>Explore next</span>
                  <strong>{link.label}</strong>
                </Link>
              ))}
            </div>
          </section>

          {relatedEpisodes.length > 0 && (
            <section className={styles.nextEpisode}>
              <p className={styles.eyebrow}>More Media Bar Answers</p>
              <h2>Continue through the video library.</h2>
              <div>
                {relatedEpisodes.map((item) => (
                  <Link
                    href={`${libraryPath}/${item.slug}`}
                    key={item.slug}
                    data-media-bar-answer={item.slug}
                    data-media-bar-answer-action="episode"
                    data-media-bar-answer-placement="related-episode"
                  >
                    <span>Episode {item.episode} / {item.category}</span>
                    <strong>{item.shortTitle}</strong>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </Layout>
  )
}
