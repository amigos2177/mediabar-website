import { buildMetadata } from '@/lib/seo'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Motion Graphics & Animation San Antonio',
  description: "Motion graphics and animation in San Antonio — explainer videos, animated logos, and branded visuals that bring Texas companies' ideas to life.",
  path: '/video-production/motion-graphics',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Motion Graphics & Animation"
        description="Motion graphics and animation in San Antonio — explainer videos, animated logos, and branded visuals that bring Texas companies' ideas to life."
        url="/video-production/motion-graphics"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'What software do you use for animation?',
          answer: 'Our motion designers work primarily in Adobe After Effects for 2D animation, motion graphics, and compositing. For 3D work, we use Cinema 4D and Blender. For character animation, we work in Adobe Animate. The tool choice depends on the style and complexity of your project.',
        },
        {
          question: 'What file formats do you deliver?',
          answer: 'We deliver final animation in H.264 MP4 for digital/web use, ProRes for broadcast and post-production integration, GIF for simple web loops, and WebM for web animation. We also retain all project files in case revisions are needed down the line.',
        },
        {
          question: 'Do you provide voice-over for explainer videos?',
          answer: "Yes. We work with a roster of professional voice-over artists and can cast the right voice for your brand — male, female, neutral, energetic, authoritative. We handle recording, editing, and integration with the animation. If you prefer to use your own voice talent, we can work with that too.",
        },
        {
          question: 'How many rounds of revisions are included?',
          answer: "Our standard animation packages include two rounds of revisions after each major milestone — storyboard approval, style frames, and the final animated cut. We've found this covers the vast majority of projects comfortably. Additional revision rounds are available if needed.",
        },
        {
          question: 'Can you animate to an existing video or do you work standalone?',
          answer: 'Both. We regularly add motion graphics layers to live action video — lower-thirds, data overlays, callouts, intro/outro sequences. We can work directly with your existing footage, or integrate motion work into a full production we\'re handling from scratch.',
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Motion Graphics', url: '/video-production/motion-graphics' },
      ]} />
      {children}
    </>
  )
}
