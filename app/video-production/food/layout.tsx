import type { Metadata } from 'next'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Food Video Production San Antonio',
  description:
    "Appetizing food and beverage video production in San Antonio. Media Bar Productions creates mouth-watering content for restaurants and Texas food brands.",
  alternates: { canonical: '/video-production/food' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Food & Beverage Video Production"
        description="Appetizing food and beverage video production in San Antonio. Media Bar Productions creates mouth-watering content for restaurants and Texas food brands."
        url="/video-production/food"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'Do you provide a food stylist?',
          answer: "Yes. We work with experienced food stylists and culinary professionals who specialize in preparing food for camera. A good food stylist is essential for high-end food video — they understand how to maintain a dish's visual appeal through extended shooting sessions and how to create the specific textures and finishes that look best on camera.",
        },
        {
          question: 'What kitchen or studio setup do you use?',
          answer: 'We have two production stages in San Antonio equipped for food video. Our food production setup includes professional lighting rigs, multiple camera positions, and the equipment needed for overhead, side, and beauty angles. For restaurant or brand-specific shoots that require the actual kitchen or branded environment, we frequently shoot on location.',
        },
        {
          question: 'How much does food video production cost?',
          answer: "Food video ranges from around $3,000 for simple social content to $25,000+ for broadcast commercials with full food styling, multiple setups, and extensive post. The biggest variables are food styling complexity, number of dishes/SKUs, and whether we're producing for broadcast or digital-only. We provide itemized quotes after a brief call.",
        },
        {
          question: 'Can you produce social media content at volume?',
          answer: 'Yes. We have clients who commission 10–30 social food videos per quarter. For volume content, we develop an efficient workflow — batching shoot days, standardizing setups, and building a post-production pipeline that allows us to deliver consistent quality at scale. Volume pricing is available for ongoing content commitments.',
        },
        {
          question: 'Do you produce beverage video as well as food?',
          answer: 'Yes. Beverage production — especially pour shots, condensation, and splash photography — requires the same specialized techniques as food. We produce for beer, spirits, non-alcoholic beverages, coffee, and packaged drinks. Some of our most technically demanding work has been in the beverage category.',
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Food Video', url: '/video-production/food' },
      ]} />
      {children}
    </>
  )
}
