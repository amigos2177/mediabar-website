import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '../../../../components/Layout'
import { BreadcrumbJsonLd } from '../../../../components/JsonLd'
import { VideoObjectSchema, type PortfolioVideo } from '../../../../components/VideoObjectSchema'
import VimeoPlayer from '../../../../components/VimeoPlayer'
import workVideos from '../../../../data/work-videos.json'
import { getWorkProject, workProjects } from '../../../../data/work-projects'
import styles from './watch.module.css'

export const dynamicParams = false

const videos = workVideos as PortfolioVideo[]

function getVideo(id: string) {
  return videos.find((video) => video.embedUrl?.endsWith(`/${id}`))
}

function formatDuration(duration?: string) {
  if (!duration) return 'Film'
  const match = duration.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/)
  if (!match) return duration
  const hours = Number(match[1] || 0)
  const minutes = Number(match[2] || 0)
  const seconds = Number(match[3] || 0)
  return [hours, minutes, seconds]
    .filter((value, index) => index === 2 || value > 0)
    .map((value, index, values) => index < values.length - 1 ? String(value) : String(value).padStart(2, '0'))
    .join(':')
}

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getWorkProject(slug)
  if (!project) return {}
  const video = getVideo(project.id)
  const description = video?.description || `${project.title}, produced by Media Bar Productions in San Antonio.`
  const canonical = `https://www.mediabarproductions.com/work/watch/${slug}`

  return {
    title: `${project.title} | Media Bar Productions`,
    description,
    alternates: { canonical },
    openGraph: {
      title: project.title,
      description,
      type: 'video.other',
      url: canonical,
      ...(video?.thumbnailUrl && {
        images: [{
          url: Array.isArray(video.thumbnailUrl) ? video.thumbnailUrl[0] : video.thumbnailUrl,
          alt: project.title,
        }],
      }),
    },
  }
}

export default async function WatchPage({ params }: Props) {
  const { slug } = await params
  const project = getWorkProject(slug)
  if (!project) notFound()
  const video = getVideo(project.id)
  if (!video) notFound()

  const description = video.description || `${project.title}, produced by Media Bar Productions in San Antonio.`

  return (
    <Layout>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Our Work', url: '/work' },
        { name: project.title, url: `/work/watch/${project.slug}` },
      ]} />
      <VideoObjectSchema videos={[video]} />

      <main className={styles.page}>
        <div className={styles.inner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/work">Our Work</Link>
            <span>/</span>
            <span>{project.title}</span>
          </nav>

          <header className={styles.header}>
            <div>
              <p className={styles.eyebrow}>{project.category} / {project.year}</p>
              <h1 className={styles.title}>{project.title}</h1>
            </div>
            <p className={styles.summary}>{description}</p>
          </header>

          <div className={styles.player}>
            <VimeoPlayer
              videoId={project.id}
              title={`${project.title} by Media Bar Productions`}
              thumbnailUrl={Array.isArray(video.thumbnailUrl) ? video.thumbnailUrl[0] : video.thumbnailUrl}
              eager
            />
          </div>

          <section className={styles.details}>
            <div>
              <h2>About This Film</h2>
              <p>{description}</p>
              <div className={styles.actions}>
                <Link className={styles.primary} href="/project-planner">Plan a project</Link>
                <Link className={styles.secondary} href={project.serviceHref}>Explore {project.category}</Link>
                <Link className={styles.secondary} href="/work">More work</Link>
              </div>
            </div>
            <dl className={styles.meta}>
              <div><dt>Category</dt><dd>{project.category}</dd></div>
              <div><dt>Year</dt><dd>{project.year}</dd></div>
              <div><dt>Runtime</dt><dd>{formatDuration(video.duration)}</dd></div>
              <div><dt>Studio</dt><dd>Media Bar Productions</dd></div>
            </dl>
          </section>

          {project.transcript?.length ? (
            <section className={styles.transcript}>
              <h2>Transcript</h2>
              {project.transcript.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ) : null}
        </div>
      </main>
    </Layout>
  )
}
