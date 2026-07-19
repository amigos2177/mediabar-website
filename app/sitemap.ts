import type { MetadataRoute } from 'next'
import { getAllPosts } from '../lib/blog'

const BASE = 'https://www.mediabarproductions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_UPDATED = new Date('2026-07-18')

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: `${BASE}/`, lastModified: SITE_UPDATED },

    // Core pages
    { url: `${BASE}/about`, lastModified: SITE_UPDATED },
    { url: `${BASE}/about/awards`, lastModified: SITE_UPDATED },
    { url: `${BASE}/work`, lastModified: SITE_UPDATED },
    { url: `${BASE}/work/rbfcu-go-beyond-banking`, lastModified: SITE_UPDATED },
    { url: `${BASE}/photography`, lastModified: SITE_UPDATED },
    { url: `${BASE}/studio`, lastModified: SITE_UPDATED },
    { url: `${BASE}/contact`, lastModified: SITE_UPDATED },
    { url: `${BASE}/careers`, lastModified: SITE_UPDATED },
    { url: `${BASE}/project-planner`, lastModified: SITE_UPDATED },
    { url: `${BASE}/faq`, lastModified: SITE_UPDATED },
    { url: `${BASE}/clients`, lastModified: SITE_UPDATED },
    { url: `${BASE}/blog`, lastModified: SITE_UPDATED },
    { url: `${BASE}/pricing`, lastModified: SITE_UPDATED },
    { url: `${BASE}/how-we-work`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production`, lastModified: SITE_UPDATED },

    // Service pages
    { url: `${BASE}/video-production/corporate`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/commercials`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/events`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/interview`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/medical`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/aerial`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/motion-graphics`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/live-streaming`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/post-production`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/food`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/real-estate`, lastModified: SITE_UPDATED },

    // Location pages
    { url: `${BASE}/locations/san-antonio`, lastModified: SITE_UPDATED },
    { url: `${BASE}/locations/austin`, lastModified: SITE_UPDATED },
    { url: `${BASE}/locations/dallas`, lastModified: SITE_UPDATED },
    { url: `${BASE}/locations/houston`, lastModified: SITE_UPDATED },
  ]

  const posts = getAllPosts()
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
  }))

  return [...staticPages, ...blogEntries]
}
