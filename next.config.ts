import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Pin the workspace root so Next/Turbopack stops inferring ~/ as the root.
  turbopack: { root: import.meta.dirname },
  trailingSlash: false,
  async redirects() {
    return [
      // ── SERVICE PAGES ──
      { source: '/business', destination: '/video-production/corporate', permanent: true },
      { source: '/commericals', destination: '/video-production/commercials', permanent: true },
      { source: '/commercials', destination: '/video-production/commercials', permanent: true },
      { source: '/events', destination: '/video-production/events', permanent: true },
      { source: '/interview-discussion-video-production', destination: '/video-production/interview', permanent: true },
      { source: '/medical-video-production-san-antonio', destination: '/video-production/medical', permanent: true },
      { source: '/aerial-video-photography', destination: '/video-production/aerial', permanent: true },
      { source: '/motiongraphics', destination: '/video-production/motion-graphics', permanent: true },
      { source: '/live-streaming-webcasting-san-antonio', destination: '/video-production/live-streaming', permanent: true },
      { source: '/video-post-production', destination: '/video-production/post-production', permanent: true },
      { source: '/food-video-production', destination: '/video-production/food', permanent: true },
      { source: '/property', destination: '/video-production/real-estate', permanent: true },
      { source: '/shows', destination: '/video-production', permanent: true },
      { source: '/video-production-san-antonio', destination: '/video-production', permanent: true },
      { source: '/production-studio-space-san-antonio-video', destination: '/studio', permanent: true },
      { source: '/video-production-crew-san-antonio', destination: '/about', permanent: true },
      { source: '/video-production-awards', destination: '/about/awards', permanent: true },
      { source: '/video-production-work-san-antonio', destination: '/work', permanent: true },
      { source: '/video-production-equipment-san-antonio', destination: '/about', permanent: true },
      { source: '/grip-truck-lighting-cameras-for-rent-san-antonio', destination: '/video-production', permanent: true },
      { source: '/web', destination: '/contact', permanent: true },
      { source: '/Jobs', destination: '/contact', permanent: true },
      { source: '/jobs', destination: '/contact', permanent: true },
      { source: '/FAQs', destination: '/faq', permanent: true },
      { source: '/Job/:rest*', destination: '/contact', permanent: true },

      // ── BLOG MIGRATION ──
      // Specific ID redirects must come before catch-alls
      // Migrate to new blog URLs
      { source: '/News/Get/45/:rest*', destination: '/blog/keeping-creative-in-san-antonio', statusCode: 301 },
      { source: '/News/Get/44/:rest*', destination: '/blog/san-antonio-corporate-video-production-competitive', statusCode: 301 },
      { source: '/News/Get/43/:rest*', destination: '/blog/best-video-production-san-antonio', statusCode: 301 },
      { source: '/News/Get/42/:rest*', destination: '/blog/elevate-your-brand-with-expert-video-production', statusCode: 301 },
      { source: '/News/Get/41/:rest*', destination: '/blog/boost-seo-with-video-production-ai-era', statusCode: 301 },
      { source: '/News/Get/40/:rest*', destination: '/blog/san-antonio-conference-video-services', statusCode: 301 },
      { source: '/News/Get/38/:rest*', destination: '/blog/importance-of-video-production-services', statusCode: 301 },
      { source: '/News/Get/37/:rest*', destination: '/blog/san-antonio-video-production-talent-local-companies', statusCode: 301 },
      { source: '/News/Get/36/:rest*', destination: '/blog/hire-local-video-production-companies-san-antonio', statusCode: 301 },
      { source: '/News/Get/34/:rest*', destination: '/blog/importance-of-corporate-video-production', statusCode: 301 },
      // Retire to relevant pages
      { source: '/News/Get/35/:rest*', destination: '/work', statusCode: 301 },
      { source: '/News/Get/33/:rest*', destination: '/work', statusCode: 301 },
      { source: '/News/Get/31/:rest*', destination: '/video-production/medical', statusCode: 301 },
      { source: '/News/Get/30/:rest*', destination: '/video-production/commercials', statusCode: 301 },
      { source: '/News/Get/29/:rest*', destination: '/video-production/motion-graphics', statusCode: 301 },
      { source: '/News/Get/28/:rest*', destination: '/video-production/medical', statusCode: 301 },
      { source: '/News/Get/27/:rest*', destination: '/studio', statusCode: 301 },
      { source: '/News/Get/26/:rest*', destination: '/video-production/commercials', statusCode: 301 },
      { source: '/News/Get/25/:rest*', destination: '/video-production/commercials', statusCode: 301 },
      { source: '/News/Get/24/:rest*', destination: '/work', statusCode: 301 },
      { source: '/News/Get/23/:rest*', destination: '/video-production/corporate', statusCode: 301 },
      { source: '/News/Get/22/:rest*', destination: '/video-production/commercials', statusCode: 301 },
      { source: '/News/Get/21/:rest*', destination: '/video-production/commercials', statusCode: 301 },
      // Catch-alls — after specific ID redirects
      { source: '/News/:rest*', destination: '/blog', statusCode: 301 },
      { source: '/News', destination: '/blog', permanent: true },
      { source: '/news', destination: '/blog', permanent: true },
      { source: '/locations/texas', destination: '/locations/san-antonio', permanent: true },
    ]
  },
}

export default nextConfig
