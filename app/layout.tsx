import type { Metadata } from 'next'
import './globals.css'
import { LocalBusinessJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mediabarproductions.com'),
  alternates: { canonical: '/' },
  title: 'Video Production San Antonio | Media Bar Productions',
  description: "San Antonio's award-winning video production company. 3 Emmy Awards, 15 Telly Awards, 13+ years producing corporate, commercial, and event video across Texas.",
  openGraph: {
    title: 'Video Production San Antonio | Media Bar Productions',
    description: "San Antonio's award-winning video production company. 3 Emmy Awards, 15 Telly Awards, 13+ years producing corporate, commercial, and event video across Texas.",
    url: 'https://www.mediabarproductions.com',
    siteName: 'Media Bar Productions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/mediabar-logo.png', width: 800, height: 200, alt: 'Media Bar Productions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Production San Antonio | Media Bar Productions',
    description: "San Antonio's award-winning video production company. 3 Emmy Awards, 15 Telly Awards, 13+ years producing corporate, commercial, and event video across Texas.",
    images: ['/images/mediabar-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><LocalBusinessJsonLd />{children}</body>
    </html>
  )
}
