import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Production Studio San Antonio',
  description:
    'A full production studio in San Antonio for filming, interviews, and creative shoots. Tour Media Bar Productions’ purpose-built studio space.',
  alternates: { canonical: '/studio' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
