import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Contact a San Antonio Video Production Company',
  description: 'Contact Media Bar Productions in San Antonio to discuss a video project, check availability, build a guided brief, or find our production studio.',
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
