import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Video Production San Antonio TX | Media Bar Productions',
  description: 'San Antonio video production in our home market — corporate, commercial, and event work for military, healthcare, tourism, and financial clients.',
  path: '/locations/san-antonio',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'San Antonio', url: '/locations/san-antonio' },
      ]} />
      {children}
    </>
  )
}
