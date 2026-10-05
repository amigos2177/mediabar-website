import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import SpotlightForm from './SpotlightForm'
import styles from './spotlight.module.css'

export const dynamic = 'force-dynamic'
export const metadata = buildMetadata({
  title: 'Texas Business Spotlight | A Media Bar YouTube Series',
  description: 'Apply for Texas Business Spotlight, a new Media Bar YouTube series. Three businesses in San Antonio, Boerne, and New Braunfels receive a complimentary feature.',
  path: '/business-spotlight',
  ogImage: '/business-spotlight/opengraph-image',
})

const inclusions = [
  ['01', 'A conversation at your business.', 'A guided interview with you or someone who knows your business, filmed on location during the same visit as your business footage. We’ll help you feel comfortable and find the story. No script needed.'],
  ['02', 'Your business in action.', 'One visit of up to two consecutive hours at one business location, including setup, your interview, and filming the people, process, and details that bring your story to life.'],
  ['03', 'Your episode. Your story.', 'One 90–120-second feature for the Texas Business Spotlight YouTube series. You review it privately before publication, with two rounds of revisions included.'],
  ['04', 'Footage for what comes next.', 'Seven days after your episode goes public on our YouTube channel, you receive the finished HD feature plus individual selected B-roll clips totaling approximately one minute. The clips are lightly color-corrected, without titles or added music, for your business’s own marketing.'],
]

export default function BusinessSpotlightPage() {
  const preview = process.env.SPOTLIGHT_PREVIEW === 'true'
  const closed = process.env.BUSINESS_SPOTLIGHT_APPLICATIONS_CLOSED === 'true'
  return (
    <Layout hideContactPrompt>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Texas Business Spotlight', url: '/business-spotlight' }]} />
      <main className={styles.page}>
        {preview && <div className={styles.preview}>Private draft preview · Application submissions are disabled</div>}
        <section className={styles.hero} aria-labelledby="spotlight-title">
          <div className={styles.heroCopy}>
            <Image className={styles.seriesLogo} src="/images/business-spotlight/texas-business-spotlight-red-wide.jpg" alt="Texas Business Spotlight — YouTube series" width={1792} height={1008} sizes="(max-width: 480px) 260px, 330px" preload />
            <p className={styles.eyebrow}>A YouTube series by Media Bar Productions</p>
            <h1 id="spotlight-title">Every business<br />has a <em>story.</em></h1>
            <p className={styles.heroDeck}>Three local businesses. The first three stories in a new YouTube series.</p>
            <p className={styles.heroDescription}>Texas Business Spotlight introduces the people, places, and work behind local businesses. We’re starting in San Antonio, Boerne, and New Braunfels, with three complimentary features produced by Media Bar.</p>
            <div className={styles.actions}><a href="#apply" className={styles.button}>{closed ? 'Application status' : 'Share your story'}<span aria-hidden="true">↗</span></a><a href="#details" className={styles.textLink}>Read the details ↓</a></div>
            <p className={styles.small}>Complimentary for three selected businesses. No purchase required.</p>
          </div>
          <figure className={styles.heroImage}>
            <Image src="/images/business-spotlight/studio-retouched.png" alt="Behind the scenes of an interview, with the camera crew in the foreground and the interview subject softly out of focus." fill sizes="(max-width: 800px) 100vw, 48vw" preload />
            <figcaption>Behind the scenes of an interview.</figcaption>
          </figure>
        </section>
        <div className={styles.locationBar}><span>Your story. Told here.</span><p>San Antonio <b aria-hidden="true">/</b> Boerne <b aria-hidden="true">/</b> New Braunfels</p></div>

        <section className={styles.section} id="included" aria-labelledby="included-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>What we’ll make together</p><h2 id="included-title">A conversation.<br />A look at your world.<br /><em>Your story on film.</em></h2><p>The approved feature premieres on <a className={styles.channelLink} href="https://www.youtube.com/@MediaBarProductions" target="_blank" rel="noopener noreferrer">Media Bar Productions’ YouTube channel ↗</a>. You can share that link as soon as it’s live. Your downloadable files follow seven days later.</p></div>
          <div className={styles.inclusions}>{inclusions.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </section>

        <section className={styles.releaseTimeline} aria-labelledby="release-title">
          <div><p className={styles.eyebrow}>How the release works</p><h2 id="release-title">Your approval first.<br /><em>YouTube first release.</em></h2></div>
          <ol><li><span>Before publication</span><h3>Review it privately.</h3><p>We send you a private review. Two rounds of revisions help us get the feature ready for your approval.</p></li><li><span>Publication day</span><h3>Your episode goes live.</h3><p>We publish the approved feature on our YouTube channel. You’re welcome to share the YouTube link right away.</p></li><li><span>Seven days later</span><h3>The files are yours to use.</h3><p>We provide download access to your finished feature and approximately one minute of selected B-roll clips for your own marketing.</p></li></ol>
        </section>

        <section className={styles.selection} aria-labelledby="selection-title">
          <div><p className={styles.eyebrow}>Who we’re looking for</p><h2 id="selection-title">There’s more to your business<br />than what you sell.</h2><p>A shop, a restaurant, a workshop, a professional service. We’re interested in the people and work that make a business its own.</p><p>You don’t need a large following or experience on camera.</p></div>
          <div className={styles.selectionList}><h3>How we’ll choose the three</h3><ul><li><strong>A story with something to say.</strong> A beginning, a turning point, a process, or a perspective worth sharing.</li><li><strong>Something to show.</strong> Real work, people, products, or a place we can film.</li><li><strong>Readiness to participate.</strong> An available interview subject, location access, and a responsive point of contact.</li><li><strong>A mix of businesses.</strong> Different industries and perspectives across the pilot.</li></ul><p>Selection is editorial, not first come, first served. Applying does not guarantee a place.</p></div>
        </section>

        <section className={styles.details} id="details" aria-labelledby="details-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Before you apply</p><h2 id="details-title">Clear expectations.<br /><em>Room for a good story.</em></h2><p>This is one pilot round with three businesses. No purchase, subscription, or paid upgrade is required.</p></div>
          <div className={styles.rules}>
            <details open><summary>Eligibility &amp; filming area</summary><p>Your business must be operating in San Antonio, Boerne, or New Braunfels. An owner or authorized representative must apply. The interview and business footage are filmed at one business location in one of these cities.</p></details>
            <details><summary>Scheduling &amp; preparation</summary><p>Selected businesses will coordinate one on-location visit with our team for the interview and footage of the business in action. We’ll agree on the filming date and the delivery schedule before confirming participation. One person should coordinate access, participants, and feedback. If your availability changes, tell us promptly so we can discuss rescheduling or offer the place to an alternate.</p></details>
            <details><summary>Your finished feature &amp; revisions</summary><p>Your feature is one 90–120-second landscape HD video with a music bed and edited interview and location footage. You receive a private review before publication. Two rounds of consolidated revisions to the feature are included, covering factual corrections and reasonable changes using footage already filmed. We publish after your approval.</p></details>
            <details><summary>Selected B-roll &amp; when you receive the files</summary><p>Seven days after the approved episode is first publicly available on our YouTube channel, we provide download access to the finished HD feature and individual selected B-roll clips totaling approximately one minute. The B-roll is lightly color-corrected and delivered without titles or added music, for your business’s own marketing. You can share the YouTube link immediately; please wait for delivery before uploading the feature independently.</p><p>This is a curated selection of usable footage. Unselected camera files, raw interview recordings, project files, extra locations, reshoots, and additional edited videos are not included. The two revision rounds apply to the finished feature.</p></details>
            <details><summary>YouTube publication &amp; filming permission</summary><p>Texas Business Spotlight is a public YouTube series produced by Media Bar Productions. Participation includes permission to publish your approved episode on <a href="https://www.youtube.com/@MediaBarProductions" target="_blank" rel="noopener noreferrer">our YouTube channel</a>, and to share that approved feature on our website, social channels, and portfolio. We’ll ask for your approval before publishing. You can share the YouTube link immediately. Download access to the feature and selected B-roll follows seven days after public release.</p><p>You must be authorized to represent the business and arrange access to the filming location. The application acknowledgment does not provide consent on behalf of every person who may appear. Before filming, we’ll confirm the scope and obtain the needed appearance and location permissions, including permission from any participating staff or customers.</p></details>
            <details><summary>Selection &amp; what happens next</summary><p>We review applications against the story, visual opportunities, readiness, and variety described above. If shortlisted, you’ll hear from our team by email to discuss the fit and schedule. This is not a contest or a random drawing. Selection does not promise a particular audience size, leads, or sales.</p></details>
            <details><summary>How we use your application</summary><p>Your details and story are sent privately to Media Bar for reviewing the application and coordinating this pilot. We don’t publish applications or automatically add applicants to a marketing list. Please leave confidential information out of your submission. For questions or to request removal, email <a href="mailto:contact@mediabarproductions.com">contact@mediabarproductions.com</a>.</p></details>
          </div>
        </section>

        <section className={styles.application} id="apply" aria-labelledby="apply-title">
          <div className={styles.applicationIntro}><p className={styles.eyebrow}>Your story starts here</p><h2 id="apply-title">Tell us what<br />we haven’t seen.</h2><p>What would you want people to know about your business that they might not see from the outside?</p><p>No pitch deck. No application video. Just tell us in your own words.</p><Link href="/work" className={styles.textLink}>Explore our work ↗</Link></div>
          {closed ? <div className={styles.success}><h3>Applications are currently closed.</h3><p>Thank you for your interest in the Business Spotlight pilot. Check back here for any future opportunities.</p></div> : <SpotlightForm preview={preview} />}
        </section>
      </main>
    </Layout>
  )
}
