import { workProjects } from './work-projects'
import workVideos from './work-videos.json'
import type { WorkFilm } from '@/components/WorkFilmCards'

export const rbfcuCampaigns = [
  { key: 'rbfcu-keldon-johnson', title: 'RBFCU Keldon Johnson', deck: 'Three :30 broadcast commercials for RBFCU, produced by Media Bar Productions in San Antonio.', href: '/work/rbfcu-keldon-johnson' },
  { key: 'rbfcu-resting-bank-face', title: 'RBFCU Resting Bank Face', deck: 'Four :30 broadcast commercials for RBFCU, produced by Media Bar Productions in San Antonio.', href: '/work/rbfcu-resting-bank-face' },
]

export function collectionFilms(collection: string): WorkFilm[] {
  return workProjects.filter((project) => project.collection === collection).map((project) => {
    const video = workVideos.find((item) => item.embedUrl.endsWith(`/${project.id}`))!
    const match = video.duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/)
    return { id: project.id, title: project.title, thumbnail: video.thumbnailUrl, runtime: `${Number(match?.[1] || 0)}:${String(Number(match?.[2] || 0)).padStart(2, '0')}`, aspectRatio: project.aspectRatio }
  })
}
