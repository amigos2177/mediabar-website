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
const featuredVideos = Object.values(mediaBarAnswersVideos)

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
        dateModified="2026-07-22"
        image="/images/media-library/media-bar-bts-33.jpg"
      />
      {featuredVideos.map((video) => (
        <VideoObjectJsonLd
          key={video.youtubeId}
          name={video.title}
          description={video.description}
          thumbnailUrl={video.thumbnailUrl}
          uploadDate={video.uploadDate}
          duration={video.duration}
          contentUrl={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          embedUrl={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
        />
      ))}
      <FAQPageJsonLd faqs={faqSchemaItems()} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Video Production FAQ', url: path },
      ]} />
      {children}
    </>
  )
}
