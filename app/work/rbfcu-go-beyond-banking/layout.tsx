import type { Metadata } from 'next'

const BASE = 'https://www.mediabarproductions.com'
const URL = `${BASE}/work/rbfcu-go-beyond-banking`
const OG_IMAGE = 'https://i.ytimg.com/vi/cQHqvEHFx2M/maxresdefault.jpg'
const TITLE = 'RBFCU Go Beyond Banking Case Study | Media Bar Productions'
const DESCRIPTION =
  'How Media Bar Productions produced and edited RBFCU’s five-spot “Go Beyond Banking” broadcast campaign across four Texas markets, earning 5M+ views.'
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
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
      author: { '@id': `${BASE}/#business` },
      creator: { '@id': `${BASE}/#business` },
      publisher: { '@id': `${BASE}/#business` },
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
