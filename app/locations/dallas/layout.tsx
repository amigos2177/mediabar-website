import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { dallasFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Video Production Dallas-Fort Worth | Media Bar Productions',
  description: 'Award-winning Dallas-Fort Worth video production for corporate films, commercials, events, live streams, and multi-market campaigns.',
  path: '/locations/dallas',
  ogImage: '/images/clients-bts-9.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Dallas-Fort Worth', url: '/locations/dallas' },
      ]} />
      <ServiceJsonLd
        name="Video Production Services in Dallas-Fort Worth"
        description="Full-service corporate, commercial, event, live-streaming, and post-production video services for Dallas-Fort Worth organizations."
        url="/locations/dallas"
        image="https://www.mediabarproductions.com/images/clients-bts-9.jpg"
      />
      <FAQPageJsonLd faqs={dallasFaqs} />
      {children}
    </>
  )
}
