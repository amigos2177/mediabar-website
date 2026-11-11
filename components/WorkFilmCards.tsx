import Link from 'next/link'
import VimeoPlayer from './VimeoPlayer'
import { workProjects } from '@/data/work-projects'
import styles from './WorkFilmCards.module.css'

export type WorkFilm = {
  id: string
  title: string
  thumbnail: string
  runtime: string
  aspectRatio?: string
}

export default function WorkFilmCards({ films, compact = false }: { films: WorkFilm[]; compact?: boolean }) {
  const Heading = compact ? 'h4' : 'h3'
  return (
    <div className={`${styles.grid}${compact ? ` ${styles.compact}` : ''}`}>
      {films.map((film) => {
        const project = workProjects.find((item) => item.id === film.id)
        return (
          <article className={styles.card} key={film.id}>
            <div className={styles.player} style={{ aspectRatio: film.aspectRatio || '16 / 9' }}>
              <VimeoPlayer videoId={film.id} title={film.title} thumbnailUrl={film.thumbnail} />
            </div>
            <div className={styles.meta}><Heading>{film.title}</Heading><span>{film.runtime}</span></div>
            {film.aspectRatio === '1 / 1' ? <p className={styles.format}>Square format · 1080 × 1080</p> : null}
            {project ? <Link className={styles.link} href={`/work/watch/${project.slug}`}>Watch film →</Link>
              : <a className={styles.link} href={`https://vimeo.com/${film.id}`} target="_blank" rel="noopener noreferrer">Watch on Vimeo ↗</a>}
          </article>
        )
      })}
    </div>
  )
}
