import type { MetadataRoute } from 'next'
import { getAllPosts } from '../lib/blog'

const BASE = 'https://www.mediabarproductions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },

    // Core pages
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about/awards`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/photography`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/studio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/clients`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/video-production`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Service pages
    { url: `${BASE}/video-production/corporate`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/commercials`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/events`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/interview`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/medical`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/aerial`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/motion-graphics`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/live-streaming`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/post-production`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/food`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/real-estate`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Location pages
    { url: `${BASE}/locations/san-antonio`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/locations/austin`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/locations/dallas`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/locations/houston`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const posts = getAllPosts()
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogEntries]
}
