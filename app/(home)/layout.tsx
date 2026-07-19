import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Video Production San Antonio | Media Bar Productions',
  description: "San Antonio's award-winning video production company. Founded in 2011 with 3 Emmy Awards and 15 Telly Awards, producing corporate, commercial, and event video across Texas.",
  path: '/',
})

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
