import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { austinFaqs } from './content'

export const metadata = buildMetadata({
  title: 'Video Production Austin TX | Media Bar Productions',
  description: 'Award-winning Austin video production for corporate films, commercials, interviews, events, and live streaming from one full-service Texas team.',
  path: '/locations/austin',
  ogImage: '/images/clients-bts-5.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Austin', url: '/locations/austin' },
      ]} />
      <ServiceJsonLd
        name="Video Production Services in Austin"
        description="Full-service corporate, commercial, interview, event, live-streaming, and post-production video services for Austin organizations."
        url="/locations/austin"
        image="https://www.mediabarproductions.com/images/clients-bts-5.jpg"
      />
      <FAQPageJsonLd faqs={austinFaqs} />
      {children}
    </>
  )
}
