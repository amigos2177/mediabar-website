import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export type FaqItem = { question: string; answer: string }

export type Post = {
  slug: string
  title: string
  seoTitle?: string
  author?: string
  date: string
  updated?: string
  excerpt: string
  legacyId?: number
  legacyUrl?: string
  content: string
  featuredImage?: string
  faqs?: FaqItem[]
}

function parseFile(file: string): Post {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug: data.slug as string,
    title: data.title as string,
    seoTitle: data.seoTitle as string | undefined,
    author: data.author as string | undefined,
    date: data.date as string,
    updated: data.updated as string | undefined,
    excerpt: data.excerpt as string,
    legacyId: data.legacyId as number,
    legacyUrl: data.legacyUrl as string,
    content: marked.parse(content) as string,
    featuredImage: data.featuredImage as string | undefined,
    faqs: data.faqs as FaqItem[] | undefined,
  }
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))
  return files
    .map((f) => parseFile(f))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export type PostIndexEntry = {
  slug: string
  date: string
  updated?: string
}

function toIndexDate(value: unknown): string | undefined {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }
  if (typeof value === 'string' && value.trim()) {
    const parsed = new Date(value)
    if (!Number.isNaN(parsed.getTime())) return value.trim()
  }
  return undefined
}

/** Front-matter only. Safe for sitemap generation: never parses markdown, never throws. */
export function getPostIndex(): PostIndexEntry[] {
  try {
    if (!fs.existsSync(CONTENT_DIR)) return []
    return fs
      .readdirSync(CONTENT_DIR)
      .filter((file) => file.endsWith('.md'))
      .flatMap((file) => {
        try {
          const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
          const { data } = matter(raw)
          const slug =
            typeof data.slug === 'string' && data.slug.trim()
              ? data.slug.trim()
              : file.replace(/\.md$/, '')
          const date = toIndexDate(data.date)
          if (!slug || !date) return []
          return [{
            slug,
            date,
            updated: toIndexDate(data.updated),
          }]
        } catch {
          return []
        }
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch {
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  return parseFile(`${slug}.md`)
}
