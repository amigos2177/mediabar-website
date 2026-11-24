import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Awards: 3 Lone Star Emmys & 15 Tellys | Media Bar',
  description: 'Media Bar Productions has earned 3 Lone Star Emmy Awards, 15 Telly Awards, and contributed production to a 2025 Effie Awards finalist campaign in Texas.',
  path: '/about/awards',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Awards', url: '/about/awards' },
      ]} />
      {children}
    </>
  )
}
