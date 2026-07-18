import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import { pricingFaqs } from './pricing-data'

export const metadata = buildMetadata({
  title: 'Video Production Pricing & Custom Estimates | Media Bar',
  description:
    'Learn how Media Bar builds custom video production estimates around your goals, crew, shoot days, locations, post-production, and deliverables.',
  path: '/pricing',
})

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FAQPageJsonLd faqs={pricingFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Pricing', url: '/pricing' },
        ]}
      />
      {children}
    </>
  )
}
