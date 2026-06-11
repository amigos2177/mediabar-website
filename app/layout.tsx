import type { Metadata } from 'next'
import './globals.css'
import { LocalBusinessJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mediabarproductions.com'),
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
