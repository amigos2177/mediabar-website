import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
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
      `}</style>
      <nav style={{
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
          <img src="/images/mediabar-logo.png" alt="Media Bar Productions" style={{ height: '48px', display: 'block' }} />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          <Link href="/video-production" className="mbp-nav-link">Services</Link>
          <Link href="/work" className="mbp-nav-link">Our Work</Link>
          <Link href="/about" className="mbp-nav-link">About</Link>
          <Link href="/studio" className="mbp-nav-link">Studio</Link>
          <Link href="/blog" className="mbp-nav-link">Blog</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
          <a
            href="tel:2102799442"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontFamily: "'Bebas Neue', cursive",
              fontSize: '22px',
              letterSpacing: '0.06em',
            }}
          >
            210-279-9442
          </a>
          <Link
            href="/contact"
            className="mbp-quote-btn"
            style={{
              background: '#CC0000',
              color: '#fff',
              textDecoration: 'none',
              padding: '10px 22px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </>
  )
}
