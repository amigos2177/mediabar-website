import { ServiceEditorialPage } from '@/components/ServiceEditorialPage'
import { medicalFaqs, medicalVideo } from './content'

export default function MedicalVideoPage() {
  return (
    <ServiceEditorialPage
      hero={{
        eyebrow: 'Medical Video Production in San Antonio',
        title: 'Make Complex Care Clear.',
        emphasis: 'Protect What Matters.',
        copy:
          'Full-service medical video production for patient stories, provider expertise, education, training, and healthcare campaigns, produced with careful planning and a human point of view.',
        image: '/images/bts-10.jpg',
        alt: 'Multi-camera healthcare interview production at a San Antonio clinic',
        position: 'center',
        primaryCta: 'Plan a Medical Video',
        secondaryCta: 'Watch a Patient Story',
      }}
      proof={[
        { value: 'Clinical', label: 'Context First' },
        { value: 'Patient', label: 'Comfort in Focus' },
        { value: 'Review', label: 'Built Into Workflow' },
        { value: 'Secure', label: 'Scope Planning' },
      ]}
      answer={{
        eyebrow: 'Quick answer',
        question: 'What is medical video production?',
        response:
          'Medical video production turns clinical expertise, patient experiences, services, training, and healthcare campaigns into clear, carefully reviewed video. Media Bar coordinates the production plan with the client team so access, consent, comfort, terminology, and stakeholder approvals are addressed before delivery.',
        points: ['Patient education', 'Provider profiles', 'Clinical training', 'Healthcare campaigns'],
      }}
      overview={{
        eyebrow: 'Healthcare Formats',
        title: 'Clear Information.',
        emphasis: 'Human Stories.',
        copy:
          'San Antonio healthcare organizations need content that is understandable, credible, useful, and practical to review with clinical and communications stakeholders.',
      }}
      capabilities={[
        { number: '01', title: 'Patient Education', copy: 'Clear explanations that help people understand care, preparation, and next steps.' },
        { number: '02', title: 'Provider Profiles', copy: 'Expertise and approach presented through a credible, personal story.' },
        { number: '03', title: 'Service-Line Stories', copy: 'Focused campaigns that connect services with real audience needs.' },
        { number: '04', title: 'Patient Testimonials', copy: 'First-person experiences produced with care and appropriate context.' },
        { number: '05', title: 'Clinical Training', copy: 'Structured content for teams, education, and internal communication.' },
        { number: '06', title: 'Medical Device', copy: 'Product, workflow, and application stories built for the intended viewer.' },
      ]}
      plan={{
        eyebrow: 'Production Planning',
        title: 'Clinical Context Shapes',
        emphasis: 'the Entire Shoot.',
        copy:
          'Access, consent, comfort, terminology, scheduling, and review responsibilities are defined before the production team arrives.',
        image: '/images/media-library/medical-doctor-patient-consultation.jpg',
        alt: 'Doctor speaking with a patient in a medical office',
        position: 'center 28%',
        items: [
          'Clinical and communications stakeholders',
          'Consent, access, and privacy requirements',
          'Patient and provider comfort',
          'Terminology, claims, and key messages',
          'Facility schedule and care environment',
          'Review stages and final deliverables',
        ],
      }}
      feature={{
        eyebrow: medicalVideo.eyebrow,
        title: 'Care Is Personal.',
        emphasis: 'The Story Should Be Too.',
        copy: medicalVideo.copy,
        media: {
          kind: 'video',
          videoId: medicalVideo.id,
          title: medicalVideo.title,
          thumbnailUrl: medicalVideo.thumbnail,
        },
        linkLabel: 'Explore More Work',
        linkHref: '/work',
      }}
      deliverables={{
        eyebrow: 'Communication System',
        title: 'One Production.',
        emphasis: 'Many Useful Formats.',
        copy:
          'The delivery set can support patients, providers, internal teams, campaigns, recruiting, or education without forcing one edit to do every job.',
        image: '/images/media-library/medical-provider-profile.jpg',
        alt: 'Primary care physician featured in a provider profile video',
        position: '72% center',
        items: [
          'Patient or provider story',
          'Service-line campaign video',
          'Educational explainer',
          'Short social excerpts',
          'Captioned versions',
          'Internal or training edit',
        ],
        note:
          'Your organization defines legal, privacy, clinical, and regulatory requirements. We plan production around them and keep approvals with the appropriate client stakeholders.',
      }}
      processIntro={{
        eyebrow: 'Healthcare Workflow',
        title: 'Careful Planning.',
        emphasis: 'Clear Approvals.',
        copy:
          'The creative, clinical, and review teams stay aligned from the first brief through final delivery.',
      }}
      process={[
        { number: '01', title: 'Clinical Brief', copy: 'Define the audience, communication objective, stakeholders, and constraints.' },
        { number: '02', title: 'Access & Consent', copy: 'Coordinate participants, locations, permissions, schedule, and review needs.' },
        { number: '03', title: 'Production', copy: 'Film with a focused footprint and a patient, supportive approach.' },
        { number: '04', title: 'Review & Delivery', copy: 'Complete creative, clinical, and stakeholder reviews before final versions.' },
      ]}
      relatedLinks={{
        eyebrow: 'Healthcare Resources',
        title: 'Plan the Right Healthcare Story.',
        copy:
          'Use these planning guides to shape the scope and format. When you are ready to produce, this service page is the place to start.',
        links: [
          {
            label: 'Healthcare Video Planning Guide',
            href: '/blog/healthcare-video-production-san-antonio',
            description: 'Plan patient stories, service-line content, consent, access, and stakeholder review.',
          },
          {
            label: 'Provider Q&A Video Guide',
            href: '/blog/healthcare-provider-video',
            description: 'Turn provider expertise into a useful library of focused patient answers.',
          },
          {
            label: 'Interview Production',
            href: '/video-production/interview',
            description: 'Create a comfortable interview environment for credible, natural stories.',
          },
        ],
      }}
      faqEyebrow="Questions"
      faqTitle="Planning Medical"
      faqEmphasis="Video Production."
      faqs={medicalFaqs}
      cta={{
        eyebrow: 'Start With the Audience',
        title: 'What Should People',
        emphasis: 'Understand Next?',
        copy:
          'Share the audience, clinical topic, participants, location, review team, and final use. We will help shape a practical production plan.',
        primaryLabel: 'Plan Your Medical Video',
        secondaryLabel: 'Talk With Our Team',
      }}
    />
  )
}
