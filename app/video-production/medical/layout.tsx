import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
  VideoObjectJsonLd,
} from '@/components/JsonLd'
import { medicalFaqs, medicalVideo } from './content'

const path = '/video-production/medical'
const description =
  'Medical video production in San Antonio for patient stories, provider profiles, education, training, medical devices, and review-ready healthcare campaigns.'

export const metadata = buildMetadata({
  title: 'Medical Video Production San Antonio | Media Bar',
  description,
  path,
  ogImage: '/images/bts-10.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Medical Video Production San Antonio"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/bts-10.jpg"
      />
      <VideoObjectJsonLd
        name={medicalVideo.title}
        description={medicalVideo.copy}
        thumbnailUrl={medicalVideo.thumbnail}
        uploadDate={medicalVideo.uploadDate}
        duration={medicalVideo.duration}
        embedUrl={`https://player.vimeo.com/video/${medicalVideo.id}`}
      />
      <FAQPageJsonLd faqs={medicalFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production', url: '/video-production' },
          { name: 'Medical Video', url: path },
        ]}
      />
      {children}
    </>
  )
}
