import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from './clients.module.css'

const featuredClients = [
  { name: 'San Antonio Spurs', src: '/images/client-spurs.png' },
  { name: 'H-E-B', src: '/images/client-heb.png' },
  { name: 'Unilever' },
  { name: 'Frost Bank', src: '/images/client-frost.png' },
  { name: 'Texas Tech University', src: '/images/client-texas-tech.png' },
  { name: 'Bass Pro Shops', src: '/images/client-bass-pro.png' },
  { name: 'Kiolbassa', src: '/images/client-kiolbassa.png' },
  { name: 'Blue Moon' },
  { name: 'Carrier', src: '/images/client-carrier.png' },
]

const industries = [
  {
    number: '01',
    name: 'Corporate & Enterprise',
    description: 'Brand films, executive stories, recruiting, training, and internal communications built for clarity.',
    href: '/video-production/corporate',
  },
  {
    number: '02',
    name: 'Healthcare & Medical',
    description: 'Patient stories, provider profiles, procedure education, and communications shaped around sensitive environments.',
    href: '/video-production/medical',
  },
  {
    number: '03',
    name: 'Financial Services',
    description: 'Campaigns, member stories, executive interviews, and commercial content that make trust visible.',
    href: '/work/rbfcu-go-beyond-banking',
  },
  {
    number: '04',
    name: 'Food, Retail & Consumer',
    description: 'Product stories, commercials, launch content, and social assets designed to earn attention.',
    href: '/video-production/food',
  },
  {
    number: '05',
    name: 'Public, Education & Nonprofit',
    description: 'Program stories, community campaigns, fundraising films, and institutional communications with purpose.',
    href: '/video-production/corporate',
  },
  {
    number: '06',
    name: 'Sports, Events & Entertainment',
    description: 'Live coverage, sponsor content, recaps, performances, and event stories produced for the moment and beyond.',
    href: '/video-production/events',
  },
]

const clientGroups = [
  {
    label: 'Enterprise & Financial',
    clients: ['Frost Bank', 'USAA', 'Carrier', 'CPS Energy', 'Southwest Research Institute'],
  },
  {
    label: 'Community & Healthcare',
    clients: ['City of San Antonio', 'Port San Antonio', 'University Health', 'Methodist Healthcare', 'San Antonio Zoo'],
  },
  {
    label: 'Consumer & Culture',
    clients: ['H-E-B', 'San Antonio Spurs', 'Blue Moon', 'Bass Pro Shops', 'Unilever', 'Kiolbassa'],
  },
]

export default function ClientsPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Client relationships</p>
              <h1>
                Trusted to carry{' '}
                <span>the story.</span>
              </h1>
            </div>

            <div className={styles.heroIntro}>
              <p>
                Organizations bring Media Bar into moments that need to land clearly,
                from a campaign launch or patient story to an executive message or live event.
              </p>
              <Link href="/work" className={styles.textLink}>
                Explore the work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className={styles.proofBar} aria-label="Media Bar credentials">
            <div>
              <strong>2011</strong>
              <span>Producing since</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Emmy Awards</span>
            </div>
            <div>
              <strong>15</strong>
              <span>Telly Awards</span>
            </div>
            <div>
              <strong>Texas</strong>
              <span>Based and built</span>
            </div>
          </div>
        </section>

        <section className={styles.logoSection} aria-labelledby="selected-clients">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Selected clients</p>
            <h2 id="selected-clients">Local institutions. National brands.</h2>
            <p>
              Different audiences, different stakes, and one shared expectation:
              the work has to feel right and perform where it matters.
            </p>
          </div>

          <div className={styles.logoGrid}>
            {featuredClients.map((client) => (
              <div className={styles.logoCard} key={client.name}>
                {client.src ? (
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 980px) 33vw, 25vw"
                  />
                ) : (
                  <span className={styles.clientName}>{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.caseStudy} aria-labelledby="featured-relationship">
          <div className={styles.caseImage}>
            <Image
              src="/images/rbfcu-stills-grid.jpg"
              alt="Scenes from the RBFCU Go Beyond Banking commercial campaign"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <div className={styles.caseImageLabel}>
              <span>RBFCU</span>
              <span>Commercial campaign</span>
            </div>
          </div>

          <div className={styles.caseCopy}>
            <p className={styles.eyebrow}>Featured relationship</p>
            <h2 id="featured-relationship">
              Five stories.
              <span>One campaign.</span>
            </h2>
            <p>
              Media Bar developed and delivered five broadcast commercials for RBFCU,
              building one consistent campaign system that could travel across audiences
              and Texas markets.
            </p>

            <dl className={styles.caseMetrics}>
              <div>
                <dt>Broadcast spots</dt>
                <dd>5</dd>
              </div>
              <div>
                <dt>Texas markets</dt>
                <dd>4</dd>
              </div>
              <div>
                <dt>Campaign views</dt>
                <dd>5M+</dd>
              </div>
            </dl>

            <Link href="/work/rbfcu-go-beyond-banking" className={styles.caseLink}>
              Read the case study <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className={styles.industrySection} aria-labelledby="industries">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Built for the assignment</p>
            <h2 id="industries">Experience across the room.</h2>
            <p>
              The process changes with the audience, access, approvals, and delivery plan.
              Our job is to understand the environment before the cameras roll.
            </p>
          </div>

          <div className={styles.industryGrid}>
            {industries.map((industry) => (
              <Link href={industry.href} className={styles.industryCard} key={industry.name}>
                <span className={styles.industryNumber}>{industry.number}</span>
                <div>
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
                <span className={styles.industryArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.registry} aria-labelledby="client-registry">
          <div className={styles.registryHeader}>
            <p className={styles.eyebrow}>More of the roster</p>
            <h2 id="client-registry">Work that crosses sectors.</h2>
          </div>

          <div className={styles.registryGrid}>
            {clientGroups.map((group) => (
              <div className={styles.registryGroup} key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.clients.map((client) => <li key={client}>{client}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>Your project belongs here</p>
            <h2>A production partner from brief through delivery.</h2>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/project-planner" className={styles.primaryButton}>Plan your project</Link>
            <Link href="/work" className={styles.secondaryButton}>See more work</Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
