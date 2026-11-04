import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Our Awards | 3 Lone Star Emmys & 15 Tellys | Media Bar Productions',
  description: 'Media Bar Productions has earned 3 Lone Star Emmy Awards and 15 Telly Awards, and contributed production to a 2025 Effie Awards finalist campaign. See the work behind the honors.',
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
