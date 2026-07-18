import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
  VideoObjectJsonLd,
} from '@/components/JsonLd'
import { interviewFaqs, interviewVideo } from './content'

const path = '/video-production/interview'
const description =
  'Professional interview video production in San Antonio for executive stories, testimonials, documentary profiles, panels, and thought leadership.'

export const metadata = buildMetadata({
  title: 'Interview Video Production San Antonio',
  description,
  path,
  ogImage: '/images/media-library/media-bar-bts-11.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Interview Video Production"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/media-library/media-bar-bts-11.jpg"
      />
      <VideoObjectJsonLd
        name={interviewVideo.title}
        description={interviewVideo.copy}
        thumbnailUrl={interviewVideo.thumbnail}
        uploadDate={interviewVideo.uploadDate}
        duration={interviewVideo.duration}
        embedUrl={`https://player.vimeo.com/video/${interviewVideo.id}`}
      />
      <FAQPageJsonLd faqs={interviewFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production', url: '/video-production' },
          { name: 'Interview Video', url: path },
        ]}
      />
      {children}
    </>
  )
}
