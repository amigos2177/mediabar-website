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

// ============================================================
// 1. LocalBusiness — Homepage, About, Contact
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
    image: 'https://www.mediabarproductions.com/images/mediabar-logo.png',
    description:
      'Award-winning video production company in San Antonio, Texas. 3 Emmy Awards, 15 Telly Awards, 13+ years producing corporate, commercial, and event video across Texas.',
    telephone: '+1-210-279-9442',
    email: 'contact@mediabarproductions.com',
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
      '3 Emmy Awards — Lone Star Chapter, NATAS',
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
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 2. FAQPage — /faq page and any service page with inline FAQs
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
// 3. Service — Each of the 11 service pages
// ============================================================
type ServiceProps = {
  name: string
  description: string
  url: string
  image?: string
}

export function ServiceJsonLd({ name, description, url, image }: ServiceProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://www.mediabarproductions.com${url}`,
    ...(image && { image }),
    provider: {
      '@id': BUSINESS_ID,
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 4. Article (BlogPosting) — Each blog post
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
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `https://www.mediabarproductions.com${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
    author: {
      '@id': BUSINESS_ID,
    },
    publisher: {
      '@id': BUSINESS_ID,
    },
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 5. BreadcrumbList — All pages with breadcrumb navigation
// ============================================================
type BreadcrumbItem = { name: string; url: string }

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
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
// 6. AboutPage and Person — /about
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
    worksFor: {
      '@id': BUSINESS_ID,
    },
    url: 'https://www.mediabarproductions.com/about',
  }
  return <JsonLdScript data={data} />
}

// ============================================================
// 7. VideoObject — Pages with embedded Vimeo videos
// ============================================================
type VideoProps = {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl?: string
  embedUrl: string
  duration?: string // ISO 8601 format, e.g. "PT2M30S"
}

export function VideoObjectJsonLd({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
}: VideoProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl && { contentUrl }),
    embedUrl,
    ...(duration && { duration }),
    publisher: {
      '@id': BUSINESS_ID,
    },
  }
  return <JsonLdScript data={data} />
}
