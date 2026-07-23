export type MediaBarAnswersVideo = {
  youtubeId: string
  title: string
  description: string
  uploadDate: string
  duration: string
  thumbnailPath: string
  thumbnailUrl: string
}

export type MediaBarAnswersEpisode = {
  episode: string
  slug: string
  category: string
  shortTitle: string
  directAnswer: string
  takeaways: string[]
  transcript: string[]
  faqQuestion: string
  faqHref: string
  serviceLink: {
    label: string
    href: string
  }
  relatedLinks: {
    label: string
    href: string
  }[]
  video: MediaBarAnswersVideo
}

export const mediaBarAnswersVideos = {
  corporateVideoCost: {
    youtubeId: 'YiGociNuVpo',
    title: 'How Much Does a Corporate Video Cost in San Antonio?',
    description:
      'Ruben Garcia explains the general planning range for a professionally produced corporate video and the scope decisions that most affect cost in San Antonio.',
    uploadDate: '2026-07-21T22:15:44-07:00',
    duration: 'PT1M11S',
    thumbnailPath: '/images/media-bar-answers/corporate-video-cost-san-antonio.png',
    thumbnailUrl:
      'https://www.mediabarproductions.com/images/media-bar-answers/corporate-video-cost-san-antonio.png',
  },
  postProductionDelays: {
    youtubeId: '4EZelLWoHnY',
    title: 'The #1 Reason Corporate Videos Get Delayed (It’s Not Editing)',
    description:
      'Ruben Garcia explains what happens after filming and how a clear, consolidated approval process helps prevent corporate video post-production delays.',
    uploadDate: '2026-07-21',
    duration: 'PT1M7S',
    thumbnailPath: '/images/media-bar-answers/why-corporate-videos-get-delayed.png',
    thumbnailUrl:
      'https://www.mediabarproductions.com/images/media-bar-answers/why-corporate-videos-get-delayed.png',
  },
} satisfies Record<string, MediaBarAnswersVideo>

export const mediaBarAnswersEpisodes: MediaBarAnswersEpisode[] = [
  {
    episode: '01',
    slug: 'why-corporate-videos-get-delayed',
    category: 'Post-Production',
    shortTitle: 'Why corporate videos get delayed',
    directAnswer:
      'Corporate video delays often come from unclear or conflicting feedback, not the editing itself. A defined decision-maker, consolidated comments, and an agreed review process keep post-production moving.',
    takeaways: [
      'Choose one decision-maker who can resolve conflicting feedback.',
      'Consolidate each review round into one clear response.',
      'Identify legal, compliance, and executive reviewers before editing begins.',
    ],
    transcript: [
      "I'm Ruben Garcia, founder of Media Bar Productions. This is my digital avatar, but this guidance comes directly from our post-production process.",
      'What happens after the filming day?',
      'Post-production begins with organizing and backing up the footage, reviewing interviews, and identifying the strongest story.',
      'The editor then builds the first cut, adds supporting footage, music, graphics, titles, and branding.',
      'After the story is approved, the project moves through color correction, audio mixing, captions, final graphics, and delivery versions.',
      'The biggest cause of delay is usually not editing. It is unclear or conflicting feedback.',
      'Choose one decision-maker, consolidate comments into a single response, and agree on the number of revision rounds before editing begins.',
      'Legal, compliance, and executive reviewers should also be identified early.',
      'Finally, plan every required format in advance, including website, presentation, social, vertical, and captioned versions.',
      'Visit MediaBarProductions.com to learn more about post-production planning.',
    ],
    faqQuestion: 'What happens after filming is complete?',
    faqHref: '/resources/video-production-faq#what-happens-after-video-filming',
    serviceLink: {
      label: 'Explore post-production services',
      href: '/video-production/post-production',
    },
    relatedLinks: [
      {
        label: 'See how Media Bar projects move from planning to delivery',
        href: '/how-we-work',
      },
      {
        label: 'Plan a video project',
        href: '/project-planner',
      },
    ],
    video: mediaBarAnswersVideos.postProductionDelays,
  },
  {
    episode: '02',
    slug: 'corporate-video-cost-san-antonio',
    category: 'Budget and Scope',
    shortTitle: 'Corporate video cost in San Antonio',
    directAnswer:
      'As a general planning range, many professionally produced corporate videos fall between $3,500 and $15,000 or more. The useful number depends on the creative plan, production requirements, and deliverables, not the finished runtime alone.',
    takeaways: [
      'Creative planning, filming days, locations, crew, and post-production shape the estimate.',
      'Two videos with the same runtime can require completely different productions.',
      'Define one business goal and plan multiple useful assets before filming to control costs.',
    ],
    transcript: [
      "I'm Ruben Garcia, founder of Media Bar Productions. This is my digital avatar, but the guidance comes directly from my experience producing video in San Antonio and across Texas.",
      'So, how much does a corporate video cost in San Antonio?',
      'As a general planning range, many professionally produced corporate videos fall between thirty-five hundred and fifteen thousand dollars or more.',
      'But the final video length is not what determines the price.',
      'The biggest cost drivers are creative planning, the number of interviews and locations, crew size, filming days, equipment, editing, motion graphics, captions, and additional versions.',
      'A two-minute executive interview filmed at one office is a very different production from a two-minute brand film captured across several locations.',
      'In San Antonio, parking, loading access, location permissions, travel between locations, and venue requirements can also affect the schedule and budget.',
      'The best way to control costs is to define one clear business goal and capture as many useful assets as possible during the same production.',
      'Visit MediaBarProductions.com for more planning guidance or to build a project estimate.',
    ],
    faqQuestion: 'How is a video production budget determined?',
    faqHref: '/resources/video-production-faq#how-is-a-video-production-budget-determined',
    serviceLink: {
      label: 'Understand what drives video cost',
      href: '/pricing',
    },
    relatedLinks: [
      {
        label: 'Explore corporate video production',
        href: '/video-production/corporate',
      },
      {
        label: 'Build a project estimate',
        href: '/project-planner',
      },
    ],
    video: mediaBarAnswersVideos.corporateVideoCost,
  },
]

export function getMediaBarAnswer(slug: string) {
  return mediaBarAnswersEpisodes.find((episode) => episode.slug === slug)
}
