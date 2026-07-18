import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
  VideoObjectJsonLd,
} from '@/components/JsonLd'
import { postProductionFaqs, postProductionVideo } from './content'

const path = '/video-production/post-production'
const description =
  'Video post-production in San Antonio including editorial, color, sound, motion graphics, captions, cutdowns, and multi-channel delivery.'

export const metadata = buildMetadata({
  title: 'Video Post-Production San Antonio',
  description,
  path,
  ogImage: '/images/media-library/media-bar-bts-20.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Video Post-Production"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/media-library/media-bar-bts-20.jpg"
      />
      <VideoObjectJsonLd
        name={postProductionVideo.title}
        description={postProductionVideo.copy}
        thumbnailUrl={postProductionVideo.thumbnail}
        uploadDate={postProductionVideo.uploadDate}
        duration={postProductionVideo.duration}
        embedUrl={`https://player.vimeo.com/video/${postProductionVideo.id}`}
      />
      <FAQPageJsonLd faqs={postProductionFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production', url: '/video-production' },
          { name: 'Post-Production', url: path },
        ]}
      />
      {children}
    </>
  )
}
