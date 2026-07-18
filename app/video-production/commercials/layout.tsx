import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
  VideoObjectJsonLd,
} from '@/components/JsonLd'
import { commercialVideoFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Commercial Video Production in San Antonio | Media Bar',
  description:
    'Commercial production for broadcast, connected TV, digital, paid social, product launches, and multi-format campaigns across Texas.',
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
      <VideoObjectJsonLd
        name="RBFCU Coyote Commercial"
        description="A brand commercial produced for RBFCU by Media Bar Productions in San Antonio."
        thumbnailUrl="https://i.vimeocdn.com/video/2084915704-7da55912ad6af7c76d003d5a84c9b2667b1338afb9f36bd09b64d2d3d27d0bb4-d_1280?region=us"
        uploadDate="2025-11-19T00:00:00-06:00"
        duration="PT30S"
        embedUrl="https://player.vimeo.com/video/1138375371"
        contentUrl="https://vimeo.com/1138375371"
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
