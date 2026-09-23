export type WorkProject = {
  id: string
  slug: string
  title: string
  category: string
  year: string
  serviceHref: string
  feature?: boolean
  transcript?: string[]
  projectNotes?: { heading: string; paragraphs: string[] }
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
    projectNotes: {
      heading: 'A Day-Two Conference Recap',
      paragraphs: [
        'This 2024 NAFA film is a 1-minute, 29-second recap of the second conference day. Media Bar produced the video around event highlights and key moments, bringing a day of activity into a short finished film.',
        'The event portfolio also includes Texas Recycles Day, a community-focused film. Comparing the two examples is a useful starting point for deciding whether your own brief needs a conference recap, a community story, or a separate plan for full session recordings.',
      ],
    },
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
    projectNotes: {
      heading: 'ST Engineering: Capabilities and Operations',
      paragraphs: [
        'Media Bar produced this corporate brand video for ST Engineering to highlight the company’s capabilities and operations. At 4 minutes, 55 seconds, the film provides a longer-form example alongside the shorter commercials and reels in the portfolio.',
        'For a capabilities film of your own, identify the operations the audience needs to understand, the people who can explain them, and any access or review requirements. Those decisions help shape the brief before filming begins.',
      ],
    },
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
    projectNotes: {
      heading: 'Sanctuary Wealth: An Executive Conversation',
      paragraphs: [
        'This Sanctuary Wealth executive interview runs 54 minutes, 57 seconds. Produced by Media Bar in San Antonio, the interview combines a controlled setup, clean sound, polished lighting, and editorial support.',
        'A long-form executive conversation calls for a different brief than a short campaign film. Before production, decide whether the complete conversation, selected excerpts, or both will be useful to the audience, then agree on the review process and delivery formats.',
      ],
    },
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
