import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from './awards.module.css'

const emmyWins = [
  { year: '2013', category: 'Best Editor (Non-News)', award: 'Lone Star Emmy Award' },
  { year: '2012', category: 'Best Editor (Non-News)', award: 'Lone Star Emmy Award' },
  {
    year: '2009',
    category: 'Production / Camera / Assistant Editor, Interview/Discussion Category',
    award: 'Lone Star Emmy Award via Carrasco Media Group',
  },
]

const emmyNominations = [
  { year: '2015', category: 'Best Editor (Non-News)' },
  { year: '2014', category: 'Best Writing, Short Form (Promos, PSAs, Commercials)' },
  { year: '2013', category: 'Magazine Program Series, The Russell Rush Haunted Tour' },
  { year: '2010', category: 'Interview/Discussion Program, For Love of Family' },
]

const tellyWins = [
  { year: '2016', category: 'Online Video, Legacy', client: 'San Antonio Area Foundation', role: 'Production', level: 'Silver' },
  { year: '2016', category: 'Online Video, Legacy', client: 'San Antonio Area Foundation', role: 'Editing', level: 'Silver' },
  { year: '2016', category: 'Online Video, Testimonials', client: 'San Antonio Area Foundation', role: 'Production', level: '' },
  { year: '2016', category: 'Online Video', client: 'Down Syndrome Association of South Texas', role: 'Editing', level: '' },
  { year: '2015', category: 'Film/Video, Non-Broadcast, Charitable/Not-For-Profit', client: '', role: 'Production', level: 'Silver' },
  { year: '2015', category: 'Film/Video, Non-Broadcast', client: 'Down Syndrome Association', role: 'Editing', level: '' },
  { year: '2015', category: 'Commercial, Local TV', client: 'Shafer Services, We Need More Fans', role: 'Production', level: '' },
  { year: '2015', category: 'Online Video, Webisodes', client: 'Russell Rush Haunted Tour / Yoakum Hospital', role: 'Editing', level: '' },
  { year: '2015', category: 'TV Programs, Segments', client: '', role: 'Editing', level: '' },
  { year: '2014', category: 'TV Programs, Entertainment', client: '', role: 'Production', level: '' },
  { year: '2014', category: 'TV Programs, Entertainment', client: '', role: 'Editing', level: '' },
  { year: '2012', category: 'TV Programs, Entertainment', client: 'Russell Rush Haunted Tour, Lockhart', role: 'Production', level: '' },
  { year: '2012', category: 'TV Programs, Entertainment', client: 'Russell Rush Haunted Tour, Lockhart', role: 'Editing', level: '' },
  { year: '2012', category: 'TV Programs, Entertainment', client: 'Russell Rush Haunted Tour, Lambermont', role: 'Production', level: '' },
  { year: '2012', category: 'TV Programs, Entertainment', client: 'Russell Rush Haunted Tour, Lambermont', role: 'Editing', level: '' },
]

export default function AwardsPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src="/images/media-library/media-bar-emmy-award.jpg"
              alt="Media Bar Productions team holding a Lone Star Emmy Award"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>

          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Recognition earned through the work</p>
            <h1>
              The standard
              <span>shows up.</span>
            </h1>
            <p>
              Three Lone Star Emmy Awards and fifteen Telly Awards recognize
              Media Bar&apos;s production, editing, and storytelling across broadcast,
              commercial, nonprofit, and online work.
            </p>
            <div className={styles.heroLinks}>
              <a href="#emmy-record">Emmy record <span aria-hidden="true">↓</span></a>
              <a href="#telly-record">Telly record <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className={styles.scoreboard} aria-label="Media Bar award totals">
          <div>
            <strong>3</strong>
            <span>Emmy wins</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Emmy nominations</span>
          </div>
          <div>
            <strong>15</strong>
            <span>Telly wins</span>
          </div>
          <div>
            <strong>2009</strong>
            <span>First Emmy win</span>
          </div>
        </section>

        <section className={styles.recordSection} id="emmy-record">
          <div className={styles.recordIntro}>
            <p className={styles.eyebrow}>Lone Star Emmy Awards</p>
            <h2>Three wins. Four more nominations.</h2>
            <p>
              Recognition from the Lone Star Chapter of the National Academy of
              Television Arts &amp; Sciences for editorial, production, and short-form work.
            </p>
          </div>

          <div className={styles.winGrid}>
            {emmyWins.map((win) => (
              <article className={styles.winCard} key={`${win.year}-${win.category}`}>
                <span>{win.year}</span>
                <h3>{win.category}</h3>
                <p>{win.award}</p>
              </article>
            ))}
          </div>

          <div className={styles.nominationBlock}>
            <h3>Emmy nominations</h3>
            <div className={styles.nominationList}>
              {emmyNominations.map((nomination) => (
                <div key={`${nomination.year}-${nomination.category}`}>
                  <span>{nomination.year}</span>
                  <p>{nomination.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.tellySection} id="telly-record">
          <div className={styles.recordIntro}>
            <p className={styles.eyebrow}>The Telly Awards</p>
            <h2>Fifteen wins across screens and formats.</h2>
            <p>
              A record spanning online video, local commercials, nonprofit films,
              television programming, production, and editorial craft.
            </p>
          </div>

          <div className={styles.recordHeader} aria-hidden="true">
            <span>Year</span>
            <span>Category and project</span>
            <span>Discipline</span>
            <span>Distinction</span>
          </div>

          <div className={styles.tellyList}>
            {tellyWins.map((win, index) => (
              <article className={styles.tellyRow} key={`${win.year}-${win.category}-${index}`}>
                <span className={styles.tellyYear}>{win.year}</span>
                <div>
                  <h3>{win.category}</h3>
                  {win.client && <p>{win.client}</p>}
                </div>
                <span className={styles.tellyRole}>{win.role}</span>
                <span className={styles.tellyLevel}>{win.level || 'Winner'}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.meaning}>
          <p className={styles.eyebrow}>What the record means</p>
          <blockquote>
            Awards are a signal. The real standard is the care every client
            receives before, during, and after the shoot.
          </blockquote>
          <Link href="/how-we-work" className={styles.textLink}>
            See how we work <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>Put the standard to work</p>
            <h2>Bring us the assignment that has to land.</h2>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/project-planner" className={styles.primaryButton}>Plan your project</Link>
            <Link href="/work" className={styles.secondaryButton}>Explore the work</Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
