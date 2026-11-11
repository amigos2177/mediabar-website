export type WorkProject = {
  id: string
  slug: string
  title: string
  category: string
  year: string
  serviceHref: string
  selectedVideos?: { id: string; title: string; thumbnail: string; runtime: string; aspectRatio?: string }[]
  seoTitle?: string
  cardTitle?: string
  listOnWork?: boolean
  collection?: string
  caseStudyTitle?: string
  aspectRatio?: string
  updated?: string
  caseStudyHref?: string
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
    collection: 'atma-energy',
    updated: '2026-11-11',
    selectedVideos: [
    {
        "id": "1180537417",
        "title": "ATMA Energy | Gary & Genna Davis",
        "thumbnail": "https://i.vimeocdn.com/video/2142669207-fd9ae6f7d4b66d8b3dc005e7b04b2268b46530663faf6bef5c46dade6facd328-d_1280?region=us",
        "runtime": "2:15"
    },
    {
        "id": "1180537309",
        "title": "ATMA Energy | Curtis Prill",
        "thumbnail": "https://i.vimeocdn.com/video/2142668980-e50f00b191602d401cb4abd5fdb6413a7a3f2e5ca827ad3e297f774f249ad185-d_1280?region=us",
        "runtime": "2:24"
    },
    {
        "id": "1180537502",
        "title": "ATMA Energy | Kenneth Graves",
        "thumbnail": "https://i.vimeocdn.com/video/2142669279-d0caaad4332878b86f307f0d2812c613d643d04f3f797d144db3d6f3fb2ed636-d_1280?region=us",
        "runtime": "2:04"
    },
    {
        "id": "1180537358",
        "title": "ATMA Energy | Dave Searcy",
        "thumbnail": "https://i.vimeocdn.com/video/2142669161-55bb69dca80d9962fb00e55fe1ec271090c341e36e04d3d3f9bb48e6d99ae244-d_1280?region=us",
        "runtime": "1:56"
    },
    {
        "id": "1180537228",
        "title": "ATMA Energy | Brand Marketing",
        "thumbnail": "https://i.vimeocdn.com/video/2142669056-a1d485c3059e4da94fdb30c1319e76505c475c83d1c709c6316e84b1b52d94c8-d_1280?region=us",
        "runtime": "2:38"
    }
],
    slug: 'san-antonio-production-stories',
    title: 'San Antonio Production Stories',
    category: 'Corporate',
    year: '2026',
    serviceHref: '/video-production/corporate',
    feature: true,
  },
  {
    "id": "1245953306",
    "slug": "rbfcu-keldon-johnson-music",
    "seoTitle": "RBFCU Keldon Johnson | Music | Media Bar",
    "cardTitle": "RBFCU Keldon Johnson",
    "title": "Keldon Johnson | Music",
    "category": "Commercials",
    "year": "2026",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11",
    "collection": "rbfcu-keldon-johnson",
    "caseStudyHref": "/work/rbfcu-keldon-johnson",
    "caseStudyTitle": "RBFCU Keldon Johnson",
    "projectNotes": {
      "heading": "About the commercial",
      "paragraphs": [
        "A :30 RBFCU broadcast commercial, Keldon Johnson | Music, produced by Media Bar Productions in San Antonio."
      ]
    },
    "selectedVideos": [
      {
        "id": "1245953284",
        "title": "Keldon Johnson | PSA 01",
        "thumbnail": "https://i.vimeocdn.com/video/2225225019-3297d43b6f6b83d37f17ae202e3da039478590de93a318a78820ffc9cf6cafcc-d_1280?region=us",
        "runtime": "0:30"
      },
      {
        "id": "1245953309",
        "title": "Keldon Johnson | PSA 02",
        "thumbnail": "https://i.vimeocdn.com/video/2225225045-a7e2785a87d68cc3e4b8e5a23f3127dca7955ad949b4e01e23daf5c8dc144961-d_1280?region=us",
        "runtime": "0:30"
      }
    ]
  },
  {
    "id": "1245953284",
    "slug": "rbfcu-keldon-johnson-psa-01",
    "seoTitle": "RBFCU Keldon Johnson | PSA 01 | Media Bar",
    "title": "Keldon Johnson | PSA 01",
    "category": "Commercials",
    "year": "2026",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11",
    "collection": "rbfcu-keldon-johnson",
    "listOnWork": false,
    "caseStudyHref": "/work/rbfcu-keldon-johnson",
    "caseStudyTitle": "RBFCU Keldon Johnson",
    "projectNotes": {
      "heading": "About the commercial",
      "paragraphs": [
        "A :30 RBFCU broadcast commercial, Keldon Johnson | PSA 01, produced by Media Bar Productions in San Antonio."
      ]
    }
  },
  {
    "id": "1245953309",
    "slug": "rbfcu-keldon-johnson-psa-02",
    "seoTitle": "RBFCU Keldon Johnson | PSA 02 | Media Bar",
    "title": "Keldon Johnson | PSA 02",
    "category": "Commercials",
    "year": "2026",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11",
    "collection": "rbfcu-keldon-johnson",
    "listOnWork": false,
    "caseStudyHref": "/work/rbfcu-keldon-johnson",
    "caseStudyTitle": "RBFCU Keldon Johnson",
    "projectNotes": {
      "heading": "About the commercial",
      "paragraphs": [
        "A :30 RBFCU broadcast commercial, Keldon Johnson | PSA 02, produced by Media Bar Productions in San Antonio."
      ]
    }
  },
  {
    "id": "1245952619",
    "slug": "rbfcu-resting-bank-face",
    "seoTitle": "RBFCU Resting Bank Face | Media Bar",
    "cardTitle": "RBFCU Resting Bank Face",
    "title": "Resting Bank Face",
    "category": "Commercials",
    "year": "2026",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11",
    "collection": "rbfcu-resting-bank-face",
    "caseStudyHref": "/work/rbfcu-resting-bank-face",
    "caseStudyTitle": "RBFCU Resting Bank Face",
    "projectNotes": {
      "heading": "About the commercial",
      "paragraphs": [
        "A :30 RBFCU broadcast commercial, Resting Bank Face, produced by Media Bar Productions in San Antonio."
      ]
    },
    "selectedVideos": [
      {
        "id": "1245952591",
        "title": "Doctor",
        "thumbnail": "https://i.vimeocdn.com/video/2225224249-5c98ea5ed15f09716f84045aadc6a679a2068463d267d004d78f713ec5612c3b-d_1280?region=us",
        "runtime": "0:30"
      },
      {
        "id": "1245952590",
        "title": "Intervention",
        "thumbnail": "https://i.vimeocdn.com/video/2225224344-500838aa9b7d7f78d5836f8395ced2b56f1c909d0ad299f37875382853650dd7-d_1280?region=us",
        "runtime": "0:30"
      },
      {
        "id": "1245952594",
        "title": "Interrogation",
        "thumbnail": "https://i.vimeocdn.com/video/2225224275-02f4161ae07753bd8a9ebf5d172d98560ed92dc96e1a567e194722a02cc415d3-d_1280?region=us",
        "runtime": "0:30"
      }
    ]
  },
  {
    "id": "1245952591",
    "slug": "rbfcu-resting-bank-face-doctor",
    "seoTitle": "RBFCU Resting Bank Face | Doctor | Media Bar",
    "title": "Doctor",
    "category": "Commercials",
    "year": "2026",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11",
    "collection": "rbfcu-resting-bank-face",
    "listOnWork": false,
    "caseStudyHref": "/work/rbfcu-resting-bank-face",
    "caseStudyTitle": "RBFCU Resting Bank Face",
    "projectNotes": {
      "heading": "About the commercial",
      "paragraphs": [
        "A :30 RBFCU broadcast commercial, Doctor, produced by Media Bar Productions in San Antonio."
      ]
    }
  },
  {
    "id": "1245952590",
    "slug": "rbfcu-resting-bank-face-intervention",
    "seoTitle": "RBFCU Resting Bank Face | Intervention | Media Bar",
    "title": "Intervention",
    "category": "Commercials",
    "year": "2026",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11",
    "collection": "rbfcu-resting-bank-face",
    "listOnWork": false,
    "caseStudyHref": "/work/rbfcu-resting-bank-face",
    "caseStudyTitle": "RBFCU Resting Bank Face",
    "projectNotes": {
      "heading": "About the commercial",
      "paragraphs": [
        "A :30 RBFCU broadcast commercial, Intervention, produced by Media Bar Productions in San Antonio."
      ]
    }
  },
  {
    "id": "1245952594",
    "slug": "rbfcu-resting-bank-face-interrogation",
    "seoTitle": "RBFCU Resting Bank Face | Interrogation | Media Bar",
    "title": "Interrogation",
    "category": "Commercials",
    "year": "2026",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11",
    "collection": "rbfcu-resting-bank-face",
    "listOnWork": false,
    "caseStudyHref": "/work/rbfcu-resting-bank-face",
    "caseStudyTitle": "RBFCU Resting Bank Face",
    "projectNotes": {
      "heading": "About the commercial",
      "paragraphs": [
        "A :30 RBFCU broadcast commercial, Interrogation, produced by Media Bar Productions in San Antonio."
      ]
    }
  },
  {
    "id": "1206167230",
    "slug": "world-car-hyundai-san-antonio",
    "cardTitle": "World Car Commercials",
    "title": "World Car | Hyundai San Antonio",
    "category": "Commercials",
    "year": "2026",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11",
    "collection": "world-car",
    "selectedVideos": [
      {
        "id": "1206167202",
        "title": "World Car | Kia San Antonio",
        "thumbnail": "https://i.vimeocdn.com/video/2174941342-0efa8bec48fd2c926955032ee5b4f45e2c9b4f6073d2c2e2c96aab4609f92ec5-d_1280?region=us",
        "runtime": "0:30"
      }
    ]
  },
  {
    "id": "1206167202",
    "slug": "world-car-kia-san-antonio",
    "title": "World Car | Kia San Antonio",
    "category": "Commercials",
    "year": "2026",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11",
    "collection": "world-car",
    "listOnWork": false
  },
  {
    "id": "945888440",
    "slug": "knorr-not-your-knorr-dinary-drive-thru",
    "seoTitle": "Knorr: Not Your Knorr-Dinary Drive-Thru | Media Bar",
    "title": "Knorr: Not Your Knorr-Dinary Drive-Thru",
    "category": "Corporate",
    "year": "2023",
    "serviceHref": "/video-production/corporate",
    "updated": "2026-11-11"
  },
  {
    "id": "945888116",
    "slug": "unilever-heb-final-four-legacy",
    "title": "Unilever & H-E-B Final Four Legacy Project",
    "category": "Events",
    "year": "2023",
    "serviceHref": "/video-production/events",
    "updated": "2026-11-11",
    "collection": "unilever-heb",
    "listOnWork": false
  },
  {
    "id": "1180537417",
    "slug": "atma-energy-gary-genna-davis",
    "title": "ATMA Energy | Gary & Genna Davis",
    "category": "Corporate",
    "year": "2025",
    "serviceHref": "/video-production/corporate",
    "updated": "2026-11-11",
    "collection": "atma-energy",
    "listOnWork": false
  },
  {
    "id": "1180537309",
    "slug": "atma-energy-curtis-prill",
    "title": "ATMA Energy | Curtis Prill",
    "category": "Corporate",
    "year": "2025",
    "serviceHref": "/video-production/corporate",
    "updated": "2026-11-11",
    "collection": "atma-energy",
    "listOnWork": false
  },
  {
    "id": "1180537502",
    "slug": "atma-energy-kenneth-graves",
    "title": "ATMA Energy | Kenneth Graves",
    "category": "Corporate",
    "year": "2025",
    "serviceHref": "/video-production/corporate",
    "updated": "2026-11-11",
    "collection": "atma-energy",
    "listOnWork": false
  },
  {
    "id": "1180537358",
    "slug": "atma-energy-dave-searcy",
    "title": "ATMA Energy | Dave Searcy",
    "category": "Corporate",
    "year": "2025",
    "serviceHref": "/video-production/corporate",
    "updated": "2026-11-11",
    "collection": "atma-energy",
    "listOnWork": false
  },
  {
    "id": "1180537228",
    "slug": "atma-energy-brand-marketing",
    "title": "ATMA Energy | Brand Marketing",
    "category": "Corporate",
    "year": "2025",
    "serviceHref": "/video-production/corporate",
    "updated": "2026-11-11",
    "collection": "atma-energy",
    "listOnWork": false
  },
  {
    "id": "1180540628",
    "slug": "upper-deck-space-jam-30th",
    "title": "Upper Deck Space Jam 30th",
    "category": "Motion",
    "year": "2026",
    "serviceHref": "/video-production/motion-graphics",
    "updated": "2026-11-11",
    "collection": "upper-deck",
    "listOnWork": false,
    "aspectRatio": "1 / 1",
    "caseStudyHref": "/work/upper-deck-video-production",
    "caseStudyTitle": "Upper Deck"
  },
  {
    "id": "1180540381",
    "slug": "caroline-flowers-specialty-care",
    "title": "Caroline Flowers Specialty Care",
    "category": "Medical",
    "year": "2025",
    "serviceHref": "/video-production/medical",
    "updated": "2026-11-11"
  },
  {
    "id": "298056449",
    "slug": "kiolbassa-commercial",
    "title": "Kiolbassa",
    "category": "Food",
    "year": "2018",
    "serviceHref": "/video-production/food",
    "updated": "2026-11-11"
  },
  {
    "id": "1180526566",
    "slug": "showroom-windows-commercial",
    "title": "Showroom Windows",
    "category": "Commercials",
    "year": "",
    "serviceHref": "/video-production/commercials",
    "updated": "2026-11-11"
  },
  {
    "id": "803316101",
    "slug": "upper-deck-marvel-spider-verse",
    "title": "Marvel Spider-Verse",
    "category": "Motion",
    "year": "2023",
    "serviceHref": "/video-production/motion-graphics",
    "updated": "2026-11-11",
    "collection": "upper-deck",
    "listOnWork": false,
    "caseStudyHref": "/work/upper-deck-video-production",
    "caseStudyTitle": "Upper Deck"
  },
  {
    "id": "1056209144",
    "slug": "the-guild-collective-about-us",
    "title": "The Guild Collective",
    "category": "Corporate",
    "year": "2024",
    "serviceHref": "/video-production/corporate",
    "updated": "2026-11-11"
  },
  {
    "id": "387733666",
    "slug": "continental-tire",
    "title": "Continental Tire",
    "category": "Corporate",
    "year": "",
    "serviceHref": "/video-production/corporate",
    "updated": "2026-11-11"
  },
  {
    "id": "945894891",
    "slug": "ypo-cim-summit",
    "title": "YPO CIM Summit",
    "category": "Events",
    "year": "2023",
    "serviceHref": "/video-production/events",
    "updated": "2026-11-11"
  },
  {
    id: '1138375371',
    slug: 'rbfcu-coyote-commercial',
    projectNotes: {
      heading: 'About This Film',
      paragraphs: ["Media Bar Productions handled this RBFCU campaign from pre-production through post-production, creating commercials featuring the Coyote to promote RBFCU’s partnership with the San Antonio Spurs. The campaign included 7-, 10-, 15-, and 30-second versions for television, digital, and social media."],
    },
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
    projectNotes: {
      heading: 'About This Film',
      paragraphs: ["Media Bar Productions handled the full production of this 30-second advertisement for Boot Ranch. Combining real estate marketing with commercial storytelling, the film showcases the golf community and its lifestyle, inviting potential buyers to learn more."],
    },
    title: 'Boot Ranch Golf Commercial',
    category: 'Commercials',
    year: '2026',
    serviceHref: '/video-production/commercials',
    feature: true,
  },
  {
    id: '1180540640',
    slug: 'fleer-brilliants-superman',
    caseStudyHref: '/work/upper-deck-video-production',
    caseStudyTitle: 'Upper Deck',
    collection: 'upper-deck',
    updated: '2026-11-11',
    projectNotes: {
      heading: 'An Ongoing Production Partnership With Upper Deck',
      paragraphs: [
        'Media Bar Productions has created more than 50 videos for Upper Deck. This selection brings together motion graphics work featuring sports, comics, and entertainment properties.',
        'Watch the Superman film above, then explore more selected examples below.',
      ],
    },
    selectedVideos: [
      {
            "id": "849834914",
            "title": "Michael Jordan 25th Anniversary",
            "thumbnail": "https://i.vimeocdn.com/video/1704003539-6f76cbc7d627b6d7200b37bbb327b4d558dd677d2e2c677976a38e550bb0fe32-d_1280?region=us",
            "runtime": "0:30"
      },
      {
            "id": "946767150",
            "title": "Wayne Gretzky 40th Anniversary",
            "thumbnail": "https://i.vimeocdn.com/video/1853005885-843945746d1a3560513cbf9cbc335305ae40017e2eb81e1f7a4c89f3a52a4e09-d_1280?region=us",
            "runtime": "0:30"
      },
      {
            "id": "557693922",
            "title": "Marvel Ages",
            "thumbnail": "https://i.vimeocdn.com/video/1152658070-2b2de48550f5d18de447ff8890bb27beb601bd78a68fc3fe2ea7a40b8bf9c7a6-d_1280?region=us",
            "runtime": "1:03"
      },
      {
            "id": "803317661",
            "title": "Legendary James Bond",
            "thumbnail": "https://i.vimeocdn.com/video/1852507309-2a7f2a4cff07654961933542d24d8a872811dbbeb2e20293631df356f09085fb-d_1280?region=us",
            "runtime": "1:36"
      },
{
      "id": "1180540628",
      "title": "Upper Deck Space Jam 30th",
      "thumbnail": "https://i.vimeocdn.com/video/2143089232-5d280d518e80dc90213cc3715c53b999e20e48858901cba0dad7fcdbc5463784-d_1280?region=us",
      "runtime": "0:30",
      "aspectRatio": "1 / 1"
},
{
      "id": "803316101",
      "title": "Marvel Spider-Verse",
      "thumbnail": "https://i.vimeocdn.com/video/1621573880-aa957c59195d0b005aa64e79b152230dc5bba458b6a70a1a5a1d70cb7909f316-d_1280?region=us",
      "runtime": "1:32"
}
],
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
    collection: 'unilever-heb',
    updated: '2026-11-11',
    selectedVideos: [
    {
        "id": "945888116",
        "title": "Unilever & H-E-B Final Four Legacy Project",
        "thumbnail": "https://i.vimeocdn.com/video/1852500125-d8e0226127a63b2a3fae9bfc6cf740b9cfa6bc0aac241f88bc9471bc1dec0179-d_1280?region=us",
        "runtime": "3:33"
    }
],
    slug: 'texas-recycles-day',
    projectNotes: {
      heading: 'About This Film',
      paragraphs: ["Produced for Unilever, this Texas Recycles Day film showcases the company’s involvement in the event and highlights the community’s recycling efforts. Media Bar Productions handled the project from pre-production through filming and post-production, combining event coverage with interviews to tell the story."],
    },
    title: 'Texas Recycles Day',
    category: 'Events',
    year: '2024',
    serviceHref: '/video-production/events',
  },
  {
    id: '697231773',
    slug: 'tostadas-de-chicharron',
    projectNotes: {
      heading: 'About This Film',
      paragraphs: ["Produced for La Costeña, this Tostadas de Chicharron recipe film shows how the brand’s ingredients can come together to create a complete meal. Media Bar Productions handled the project from pre-production through filming and post-production."],
    },
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

export function getWorkCollectionTitle(project: WorkProject) {
  if (project.caseStudyTitle) return project.caseStudyTitle
  if (project.collection === 'atma-energy') return 'ATMA Energy'
  if (project.collection === 'unilever-heb') return 'Unilever & H-E-B Community Films'
  if (project.collection === 'world-car') return 'World Car'
  return project.title
}
