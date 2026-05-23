import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Videography San Antonio',
  description:
    "Event video coverage in San Antonio — conferences, galas, and corporate events. Multi-camera production that captures your event in full.",
  alternates: { canonical: '/video-production/events' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
