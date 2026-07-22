import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  EducationalGuideJsonLd,
  FAQPageJsonLd,
  VideoObjectJsonLd,
} from '@/components/JsonLd'
import {
  faqSchemaItems,
  mediaBarAnswersVideos,
} from '@/data/video-production-faq'

const title = 'Video Production FAQ for Texas Businesses'
const description =
  'Practical answers about video strategy, budgets, planning, filming, editing, delivery, and Texas production logistics from a San Antonio production team.'
const path = '/resources/video-production-faq'
const featuredVideo = mediaBarAnswersVideos.postProductionDelays

export const metadata = buildMetadata({
  title,
  description,
  path,
  ogImage: '/images/media-library/media-bar-bts-33.jpg',
})

export default function VideoProductionFaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EducationalGuideJsonLd
        title={title}
        description={description}
        url={path}
        datePublished="2026-07-20"
        dateModified="2026-07-21"
        image="/images/media-library/media-bar-bts-33.jpg"
      />
      <VideoObjectJsonLd
        name={featuredVideo.title}
        description={featuredVideo.description}
        thumbnailUrl={featuredVideo.thumbnailUrl}
        uploadDate={featuredVideo.uploadDate}
        duration={featuredVideo.duration}
        contentUrl={`https://www.youtube.com/watch?v=${featuredVideo.youtubeId}`}
        embedUrl={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
      />
      <FAQPageJsonLd faqs={faqSchemaItems()} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Video Production FAQ', url: path },
      ]} />
      {children}
    </>
  )
}
