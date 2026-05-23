import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Video Production San Antonio TX | Media Bar Productions' },
  description:
    "San Antonio video production in our home market — corporate, commercial, and event work for military, healthcare, tourism, and financial clients.",
  alternates: { canonical: '/locations/san-antonio' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
