import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { sanAntonioFaqs } from './content'

export const metadata = buildMetadata({
  title: 'San Antonio Video Production Company | Crew & Studio | Media Bar',
  description:
    'Explore Media Bar’s San Antonio video crew, production studio, location support, and local filming resources for projects across South Texas.',
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
        name="San Antonio Video Crew and Studio Support"
        description="Local video crew, production studio, location support, filming, and post-production resources for projects in San Antonio and across South Texas."
        url="/locations/san-antonio"
        image="https://www.mediabarproductions.com/images/clients-bts-4.jpg"
      />
      <FAQPageJsonLd faqs={sanAntonioFaqs} />
      {children}
    </>
  )
}
