'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './RbfcuCommercialGallery.module.css'

const spots = [
  { vid: 'cQHqvEHFx2M', label: 'Spot 01 · Anthem', title: 'We Go Beyond Banking' },
  { vid: 'M44en_QEBlQ', label: 'Spot 02 · Auto lending', title: 'The Miles That Matter' },
  { vid: 'AT59Z4LIu8Y', label: 'Spot 03 · Membership', title: 'Generations of Trust' },
  { vid: 'hpHKrVXhWnY', label: 'Spot 04 · Cards and rewards', title: 'Experience More' },
  { vid: 'CuJdvSJ9bAE', label: 'Spot 05 · Life milestones', title: 'Forever Memories' },
]

type Props = {
  compact?: boolean
}

export default function RbfcuCommercialGallery({ compact = false }: Props) {
  const [playing, setPlaying] = useState<string | null>(null)
  const visibleSpots = compact ? spots.slice(0, 3) : spots

  return (
    <section className={styles.section} aria-labelledby={compact ? 'rbfcu-work-services' : 'rbfcu-work-commercials'}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Watch the work · RBFCU broadcast campaign</p>
            <h2 className={styles.title} id={compact ? 'rbfcu-work-services' : 'rbfcu-work-commercials'}>
              Real Commercials. <em>Ready to Watch.</em>
            </h2>
          </div>
          <p className={styles.intro}>
            Five finished spots carried one clear campaign idea across four Texas markets. Watch the
            commercials here, then open the case study for the production story and results.
          </p>
        </div>

        <div className={styles.grid}>
          {visibleSpots.map((spot) => (
            <article className={styles.card} key={spot.vid}>
              <div
                className={styles.media}
                role="button"
                tabIndex={0}
                aria-label={`Play ${spot.title}`}
                onClick={() => setPlaying(spot.vid)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setPlaying(spot.vid)
                  }
                }}
              >
                {playing === spot.vid ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${spot.vid}?autoplay=1&rel=0`}
                    title={`${spot.title}, RBFCU commercial by Media Bar Productions`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <Image
                      className={styles.thumb}
                      src={`https://i.ytimg.com/vi/${spot.vid}/hqdefault.jpg`}
                      alt={`${spot.title}, RBFCU commercial by Media Bar Productions`}
                      fill
                      unoptimized
                      sizes={compact ? '(max-width: 620px) 100vw, 33vw' : '(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw'}
                    />
                    <span className={styles.play} aria-hidden="true" />
                  </>
                )}
              </div>
              <div className={styles.meta}>
                <span className={styles.number}>{spot.label}</span>
                <h3>{spot.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <Link className={styles.primary} href="/work/rbfcu-go-beyond-banking#work">
            {compact ? 'Watch all five commercials' : 'Explore the complete campaign'}
          </Link>
          <Link className={styles.secondary} href="/work/rbfcu-go-beyond-banking">
            Read the RBFCU case study <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
