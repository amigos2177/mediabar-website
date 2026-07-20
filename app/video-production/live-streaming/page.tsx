import { ServiceEditorialPage } from '@/components/ServiceEditorialPage'
import { liveStreamingFaqs } from './content'

export default function LiveStreamingPage() {
  return (
    <ServiceEditorialPage
      hero={{
        eyebrow: 'Live Streaming Production in San Antonio',
        title: 'Live Streaming',
        emphasis: 'Production Built for the Moment.',
        copy:
          'San Antonio live streaming production for conferences, town halls, launches, and hybrid events, with cameras, audio, graphics, rehearsal, platform delivery, and recording planned as one reliable system.',
        image: '/images/studio-9.jpg',
        alt: 'Video production control room with monitors and switching equipment',
        primaryCta: 'Plan a Live Stream',
        secondaryCta: 'See the Workflow',
      }}
      proof={[
        { value: 'Venue', label: 'Connectivity Check' },
        { value: 'Multi', label: 'Camera Program' },
        { value: 'Live', label: 'Graphics & Audio' },
        { value: 'Record', label: 'For On-Demand' },
      ]}
      answer={{
        eyebrow: 'Quick answer',
        question: 'What does a live streaming production company handle?',
        response:
          'Media Bar plans the complete live program in San Antonio, including venue connectivity, cameras, audio, graphics, playback, remote speakers, platform delivery, recording, and rehearsal. The result is one coordinated experience for viewers in the room, online, and on demand.',
        points: ['Multi-camera direction', 'Event audio', 'Graphics and playback', 'Platform delivery'],
      }}
      overview={{
        eyebrow: 'Live Formats',
        title: 'Built Around',
        emphasis: 'the Audience.',
        copy:
          'The production plan changes with the room, the platform, the speakers, and the way viewers need to participate.',
      }}
      capabilities={[
        { number: '01', title: 'Conferences', copy: 'Keynotes, breakouts, panels, and multi-session event coverage.' },
        { number: '02', title: 'Town Halls', copy: 'Leadership communication designed for in-room and remote teams.' },
        { number: '03', title: 'Product Launches', copy: 'Live reveals with playback, graphics, demos, and audience focus.' },
        { number: '04', title: 'Hybrid Programs', copy: 'A coordinated experience for people in the venue and online.' },
        { number: '05', title: 'Training & Education', copy: 'Structured instruction with presentation media and useful recordings.' },
        { number: '06', title: 'Private Webcasts', copy: 'Controlled-access programs planned around the chosen platform.' },
      ]}
      plan={{
        eyebrow: 'Technical Discovery',
        title: 'The Live Plan Starts',
        emphasis: 'at the Venue.',
        copy:
          'We review the environment, connectivity, program, presenters, and platform before equipment and crew are finalized.',
        image: '/images/media-library/concert-stage-performance.jpg',
        alt: 'Singer performing on a brightly lit concert stage',
        position: 'center',
        items: [
          'Venue internet and technical access',
          'Streaming platform and audience permissions',
          'Run of show and presentation media',
          'Camera, audio, and stage requirements',
          'Graphics, playback, and remote speakers',
          'Recording, rehearsal, and contingency plan',
        ],
      }}
      feature={{
        eyebrow: 'A Unified Program',
        title: 'One Production.',
        emphasis: 'Three Audiences.',
        copy:
          'The room, the live viewer, and the on-demand viewer each experience the program differently. We design the camera direction, graphics, audio, and recordings with all three in mind.',
        media: {
          kind: 'image',
          src: '/images/media-library/media-bar-bts-15.jpg',
          alt: 'Professional cinema camera configured for production',
        },
        linkLabel: 'Explore Event Production',
        linkHref: '/video-production/events',
      }}
      deliverables={{
        eyebrow: 'After the Broadcast',
        title: 'Keep the Program',
        emphasis: 'Working.',
        copy:
          'A live event can become a useful on-demand library when the recording and post-event deliverables are planned before show day.',
        image: '/images/studio-3.jpg',
        alt: 'Production crew preparing a camera and studio lighting',
        position: 'center',
        items: [
          'Live multi-camera program',
          'Branded graphics and playback',
          'Program recording',
          'Edited on-demand version',
          'Chaptered sessions or highlights',
          'Captioned versions when scoped',
        ],
      }}
      processIntro={{
        eyebrow: 'Live Workflow',
        title: 'Preparation Is',
        emphasis: 'Part of the Show.',
        copy:
          'Technical discovery, system design, and rehearsal reduce surprises and give the production team a clear path when the event begins.',
      }}
      process={[
        { number: '01', title: 'Brief & Venue', copy: 'Review the audience, platform, room, connectivity, and program.' },
        { number: '02', title: 'System Design', copy: 'Define cameras, audio, graphics, signal flow, crew, and contingencies.' },
        { number: '03', title: 'Build & Rehearse', copy: 'Test the complete program with presenters, media, and remote elements.' },
        { number: '04', title: 'Go Live & Archive', copy: 'Direct the show, monitor delivery, and prepare the scoped recordings.' },
      ]}
      relatedLinks={{
        eyebrow: 'Live Production Resources',
        title: 'Plan the Stream Before the Show.',
        copy:
          'Use these service and planning pages to align the venue, program, audience, and post-event content before technical design begins.',
        links: [
          {
            label: 'Event Video Production',
            href: '/video-production/events',
            description: 'Plan recorded event coverage and live delivery as one coordinated production.',
          },
          {
            label: 'Conference Video Guide',
            href: '/blog/conference-video-production-guide',
            description: 'Build a practical content plan for keynotes, sessions, recaps, and follow-up assets.',
          },
          {
            label: 'Post Production',
            href: '/video-production/post-production',
            description: 'Turn the live recording into edited sessions, highlights, captions, and on-demand content.',
          },
        ],
      }}
      faqEyebrow="Questions"
      faqTitle="Planning a"
      faqEmphasis="Live Production."
      faqs={liveStreamingFaqs}
      cta={{
        eyebrow: 'Before You Go Live',
        title: 'Let’s Build',
        emphasis: 'the Run of Show.',
        copy:
          'Share the date, venue, audience, platform, speakers, and program outline. We will help turn it into a practical production plan.',
        primaryLabel: 'Plan Your Live Stream',
        secondaryLabel: 'Talk With Our Team',
      }}
    />
  )
}
