import { ServiceEditorialPage } from '@/components/ServiceEditorialPage'
import { MediaBarAnswersFeature } from '@/components/MediaBarAnswersFeature'
import { postProductionFaqs, postProductionVideo } from './content'

export default function PostProductionPage() {
  return (
    <ServiceEditorialPage
      hero={{
        eyebrow: 'Post-Production in San Antonio',
        title: 'Video Post-Production in San Antonio',
        emphasis: 'From First Cut to Final Delivery.',
        copy:
          'Video post-production in San Antonio for editorial, color, sound, graphics, captions, and multi-channel delivery. Bring a full project or existing footage.',
        image: '/images/media-library/media-bar-bts-20.jpg',
        alt: 'Production monitor showing a composed commercial shot',
        primaryCta: 'Start an Edit',
        secondaryCta: 'Watch the Finish',
      }}
      proof={[
        { value: 'Edit', label: 'Story & Structure' },
        { value: 'Color', label: 'Consistent Look' },
        { value: 'Sound', label: 'Clear & Intentional' },
        { value: 'Deliver', label: 'Every Channel' },
      ]}
      answer={{
        eyebrow: 'Quick answer',
        question: 'What does video post-production include?',
        response:
          'Video post-production turns recorded footage into finished content through story editing, color, dialogue cleanup, sound mixing, motion graphics, captions, review, versioning, and final delivery. The right workflow depends on the footage, audience, deadline, approval process, and channels where the video will appear.',
        points: ['Story editing', 'Color and sound', 'Graphics and captions', 'Cutdowns and delivery'],
      }}
      answerResource={(
        <MediaBarAnswersFeature
          title="Why projects"
          emphasis="get delayed."
          description="Ruben explains the post-production approval issue that slows corporate video projects and the three decisions that keep a finish moving."
          slugs={['why-corporate-videos-get-delayed']}
          placement="post-production"
        />
      )}
      overview={{
        eyebrow: 'Post Services',
        title: 'Editorial, Color, Sound,',
        emphasis: 'and Final Delivery.',
        copy:
          'Bring us a complete production or a drive full of footage. Our San Antonio post team builds the workflow around the story, review process, and finish it requires.',
      }}
      capabilities={[
        { number: '01', title: 'Editorial', copy: 'Story structure, selects, pacing, music, and the decisions that hold attention.' },
        { number: '02', title: 'Color', copy: 'Shot matching, correction, and a consistent visual finish.' },
        { number: '03', title: 'Dialogue & Mix', copy: 'Dialogue cleanup, sound design, music balance, and final mix preparation.' },
        { number: '04', title: 'Motion Integration', copy: 'Titles, lower thirds, tracked graphics, and branded visual systems.' },
        { number: '05', title: 'Captions & Accessibility', copy: 'Captioned and text-supported versions planned with the delivery set.' },
        { number: '06', title: 'Versioning & Delivery', copy: 'Cutdowns, aspect ratios, and exports organized by channel.' },
      ]}
      plan={{
        eyebrow: 'A Clean Handoff',
        title: 'Good Post Starts',
        emphasis: 'Before the First Cut.',
        copy:
          'A clear objective, organized media, and defined review path help the creative team spend its time improving the work.',
        image: '/images/studio-1.jpg',
        alt: 'Professional video editing and monitoring workspace',
        items: [
          'Footage inventory and technical review',
          'Audience, objective, and creative references',
          'Scripts, selects, or interview transcripts',
          'Brand assets, graphics, and music direction',
          'Review owners and approval stages',
          'Required formats, channels, and deadline',
        ],
      }}
      feature={{
        eyebrow: postProductionVideo.eyebrow,
        title: 'The Difference Is',
        emphasis: 'in the Decisions.',
        copy: postProductionVideo.copy,
        media: {
          kind: 'video',
          videoId: postProductionVideo.id,
          title: postProductionVideo.title,
          thumbnailUrl: postProductionVideo.thumbnail,
        },
        linkLabel: 'Watch the ST Engineering Brand Film',
        linkHref: '/work/watch/st-engineering-brand-film',
      }}
      deliverables={{
        eyebrow: 'Final Delivery',
        title: 'A Master Is Only',
        emphasis: 'the Beginning.',
        copy:
          'We organize the final package around how the content will actually be published, presented, and reused.',
        image: '/images/media-library/media-bar-bts-25.jpg',
        alt: 'Cinema camera and production crew on set',
        items: [
          'Primary master edit',
          'Campaign and social cutdowns',
          'Captioned and texted versions',
          'Color-managed final masters',
          'Broadcast and digital exports',
          'Organized delivery and handoff',
        ],
      }}
      processIntro={{
        eyebrow: 'Post Workflow',
        title: 'Clear Stages Keep',
        emphasis: 'the Finish Moving.',
        copy: 'Defined reviews and organized deliverables keep creative decisions focused and approvals visible.',
      }}
      process={[
        { number: '01', title: 'Ingest & Brief', copy: 'Review the media, objective, technical needs, and delivery list.' },
        { number: '02', title: 'Story Edit', copy: 'Build the structure, pacing, selects, and first creative direction.' },
        { number: '03', title: 'Finish', copy: 'Refine color, sound, graphics, captions, and final details.' },
        { number: '04', title: 'Version & Deliver', copy: 'Create approved cutdowns and exports for each planned destination.' },
      ]}
      relatedLinks={{
        eyebrow: 'Keep Exploring',
        title: 'Plan the Whole Content System.',
        copy:
          'Strong post-production starts with a clear production plan and ends with formats built for the places your audience will watch.',
        links: [
          {
            label: 'San Antonio Video Production',
            href: '/locations/san-antonio',
            description: 'Connect local planning, crew, studio support, filming, and final delivery through one San Antonio team.',
          },
          {
            label: 'Corporate Video',
            href: '/video-production/corporate',
            description: 'Plan interviews, brand stories, and campaign footage with the final edit in mind.',
          },
          {
            label: 'ST Engineering Brand Film',
            href: '/work/watch/st-engineering-brand-film',
            description: 'See a finished corporate brand film shaped in post-production.',
          },
        ],
      }}
      faqEyebrow="Post-production FAQ"
      faqTitle="Video Post-Production"
      faqEmphasis="in San Antonio."
      faqs={postProductionFaqs}
      cta={{
        eyebrow: 'Ready for the Timeline',
        title: 'Turn the Footage',
        emphasis: 'Into the Film.',
        copy:
          'Send us the project objective, source media details, deadline, and delivery list. We will help define the cleanest path through post.',
        primaryLabel: 'Start Post-Production',
        secondaryLabel: 'Talk With Our Team',
      }}
    />
  )
}
