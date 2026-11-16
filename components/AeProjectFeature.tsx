import Image from 'next/image'
import Link from 'next/link'
import styles from './AeProjectFeature.module.css'

export default function AeProjectFeature() {
  return <section className={styles.feature} aria-labelledby="ae-feature-title">
    <div className={styles.image}><Image src="/images/work/ae-forged-by-war/host-filming-wide.webp" alt="Host on the A&E set with Media Bar camera crew" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
    <div className={styles.copy}>
      <p className={styles.kicker}>A&E / Host-introduction production</p>
      <h2 id="ae-feature-title">Behind the introduction.<br /><em>Behind the cameras.</em></h2>
      <p>Our crew filmed the host introduction for <cite>Forged by War: The Navy SEALs</cite>, a HISTORY documentary special. Step onto the set and see our contribution.</p>
      <Link href="/work/ae-forged-by-war-host-production">Explore the production <span aria-hidden="true">↗</span></Link>
    </div>
  </section>
}
