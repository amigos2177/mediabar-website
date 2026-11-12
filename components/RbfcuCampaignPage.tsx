import type { Metadata } from 'next'
import Link from 'next/link'
import Layout from './Layout'
import { BreadcrumbJsonLd } from './JsonLd'
import WorkFilmCards from './WorkFilmCards'
import { collectionFilms, rbfcuCampaigns } from '@/data/work-campaigns'
import styles from '@/app/work/upper-deck-video-production/page.module.css'

type Campaign = typeof rbfcuCampaigns[number]
export function campaignMetadata(campaign: Campaign): Metadata {
  return {
    title: `${campaign.title} | Media Bar Productions`,
    description: campaign.deck,
    alternates: { canonical: campaign.href },
    openGraph: { title: campaign.title, description: campaign.deck, url: campaign.href, type: 'website', images: [{ url: collectionFilms(campaign.key)[0].thumbnail, alt: campaign.title }] },
  }
}

export default function RbfcuCampaignPage({ campaign, description }: { campaign: Campaign; description?: string }) {
  return (
    <Layout>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Our Work', url: '/work' }, { name: campaign.title, url: campaign.href }]} />
      <main className={styles.page}>
        <div className={styles.wrap}>
          <header className={styles.hero}>
            <Link className={styles.back} href="/work">← Our work</Link>
            <p className={styles.eyebrow}>RBFCU / Commercials / 2026</p>
            <h1>{campaign.title}</h1>
            <p className={styles.intro}>{campaign.deck}</p>
            {description ? <p className={styles.sectionIntro}>{description}</p> : null}
            <div className={styles.actions}><a className={styles.primary} href="#selected-work">Watch the commercials</a><Link className={styles.textLink} href="/project-planner">Start a project →</Link></div>
          </header>
          <section id="selected-work" className={styles.section} aria-labelledby="films-title">
            <p className={styles.eyebrow}>The campaign</p><h2 id="films-title">Watch every spot.</h2>
            <WorkFilmCards films={collectionFilms(campaign.key)} />
          </section>
          <section className={styles.section} aria-labelledby="more-rbfcu-title">
            <p className={styles.eyebrow}>More RBFCU work</p><h2 id="more-rbfcu-title">Explore the campaigns.</h2>
            <div className={styles.actions}>
              {rbfcuCampaigns.filter((item) => item.key !== campaign.key).map((item) => <Link className={styles.textLink} href={item.href} key={item.key}>{item.title} →</Link>)}
              <Link className={styles.textLink} href="/work/rbfcu-go-beyond-banking">RBFCU Go Beyond Banking →</Link>
              <Link className={styles.textLink} href="/video-production/commercials">Commercial production →</Link>
              <Link className={styles.textLink} href="/video-production/financial-services">Financial services video →</Link>
            </div>
          </section>
          <section className={styles.cta} aria-labelledby="cta-title"><p className={styles.eyebrow}>Your next production</p><h2 id="cta-title">Start with your campaign.</h2><p>Tell us the audience, message, channels, deadline, and deliverables. We will help shape a commercial production plan.</p><Link className={styles.primary} href="/project-planner">Start a project</Link></section>
        </div>
      </main>
    </Layout>
  )
}
