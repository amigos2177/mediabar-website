export type WorkProject = {
  id: string
  slug: string
  title: string
  category: string
  year: string
  serviceHref: string
  feature?: boolean
  transcript?: string[]
}

export const workProjects: WorkProject[] = [
  {
    id: '1077104073',
    slug: '2025-demo-reel',
    title: '2025 Demo Reel',
    category: 'Corporate',
    year: '2025',
    serviceHref: '/video-production/corporate',
    feature: true,
  },
  {
    id: '1193317757',
    slug: 'san-antonio-production-stories',
    title: 'San Antonio Production Stories',
    category: 'Corporate',
    year: '2026',
    serviceHref: '/video-production/corporate',
    feature: true,
  },
  {
    id: '1138375371',
    slug: 'rbfcu-coyote-commercial',
    title: 'RBFCU Coyote',
    category: 'Commercials',
    year: '2025',
    serviceHref: '/video-production/commercials',
  },
  {
    id: '946447253',
    slug: 'nafa-conference-recap',
    title: 'NAFA Conference Recap',
    category: 'Events',
    year: '2024',
    serviceHref: '/video-production/events',
  },
  {
    id: '1180540188',
    slug: 'wound-local-patient-story',
    title: 'Wound Local Patient Story',
    category: 'Interviews',
    year: '2025',
    serviceHref: '/video-production/interview',
  },
  {
    id: '1180540550',
    slug: 'eli-ortiz-specialty-care',
    title: 'Eli Ortiz Specialty Care',
    category: 'Medical',
    year: '2025',
    serviceHref: '/video-production/medical',
  },
  {
    id: '1180540292',
    slug: 'boot-ranch-golf-commercial',
    title: 'Boot Ranch Golf Commercial',
    category: 'Commercials',
    year: '2026',
    serviceHref: '/video-production/commercials',
    feature: true,
  },
  {
    id: '1180540640',
    slug: 'fleer-brilliants-superman',
    title: 'Fleer Brilliants Superman',
    category: 'Motion',
    year: '2026',
    serviceHref: '/video-production/motion-graphics',
  },
  {
    id: '666115814',
    slug: 'st-engineering-brand-film',
    title: 'ST Engineering Brand Film',
    category: 'Post Production',
    year: '2022',
    serviceHref: '/video-production/post-production',
  },
  {
    id: '1056208254',
    slug: 'texas-recycles-day',
    title: 'Texas Recycles Day',
    category: 'Events',
    year: '2024',
    serviceHref: '/video-production/events',
  },
  {
    id: '697231773',
    slug: 'tostadas-de-chicharron',
    title: 'Tostadas de Chicharron',
    category: 'Food',
    year: '2021',
    serviceHref: '/video-production/food',
  },
  {
    id: '1180537582',
    slug: 'sanctuary-wealth-interview',
    title: 'Sanctuary Wealth Interview',
    category: 'Interviews',
    year: '2025',
    serviceHref: '/video-production/interview',
  },
  {
    id: '697230305',
    slug: 'healthcare-provider-story',
    title: 'Healthcare Provider Story',
    category: 'Medical',
    year: '2021',
    serviceHref: '/video-production/medical',
  },
]

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug)
}
