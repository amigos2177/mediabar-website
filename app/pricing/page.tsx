import Link from 'next/link'
import Layout from '../../components/Layout'
import { pricingFaqs } from './pricing-data'
import styles from './pricing.module.css'

const estimateInputs = [
  {
    number: '01',
    title: 'The goal',
    description:
      'What should the video help your audience understand, feel, or do?',
  },
  {
    number: '02',
    title: 'The production',
    description:
      'How many locations, shoot days, people, and specialized resources will the idea require?',
  },
  {
    number: '03',
    title: 'The finish',
    description:
      'How much editing, color, sound, animation, and versioning will bring the work across the line?',
  },
  {
    number: '04',
    title: 'The rollout',
    description:
      'Where will the finished work run, and how many deliverables does the campaign need?',
  },
]

const process = [
  {
    number: '01',
    title: 'Tell us what the work needs to do.',
    description:
      'Share the goal, audience, deadline, and where the video will live. A developed brief is helpful, but a clear business problem is enough to begin.',
  },
  {
    number: '02',
    title: 'We build the right production around it.',
    description:
      'We map the creative, crew, schedule, locations, production needs, post-production, and final deliverables required to achieve the goal.',
  },
  {
    number: '03',
    title: 'You receive a clear custom estimate.',
    description:
      'The estimate connects the budget to the work so you can understand the scope, ask useful questions, and make informed decisions before production starts.',
  },
]

const estimateSections = [
  {
    label: 'Planning',
    items: [
      'Creative development',
      'Scripting and interview planning',
      'Production scheduling',
      'Locations, casting, and logistics',
    ],
  },
  {
    label: 'Production',
    items: [
      'Crew and shoot days',
      'Camera, lighting, and audio',
      'Studio or location production',
      'Specialty capture when required',
    ],
  },
  {
    label: 'Post-production',
    items: [
      'Editing and story assembly',
      'Color and audio finishing',
      'Graphics, captions, and animation',
      'Review and revision rounds',
    ],
  },
  {
    label: 'Delivery',
    items: [
      'Final master files',
      'Platform-specific versions',
      'Broadcast or digital specifications',
      'Organized production footage',
    ],
  },
]

const constants = [
  'An experienced production team',
  'A scope tied to your actual goal',
  'A clear estimate before work begins',
  'Professional picture and sound standards',
  'Direct communication throughout production',
  'Ownership of the footage we capture for you',
]

export default function PricingPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Pricing</span>
            </nav>
            <p className={styles.eyebrow}>Video production estimates</p>
            <h1>
              Every project
              <em>gets its own number.</em>
            </h1>
            <p className={styles.heroSummary}>
              Media Bar does not sell fixed packages. We build a custom estimate
              around the story, production, deliverables, and business goal
              behind your project.
            </p>
            <div className={styles.heroActions}>
              <Link href="/project-planner" className={styles.primaryAction}>
                Start your estimate
              </Link>
              <a href="tel:2102799442" className={styles.phoneAction}>
                210-279-9442
              </a>
            </div>
          </div>

          <aside className={styles.heroNote}>
            <span>Why custom?</span>
            <p>
              A filmed interview, a live event, and a broadcast campaign require
              different people, time, and tools. A useful estimate begins with
              the work, not a menu.
            </p>
          </aside>
        </section>

        <section className={styles.promiseStrip} aria-label="Estimate commitments">
          <div>
            <strong>Custom</strong>
            <span>Scope</span>
          </div>
          <div>
            <strong>Clear</strong>
            <span>Estimate</span>
          </div>
          <div>
            <strong>Defined</strong>
            <span>Deliverables</span>
          </div>
          <div>
            <strong>Yours</strong>
            <span>Production footage</span>
          </div>
        </section>

        <section className={styles.intro}>
          <p className={styles.sectionLabel}>How pricing works</p>
          <div>
            <h2>
              The budget follows
              <span>the production plan.</span>
            </h2>
            <p>
              The clearest way to price video is to understand what the finished
              work needs to accomplish, then build only the production required
              to get there. These four inputs shape nearly every estimate.
            </p>
          </div>
        </section>

        <section className={styles.inputs}>
          <div className={styles.inputGrid}>
            {estimateInputs.map((input) => (
              <article key={input.number}>
                <span>{input.number}</span>
                <h2>{input.title}</h2>
                <p>{input.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.process}>
          <header className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>From idea to estimate</p>
              <h2>
                A short path to
                <em>a useful number.</em>
              </h2>
            </div>
            <p>
              You do not need every production detail figured out before you
              contact us. Discovery is how we turn the goal into a responsible
              scope.
            </p>
          </header>

          <div className={styles.processList}>
            {process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.estimate}>
          <header>
            <p className={styles.sectionLabel}>Inside the estimate</p>
            <h2>
              One scope.
              <em>Every production phase.</em>
            </h2>
            <p>
              Your estimate is built from the phases your project actually
              needs. Each line connects to a real part of planning, production,
              finishing, or delivery.
            </p>
          </header>

          <div className={styles.estimateGrid}>
            {estimateSections.map((section, index) => (
              <article key={section.label}>
                <div>
                  <span>0{index + 1}</span>
                  <h3>{section.label}</h3>
                </div>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.constants}>
          <div className={styles.constantsLead}>
            <p className={styles.eyebrow}>What never changes</p>
            <h2>
              The scope may change.
              <em>The standard does not.</em>
            </h2>
            <p>
              A smaller production should be appropriately scoped, not treated
              like lesser work. Every estimate protects the fundamentals that
              make the final piece feel professional.
            </p>
          </div>
          <ul>
            {constants.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.faq}>
          <header>
            <p className={styles.sectionLabel}>Pricing questions</p>
            <h2>Before we talk numbers.</h2>
          </header>
          <div className={styles.faqList}>
            {pricingFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>Start with the goal</p>
            <h2>
              Tell us what
              <em>you are planning.</em>
            </h2>
          </div>
          <div className={styles.ctaCopy}>
            <p>
              Share the objective, audience, timeline, and deliverables you have
              in mind. We will help turn those details into the right production
              and a clear custom estimate.
            </p>
            <Link href="/project-planner" className={styles.primaryAction}>
              Plan your project
            </Link>
            <Link href="/work" className={styles.textAction}>
              See our work <span>↗</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
