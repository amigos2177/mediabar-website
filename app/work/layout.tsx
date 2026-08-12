import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Our Work | San Antonio Video Production Portfolio',
  description: "Explore Media Bar Productions' video portfolio, including corporate films, commercials, event coverage, patient stories, and motion graphics.",
  path: '/work',
  ogImage: '/images/rbfcu-stills-grid.jpg',
})

// NOTE: Breadcrumb JSON-LD for the /work index lives in app/work/page.tsx so it does
// not leak into nested routes such as /work/rbfcu-go-beyond-banking. VideoObject markup
// belongs only on dedicated watch pages under /work/watch/[slug], not on this listing.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
