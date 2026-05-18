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
  color: '#888',
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
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '24px', fontStyle: 'italic' }}>
              Your Vision Served Daily
            </p>
            <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#666' }}>
              San Antonio, TX<br />
              <a href="tel:2102799442" style={{ color: '#666', textDecoration: 'none' }}>210-279-9442</a><br />
              <a href="mailto:info@mediabarproductions.com" style={{ color: '#666', textDecoration: 'none' }}>
                info@mediabarproductions.com
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
          <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>
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
