import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Video Production Dallas-Fort Worth | Media Bar Productions' },
  description:
    "Corporate and commercial video production for Dallas-Fort Worth brands. Media Bar Productions delivers award-winning work throughout the DFW metroplex.",
  alternates: { canonical: '/locations/dallas' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
