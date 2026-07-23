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
            Share as much or as little as you know. Ask about an idea, availability,
            capabilities, or the best next step without completing the project planner.
          </p>
          <div className={styles.actions}>
            <Link href="/contact#contact-form" className={styles.primary}>
              Ask a question
            </Link>
            <a href="tel:+12102799442" className={styles.secondary}>
              Call 210-279-9442
            </a>
          </div>
          <p className={styles.response}>A real person replies within one business day.</p>
        </div>
      </div>
    </section>
  )
}
