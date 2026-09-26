import type { Metadata } from 'next'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { BreadcrumbJsonLd } from '../../../components/JsonLd'
import VimeoPlayer from '../../../components/VimeoPlayer'
import { workProjects } from '../../../data/work-projects'
import styles from './page.module.css'

const path = '/work/upper-deck-video-production'
const films = workProjects.find((project) => project.slug === 'fleer-brilliants-superman')!.selectedVideos!

export const metadata: Metadata = {
  title: 'Upper Deck Video Production Case Study | Media Bar Productions',
  description: 'Ten years and more than 50 videos for Upper Deck: conference coverage, athlete autograph signings, and work on two national animated commercials aired on ESPN.',
  alternates: { canonical: path },
  openGraph: {
    title: 'Upper Deck: 10 Years of Video Production',
    description: 'A production relationship spanning conferences, athlete signings, and national animated commercials.',
    url: path,
    images: [{ url: films[0].thumbnail, alt: 'Michael Jordan 25th Anniversary film for Upper Deck' }],
  },
}

export default function UpperDeckCaseStudy() {
  return (
    <Layout>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Our Work', url: '/work' }, { name: 'Upper Deck', url: path }]} />
      <main className={styles.page}>
        <div className={styles.wrap}>
          <header className={styles.hero}>
            <Link className={styles.back} href="/work">← Our work</Link>
            <p className={styles.eyebrow}>Upper Deck / Case Study</p>
            <h1>10 years.<br /><span>More than 50 videos.</span></h1>
            <p className={styles.intro}>From conferences and athlete autograph signings to national animated commercials, Media Bar Productions has worked with Upper Deck across a decade of video production.</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#selected-work">Watch selected work</a>
              <Link className={styles.textLink} href="/project-planner">Start a project →</Link>
            </div>
          </header>

          <section className={styles.section} aria-labelledby="scope-title">
            <p className={styles.eyebrow}>The work</p>
            <h2 id="scope-title">One client. A wide range of productions.</h2>
            <div className={styles.scope}>
              <article><span className={styles.number}>01</span><h3>Conferences</h3><p>Video production for Upper Deck conferences, filming the people and moments that bring the company together.</p></article>
              <article><span className={styles.number}>02</span><h3>Athlete signings</h3><p>Filming autograph signings with athletes including Mike Tyson, Connor McDavid, and Tiger Woods.</p></article>
              <article><span className={styles.number}>03</span><h3>National commercials</h3><p>Work on two national animated commercials for Upper Deck featuring Michael Jordan, aired on ESPN.</p></article>
            </div>
          </section>

          <section className={styles.relationship} aria-labelledby="relationship-title">
            <div><p className={styles.eyebrow}>The partnership</p><h2 id="relationship-title">Quality. Deadlines.<br />Communication.</h2></div>
            <div><p>Across 10 years and more than 50 videos, our work with Upper Deck has covered different subjects, formats, and production needs.</p><p>Our focus throughout: quality production, meeting deadlines, and clear communication with the client.</p></div>
          </section>

          <section id="selected-work" className={styles.section} aria-labelledby="films-title">
            <p className={styles.eyebrow}>Selected motion graphics</p>
            <h2 id="films-title">See the work for Upper Deck.</h2>
            <p className={styles.sectionIntro}>A selection from our work across sports and entertainment properties.</p>
            <div className={styles.films}>
              {films.map((film) => (
                <article key={film.id}>
                  <div className={styles.player}><VimeoPlayer videoId={film.id} title={film.title} thumbnailUrl={film.thumbnail} /></div>
                  <div className={styles.filmMeta}><h3>{film.title}</h3><span>{film.runtime}</span></div>
                  <a className={styles.textLink} href={`https://vimeo.com/${film.id}`} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${film.title} on Vimeo (opens in a new tab)`}>Watch on Vimeo ↗</a>
                </article>
              ))}
            </div>
            <Link className={styles.textLink} href="/work/watch/fleer-brilliants-superman">Also watch: Fleer Brilliants Superman →</Link>
          </section>

          <section className={styles.cta} aria-labelledby="cta-title">
            <p className={styles.eyebrow}>Your next production</p>
            <h2 id="cta-title">Need a production partner?</h2>
            <p>Tell us what you need to make, when you need it, and where it will be seen. Start with one project or tell us about an ongoing need.</p>
            <Link className={styles.primary} href="/project-planner">Start a project</Link>
          </section>
        </div>
      </main>
    </Layout>
  )
}
