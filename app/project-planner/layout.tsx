import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Plan Your Video Project | Media Bar Productions',
  description: 'Plan a video project with Media Bar Productions in four guided steps. Share the goal, deliverables, timeline, location, and working budget with our San Antonio team.',
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
