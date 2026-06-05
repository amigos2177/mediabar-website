import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Video Production Cost in San Antonio | Media Bar Productions',
  description:
    'What drives video production cost in San Antonio — scope, crew, locations, post-production depth, and deliverables. Plan your budget before you call.',
  alternates: { canonical: '/pricing' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Pricing', url: '/pricing' },
      ]} />
      {children}
    </>
  )
}
