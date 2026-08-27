import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { eventVideoFaqs } from './content'

const path = '/video-production/events'
const description =
  'Event video production for conferences and corporate events in San Antonio and across Texas, with multi-camera coverage, clean audio, recaps, and social edits.'

export const metadata = buildMetadata({
  title: 'Event Video Production for Conferences | Media Bar',
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
