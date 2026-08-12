import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { eventVideoFaqs } from './content'

const path = '/video-production/events'
const description =
  'Event video production in San Antonio for conferences, galas, and launches. Multi-camera coverage, recaps, session edits, and social cuts from one Texas crew.'

export const metadata = buildMetadata({
  title: 'Event Video Production San Antonio | Recaps | Media Bar',
  description,
  path,
  ogImage: '/images/bts-8.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Event Video Production in San Antonio"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/bts-8.jpg"
      />
      <FAQPageJsonLd faqs={eventVideoFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production Services', url: '/video-production' },
          { name: 'Event Video Production', url: path },
        ]}
      />
      {children}
    </>
  )
}
