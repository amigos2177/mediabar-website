'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { analyticsEvents } from '@/lib/analytics-events'
import { trackAnalyticsEvent } from '@/lib/client-analytics'

type VimeoPlayerProps = {
  title: string
  thumbnailUrl?: string
  eager?: boolean
  lightbox?: boolean
  embedImmediately?: boolean
} & ({ videoId: string; videoUrl?: never } | { videoUrl: string; videoId?: never })

function readVimeoLink(link: string) {
  let url: URL
  try {
    url = new URL(link)
  } catch {
    return null
  }
  if (url.protocol !== 'https:') return null

  if (url.hostname === 'player.vimeo.com') {
    const match = url.pathname.match(/^\/video\/(\d+)\/?$/)
    return match && { id: match[1], hash: url.searchParams.get('h') }
  }

  if (url.hostname !== 'vimeo.com' && url.hostname !== 'www.vimeo.com') return null
  const match = url.pathname.match(/^\/(\d+)(?:\/([a-zA-Z0-9]+))?\/?$/)
  return match && { id: match[1], hash: match[2] || url.searchParams.get('h') }
}

export default function VimeoPlayer({
  videoId,
  videoUrl,
  title,
  thumbnailUrl,
  eager = false,
  embedImmediately = false,
  lightbox = false,
}: VimeoPlayerProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [playing, setPlaying] = useState(false)
  const poster = thumbnailUrl || '/images/hero-aerial.jpg'
  const showPlayer = embedImmediately || playing
  const autoplay = playing && !embedImmediately
  const source = videoUrl !== undefined ? readVimeoLink(videoUrl) : { id: videoId, hash: null }
  if (!source) return <p>Film unavailable.</p>
  const privacy = source.hash ? `h=${encodeURIComponent(source.hash)}&` : ''
  const isLocalPoster = poster.startsWith('/')

  const player = (
    <iframe
      src={`https://player.vimeo.com/video/${source.id}?${privacy}autoplay=${autoplay ? 1 : 0}&title=0&byline=0&portrait=0&color=CC0000&badge=0`}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      loading={embedImmediately ? 'eager' : 'lazy'}
      title={title}
    />
  )

  return (
    <div className="mbp-vimeo-player">
      {showPlayer && !lightbox ? (
        player
      ) : (
        <button
          type="button"
          className="mbp-vimeo-poster"
          onClick={() => {
            trackAnalyticsEvent(analyticsEvents.portfolioVideoPlayed, { videoId: source.id, title })
            if (lightbox) dialog.current?.showModal()
            setPlaying(true)
          }}
          aria-haspopup={lightbox ? 'dialog' : undefined}
          aria-label={`Play film: ${title}`}
        >
          {isLocalPoster ? (
            <Image
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 768px) calc(100vw - 56px), (max-width: 1200px) 50vw, 580px"
              loading={eager ? 'eager' : 'lazy'}
            />
          ) : (
            <>
              {/* Vimeo CDN URLs are dynamic; keep them browser-loaded until the paused CDN follow-up resumes. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={poster}
                alt={title}
                loading={eager ? 'eager' : 'lazy'}
                decoding="async"
              />
            </>
          )}
          <span className="mbp-vimeo-scrim" aria-hidden="true" />
          <span className="mbp-vimeo-play" aria-hidden="true">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
              <path d="M21 12 1 23V1l20 11Z" fill="currentColor" />
            </svg>
          </span>
          <span className="mbp-vimeo-action">Play film</span>
        </button>
      )}

      {lightbox && (
        <dialog
          ref={dialog}
          className="film-dialog"
          data-home-film-dialog=""
          aria-label={title}
          onClose={() => setPlaying(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialog.current?.close()
          }}
        >
          <div className="film-toolbar">
            <span>{title}</span>
            <button type="button" onClick={() => dialog.current?.close()}>Close <span aria-hidden="true">×</span></button>
          </div>
          <div className="film-screen">{playing && player}</div>
        </dialog>
      )}

      <style jsx>{`
        .film-dialog {
          position: fixed;
          inset: 0;
          margin: auto;
          width: min(1200px, calc(100vw - 24px), calc(177.78dvh - 145px));
          max-width: none;
          max-height: calc(100dvh - 16px);
          padding: 0;
          border: 1px solid #444;
          background: #111;
          color: white;
        }
        .film-dialog::backdrop { background: rgb(0 0 0 / 88%); }
        :global(html:has([data-home-film-dialog][open])) { overflow: hidden; }
        .film-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 4px 12px 4px 16px;
          font-size: 15px;
          line-height: 1.25;
        }
        .film-toolbar button {
          min-height: 44px;
          padding: 0 10px;
          color: white;
          background: transparent;
          border: 0;
          font: inherit;
          white-space: nowrap;
          cursor: pointer;
        }
        .film-toolbar button:focus-visible { outline: 2px solid white; outline-offset: -3px; }
        .film-screen { position: relative; aspect-ratio: 16 / 9; background: black; }

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
