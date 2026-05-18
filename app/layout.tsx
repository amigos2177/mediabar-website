import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Media Bar Productions | Video Production San Antonio',
  description: "San Antonio's award-winning video production company. 3 Emmy Awards, 15 Telly Awards, 13+ years producing corporate, commercial, and event video across Texas.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
