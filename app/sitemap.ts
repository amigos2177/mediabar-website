import type { MetadataRoute } from 'next'
import { getAllPosts } from '../lib/blog'
import workVideos from '../data/work-videos.json'
import { workProjects } from '../data/work-projects'
import type { PortfolioVideo } from '../components/VideoObjectSchema'
import { mediaBarAnswersEpisodes } from '../data/media-bar-answers'

const BASE = 'https://www.mediabarproductions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_UPDATED = new Date('2026-07-19')
  const SEARCH_SPRINT_UPDATED = new Date('2026-07-22')

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: `${BASE}/`, lastModified: SEARCH_SPRINT_UPDATED },

    // Core pages
    { url: `${BASE}/about`, lastModified: SITE_UPDATED },
    { url: `${BASE}/about/awards`, lastModified: SITE_UPDATED },
    { url: `${BASE}/about/editorial-policy`, lastModified: SITE_UPDATED },
    { url: `${BASE}/work`, lastModified: SITE_UPDATED },
    { url: `${BASE}/work/rbfcu-go-beyond-banking`, lastModified: SITE_UPDATED },
    { url: `${BASE}/photography`, lastModified: SITE_UPDATED },
    { url: `${BASE}/studio`, lastModified: SITE_UPDATED },
    { url: `${BASE}/contact`, lastModified: SITE_UPDATED },
    { url: `${BASE}/careers`, lastModified: SITE_UPDATED },
    { url: `${BASE}/project-planner`, lastModified: SITE_UPDATED },
    { url: `${BASE}/faq`, lastModified: SITE_UPDATED },
    { url: `${BASE}/resources/video-production-faq`, lastModified: SITE_UPDATED },
    { url: `${BASE}/resources/media-bar-answers`, lastModified: SEARCH_SPRINT_UPDATED },
    { url: `${BASE}/clients`, lastModified: SITE_UPDATED },
    { url: `${BASE}/blog`, lastModified: SEARCH_SPRINT_UPDATED },
    { url: `${BASE}/pricing`, lastModified: SITE_UPDATED },
    { url: `${BASE}/how-we-work`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production`, lastModified: SITE_UPDATED },

    // Service pages
    { url: `${BASE}/video-production/corporate`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/commercials`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/events`, lastModified: SEARCH_SPRINT_UPDATED },
    { url: `${BASE}/video-production/interview`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/medical`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/aerial`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/motion-graphics`, lastModified: SEARCH_SPRINT_UPDATED },
    { url: `${BASE}/video-production/live-streaming`, lastModified: SITE_UPDATED },
    { url: `${BASE}/video-production/post-production`, lastModified: SEARCH_SPRINT_UPDATED },
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

  const videos = workVideos as PortfolioVideo[]
  const watchEntries: MetadataRoute.Sitemap = workProjects.flatMap((project) => {
    const video = videos.find((item) => item.embedUrl?.endsWith(`/${project.id}`))
    if (!video) return []
    const thumbnail = Array.isArray(video.thumbnailUrl) ? video.thumbnailUrl[0] : video.thumbnailUrl

    return [{
      url: `${BASE}/work/watch/${project.slug}`,
      lastModified: new Date(video.uploadDate),
      videos: [{
        title: project.title,
        thumbnail_loc: thumbnail,
        description: video.description || `${project.title}, produced by Media Bar Productions in San Antonio.`,
        player_loc: video.embedUrl,
      }],
    }]
  })

  const answerEntries: MetadataRoute.Sitemap = mediaBarAnswersEpisodes.map((episode) => ({
    url: `${BASE}/resources/media-bar-answers/${episode.slug}`,
    lastModified: SEARCH_SPRINT_UPDATED,
    videos: [{
      title: episode.video.title,
      thumbnail_loc: episode.video.thumbnailUrl,
      description: episode.video.description,
      player_loc: `https://www.youtube-nocookie.com/embed/${episode.video.youtubeId}`,
    }],
  }))

  return [...staticPages, ...answerEntries, ...watchEntries, ...blogEntries]
}
