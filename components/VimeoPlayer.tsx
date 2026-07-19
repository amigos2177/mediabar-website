'use client'

import { useState } from 'react'
import { track } from '@vercel/analytics'

type VimeoPlayerProps = {
  videoId: string
  title: string
  thumbnailUrl?: string
  eager?: boolean
}

export default function VimeoPlayer({
  videoId,
  title,
  thumbnailUrl,
  eager = false,
}: VimeoPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const poster = thumbnailUrl || '/images/hero-aerial.jpg'

  return (
    <div className="mbp-vimeo-player">
      {playing ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&color=CC0000&badge=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      ) : (
        <button
          type="button"
          className="mbp-vimeo-poster"
          onClick={() => {
            track('Portfolio Video Played', { videoId, title })
            setPlaying(true)
          }}
          aria-label={`Play film: ${title}`}
        >
          {/* Vimeo CDN URLs are dynamic; the browser lazy-loads these lightweight poster images. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
          <span className="mbp-vimeo-scrim" aria-hidden="true" />
          <span className="mbp-vimeo-play" aria-hidden="true">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
              <path d="M21 12 1 23V1l20 11Z" fill="currentColor" />
            </svg>
          </span>
          <span className="mbp-vimeo-action">Play film</span>
        </button>
      )}

      <style jsx>{`
        .mbp-vimeo-player {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #050505;
        }

        iframe,
        .mbp-vimeo-poster,
        img,
        .mbp-vimeo-scrim {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        iframe {
          border: 0;
        }

        .mbp-vimeo-poster {
          appearance: none;
          border: 0;
          padding: 0;
          cursor: pointer;
          background: #111;
          color: #fff;
          text-align: left;
        }

        img {
          object-fit: cover;
          transition: transform 350ms ease;
        }

        .mbp-vimeo-scrim {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.46));
        }

        .mbp-vimeo-play {
          position: absolute;
          top: 50%;
          left: 50%;
          display: grid;
          width: 64px;
          height: 64px;
          place-items: center;
          border-radius: 50%;
          background: rgba(204, 0, 0, 0.96);
          transform: translate(-50%, -50%);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          transition: transform 180ms ease, background 180ms ease;
        }

        .mbp-vimeo-play svg {
          margin-left: 4px;
        }

        .mbp-vimeo-action {
          position: absolute;
          right: 16px;
          bottom: 14px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .mbp-vimeo-poster:hover img {
          transform: scale(1.025);
        }

        .mbp-vimeo-poster:hover .mbp-vimeo-play {
          background: #e00000;
          transform: translate(-50%, -50%) scale(1.06);
        }

        @media (prefers-reduced-motion: reduce) {
          img,
          .mbp-vimeo-play {
            transition: none;
          }
        }
      `}</style>
    </div>
  )
}
