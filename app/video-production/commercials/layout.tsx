import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Video Production San Antonio',
  description:
    "TV and digital commercial production in San Antonio. Media Bar Productions creates broadcast-quality commercials that perform for Texas brands.",
  alternates: { canonical: '/video-production/commercials' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
