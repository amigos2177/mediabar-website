import type { Post } from './blog'

const relatedBySlug: Record<string, string[]> = {
  'ai-video-production-limits': [
    'authentic-video-marketing-2026',
    'corporate-video-multi-format-strategy',
    'best-video-production-san-antonio',
  ],
  'authentic-video-marketing-2026': [
    'ai-video-production-limits',
    'corporate-video-multi-format-strategy',
    'restaurant-video-production-san-antonio',
  ],
  'best-video-production-san-antonio': [
    'hire-local-video-production-companies-san-antonio',
    'corporate-video-multi-format-strategy',
    'authentic-video-marketing-2026',
  ],
  'conference-video-production-guide': [
    'event-conference-video-production-texas',
    'san-antonio-conference-video-services',
    'corporate-video-multi-format-strategy',
  ],
  'corporate-video-multi-format-strategy': [
    'recruiting-video-production',
    'authentic-video-marketing-2026',
    'hire-local-video-production-companies-san-antonio',
  ],
  'elevate-your-brand-with-expert-video-production': [
    'best-video-production-san-antonio',
    'corporate-video-multi-format-strategy',
    'hire-local-video-production-companies-san-antonio',
  ],
  'event-conference-video-production-texas': [
    'conference-video-production-guide',
    'san-antonio-conference-video-services',
    'corporate-video-multi-format-strategy',
  ],
  'healthcare-provider-video': [
    'healthcare-video-production-san-antonio',
    'recruiting-video-production',
    'authentic-video-marketing-2026',
  ],
  'healthcare-video-production-san-antonio': [
    'healthcare-provider-video',
    'authentic-video-marketing-2026',
    'corporate-video-multi-format-strategy',
  ],
  'hire-local-video-production-companies-san-antonio': [
    'best-video-production-san-antonio',
    'corporate-video-multi-format-strategy',
    'san-antonio-conference-video-services',
  ],
  'importance-of-video-production-services': [
    'best-video-production-san-antonio',
    'corporate-video-multi-format-strategy',
    'authentic-video-marketing-2026',
  ],
  'recruiting-video-production': [
    'corporate-video-multi-format-strategy',
    'authentic-video-marketing-2026',
    'hire-local-video-production-companies-san-antonio',
  ],
  'restaurant-video-production-san-antonio': [
    'authentic-video-marketing-2026',
    'corporate-video-multi-format-strategy',
    'hire-local-video-production-companies-san-antonio',
  ],
  'san-antonio-conference-video-services': [
    'conference-video-production-guide',
    'event-conference-video-production-texas',
    'hire-local-video-production-companies-san-antonio',
  ],
}

export function getRelatedPosts(post: Post, posts: Post[], limit = 3) {
  const postsBySlug = new Map(posts.map((item) => [item.slug, item]))
  const curated = (relatedBySlug[post.slug] || [])
    .map((slug) => postsBySlug.get(slug))
    .filter((item): item is Post => Boolean(item))

  if (curated.length >= limit) return curated.slice(0, limit)

  const fallback = posts.filter(
    (item) => item.slug !== post.slug && !curated.some((related) => related.slug === item.slug),
  )

  return [...curated, ...fallback].slice(0, limit)
}
