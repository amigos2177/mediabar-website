import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Video Production San Antonio | Media Bar Productions',
  description:
    'Media Bar Productions is an award-winning video production company in San Antonio creating commercials, branded films, events, interviews, and healthcare content.',
  path: '/',
})

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
