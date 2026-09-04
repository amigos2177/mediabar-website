import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from '@/components/JsonLd'
import { motionGraphicsFaqs } from './content'

const path = '/video-production/motion-graphics'
const description =
  'Motion graphics and explainer video production in San Antonio for animated data, titles, product visualization, B2B explainers, and live-action integration.'

export const metadata = buildMetadata({
  title: 'Motion Graphics & Explainer Video San Antonio | Media Bar',
  description,
  path,
  ogImage: '/images/media-library/motion-graphics-spider-verse.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Motion Graphics and Explainer Video Production in San Antonio"
        description={description}
        url={path}
        image="https://www.mediabarproductions.com/images/media-library/motion-graphics-spider-verse.jpg"
      />
      <FAQPageJsonLd faqs={motionGraphicsFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Video Production', url: '/video-production' },
          { name: 'Motion Graphics', url: path },
        ]}
      />
      {children}
    </>
  )
}
