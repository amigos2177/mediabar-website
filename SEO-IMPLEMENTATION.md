# Media Bar Productions — SEO Metadata Implementation

Next.js 16, App Router. Repo: `/Users/rubengarcia/mediabar-website`

This file is the source of truth. Work through it in Claude Code **route by route,
approving each file individually** (no "allow all"). Build after each batch:
`npm run build` — if it compiles, the metadata is valid.

---

## STEP 1 — Root layout (`app/layout.tsx`)

Replace the existing `metadata` export with this. Two changes that matter:
`metadataBase` (makes canonical + OG URLs resolve on Vercel) and a title
`template` (each page now supplies only its own short title).

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mediabarproductions.com'),
  title: {
    template: '%s | Media Bar Productions',
    default: 'Video Production San Antonio | Media Bar Productions',
  },
  description:
    "San Antonio's award-winning video production company. 3 Emmy Awards, 15 Telly Awards, 13+ years producing corporate, commercial, and event video across Texas.",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Media Bar Productions',
    url: 'https://www.mediabarproductions.com',
  },
}
```

NOTE: with `template` set, each child page's `title` should be the SHORT form
only (e.g. `'Corporate Video Production San Antonio'`). Next appends
` | Media Bar Productions` automatically. The homepage is the exception — see below.

---

## STEP 2 — Per-route metadata

For each route, add this `export const metadata` at the top of its `page.tsx`.
If a page is a Client Component (`'use client'`), metadata exports are NOT
allowed — move metadata to that route's `layout.tsx`, or split the component.
Most of these pages should be Server Components, so this should be rare.

`canonical` is a path; `metadataBase` makes it absolute.

### Homepage — `app/page.tsx`
Homepage uses an ABSOLUTE title (overrides the template) so it keeps its exact string.
```tsx
export const metadata = {
  title: { absolute: 'Video Production San Antonio | Media Bar Productions' },
  description:
    'Award-winning San Antonio video production company — 3 Emmys, 15 Tellys, 13+ years. Corporate, commercial, and event video across Texas. Get a quote.',
  alternates: { canonical: '/' },
}
```

### `app/about/page.tsx`
```tsx
export const metadata = {
  title: 'About Media Bar Productions | San Antonio Video Company',
  description:
    'Meet the San Antonio video production team behind 3 Emmy and 15 Telly Awards. 13+ years telling Texas brands\u2019 stories. Learn what drives our work.',
  alternates: { canonical: '/about' },
}
```
NOTE: this title is long-form because "About ... | San Antonio Video Company"
reads better as an absolute. If you prefer the template, change to
`title: { absolute: 'About Media Bar Productions | San Antonio Video Company' }`.

### `app/about/awards/page.tsx`
```tsx
export const metadata = {
  title: { absolute: 'Our Awards | 3 Emmys & 15 Tellys | Media Bar Productions' },
  description:
    'Media Bar Productions has earned 3 Emmy Awards and 15 Telly Awards for video production in San Antonio. See the recognized work behind the honors.',
  alternates: { canonical: '/about/awards' },
}
```

### `app/work/page.tsx`
```tsx
export const metadata = {
  title: 'Our Work | San Antonio Video Production Portfolio',
  description:
    'Explore Media Bar Productions\u2019 video portfolio \u2014 corporate films, commercials, and event coverage for top Texas brands. See San Antonio production work.',
  alternates: { canonical: '/work' },
}
```

### `app/photography/page.tsx`
```tsx
export const metadata = {
  title: 'Photography Services San Antonio',
  description:
    'Professional photography in San Antonio for brands, events, and architecture. Media Bar Productions delivers polished commercial imagery across Texas.',
  alternates: { canonical: '/photography' },
}
```

### `app/studio/page.tsx`
```tsx
export const metadata = {
  title: 'Production Studio San Antonio',
  description:
    'A full production studio in San Antonio for filming, interviews, and creative shoots. Tour Media Bar Productions\u2019 purpose-built studio space.',
  alternates: { canonical: '/studio' },
}
```

### `app/contact/page.tsx`
```tsx
export const metadata = {
  title: 'Contact Media Bar Productions | San Antonio Video',
  description:
    'Get in touch with Media Bar Productions in San Antonio. Call 210-279-9442 or request a quote for your corporate, commercial, or event video project.',
  alternates: { canonical: '/contact' },
}
```

### `app/faq/page.tsx`
```tsx
export const metadata = {
  title: 'Video Production FAQ | San Antonio',
  description:
    'Common questions about video production in San Antonio \u2014 pricing, timelines, process, and deliverables \u2014 answered by the Media Bar Productions team.',
  alternates: { canonical: '/faq' },
}
```

### `app/clients/page.tsx`
```tsx
export const metadata = {
  title: 'Our Clients | San Antonio Video Production',
  description:
    'Media Bar Productions has produced video for the Spurs, H-E-B, USAA, Frost Bank, and more. See the San Antonio and Texas brands we\u2019ve worked with.',
  alternates: { canonical: '/clients' },
}
```

### `app/blog/page.tsx`
```tsx
export const metadata = {
  title: 'Video Production Blog | San Antonio',
  description:
    'Insights on corporate video, production tips, and San Antonio\u2019s creative scene from the Media Bar Productions team. Read the latest from our studio.',
  alternates: { canonical: '/blog' },
}
```

---

## STEP 3 — Service pages

### `app/video-production/page.tsx`  (index)
```tsx
export const metadata = {
  title: { absolute: 'Video Production Services San Antonio | Media Bar Productions' },
  description:
    'Full-service video production in San Antonio \u2014 corporate, commercial, event, aerial, and post. 13+ award-winning years serving Texas brands.',
  alternates: { canonical: '/video-production' },
}
```

### `app/video-production/corporate/page.tsx`
```tsx
export const metadata = {
  title: 'Corporate Video Production San Antonio',
  description:
    'Corporate video production in San Antonio \u2014 brand films, internal communications, and executive content. Award-winning work for Texas companies.',
  alternates: { canonical: '/video-production/corporate' },
}
```

### `app/video-production/commercials/page.tsx`
```tsx
export const metadata = {
  title: 'Commercial Video Production San Antonio',
  description:
    'TV and digital commercial production in San Antonio. Media Bar Productions creates broadcast-quality commercials that perform for Texas brands.',
  alternates: { canonical: '/video-production/commercials' },
}
```

### `app/video-production/events/page.tsx`
```tsx
export const metadata = {
  title: 'Event Videography San Antonio',
  description:
    'Event video coverage in San Antonio \u2014 conferences, galas, and corporate events. Multi-camera production that captures your event in full.',
  alternates: { canonical: '/video-production/events' },
}
```

### `app/video-production/interview/page.tsx`
```tsx
export const metadata = {
  title: 'Interview Video Production San Antonio',
  description:
    'Professional interview and discussion filming in San Antonio. Media Bar Productions delivers polished testimonial, panel, and executive interview video.',
  alternates: { canonical: '/video-production/interview' },
}
```

### `app/video-production/medical/page.tsx`
```tsx
export const metadata = {
  title: 'Medical Video Production San Antonio',
  description:
    'Medical and healthcare video production in San Antonio \u2014 patient education, facility tours, and provider profiles for Texas healthcare organizations.',
  alternates: { canonical: '/video-production/medical' },
}
```

### `app/video-production/aerial/page.tsx`
```tsx
export const metadata = {
  title: 'Aerial & Drone Video San Antonio',
  description:
    'Licensed aerial and drone videography in San Antonio. Media Bar Productions captures cinematic aerial footage for brands and events across Texas.',
  alternates: { canonical: '/video-production/aerial' },
}
```

### `app/video-production/motion-graphics/page.tsx`
```tsx
export const metadata = {
  title: 'Motion Graphics & Animation San Antonio',
  description:
    'Motion graphics and animation in San Antonio \u2014 explainer videos, animated logos, and branded visuals that bring Texas companies\u2019 ideas to life.',
  alternates: { canonical: '/video-production/motion-graphics' },
}
```

### `app/video-production/live-streaming/page.tsx`
```tsx
export const metadata = {
  title: 'Live Streaming & Webcasting San Antonio',
  description:
    'Professional live streaming and webcasting in San Antonio. Media Bar Productions broadcasts conferences, events, and meetings with multi-camera quality.',
  alternates: { canonical: '/video-production/live-streaming' },
}
```

### `app/video-production/post-production/page.tsx`
```tsx
export const metadata = {
  title: 'Post Production & Video Editing San Antonio',
  description:
    'Video editing and post production in San Antonio \u2014 color, sound, and motion finishing. Media Bar Productions polishes footage into broadcast-ready video.',
  alternates: { canonical: '/video-production/post-production' },
}
```

### `app/video-production/food/page.tsx`
```tsx
export const metadata = {
  title: 'Food Video Production San Antonio',
  description:
    'Appetizing food and beverage video production in San Antonio. Media Bar Productions creates mouth-watering content for restaurants and Texas food brands.',
  alternates: { canonical: '/video-production/food' },
}
```

### `app/video-production/real-estate/page.tsx`
```tsx
export const metadata = {
  title: 'Real Estate Video Production San Antonio',
  description:
    'Real estate video and property tours in San Antonio. Media Bar Productions produces cinematic listings and development films for Texas properties.',
  alternates: { canonical: '/video-production/real-estate' },
}
```

---

## STEP 4 — Location pages

### `app/locations/san-antonio/page.tsx`
```tsx
export const metadata = {
  title: { absolute: 'Video Production San Antonio TX | Media Bar Productions' },
  description:
    'San Antonio video production in our home market \u2014 corporate, commercial, and event work for military, healthcare, tourism, and financial clients.',
  alternates: { canonical: '/locations/san-antonio' },
}
```

### `app/locations/austin/page.tsx`
```tsx
export const metadata = {
  title: { absolute: 'Video Production Austin TX | Media Bar Productions' },
  description:
    'Award-winning video production for Austin businesses. Media Bar Productions brings San Antonio-based crews and studio resources to projects across Austin.',
  alternates: { canonical: '/locations/austin' },
}
```

### `app/locations/dallas/page.tsx`
```tsx
export const metadata = {
  title: { absolute: 'Video Production Dallas-Fort Worth | Media Bar Productions' },
  description:
    'Corporate and commercial video production for Dallas-Fort Worth brands. Media Bar Productions delivers award-winning work throughout the DFW metroplex.',
  alternates: { canonical: '/locations/dallas' },
}
```

### `app/locations/houston/page.tsx`
```tsx
export const metadata = {
  title: { absolute: 'Video Production Houston TX | Media Bar Productions' },
  description:
    'Professional video production for Houston companies \u2014 corporate, commercial, and event film. Media Bar Productions serves brands across the Houston area.',
  alternates: { canonical: '/locations/houston' },
}
```

---

## STEP 5 — Blog posts

The 10 blog posts already have unique titles (per the audit) and are rendered
from Markdown via a dynamic route (likely `app/blog/[slug]/page.tsx`).
They need `description` added to their `generateMetadata`, pulled from each
post's front-matter. If posts don't have a `description` / `excerpt` field
in front-matter yet, add one to each `.md` file, then:

```tsx
// app/blog/[slug]/page.tsx  — inside generateMetadata
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params           // Next 16: params is a Promise
  const post = getPostBySlug(slug)
  return {
    title: post.title,                    // template appends the brand
    description: post.description,         // from front-matter
    alternates: { canonical: `/blog/${slug}` },
  }
}
```
Do NOT optimize the "Keeping Creative in San Antonio" stub post — decide
separately whether to expand it or set `robots: { index: false }` on it.

---

## STEP 6 — Fix `app/sitemap.ts`

Problem: every static page uses `lastModified: now`, so all 28 report
"changed today" on every deploy. Google learns to ignore the signal.
Use a fixed launch date for static pages; blog posts already use real dates.

Replace `const now = new Date()` and the static `lastModified` values:

```tsx
// Use the real launch/last-content-change date. Update a page's date
// only when its content actually changes.
const LAUNCH = new Date('2026-05-01')   // <-- set to true launch date
```
Then in `staticPages`, use `lastModified: LAUNCH` instead of `now`.
Leave blog entries as-is (`new Date(post.date)` is correct).

`changeFrequency` and `priority` are largely ignored by Google now — fine to
leave, not worth fixing.

---

## STEP 7 — `next.config.ts` (trailing slash)

The audit flagged trailing-slash consistency. Pick ONE and set it explicitly
so there's never a `/about` vs `/about/` split. Next default is no trailing
slash — recommended, and matches the sitemap (which has no trailing slashes):

```ts
const nextConfig = {
  trailingSlash: false,
  // ...existing config
}
```

VERCEL DASHBOARD (separate from code): Project → Settings → Domains.
Set `mediabarproductions.com` and `www.mediabarproductions.com` so one
redirects to the other. The sitemap + canonicals all use `www`, so make
the apex redirect to `www`. This must match or canonicals fight the redirect.

---

## VERIFY (after deploy)

1. `npm run build` compiles clean.
2. View source on 3-4 live pages — confirm each `<title>` and
   `<meta name="description">` is unique.
3. Run homepage + /contact + /faq through
   https://search.google.com/test/rich-results (schema — see schema file).
4. Check `https://www.mediabarproductions.com/sitemap.xml` loads and lists
   all 38 URLs with `www`.
5. In Google Search Console, re-submit the sitemap.
