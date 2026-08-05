import Link from 'next/link'
import Layout from '@/components/Layout'
import ContactForm from './ContactForm'
import styles from './contact.module.css'

const routes = [
  {
    number: '01',
    badge: 'Fastest simple option',
    signal: 'Only 3 fields',
    label: 'Quick question',
    title: 'Just ask us',
    copy: 'Send your name, email, and question. No project brief or production details are required.',
    href: '#contact-form',
    action: 'Ask a question',
    toneClass: styles.routeMessage,
  },
  {
    number: '02',
    badge: 'Best for new productions',
    signal: '4 step guided brief',
    label: 'Planning a production',
    title: 'Build a useful project brief',
    copy: 'Share the goal, deliverables, timing, location, and working budget in four focused steps.',
    href: '/project-planner',
    action: 'Open project planner',
    toneClass: styles.routePlanner,
  },
  {
    number: '03',
    badge: 'For visits and rentals',
    signal: 'San Antonio studio',
    label: 'Studio visit or rental',
    title: 'Find the San Antonio studio',
    copy: 'Review the space, production amenities, location details, and the best way to request a date.',
    href: '/studio',
    action: 'Explore the studio',
    toneClass: styles.routeStudio,
  },
]

const hours = [
  ['Monday to Friday', '8:00 AM to 5:00 PM'],
  ['Saturday', '8:00 AM to 5:00 PM'],
  ['Sunday', 'Closed'],
]

export default function ContactPage() {
  return (
    <Layout hideContactPrompt>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Contact Media Bar</p>
              <h1>
                Let&apos;s make the
                <span>next move clear.</span>
              </h1>
            </div>
            <div className={styles.heroIntro}>
              <p>
                Planning a production, checking availability, or looking for the
                studio? Choose the fastest route and you&apos;ll hear from a real
                person within one business day.
              </p>
              <a href="tel:+12102799442" className={styles.heroPhone}>
                <span>Prefer to talk?</span>
                210-279-9442
              </a>
            </div>
          </div>
        </section>

        <section className={styles.routes} aria-labelledby="contact-routes-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Choose your route</p>
            <h2 id="contact-routes-title">Start in the right place.</h2>
          </div>
          <div className={styles.routeGrid}>
            {routes.map((route) => (
              <Link
                key={route.number}
                href={route.href}
                className={`${styles.routeCard} ${route.toneClass}`}
              >
                <div>
                  <div className={styles.routeBadge}>{route.badge}</div>
                  <div className={styles.routeMeta}>
                    <span>{route.number}</span>
                    <p>{route.label}</p>
                  </div>
                </div>
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.copy}</p>
                </div>
                <div className={styles.routeFooter}>
                  <span className={styles.routeSignal}>{route.signal}</span>
                  <span className={styles.routeAction}>
                    {route.action}
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact-form" className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={styles.contactDetails}>
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>Direct contact</p>
                <h2>Reach the production team.</h2>
                <p>
                  For a quick question, send a note here. For a detailed scope,
                  use the Project Planner so we can give you a more useful first response.
                </p>
              </div>

              <dl className={styles.directory}>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:+12102799442">210-279-9442</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:contact@mediabarproductions.com">
                      contact@mediabarproductions.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Studio</dt>
                  <dd>
                    8610 N New Braunfels Ave
                    <br />
                    Suite 704
                    <br />
                    San Antonio, TX 78217
                  </dd>
                </div>
              </dl>

              <a
                className={styles.directionsLink}
                href="https://www.google.com/maps/search/?api=1&query=8610+N+New+Braunfels+Ave+Suite+704+San+Antonio+TX+78217"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
                <span aria-hidden="true">↗</span>
              </a>

              <div className={styles.hours}>
                <p>Office hours</p>
                <dl>
                  {hours.map(([day, time]) => (
                    <div key={day}>
                      <dt>{day}</dt>
                      <dd>{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className={styles.formPanel}>
              <div className={styles.formIntro}>
                <p className={styles.eyebrow}>Quick inquiry</p>
                <h2>Ask us anything.</h2>
                <p>
                  Name, email, and your question. That is all we need to start.
                  A member of our team will follow up personally.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className={styles.plannerCallout}>
          <div>
            <p className={styles.eyebrow}>Already have a project in mind?</p>
            <h2>Give us the details that shape a real production plan.</h2>
          </div>
          <Link href="/project-planner" className={styles.primaryButton}>
            Start the project planner
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </Layout>
  )
}
