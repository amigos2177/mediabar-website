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
  'Medical and healthcare video production in San Antonio for patient education, provider profiles, testimonials, training, and campaigns across Texas.'

export const metadata = buildMetadata({
  title: 'Medical Video Production in San Antonio',
  description,
  path,
  ogImage: '/images/bts-10.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Medical and Healthcare Video Production"
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
