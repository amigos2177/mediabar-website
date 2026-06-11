import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Contact Media Bar Productions | San Antonio Video',
  description: 'Get in touch with Media Bar Productions in San Antonio. Call 210-279-9442 or request a quote for your corporate, commercial, or event video project.',
  path: '/contact',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]} />
      {children}
    </>
  )
}
