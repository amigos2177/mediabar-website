import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interview Video Production San Antonio',
  description:
    "Professional interview and discussion filming in San Antonio. Media Bar Productions delivers polished testimonial, panel, and executive interview video.",
  alternates: { canonical: '/video-production/interview' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
