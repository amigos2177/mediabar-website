import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Video Production Dallas-Fort Worth | Media Bar Productions',
  description: 'Corporate and commercial video production for Dallas-Fort Worth brands. Media Bar Productions delivers award-winning work throughout the DFW metroplex.',
  path: '/locations/dallas',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Dallas-Fort Worth', url: '/locations/dallas' },
      ]} />
      {children}
    </>
  )
}
