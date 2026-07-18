import { ServiceEditorialPage } from '@/components/ServiceEditorialPage'
import { postProductionFaqs, postProductionVideo } from './content'

export default function PostProductionPage() {
  return (
    <ServiceEditorialPage
      hero={{
        eyebrow: 'Post-Production in San Antonio',
        title: 'Find the Story.',
        emphasis: 'Finish Every Detail.',
        copy:
          'Editorial, color, sound, graphics, captions, and versioning come together in one focused post-production workflow.',
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
      overview={{
        eyebrow: 'Post Services',
        title: 'From Raw Footage',
        emphasis: 'to Final Master.',
        copy:
          'Bring us a complete production or a drive full of footage. We build the workflow around the story and the finish it requires.',
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
        linkLabel: 'Explore More Work',
        linkHref: '/our-work',
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
      faqEyebrow="Questions"
      faqTitle="Planning"
      faqEmphasis="Post-Production."
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
