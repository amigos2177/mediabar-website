import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import VimeoPlayer from '@/components/VimeoPlayer'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import styles from './page.module.css'

const path = '/video-production/animated-patient-education'
const description = 'Custom animated patient education videos for dental, pediatric, and eye-care practices. Scripts, characters, and production by Media Bar in San Antonio.'
export const metadata = buildMetadata({ title: 'Animated Patient Education Videos | San Antonio | Media Bar', description, path, ogImage: '/images/animation/eye-exam.webp' })

const faqs = [
  { question: 'Can you create a cartoon version of our doctor?', answer: 'We can develop a stylized character inspired by your doctor using approved reference photos. You review the character design before animation. We establish the achievable resemblance during development and include that work in your quote.' },
  { question: 'How long are the videos?', answer: 'A focused story often fits into 15–20 seconds. We recommend the length based on what a child needs to understand. More involved topics can become a longer video or a series of short stories.' },
  { question: 'Who checks the medical details?', answer: 'Your practice reviews and approves the script, terminology, and procedure details before animation. We handle creative development and production, then return the finished edit for your review.' },
  { question: 'How much does a video cost?', answer: 'We quote a defined scope before production. The number of videos, character development, scene complexity, language versions, delivery formats, and revision rounds determine the price. Start with one video or plan a series using a shared visual style.' },
  { question: 'Where can we use the finished videos?', answer: 'We can prepare versions for your website, appointment communications, social channels, and office screens. We agree on aspect ratios, captions, sound, and intended use before production.' },
  { question: 'Can Media Bar also film our practice?', answer: 'Yes. Media Bar Productions is a full-service video production company in San Antonio. Alongside animation, we create provider profiles, office tours, commercials, interviews, and brand videos.' },
]

export default function AnimatedPatientEducationPage() {
  return <Layout hideContactPrompt>
    <ServiceJsonLd name="Animated Patient Education Video Production" description={description} url={path} image="https://www.mediabarproductions.com/images/animation/eye-exam.webp" />
    <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Video Production', url: '/video-production' }, { name: 'Animated Patient Education', url: path }]} />
    <FAQPageJsonLd faqs={faqs} />
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Media Bar Productions · San Antonio, Texas</p>
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.serviceTitle}>Animated Patient Education Videos</h1>
              <p className={styles.headline}>Big feelings.<br /><span>Little stories.</span></p>
              <p className={styles.lead}>Help children picture their next appointment.</p>
              <p className={styles.copy}>Custom animated stories for dental, pediatric, and eye-care practices. Created by a San Antonio video production team, from the first script to the final sound and edit.</p>
              <div className={styles.actions}><Link className={styles.primary} href="/contact?service=animated-patient-education">Talk About Your Practice</Link><a className={styles.secondary} href="#demo">See the Demo ↓</a></div>
            </div>
            <figure className={styles.heroImage}>
              <Image src="/images/animation/eye-exam.webp" alt="Animated eye-exam concept with a child and a friendly eye-care provider" width={1440} height={810} sizes="(max-width: 850px) 100vw, 55vw" preload />
              <figcaption>A little introduction to a big first experience. <span>Demonstration concept</span></figcaption>
            </figure>
          </div>
          <div className={styles.strip}><span>Your practice. Your story.</span><span>Characters with personality</span><span>Professional picture &amp; sound</span><span>Your team reviews the details</span></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.answer}`}>
        <div className={`${styles.wrap} ${styles.twoCol}`}>
          <div><p className={styles.eyebrow}>The service, explained</p><h2>What is an animated<br />patient-education video?</h2></div>
          <div><p className={styles.copy}>An animated patient-education video uses characters, narration, and a simple story to explain what happens during a healthcare visit. Media Bar Productions creates these videos for dental, pediatric, and eye-care practices, with scripts and procedure details reviewed by the practice before animation.</p><p className={styles.copy}>Our San Antonio team handles creative development, character design, animation, editing, sound, and delivery. A focused story can run 15–20 seconds, with formats prepared for the places your patients will watch.</p></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.demo}`} id="demo">
        <div className={`${styles.wrap} ${styles.twoCol}`}>
          <div><p className={styles.eyebrow}>A friendly first look</p><h2>Watch our animated<br />patient-education demo.</h2></div>
          <div><p className={styles.copy}>Watch our short concept reel to see the character style, storytelling, and finishing we can bring to your practice. These examples demonstrate the creative approach; your video is developed around your team and visit experience.</p><a className={styles.secondary} href="https://vimeo.com/1229044258" target="_blank" rel="noopener noreferrer">Watch on Vimeo ↗</a></div>
        </div>
        <div className={`${styles.wrap} ${styles.reel}`}><div className={styles.player}><VimeoPlayer videoId="1229044258" title="Animated Patient Education Videos | Media Bar Productions" thumbnailUrl="/images/animation/eye-exam.webp" /></div><p className={styles.note}>Demonstration concepts · Animated patient education by Media Bar Productions</p></div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>One question. One small story.</p><h2>Stories for dental, pediatric,<br />and eye-care practices.</h2>
          <div className={styles.cards}>{[
            ['01', 'Dental cleaning videos', 'Introduce the chair, the friendly team, and what happens during a cleaning. Give families a simple story to watch together before they arrive.'],
            ['02', 'Pediatric checkup videos', 'Follow a character through familiar moments such as a height check and listening to a heartbeat, with details reviewed by your practice.'],
            ['03', 'Eye-exam videos', 'Show a child meeting the provider and trying the activities in an eye exam. Match the story to the ages and visits your practice serves.'],
          ].map(([number, title, copy]) => <article className={styles.card} key={number}><span className={styles.number}>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.light}`}>
        <div className={`${styles.wrap} ${styles.twoCol}`}>
          <div><p className={styles.eyebrow}>Made for your practice</p><h2>Familiar faces.<br />A story of your own.</h2><p className={styles.copy}>Build a welcoming animated world around your branding, colors, and an agreed practice setting. We can also explore a cartoon character inspired by your doctor, with the design approved before animation.</p></div>
          <div className={styles.list}>{[
            ['A clear story', 'A script and storyboard built around one useful message.'],
            ['A distinctive look', 'Character and setting development with a visual approval step.'],
            ['A finished production', 'Animation, narration, music, editing, and captions shaped into a complete video.'],
            ['The versions you need', 'Agreed formats for your website, social channels, appointment communications, and office screens.'],
          ].map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}><p className={styles.eyebrow}>From idea to delivery</p><h2>Your expertise. Our production team.</h2><div className={`${styles.cards} ${styles.steps}`}>{[
          ['01', 'Choose the moment', 'Tell us who the video is for, what the visit involves, and where families will see it.'],
          ['02', 'Approve the story', 'Review the script, character, and visual direction. Your team confirms the care details.'],
          ['03', 'Bring it to life', 'We produce the animation and shape the voice, sound, pacing, and brand elements.'],
          ['04', 'Review & deliver', 'Review the edit within the agreed revision scope, then receive your finished formats.'],
        ].map(([number, title, copy]) => <article className={styles.card} key={number}><span className={styles.number}>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section className={`${styles.section} ${styles.demo}`}><div className={`${styles.wrap} ${styles.twoCol}`}><div><p className={styles.eyebrow}>Start small. Build a series.</p><h2>One helpful story.<br />Or a whole collection.</h2></div><div><p className={styles.copy}>Start with one focused video, or develop recurring characters for a series of visits and helpful habits. We define the creative scope, delivery formats, revision rounds, price, and schedule before production begins.</p><Link className={styles.primary} href="/contact?service=animated-patient-education">Request a Video Quote</Link></div></div></section>

      <section className={styles.section}><div className={`${styles.wrap} ${styles.twoCol}`}><div><p className={styles.eyebrow}>Practical questions</p><h2>Animated video questions.</h2></div><div className={styles.faq}>{faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section className={`${styles.section} ${styles.closing}`}><div className={styles.wrap}><p className={styles.eyebrow}>Your San Antonio production partner</p><h2>What should your young<br />patients meet first?</h2><p className={styles.copy}>Tell us about your practice and the experience you want to introduce. We will help turn it into a clear, welcoming story.</p><div className={styles.actions}><Link className={styles.primary} href="/contact?service=animated-patient-education">Let’s Talk About Your Video</Link><a className={styles.secondary} href="tel:2102799442">210-279-9442</a></div><p className={styles.related}>More from Media Bar: <Link href="/video-production/motion-graphics">Motion graphics &amp; animation</Link> · <Link href="/video-production/medical">Medical &amp; healthcare video</Link> · <Link href="/video-production/commercials">Commercial production</Link> · <Link href="/work">Explore our work</Link></p></div></section>
    </main>
  </Layout>
}
