import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from './how-we-work.module.css'

const phases = [
  {
    number: '01',
    title: 'Pre-Production',
    description: 'We shape the brief into a production plan: concept, script, shot list, schedule, locations, talent, and approvals.',
    output: 'Approved production plan',
  },
  {
    number: '02',
    title: 'Production',
    description: 'The crew works from a detailed call sheet, captures the brief, and stays ready for the unscripted moments worth keeping.',
    output: 'Organized production footage',
  },
  {
    number: '03',
    title: 'Post-Production',
    description: 'Editorial, color, sound, graphics, and review rounds turn the captured material into a finished story.',
    output: 'Reviewed master cut',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'We prepare every final format your distribution plan requires, organize the files, and make the handoff clear.',
    output: 'Finals ready for every channel',
  },
]

const portalFeatures = [
  {
    label: 'Timeline',
    title: 'The current phase is always visible.',
    description: 'Milestones, dates, and the next decision stay together, so status never disappears inside an email thread.',
    image: '/portal-timeline.jpg',
    alt: 'Media Bar client portal showing a project timeline and milestones',
  },
  {
    label: 'Files',
    title: 'Every working file has one home.',
    description: 'Scripts, reference materials, review cuts, and final deliverables remain organized from kickoff through delivery.',
    image: '/portal-files.jpg',
    alt: 'Media Bar client portal showing organized project files',
  },
  {
    label: 'Feedback',
    title: 'Notes stay attached to the work.',
    description: 'Feedback threads and revision decisions are captured in one place so the client team and edit team stay aligned.',
    image: '/portal-messages.jpg',
    alt: 'Media Bar client portal showing a project feedback conversation',
  },
]

const commitments = [
  {
    title: 'One accountable team',
    description: 'Creative, production, and post stay connected instead of handing the project through disconnected vendors.',
  },
  {
    title: 'A visible scope',
    description: 'The estimate, schedule, deliverables, and review plan are clear before production begins.',
  },
  {
    title: 'Direct communication',
    description: 'Clients work with the people responsible for the decisions, the set, and the final delivery.',
  },
  {
    title: 'Your footage is yours',
    description: 'The material captured for your production belongs to you, with no licensing trap or footage held hostage.',
  },
]

const faqs = [
  {
    question: 'What happens after I submit the project planner?',
    answer: 'We review the brief, identify any missing production details, and respond within one business day with next questions or a discovery call.',
  },
  {
    question: 'How many rounds of revisions are included?',
    answer: 'Two review rounds are included in a typical project. If the assignment needs a different approval structure, we define that before production and reflect it in the scope.',
  },
  {
    question: 'Can our team be involved on set?',
    answer: 'Yes. We coordinate client attendance during pre-production so the right decision makers can be present without slowing down the production day.',
  },
  {
    question: 'How do we know where the project stands?',
    answer: 'Your private project space holds the current phase, milestone dates, working files, feedback, and delivery assets. You can see the state of the project without asking for a separate status report.',
  },
]

export default function HowWeWorkPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>How we work</p>
            <h1>
              Clear process.
              <span>Better work.</span>
            </h1>
            <p>
              Strong production depends on decisions made at the right time.
              Our process keeps the brief, the people, and the final delivery moving together.
            </p>
            <div className={styles.heroActions}>
              <Link href="/project-planner" className={styles.primaryButton}>Plan your project</Link>
              <a href="#process" className={styles.textLink}>See the process <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <figure className={styles.heroImage}>
            <Image
              src="/images/media-library/media-bar-bts-11.jpg"
              alt="Media Bar crew filming an interview on location"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>
              <span>Decisions made together</span>
              <span>On set in San Antonio</span>
            </figcaption>
          </figure>
        </section>

        <section className={styles.process} id="process">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>The production path</p>
            <h2>Four phases. No mystery in the middle.</h2>
            <p>
              Every assignment is different, but the discipline stays consistent.
              Each phase ends with a clear output and a clear next decision.
            </p>
          </div>

          <div className={styles.phaseList}>
            {phases.map((phase) => (
              <article className={styles.phaseRow} key={phase.number}>
                <span className={styles.phaseNumber}>{phase.number}</span>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
                <span className={styles.phaseOutput}>{phase.output}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.portal}>
          <div className={styles.portalIntro}>
            <p className={styles.eyebrow}>Your project space</p>
            <h2>Progress you can actually see.</h2>
            <p>
              Every client receives a private place for milestones, working files,
              feedback, and delivery. It supports the relationship without replacing it.
            </p>
            <a href="https://portal.creativeagenda.io" className={styles.textLink}>
              Open the client portal <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.portalGrid}>
            {portalFeatures.map((feature) => (
              <article className={styles.portalCard} key={feature.label}>
                <div className={styles.portalImage}>
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.portalCopy}>
                  <span>{feature.label}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.commitments}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>What stays consistent</p>
            <h2>The working relationship matters too.</h2>
            <p>
              A beautiful final film is only part of the assignment.
              The experience of getting there should feel equally considered.
            </p>
          </div>

          <div className={styles.commitmentGrid}>
            {commitments.map((commitment, index) => (
              <article key={commitment.title}>
                <span>0{index + 1}</span>
                <h3>{commitment.title}</h3>
                <p>{commitment.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqIntro}>
            <p className={styles.eyebrow}>Before we begin</p>
            <h2>Common process questions.</h2>
            <Link href="/faq" className={styles.textLink}>See every answer <span aria-hidden="true">→</span></Link>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>Start with the brief</p>
            <h2>Tell us what the work needs to accomplish.</h2>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/project-planner" className={styles.primaryButton}>Plan your project</Link>
            <Link href="/contact" className={styles.secondaryButton}>Talk with the team</Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
