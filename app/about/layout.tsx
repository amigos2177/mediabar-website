import { buildMetadata } from '@/lib/seo'
import { AboutPageJsonLd, BreadcrumbJsonLd, PersonJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'About Media Bar Productions | San Antonio Video Company',
  description: "Meet Media Bar Productions, the San Antonio video company founded by Ruben Garcia. Explore our team, story, 3 Emmy Awards, and production values.",
  path: '/about',
  ogImage: '/images/media-library/media-bar-team-photo.jpg',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ]} />
      <AboutPageJsonLd />
      <PersonJsonLd
        name="Ruben Garcia"
        jobTitle="Founder and Executive Producer"
        image="/images/media-library/ruben-garcia-founder-headshot-01.jpeg"
      />
      {children}
    </>
  )
}
