import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Contact Media Bar Productions | San Antonio Video Production',
  description: 'Contact Media Bar Productions in San Antonio, ask a quick question, find the studio, or build a guided brief for your next video production.',
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
