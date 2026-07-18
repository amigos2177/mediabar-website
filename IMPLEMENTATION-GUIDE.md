# Implementation Guide: JSON-LD + llms.txt
## mediabarproductions.com — Next.js App Router

---

## File Placement

1. **Copy `llms.txt`** → `public/llms.txt`
   - Next.js serves it automatically at `mediabarproductions.com/llms.txt`
   - No code changes needed. Just drop the file.

2. **Copy `JsonLd.tsx`** → `components/JsonLd.tsx` (or wherever your components live)

---

## Wiring JSON-LD Into Pages

All pages use `'use client'` with metadata in sibling `layout.tsx` Server Components.
JSON-LD components are Server Components (no hooks, no state) — they render a
`<script>` tag. Add them in each layout.tsx alongside the metadata export.

### Homepage (`app/layout.tsx` or `app/page-layout.tsx`)

```tsx
import { LocalBusinessJsonLd } from '@/components/JsonLd'

// In the return JSX, add before {children}:
<LocalBusinessJsonLd />
```

### About Page (`app/about/layout.tsx`)

```tsx
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

<LocalBusinessJsonLd />
<BreadcrumbJsonLd items={[
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
]} />
```

### Contact Page (`app/contact/layout.tsx`)

```tsx
import { LocalBusinessJsonLd } from '@/components/JsonLd'

<LocalBusinessJsonLd />
```

### FAQ Page (`app/faq/layout.tsx`)

```tsx
import { FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

// IMPORTANT: The FAQ text in the schema MUST match the on-page text exactly.
// Pull the real Q&A from your FAQ page component.
<FAQPageJsonLd faqs={[
  {
    question: 'How much does a video cost?',
    answer: "It depends on the scope — but we give you a fully itemized quote so there are no surprises. A basic testimonial or interview video starts around $1,500-$3,000. A polished commercial or brand film typically runs $5,000-$25,000+. We'll ask the right questions and give you a real number fast.",
  },
  {
    question: 'Do you charge hourly or by project?',
    answer: "Almost always by project. We scope out exactly what's needed — crew, gear, studio time, edit passes, graphics, music licensing — and give you a fixed price. That way you know what you're paying for before anything starts, and there are no hourly overruns.",
  },
  {
    question: 'How long does the production process take?',
    answer: "From kickoff to final delivery, most projects take 2-4 weeks. Rush turnarounds are available — we've delivered same-day edits for live events and 48-hour cuts for time-sensitive campaigns. Timeline depends on complexity, revision rounds, and your approval speed.",
  },
  {
    question: 'Who owns the footage after production?',
    answer: "You do. All footage and final files are yours. We don't license it back to you, hold raw footage hostage, or restrict your use of anything we shoot for you. You'll receive the final deliverables and, upon request, the raw footage archive.",
  },
  {
    question: 'Do you travel outside San Antonio?',
    answer: "Yes. We travel throughout Texas regularly — Austin, Houston, Dallas, and beyond. We've also traveled nationally and internationally for larger productions. Travel costs (flights, hotel, per diem) are itemized in the quote. For local South Texas work, there's typically no travel fee.",
  },
  {
    question: 'Why choose Media Bar over a freelancer?',
    answer: "A freelancer gives you one person. We give you a full team — director, DP, audio engineer, editor, colorist, motion graphics artist — with 13 years of process behind us. That means fewer surprises, higher production value, and someone to call if anything goes sideways.",
  },
  // ADD ALL REMAINING FAQ ITEMS — must match on-page text exactly
]} />
```

### Each Service Page (e.g. `app/video-production/corporate/layout.tsx`)

```tsx
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

<ServiceJsonLd
  name="Corporate Video Production"
  description="Corporate video production in San Antonio — brand films, internal communications, and executive content. Award-winning work for Texas companies."
  url="/video-production/corporate"
/>
<BreadcrumbJsonLd items={[
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/video-production' },
  { name: 'Corporate Video', url: '/video-production/corporate' },
]} />
{/* If the service page has inline FAQs, add FAQPageJsonLd too */}
<FAQPageJsonLd faqs={[
  {
    question: 'How much does a corporate video cost in San Antonio?',
    answer: 'Corporate video production in San Antonio typically ranges from $3,000 for a simple interview-style video to $25,000+ for a full brand film with multiple locations, actors, and motion graphics. The biggest variables are shoot days, crew size, and post-production complexity. We provide detailed quotes after a brief discovery call — there are no surprises.',
  },
  // ... remaining FAQs from that page
]} />
```

### Service Page Mapping (all 11)

| Route | Service Name |
|---|---|
| `/video-production/corporate` | Corporate Video Production |
| `/video-production/commercials` | TV Commercial Production |
| `/video-production/events` | Event & Conference Video Production |
| `/video-production/interview` | Interview & Discussion Video Production |
| `/video-production/medical` | Medical & Healthcare Video Production |
| `/video-production/aerial` | Aerial & Drone Video Production |
| `/video-production/motion-graphics` | Motion Graphics & Animation |
| `/video-production/live-streaming` | Live Streaming Production |
| `/video-production/post-production` | Post Production & Editing Services |
| `/video-production/food` | Food & Beverage Video Production |
| `/video-production/real-estate` | Real Estate Video Production |

### Blog Posts (e.g. `app/blog/[slug]/layout.tsx`)

If blog posts use a dynamic route with a shared layout, the ArticleJsonLd
props need to come from the page data. If each blog post has its own
layout.tsx, add directly:

```tsx
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

<ArticleJsonLd
  title="Healthcare Video Production Guide"
  description="Healthcare video production done right builds patient trust and drives conversions. Here's the HIPAA-ready playbook your medical team needs."
  url="/blog/healthcare-video-production"
  datePublished="2026-06-01"
  image="https://www.mediabarproductions.com/images/blog/healthcare-video-production.png"
/>
<BreadcrumbJsonLd items={[
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Healthcare Video Production Guide', url: '/blog/healthcare-video-production' },
]} />
```

### Location Pages (e.g. `app/locations/san-antonio/layout.tsx`)

```tsx
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

<LocalBusinessJsonLd />
<BreadcrumbJsonLd items={[
  { name: 'Home', url: '/' },
  { name: 'San Antonio', url: '/locations/san-antonio' },
]} />
```

---

## Verification After Deploy

Run these curl commands to confirm JSON-LD is live:

```bash
# Should return 1+ for each page
curl -s https://www.mediabarproductions.com/ | grep -c "application/ld+json"
curl -s https://www.mediabarproductions.com/faq | grep -c "application/ld+json"
curl -s https://www.mediabarproductions.com/video-production/corporate | grep -c "application/ld+json"

# Should return 200
curl -sI https://www.mediabarproductions.com/llms.txt | head -1

# Validate schema with Google's tool after deploy:
# https://search.google.com/test/rich-results
# https://validator.schema.org/
```

---

## Claude Code Session Notes

- DO NOT auto-commit or push without explicit instruction
- Run `npm run build` after wiring all components to catch type errors
- The FAQPageJsonLd text MUST match the visible on-page text word-for-word — 
  Google requires schema FAQ content to match rendered content
- If blog posts use a dynamic [slug] route, the ArticleJsonLd may need to 
  pull props from the page's data source rather than hardcoding per-post
