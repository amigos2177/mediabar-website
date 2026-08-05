import Link from 'next/link'
import styles from './QuickContactBar.module.css'

export default function QuickContactBar() {
  return (
    <section className={styles.section} aria-labelledby="quick-contact-title">
      <div className={styles.inner}>
        <div className={styles.message}>
          <p className={styles.eyebrow}>A simple way to start</p>
          <h2 id="quick-contact-title">Have a quick question?</h2>
          <p>
            You do not need a complete brief. Send your name, email, and question,
            and a member of our team will reply personally.
          </p>
        </div>

        <div className={styles.actions}>
          <Link
            href="/contact#contact-form"
            className={styles.primary}
            data-conversion-action="ask_question"
          >
            Ask the team
            <span aria-hidden="true">→</span>
          </Link>
          <a href="tel:+12102799442" className={styles.phone}>
            <span>Prefer to talk?</span>
            210-279-9442
          </a>
        </div>
      </div>
    </section>
  )
}
