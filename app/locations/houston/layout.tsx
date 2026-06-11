import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Video Production Houston TX | Media Bar Productions',
  description: 'Professional video production for Houston companies — corporate, commercial, and event film. Media Bar Productions serves brands across the Houston area.',
  path: '/locations/houston',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Houston', url: '/locations/houston' },
      ]} />
      {children}
    </>
  )
}
