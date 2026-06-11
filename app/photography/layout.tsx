import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Photography Services San Antonio',
  description: 'Professional photography in San Antonio for brands, events, and architecture. Media Bar Productions delivers polished commercial imagery across Texas.',
  path: '/photography',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Photography', url: '/photography' },
      ]} />
      {children}
    </>
  )
}
