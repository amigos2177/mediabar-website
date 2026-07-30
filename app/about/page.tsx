import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from './about.module.css'

const principles = [
  {
    number: '01',
    title: 'The work comes first',
    description: 'Every production gets the same creative attention and technical rigor, regardless of format, budget, or brand size.',
  },
  {
    number: '02',
    title: 'Direct access',
    description: 'Clients work with the people making the work. Clear communication stays close to the crew, the schedule, and the decisions.',
  },
  {
    number: '03',
    title: 'Straight answers',
    description: 'Itemized estimates, realistic schedules, and honest conversations about what will make the final piece stronger.',
  },
  {
    number: '04',
    title: 'Your footage is yours',
    description: 'No licensing traps and no footage held hostage. Everything we capture for your production belongs to you.',
  },
]

const clients: Array<{ name: string; src?: string }> = [
  { name: 'San Antonio Spurs', src: '/images/client-spurs.png' },
  { name: 'H-E-B', src: '/images/client-heb.png' },
  { name: 'Unilever' },
  { name: 'Frost Bank', src: '/images/client-frost.png' },
  { name: 'Bass Pro Shops', src: '/images/client-bass-pro.png' },
  { name: 'Kiolbassa', src: '/images/client-kiolbassa.png' },
]

export default function AboutPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/images/media-library/media-bar-team-photo.jpg"
            alt="Media Bar Productions cast and crew on set in San Antonio"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroScrim} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>About Media Bar</p>
            <h1>
              Built by people
              <em>who love the work.</em>
            </h1>
            <p>
              An award-winning production company rooted in San Antonio and built
              for brands that value craft, clarity, and a crew they can trust.
            </p>
          </div>
          <div className={styles.heroCaption}>
            <span>Media Bar cast and crew</span>
            <span>San Antonio, Texas</span>
          </div>
        </section>

        <section className={styles.intro}>
          <p className={styles.sectionLabel}>Who we are</p>
          <div>
            <h2>
              Media Bar is a San Antonio production company helping businesses
              turn important ideas into films people remember.
            </h2>
            <p>
              Since 2011, we have produced commercials, corporate films, patient
              stories, event coverage, live broadcasts, and campaign content for
              organizations across Texas and beyond.
            </p>
          </div>
        </section>

        <section className={styles.stats} aria-label="Media Bar Productions achievements">
          <div>
            <strong>2011</strong>
            <span>Founded in San Antonio</span>
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
            <strong>2011</strong>
            <span>Producing since</span>
          </div>
        </section>

        <section className={styles.founder} id="founder">
          <div className={styles.founderImage}>
            <Image
              src="/images/media-library/ruben-garcia-founder-headshot-01.jpeg"
              alt="Ruben Garcia, founder of Media Bar Productions"
              fill
              sizes="(max-width: 850px) 100vw, 42vw"
            />
          </div>
          <div className={styles.founderCopy}>
            <p className={styles.eyebrow}>Founder and Executive Producer</p>
            <h2>Ruben Garcia</h2>
            <p className={styles.founderStatement}>
              San Antonio brands deserve exceptional production without having
              to bring in a crew from either coast.
            </p>
            <p>
              Ruben founded Media Bar with a simple belief: the best productions
              happen when experienced people stay close to the client, the story,
              and the details. That hands-on approach still shapes every project.
            </p>
            <p>
              The company has grown from a local production partner into one of
              South Texas&apos; most recognized video teams, while keeping its
              creative leadership and production relationships firmly rooted in
              San Antonio.
            </p>
            <Link href="/contact" className={styles.textLink}>
              Talk with our team <span>↗</span>
            </Link>
          </div>
        </section>

        <section className={styles.texasNetwork} aria-labelledby="texas-network-title">
          <div className={styles.texasNetworkIntro}>
            <div>
              <p className={styles.eyebrow}>Keep Creative in Texas</p>
              <h2 id="texas-network-title">
                Built here.
                <em>Connected statewide.</em>
              </h2>
            </div>
            <div className={styles.texasNetworkCopy}>
              <p>
                Ruben also created CreativesInTexas.com, a statewide platform
                that helps companies discover Texas production companies, crew
                members, and creative talent.
              </p>
              <p>
                Media Bar and Ruben maintain portfolio-reviewed founding
                profiles there, making it easy to explore our work and connect
                directly with the people behind it.
              </p>
            </div>
          </div>

          <div className={styles.texasProfiles}>
            <a
              href="https://creativesintexas.com/creatives/media-bar-productions-llc"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.texasProfile}
            >
              <span className={styles.profileType}>Verified company profile</span>
              <strong>Media Bar Productions</strong>
              <p>View our capabilities, selected work, and client recommendation.</p>
              <span className={styles.profileLink}>Explore the profile ↗</span>
            </a>
            <a
              href="https://creativesintexas.com/creatives/ruben-garcia"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.texasProfile}
            >
              <span className={styles.profileType}>Founder profile</span>
              <strong>Ruben Garcia</strong>
              <p>Explore Ruben&apos;s production roles, services, and selected work.</p>
              <span className={styles.profileLink}>Explore the profile ↗</span>
            </a>
          </div>
        </section>

        <section className={styles.crew}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>On Set</p>
              <h2>Good work is<br /><em>a team sport.</em></h2>
            </div>
            <p>
              Producers, directors, camera crews, audio specialists, editors, and
              trusted collaborators assembled around the needs of each production.
            </p>
          </div>

          <div className={styles.crewGrid}>
            <figure className={styles.crewWide}>
              <Image
                src="/images/media-library/media-bar-bts-15.jpg"
                alt="Cinema camera prepared by the Media Bar crew"
                fill
                sizes="(max-width: 760px) 100vw, 66vw"
              />
              <figcaption>Production craft</figcaption>
            </figure>
            <figure>
              <Image
                src="/images/media-library/media-bar-bts-25.jpg"
                alt="Media Bar camera department working on set"
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
              />
              <figcaption>Camera department</figcaption>
            </figure>
            <figure>
              <Image
                src="/images/media-library/media-bar-crew-group-heb.jpg"
                alt="Media Bar production crew together on location at HEB"
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
              />
              <figcaption>HEB production crew</figcaption>
            </figure>
            <figure className={styles.crewWide}>
              <Image
                src="/images/media-library/media-bar-crew-wrap-photo.jpg"
                alt="Media Bar crew and cast at the end of a production day"
                fill
                sizes="(max-width: 760px) 100vw, 66vw"
              />
              <figcaption>At wrap</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.awards}>
          <div className={styles.awardsImage}>
            <Image
              src="/images/media-library/media-bar-emmy-award.jpg"
              alt="Media Bar Productions team holding an Emmy Award"
              fill
              sizes="(max-width: 850px) 100vw, 43vw"
            />
          </div>
          <div className={styles.awardsCopy}>
            <p className={styles.sectionLabel}>Recognition</p>
            <div className={styles.awardNumber}>
              <strong>3</strong>
              <span>Emmy Awards</span>
            </div>
            <div className={styles.awardNumber}>
              <strong>15</strong>
              <span>Telly Awards</span>
            </div>
            <p>
              The awards matter because they recognize the standard our clients
              receive every day. The relationships and the work that earns them
              matter even more.
            </p>
            <Link href="/about/awards" className={styles.darkLink}>
              Explore our awards <span>↗</span>
            </Link>
          </div>
        </section>

        <section className={styles.principles}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>How we operate</p>
              <h2>What clients<br /><em>can count on.</em></h2>
            </div>
            <p>
              A clear production process, direct relationships, and no mystery
              around ownership, scope, or delivery.
            </p>
          </div>

          <div className={styles.principleList}>
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
          <Link href="/how-we-work" className={styles.processLink}>
            See the full production process <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <section className={styles.clients}>
          <div className={styles.clientsHeader}>
            <p className={styles.sectionLabel}>Trusted by teams across Texas</p>
            <Link href="/clients">View client relationships <span>↗</span></Link>
          </div>
          <div className={styles.clientGrid}>
            {clients.map((client) => (
              <div key={client.name}>
                {client.src ? (
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={190}
                    height={90}
                    sizes="180px"
                  />
                ) : (
                  <span className={styles.clientName}>{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <p className={styles.eyebrow}>Your production partner</p>
          <h2>Bring us the idea.<br /><em>We&apos;ll build the rest.</em></h2>
          <div className={styles.ctaActions}>
            <Link href="/project-planner" className={styles.primaryAction}>Plan your project</Link>
            <Link href="/work" className={styles.secondaryAction}>See our work <span>↗</span></Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
