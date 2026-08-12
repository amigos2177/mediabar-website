import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import QuickContactBar from '@/components/QuickContactBar'
import { BreadcrumbJsonLd } from '../../components/JsonLd'
import type { PortfolioVideo } from '../../components/VideoObjectSchema'
import VimeoPlayer from '../../components/VimeoPlayer'
import WorkGallery from '../../components/WorkGallery'
import workVideos from '../../data/work-videos.json'
import styles from './work.module.css'

const videoById = new Map(
  (workVideos as PortfolioVideo[]).flatMap((video) => {
    const id = video.embedUrl?.split('/').pop()
    return id ? [[id, video] as const] : []
  }),
)

const serviceLinks = [
  ['Corporate Video', '/video-production/corporate'],
  ['TV Commercials', '/video-production/commercials'],
  ['Event Coverage', '/video-production/events'],
  ['Interviews', '/video-production/interview'],
  ['Medical Video', '/video-production/medical'],
  ['Live Streaming', '/video-production/live-streaming'],
  ['Motion Graphics', '/video-production/motion-graphics'],
  ['Post Production', '/video-production/post-production'],
  ['Food Video', '/video-production/food'],
]

export default function WorkPage() {
  const showreel = videoById.get('1077104073')

  return (
    <Layout>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Our Work', url: '/work' },
      ]} />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Selected Work</p>
            <h1 className={styles.heroTitle}>
              Stories built{' '}
              <span>to be seen.</span>
            </h1>
            <p className={styles.heroIntro}>
              Commercials, corporate films, patient stories, event recaps, and
              campaign systems produced in San Antonio for audiences across Texas
              and beyond.
            </p>
            <div className={styles.heroActions}>
              <a href="#selected-work" className={styles.primaryAction}>Explore the work</a>
              <Link href="/contact" className={styles.textAction}>Start a project <span>↗</span></Link>
            </div>
          </div>

          <div className={styles.showreel}>
            <div className={styles.showreelFrame}>
              <VimeoPlayer
                videoId="1077104073"
                title="Media Bar Productions 2025 showreel"
                thumbnailUrl={showreel?.thumbnailUrl as string | undefined}
                eager
              />
            </div>
            <div className={styles.showreelMeta}>
              <span>2025 Studio Showreel</span>
              <span>Play film</span>
            </div>
          </div>
        </section>

        <QuickContactBar />

        <section className={styles.proof} aria-label="Media Bar Productions experience">
          <div>
            <strong>3</strong>
            <span>Emmy Awards</span>
          </div>
          <div>
            <strong>15</strong>
            <span>Telly Awards</span>
          </div>
          <div>
            <strong>2011</strong>
            <span>Producing Since</span>
          </div>
          <p>One experienced production partner from first idea through final delivery.</p>
        </section>

        <section className={styles.caseStudy}>
          <div className={styles.caseImage}>
            <Image
              src="/images/rbfcu-stills-grid.jpg"
              alt="Scenes from the RBFCU Go Beyond Banking campaign"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
          <div className={styles.caseCopy}>
            <p className={styles.eyebrow}>Featured Case Study</p>
            <h2>Five stories.<br /><em>One campaign.</em></h2>
            <p>
              Media Bar partnered with RBFCU to produce five broadcast commercials
              built around real Texas lives, each with its own cast, location, and
              production design.
            </p>
            <dl className={styles.caseMetrics}>
              <div><dt>5</dt><dd>Broadcast spots</dd></div>
              <div><dt>4</dt><dd>Texas markets</dd></div>
              <div><dt>5M+</dt><dd>Campaign views</dd></div>
            </dl>
            <Link href="/work/rbfcu-go-beyond-banking" className={styles.primaryAction}>
              Read the case study
            </Link>
          </div>
        </section>

        <WorkGallery videos={workVideos as PortfolioVideo[]} />

        <section className={styles.services}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Production Capabilities</p>
              <h2>Explore by service.</h2>
            </div>
            <p>Every discipline is available as a standalone service or as part of a complete production.</p>
          </div>
          <div className={styles.serviceGrid}>
            {serviceLinks.map(([label, href], index) => (
              <Link href={href} key={href}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <p className={styles.eyebrow}>Have a project in mind?</p>
          <h2>Let&apos;s make something<br /><em>worth watching.</em></h2>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryAction}>Plan your project</Link>
            <a href="tel:2102799442" className={styles.phone}>210-279-9442</a>
          </div>
        </section>
      </main>
    </Layout>
  )
}
