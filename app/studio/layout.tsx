import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { studioFaqs } from './studio-data'

export const metadata = buildMetadata({
  title: 'Production Studio San Antonio | Media Bar Productions',
  description: "Book a professional production studio in San Antonio with a DMX lighting grid, treated sound, a control room, and support for video, photography, and live content.",
  path: '/studio',
  ogImage: '/images/studio-7.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Studio', url: '/studio' },
      ]} />
      <ServiceJsonLd
        name="Production Studio Rental in San Antonio"
        description="A professional San Antonio production studio for video, photography, interviews, commercials, and live content."
        url="/studio"
        image="https://www.mediabarproductions.com/images/studio-7.jpg"
      />
      <FAQPageJsonLd
        faqs={studioFaqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      {children}
    </>
  )
}
