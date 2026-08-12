import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from './editorial-policy.module.css'

const standards = [
  {
    number: '01',
    title: 'Experience before opinion',
    description:
      'Our production guidance begins with work our team has planned, filmed, edited, delivered, or managed for real organizations.',
  },
  {
    number: '02',
    title: 'A person is accountable',
    description:
      'Every article names its author. Company and service pages are reviewed by Media Bar Productions before publication.',
  },
  {
    number: '03',
    title: 'Primary sources first',
    description:
      'When a claim depends on outside information, we favor official documentation, original research, and direct source material.',
  },
  {
    number: '04',
    title: 'Useful over promotional',
    description:
      'Planning guides are written to help a reader make a better production decision, even when Media Bar is not the final vendor.',
  },
]

export default function EditorialPolicyPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Authority needs accountability</p>
            <h1>
              Editorial standards{' '}
              <span>you can verify.</span>
            </h1>
            <p className={styles.intro}>
              This page explains how Media Bar creates, reviews, updates, and
              corrects the production information published on this website.
            </p>
            <p className={styles.reviewed}>Last reviewed July 19, 2026</p>
          </div>
        </section>

        <section className={styles.standards} aria-labelledby="standards-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Our standard</p>
            <h2 id="standards-heading">Built from the work, reviewed by the team.</h2>
          </div>
          <div className={styles.standardGrid}>
            {standards.map((standard) => (
              <article key={standard.number}>
                <span>{standard.number}</span>
                <h3>{standard.title}</h3>
                <p>{standard.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.details}>
          <article>
            <p className={styles.eyebrow}>Authorship and review</p>
            <h2>Who stands behind the content</h2>
            <p>
              Production guides identify the person responsible for the article.
              Most are written or reviewed by Ruben Garcia, Founder and Executive
              Producer, and connect to his profile on the Media Bar About page.
            </p>
            <p>
              Service, location, portfolio, and company pages are reviewed as
              Media Bar Productions content. We connect those pages to the same
              business identity, contact information, and production record used
              throughout the site.
            </p>
            <Link href="/about#founder">Meet Ruben Garcia <span aria-hidden="true">→</span></Link>
          </article>

          <article>
            <p className={styles.eyebrow}>First-hand knowledge</p>
            <h2>What our guidance is based on</h2>
            <p>
              We write about the production work we know: planning, scripting,
              location logistics, interviews, camera and sound workflows,
              live production, editing, review, delivery, and content reuse.
            </p>
            <p>
              Examples may reference our own projects, process, studio, crew, or
              published portfolio. Client names, awards, and project details are
              included only when they are part of Media Bar&apos;s public record.
            </p>
            <Link href="/work">Explore the work <span aria-hidden="true">→</span></Link>
          </article>

          <article>
            <p className={styles.eyebrow}>AI-assisted tools</p>
            <h2>How technology supports the work</h2>
            <p>
              We may use AI-assisted tools to organize research, compare page
              structure, or improve clarity. They do not replace human review,
              first-hand production experience, or responsibility for what is
              published.
            </p>
            <p>
              Claims about Media Bar, its services, clients, awards, availability,
              and production practices are checked against company information
              before publication.
            </p>
          </article>

          <article>
            <p className={styles.eyebrow}>Updates and corrections</p>
            <h2>When something changes</h2>
            <p>
              Material updates receive a visible updated date. We correct factual
              errors when they are identified and review older guidance when
              production tools, platform requirements, or company information
              changes.
            </p>
            <p>
              To report an error or ask about a source, email
              {' '}<a href="mailto:contact@mediabarproductions.com">contact@mediabarproductions.com</a>.
              Include the page URL and the detail you believe should be reviewed.
            </p>
          </article>
        </section>

        <section className={styles.boundary}>
          <div>
            <p className={styles.eyebrow}>A clear boundary</p>
            <h2>Production guidance, not professional advice.</h2>
          </div>
          <p>
            Our content is educational and reflects video production experience.
            It is not legal, medical, financial, accessibility, privacy, or
            regulatory advice. Organizations should involve the appropriate
            qualified professionals when a project carries those requirements.
          </p>
        </section>

        <section className={styles.cta}>
          <p className={styles.eyebrow}>Have a production question?</p>
          <h2>Ask the people doing the work.</h2>
          <div>
            <Link href="/contact" className={styles.primary}>Contact Media Bar</Link>
            <Link href="/blog" className={styles.secondary}>Read production guides</Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
