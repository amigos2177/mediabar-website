'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SERVICE_LINKS = [
  { href: '/video-production/corporate', label: 'Corporate Video' },
  { href: '/video-production/commercials', label: 'Commercials' },
  { href: '/video-production/events', label: 'Event Coverage' },
  { href: '/video-production/interview', label: 'Interview & Discussion' },
  { href: '/video-production/medical', label: 'Medical Video' },
  { href: '/video-production/aerial', label: 'Aerial Video' },
  { href: '/video-production/motion-graphics', label: 'Motion Graphics' },
  { href: '/video-production/live-streaming', label: 'Live Streaming' },
  { href: '/video-production/post-production', label: 'Post Production' },
  { href: '/video-production/food', label: 'Food Video' },
  { href: '/video-production/real-estate', label: 'Real Estate Video' },
]

const TOP_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Our Work' },
  { href: '/photography', label: 'Photography' },
  { href: '/studio', label: 'Studio' },
  { href: '/about', label: 'About' },
  { href: '/about/awards', label: 'Awards' },
  { href: '/blog', label: 'Blog' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
  {
    href: 'https://chatgpt.com/g/g-6a5eca9bc22081919d134d3a2d686ba3-texas-video-production-advisor',
    label: 'Texas Video Advisor',
    external: true,
  },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    const menuButton = menuButtonRef.current
    const overlay = overlayRef.current
    const focusable = overlay?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    overlay?.querySelector<HTMLElement>('[aria-label="Close menu"]')?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        close()
        return
      }

      if (event.key !== 'Tab' || !focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
      menuButton?.focus()
    }
  }, [close, open])

  useEffect(() => {
    const button = document.querySelector<HTMLAnchorElement>('.mbp-contact-btn')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!button || prefersReducedMotion.matches) return
    const contactButton = button

    let animationFrame = 0

    function updateContactGlow(event: PointerEvent) {
      if (event.pointerType === 'touch') return

      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const rect = contactButton.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const nearestX = Math.max(0, Math.min(x, rect.width))
        const nearestY = Math.max(0, Math.min(y, rect.height))
        const distance = Math.hypot(x - nearestX, y - nearestY)
        const proximity = Math.max(0, 1 - distance / 160)

        contactButton.style.setProperty('--contact-glow-x', `${x}px`)
        contactButton.style.setProperty('--contact-glow-y', `${y}px`)
        contactButton.style.setProperty('--contact-glow-opacity', proximity.toFixed(3))
      })
    }

    window.addEventListener('pointermove', updateContactGlow, { passive: true })
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', updateContactGlow)
    }
  }, [])

  return (
    <>
      <style>{`
        .mbp-nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.15s;
        }
        .mbp-nav-link:hover { color: #CC0000; }
        .mbp-quote-btn:hover { background: #aa0000 !important; }
        .mbp-contact-btn {
          --contact-glow-x: 50%;
          --contact-glow-y: 50%;
          --contact-glow-opacity: 0;
          position: relative;
          isolation: isolate;
          border: 1px solid rgba(255, 255, 255, 0.45);
          color: #fff;
          text-decoration: none;
          padding: 10px 18px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          white-space: nowrap;
          transition: border-color 0.2s, background 0.2s;
        }
        .mbp-contact-btn::before {
          content: '';
          position: absolute;
          inset: -1px;
          z-index: 1;
          padding: 1px;
          pointer-events: none;
          background: radial-gradient(
            80px circle at var(--contact-glow-x) var(--contact-glow-y),
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.72) 34%,
            rgba(255, 255, 255, 0) 72%
          );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: var(--contact-glow-opacity);
          transition: opacity 0.18s ease-out;
        }
        .mbp-contact-btn:hover {
          border-color: rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.05);
        }
        .mbp-contact-btn:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 4px;
        }
        @media (prefers-reduced-motion: reduce) {
          .mbp-contact-btn::before { display: none; }
          .mbp-contact-btn:hover,
          .mbp-contact-btn:focus-visible { border-color: #fff; }
        }

        /* Hamburger button */
        .mbp-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
        }
        .mbp-burger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 1px;
          transition: transform 0.2s, opacity 0.2s;
        }

        /* Overlay */
        .mbp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,10,10,0.98);
          z-index: 200;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mbp-overlay-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          height: 72px;
          border-bottom: 1px solid #1a1a1a;
          flex-shrink: 0;
        }
        .mbp-overlay-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: none;
          border: none;
          cursor: pointer;
          color: #fff;
          padding: 0;
        }
        .mbp-overlay-body {
          padding: 32px 24px 48px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .mbp-overlay-section-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #C9A84C;
          padding: 24px 0 8px;
          border-top: 1px solid #1a1a1a;
          margin-top: 8px;
        }
        .mbp-overlay-section-label:first-child { margin-top: 0; border-top: none; padding-top: 0; }
        .mbp-overlay-link {
          display: block;
          color: #fff;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.03em;
          min-height: 44px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #111;
          transition: color 0.15s, padding-left 0.15s;
        }
        .mbp-overlay-link:hover { color: #CC0000; padding-left: 4px; }
        .mbp-overlay-service-link {
          display: flex;
          align-items: center;
          color: #ccc;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.02em;
          min-height: 44px;
          border-bottom: 1px solid #111;
          transition: color 0.15s;
          padding-left: 12px;
        }
        .mbp-overlay-service-link:hover { color: #fff; }
        .mbp-overlay-cta {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid #1a1a1a;
        }
        .mbp-overlay-cta-btn {
          display: block;
          background: #CC0000;
          color: #fff;
          text-decoration: none;
          text-align: center;
          padding: 16px 24px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          min-height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mbp-overlay-contact-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.45);
        }
        .mbp-overlay-contact-btn:hover {
          border-color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }
        .mbp-overlay-phone {
          display: block;
          text-align: center;
          color: #fff;
          text-decoration: none;
          font-family: 'Bebas Neue', cursive;
          font-size: 32px;
          letter-spacing: 0.06em;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1320px) and (min-width: 961px) {
          .mbp-nav { padding: 0 28px !important; }
          .mbp-desktop-links { gap: 22px !important; }
          .mbp-nav-link { font-size: 12px; }
          .mbp-desktop-right { gap: 14px !important; }
          .mbp-header-phone { display: none; }
          .mbp-contact-btn { padding: 10px 14px; }
          .mbp-quote-btn { padding: 10px 16px !important; }
        }
        @media (max-width: 960px) {
          .mbp-desktop-links { display: none !important; }
          .mbp-desktop-right { display: none !important; }
          .mbp-burger { display: flex !important; }
        }
        @media (max-width: 480px) {
          nav { padding: 0 20px !important; }
        }
      `}</style>

      <nav className="mbp-nav" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '72px',
        background: 'rgba(10,10,10,0.97)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image src="/images/mediabar-logo.png" alt="Media Bar Productions" width={1113} height={325} sizes="180px" loading="eager" style={{ width: 'auto', height: '48px', maxWidth: '180px', display: 'block' }} />
        </Link>

        {/* Desktop center links */}
        <div className="mbp-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          <Link href="/video-production" className="mbp-nav-link">Services</Link>
          <Link href="/work" className="mbp-nav-link">Our Work</Link>
          <Link href="/photography" className="mbp-nav-link">Photography</Link>
          <Link href="/about" className="mbp-nav-link">About</Link>
          <Link href="/studio" className="mbp-nav-link">Studio</Link>
          <Link href="/blog" className="mbp-nav-link">Blog</Link>
        </div>

        {/* Desktop right: phone + contact paths */}
        <div className="mbp-desktop-right" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
          <a className="mbp-header-phone" href="tel:2102799442" style={{ color: '#fff', textDecoration: 'none', fontFamily: "'Bebas Neue', cursive", fontSize: '22px', letterSpacing: '0.06em' }}>
            210-279-9442
          </a>
          <Link href="/contact#contact-form" className="mbp-contact-btn">
            Talk With Our Team
          </Link>
          <Link href="/project-planner" className="mbp-quote-btn" style={{ background: '#CC0000', color: '#fff', textDecoration: 'none', padding: '10px 22px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Start a Project
          </Link>
        </div>

        {/* Hamburger - mobile only */}
        <button
          ref={menuButtonRef}
          className="mbp-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="mbp-burger-line" />
          <span className="mbp-burger-line" />
          <span className="mbp-burger-line" />
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          ref={overlayRef}
          id="mobile-navigation"
          className="mbp-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-navigation-title"
        >
          {/* Tap outside to close - sits behind content */}
          <div
            style={{ position: 'fixed', inset: 0, zIndex: -1 }}
            onClick={close}
            aria-hidden="true"
          />

          <div className="mbp-overlay-header">
            <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/images/mediabar-logo.png" alt="Media Bar Productions" width={1113} height={325} sizes="138px" style={{ width: 'auto', height: '40px', display: 'block' }} />
            </Link>
            <button className="mbp-overlay-close" aria-label="Close menu" onClick={close}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="mbp-overlay-body">
            {/* Top-level pages */}
            <p id="mobile-navigation-title" className="mbp-overlay-section-label">Menu</p>
            {TOP_LINKS.map((l) => l.external ? (
              <a
                key={l.href}
                href={l.href}
                className="mbp-overlay-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                {l.label} <span aria-hidden="true" style={{ color: '#C9A84C', marginLeft: '8px' }}>↗</span>
              </a>
            ) : (
              <Link key={l.href} href={l.href} className="mbp-overlay-link" onClick={close}>
                {l.label}
              </Link>
            ))}

            {/* Services expanded */}
            <p className="mbp-overlay-section-label">Services</p>
            {SERVICE_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="mbp-overlay-service-link" onClick={close}>
                {l.label}
              </Link>
            ))}

            {/* CTA */}
            <div className="mbp-overlay-cta">
              <Link
                href="/contact#contact-form"
                className="mbp-overlay-cta-btn mbp-overlay-contact-btn"
                onClick={close}
              >
                Talk With Our Team
              </Link>
              <Link href="/project-planner" className="mbp-overlay-cta-btn" onClick={close}>
                Start a Project
              </Link>
              <a href="tel:2102799442" className="mbp-overlay-phone">
                210-279-9442
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
