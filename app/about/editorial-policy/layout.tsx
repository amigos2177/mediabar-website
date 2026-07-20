import { buildMetadata } from '@/lib/seo'
import {
  BreadcrumbJsonLd,
  EditorialPolicyJsonLd,
} from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Editorial Standards | Media Bar Productions',
  description:
    'How Media Bar Productions creates, reviews, updates, and corrects its production guides and company content.',
  path: '/about/editorial-policy',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Editorial Standards', url: '/about/editorial-policy' },
      ]} />
      <EditorialPolicyJsonLd />
      {children}
    </>
  )
}
