'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const HERO_VIDEO_URL =
  'https://player.vimeo.com/video/1077104073?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&controls=0'

export default function HomeHeroMedia() {
  const [videoEnabled, setVideoEnabled] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileViewport = window.matchMedia('(max-width: 768px)')
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean }
    }).connection
    let videoDelay = 0

    const updateVideoPreference = () => {
      window.clearTimeout(videoDelay)
      const shouldLoad = (
        !motionPreference.matches
        && !mobileViewport.matches
        && !connection?.saveData
      )

      if (!shouldLoad) {
        setVideoEnabled(false)
        setVideoReady(false)
        return
      }

      videoDelay = window.setTimeout(() => setVideoEnabled(true), 1800)
    }

    updateVideoPreference()
    motionPreference.addEventListener('change', updateVideoPreference)
    mobileViewport.addEventListener('change', updateVideoPreference)

    return () => {
      window.clearTimeout(videoDelay)
      motionPreference.removeEventListener('change', updateVideoPreference)
      mobileViewport.removeEventListener('change', updateVideoPreference)
    }
  }, [])

  return (
    <div className="hero-video-wrap">
      <Image
        className="hero-poster"
        src="/images/hero-aerial.jpg"
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        quality={68}
      />
      {videoEnabled ? (
        <iframe
          className={videoReady ? 'ready' : undefined}
          src={HERO_VIDEO_URL}
          allow="autoplay; fullscreen"
          title="Media Bar Productions showreel background"
          onLoad={() => setVideoReady(true)}
        />
      ) : null}
    </div>
  )
}
