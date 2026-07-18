import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { liveStreamingFaqs } from './content'

const path = '/video-production/live-streaming'
const description =
  'Live streaming production in San Antonio for conferences, town halls, launches, training, hybrid programs, and private webcasts.'

export const metadata = buildMetadata({
  title: 'Live Streaming Production San Antonio',
  description,
  path,
  ogImage: '/images/studio-9.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Live Streaming Production"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/studio-9.jpg"
      />
      <FAQPageJsonLd faqs={liveStreamingFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production', url: '/video-production' },
          { name: 'Live Streaming', url: path },
        ]}
      />
      {children}
    </>
  )
}
