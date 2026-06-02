import type { Metadata } from 'next'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Event Videography San Antonio',
  description:
    "Event video coverage in San Antonio — conferences, galas, and corporate events. Multi-camera production that captures your event in full.",
  alternates: { canonical: '/video-production/events' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Event & Conference Video Production"
        description="Event video coverage in San Antonio — conferences, galas, and corporate events. Multi-camera production that captures your event in full."
        url="/video-production/events"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'Do you do same-day edits?',
          answer: 'Yes. For events where you need a highlight reel the same night — a gala, conference closing, or awards ceremony — we deploy an on-site editor who cuts in real time. The final reel can be ready within 1–2 hours of your event ending, or even during the event itself.',
        },
        {
          question: 'How many cameras do you use?',
          answer: 'It depends on the event size and complexity. A typical corporate conference uses 3–4 cameras. A large gala or multi-stage event may use 5–7. We do a pre-event walkthrough to determine the right coverage plan and include that recommendation in your quote.',
        },
        {
          question: 'Do you also livestream events?',
          answer: 'Yes — livestreaming is a natural extension of our event production work. We can stream to YouTube Live, Vimeo, Facebook, LinkedIn, or a custom private webcast URL while simultaneously recording broadcast-quality footage for your archive. Ask about our hybrid event packages.',
        },
        {
          question: 'How long until I receive the final video?',
          answer: 'Same-day edits (highlight reels) are delivered the night of or morning after the event. A full edited video — full-length recording with color grade, titles, and audio mix — is typically delivered within 5–10 business days depending on length and complexity.',
        },
        {
          question: 'Do you handle audio for the event itself, or just for the video?',
          answer: "We capture audio for the video production. If you need a full event audio/AV company to run sound for the room, we're happy to refer you to trusted partners. For video, we tie into your existing house sound system and deploy our own backup mics to ensure clean recorded audio regardless of venue conditions.",
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Event Video', url: '/video-production/events' },
      ]} />
      {children}
    </>
  )
}
