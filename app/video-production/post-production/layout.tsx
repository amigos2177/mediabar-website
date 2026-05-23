import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post Production & Video Editing San Antonio',
  description:
    "Video editing and post production in San Antonio — color, sound, and motion finishing. Media Bar Productions polishes footage into broadcast-ready video.",
  alternates: { canonical: '/video-production/post-production' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
