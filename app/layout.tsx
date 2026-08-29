import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { AnalyticsInteractions } from '@/components/AnalyticsInteractions'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { LocalBusinessJsonLd, WebSiteJsonLd } from '@/components/JsonLd'

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'optional',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'optional',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'optional',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mediabarproductions.com'),
  applicationName: 'Media Bar Productions',
  creator: 'Media Bar Productions',
  publisher: 'Media Bar Productions',
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    ...(bingSiteVerification
      ? { other: { 'msvalidate.01': bingSiteVerification } }
      : {}),
  },
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
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
