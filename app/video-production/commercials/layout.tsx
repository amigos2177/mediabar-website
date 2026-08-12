import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { commercialVideoFaqs } from './content'

const path = '/video-production/commercials'
const description =
  'Commercial video production in San Antonio for broadcast, connected TV, and paid social. One campaign idea, every version, from a Texas production crew.'

export const metadata = buildMetadata({
  title: 'Commercial Video San Antonio | Broadcast & Social | Media Bar',
  description,
  path,
  ogImage: '/images/rbfcu-bts-porch.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Commercial Video Production in San Antonio"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/rbfcu-bts-porch.jpg"
      />
      <FAQPageJsonLd faqs={commercialVideoFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production Services', url: '/video-production' },
          { name: 'Commercial Video Production', url: path },
        ]}
      />
      {children}
    </>
  )
}
