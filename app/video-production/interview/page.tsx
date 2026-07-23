import { ServiceEditorialPage } from '@/components/ServiceEditorialPage'
import { MediaBarAnswersFeature } from '@/components/MediaBarAnswersFeature'
import { interviewFaqs, interviewVideo } from './content'

export default function InterviewPage() {
  return (
    <ServiceEditorialPage
      hero={{
        eyebrow: 'Interview Video Production in San Antonio',
        title: 'Make the Subject Comfortable.',
        emphasis: 'Make the Story Matter.',
        copy:
          'Thoughtful direction, intentional lighting, clean audio, and the right questions turn an interview into a story people want to follow.',
        image: '/images/media-library/media-bar-bts-11.jpg',
        alt: 'Multi-camera interview production in a home setting',
        primaryCta: 'Plan an Interview',
        secondaryCta: 'Watch Interview Work',
      }}
      proof={[
        { value: 'Prepared', label: 'Questions & Story' },
        { value: 'Directed', label: 'Natural Delivery' },
        { value: 'Clean', label: 'Dialogue Audio' },
        { value: 'Useful', label: 'Long & Short Cuts' },
      ]}
      answer={{
        eyebrow: 'Quick answer',
        question: 'Can three executive interviews fit in one filming day?',
        response:
          'Usually yes, when the interviews share one location and a consistent setup. The schedule still needs to protect loading, lighting and audio checks, executive preparation, transitions, and supporting footage. Multiple locations or major setup changes may justify a second day.',
        points: ['One location', 'Reserved interview windows', 'Transition time', 'Supporting footage'],
      }}
      answerResource={(
        <MediaBarAnswersFeature
          title="Three executives."
          emphasis="One filming day?"
          description="Ruben explains the schedule, location, and setup decisions that determine whether three executive interviews can fit comfortably into one production day."
          slugs={['three-executive-interviews-in-one-day']}
          placement="interview"
        />
      )}
      overview={{
        eyebrow: 'Formats We Produce',
        title: 'The Right Interview',
        emphasis: 'for the Story.',
        copy:
          'We adapt the set, crew, conversation, and final edit to the people you need to reach.',
      }}
      capabilities={[
        { number: '01', title: 'Executive & Leadership', copy: 'Clear, credible communication from the people leading the organization.' },
        { number: '02', title: 'Customer Testimonials', copy: 'Real experiences shaped into focused, useful proof.' },
        { number: '03', title: 'Documentary Profiles', copy: 'Character-led stories with context, texture, and room to breathe.' },
        { number: '04', title: 'Thought Leadership', copy: 'Expert perspectives designed for campaigns, education, and publishing.' },
        { number: '05', title: 'Panels & Conversations', copy: 'Multi-person coverage with a visual and editorial plan.' },
        { number: '06', title: 'Recruiting & Culture', copy: 'Employee voices that show how the organization actually works.' },
      ]}
      plan={{
        eyebrow: 'Before the Cameras',
        title: 'A Better Interview Starts',
        emphasis: 'With a Better Brief.',
        copy:
          'We identify the point of the story, prepare the subject, and design the set around the final audience and deliverables.',
        image: '/images/media-library/documentary-interview-portrait.png',
        alt: 'Finished documentary interview portrait',
        items: [
          'Audience and communication objective',
          'Question path and story themes',
          'Subject preparation and scheduling',
          'Location, background, and lighting approach',
          'Wardrobe, sound, and production logistics',
          'B-roll and final deliverable plan',
        ],
      }}
      feature={{
        eyebrow: interviewVideo.eyebrow,
        title: 'A Strong Interview Feels',
        emphasis: 'Like a Conversation.',
        copy: interviewVideo.copy,
        media: {
          kind: 'video',
          videoId: interviewVideo.id,
          title: interviewVideo.title,
          thumbnailUrl: interviewVideo.thumbnail,
        },
        linkLabel: 'Explore More Work',
        linkHref: '/work',
      }}
      deliverables={{
        eyebrow: 'Built for the Edit',
        title: 'One Conversation Becomes',
        emphasis: 'a Content System.',
        copy:
          'We plan the master story and its shorter versions together, so every cut feels intentional instead of leftover.',
        image: '/images/media-library/media-bar-bts-15.jpg',
        alt: 'Cinema camera prepared for a professional video production',
        items: [
          'Long-form interview or profile',
          'Short campaign and social edits',
          'Captions and accessible versions',
          'Pull quotes and talking-point clips',
          'Vertical and platform-specific versions',
          'Thumbnail and title-frame options',
        ],
      }}
      processIntro={{
        eyebrow: 'How We Work',
        title: 'Calm Set. Clear Story.',
        emphasis: 'Useful Finish.',
        copy: 'Every stage is designed to help the subject feel prepared and the final story feel purposeful.',
      }}
      process={[
        { number: '01', title: 'Story Brief', copy: 'Define the audience, purpose, subject, and final use.' },
        { number: '02', title: 'Interview Prep', copy: 'Shape questions, prepare the subject, and design the setting.' },
        { number: '03', title: 'Production', copy: 'Direct the conversation and capture the supporting visual story.' },
        { number: '04', title: 'Edit & Version', copy: 'Build the main piece, refine the finish, and create the planned cuts.' },
      ]}
      faqEyebrow="Questions"
      faqTitle="Planning an Interview"
      faqEmphasis="Production."
      faqs={interviewFaqs}
      cta={{
        eyebrow: 'Start With the Story',
        title: 'Who Needs',
        emphasis: 'to Be Heard?',
        copy:
          'Tell us who you are interviewing, what the audience should understand, and where the finished story needs to live.',
        primaryLabel: 'Plan Your Interview',
        secondaryLabel: 'Talk With Our Team',
      }}
    />
  )
}
