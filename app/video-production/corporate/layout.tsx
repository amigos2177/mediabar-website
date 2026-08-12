import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { corporateVideoFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Corporate Video Production San Antonio | Media Bar',
  description:
    'Corporate video production in San Antonio for brand films, executive communications, customer stories, recruiting, training, and campaign content.',
  path: '/video-production/corporate',
  ogImage: '/images/clients-bts-9.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Corporate Video Production in San Antonio"
        description="Corporate video production in San Antonio for brand films, executive communications, customer stories, recruiting, training, and campaign content."
        url="/video-production/corporate"
        image="https://www.mediabarproductions.com/images/clients-bts-9.jpg"
      />
      <FAQPageJsonLd faqs={corporateVideoFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production Services', url: '/video-production' },
          { name: 'Corporate Video Production', url: '/video-production/corporate' },
        ]}
      />
      {children}
    </>
  )
}
