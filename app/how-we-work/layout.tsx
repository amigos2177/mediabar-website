import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'How We Work | The Media Bar Client Experience',
  description: 'From first call to final delivery, every Media Bar project runs on a clear four-phase process you can see at any moment. No black boxes, no surprises.',
  path: '/how-we-work',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'How We Work', url: '/how-we-work' },
      ]} />
      {children}
    </>
  )
}
