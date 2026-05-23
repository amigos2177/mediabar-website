import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work | San Antonio Video Production Portfolio',
  description:
    'Explore Media Bar Productions’ video portfolio — corporate films, commercials, and event coverage for top Texas brands. See San Antonio production work.',
  alternates: { canonical: '/work' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
