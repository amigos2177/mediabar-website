import { buildMetadata } from '@/lib/seo'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Live Streaming & Webcasting San Antonio',
  description: 'Professional live streaming and webcasting in San Antonio. Media Bar Productions broadcasts conferences, events, and meetings with multi-camera quality.',
  path: '/video-production/live-streaming',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Live Streaming Production"
        description="Professional live streaming and webcasting in San Antonio. Media Bar Productions broadcasts conferences, events, and meetings with multi-camera quality."
        url="/video-production/live-streaming"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'What platforms can you stream to?',
          answer: "We can stream to any platform that accepts RTMP input — YouTube Live, Vimeo Live, Facebook Live, LinkedIn Live, Twitter/X, and custom streaming destinations. We can also multicast simultaneously to multiple platforms in the same broadcast. For private events, we use custom streaming infrastructure with password-protected viewing pages.",
        },
        {
          question: 'What is your backup plan if the internet goes down?',
          answer: "We always arrive with redundant internet connections — typically a primary hardwired venue connection and a cellular bonding device as backup. Our encoding setup monitors stream health in real time and can failover automatically. In over a decade of live streaming events, we've never lost a broadcast due to connectivity failure.",
        },
        {
          question: 'What video quality do you stream at?',
          answer: 'Our standard streams are delivered at 1080p/30fps or 1080p/60fps depending on platform and bandwidth. For venues with limited internet capacity, we scale to the highest quality the connection reliably supports. We always test the actual available bandwidth before the event and configure appropriately.',
        },
        {
          question: 'Can you handle a large audience?',
          answer: "Yes. Stream audience size is primarily limited by the platform you're streaming to, not by our equipment. YouTube Live and Vimeo Live scale to millions of concurrent viewers without issue. For very large private streams, we can provision dedicated CDN infrastructure to guarantee quality regardless of viewer count.",
        },
        {
          question: 'Do you provide a replay recording?',
          answer: 'Yes — we record the full broadcast locally in high-quality ProRes alongside the compressed stream, so your archive is full broadcast quality regardless of stream compression. The archive is delivered within 24 hours of the event. We can also add chapter markers and closed captions to the archive if needed.',
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Live Streaming', url: '/video-production/live-streaming' },
      ]} />
      {children}
    </>
  )
}
