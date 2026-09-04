import type { MetadataRoute } from 'next'
import { getPostIndex } from '../lib/blog'
import workVideos from '../data/work-videos.json'
import { workProjects } from '../data/work-projects'
import type { PortfolioVideo } from '../components/VideoObjectSchema'
import {
  MEDIA_BAR_ANSWERS_UPDATED,
  mediaBarAnswersEpisodes,
} from '../data/media-bar-answers'

const BASE = 'https://www.mediabarproductions.com'

export const dynamic = 'force-static'

const SITE_UPDATED = '2026-07-19'
const SEARCH_SPRINT_UPDATED = '2026-07-23'

function sitemapDate(value: unknown): string | undefined {
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) return undefined
    return value.toISOString()
  }
  if (typeof value === 'string' && value.trim()) {
    const parsed = new Date(value)
    if (Number.isNaN(parsed.getTime())) return undefined
    return value.trim()
  }
  return undefined
}

function withLastmod(
  url: string,
  lastModified: unknown,
  extra?: Omit<MetadataRoute.Sitemap[number], 'url' | 'lastModified'>,
): MetadataRoute.Sitemap[number] {
  const date = sitemapDate(lastModified)
  return date ? { url, lastModified: date, ...extra } : { url, ...extra }
}

function collect(label: string, build: () => MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  try {
    return build()
  } catch (error) {
    console.error(`sitemap: ${label} failed; omitting those URLs`, error)
    return []
  }
}

function staticPages(): MetadataRoute.Sitemap {
  return [
    withLastmod(`${BASE}/`, SEARCH_SPRINT_UPDATED),

    withLastmod(`${BASE}/about`, SITE_UPDATED),
    withLastmod(`${BASE}/about/awards`, SITE_UPDATED),
    withLastmod(`${BASE}/about/editorial-policy`, SITE_UPDATED),
    withLastmod(`${BASE}/work`, SITE_UPDATED),
    withLastmod(`${BASE}/work/rbfcu-go-beyond-banking`, SITE_UPDATED),
    withLastmod(`${BASE}/photography`, SITE_UPDATED),
    withLastmod(`${BASE}/studio`, SITE_UPDATED),
    withLastmod(`${BASE}/contact`, SITE_UPDATED),
    withLastmod(`${BASE}/careers`, '2026-09-04'),
    withLastmod(`${BASE}/project-planner`, SITE_UPDATED),
    withLastmod(`${BASE}/faq`, '2026-09-02'),
    withLastmod(`${BASE}/resources/video-production-faq`, '2026-09-02'),
    withLastmod(`${BASE}/resources/media-bar-answers`, MEDIA_BAR_ANSWERS_UPDATED),
    withLastmod(`${BASE}/clients`, SITE_UPDATED),
    withLastmod(`${BASE}/blog`, SEARCH_SPRINT_UPDATED),
    withLastmod(`${BASE}/pricing`, SITE_UPDATED),
    withLastmod(`${BASE}/how-we-work`, SITE_UPDATED),
    withLastmod(`${BASE}/video-production`, '2026-08-10'),

    withLastmod(`${BASE}/video-production/corporate`, SITE_UPDATED),
    withLastmod(`${BASE}/video-production/commercials`, '2026-08-10'),
    withLastmod(`${BASE}/video-production/events`, SEARCH_SPRINT_UPDATED),
    withLastmod(`${BASE}/video-production/interview`, SITE_UPDATED),
    withLastmod(`${BASE}/video-production/medical`, SITE_UPDATED),
    withLastmod(`${BASE}/video-production/aerial`, SITE_UPDATED),
    withLastmod(`${BASE}/video-production/motion-graphics`, '2026-07-29'),
    withLastmod(`${BASE}/video-production/live-streaming`, SITE_UPDATED),
    withLastmod(`${BASE}/video-production/post-production`, SEARCH_SPRINT_UPDATED),
    withLastmod(`${BASE}/video-production/food`, SITE_UPDATED),
    withLastmod(`${BASE}/video-production/real-estate`, SITE_UPDATED),

    withLastmod(`${BASE}/locations/san-antonio`, '2026-09-04'),
    withLastmod(`${BASE}/locations/austin`, SITE_UPDATED),
    withLastmod(`${BASE}/locations/dallas`, SITE_UPDATED),
    withLastmod(`${BASE}/locations/houston`, SITE_UPDATED),
  ]
}

function blogEntries(): MetadataRoute.Sitemap {
  return getPostIndex().map((post) =>
    withLastmod(`${BASE}/blog/${post.slug}`, post.updated ?? post.date),
  )
}

function isoDurationToSeconds(duration?: string): number | undefined {
  if (!duration) return undefined
  const match = duration.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/)
  if (!match) return undefined
  const hours = Number(match[1] || 0)
  const minutes = Number(match[2] || 0)
  const seconds = Number(match[3] || 0)
  const total = hours * 3600 + minutes * 60 + seconds
  return total > 0 ? total : undefined
}

function watchEntries(): MetadataRoute.Sitemap {
  const videos = workVideos as PortfolioVideo[]
  return workProjects.flatMap((project) => {
    const video = videos.find((item) => item.embedUrl?.endsWith(`/${project.id}`))
    if (!video) return []

    const watchUrl = `${BASE}/work/watch/${project.slug}`
    const thumbnail = Array.isArray(video.thumbnailUrl) ? video.thumbnailUrl[0] : video.thumbnailUrl
    const lastModified = sitemapDate(video.uploadDate)
    const description =
      video.description || `${project.title}, produced by Media Bar Productions in San Antonio.`
    const duration = isoDurationToSeconds(video.duration)
    const canAttachVideo =
      Boolean(project.title)
      && typeof thumbnail === 'string'
      && thumbnail.length > 0
      && Boolean(description)
      && Boolean(video.embedUrl)
      && Boolean(lastModified)
      && Boolean(duration)

    return [withLastmod(
      watchUrl,
      lastModified,
      canAttachVideo
        ? {
            videos: [{
              title: project.title,
              thumbnail_loc: thumbnail,
              description,
              player_loc: video.embedUrl,
              publication_date: lastModified,
              duration,
            }],
          }
        : undefined,
    )]
  })
}

function answerEntries(): MetadataRoute.Sitemap {
  // Article/Q&A pages with an embedded video — keep the URLs in the sitemap,
  // but do not emit <video:video>. GSC treats those as non-watch pages.
  return mediaBarAnswersEpisodes.map((episode) =>
    withLastmod(
      `${BASE}/resources/media-bar-answers/${episode.slug}`,
      episode.dateModified ?? MEDIA_BAR_ANSWERS_UPDATED,
    ),
  )
}

function buildSitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages(),
    ...collect('media-bar-answers', answerEntries),
    ...collect('watch-pages', watchEntries),
    ...collect('blog-posts', blogEntries),
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    return buildSitemap()
  } catch (error) {
    console.error('sitemap: generation failed; returning static URL fallback', error)
    return staticPages()
  }
}
