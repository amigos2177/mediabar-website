import styles from './QuickContactBar.module.css'

export default function QuickContactBar() {
  return (
    <section className={styles.section} aria-labelledby="quick-contact-title">
      <div className={styles.inner}>
        <div className={styles.message}>
          <p className={styles.eyebrow}>A simple way to start</p>
          <h2 id="quick-contact-title">Have a quick question?</h2>
          <p>
            Email us directly. You do not need a complete brief, and a member of
            our team will reply personally.
          </p>
        </div>

        <div className={styles.actions}>
          <a
            href="mailto:contact@mediabarproductions.com?subject=Media%20Bar%20website%20question"
            className={styles.primary}
            data-conversion-action="email_our_team"
          >
            Email our team
            <span aria-hidden="true">→</span>
          </a>
          <a href="tel:+12102799442" className={styles.phone}>
            <span>Prefer to talk?</span>
            210-279-9442
          </a>
        </div>
      </div>
    </section>
  )
}
