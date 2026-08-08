import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
  VideoObjectJsonLd,
} from '@/components/JsonLd'
import { motionGraphicsFaqs, motionGraphicsVideo } from './content'

const path = '/video-production/motion-graphics'
const description =
  'San Antonio motion graphics production for explainers, animated data, titles, product visualization, and graphics integrated with live-action video.'

export const metadata = buildMetadata({
  title: 'Motion Graphics San Antonio | Media Bar',
  description,
  path,
  ogImage: '/images/media-library/motion-graphics-spider-verse.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Motion Graphics Production Company"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/media-library/motion-graphics-spider-verse.jpg"
      />
      <VideoObjectJsonLd
        name={motionGraphicsVideo.title}
        description={motionGraphicsVideo.copy}
        thumbnailUrl={motionGraphicsVideo.thumbnail}
        uploadDate={motionGraphicsVideo.uploadDate}
        duration={motionGraphicsVideo.duration}
        embedUrl={`https://player.vimeo.com/video/${motionGraphicsVideo.id}`}
      />
      <FAQPageJsonLd faqs={motionGraphicsFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production', url: '/video-production' },
          { name: 'Motion Graphics', url: path },
        ]}
      />
      {children}
    </>
  )
}
