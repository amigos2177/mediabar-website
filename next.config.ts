import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    caseSensitiveRoutes: true,
  },
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
      { source: '/Faqs', destination: '/faq', permanent: true },
      { source: '/Contact', destination: '/contact', permanent: true },
      { source: '/About', destination: '/about', permanent: true },
      { source: '/News', destination: '/blog', permanent: true },
      { source: '/News/Get/:id/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/news', destination: '/blog', permanent: true },
      { source: '/news/get/:id/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/locations/texas', destination: '/locations/san-antonio', permanent: true },
    ]
  },
}

export default nextConfig
