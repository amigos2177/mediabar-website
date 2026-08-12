import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { commercialVideoFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Commercial Video Production San Antonio | Media Bar',
  description:
    'San Antonio commercial video production for broadcast, connected TV, paid social, digital campaigns, product launches, and channel-ready versions.',
  path: '/video-production/commercials',
  ogImage: '/images/rbfcu-bts-porch.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Commercial Video Production"
        description="Commercial production for broadcast, connected TV, digital, paid social, product launches, and multi-format campaigns across Texas."
        url="/video-production/commercials"
        image="https://www.mediabarproductions.com/images/rbfcu-bts-porch.jpg"
      />
      <FAQPageJsonLd faqs={commercialVideoFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production Services', url: '/video-production' },
          { name: 'Commercial Video Production', url: '/video-production/commercials' },
        ]}
      />
      {children}
    </>
  )
}
