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
  date: string
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
    date: data.date as string,
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

export function getPostBySlug(slug: string): Post | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  return parseFile(`${slug}.md`)
}
