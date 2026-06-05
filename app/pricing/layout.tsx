import type { Metadata } from 'next'
import { FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Video Production Cost in San Antonio | Media Bar Productions',
  description:
    'What drives video production cost in San Antonio — scope, crew, locations, post-production depth, and deliverables. Plan your budget before you call.',
  alternates: { canonical: '/pricing' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQPageJsonLd faqs={[
        {
          question: 'What does video production cost in San Antonio?',
          answer: 'Every project is scoped individually, so cost depends on the work involved — creative and pre-production, the number of shoot days and crew size, locations and talent, specialized capture like aerial or multi-cam, post-production depth, and how the final video will be used. We recommend the right scope for your goals rather than a one-size-fits-all package.',
        },
        {
          question: "Why don't you list fixed prices?",
          answer: 'A 30-second social spot and a multi-day brand film are very different productions, so a flat price list would be misleading. We give every client a custom quote based on their specific goals, scope, and deliverables.',
        },
        {
          question: "What's included in a video production quote?",
          answer: 'Our quotes account for creative and pre-production, filming, post-production (editing, color, and sound), and your final deliverables. When we wrap, you own all the footage we shoot at no extra charge.',
        },
        {
          question: 'How do I get an accurate quote for my project?',
          answer: "Tell us what you're trying to accomplish — your goals, audience, timeline, and where the video will run — and we'll build a custom quote with no guesswork and no hidden fees.",
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Pricing', url: '/pricing' },
      ]} />
      {children}
    </>
  )
}
