import Link from 'next/link'
import styles from './ContactPrompt.module.css'

export default function ContactPrompt() {
  return (
    <section className={styles.section} aria-labelledby="contact-prompt-title">
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>A simpler way to start</p>
          <h2 id="contact-prompt-title" className={styles.title}>
            Have a question? <em>You do not need a full brief.</em>
          </h2>
        </div>
        <div className={styles.actionPanel}>
          <p className={styles.copy}>
            Email your question directly. Ask about an idea, availability,
            capabilities, or the best next step without completing a project brief.
          </p>
          <div className={styles.actions}>
            <a
              href="mailto:contact@mediabarproductions.com?subject=Media%20Bar%20website%20question"
              className={styles.primary}
              data-conversion-action="email_our_team"
            >
              Email our team
            </a>
            <Link href="/contact#contact-form" className={styles.secondary}>
              Use the short form
            </Link>
          </div>
          <p className={styles.response}>
            A real person replies within one business day. Prefer to talk?{' '}
            <a href="tel:+12102799442">210-279-9442</a>
          </p>
        </div>
      </div>
    </section>
  )
}
