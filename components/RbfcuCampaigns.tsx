import Link from 'next/link'
import WorkFilmCards from './WorkFilmCards'
import { collectionFilms, rbfcuCampaigns } from '@/data/work-campaigns'
import styles from './RbfcuCampaigns.module.css'

export default function RbfcuCampaigns({ heroOnly = false, descriptions = {} }: { heroOnly?: boolean; descriptions?: Record<string, string> }) {
  return (
    <section className={styles.section} aria-label="More RBFCU work">
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>More RBFCU work</p>
        {rbfcuCampaigns.map((campaign) => (
          <section className={styles.campaign} key={campaign.key} aria-labelledby={`${campaign.key}-heading`}>
            <h2 id={`${campaign.key}-heading`}>{campaign.title}</h2>
            <p className={styles.deck}>{descriptions[campaign.key] ?? campaign.deck}</p>
            <WorkFilmCards films={heroOnly ? collectionFilms(campaign.key).slice(0, 1) : collectionFilms(campaign.key)} />
            <Link className={styles.link} href={campaign.href}>Explore {campaign.title} →</Link>
          </section>
        ))}
      </div>
    </section>
  )
}
