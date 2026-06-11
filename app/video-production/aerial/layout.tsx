import { buildMetadata } from '@/lib/seo'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Aerial & Drone Video San Antonio',
  description: 'Licensed aerial and drone videography in San Antonio. Media Bar Productions captures cinematic aerial footage for brands and events across Texas.',
  path: '/video-production/aerial',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Aerial & Drone Video Production"
        description="Licensed aerial and drone videography in San Antonio. Media Bar Productions captures cinematic aerial footage for brands and events across Texas."
        url="/video-production/aerial"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'Are your drone operators FAA certified?',
          answer: 'Yes. All of our drone pilots hold FAA Part 107 Remote Pilot Certificates, which is the required certification for commercial drone operations in the United States. We also maintain current liability insurance that covers drone operations and provide certificates of insurance on request.',
        },
        {
          question: "What happens if the weather doesn't cooperate?",
          answer: 'We monitor weather conditions closely in the days leading up to your shoot. High winds, rain, and certain cloud conditions can ground drone operations. We build weather contingency into our scheduling and have a clear rescheduling policy — if conditions are unsafe, we reschedule at no additional cost.',
        },
        {
          question: 'How high can you fly?',
          answer: "Under standard FAA Part 107 rules, drone operations are limited to 400 feet above ground level. For certain projects in controlled airspace, we obtain LAANC authorization or FAA waivers that allow operation at different altitudes. We'll determine the right authorization for your location and project requirements during planning.",
        },
        {
          question: 'What drone and camera do you use?',
          answer: 'Our primary platform is the DJI Inspire 3 with interchangeable lens systems, which captures true cinema-quality aerial footage. For projects where the drone needs to move more nimbly or operate in tighter spaces, we also fly the Mavic 3 Cine. Both platforms deliver footage that matches broadcast and cinema quality standards.',
        },
        {
          question: 'Can you combine aerial with ground-level video production?',
          answer: "Yes — and that's where the real magic happens. A production that combines cinematic drone work with ground-level interviews, b-roll, and action sequences tells a much more complete story. We regularly run aerial and ground crews simultaneously, then integrate the footage in post for a seamless final cut.",
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Aerial Video', url: '/video-production/aerial' },
      ]} />
      {children}
    </>
  )
}
