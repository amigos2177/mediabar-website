import Link from 'next/link'
import { workProjects } from '@/data/work-projects'
import styles from './RbfcuCampaigns.module.css'

export default function WorkLibraryLinks({ serviceHref }: { serviceHref: string }) {
  const projects = workProjects.filter((project) => project.serviceHref === serviceHref && project.updated === '2026-11-11')
  if (!projects.length) return null
  return <section className={styles.section} aria-label="More production examples"><div className={styles.wrap}>
    <p className={styles.eyebrow}>More from the portfolio</p>
    <div className={styles.campaign}><h2>Explore the films.</h2>
      <ul>{projects.map((project) => <li key={project.slug}><Link className={styles.link} href={`/work/watch/${project.slug}`}>{project.title} →</Link></li>)}</ul>
    </div>
  </div></section>
}
