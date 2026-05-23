import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Video Production Houston TX | Media Bar Productions' },
  description:
    "Professional video production for Houston companies — corporate, commercial, and event film. Media Bar Productions serves brands across the Houston area.",
  alternates: { canonical: '/locations/houston' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
