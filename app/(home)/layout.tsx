import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'San Antonio Video Production Company | Media Bar',
  description:
    'Media Bar Productions is a San Antonio video production company creating corporate films, commercials, and event content for Texas organizations since 2011.',
  path: '/',
})

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
