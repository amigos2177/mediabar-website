import { ServiceEditorialPage } from '@/components/ServiceEditorialPage'
import { liveStreamingFaqs } from './content'

export default function LiveStreamingPage() {
  return (
    <ServiceEditorialPage
      hero={{
        eyebrow: 'Live Streaming Production in San Antonio',
        title: 'Plan the Signal.',
        emphasis: 'Protect the Moment.',
        copy:
          'Multi-camera production, event audio, graphics, remote contributors, and platform delivery planned as one live system.',
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
        image: '/images/studio-4.jpg',
        alt: 'Live video switcher and production control equipment',
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
        linkHref: '/video-production/event-video',
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
