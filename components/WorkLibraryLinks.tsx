import Link from 'next/link'
import { workProjects } from '@/data/work-projects'
import styles from './RbfcuCampaigns.module.css'

type Props = { serviceHref: string; slugs?: string[]; heading?: string }

export default function WorkLibraryLinks({ serviceHref, slugs, heading = 'Explore the films.' }: Props) {
  // Explicit selections let service pages feature relevant work independently of review dates.
  const projects = slugs
    ? slugs.flatMap((slug) => workProjects.filter((project) => project.slug === slug && project.serviceHref === serviceHref))
    : workProjects.filter((project) => project.serviceHref === serviceHref && project.updated === '2026-11-11')
  if (!projects.length) return null
  return <section className={styles.section} aria-label="More production examples"><div className={styles.wrap}>
    <p className={styles.eyebrow}>More from the portfolio</p>
    <div className={styles.campaign}><h2>{heading}</h2>
      <ul>{projects.map((project) => <li key={project.slug}><Link className={styles.link} href={`/work/watch/${project.slug}`}>{project.title} →</Link></li>)}</ul>
    </div>
  </div></section>
}
