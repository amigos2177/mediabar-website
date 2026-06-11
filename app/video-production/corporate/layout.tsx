import { buildMetadata } from '@/lib/seo'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Corporate Video Production San Antonio',
  description: 'Corporate video production in San Antonio — brand films, internal communications, and executive content. Award-winning work for Texas companies.',
  path: '/video-production/corporate',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Corporate Video Production"
        description="Corporate video production in San Antonio — brand films, internal communications, and executive content. Award-winning work for Texas companies."
        url="/video-production/corporate"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'How much does a corporate video cost in San Antonio?',
          answer: 'Corporate video production in San Antonio typically ranges from $3,000 for a simple interview-style video to $25,000+ for a full brand film with multiple locations, actors, and motion graphics. The biggest variables are shoot days, crew size, and post-production complexity. We provide detailed quotes after a brief discovery call — there are no surprises.',
        },
        {
          question: 'How long does the process take from start to finish?',
          answer: 'A standard corporate video project takes 3–6 weeks from kickoff to final delivery. That includes scripting, scheduling, production, and post. Rush delivery is available if you have a hard deadline — we can turn some projects around in under two weeks depending on scope.',
        },
        {
          question: 'Do you write the script, or do we need to provide one?',
          answer: "We handle scriptwriting as part of most projects. Our production team will conduct a discovery session to understand your goals, audience, and key messages — then develop a script that hits every point. If you have a draft you'd like us to refine, we're happy to work from that instead.",
        },
        {
          question: 'Will you travel outside of San Antonio for the shoot?',
          answer: 'Absolutely. We regularly produce video throughout Texas — Austin, Dallas, Houston, and beyond. For out-of-market projects, travel costs are included in your quote upfront so there are no billing surprises after the fact.',
        },
        {
          question: 'How many rounds of revisions are included?',
          answer: "Our standard packages include two rounds of revisions after the initial cut. Most projects wrap within those two rounds. Additional revision rounds can be added if needed — we'll discuss that during the proposal stage.",
        },
        {
          question: 'Do we own the footage after the project?',
          answer: "Yes — you own all the footage. After final delivery, we provide you with the raw files along with the finished video. There are no stock footage licensing fees or usage restrictions on anything we shoot for you. It's your content.",
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Corporate Video', url: '/video-production/corporate' },
      ]} />
      {children}
    </>
  )
}
