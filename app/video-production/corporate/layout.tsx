import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Video Production San Antonio',
  description:
    "Corporate video production in San Antonio — brand films, internal communications, and executive content. Award-winning work for Texas companies.",
  alternates: { canonical: '/video-production/corporate' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
