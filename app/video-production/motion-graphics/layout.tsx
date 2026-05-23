import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Motion Graphics & Animation San Antonio',
  description:
    "Motion graphics and animation in San Antonio — explainer videos, animated logos, and branded visuals that bring Texas companies' ideas to life.",
  alternates: { canonical: '/video-production/motion-graphics' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
