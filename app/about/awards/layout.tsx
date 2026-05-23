import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Our Awards | 3 Emmys & 15 Tellys | Media Bar Productions' },
  description:
    'Media Bar Productions has earned 3 Emmy Awards and 15 Telly Awards for video production in San Antonio. See the recognized work behind the honors.',
  alternates: { canonical: '/about/awards' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
