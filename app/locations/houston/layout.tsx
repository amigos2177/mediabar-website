import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { houstonFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Video Production Houston TX | Media Bar Productions',
  description: 'Award-winning Houston video production for corporate films, healthcare content, technical stories, events, live streams, aerials, and post-production.',
  path: '/locations/houston',
  ogImage: '/images/bts-dsc-2.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Houston', url: '/locations/houston' },
      ]} />
      <ServiceJsonLd
        name="Video Production Services in Houston"
        description="Full-service corporate, medical, event, live-streaming, aerial, and post-production video services for Houston organizations."
        url="/locations/houston"
        image="https://www.mediabarproductions.com/images/bts-dsc-2.jpg"
      />
      <FAQPageJsonLd faqs={houstonFaqs} />
      {children}
    </>
  )
}
