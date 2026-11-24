import Link from 'next/link'
import styles from './QuickContactBar.module.css'

export default function QuickContactBar() {
  return (
    <section className={styles.section} aria-labelledby="quick-contact-title">
      <div className={styles.inner}>
        <div className={styles.message}>
          <p className={styles.eyebrow}>A simple way to start</p>
          <p id="quick-contact-title" className={styles.title}>Have a quick question?</p>
          <p>
            Send us a short note or{' '}
            <a
              href="mailto:contact@mediabarproductions.com?subject=Media%20Bar%20website%20question"
              data-conversion-action="email_our_team"
              style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              email our team directly
            </a>
            . You do not need a complete brief, and a member of our team will reply personally.
          </p>
        </div>

        <div className={styles.actions}>
          <Link
            href="/contact#contact-form"
            className={styles.primary}
            data-conversion-action="quick_contact_form"
          >
            Send a quick note
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
