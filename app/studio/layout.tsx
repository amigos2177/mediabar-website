import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Production Studio San Antonio',
  description: "A full production studio in San Antonio for filming, interviews, and creative shoots. Tour Media Bar Productions' purpose-built studio space.",
  path: '/studio',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Studio', url: '/studio' },
      ]} />
      {children}
    </>
  )
}
