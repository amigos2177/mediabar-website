import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { sanAntonioFaqs } from './content'

export const metadata = buildMetadata({
  title: 'San Antonio Video Production Planning | Media Bar',
  description:
    'Plan a San Antonio video shoot with Media Bar. Review locations, participants, access, crew, approvals, and delivery needs for your project.',
  path: '/locations/san-antonio',
  ogImage: '/images/clients-bts-4.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'San Antonio', url: '/locations/san-antonio' },
      ]} />
      <ServiceJsonLd
        name="San Antonio Video Production Planning"
        description="Planning and production for San Antonio location shoots, including participants, access, filming schedules, crew, reviews, and post-production scoped to the project."
        url="/locations/san-antonio"
        image="https://www.mediabarproductions.com/images/clients-bts-4.jpg"
      />
      <FAQPageJsonLd faqs={sanAntonioFaqs} />
      {children}
    </>
  )
}
