import Layout from '@/components/Layout'
import Link from 'next/link'
import ProjectPlannerForm from './ProjectPlannerForm'
import styles from './project-planner.module.css'

const steps = [
  {
    number: '01',
    title: 'Share the goal',
    copy: 'Tell us what the project needs to accomplish and who needs to see it.',
  },
  {
    number: '02',
    title: 'Define the finish',
    copy: 'Choose the deliverables and channels that may matter to the final scope.',
  },
  {
    number: '03',
    title: 'Add logistics',
    copy: 'Give us the timing, location, and working budget you know today.',
  },
  {
    number: '04',
    title: 'Review and send',
    copy: 'Check the brief, add your contact details, and send it to our team.',
  },
]

export default function ProjectPlannerPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Guided project brief</p>
              <h1 className={styles.heroTitle}>
                Start with the goal.
                <span>We&apos;ll build the plan.</span>
              </h1>
              <p className={styles.heroSummary}>
                Four focused steps give us enough context for a useful first conversation.
                No fixed package and no full creative brief required.
              </p>
              <div className={styles.heroLinks}>
                <a className={styles.heroLink} href="#project-brief">
                  Start your brief
                  <span aria-hidden="true">↓</span>
                </a>
                <Link className={styles.heroLinkMuted} href="/contact#contact-form">
                  Just have a question?
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <ol className={styles.heroSteps} aria-label="Project brief stages">
              {steps.map((item) => (
                <li key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="project-brief" className={styles.formSection}>
          <div className={styles.formHeading}>
            <p className={styles.eyebrow}>Project planner</p>
            <h2>Give us the useful details.</h2>
            <p>
              Complete what you know. Estimates are welcome, and nothing here locks you
              into a scope.
            </p>
          </div>
          <ProjectPlannerForm />
        </section>

        <section className={styles.afterSection} aria-labelledby="after-title">
          <div>
            <p className={styles.eyebrow}>After you send it</p>
            <h2 id="after-title">A real person reviews every brief.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>We review the request</h3>
                <p>We look for the goal, scope, schedule, and any missing production details.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>We follow up personally</h3>
                <p>You hear from our team within one business day, not an automated quote.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>We shape the right approach</h3>
                <p>We recommend practical next steps before you commit to a production scope.</p>
              </div>
            </li>
          </ol>
        </section>
      </main>
    </Layout>
  )
}
