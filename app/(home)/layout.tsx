import { FAQPageJsonLd } from '@/components/JsonLd'
import { homepageFaqs } from '@/data/homepage-faqs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Video Production San Antonio | Media Bar Productions',
  description:
    'Award-winning San Antonio video production for commercials, branded films, events, interviews, healthcare stories, and full-service campaign delivery.',
  path: '/',
})

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQPageJsonLd
        faqs={homepageFaqs.map(({ question, answer }) => ({ question, answer }))}
      />
      {children}
    </>
  )
}
