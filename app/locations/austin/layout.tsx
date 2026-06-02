import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: { absolute: 'Video Production Austin TX | Media Bar Productions' },
  description:
    "Award-winning video production for Austin businesses. Media Bar Productions brings San Antonio-based crews and studio resources to projects across Austin.",
  alternates: { canonical: '/locations/austin' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Austin', url: '/locations/austin' },
      ]} />
      {children}
    </>
  )
}
