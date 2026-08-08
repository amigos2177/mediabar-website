import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Video Production San Antonio | Media Bar Productions',
  description:
    'Award-winning San Antonio video production for commercials, branded films, events, interviews, healthcare stories, and full-service campaign delivery.',
  path: '/',
})

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
