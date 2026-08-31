import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { eventVideoFaqs } from './content'

const path = '/video-production/events'
const schemaDescription =
  'Event video production for conferences and corporate events in San Antonio and across Texas, with multi-camera coverage, clean audio, recaps, and social edits.'
const description =
  'A San Antonio crew for conference and corporate event video across Texas. We cover keynotes and sessions, then edit recaps, speaker clips, and social cuts.'

export const metadata = buildMetadata({
  title: 'San Antonio Event Video | Recaps & Sessions | Media Bar',
  description,
  path,
  ogImage: '/images/bts-8.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Event Video Production in San Antonio"
        description={schemaDescription}
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
