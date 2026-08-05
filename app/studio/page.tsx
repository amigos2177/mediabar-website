import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import QuickContactBar from '@/components/QuickContactBar'
import { studioFaqs } from './studio-data'
import styles from './studio.module.css'

const capabilities = [
  {
    number: '01',
    title: 'Overhead lighting grid',
    description:
      'Ceiling-mounted DMX fixtures keep stands off the floor and make lighting changes fast between setups.',
  },
  {
    number: '02',
    title: 'Controlled sound',
    description:
      'Acoustic treatment helps create a quieter, more consistent environment for interviews and recorded dialogue.',
  },
  {
    number: '03',
    title: '4K production ready',
    description:
      'Power, monitoring, rigging points, and cable paths are organized for professional cinema-camera workflows.',
  },
  {
    number: '04',
    title: 'Production control room',
    description:
      'A dedicated control position supports multicamera recording, switching, monitoring, and live production.',
  },
  {
    number: '05',
    title: 'Easy load-in',
    description:
      'Drive-in access helps crews move equipment, props, and larger set pieces into the studio efficiently.',
  },
  {
    number: '06',
    title: 'Talent support',
    description:
      'A hair and makeup station and comfortable support areas keep talent close to set and ready for camera.',
  },
]

const studioSpaces = [
  {
    label: '01 / Main stage',
    title: 'A flexible room built around the shot.',
    description:
      'Use the clean white stage as a starting point, bring in a backdrop, or dress the room for an interview, product demonstration, commercial, or branded series.',
    image: '/images/studio-7.jpg',
    imageAlt:
      'Media Bar Productions studio stage with white walls, black curtains, and an overhead lighting grid',
  },
  {
    label: '02 / Control room',
    title: 'See the entire production from one position.',
    description:
      'The control room provides a direct view of the stage with switching, audio, lighting, and monitor positions organized for efficient collaboration.',
    image: '/images/studio-9.jpg',
    imageAlt:
      'Media Bar Productions control room overlooking the production stage',
  },
  {
    label: '03 / Production support',
    title: 'The working space around the stage matters too.',
    description:
      'Grip, camera support, staging areas, and talent accommodations stay close at hand so the production can keep moving without unnecessary resets.',
    image: '/images/studio-5.jpg',
    imageAlt:
      'Production support area with camera carts and acoustic treatment at Media Bar Productions',
  },
]

export default function StudioPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/images/studio-7.jpg"
            alt="Media Bar Productions studio stage in San Antonio"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className={styles.heroScrim} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Production studio in San Antonio</p>
            <h1>
              Your shoot.
              <em>Our studio.</em>
            </h1>
            <p className={styles.heroSummary}>
              A controlled production space with a lighting grid, treated sound,
              a dedicated control room, and a crew that can help you use all of it.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryAction}>
                Check availability
              </Link>
              <a href="tel:2102799442" className={styles.secondaryAction}>
                210-279-9442
              </a>
            </div>
          </div>
          <div className={styles.heroCaption}>
            <span>8610 N New Braunfels Ave</span>
            <span>San Antonio, Texas</span>
          </div>
        </section>

        <QuickContactBar />

        <section className={styles.proofStrip} aria-label="Studio highlights">
          <div>
            <strong>2</strong>
            <span>Production stages</span>
          </div>
          <div>
            <strong>DMX</strong>
            <span>Overhead lighting</span>
          </div>
          <div>
            <strong>4K</strong>
            <span>Production ready</span>
          </div>
          <div>
            <strong>1</strong>
            <span>Dedicated control room</span>
          </div>
        </section>

        <section className={styles.intro}>
          <p className={styles.sectionLabel}>A room that works like a production tool</p>
          <div>
            <h2>
              Start with a controlled space.
              <span>Build the look from there.</span>
            </h2>
            <div className={styles.introCopy}>
              <p>
                Media Bar gives agencies, internal teams, photographers, and
                independent producers a professional San Antonio base for
                interviews, commercials, product work, photography, and live content.
              </p>
              <p>
                Rent the space for your own crew, or bring Media Bar into the
                production. We can support the process from planning and crew
                through capture, switching, and post-production.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.spaces}>
          <header className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>Inside the facility</p>
              <h2>
                Space for the set.
                <em>Support for the shoot.</em>
              </h2>
            </div>
            <p>
              One facility connects the stage, technical control, equipment,
              and production team.
            </p>
          </header>

          <div className={styles.spaceList}>
            {studioSpaces.map((space) => (
              <article className={styles.space} key={space.label}>
                <div className={styles.spaceImage}>
                  <Image
                    src={space.image}
                    alt={space.imageAlt}
                    fill
                    sizes="(max-width: 860px) 100vw, 58vw"
                  />
                </div>
                <div className={styles.spaceCopy}>
                  <p>{space.label}</p>
                  <h3>{space.title}</h3>
                  <p>{space.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.capabilities}>
          <header className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>Studio capabilities</p>
              <h2>
                The essentials are
                <em>already in the room.</em>
              </h2>
            </div>
            <p>
              Bring a concept and build from a facility designed for real production days.
            </p>
          </header>

          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <article key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.gallery}>
          <header>
            <p className={styles.sectionLabel}>Studio gallery</p>
            <h2>A closer look.</h2>
          </header>
          <div className={styles.galleryGrid}>
            <figure className={styles.galleryTall}>
              <Image
                src="/images/studio-3.jpg"
                alt="Crew preparing an interview setup beneath the studio lighting grid"
                fill
                sizes="(max-width: 760px) 100vw, 38vw"
              />
              <figcaption>Interview setup</figcaption>
            </figure>
            <figure className={styles.galleryWide}>
              <Image
                src="/images/studio-1.jpg"
                alt="Camera operator filming on the Media Bar studio stage"
                fill
                sizes="(max-width: 760px) 100vw, 62vw"
              />
              <figcaption>Camera department</figcaption>
            </figure>
            <figure className={styles.galleryWide}>
              <Image
                src="/images/studio-4.jpg"
                alt="Production switching and lighting controls inside the control room"
                fill
                sizes="(max-width: 760px) 100vw, 62vw"
              />
              <figcaption>Production control</figcaption>
            </figure>
            <figure className={styles.gallerySquare}>
              <Image
                src="/images/studio-2.jpg"
                alt="Cinema camera monitor being adjusted during a studio shoot"
                fill
                sizes="(max-width: 760px) 100vw, 38vw"
              />
              <figcaption>On-set monitoring</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.location}>
          <div className={styles.locationImage}>
            <Image
              src="/images/studio-8.jpg"
              alt="Wide view of the Media Bar Productions studio and lighting grid"
              fill
              sizes="(max-width: 860px) 100vw, 55vw"
            />
          </div>
          <div className={styles.locationCopy}>
            <p className={styles.sectionLabel}>North San Antonio</p>
            <h2>Close to the city. Ready for load-in.</h2>
            <address>
              8610 N New Braunfels Ave, Suite 704
              <br />
              San Antonio, TX 78217
            </address>
            <p>
              Located just off Loop 410 with parking and production access for
              crews, talent, equipment, and set pieces.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=8610+N+New+Braunfels+Ave+Suite+704+San+Antonio+TX+78217"
              target="_blank"
              rel="noreferrer"
              className={styles.textLink}
            >
              Get directions <span>↗</span>
            </a>
          </div>
        </section>

        <section className={styles.faq}>
          <header>
            <p className={styles.sectionLabel}>Studio FAQ</p>
            <h2>Before you book.</h2>
          </header>
          <div className={styles.faqList}>
            {studioFaqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {faq.question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <Image
            src="/images/studio-3.jpg"
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
          />
          <div className={styles.ctaScrim} />
          <div>
            <p className={styles.eyebrow}>Plan the production day</p>
            <h2>
              Put a date
              <em>on the calendar.</em>
            </h2>
            <p>
              Tell us what you are making, how many people are coming, and what
              support you need. We will confirm availability and next steps.
            </p>
            <Link href="/contact" className={styles.primaryAction}>
              Check studio availability
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
