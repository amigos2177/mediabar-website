import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
  VideoObjectJsonLd,
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
      <VideoObjectJsonLd
        name="Media Bar Corporate Video Production Reel"
        description="A selection of corporate video production work by Media Bar Productions."
        thumbnailUrl="https://i.vimeocdn.com/video/2158758794-61bb60f13b58d16d0ab4bcf809e6dfc02afe3a93096ad3f3b30414440de210ba-d_1280?region=us"
        uploadDate="2026-05-18T00:00:00-05:00"
        duration="PT2M15S"
        embedUrl="https://player.vimeo.com/video/1193317757"
        contentUrl="https://vimeo.com/1193317757"
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
