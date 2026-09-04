import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { financialServicesFaqs } from './content'

const path = '/video-production/financial-services'
const description =
  'Financial services video production in Texas for banks, credit unions, fintech, leadership, commercials, member stories, explainers, recruiting, and review-ready campaigns.'

export const metadata = buildMetadata({
  title: 'Financial Services Video Production Texas | Media Bar',
  description,
  path,
  ogImage: '/images/rbfcu-bts-riverside.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Financial Services Video Production in Texas"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/rbfcu-bts-riverside.jpg"
      />
      <FAQPageJsonLd faqs={financialServicesFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production', url: '/video-production' },
          { name: 'Financial Services Video', url: path },
        ]}
      />
      {children}
    </>
  )
}
