import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Our Clients | San Antonio Video Production',
  description: "Media Bar Productions has produced video for the Spurs, H-E-B, USAA, Frost Bank, and more. See the San Antonio and Texas brands we've worked with.",
  path: '/clients',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Clients', url: '/clients' },
      ]} />
      {children}
    </>
  )
}
