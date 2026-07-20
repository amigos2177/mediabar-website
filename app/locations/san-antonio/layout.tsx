import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { sanAntonioFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Video Production Company in San Antonio, TX',
  description:
    'Work with a San Antonio video production company offering local crew, studio support, filming, and post-production for organizations across South Texas.',
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
        name="Video Production Company in San Antonio, Texas"
        description="Full-service corporate, commercial, event, healthcare, studio, and post-production video services from a San Antonio production company."
        url="/locations/san-antonio"
        image="https://www.mediabarproductions.com/images/clients-bts-4.jpg"
      />
      <FAQPageJsonLd faqs={sanAntonioFaqs} />
      {children}
    </>
  )
}
