import Image from 'next/image'
import Link from 'next/link'
import { mediaBarAnswersEpisodes } from '@/data/media-bar-answers'
import styles from './MediaBarAnswersFeature.module.css'

type MediaBarAnswersFeatureProps = {
  title: string
  emphasis: string
  description: string
  slugs: string[]
  placement: 'home' | 'pricing' | 'post-production' | 'interview' | 'medical'
}

export function MediaBarAnswersFeature({
  title,
  emphasis,
  description,
  slugs,
  placement,
}: MediaBarAnswersFeatureProps) {
  const episodes = slugs
    .map((slug) => mediaBarAnswersEpisodes.find((episode) => episode.slug === slug))
    .filter((episode): episode is (typeof mediaBarAnswersEpisodes)[number] => Boolean(episode))

  if (episodes.length === 0) return null

  return (
    <section
      className={`${styles.section} ${episodes.length === 1 ? styles.single : ''}`}
      aria-labelledby={`media-bar-answers-${placement}`}
      data-reveal
      data-media-bar-answers-feature={placement}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Media Bar Answers</p>
          <h2 id={`media-bar-answers-${placement}`}>
            {title}
            <em>{emphasis}</em>
          </h2>
          <p className={styles.description}>{description}</p>
          <Link
            className={styles.libraryLink}
            href="/resources/media-bar-answers"
            data-media-bar-answer="library"
            data-media-bar-answer-action="library"
            data-media-bar-answer-placement={placement}
          >
            Explore the answer library <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className={styles.grid}>
          {episodes.map((episode) => (
            <article className={styles.card} key={episode.slug}>
              <Link
                href={`/resources/media-bar-answers/${episode.slug}`}
                className={styles.cardLink}
                aria-label={`Watch and read ${episode.video.title}`}
                data-media-bar-answer={episode.slug}
                data-media-bar-answer-action="episode"
                data-media-bar-answer-placement={placement}
              >
                <div className={styles.image}>
                  <Image
                    src={episode.video.thumbnailPath}
                    alt=""
                    fill
                    sizes={episodes.length === 1
                      ? '(max-width: 900px) 100vw, 56vw'
                      : '(max-width: 760px) 100vw, 34vw'}
                  />
                  <span className={styles.play} aria-hidden="true">▶</span>
                </div>
                <div className={styles.copy}>
                  <p>
                    Episode {episode.episode}
                    <span>{episode.category}</span>
                  </p>
                  <h3>{episode.shortTitle}</h3>
                  <span className={styles.answer}>{episode.directAnswer}</span>
                  <strong>
                    Watch and read <span aria-hidden="true">→</span>
                  </strong>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
