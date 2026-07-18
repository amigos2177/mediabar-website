'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { PortfolioVideo } from './VideoObjectSchema'
import VimeoPlayer from './VimeoPlayer'
import styles from '../app/work/work.module.css'

type Project = {
  id: string
  title: string
  category: string
  year: string
  href: string
  feature?: boolean
}

const projects: Project[] = [
  {
    id: '1193317757',
    title: 'San Antonio Production Stories',
    category: 'Corporate',
    year: '2026',
    href: '/video-production/corporate',
    feature: true,
  },
  {
    id: '1138375371',
    title: 'RBFCU Coyote',
    category: 'Commercials',
    year: '2025',
    href: '/work/rbfcu-go-beyond-banking',
  },
  {
    id: '946447253',
    title: 'NAFA Conference Recap',
    category: 'Events',
    year: '2024',
    href: '/video-production/events',
  },
  {
    id: '1180540188',
    title: 'Wound Local Patient Story',
    category: 'Interviews',
    year: '2025',
    href: '/video-production/interview',
  },
  {
    id: '1180540550',
    title: 'Eli Ortiz Specialty Care',
    category: 'Medical',
    year: '2025',
    href: '/video-production/medical',
  },
  {
    id: '1180540292',
    title: 'Boot Ranch',
    category: 'Commercials',
    year: '2026',
    href: '/video-production/commercials',
    feature: true,
  },
  {
    id: '1180540640',
    title: 'Fleer Brilliants Superman',
    category: 'Motion',
    year: '2026',
    href: '/video-production/motion-graphics',
  },
  {
    id: '666115814',
    title: 'ST Engineering',
    category: 'Post Production',
    year: '2022',
    href: '/video-production/post-production',
  },
  {
    id: '1056208254',
    title: 'Texas Recycles Day',
    category: 'Events',
    year: '2024',
    href: '/video-production/events',
  },
  {
    id: '697231773',
    title: 'Tostadas de Chicharrón',
    category: 'Food',
    year: '2021',
    href: '/video-production/food',
  },
  {
    id: '1180537582',
    title: 'Sanctuary Wealth',
    category: 'Interviews',
    year: '2025',
    href: '/video-production/interview',
  },
  {
    id: '697230305',
    title: 'Healthcare Provider Story',
    category: 'Medical',
    year: '2021',
    href: '/video-production/medical',
  },
]

const filters = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]

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
    ? projects
    : projects.filter((project) => project.category === activeFilter)

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
                <Link href={project.href} aria-label={`Explore ${project.title}`}>
                  Explore <span>↗</span>
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
