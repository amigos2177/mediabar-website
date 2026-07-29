import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import {
  BreadcrumbJsonLd,
  EducationalGuideJsonLd,
  VideoObjectJsonLd,
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
    title: episode.video.title,
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
        dateModified="2026-07-28"
        image={episode.video.thumbnailUrl}
      />
      <VideoObjectJsonLd
        name={episode.video.title}
        description={episode.video.description}
        thumbnailUrl={episode.video.thumbnailUrl}
        uploadDate={episode.video.uploadDate}
        duration={episode.video.duration}
        contentUrl={`https://www.youtube.com/watch?v=${episode.video.youtubeId}`}
        embedUrl={`https://www.youtube-nocookie.com/embed/${episode.video.youtubeId}`}
      />

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

          <div className={styles.videoFrame}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${episode.video.youtubeId}?cc_load_policy=0`}
              title={episode.video.title}
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

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
