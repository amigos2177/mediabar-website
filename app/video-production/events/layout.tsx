import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
  VideoObjectJsonLd,
} from '@/components/JsonLd'
import { eventVideoFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Event Video Production in San Antonio | Media Bar',
  description:
    'San Antonio event video production for conferences, keynotes, galas, launches, recaps, speaker content, and multi-camera live programs.',
  path: '/video-production/events',
  ogImage: '/images/bts-8.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Event Video Production"
        description="San Antonio event video production for conferences, keynotes, galas, launches, recaps, speaker content, and multi-camera live programs."
        url="/video-production/events"
        image="https://www.mediabarproductions.com/images/bts-8.jpg"
      />
      <VideoObjectJsonLd
        name="NAFA Conference Day Two Recap"
        description="A day-two conference recap produced by Media Bar Productions, capturing event highlights and key moments."
        thumbnailUrl="https://i.vimeocdn.com/video/2092713706-9d1a0e7015828edf8e0a8d84c008d3e2ca70f844461c954092850ae214a9e460-d_1280?region=us"
        uploadDate="2024-05-15T00:00:00-05:00"
        duration="PT1M29S"
        embedUrl="https://player.vimeo.com/video/946447253"
        contentUrl="https://vimeo.com/946447253"
      />
      <FAQPageJsonLd faqs={eventVideoFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production Services', url: '/video-production' },
          { name: 'Event Video Production', url: '/video-production/events' },
        ]}
      />
      {children}
    </>
  )
}
