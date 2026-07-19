export type BlogAuthor = {
  slug: string
  name: string
  jobTitle: string
  bio: string
  url: string
  image: string
  schemaId: string
}

export const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  'ruben-garcia': {
    slug: 'ruben-garcia',
    name: 'Ruben Garcia',
    jobTitle: 'Founder and Executive Producer',
    bio: 'Ruben Garcia leads Media Bar Productions and writes about production strategy, local creative talent, and building useful video content.',
    url: '/about#founder',
    image: '/images/media-library/ruben-garcia-founder-headshot-01.jpeg',
    schemaId: 'https://www.mediabarproductions.com/about#founder',
  },
}

export const DEFAULT_BLOG_AUTHOR = 'ruben-garcia'

export function getBlogAuthor(slug?: string): BlogAuthor {
  return BLOG_AUTHORS[slug ?? DEFAULT_BLOG_AUTHOR] ?? BLOG_AUTHORS[DEFAULT_BLOG_AUTHOR]
}
