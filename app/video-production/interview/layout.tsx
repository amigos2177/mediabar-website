import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { interviewFaqs } from './content'

const path = '/video-production/interview'
const description =
  'Interview and testimonial video production in San Antonio for executives, customer stories, documentary profiles, panels, and thought leadership.'

export const metadata = buildMetadata({
  title: 'Interview & Testimonial Video San Antonio | Media Bar',
  description,
  path,
  ogImage: '/images/media-library/media-bar-bts-11.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Interview and Testimonial Video Production in San Antonio"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/media-library/media-bar-bts-11.jpg"
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
