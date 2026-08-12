// components/JsonLd.tsx
// ============================================================
// Reusable JSON-LD structured data for Media Bar Productions
// Drop this file into /components/ and import where needed.
//
// Usage in any layout.tsx or page.tsx (Server Component):
//   import { LocalBusinessJsonLd, FAQPageJsonLd, ... } from '@/components/JsonLd'
//   return <><LocalBusinessJsonLd />{children}</>
// ============================================================

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}

const BUSINESS_ID = 'https://www.mediabarproductions.com/#business'
const WEBSITE_ID = 'https://www.mediabarproductions.com/#website'
const BASE_URL = 'https://www.mediabarproductions.com'

const serviceCatalog = [
  ['Corporate Video Production', '/video-production/corporate'],
  ['Commercial Video Production', '/video-production/commercials'],
  ['Event and Conference Video Production', '/video-production/events'],
  ['Interview Video Production', '/video-production/interview'],
  ['Medical and Healthcare Video Production', '/video-production/medical'],
  ['Aerial and Drone Video Production', '/video-production/aerial'],
  ['Motion Graphics and Animation', '/video-production/motion-graphics'],
  ['Live Streaming and Webcasting', '/video-production/live-streaming'],
  ['Post-Production and Video Editing', '/video-production/post-production'],
  ['Food and Beverage Video Production', '/video-production/food'],
  ['Real Estate Video Production', '/video-production/real-estate'],
] as const

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${BASE_URL}/`,
    name: 'Media Bar Productions',
    description:
      'Official website of Media Bar Productions, a San Antonio video production company serving organizations across Texas.',
    inLanguage: 'en-US',
    publisher: {
      '@id': BUSINESS_ID,
    },
    publishingPrinciples: `${BASE_URL}/about/editorial-policy`,
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 1. LocalBusiness - Homepage, About, Contact
// ============================================================
export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: 'Media Bar Productions',
    legalName: 'Media Bar Productions, LLC',
    url: 'https://www.mediabarproductions.com',
    logo: 'https://www.mediabarproductions.com/images/mediabar-logo.png',
    image: 'https://www.mediabarproductions.com/images/media-library/media-bar-team-photo.jpg',
    description:
      'Award-winning video production company founded in San Antonio in 2011. The team has earned 3 Emmy Awards and 15 Telly Awards while producing corporate, commercial, and event video across Texas.',
    telephone: '+1-210-279-9442',
    email: 'contact@mediabarproductions.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+1-210-279-9442',
      email: 'contact@mediabarproductions.com',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8610 N New Braunfels Ave, Suite 704',
      addressLocality: 'San Antonio',
      addressRegion: 'TX',
      postalCode: '78217',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.5097,
      longitude: -98.4560,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$$',
    foundingDate: '2011',
    founder: {
      '@id': 'https://www.mediabarproductions.com/about#founder',
    },
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 10 },
    areaServed: [
      { '@type': 'City', name: 'San Antonio', addressRegion: 'TX' },
      { '@type': 'City', name: 'Austin', addressRegion: 'TX' },
      { '@type': 'City', name: 'Dallas', addressRegion: 'TX' },
      { '@type': 'City', name: 'Houston', addressRegion: 'TX' },
      { '@type': 'State', name: 'Texas' },
    ],
    sameAs: [
      'https://www.youtube.com/@MediaBarProductions',
      'https://www.linkedin.com/company/media-bar-productions-llc/',
      'https://www.instagram.com/mediabarsanantonio',
      'https://facebook.com/mediabarproductions',
      'https://x.com/mediabarsa',
      'https://www.tiktok.com/@mediabarsa',
    ],
    award: [
      '3 Lone Star Emmy Awards from NATAS',
      '15 Telly Awards',
    ],
    knowsAbout: [
      'Corporate Video Production',
      'TV Commercial Production',
      'Event Video Production',
      'Live Streaming',
      'Aerial Drone Video',
      'Motion Graphics',
      'Medical Video Production',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'The Creative Agenda, LLC',
    },
    publishingPrinciples: `${BASE_URL}/about/editorial-policy`,
    subjectOf: [
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/about/awards#webpage`,
        url: `${BASE_URL}/about/awards`,
        name: 'Media Bar Productions Awards',
      },
      {
        '@type': 'Article',
        '@id': `${BASE_URL}/work/rbfcu-go-beyond-banking#article`,
        url: `${BASE_URL}/work/rbfcu-go-beyond-banking`,
        name: 'RBFCU Go Beyond Banking Campaign Case Study',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Video Production Services',
      itemListElement: serviceCatalog.map(([name, path]) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${BASE_URL}${path}#service`,
          name,
          url: `${BASE_URL}${path}`,
        },
      })),
    },
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 2. FAQPage - /faq page and any service page with inline FAQs
//    Pass your Q&A pairs as props.
// ============================================================
type FAQItem = { question: string; answer: string }

export function FAQPageJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 3. Service - Each of the 11 service pages
// ============================================================
type ServiceProps = {
  name: string
  description: string
  url: string
  image?: string
}

export function ServiceJsonLd({ name, description, url, image }: ServiceProps) {
  const canonical = `${BASE_URL}${url}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name,
    serviceType: name,
    description,
    url: canonical,
    ...(image && { image }),
    provider: {
      '@id': BUSINESS_ID,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    inLanguage: 'en-US',
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 4. Article (BlogPosting) - Each blog post
// ============================================================
type ArticleProps = {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: ArticleProps) {
  const canonical = `${BASE_URL}${url}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonical}#article`,
    headline: title,
    description,
    url: canonical,
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
    },
    isPartOf: {
      '@id': `${BASE_URL}/blog#blog`,
    },
    publishingPrinciples: `${BASE_URL}/about/editorial-policy`,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
    author: {
      '@id': BUSINESS_ID,
    },
    reviewedBy: {
      '@id': BUSINESS_ID,
    },
    publisher: {
      '@id': BUSINESS_ID,
    },
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 5. BreadcrumbList - All pages with breadcrumb navigation
// ============================================================
type BreadcrumbItem = { name: string; url: string }

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const currentUrl = items[items.length - 1]?.url ?? '/'
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}${currentUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.mediabarproductions.com${item.url}`,
    })),
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 6. AboutPage and Person - /about
// ============================================================
export function AboutPageJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://www.mediabarproductions.com/about#about',
    name: 'About Media Bar Productions',
    url: 'https://www.mediabarproductions.com/about',
    description:
      'The story, team, awards, and production values behind Media Bar Productions in San Antonio, Texas.',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    mainEntity: {
      '@id': BUSINESS_ID,
    },
  }
  return <JsonLdScript data={data} />
}

type PersonProps = {
  name: string
  jobTitle: string
  image: string
}

export function PersonJsonLd({ name, jobTitle, image }: PersonProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.mediabarproductions.com/about#founder',
    name,
    jobTitle,
    image: `https://www.mediabarproductions.com${image}`,
    description:
      'Founder and Executive Producer of Media Bar Productions, a San Antonio video production company serving organizations across Texas.',
    worksFor: {
      '@id': BUSINESS_ID,
    },
    knowsAbout: [
      'Video production strategy',
      'Commercial production',
      'Corporate video production',
      'Post-production',
      'San Antonio creative production',
    ],
    mainEntityOfPage: {
      '@id': 'https://www.mediabarproductions.com/about#about',
    },
    url: 'https://www.mediabarproductions.com/about#founder',
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 7. Editorial policy - /about/editorial-policy
// ============================================================
export function EditorialPolicyJsonLd() {
  const url = `${BASE_URL}/about/editorial-policy`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: 'Editorial Standards and Content Policy',
    description:
      'How Media Bar Productions creates, reviews, updates, and corrects its production guides and company content.',
    inLanguage: 'en-US',
    dateModified: '2026-07-19',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': BUSINESS_ID,
    },
    publisher: {
      '@id': BUSINESS_ID,
    },
    reviewedBy: {
      '@id': BUSINESS_ID,
    },
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 8. Educational guide - Long-form, expert-reviewed resources
// ============================================================
type EducationalGuideProps = {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  image: string
}

export function EducationalGuideJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: EducationalGuideProps) {
  const canonical = `${BASE_URL}${url}`
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonical}#article`,
    headline: title,
    description,
    url: canonical,
    datePublished,
    dateModified,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
    },
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
    },
    author: {
      '@type': 'Person',
      '@id': `${BASE_URL}/about#founder`,
      name: 'Ruben Garcia',
      jobTitle: 'Founder and Executive Producer',
      url: `${BASE_URL}/about#founder`,
      worksFor: {
        '@id': BUSINESS_ID,
      },
    },
    reviewedBy: {
      '@type': 'Person',
      '@id': `${BASE_URL}/about#founder`,
      name: 'Ruben Garcia',
      url: `${BASE_URL}/about#founder`,
    },
    publisher: {
      '@id': BUSINESS_ID,
    },
    publishingPrinciples: `${BASE_URL}/about/editorial-policy`,
    about: [
      'Video production planning',
      'Video production in Texas',
      'Video production in San Antonio',
    ],
  }
  return <JsonLdScript data={data} />
}

type CollectionPageItem = {
  name: string
  url: string
  description: string
  thumbnailUrl: string
}

export function CollectionPageJsonLd({
  name,
  description,
  url,
  items,
}: {
  name: string
  description: string
  url: string
  items: CollectionPageItem[]
}) {
  const canonical = `${BASE_URL}${url}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${canonical}#collection`,
    name,
    description,
    url: canonical,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': BUSINESS_ID,
    },
    publisher: {
      '@id': BUSINESS_ID,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'WebPage',
          name: item.name,
          description: item.description,
          url: `${BASE_URL}${item.url}`,
          image: item.thumbnailUrl,
        },
      })),
    },
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 9. VideoObject - Dedicated single-video watch pages only
// ============================================================
type VideoProps = {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl?: string
  embedUrl: string
  duration?: string // ISO 8601 format, e.g. "PT2M30S"
  url: string
}

export function VideoObjectJsonLd({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
  url,
}: VideoProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${url}#video`,
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl && { contentUrl }),
    embedUrl,
    ...(duration && { duration }),
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
    },
    inLanguage: 'en-US',
    isFamilyFriendly: true,
    publisher: {
      '@id': BUSINESS_ID,
    },
  }
  return <JsonLdScript data={data} />
}
