import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import styles from './page.module.css'

const path = '/work/ae-forged-by-war-host-production'
const imageRoot = '/images/work/ae-forged-by-war'
export const metadata: Metadata = {
  title: 'A&E Host-Introduction Filming | Media Bar Productions',
  description: 'Behind the scenes of Media Bar Productions’ host-introduction filming for A&E’s Forged by War: The Navy SEALs, a HISTORY documentary special.',
  alternates: { canonical: path },
  openGraph: { title: 'Forged by War: The Navy SEALs — Behind the Introduction', description: 'A five-person Media Bar crew. A host-introduction shoot for A&E. Go behind the scenes.', url: path, images: [{ url: `${imageRoot}/host-filming-wide.webp`, width: 2200, height: 1238, alt: 'Media Bar crew filming the host introduction for A&E' }] },
}
const gallery = [
  { heading: '01 / Setting the stage', file: 'studio-wide', alt: 'Wide view of the white studio backdrop, lighting and equipment tables', title: 'A studio ready to take shape.', caption: 'The production space before host filming.', wide: true },
  { file: 'studio-lighting', alt: 'Crew member adjusting overhead studio lighting above the white backdrop', title: 'Building the light.', caption: 'Lighting preparation above the set.', wide: false },
  { file: 'teleprompter-assembly', alt: 'Crew assembling the teleprompter in front of the production camera', title: 'Preparing the prompter.', caption: 'The crew fits the teleprompter around the camera.', wide: false },
  { file: 'crew-on-set', alt: 'Production crew preparing cameras and equipment in the studio', title: 'Every part comes together.', caption: 'Crew and equipment preparation on the production floor.', wide: true },
  { heading: '02 / Filming the introduction', file: 'crew-preparation', alt: 'Crew member preparing cable beside the studio lighting scaffold', title: 'On set. Ready to roll.', caption: 'A wider view of the host, camera positions and working crew.', wide: true },
  { file: 'host-and-teleprompter', alt: 'Host on the white studio set with a camera and teleprompter in the foreground', title: 'The introduction in view.', caption: 'The documentary title appears on the teleprompter as the host stands on set.', wide: false },
  { file: 'boom-operation', alt: 'Crew member holding a boom pole above the host on the studio set', title: 'Just outside the frame.', caption: 'Boom operation during the host shoot.', wide: false },
  { heading: '03 / Behind the cameras', file: 'production-monitoring', alt: 'Production monitoring station with multi-view display, control panel and laptop', title: 'A view of the production.', caption: 'The monitoring station supporting the shoot.', wide: true },
  { file: 'camera-preparation', alt: 'Production camera in the foreground with crew and studio equipment beyond', title: 'The tools behind the picture.', caption: 'Camera equipment on the studio floor.', wide: true },
]
export default function AeProjectPage() {
  return <Layout>
    <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Our Work', url: '/work' }, { name: 'A&E host-introduction production', url: path }]} />
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroImage}><Image src={`${imageRoot}/host-filming-wide.webp`} alt="Host on set with the Media Bar camera crew filming the A&E introduction" fill preload sizes="100vw" /></div>
        <div className={styles.heroCopy}>
          <Link className={styles.back} href="/work">← Our work</Link>
          <p className={styles.kicker}>A&E / Behind the scenes</p>
          <h1>Forged by War:<br /><span>The Navy SEALs</span></h1>
          <p className={styles.subtitle}>Behind the host introduction.</p>
          
        </div>
        
      </header>
      <div className={styles.wrap}>
        <section id="our-role" className={styles.overview} aria-labelledby="role-title">
          <div><h2 id="role-title">Our role</h2></div>
          <div className={styles.body}><p>A&E hired Media Bar Productions to film the host introduction for <cite>Forged by War: The Navy SEALs</cite>, a HISTORY documentary special.</p><p>Our five-person crew included two videographers, a producer, a teleprompter operator, and a digital imaging technician (DIT). Following filming, we handed the footage to A&E’s team.</p></div>
        </section>
        <aside className={styles.credit} aria-label="On-screen production credit"><span>On-screen credit</span><p>Studio/Host Wrap<br /><strong>Media Bar Productions, LLC</strong></p></aside>
        <section className={styles.gallery} aria-labelledby="gallery-title">
          <div className={styles.galleryHeading}><h2 id="gallery-title">Behind the scenes</h2></div>
          {gallery.map((photo) => <figure key={photo.file} className={photo.wide ? styles.wide : styles.figure}>
            <div className={styles.galleryImage}><Image src={`${imageRoot}/${photo.file}.webp`} alt={photo.alt} width={2200} height={1238} sizes={photo.wide ? '(max-width: 1200px) 100vw, 1200px' : '(max-width: 760px) 100vw, 50vw'} /></div>

          </figure>)}
        </section>
        <section className={styles.watch} aria-labelledby="watch-title">
          <div><h2 id="watch-title">Watch the documentary</h2><p>Find the finished special through these official listings.</p></div>
          <div className={styles.watchLinks}><a href="https://www.primevideo.com/detail/0IXC0OJP0PQRD2ILOQOF5GAO1C" target="_blank" rel="noopener noreferrer">Watch on Prime Video <span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens in a new tab)</span></a><a href="https://www.history.com/specials/forged-by-war-the-navy-seals" target="_blank" rel="noopener noreferrer">View on HISTORY <span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens in a new tab)</span></a><p>Rental, purchase, or a TV-provider sign-in may be required. Availability varies.</p></div>
        </section>

      </div>
    </main>
  </Layout>
}
