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
  localCommercialCost: {
    youtubeId: '2NlcT2I0kFc',
    title: 'How Much Should a Local TV Commercial Cost in Texas?',
    description:
      'A local television commercial should be priced around its business goal, creative concept, production scope, usage rights, post-production, deliverables, and placement plan.',
    uploadDate: '2026-07-28T22:58:24-07:00',
    duration: 'PT1M16S',
    thumbnailPath: '/images/media-bar-answers/local-tv-commercial-cost-texas.png',
    thumbnailUrl:
      'https://www.mediabarproductions.com/images/media-bar-answers/local-tv-commercial-cost-texas.png',
  },
  healthcareVideoPlanning: {
    youtubeId: 'ixXpNKURzGk',
    title: 'What Should You Plan Before Filming a Healthcare Video?',
    description:
      'Healthcare video production requires early planning for privacy, access, clinical operations, approvals, and the information that could appear on camera.',
    uploadDate: '2026-07-27T08:33:56-07:00',
    duration: 'PT1M4S',
    thumbnailPath: '/images/media-bar-answers/healthcare-video-planning.png',
    thumbnailUrl:
      'https://www.mediabarproductions.com/images/media-bar-answers/healthcare-video-planning.png',
  },
  productionEstimate: {
    youtubeId: '1UcrG1fepnQ',
    title: 'What Does a Video Production Company Need for an Estimate?',
    description:
      'An accurate video production estimate starts with the business goal, audience, filming plan, schedule, deliverables, and approval process - not the finished runtime alone.',
    uploadDate: '2026-07-23T16:06:22-07:00',
    duration: 'PT56S',
    thumbnailPath: '/images/media-bar-answers/what-a-production-company-needs-for-an-estimate.png',
    thumbnailUrl:
      'https://www.mediabarproductions.com/images/media-bar-answers/what-a-production-company-needs-for-an-estimate.png',
  },
  executiveInterviewsOneDay: {
    youtubeId: 'WJb_tAKw0zY',
    title: 'Can You Film Three Executive Interviews in One Day?',
    description:
      'Three executive interviews can usually fit into one filming day when the location, setup, schedule, and supporting footage are planned carefully.',
    uploadDate: '2026-07-23T16:10:55-07:00',
    duration: 'PT1M5S',
    thumbnailPath: '/images/media-bar-answers/three-executive-interviews-in-one-day.png',
    thumbnailUrl:
      'https://www.mediabarproductions.com/images/media-bar-answers/three-executive-interviews-in-one-day.png',
  },
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
  {
    episode: '03',
    slug: 'what-a-production-company-needs-for-an-estimate',
    category: 'Pre-Production',
    shortTitle: 'What a production company needs for an estimate',
    directAnswer:
      'An accurate estimate starts with the business goal, audience, filming plan, schedule, deliverables, approval process, and budget context. Finished runtime alone is not enough to define the work.',
    takeaways: [
      'Start with the business goal, audience, and where the finished video will be used.',
      'Share the location, preferred production date, people or activities to capture, deadline, and complete deliverable list.',
      'Useful estimates explain their assumptions and connect the investment to the work required.',
    ],
    transcript: [
      "I'm Ruben Garcia, founder of Media Bar Productions. This is my digital avatar, but this advice comes directly from years of building real production estimates.",
      'What does a production company need before it can provide an accurate estimate?',
      'Start with the business goal, the audience, and where the finished video will be used.',
      'Then provide the filming location, preferred production date, number of interviews, scenes or activities you want captured, final deadline, and every deliverable you expect.',
      'A two-minute video alone is not enough information.',
      'Two videos with the same runtime can require completely different crews, schedules, equipment, and editing.',
      'It also helps to share examples you like, photos of the location, your approval process, and a preliminary budget range.',
      'A useful estimate should explain its assumptions and connect the investment to the work required.',
      'Visit the Media Bar Project Planner to organize your scope.',
    ],
    faqQuestion: 'What should a video creative brief include?',
    faqHref: '/resources/video-production-faq#what-should-a-video-creative-brief-include',
    serviceLink: {
      label: 'Understand what drives video cost',
      href: '/pricing',
    },
    relatedLinks: [
      {
        label: 'See how Media Bar projects move from planning to delivery',
        href: '/how-we-work',
      },
      {
        label: 'Organize an active project',
        href: '/project-planner',
      },
    ],
    video: mediaBarAnswersVideos.productionEstimate,
  },
  {
    episode: '04',
    slug: 'three-executive-interviews-in-one-day',
    category: 'Production Day',
    shortTitle: 'Three executive interviews in one day',
    directAnswer:
      'Usually yes, when everyone films at one location and the schedule protects setup, executive preparation, transitions, and supporting footage. Multiple locations or major setup changes may justify a second day.',
    takeaways: [
      'Three executive interviews can usually fit in one day when the location and setup stay consistent.',
      'Reserve time for loading in, lighting and audio checks, executive preparation, transitions, and supporting footage.',
      'Multiple locations, teleprompters, extensive scripting, or major lighting changes may make a second filming day the better decision.',
    ],
    transcript: [
      "I'm Ruben Garcia, founder of Media Bar Productions. This is my digital avatar, but the guidance comes directly from my production experience.",
      'Can you film three executive interviews in one day?',
      'Usually yes, if the production is carefully planned and everyone is filming at the same location.',
      'We typically need time to load in, test lighting and audio, prepare each executive, and capture supporting footage.',
      'The biggest risks are late schedules, noisy offices, room changes, and trying to create a completely different setup for every interview.',
      'A practical schedule gives each executive a reserved interview window, includes transition time, and protects part of the day for workplace footage and establishing shots.',
      'If the interviews require multiple locations, teleprompters, extensive scripting, or major lighting changes, a second filming day may be the better decision.',
      "Good preparation protects both the executive's time and the quality of the final story.",
      'Visit MediaBarProductions.com for our interview planning guide.',
    ],
    faqQuestion: 'How long does a video production day take?',
    faqHref: '/resources/video-production-faq#how-long-is-a-video-production-day',
    serviceLink: {
      label: 'Explore interview video production',
      href: '/video-production/interview',
    },
    relatedLinks: [
      {
        label: 'Prepare employees, executives, or customers for an interview',
        href: '/resources/video-production-faq#how-to-prepare-people-for-a-video-interview',
      },
      {
        label: 'Plan an interview project',
        href: '/project-planner',
      },
    ],
    video: mediaBarAnswersVideos.executiveInterviewsOneDay,
  },
  {
    episode: '05',
    slug: 'healthcare-video-planning',
    category: 'Healthcare',
    shortTitle: 'Healthcare video planning',
    directAnswer:
      "Healthcare filming should begin with the organization's privacy, compliance, operational, access, and review requirements. The production team can identify visible risks and plan around approved boundaries, but the organization remains responsible for compliance decisions.",
    takeaways: [
      'Identify visible patient information and confidential material before the crew arrives.',
      'Confirm access, releases, infection control, logistics, power, and operational constraints.',
      'Use an approved shot list and one internal contact to resolve questions quickly.',
    ],
    transcript: [
      "I'm Ruben Garcia, founder of Media Bar Productions. This is my digital avatar, but the guidance comes from our experience filming in healthcare environments.",
      'Healthcare video production requires more preparation than a typical office shoot.',
      'Before filming, identify where patient information, medical records, computer screens, badges, whiteboards, or confidential conversations could appear.',
      'Your legal, privacy, or compliance team should decide what is permissible. The production team can help identify visible risks, but it should not make compliance decisions for the organization.',
      'Confirm approved filming areas, appearance releases, infection control requirements, parking, loading access, power, and whether normal clinical operations will continue during production.',
      'Interview statements about treatments, outcomes, technology, or medical benefits should also be reviewed before filming whenever possible.',
      'The best approach is to create a controlled environment, use an approved shot list, and assign one internal contact who can resolve questions quickly.',
      'Visit MediaBarProductions.com for more healthcare video planning guidance.',
    ],
    faqQuestion: 'How should we plan filming in a medical, industrial, or controlled-access location?',
    faqHref: '/resources/video-production-faq#how-to-plan-video-in-medical-industrial-or-controlled-locations',
    serviceLink: {
      label: 'Explore medical video production',
      href: '/video-production/medical',
    },
    relatedLinks: [
      {
        label: 'Read the healthcare video planning guide',
        href: '/blog/healthcare-video-production-san-antonio',
      },
      {
        label: 'Plan a healthcare video project',
        href: '/project-planner',
      },
    ],
    video: mediaBarAnswersVideos.healthcareVideoPlanning,
  },
  {
    episode: '06',
    slug: 'local-tv-commercial-cost-texas',
    category: 'Commercials',
    shortTitle: 'Local TV commercial cost in Texas',
    directAnswer:
      'There is no one-size-fits-all local television commercial price. A useful estimate connects the business goal to the concept, production complexity, talent and usage rights, post-production, required platform versions, and advertising plan.',
    takeaways: [
      'A simple one-location concept and a scripted multi-scene campaign require different production scopes.',
      'Talent usage rights, post-production, approvals, and platform versions affect the estimate.',
      'Commercial production and media buying are separate scopes even when they are planned together.',
    ],
    transcript: [
      "Hi, I am Ruben Garcia's digital avatar. The guidance in this video comes directly from Media Bar Productions.",
      'How much should a local television commercial cost in Texas?',
      'There is no one-size-fits-all price because every commercial should be scoped around the business goal. A straightforward concept with one location is a different production from a scripted campaign with multiple scenes, actors, and shoot days.',
      'The quote is shaped by the creative concept, shoot complexity, crew and equipment, location access, talent, and the usage rights required for where and how long the commercial will run.',
      'Post-production matters too. That can include editing, music, sound mixing, color, graphics, captions, approvals, and revision rounds.',
      'We also plan for every deliverable you need, including broadcast masters, connected TV, streaming, social media, and other platform versions.',
      'One important distinction: production creates the commercial. Media buying purchases and schedules the advertising placement. They are separate scopes even when they are planned together.',
      'If you are planning a commercial, share your goals, locations, talent needs, deliverables, and placement plan in the Media Bar project planner. We will use that scope to prepare a tailored estimate for your project.',
    ],
    faqQuestion: 'How much should a local TV commercial cost in Texas?',
    faqHref: '/resources/video-production-faq#how-much-should-local-tv-commercial-cost-in-texas',
    serviceLink: {
      label: 'Explore commercial video production',
      href: '/video-production/commercials',
    },
    relatedLinks: [
      {
        label: 'Review the RBFCU commercial campaign case study',
        href: '/work/rbfcu-go-beyond-banking',
      },
      {
        label: 'Plan a commercial project',
        href: '/project-planner',
      },
    ],
    video: mediaBarAnswersVideos.localCommercialCost,
  },
]

export function getMediaBarAnswer(slug: string) {
  return mediaBarAnswersEpisodes.find((episode) => episode.slug === slug)
}
