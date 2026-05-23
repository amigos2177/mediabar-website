import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Production FAQ | San Antonio',
  description:
    'Common questions about video production in San Antonio — pricing, timelines, process, and deliverables — answered by the Media Bar Productions team.',
  alternates: { canonical: '/faq' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
