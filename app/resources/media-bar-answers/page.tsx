import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import {
  BreadcrumbJsonLd,
  CollectionPageJsonLd,
} from '@/components/JsonLd'
import { mediaBarAnswersEpisodes } from '@/data/media-bar-answers'
import { buildMetadata } from '@/lib/seo'
import styles from './media-bar-answers.module.css'

const path = '/resources/media-bar-answers'
const title = 'Media Bar Answers Video Library'
const description =
  'Short, practical video production answers from Ruben Garcia and Media Bar Productions for businesses planning video in San Antonio and across Texas.'

export const metadata = buildMetadata({
  title,
  description,
  path,
  ogImage: mediaBarAnswersEpisodes[0].video.thumbnailUrl,
})

export default function MediaBarAnswersPage() {
  return (
    <Layout>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Resources', url: '/resources/video-production-faq' },
        { name: 'Media Bar Answers', url: path },
      ]} />
      <CollectionPageJsonLd
        name={title}
        description={description}
        url={path}
        items={mediaBarAnswersEpisodes.map((episode) => ({
          name: episode.video.title,
          description: episode.video.description,
          url: `${path}/${episode.slug}`,
          thumbnailUrl: episode.video.thumbnailUrl,
        }))}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Media Bar Answers</p>
            <h1>
              Video production answers
              <em>from the people who do the work.</em>
            </h1>
            <p className={styles.intro}>
              Short answers for Texas businesses planning corporate videos,
              interviews, events, live streams, and post-production. Each episode
              includes the video, written guidance, key takeaways, and a complete
              transcript.
            </p>
            <div className={styles.actions}>
              <a href="#episodes" className={styles.primaryButton}>Browse the library</a>
              <Link href="/resources/video-production-faq" className={styles.secondaryButton}>
                Explore the full FAQ
              </Link>
            </div>
          </div>
          <div className={styles.heroMark} aria-hidden="true">
            <span>MB</span>
            <strong>Answers</strong>
            <small>San Antonio / Texas</small>
          </div>
        </section>

        <section className={styles.library} id="episodes" aria-labelledby="episodes-heading">
          <header className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>The growing library</p>
              <h2 id="episodes-heading">Start with the decision in front of you.</h2>
            </div>
            <p>
              New episodes will be organized here as the series grows. Every
              answer is reviewed by Ruben Garcia and connected to deeper planning
              resources on the Media Bar website.
            </p>
          </header>

          <div className={styles.episodeGrid}>
            {mediaBarAnswersEpisodes.map((episode, index) => (
              <article className={styles.episodeCard} key={episode.slug}>
                <Link
                  className={styles.cardImage}
                  href={`${path}/${episode.slug}`}
                  aria-label={`Watch and read ${episode.video.title}`}
                  data-media-bar-answer={episode.slug}
                  data-media-bar-answer-action="episode"
                  data-media-bar-answer-placement="library"
                >
                  <Image
                    src={episode.video.thumbnailPath}
                    alt=""
                    fill
                    loading={index === 0 ? 'eager' : 'lazy'}
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                  <span className={styles.playIcon} aria-hidden="true">▶</span>
                </Link>
                <div className={styles.cardCopy}>
                  <p>
                    Episode {episode.episode}
                    <span>{episode.category}</span>
                  </p>
                  <h3>
                    <Link
                      href={`${path}/${episode.slug}`}
                      data-media-bar-answer={episode.slug}
                      data-media-bar-answer-action="episode"
                      data-media-bar-answer-placement="library"
                    >
                      {episode.shortTitle}
                    </Link>
                  </h3>
                  <span>{episode.directAnswer}</span>
                  <Link
                    className={styles.cardLink}
                    href={`${path}/${episode.slug}`}
                    data-media-bar-answer={episode.slug}
                    data-media-bar-answer-action="episode"
                    data-media-bar-answer-placement="library"
                  >
                    Watch, read, and explore <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.libraryCta}>
          <div>
            <p className={styles.eyebrow}>Need a deeper answer?</p>
            <h2>Thirty-one planning questions are already answered.</h2>
          </div>
          <div>
            <p>
              Use the complete Texas video production FAQ for detailed guidance,
              or tell us about an active project when you need a recommendation
              shaped around a real goal, schedule, and scope.
            </p>
            <div className={styles.actions}>
              <Link href="/resources/video-production-faq" className={styles.secondaryButton}>
                Read the complete FAQ
              </Link>
              <Link
                href="/project-planner"
                className={styles.primaryButton}
                data-media-bar-answer="library"
                data-media-bar-answer-action="project-planner"
                data-media-bar-answer-placement="library-cta"
              >
                Plan a real project
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
