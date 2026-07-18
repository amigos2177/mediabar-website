import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { sanAntonioFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Video Production San Antonio TX | Media Bar Productions',
  description: 'Award-winning San Antonio video production for corporate, commercial, event, healthcare, financial, and public-sector organizations.',
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
        name="Video Production Services in San Antonio"
        description="Full-service corporate, commercial, event, healthcare, studio, and post-production video services from a San Antonio production company."
        url="/locations/san-antonio"
        image="https://www.mediabarproductions.com/images/clients-bts-4.jpg"
      />
      <FAQPageJsonLd faqs={sanAntonioFaqs} />
      {children}
    </>
  )
}
