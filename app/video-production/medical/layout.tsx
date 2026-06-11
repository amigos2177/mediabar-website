import { buildMetadata } from '@/lib/seo'
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Medical Video Production San Antonio',
  description: 'Medical and healthcare video production in San Antonio — patient education, facility tours, and provider profiles for Texas healthcare organizations.',
  path: '/video-production/medical',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Medical & Healthcare Video Production"
        description="Medical and healthcare video production in San Antonio — patient education, facility tours, and provider profiles for Texas healthcare organizations."
        url="/video-production/medical"
      />
      <FAQPageJsonLd faqs={[
        {
          question: 'Do you follow HIPAA protocols on medical productions?',
          answer: 'Yes. We operate under HIPAA-aware workflows for any production involving patient care, identifiable information, or clinical settings. We require and maintain signed consent forms for all on-camera patients and execute BAAs (Business Associate Agreements) when required by the institution.',
        },
        {
          question: 'Can you film inside an operating room?',
          answer: "Yes. We have experience filming in sterile environments including operating rooms, procedure suites, and ICUs. Our team follows all required protocols — gowning, sterile field distance, equipment handling, and infection control procedures. We coordinate directly with your facility's OR scheduling and compliance teams.",
        },
        {
          question: 'Do you work with patients directly?',
          answer: 'We work with patients under the supervision and guidance of your clinical team. We never approach or direct patients without explicit authorization from the treating physician and facility. Patient comfort and privacy always takes precedence over production needs.',
        },
        {
          question: 'Can you produce CE/CME-accredited educational content?',
          answer: "Yes. We've produced CME video content for hospital systems and medical associations. We understand the specific documentation, disclosure, and format requirements for accredited continuing medical education. We work within your accrediting body's guidelines throughout production.",
        },
        {
          question: 'Will you sign an NDA for sensitive medical procedures?',
          answer: 'Absolutely. We routinely execute NDAs and confidentiality agreements for medical device documentation, surgical technique videos, and proprietary clinical research. All footage is stored and transferred through encrypted channels, and access is limited to our production team working on your project.',
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/video-production' },
        { name: 'Medical Video', url: '/video-production/medical' },
      ]} />
      {children}
    </>
  )
}
