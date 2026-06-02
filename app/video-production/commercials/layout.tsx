import type { Metadata } from 'next'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Commercial Video Production San Antonio',
  description:
    "TV and digital commercial production in San Antonio. Media Bar Productions creates broadcast-quality commercials that perform for Texas brands.",
  alternates: { canonical: '/video-production/commercials' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="TV Commercial Production"
        description="TV and digital commercial production in San Antonio. Media Bar Productions creates broadcast-quality commercials that perform for Texas brands."
        url="/video-production/commercials"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'How much does a commercial cost to produce?',
          answer: 'Commercial production budgets in San Antonio range from around $5,000 for a simple single-location spot to $50,000+ for multi-day productions with actors, multiple locations, and complex post. The biggest cost drivers are shoot days, talent fees, and post-production complexity. We provide detailed quotes after a brief call — no vague estimates.',
        },
        {
          question: 'How long does it take to produce a TV spot?',
          answer: 'A standard 30-second commercial takes 3–5 weeks from kickoff to delivery. That covers creative development, pre-production, production day, and post. If you have a tight air date, we offer rush production — some projects can be completed in under two weeks depending on scope.',
        },
        {
          question: 'Do you handle casting?',
          answer: 'Yes. We have relationships with local talent agencies and maintain our own talent pool for on-camera work. We handle casting, direction, and talent waivers as part of our full-service production process. If you already have talent in mind — a spokesperson, employee, or customer — we can work with them too.',
        },
        {
          question: 'Can you produce a commercial for social media only?',
          answer: "Absolutely — and we do it regularly. Social-first production is different from broadcast work: different aspect ratios, shorter attention windows, different pacing. We're fluent in both. We can produce a primary broadcast cut and then reformat for every social platform in the same project.",
        },
        {
          question: 'Do you coordinate media buying or just production?',
          answer: "Our core business is production, not media buying. However, we work with trusted local media buying partners and can refer you to the right agency for ad placement if needed. We ensure all finished spots are delivered in the correct specs for wherever they're running.",
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Commercials', url: '/video-production/commercials' },
      ]} />
      {children}
    </>
  )
}
