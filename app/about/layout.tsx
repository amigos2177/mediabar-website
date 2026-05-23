import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Media Bar Productions | San Antonio Video Company',
  description:
    'Meet the San Antonio video production team behind 3 Emmy and 15 Telly Awards. 13+ years telling Texas brands’ stories. Learn what drives our work.',
  alternates: { canonical: '/about' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
