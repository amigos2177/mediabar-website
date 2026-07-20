import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { liveStreamingFaqs } from './content'

const path = '/video-production/live-streaming'
const description =
  'San Antonio live streaming production for conferences, town halls, launches, and hybrid events with multi-camera video, audio, graphics, and recording.'

export const metadata = buildMetadata({
  title: 'Live Streaming Production San Antonio | Media Bar',
  description,
  path,
  ogImage: '/images/studio-9.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Live Streaming Production in San Antonio"
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
