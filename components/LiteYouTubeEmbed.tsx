'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './LiteYouTubeEmbed.module.css'

type Props = {
  youtubeId: string
  title: string
  thumbnailPath: string
  className?: string
  priority?: boolean
}

export default function LiteYouTubeEmbed({
  youtubeId,
  title,
  thumbnailPath,
  className,
  priority = false,
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const frameClassName = className ? `${styles.frame} ${className}` : styles.frame

  if (isPlaying) {
    return (
      <div className={frameClassName}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&cc_load_policy=0&rel=0`}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={frameClassName}>
      <button
        type="button"
        className={styles.poster}
        onClick={() => setIsPlaying(true)}
        aria-label={`Play ${title}`}
      >
        <Image
          src={thumbnailPath}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 900px) 100vw, 86rem"
        />
        <span className={styles.scrim} aria-hidden="true" />
        <span className={styles.play} aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    </div>
  )
}
