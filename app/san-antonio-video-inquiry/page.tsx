import type { Metadata } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import ContactForm from '@/app/contact/ContactForm'
import contact from '@/app/contact/contact.module.css'
import styles from './inquiry.module.css'

export const metadata: Metadata = {
  title: 'San Antonio Corporate Video & Commercials | Media Bar Productions',
  description: 'Discuss a corporate video or commercial with Media Bar Productions. San Antonio crew, full-service production, and a short project inquiry.',
  alternates: { canonical: 'https://www.mediabarproductions.com/san-antonio-video-inquiry' },
}

export default function VideoInquiryPage() {
  return (
    <Layout hideContactPrompt>
      <main className={`${contact.page} ${styles.page}`}>
        <section className={styles.grid} aria-labelledby="inquiry-title">
          <div className={styles.copy}>
            <p className={contact.eyebrow}>Media Bar Productions · San Antonio</p>
            <h1 id="inquiry-title">Corporate video.<br />Commercial production.<br /><span>One local team.</span></h1>
            <p>From strategy and scripting to crews, editing, color, captions, and final delivery. Tell us what you are planning; we will help define the scope.</p>
            <p className={styles.proof}>3 Lone Star Emmy Awards · 15 Telly Awards<br />Producing since 2010 · Your footage, yours to keep</p>
            <a className={contact.primaryButton} href="#project-inquiry">Discuss your project →</a>
            <p>Prefer to talk? <a href="tel:+12102799442">210-279-9442</a></p>
          </div>
          <div id="project-inquiry" className={`${contact.formPanel} ${styles.form}`}>
            <div className={contact.formIntro}>
              <p className={contact.eyebrow}>A short first conversation</p>
              <h2>What are you planning?</h2>
              <p>No full brief required. Our team replies within one business day. Budgets of $5,000+ help us plan a full production scope; if you are unsure, select “Not sure yet.”</p>
            </div>
            <ContactForm projectInquiry />
          </div>
        </section>
        <section className={styles.work} aria-labelledby="selected-work">
          <p className={contact.eyebrow}>Selected production work</p>
          <h2 id="selected-work">See the approach before we talk.</h2>
          <div className={styles.cards}>
            <article><h3>Corporate films & leadership</h3><p>Brand films, executive interviews, customer stories, and recruiting content. Explore the corporate reel and examples including ST Engineering and Sanctuary Wealth.</p><Link href="/video-production/corporate">View corporate work →</Link></article>
            <article><h3>RBFCU: Go Beyond Banking</h3><p>Production and post-production across five broadcast commercials, delivered for a campaign spanning four Texas markets.</p><Link href="/work">Explore our work →</Link></article>
          </div>
          <p>One coordinated production plan: brief, pre-production, filming, review, and delivery. Already have a detailed scope? <Link href="/project-planner">Use the full Project Planner.</Link></p>
        </section>
      </main>
    </Layout>
  )
}
