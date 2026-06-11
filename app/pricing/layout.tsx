import { buildMetadata } from '@/lib/seo'
import { FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Video Production Cost in San Antonio | Media Bar Productions',
  description: 'What drives video production cost in San Antonio — scope, crew, locations, post-production depth, and deliverables. Plan your budget before you call.',
  path: '/pricing',
})

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
        {
          question: 'How much does a corporate video cost in San Antonio?',
          answer: "It depends on scope — the honest range runs from a single-day brand story production to a multi-day campaign. The biggest cost drivers are shoot days, crew size, and post-production depth. Tell us your goal and we'll recommend the right scope, not the biggest one.",
        },
        {
          question: 'Do you have minimum project sizes?',
          answer: "No. We scope to the goal — if a half-day shoot gets you what you need, that's what we'll recommend.",
        },
        {
          question: 'Do we own the footage?',
          answer: 'Yes — everything we shoot for you is yours, including the raw footage.',
        },
        {
          question: 'How far in advance should we book?',
          answer: "Typically one to two weeks for production scheduling. Larger campaigns with casting and locations need more runway — reach out early and we'll build the timeline together.",
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
