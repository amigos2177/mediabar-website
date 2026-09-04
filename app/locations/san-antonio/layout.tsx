import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { sanAntonioFaqs } from './content'

export const metadata = buildMetadata({
  title: 'San Antonio Video Production Company | Media Bar',
  description:
    'Media Bar is a San Antonio video production company for corporate films, commercials, interviews, events, studio shoots, and full-service production.',
  path: '/locations/san-antonio',
  ogImage: '/images/clients-bts-4.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'San Antonio', url: '/locations/san-antonio' },
      ]} />
      <ServiceJsonLd
        name="San Antonio Video Production Company"
        description="Full-service video production in San Antonio for corporate films, commercials, interviews, events, studio shoots, location production, and post-production."
        url="/locations/san-antonio"
        image="https://www.mediabarproductions.com/images/clients-bts-4.jpg"
      />
      <FAQPageJsonLd faqs={sanAntonioFaqs} />
      {children}
    </>
  )
}
