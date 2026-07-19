import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Clients | Media Bar Productions',
  description: 'See organizations and industries that trust Media Bar Productions for corporate, commercial, event, medical, and campaign video across Texas.',
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
