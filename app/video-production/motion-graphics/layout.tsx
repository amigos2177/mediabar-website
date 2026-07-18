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
  'Motion graphics production in San Antonio for explainers, titles, animated data, product visualization, brand systems, and live-action integration.'

export const metadata = buildMetadata({
  title: 'Motion Graphics Production San Antonio',
  description,
  path,
  ogImage: '/images/studio-2.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Motion Graphics Production"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/studio-2.jpg"
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
