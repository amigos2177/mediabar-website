import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Video Production San Antonio',
  description:
    "Medical and healthcare video production in San Antonio — patient education, facility tours, and provider profiles for Texas healthcare organizations.",
  alternates: { canonical: '/video-production/medical' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
