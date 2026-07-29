import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
  VideoObjectJsonLd,
} from '@/components/JsonLd'
import { eventVideoFaqs } from './content'

const path = '/video-production/events'
const description =
  'San Antonio event video production for conferences, keynotes, galas, and launches with multi-camera coverage, clean audio, recaps, sessions, and social edits.'

export const metadata = buildMetadata({
  title: 'Event Video Production San Antonio | Media Bar',
  description,
  path,
  ogImage: '/images/bts-8.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Event Video Production in San Antonio"
        description={description}
        url={path}
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
      <VideoObjectJsonLd
        name="Texas Recycles Day Event Film"
        description="Community event video produced by Media Bar Productions for Texas Recycles Day, highlighting participation, purpose, and the people behind the program."
        thumbnailUrl="https://i.vimeocdn.com/video/2092713602-5bdcc2bf09ed9179aededd89f362c7aa2ef6831a5f69a79e33b078916ee6b2f2-d_1280?region=us"
        uploadDate="2025-02-12T00:00:00-06:00"
        duration="PT2M5S"
        embedUrl="https://player.vimeo.com/video/1056208254"
        contentUrl="https://vimeo.com/1056208254"
      />
      <FAQPageJsonLd faqs={eventVideoFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production Services', url: '/video-production' },
          { name: 'Event Video Production', url: path },
        ]}
      />
      {children}
    </>
  )
}
