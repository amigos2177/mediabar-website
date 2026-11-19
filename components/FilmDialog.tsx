'use client'

import type { CSSProperties, ReactNode, RefObject } from 'react'

type Props = {
  dialog: RefObject<HTMLDialogElement | null>
  title: string
  aspectRatio?: string
  onClose: () => void
  children: ReactNode
}

export default function FilmDialog({ dialog, title, aspectRatio = '16 / 9', onClose, children }: Props) {
  const [width, height] = aspectRatio.split('/').map(Number)
  const ratio = width > 0 && height > 0 ? width / height : 16 / 9
  return (
    <>
      <dialog
        ref={dialog}
        className="film-dialog"
        style={{ "--film-ratio": ratio } as CSSProperties}
        data-film-dialog=""
        aria-label={title}
        onClose={onClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
      >
        <div className="film-toolbar">
          <span>{title}</span>
          <button type="button" onClick={() => dialog.current?.close()}>Close <span aria-hidden="true">×</span></button>
        </div>
        <div className="film-screen">{children}</div>
      </dialog>
      <style jsx>{`
        .film-dialog {
          position: fixed;
          inset: 0;
          margin: auto;
          width: min(1200px, calc(100vw - 24px), calc((100dvh - 82px) * var(--film-ratio)));
          max-width: none;
          max-height: calc(100dvh - 16px);
          padding: 0;
          border: 1px solid #444;
          background: #111;
          color: white;
        }
        .film-dialog::backdrop { background: rgb(0 0 0 / 88%); }
        :global(html:has([data-film-dialog][open])) { overflow: hidden; }
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
        .film-screen { position: relative; aspect-ratio: var(--film-ratio); background: black; }

        .film-screen :global(iframe) { display: block; width: 100%; height: 100%; border: 0; }
      `}</style>
    </>
  )
}
