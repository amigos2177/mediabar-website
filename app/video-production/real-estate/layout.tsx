import { buildMetadata } from '@/lib/seo'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Real Estate Video Production San Antonio',
  description: 'Real estate video and property tours in San Antonio. Media Bar Productions produces cinematic listings and development films for Texas properties.',
  path: '/video-production/real-estate',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Real Estate Video Production"
        description="Real estate video and property tours in San Antonio. Media Bar Productions produces cinematic listings and development films for Texas properties."
        url="/video-production/real-estate"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'How quickly do you deliver real estate video?',
          answer: "Our standard turnaround is 3–5 business days from the shoot date. For listings with time-sensitive launch dates, we offer rush delivery in 24–48 hours for an additional fee. Just let us know your go-live date when you book and we'll confirm the timeline.",
        },
        {
          question: 'Do you combine ground and aerial in the same shoot?',
          answer: "Yes — and that's our recommended approach for almost every property. Ground interior and exterior production combined with aerial coverage in a single coordinated shoot day is the most efficient and cost-effective way to get complete property coverage. Separate aerial-only shoots are available but typically less efficient.",
        },
        {
          question: "What's your process for getting aerial authorization?",
          answer: "Our pilots handle all FAA airspace authorization as part of every aerial shoot. We file LAANC authorizations for controlled airspace, obtain waivers where required, and check NOTAMs before every flight. You don't need to do anything — just confirm the property address when you book.",
        },
        {
          question: 'Do you shoot twilight?',
          answer: 'Yes. Twilight exterior shots are one of the most impactful visuals in luxury real estate marketing. We offer twilight as an add-on to any ground/aerial package, or as a standalone shoot. Twilight windows are typically 20–30 minutes long, so precise timing and pre-planning are essential — we handle all of that.',
        },
        {
          question: 'What formats do you deliver in for MLS?',
          answer: "We deliver a primary MP4 at 1080p suitable for MLS, Zillow, Realtor.com, and other portals, plus a full-quality master file and social-optimized cuts for Instagram, Facebook, and YouTube. If your specific MLS has particular technical requirements, just let us know and we'll match them.",
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Real Estate Video', url: '/video-production/real-estate' },
      ]} />
      {children}
    </>
  )
}
