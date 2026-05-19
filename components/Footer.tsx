import Link from 'next/link'

const colHeading: React.CSSProperties = {
  color: '#fff',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  marginBottom: '20px',
}

const footerLink: React.CSSProperties = {
  display: 'block',
  color: '#B0B0B0',
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '2',
  transition: 'color 0.15s',
}

export default function Footer() {
  return (
    <>
      <style>{`
        .mbp-footer-link:hover { color: #fff !important; }
        .mbp-social-link { color: rgba(255,255,255,0.4); border-color: rgba(255,255,255,0.1) !important; }
        .mbp-social-link:hover { color: #fff !important; border-color: rgba(255,255,255,0.4) !important; }
      `}</style>
      <footer style={{ background: '#0A0A0A', padding: '60px 48px 40px', color: '#888' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}>

          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <img src="/images/mediabar-logo.png" alt="Media Bar Productions" style={{ height: '36px', display: 'block' }} />
            </Link>
            <p style={{ fontSize: '14px', color: '#AAAAAA', marginBottom: '24px', fontStyle: 'italic' }}>
              Your Vision Served Daily
            </p>
            <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#B0B0B0' }}>
              San Antonio, TX<br />
              <a href="tel:2102799442" style={{ color: '#B0B0B0', textDecoration: 'none' }}>210-279-9442</a><br />
              <a href="mailto:contact@mediabarproductions.com" style={{ color: '#B0B0B0', textDecoration: 'none' }}>
                contact@mediabarproductions.com
              </a>
            </p>
          </div>

          {/* Services column */}
          <div>
            <p style={colHeading}>Services</p>
            <Link href="/video-production/corporate" className="mbp-footer-link" style={footerLink}>Corporate</Link>
            <Link href="/video-production/commercials" className="mbp-footer-link" style={footerLink}>Commercials</Link>
            <Link href="/video-production/events" className="mbp-footer-link" style={footerLink}>Events</Link>
            <Link href="/video-production/interview" className="mbp-footer-link" style={footerLink}>Interview</Link>
            <Link href="/video-production/medical" className="mbp-footer-link" style={footerLink}>Medical</Link>
            <Link href="/video-production/aerial" className="mbp-footer-link" style={footerLink}>Aerial</Link>
            <Link href="/video-production/motion-graphics" className="mbp-footer-link" style={footerLink}>Motion Graphics</Link>
            <Link href="/video-production/live-streaming" className="mbp-footer-link" style={footerLink}>Live Streaming</Link>
            <Link href="/video-production/post-production" className="mbp-footer-link" style={footerLink}>Post Production</Link>
            <Link href="/video-production/food" className="mbp-footer-link" style={footerLink}>Food Video</Link>
            <Link href="/video-production/real-estate" className="mbp-footer-link" style={footerLink}>Real Estate Video</Link>
          </div>

          {/* Company column */}
          <div>
            <p style={colHeading}>Company</p>
            <Link href="/about" className="mbp-footer-link" style={footerLink}>About</Link>
            <Link href="/about/awards" className="mbp-footer-link" style={footerLink}>Awards</Link>
            <Link href="/clients" className="mbp-footer-link" style={footerLink}>Clients</Link>
            <Link href="/studio" className="mbp-footer-link" style={footerLink}>Studio</Link>
            <Link href="/work" className="mbp-footer-link" style={footerLink}>Work</Link>
            <Link href="/faq" className="mbp-footer-link" style={footerLink}>FAQ</Link>
            <Link href="/blog" className="mbp-footer-link" style={footerLink}>Blog</Link>
          </div>

          {/* We Serve column */}
          <div>
            <p style={colHeading}>We Serve</p>
            <Link href="/locations/san-antonio" className="mbp-footer-link" style={footerLink}>San Antonio</Link>
            <Link href="/locations/austin" className="mbp-footer-link" style={footerLink}>Austin</Link>
            <Link href="/locations/dallas" className="mbp-footer-link" style={footerLink}>Dallas-Fort Worth</Link>
            <Link href="/locations/houston" className="mbp-footer-link" style={footerLink}>Houston</Link>
          </div>

        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
          {[
            { href: 'https://www.youtube.com/@MediaBarProductions', label: 'YouTube', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.1 2.8 12 2.8 12 2.8s-4.1 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.2.7 11.4v2.1C.7 15.7 1 18 1 18s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.6 22.2 12 22.2 12 22.2s4.1 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.4v-2.1C23.3 9.2 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg> },
            { href: 'https://www.linkedin.com/company/media-bar-productions-llc/', label: 'LinkedIn', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
            { href: 'https://www.instagram.com/mediabarsanantonio', label: 'Instagram', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
            { href: 'https://facebook.com/mediabarproductions', label: 'Facebook', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
            { href: 'https://x.com/mediabarsa', label: 'X', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { href: 'https://www.tiktok.com/@mediabarsa', label: 'TikTok', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/></svg> },
          ].map(({ href, label, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="mbp-social-link"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '8px', border: '0.5px solid', borderRadius: '2px', transition: 'color 0.15s, border-color 0.15s', textDecoration: 'none' }}>
              {icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #1a1a1a',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: '#B0B0B0', margin: 0 }}>
            © 2026 Media Bar Productions, LLC · The Creative Agenda LLC · All Rights Reserved
          </p>
          <p style={{ fontSize: '12px', color: '#C9A84C', margin: 0 }}>
            ⭐ 3 Emmy Awards · 15 Telly Awards
          </p>
        </div>
      </footer>
    </>
  )
}
