import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Our Work | San Antonio Video Production Portfolio',
  description: "Explore Media Bar Productions' video portfolio, including corporate films, commercials, event coverage, patient stories, and motion graphics.",
  path: '/work',
  ogImage: '/images/rbfcu-stills-grid.jpg',
})

// NOTE: the /work portfolio JSON-LD (BreadcrumbList + VideoObjectSchema) lives in
// app/work/page.tsx rather than here, so it applies only to the /work index and does
// not leak into nested routes such as /work/rbfcu-go-beyond-banking (which supplies its
// own complete schema graph).
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
