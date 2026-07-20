import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { AnalyticsInteractions } from '@/components/AnalyticsInteractions'
import { LocalBusinessJsonLd, WebSiteJsonLd } from '@/components/JsonLd'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mediabarproductions.com'),
  applicationName: 'Media Bar Productions',
  creator: 'Media Bar Productions',
  publisher: 'Media Bar Productions',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <WebSiteJsonLd />
        <LocalBusinessJsonLd />
        <AnalyticsInteractions />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
