import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'About Media Bar Productions | San Antonio Video Company',
  description: "Meet the San Antonio video production team behind 3 Emmy and 15 Telly Awards. 13+ years telling Texas brands' stories. Learn what drives our work.",
  path: '/about',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ]} />
      {children}
    </>
  )
}
