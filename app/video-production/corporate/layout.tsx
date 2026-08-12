import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { corporateVideoFaqs } from './content'

const path = '/video-production/corporate'
const description =
  'Corporate video production in San Antonio for brand films, leadership, customer stories, and recruiting. Local crew and studio, one team through delivery.'

export const metadata = buildMetadata({
  title: 'Corporate Video Production San Antonio | Crew | Media Bar',
  description,
  path,
  ogImage: '/images/clients-bts-9.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Corporate Video Production in San Antonio"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/clients-bts-9.jpg"
      />
      <FAQPageJsonLd faqs={corporateVideoFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production Services', url: '/video-production' },
          { name: 'Corporate Video Production', url: path },
        ]}
      />
      {children}
    </>
  )
}
