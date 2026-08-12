import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { liveStreamingFaqs } from './content'

const path = '/video-production/live-streaming'
const description =
  'San Antonio live streaming company for webcasts, conferences, and hybrid events. Multi-camera production, graphics, rehearsal, and recording from a local crew.'

export const metadata = buildMetadata({
  title: 'San Antonio Live Streaming Company | Webcasts | Media Bar',
  description,
  path,
  ogImage: '/images/studio-9.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Live Streaming and Webcast Production in San Antonio"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/studio-9.jpg"
      />
      <FAQPageJsonLd faqs={liveStreamingFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production', url: '/video-production' },
          { name: 'Live Streaming and Webcasts', url: path },
        ]}
      />
      {children}
    </>
  )
}
