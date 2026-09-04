import Link from 'next/link'
import { ServiceEditorialPage } from '@/components/ServiceEditorialPage'
import { financialServicesFaqs } from './content'

export default function FinancialServicesVideoPage() {
  return (
    <ServiceEditorialPage
      hero={{
        eyebrow: 'Financial Services Video Production in Texas',
        title: 'Financial Services Video',
        emphasis: 'Built for Trust. Planned for Review.',
        copy:
          'Video production for banks, credit unions, fintech, and financial-services teams that need clear stories, careful approvals, and polished delivery. Media Bar plans creative, production, post, versioning, and stakeholder review around the realities of regulated communication.',
        image: '/images/rbfcu-bts-riverside.jpg',
        alt: 'Media Bar Productions filming a financial-services commercial campaign in Texas',
        position: 'center 42%',
        primaryCta: 'Plan a Financial Video',
        secondaryCta: 'See the RBFCU Campaign',
      }}
      proof={[
        { value: '5', label: 'RBFCU Broadcast Spots' },
        { value: '4', label: 'Texas Markets' },
        { value: '5M+', label: 'Campaign Views' },
        { value: 'One', label: 'Team Through Delivery' },
      ]}
      answer={{
        eyebrow: 'Quick answer',
        question: 'What makes financial services video production different?',
        response:
          'Financial-services video has to do more than look polished. It must communicate clearly, build trust, respect approved language, and move through legal, compliance, brand, and executive review without losing the story. Media Bar builds those review needs into the production plan while the client keeps authority over financial claims, disclosures, regulatory requirements, and final approval.',
        points: ['Trust-led storytelling', 'Review planning', 'Clear versioning', 'Broadcast-ready delivery'],
      }}
      overview={{
        eyebrow: 'Financial Communication',
        title: 'Make Complex Ideas',
        emphasis: 'Feel Clear and Human.',
        copy:
          'The right format depends on the audience: members, customers, employees, investors, recruits, or the broader market. We shape the production around the communication job instead of forcing every financial message into the same corporate template.',
      }}
      capabilities={[
        { number: '01', title: 'Brand & Campaign Films', copy: 'Human stories and campaign creative that make the institution feel credible, relevant, and memorable.' },
        { number: '02', title: 'Leadership Communication', copy: 'Executive messages, market updates, milestones, and internal communication produced with a repeatable review process.' },
        { number: '03', title: 'Member & Customer Stories', copy: 'Real experiences that make financial services easier to understand through people, outcomes, and context.' },
        { number: '04', title: 'Commercial Production', copy: 'Broadcast, connected TV, digital, and paid-social campaigns with coordinated versions and final delivery.' },
        { number: '05', title: 'Explainers & Motion', copy: 'Products, services, processes, data, and customer journeys clarified with motion graphics and visual storytelling.' },
        { number: '06', title: 'Recruiting & Training', copy: 'Culture, onboarding, education, and internal content that supports the people behind the institution.' },
      ]}
      plan={{
        eyebrow: 'Review-Ready Production',
        title: 'Plan the Approvals',
        emphasis: 'Before the Cameras Roll.',
        copy:
          'Financial communications often involve brand, legal, compliance, executive, and business-line stakeholders. Defining those reviewers early protects the schedule and gives the creative team clear boundaries.',
        image: '/images/rbfcu-bts-porch.jpg',
        alt: 'Media Bar Productions crew filming a Texas credit union commercial',
        position: 'center 38%',
        items: [
          'Audience and business objective',
          'Approved claims and key language',
          'Legal and compliance stakeholders',
          'Disclosures and on-screen requirements',
          'Locations, participants, and permissions',
          'Review stages and final versions',
        ],
      }}
      feature={{
        eyebrow: 'Featured Financial Work',
        title: 'RBFCU',
        emphasis: 'Go Beyond Banking.',
        copy:
          'Media Bar produced and finished a five-commercial campaign for RBFCU that aired across four Texas markets and has earned more than five million YouTube views. The campaign used everyday human moments to make a large financial institution feel personal without losing a consistent brand system across markets.',
        media: {
          kind: 'image',
          src: '/images/rbfcu-bts-farmmarket.jpg',
          alt: 'Behind the scenes of the RBFCU Go Beyond Banking campaign produced by Media Bar Productions',
        },
        linkLabel: 'Read the RBFCU Case Study',
        linkHref: '/work/rbfcu-go-beyond-banking',
      }}
      deliverables={{
        eyebrow: 'One Production, More Value',
        title: 'Build the Master Story.',
        emphasis: 'Plan Every Version.',
        copy:
          'Financial teams often need the same core message adapted for multiple audiences and channels. We plan those deliverables before production so the footage, graphics, disclosures, and review path support every final version.',
        image: '/images/rbfcu-bts-steadicam.jpg',
        alt: 'Steadicam operator on a Media Bar Productions financial-services commercial shoot',
        position: 'center',
        items: [
          'Brand or campaign film',
          'Broadcast and CTV spots',
          'Leadership message',
          'Member or customer story',
          'Short social cutdowns',
          'Recruiting or internal edit',
        ],
        note: (
          <>
            The client defines legal, compliance, disclosure, regulatory, and claim requirements.
            Media Bar structures production and review around those requirements and keeps final
            approval with the appropriate client stakeholders. For broader budget planning, see our{' '}
            <Link href="/pricing">video production pricing</Link> guidance.
          </>
        ),
      }}
      processIntro={{
        eyebrow: 'Financial Services Workflow',
        title: 'Clear Brief.',
        emphasis: 'Clear Review Path.',
        copy:
          'A strong production process keeps creative, brand, compliance, and executive stakeholders aligned before filming and through final delivery.',
      }}
      process={[
        { number: '01', title: 'Business Brief', copy: 'Define the audience, communication goal, channel, stakeholders, and constraints.' },
        { number: '02', title: 'Message & Review Plan', copy: 'Identify sensitive language, disclosures, approvers, and the decisions that should be locked before production.' },
        { number: '03', title: 'Production', copy: 'Film the approved story with the right crew, locations, interviews, b-roll, and campaign coverage.' },
        { number: '04', title: 'Review & Delivery', copy: 'Move through structured edit reviews, finishing, versioning, and final delivery for every required channel.' },
      ]}
      relatedLinks={{
        eyebrow: 'Financial Services Production Path',
        title: 'Choose the Right Format.',
        copy:
          'Financial-services work can take several forms. Use the format-specific pages below when the project needs a deeper production plan, or start here when the institution and review environment are the defining part of the job.',
        links: [
          {
            label: 'Corporate Video Production',
            href: '/video-production/corporate',
            description: 'Brand films, leadership, recruiting, training, and internal communications for business audiences.',
          },
          {
            label: 'Commercial Video Production',
            href: '/video-production/commercials',
            description: 'Broadcast, connected TV, digital, and paid-social campaign production.',
          },
          {
            label: 'Interview & Testimonial Production',
            href: '/video-production/interview',
            description: 'Leadership, customer, member, and testimonial stories built around real conversations.',
          },
          {
            label: 'Motion Graphics & Explainers',
            href: '/video-production/motion-graphics',
            description: 'Clarify products, services, data, and customer journeys with designed visual systems.',
          },
          {
            label: 'RBFCU Go Beyond Banking',
            href: '/work/rbfcu-go-beyond-banking',
            description: 'See the five-commercial Texas campaign produced and finished by Media Bar.',
          },
          {
            label: 'San Antonio Video Production',
            href: '/locations/san-antonio',
            description: 'Local production resources, studio support, and full-service production in San Antonio.',
          },
        ],
      }}
      faqEyebrow="Questions"
      faqTitle="Financial Services"
      faqEmphasis="Video Production."
      faqs={financialServicesFaqs}
      cta={{
        eyebrow: 'Start With the Communication Job',
        title: 'What Does the Audience',
        emphasis: 'Need to Trust or Understand?',
        copy:
          'Share the audience, message, stakeholders, review requirements, locations, deadline, and deliverables. We will turn them into a practical Texas financial-services video production plan.',
        primaryLabel: 'Plan a Financial Services Video',
        secondaryLabel: 'Talk With Our Team',
      }}
    />
  )
}
