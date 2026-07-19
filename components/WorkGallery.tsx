'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { PortfolioVideo } from './VideoObjectSchema'
import VimeoPlayer from './VimeoPlayer'
import { workProjects } from '../data/work-projects'
import styles from '../app/work/work.module.css'

const filters = ['All', ...Array.from(new Set(workProjects.map((project) => project.category)))]

export default function WorkGallery({ videos }: { videos: PortfolioVideo[] }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const videoById = useMemo(
    () => new Map(
      videos.flatMap((video) => {
        const id = video.embedUrl?.split('/').pop()
        return id ? [[id, video] as const] : []
      }),
    ),
    [videos],
  )
  const visibleProjects = activeFilter === 'All'
    ? workProjects
    : workProjects.filter((project) => project.category === activeFilter)

  return (
    <section className={styles.gallery} id="selected-work">
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>Selected Work</p>
          <h2>Made with purpose.</h2>
        </div>
        <p>A curated look at recent campaigns, films, stories, and visual systems.</p>
      </div>

      <div className={styles.filters} role="group" aria-label="Filter work by service">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={activeFilter === filter ? styles.activeFilter : undefined}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.projectGrid}>
        {visibleProjects.map((project, index) => {
          const video = videoById.get(project.id)
          const isWide = activeFilter === 'All' && project.feature

          return (
            <article
              className={`${styles.projectCard}${isWide ? ` ${styles.wideProject}` : ''}`}
              key={project.id}
            >
              <div className={styles.projectMedia}>
                <VimeoPlayer
                  videoId={project.id}
                  title={`${project.title} by Media Bar Productions`}
                  thumbnailUrl={video?.thumbnailUrl as string | undefined}
                  eager={index < 2}
                />
              </div>
              <div className={styles.projectMeta}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category} <span>/</span> {project.year}</p>
                </div>
                <div className={styles.projectLinks}>
                  <Link href={`/work/watch/${project.slug}`} aria-label={`Watch ${project.title}`}>
                    Watch film <span>↗</span>
                  </Link>
                  <Link href={project.serviceHref} aria-label={`Explore ${project.category} video production`}>
                    Explore service
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
