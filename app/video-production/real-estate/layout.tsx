import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Video Production San Antonio',
  description:
    "Real estate video and property tours in San Antonio. Media Bar Productions produces cinematic listings and development films for Texas properties.",
  alternates: { canonical: '/video-production/real-estate' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
