import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Plan Your Video Project | Media Bar Productions',
  description: 'Build a practical video production brief in a few guided steps. Share your goals, deliverables, timeline, and budget with Media Bar Productions.',
  path: '/project-planner',
})

export default function ProjectPlannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Project Planner', url: '/project-planner' },
      ]} />
      {children}
    </>
  )
}
