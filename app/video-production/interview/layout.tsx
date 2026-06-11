import { buildMetadata } from '@/lib/seo'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Interview Video Production San Antonio',
  description: 'Professional interview and discussion filming in San Antonio. Media Bar Productions delivers polished testimonial, panel, and executive interview video.',
  path: '/video-production/interview',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Interview & Discussion Video Production"
        description="Professional interview and discussion filming in San Antonio. Media Bar Productions delivers polished testimonial, panel, and executive interview video."
        url="/video-production/interview"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'Do you direct the talent or just record?',
          answer: 'We actively direct every interview. Before the camera rolls, we brief the subject on what to expect, help them feel comfortable, and give them guidance on pacing and delivery. During the interview, our director is on set coaching for natural, confident answers. The difference between a coached interview and an uncoached one is dramatic.',
        },
        {
          question: 'Can you shoot at our office or do we come to your studio?',
          answer: "Both options are available. We frequently shoot on location at client offices, conference rooms, and branded environments. We also have two production stages in San Antonio that are ready for interview setups. Location shoots require slightly more setup time but often produce more authentic, contextual results.",
        },
        {
          question: 'How long does a typical interview shoot take?',
          answer: "A single-subject interview shoot typically takes 2–4 hours including setup, the interview itself, and b-roll capture. If you're recording multiple subjects in the same day, we can often batch them efficiently. We'll give you a detailed timeline estimate before your shoot day.",
        },
        {
          question: 'Do you shoot with one camera or multiple?',
          answer: 'Most interview setups use 2 cameras — a primary wide or medium shot and a closer single. This gives us cutaway coverage during editing without losing the natural flow of the conversation. For panel discussions, we scale up to 3–5 cameras depending on the number of participants.',
        },
        {
          question: 'Can you add b-roll and graphics to the interview?',
          answer: "Absolutely. B-roll footage (contextual shots of your workplace, product, or team in action) is what takes an interview from raw to polished. We typically capture b-roll the same day as the interview. We also add lower-thirds, motion graphic titles, and branded end cards as part of our standard post-production.",
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Interview Video', url: '/video-production/interview' },
      ]} />
      {children}
    </>
  )
}
