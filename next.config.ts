import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Pin the workspace root so Next/Turbopack stops inferring ~/ as the root.
  turbopack: { root: import.meta.dirname },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**',
        search: '',
      },
    ],
  },
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
      // Legacy GSC video URL on apex; www is canonical and this path 301/308s to the aerial service page.
      { source: '/aerial-video-photography', destination: '/video-production/aerial', permanent: true },
      { source: '/motiongraphics', destination: '/video-production/motion-graphics', permanent: true },
      { source: '/live-streaming-webcasting-san-antonio', destination: '/video-production/live-streaming', permanent: true },
      { source: '/video-post-production', destination: '/video-production/post-production', permanent: true },
      { source: '/food-video-production', destination: '/video-production/food', permanent: true },
      { source: '/property', destination: '/video-production/real-estate', permanent: true },
      { source: '/shows', destination: '/video-production', permanent: true },
      { source: '/video-production-san-antonio', destination: '/video-production', permanent: true },
      { source: '/production-studio-space-san-antonio-video', destination: '/studio', permanent: true },
      { source: '/video-production-crew-san-antonio', destination: '/careers', permanent: true },
      { source: '/video-production-awards', destination: '/about/awards', permanent: true },
      { source: '/video-production-work-san-antonio', destination: '/work', permanent: true },
      { source: '/our-work', destination: '/work', permanent: true },
      { source: '/corporate-video-production-san-antonio', destination: '/video-production/corporate', permanent: true },
      { source: '/video-production/event-video', destination: '/video-production/events', permanent: true },
      { source: '/video-production-equipment-san-antonio', destination: '/about', permanent: true },
      { source: '/grip-truck-lighting-cameras-for-rent-san-antonio', destination: '/video-production', permanent: true },
      { source: '/web', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/our-team', destination: '/about', permanent: true },
      { source: '/leadership', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/ContactThankYou', destination: '/contact', permanent: true },
      { source: '/career', destination: '/careers', permanent: true },
      { source: '/join', destination: '/careers', permanent: true },
      { source: '/join-the-team', destination: '/careers', permanent: true },
      { source: '/Jobs', destination: '/careers', permanent: true },
      { source: '/jobs', destination: '/careers', permanent: true },
      { source: '/FAQs', destination: '/faq', permanent: true },
      { source: '/Job/:rest*', destination: '/careers', permanent: true },

      // ── BLOG MIGRATION ──
      // Specific ID redirects must come before catch-alls
      // Migrate to new blog URLs
      { source: '/News/Get/45/:rest*', destination: '/blog/hire-local-video-production-companies-san-antonio', statusCode: 301 },
      { source: '/News/Get/44/:rest*', destination: '/blog/corporate-video-multi-format-strategy', statusCode: 301 },
      { source: '/News/Get/43/:rest*', destination: '/blog/best-video-production-san-antonio', statusCode: 301 },
      { source: '/News/Get/42/:rest*', destination: '/blog/elevate-your-brand-with-expert-video-production', statusCode: 301 },
      { source: '/News/Get/41/:rest*', destination: '/blog/ai-video-production-limits', statusCode: 301 },
      { source: '/News/Get/40/:rest*', destination: '/blog/san-antonio-conference-video-services', statusCode: 301 },
      { source: '/News/Get/38/:rest*', destination: '/blog/importance-of-video-production-services', statusCode: 301 },
      { source: '/News/Get/37/:rest*', destination: '/blog/hire-local-video-production-companies-san-antonio', statusCode: 301 },
      { source: '/News/Get/36/:rest*', destination: '/blog/hire-local-video-production-companies-san-antonio', statusCode: 301 },
      { source: '/News/Get/34/:rest*', destination: '/blog/corporate-video-multi-format-strategy', statusCode: 301 },
      // Retire to relevant pages
      { source: '/News/Get/35/:rest*', destination: '/work', statusCode: 301 },
      { source: '/News/Get/33/:rest*', destination: '/work', statusCode: 301 },
      // Legacy GSC video URL from the old CMS; do not rebuild the ASP.NET page.
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

      // ── BLOG CONSOLIDATION (301) ──
      // Healthcare: retired generic playbook → geo-optimized pillar
      { source: '/blog/healthcare-video-production', destination: '/blog/healthcare-video-production-san-antonio', statusCode: 301 },
      // AI: retired "vs hiring a crew" → comprehensive keeper
      { source: '/blog/ai-video-tools-vs-hiring-a-crew', destination: '/blog/ai-video-production-limits', statusCode: 301 },
      { source: '/blog/boost', destination: '/blog/ai-video-production-limits', statusCode: 301 },
      { source: '/blog/boost-seo-with-video-production-ai-era', destination: '/blog/ai-video-production-limits', statusCode: 301 },
      { source: '/blog/importance-of-corporate-video-production', destination: '/blog/corporate-video-multi-format-strategy', statusCode: 301 },
      { source: '/blog/san-antonio-corporate-video-production-competitive', destination: '/blog/corporate-video-multi-format-strategy', statusCode: 301 },
      { source: '/blog/keeping-creative-in-san-antonio', destination: '/blog/hire-local-video-production-companies-san-antonio', statusCode: 301 },
      { source: '/blog/san-antonio-video-production-talent-local-companies', destination: '/blog/hire-local-video-production-companies-san-antonio', statusCode: 301 },
    ]
  },
}

export default nextConfig
