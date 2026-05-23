import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Video Production Austin TX | Media Bar Productions' },
  description:
    "Award-winning video production for Austin businesses. Media Bar Productions brings San Antonio-based crews and studio resources to projects across Austin.",
  alternates: { canonical: '/locations/austin' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
