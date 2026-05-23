import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Live Streaming & Webcasting San Antonio',
  description:
    "Professional live streaming and webcasting in San Antonio. Media Bar Productions broadcasts conferences, events, and meetings with multi-camera quality.",
  alternates: { canonical: '/video-production/live-streaming' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
