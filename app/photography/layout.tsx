import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography Services San Antonio',
  description:
    'Professional photography in San Antonio for brands, events, and architecture. Media Bar Productions delivers polished commercial imagery across Texas.',
  alternates: { canonical: '/photography' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
