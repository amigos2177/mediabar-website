import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { VideoObjectSchema, type PortfolioVideo } from '@/components/VideoObjectSchema'
import workVideos from '@/data/work-videos.json'

export const metadata = buildMetadata({
  title: 'Our Work | San Antonio Video Production Portfolio',
  description: "Explore Media Bar Productions' video portfolio — corporate films, commercials, and event coverage for top Texas brands. See San Antonio production work.",
  path: '/work',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Our Work', url: '/work' },
      ]} />
      <VideoObjectSchema videos={workVideos as PortfolioVideo[]} />
      {children}
    </>
  )
}
