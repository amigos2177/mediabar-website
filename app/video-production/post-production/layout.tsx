import { buildMetadata } from '@/lib/seo'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Post Production & Video Editing San Antonio',
  description: 'Video editing and post production in San Antonio — color, sound, and motion finishing. Media Bar Productions polishes footage into broadcast-ready video.',
  path: '/video-production/post-production',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Post Production & Editing Services"
        description="Video editing and post production in San Antonio — color, sound, and motion finishing. Media Bar Productions polishes footage into broadcast-ready video."
        url="/video-production/post-production"
      />
      <FAQPageJsonLd faqs={[
        {
          question: "Can you edit footage that wasn't shot by your team?",
          answer: "Yes. Post-production-only projects are a significant part of our business. We work with footage from any camera system in any format. Just share your files via our secure transfer link and we'll review the material and provide a post-only quote.",
        },
        {
          question: 'What is your standard turnaround time for editing?',
          answer: "A simple 2–3 minute edit with basic color and audio typically takes 3–5 business days. A full corporate video or commercial with color grading, sound design, and motion graphics takes 10–15 business days. We'll give you a firm delivery date in your quote before any work begins.",
        },
        {
          question: 'What formats do you deliver in?',
          answer: 'We deliver in any format required: H.264 or H.265 MP4 for digital/web, ProRes 422 or 4444 for broadcast and archival masters, MOV or MXF for specific broadcast specs, and platform-specific exports for YouTube, Vimeo, Instagram, and other social platforms. Closed caption files (SRT, VTT) are also available.',
        },
        {
          question: 'Do you do transcription and closed captioning?',
          answer: "Yes. We offer transcription and closed caption services as an add-on to any post project. We deliver SRT files that can be uploaded to any platform, or burned-in captions if that's your preference. Accuracy is verified by a human editor, not just AI auto-captions.",
        },
        {
          question: 'How many rounds of revisions are included?',
          answer: "Our standard packages include two rounds of revisions at picture cut stage and one round at final delivery. This covers the vast majority of projects. Additional revision rounds can be added — we'll discuss that during the proposal stage if your project scope requires it.",
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Post Production', url: '/video-production/post-production' },
      ]} />
      {children}
    </>
  )
}
