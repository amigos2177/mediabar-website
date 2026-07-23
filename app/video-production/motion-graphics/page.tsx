import { ServiceEditorialPage } from '@/components/ServiceEditorialPage'
import { motionGraphicsFaqs, motionGraphicsVideo } from './content'

export default function MotionGraphicsPage() {
  return (
    <ServiceEditorialPage
      hero={{
        eyebrow: 'Motion Graphics Production in San Antonio',
        title: 'Make the Idea Clear.',
        emphasis: 'Give It Motion.',
        copy:
          'San Antonio motion graphics for explainers, titles, product visuals, animated data, and branded systems that make information easier to understand.',
        image: '/images/media-library/motion-graphics-spider-verse.jpg',
        alt: 'Animated Spider-Man title frame with layered comic-book textures',
        position: 'center',
        primaryCta: 'Plan a Motion Project',
        secondaryCta: 'Watch Featured Motion',
      }}
      proof={[
        { value: 'Script', label: 'Message First' },
        { value: 'Design', label: 'Brand Aligned' },
        { value: 'Motion', label: 'Built to Explain' },
        { value: 'Version', label: 'For Each Channel' },
      ]}
      answer={{
        eyebrow: 'Quick answer',
        question: 'What are motion graphics used for?',
        response:
          'Motion graphics use animated typography, illustration, data, product visuals, titles, and branded design to make an idea easier to understand. They can stand alone as an explainer or work inside live-action video as callouts, transitions, lower thirds, and visual evidence.',
        points: ['Explainers', 'Animated data', 'Titles and openers', 'Live-action integration'],
      }}
      overview={{
        eyebrow: 'Motion Capabilities',
        title: 'Design That',
        emphasis: 'Moves With Purpose.',
        copy:
          'The visual style is only one decision. The format, pacing, information hierarchy, and final destination shape the complete motion system.',
      }}
      capabilities={[
        { number: '01', title: 'Explainers', copy: 'Structured visual stories that make products, services, and processes easier to follow.' },
        { number: '02', title: 'Brand Systems', copy: 'Repeatable motion language for campaigns, content series, and presentations.' },
        { number: '03', title: 'Animated Data', copy: 'Charts, numbers, and evidence translated into clear visual progression.' },
        { number: '04', title: 'Titles & Openers', copy: 'Distinct introductions, lower thirds, transitions, and title packages.' },
        { number: '05', title: 'Product Visualization', copy: 'Designed motion that reveals features, materials, and product stories.' },
        { number: '06', title: 'Live-Action Integration', copy: 'Graphics, callouts, tracking, and visual layers built into filmed footage.' },
      ]}
      plan={{
        eyebrow: 'Creative Development',
        title: 'Motion Begins',
        emphasis: 'Before Animation.',
        copy:
          'The message, script, storyboard, style frames, sound, and delivery plan are approved in stages before the full piece is built.',
        image: '/images/media-library/motion-graphics-marvel-ages.jpg',
        alt: 'Animated Marvel trading card package with comic-book graphics',
        position: 'center',
        items: [
          'Audience and communication objective',
          'Script and information hierarchy',
          'Storyboard and visual progression',
          'Style frames and brand alignment',
          'Voiceover, music, and sound direction',
          'Aspect ratios, versions, and delivery specs',
        ],
      }}
      feature={{
        eyebrow: motionGraphicsVideo.eyebrow,
        title: 'Show the Detail.',
        emphasis: 'Guide the Eye.',
        copy: motionGraphicsVideo.copy,
        media: {
          kind: 'video',
          videoId: motionGraphicsVideo.id,
          title: motionGraphicsVideo.title,
          thumbnailUrl: motionGraphicsVideo.thumbnail,
        },
        linkLabel: 'Explore More Work',
        linkHref: '/work',
      }}
      deliverables={{
        eyebrow: 'A Flexible System',
        title: 'Design Once.',
        emphasis: 'Publish With Intention.',
        copy:
          'The final package is organized around the places the motion will appear, from a master film to shorter campaign and presentation assets.',
        image: '/images/media-library/motion-graphics-superman.jpg',
        alt: 'Animated Superman trading card arranged with branded typography',
        position: 'center',
        items: [
          'Master animation',
          'Campaign and social cutdowns',
          'Transparent graphic overlays',
          'Title and lower-third package',
          'Captioned versions',
          'Channel-specific exports',
        ],
      }}
      processIntro={{
        eyebrow: 'Motion Workflow',
        title: 'Approve the Idea.',
        emphasis: 'Then Build the Motion.',
        copy:
          'Stage-based reviews keep major creative decisions visible before the most detailed animation work begins.',
      }}
      process={[
        { number: '01', title: 'Script & Board', copy: 'Define the message, timing, structure, and visual sequence.' },
        { number: '02', title: 'Style Frames', copy: 'Establish the designed look, typography, illustration, and brand language.' },
        { number: '03', title: 'Animation', copy: 'Build movement, transitions, compositing, and visual refinement.' },
        { number: '04', title: 'Sound & Delivery', copy: 'Complete voice, music, mix, captions, versions, and final exports.' },
      ]}
      relatedLinks={{
        eyebrow: 'Build the complete piece',
        title: 'Connect Motion to the Story.',
        copy:
          'Motion graphics work best when the script, live-action footage, edit, and final channels are planned as one communication system.',
        links: [
          {
            label: 'Post-Production',
            href: '/video-production/post-production',
            description: 'Combine editorial, color, sound, graphics, captions, and final versions in one finish workflow.',
          },
          {
            label: 'Corporate Video',
            href: '/video-production/corporate',
            description: 'Use animation to support executive stories, explain services, and extend a corporate content library.',
          },
          {
            label: 'AI Video Production Limits',
            href: '/blog/ai-video-production-limits',
            description: 'See where AI tools can support production and where human creative direction still matters.',
          },
        ],
      }}
      faqEyebrow="Questions"
      faqTitle="Planning a"
      faqEmphasis="Motion Project."
      faqs={motionGraphicsFaqs}
      cta={{
        eyebrow: 'Start With the Message',
        title: 'What Should Motion',
        emphasis: 'Make Clear?',
        copy:
          'Share the audience, idea, script status, brand assets, deadline, and final channels. We will help shape the right production path.',
        primaryLabel: 'Plan Your Motion Project',
        secondaryLabel: 'Talk With Our Team',
      }}
    />
  )
}
