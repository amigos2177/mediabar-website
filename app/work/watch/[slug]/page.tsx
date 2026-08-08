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

const categoryGuidance: Record<string, { heading: string; copy: string; planning: string }> = {
  Corporate: {
    heading: 'Corporate Storytelling With a Clear Business Purpose',
    copy: 'Corporate films work best when the message, audience, and next action are defined before production begins. That foundation helps interviews, supporting footage, graphics, and editorial choices work together instead of competing for attention.',
    planning: 'Media Bar supports corporate projects from creative development and interview planning through filming, editing, color, audio, captions, and delivery for the channels where the finished story will live.',
  },
  Commercials: {
    heading: 'Commercial Production Built Around the Campaign',
    copy: 'A finished commercial is one part of a larger campaign system. The strongest production plans account for the central idea, performance, locations, usage, cut lengths, aspect ratios, captions, and media specifications before the cameras roll.',
    planning: 'Media Bar plans broadcast and digital commercial work as one coordinated production, then prepares the versions needed for television, connected TV, paid social, pre-roll, websites, and internal review.',
  },
  Events: {
    heading: 'Event Coverage Designed for What Comes Next',
    copy: 'Useful event video starts with the intended deliverables. A recap, complete session recording, speaker clips, sponsor content, and social edits each require different coverage, audio, permissions, and turnaround planning.',
    planning: 'Media Bar coordinates camera positions, venue access, production audio, schedules, interviews, editing, graphics, captions, and delivery so the event can keep creating value after the room clears.',
  },
  Interviews: {
    heading: 'Interview Production That Protects the Conversation',
    copy: 'A strong interview depends on more than a good camera. Subject preparation, a calm set, thoughtful questions, clean sound, purposeful lighting, and enough supporting footage all help the final story feel natural and credible.',
    planning: 'Media Bar can support a single executive conversation or a larger interview series, with planning, production, editorial, graphics, captions, and channel-ready versions handled by one team.',
  },
  Medical: {
    heading: 'Healthcare Stories Planned With Care',
    copy: 'Healthcare production requires early coordination around privacy, access, clinical operations, participant comfort, review, and the information that may appear on camera. Those decisions protect both the people involved and the production day.',
    planning: 'Media Bar produces patient stories, provider profiles, education, training, and healthcare campaign content with a clear approval path from pre-production through final delivery.',
  },
  Motion: {
    heading: 'Motion Design That Makes the Idea Easier to Follow',
    copy: 'Motion graphics should clarify the message, establish hierarchy, and guide attention. The right approach may combine typography, animated data, compositing, product visualization, or live-action footage rather than adding movement for its own sake.',
    planning: 'Media Bar connects concept development, visual direction, animation, editorial, sound, and delivery so the finished piece feels like one coherent brand system.',
  },
  'Post Production': {
    heading: 'Post Production Is Where the Story Takes Shape',
    copy: 'Editorial decisions determine what the audience understands, remembers, and feels. Strong post-production organizes the material, finds the useful moments, and brings picture, color, sound, graphics, captions, and pacing into alignment.',
    planning: 'Media Bar can take a project from original footage through review and delivery, including cutdowns and alternate versions prepared for web, social, broadcast, presentations, and internal communications.',
  },
  Food: {
    heading: 'Food Video Designed Around Appetite and Detail',
    copy: 'Food behaves differently on camera than it does on a plate. Styling, texture, timing, lighting, lens choice, camera movement, and temperature all affect whether the finished image feels fresh and inviting.',
    planning: 'Media Bar plans food and beverage production for restaurants, hospitality teams, and consumer brands, with deliverables shaped for campaigns, menus, websites, social channels, and product launches.',
  },
}

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
  const guidance = categoryGuidance[project.category]
  const relatedProjects = workProjects
    .filter((candidate) => candidate.slug !== project.slug)
    .sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category))
    .slice(0, 3)

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
              embedImmediately
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

          {guidance ? (
            <section className={styles.context}>
              <p className={styles.sectionEyebrow}>Production Context</p>
              <h2>{guidance.heading}</h2>
              <div className={styles.contextCopy}>
                <p>{guidance.copy}</p>
                <p>{guidance.planning}</p>
                <p>
                  Media Bar Productions is headquartered in San Antonio and supports productions
                  across Texas. Explore the related service for a closer look at capabilities,
                  planning considerations, and the path from brief to final delivery.
                </p>
              </div>
              <Link className={styles.textLink} href={project.serviceHref}>
                Explore {project.category} production <span aria-hidden="true">→</span>
              </Link>
            </section>
          ) : null}

          <section className={styles.related}>
            <p className={styles.sectionEyebrow}>More From the Portfolio</p>
            <h2>Related Production Work</h2>
            <div className={styles.relatedGrid}>
              {relatedProjects.map((related) => (
                <Link className={styles.relatedCard} href={`/work/watch/${related.slug}`} key={related.slug}>
                  <span>{related.category} / {related.year}</span>
                  <h3>{related.title}</h3>
                  <p>Watch the film <span aria-hidden="true">→</span></p>
                </Link>
              ))}
            </div>
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
