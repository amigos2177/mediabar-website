import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Food Video Production San Antonio',
  description:
    "Appetizing food and beverage video production in San Antonio. Media Bar Productions creates mouth-watering content for restaurants and Texas food brands.",
  alternates: { canonical: '/video-production/food' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
