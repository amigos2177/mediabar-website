import type { Metadata } from 'next'

const BASE = 'https://www.mediabarproductions.com'
const URL = `${BASE}/work/rbfcu-go-beyond-banking`
const OG_IMAGE = 'https://i.ytimg.com/vi/cQHqvEHFx2M/maxresdefault.jpg'
const TITLE = 'RBFCU "Go Beyond Banking" Broadcast Campaign | Media Bar Productions'
const DESCRIPTION =
  'See how San Antonio video production company Media Bar Productions produced, edited, and co-wrote a five-spot broadcast commercial campaign for RBFCU that aired across San Antonio, Austin, Corpus Christi, and Dallas and earned 5M+ views.'
const OG_SOCIAL_DESC =
  'A five-spot Texas broadcast campaign produced and edited by Media Bar Productions. 4 markets, 5M+ views.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'Media Bar Productions' }],
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'article',
    siteName: 'Media Bar Productions',
    title: "RBFCU 'Go Beyond Banking' Broadcast Campaign | Media Bar Productions",
    description: OG_SOCIAL_DESC,
    url: URL,
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1280,
        height: 720,
        alt: 'RBFCU Go Beyond Banking commercial by Media Bar Productions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "RBFCU 'Go Beyond Banking' Broadcast Campaign | Media Bar Productions",
    description: OG_SOCIAL_DESC,
    images: [OG_IMAGE],
  },
}

// Real YouTube publish dates (verified from each video's watch page) for VideoObject.uploadDate
const videos = [
  {
    name: 'We Go Beyond Banking',
    description:
      'The campaign’s flagship anthem spot that establishes the “Go Beyond Banking” promise and sets the visual and emotional tone for the entire library.',
    id: 'cQHqvEHFx2M',
    uploadDate: '2025-10-08',
  },
  {
    name: 'RBFCU Finances the Miles That Matter',
    description:
      "A story about the journeys a vehicle makes possible, positioning RBFCU's auto financing around the moments and memories it helps members reach.",
    id: 'M44en_QEBlQ',
    uploadDate: '2025-12-01',
  },
  {
    name: 'Generations of Trust at RBFCU',
    description:
      "A portrait of long-term membership, showing how families bank with RBFCU across generations and reinforcing trust as the brand's core equity.",
    id: 'AT59Z4LIu8Y',
    uploadDate: '2025-10-08',
  },
  {
    name: 'Experience More with Every Purchase',
    description:
      "An everyday-value story built around RBFCU's cards and rewards, turning routine purchases into a benefit members feel.",
    id: 'hpHKrVXhWnY',
    uploadDate: '2025-12-01',
  },
  {
    name: 'From First Steps to Forever Memories',
    description:
      'A milestone-driven narrative following members through life’s biggest moments, the emotional heart of the “Go Beyond” promise.',
    id: 'CuJdvSJ9bAE',
    uploadDate: '2025-12-01',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: `${BASE}/`,
      name: 'Media Bar Productions',
      publisher: { '@id': `${BASE}/#org` },
    },
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${BASE}/#org`,
      name: 'Media Bar Productions',
      alternateName: 'Media Bar Productions, LLC',
      url: `${BASE}/`,
      logo: `${BASE}/images/mediabar-logo.png`,
      image: `${BASE}/images/mediabar-logo.png`,
      slogan: 'Your Vision Served Daily',
      telephone: '+1-210-279-9442',
      email: 'contact@mediabarproductions.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Antonio',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'San Antonio' },
        { '@type': 'City', name: 'Austin' },
        { '@type': 'City', name: 'Corpus Christi' },
        { '@type': 'City', name: 'Dallas' },
        { '@type': 'State', name: 'Texas' },
      ],
      knowsAbout: [
        'Broadcast commercial production',
        'TV commercials',
        'Video production',
        'Brand storytelling',
        'Post-production',
        'Cinematography',
      ],
      award: ['3 Emmy Awards', '15 Telly Awards'],
      sameAs: [
        'https://www.youtube.com/@MediaBarProductions',
        'https://www.linkedin.com/company/media-bar-productions-llc/',
        'https://www.instagram.com/mediabarsanantonio',
        'https://facebook.com/mediabarproductions',
        'https://x.com/mediabarsa',
        'https://www.tiktok.com/@mediabarsa',
      ],
      description:
        'San Antonio video production company specializing in broadcast commercials and brand storytelling. 3 Emmy Awards, 15 Telly Awards.',
    },
    {
      '@type': 'WebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'RBFCU “Go Beyond Banking” Broadcast Campaign Case Study',
      isPartOf: { '@id': `${BASE}/#website` },
      primaryImageOfPage: OG_IMAGE,
      breadcrumb: { '@id': `${URL}#breadcrumb` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Our Work', item: `${BASE}/work` },
        { '@type': 'ListItem', position: 3, name: 'RBFCU Go Beyond Banking' },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${URL}#article`,
      headline: 'RBFCU “Go Beyond Banking”: A Five-Spot Broadcast Campaign Across Texas',
      description: DESCRIPTION,
      image: OG_IMAGE,
      inLanguage: 'en-US',
      author: { '@id': `${BASE}/#org` },
      creator: { '@id': `${BASE}/#org` },
      publisher: { '@id': `${BASE}/#org` },
      mainEntityOfPage: { '@id': `${URL}#webpage` },
      keywords: [
        'RBFCU',
        'Go Beyond Banking',
        'broadcast commercial production',
        'San Antonio video production',
        'Texas TV commercials',
        'credit union advertising',
        'Media Bar Productions',
      ],
      about: [
        { '@type': 'Organization', name: 'RBFCU (Randolph-Brooks Federal Credit Union)' },
        { '@type': 'Thing', name: 'Broadcast commercial production' },
      ],
      video: videos.map((v) => ({
        '@type': 'VideoObject',
        name: v.name,
        description: v.description,
        thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
        uploadDate: v.uploadDate,
        embedUrl: `https://www.youtube.com/embed/${v.id}`,
        contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
        publisher: { '@id': `${BASE}/#org` },
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who produced RBFCU’s “Go Beyond Banking” commercial campaign?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Media Bar Productions, an Emmy-winning video production company based in San Antonio, Texas, produced and edited the “Go Beyond Banking” campaign for RBFCU and co-wrote two of the five spots.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where did the RBFCU “Go Beyond Banking” campaign air?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The commercials aired on broadcast television across four major Texas markets, San Antonio, Austin, Corpus Christi, and Dallas, and are also published on YouTube.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many commercials were in the campaign, and how many views did it earn?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The campaign included five broadcast spots that together have earned more than five million views on YouTube.',
          },
        },
        {
          '@type': 'Question',
          name: 'What did Media Bar Productions handle on the RBFCU campaign?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Media Bar Productions handled full production and post-production, including directing, cinematography, editing, color, and final broadcast delivery, and wrote two of the five commercials.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is RBFCU?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RBFCU (Randolph-Brooks Federal Credit Union) is one of the largest credit unions in Texas, serving more than a million members.',
          },
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  )
}
