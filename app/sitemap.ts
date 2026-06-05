import type { MetadataRoute } from 'next'
import { getAllPosts } from '../lib/blog'

const BASE = 'https://www.mediabarproductions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const LAUNCH = new Date('2026-05-22')

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: `${BASE}/`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 1.0 },

    // Core pages
    { url: `${BASE}/about`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about/awards`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/work`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/photography`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/studio`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/clients`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pricing`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/video-production`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },

    // Service pages
    { url: `${BASE}/video-production/corporate`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/commercials`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/events`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/interview`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/medical`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/aerial`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/motion-graphics`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/live-streaming`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/post-production`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/food`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/video-production/real-estate`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },

    // Location pages
    { url: `${BASE}/locations/san-antonio`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/locations/austin`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/locations/dallas`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/locations/houston`, lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
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
