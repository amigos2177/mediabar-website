import Link from 'next/link'

// Internal-link components pointing to the RBFCU "Go Beyond Banking" case study.
// Shared styles live in app/globals.css under the .mbcs- namespace.
const HREF = '/work/rbfcu-go-beyond-banking'

// Component 1 - placed on /work inside the "TV Commercials" section.
export function RbfcuWorkCard() {
  return (
    <Link className="mbcs-workcard" href={HREF}>
      <div className="mbcs-thumb"><div className="mbcs-play" /></div>
      <div className="mbcs-body">
        <div className="mbcs-eyebrow">Featured Case Study</div>
        <h3>RBFCU · Go Beyond Banking</h3>
        <div className="mbcs-meta">A five-spot broadcast campaign across four Texas markets. 5M+ views.</div>
        <div className="mbcs-link">View Case Study &rsaquo;</div>
      </div>
    </Link>
  )
}

// Component 2 - placed on /video-production/commercials as the Featured Case Study.
// Uses the campfire behind-the-scenes photo as its background.
export function RbfcuFeatureCard() {
  return (
    <Link className="mbcs-feature" href={HREF}>
      <div className="mbcs-strip" aria-hidden="true" style={{ opacity: 0.32 }}>
        <i style={{ backgroundImage: "url('/images/rbfcu-bts-campfire.jpg')" }} />
      </div>
      <div className="mbcs-scrim" />
      <div className="mbcs-inner">
        <div className="mbcs-eyebrow">Featured Case Study</div>
        <h3>RBFCU &ldquo;Go Beyond Banking&rdquo;</h3>
        <div className="mbcs-sub">A statewide broadcast campaign, told five ways.</div>
        <div className="mbcs-pills">
          <span className="mbcs-pill"><span className="mbcs-dot" />5 Broadcast Spots</span>
          <span className="mbcs-pill"><span className="mbcs-dot" />4 Texas Markets</span>
          <span className="mbcs-pill"><span className="mbcs-dot" />5M+ Views</span>
        </div>
        <span className="mbcs-btn">View the Case Study</span>
      </div>
    </Link>
  )
}

// Component 3 - placed on each /locations/* page. Pass the market name.
export function RbfcuLocationNote({ city }: { city: string }) {
  return (
    <Link className="mbcs-locnote" href={HREF}>
      <span className="mbcs-k">Featured {city} Work</span>
      We produced and edited{' '}
      <strong>RBFCU&apos;s &ldquo;Go Beyond Banking&rdquo; broadcast campaign</strong>, which aired
      across {city} and three other major Texas markets and has earned more than five million views.{' '}
      <span className="mbcs-link">Read the case study &rsaquo;</span>
    </Link>
  )
}
