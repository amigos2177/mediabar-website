import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Video Production San Antonio | Media Bar Productions',
  description: "San Antonio's award-winning video production company. 3 Emmy Awards, 15 Telly Awards, 13+ years producing corporate, commercial, and event video across Texas.",
  path: '/',
})

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
