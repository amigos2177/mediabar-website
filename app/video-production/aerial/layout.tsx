import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aerial & Drone Video San Antonio',
  description:
    "Licensed aerial and drone videography in San Antonio. Media Bar Productions captures cinematic aerial footage for brands and events across Texas.",
  alternates: { canonical: '/video-production/aerial' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
