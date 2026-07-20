import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'San Antonio Video Production Company | Media Bar',
  description:
    'Award-winning San Antonio video production company creating corporate films, commercials, event coverage, and branded content from strategy through delivery.',
  path: '/',
})

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
