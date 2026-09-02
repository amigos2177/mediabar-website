import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import LiteYouTubeEmbed from '@/components/LiteYouTubeEmbed'
import { mediaBarAnswersEpisodes } from '@/data/media-bar-answers'
import {
  videoFaqCategories,
  videoProductionFaqs,
} from '@/data/video-production-faq'
import AskQuestionForm from './AskQuestionForm'
import styles from './video-production-faq.module.css'

const VIDEO_ADVISOR_URL = 'https://chatgpt.com/g/g-6a5eca9bc22081919d134d3a2d686ba3-texas-video-production-advisor'
const mediaBarAnswerPathsByVideoId = new Map(
  mediaBarAnswersEpisodes.map((episode) => [
    episode.video.youtubeId,
    `/resources/media-bar-answers/${episode.slug}`,
  ]),
)

const featuredQuestions = [
  'how-is-a-video-production-budget-determined',
  'how-far-in-advance-should-video-production-start',
  'how-to-choose-a-video-production-company',
  'can-one-video-shoot-create-multiple-assets',
]

const productionExamples = [
  {
    label: 'Broadcast campaign',
    title: 'One idea, five RBFCU stories, four Texas markets.',
    copy: 'Media Bar handled full production and post-production for five broadcast commercials, while co-writing two spots. The campaign shows why format, market, and version planning belong in the conversation before filming begins.',
    image: '/images/rbfcu-stills-grid.jpg',
    imageAlt: 'Scenes from the RBFCU Go Beyond Banking broadcast campaign',
    href: '/work/rbfcu-go-beyond-banking',
    linkLabel: 'Read the campaign case study',
  },
  {
    label: 'Event recap',
    title: 'A live program becomes a useful story after the room clears.',
    copy: 'The published NAFA day-two recap is a concrete example of turning speakers, audience energy, and key moments into a concise post-event film. That result starts with a coverage plan tied to the final edit.',
    image: '/images/clients-bts-5.jpg',
    imageAlt: 'Camera operator covering guests during a Media Bar event production',
    href: '/work/watch/nafa-conference-recap',
    linkLabel: 'Watch the NAFA recap',
  },
  {
    label: 'Patient story',
    title: 'Human interviews need care before they need polish.',
    copy: 'Media Bar publishes patient-story work alongside its commercial and corporate portfolio. These productions reinforce the value of participant preparation, a calm interview environment, and early coordination with the organization responsible for privacy and clinical accuracy.',
    image: '/images/media-library/healthcare-video-production-san-antonio.jpg',
    imageAlt: 'Media Bar crew filming with medical equipment in a clinical environment',
    href: '/work/watch/wound-local-patient-story',
    linkLabel: 'Watch a patient story',
  },
]

export default function VideoProductionFaqPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src="/images/media-library/media-bar-bts-33.jpg"
              alt="Camera operator working inside a home during a Media Bar production"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.heroScrim} />
          </div>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Educational planning guide for Texas organizations</p>
            <h1>
              Frequently asked questions{' '}
              <em>about video production.</em>
            </h1>
            <p className={styles.heroIntro}>
              Learn how strategy, budget factors, schedules, filming, approvals,
              and delivery shape a production. For questions about Media Bar&apos;s
              specific working process, visit our company FAQ.
            </p>
            <div className={styles.heroActions}>
              <a href="#topics" className={styles.primaryButton}>Explore the answers</a>
              <Link href="/resources/media-bar-answers" className={styles.secondaryButton}>Watch Media Bar Answers</Link>
              <Link href="/faq" className={styles.secondaryButton}>Working with Media Bar</Link>
            </div>
            <p className={styles.reviewLine}>Published July 20, 2026 · Reviewed September 2, 2026</p>
          </div>
        </section>

        <section className={styles.trustBar} aria-label="Resource credentials">
          <div><strong>32</strong><span>Practical answers</span></div>
          <div><strong>6</strong><span>Planning topics</span></div>
          <div><strong>2011</strong><span>Producing in San Antonio since</span></div>
          <div><strong>Texas</strong><span>Statewide production context</span></div>
        </section>

        <section className={styles.advisor} aria-labelledby="advisor-heading">
          <div className={styles.advisorIdentity} aria-hidden="true">
            <span className={styles.advisorSeal}>TX</span>
            <div>
              <small>Media Bar presents</small>
              <strong>Texas Video<br />Production Advisor</strong>
              <span>Available in ChatGPT</span>
            </div>
          </div>
          <div className={styles.advisorCopy}>
            <p className={styles.eyebrow}>Interactive planning resource</p>
            <h2 id="advisor-heading">Ask the Texas Video Production Advisor.</h2>
            <p>
              Talk through a corporate video, commercial, interview, event, live
              stream, or post-production plan. The advisor uses this reviewed FAQ
              and Media Bar&apos;s production knowledge to give practical guidance
              before a real scope is defined.
            </p>
            <ul>
              <li>Useful for early planning and better production conversations</li>
              <li>Careful about estimates, assumptions, privacy, and technical risk</li>
              <li>Routes active Texas projects to the Media Bar project planner</li>
            </ul>
            <div className={styles.advisorActions}>
              <a
                href={VIDEO_ADVISOR_URL}
                className={styles.primaryButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the advisor in ChatGPT <span aria-hidden="true">↗</span>
              </a>
              <Link href="/project-planner" className={styles.secondaryButton}>
                Plan a real project
              </Link>
            </div>
            <p className={styles.advisorPrivacy}>
              <strong>Privacy note:</strong> ChatGPT is a third-party service. Do
              not enter patient information, confidential business details,
              unreleased campaign material, or other sensitive information.
            </p>
          </div>
        </section>

        <section className={styles.startHere} aria-labelledby="start-heading">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Start here</p>
            <h2 id="start-heading">Four decisions that shape almost every project.</h2>
          </div>
          <div className={styles.featuredGrid}>
            {featuredQuestions.map((slug, index) => {
              const faq = videoProductionFaqs.find((item) => item.slug === slug)
              if (!faq) return null
              return (
                <a key={faq.slug} href={`#${faq.slug}`}>
                  <span>0{index + 1}</span>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer[0]}</p>
                  <strong>Read the answer →</strong>
                </a>
              )
            })}
          </div>
        </section>

        <section className={styles.fieldNotes} aria-labelledby="field-notes-heading">
          <div className={styles.fieldNotesHeading}>
            <div>
              <p className={styles.eyebrow}>From the work</p>
              <h2 id="field-notes-heading">Planning lessons applied in real productions.</h2>
            </div>
            <p>
              The strongest guidance comes from assignments that had real audiences,
              deadlines, locations, approvals, and delivery requirements.
            </p>
          </div>
          <div className={styles.fieldNotesGrid}>
            {productionExamples.map((example) => (
              <article key={example.href}>
                <div className={styles.fieldNoteImage}>
                  <Image
                    src={example.image}
                    alt={example.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.fieldNoteCopy}>
                  <p>{example.label}</p>
                  <h3>{example.title}</h3>
                  <span>{example.copy}</span>
                  <Link href={example.href}>{example.linkLabel} →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.topicSection} id="topics" aria-labelledby="topics-heading">
          <div className={styles.topicIntro}>
            <p className={styles.eyebrow}>Browse by topic</p>
            <h2 id="topics-heading">Find the part of production you are planning now.</h2>
            <p>
              These are educational answers, not one-size-fits-all promises. Scope,
              rights, safety, accessibility, privacy, and regulatory needs should
              be confirmed for each project.
            </p>
          </div>
          <nav className={styles.topicNav} aria-label="Video production FAQ topics">
            {videoFaqCategories.map((category, index) => (
              <a key={category.slug} href={`#${category.slug}`}>
                <span>0{index + 1}</span>
                <strong>{category.name}</strong>
                <small>{category.description}</small>
              </a>
            ))}
          </nav>
        </section>

        <div className={styles.guideLayout}>
          <aside className={styles.guideAside}>
            <p className={styles.eyebrow}>A working guide</p>
            <h2>Direct answers, with the context that changes them.</h2>
            <p>
              Each answer begins with the practical decision, then explains the
              production factors worth discussing with your team.
            </p>
            <Link href="/about/editorial-policy">Read our editorial standards <span>→</span></Link>
          </aside>

          <div className={styles.answerGroups}>
            {videoFaqCategories.map((category) => {
              const items = videoProductionFaqs.filter((faq) => faq.category === category.name)
              return (
                <section key={category.slug} className={styles.answerGroup} id={category.slug}>
                  <div className={styles.answerGroupHeading}>
                    <p>{category.name}</p>
                    <span>{items.length} answers</span>
                  </div>
                  <div className={styles.answerList}>
                    {items.map((faq, index) => (
                      <details key={faq.slug} id={faq.slug} open={index === 0}>
                        <summary>
                          <span>{faq.question}</span>
                          <i aria-hidden="true">+</i>
                        </summary>
                        <div className={styles.answerBody}>
                          {faq.answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                          {faq.video && (
                            <div className={styles.answerVideo}>
                              <LiteYouTubeEmbed
                                youtubeId={faq.video.youtubeId}
                                title={faq.video.title}
                                thumbnailPath={faq.video.thumbnailPath}
                                className={styles.answerVideoFrame}
                              />
                              <div className={styles.answerVideoCopy}>
                                <span>Media Bar Answers · 1 minute</span>
                                <h4>{faq.video.title}</h4>
                                <p>{faq.video.description}</p>
                                <small>
                                  This video features Ruben Garcia&apos;s digital avatar.
                                  The guidance and script come directly from Media Bar Productions.
                                </small>
                                <a
                                  href={`https://www.youtube.com/watch?v=${faq.video.youtubeId}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Watch on YouTube <span aria-hidden="true">↗</span>
                                </a>
                                {mediaBarAnswerPathsByVideoId.get(faq.video.youtubeId) && (
                                  <Link
                                    href={mediaBarAnswerPathsByVideoId.get(faq.video.youtubeId)!}
                                  >
                                    Read the transcript and takeaways <span aria-hidden="true">→</span>
                                  </Link>
                                )}
                              </div>
                            </div>
                          )}
                          {faq.links && (
                            <div className={styles.answerLinks}>
                              {faq.links.map((link) => link.external ? (
                                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                                  {link.label} <span aria-hidden="true">↗</span>
                                </a>
                              ) : (
                                <Link key={link.href} href={link.href}>
                                  {link.label} <span aria-hidden="true">→</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>

        <section className={styles.author} aria-labelledby="author-heading">
          <div className={styles.authorImage}>
            <Image
              src="/images/media-library/ruben-garcia-founder-headshot-01.jpeg"
              alt="Ruben Garcia, founder and executive producer of Media Bar Productions"
              fill
              sizes="(max-width: 700px) 10rem, 14rem"
            />
          </div>
          <div className={styles.authorCopy}>
            <p className={styles.eyebrow}>Written and reviewed by</p>
            <h2 id="author-heading">Ruben Garcia</h2>
            <p className={styles.authorRole}>Founder and Executive Producer, Media Bar Productions</p>
            <p>
              This guide is based on the planning, filming, editing, and delivery
              questions Media Bar has encountered while producing commercials,
              corporate films, interviews, events, live broadcasts, and campaign
              content in San Antonio and across Texas since 2011.
            </p>
            <div className={styles.authorLinks}>
              <Link href="/about#founder">About Ruben and Media Bar →</Link>
              <Link href="/about/editorial-policy">How this resource is reviewed →</Link>
            </div>
          </div>
        </section>

        <section className={styles.companyFaq}>
          <div>
            <p className={styles.eyebrow}>Looking for Media Bar policies?</p>
            <h2>Hiring questions have their own straight answers.</h2>
          </div>
          <div>
            <p>
              Visit the company FAQ for Media Bar-specific details about estimates,
              agreements, studio access, delivery, ownership, and what it is like to
              work with our team.
            </p>
            <Link href="/faq">Read the Media Bar company FAQ →</Link>
          </div>
        </section>

        <section className={styles.askQuestion} aria-labelledby="ask-question-heading">
          <div className={styles.askQuestionIntro}>
            <p className={styles.eyebrow}>Help shape the resource</p>
            <h2 id="ask-question-heading">What production question are you still carrying?</h2>
            <p>
              Ask a practical question we have not answered. A real person on the
              Media Bar team will review it. Useful recurring questions can inform
              future updates to this guide.
            </p>
            <div className={styles.askQuestionBoundary}>
              <strong>For educational questions</strong>
              <span>Use the project planner when you are ready to discuss a specific scope, schedule, or estimate.</span>
              <Link href="/project-planner">Open the project planner →</Link>
            </div>
          </div>
          <AskQuestionForm />
        </section>

        <section className={styles.cta}>
          <p className={styles.eyebrow}>Turn the answer into a plan</p>
          <h2>Tell us what your audience needs to understand.</h2>
          <p>
            Share the goal, deadline, audience, and known constraints. We will help
            you identify the next useful production decision.
          </p>
          <div>
            <Link href="/project-planner" className={styles.primaryButton}>Start the project planner</Link>
            <Link href="/contact" className={styles.secondaryButton}>Contact Media Bar</Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
