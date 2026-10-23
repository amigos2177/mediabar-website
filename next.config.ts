import type { NextConfig } from 'next'
import {
  CAREERS_PATH,
  GSC_JOB_SOURCES,
  GSC_NEWS_GET_CATCHALL_SOURCES,
  NEWS_GET_BY_ID,
  NEWS_GET_FALLBACK,
  gscLegacy301,
  newsGetSourcesForId,
} from './lib/gsc-legacy-redirects'

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdn.trustindex.io https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "media-src 'self' https:",
  "frame-src https://player.vimeo.com https://www.youtube.com https://www.youtube-nocookie.com",
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://cdn.trustindex.io https://vitals.vercel-insights.com https://*.vercel-insights.com",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
]

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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      // ── SERVICE PAGES ──
      { source: '/business', destination: '/video-production/corporate', permanent: true },
      // Legacy/typo URLs still earning GSC impressions. Use 301 (not 308) and
      // include trailing-slash variants so they do not chain through the
      // trailingSlash:false hop. Apex host rules skip the www path-preserving hop.
      {
        source: '/events',
        has: [{ type: 'host', value: 'mediabarproductions.com' }],
        destination: 'https://www.mediabarproductions.com/video-production/events',
        statusCode: 301,
      },
      {
        source: '/events/',
        has: [{ type: 'host', value: 'mediabarproductions.com' }],
        destination: 'https://www.mediabarproductions.com/video-production/events',
        statusCode: 301,
      },
      {
        source: '/commericals',
        has: [{ type: 'host', value: 'mediabarproductions.com' }],
        destination: 'https://www.mediabarproductions.com/video-production/commercials',
        statusCode: 301,
      },
      {
        source: '/commericals/',
        has: [{ type: 'host', value: 'mediabarproductions.com' }],
        destination: 'https://www.mediabarproductions.com/video-production/commercials',
        statusCode: 301,
      },
      {
        source: '/live-streaming-webcasting-san-antonio',
        has: [{ type: 'host', value: 'mediabarproductions.com' }],
        destination: 'https://www.mediabarproductions.com/video-production/live-streaming',
        statusCode: 301,
      },
      {
        source: '/live-streaming-webcasting-san-antonio/',
        has: [{ type: 'host', value: 'mediabarproductions.com' }],
        destination: 'https://www.mediabarproductions.com/video-production/live-streaming',
        statusCode: 301,
      },
      {
        source: '/video-post-production',
        has: [{ type: 'host', value: 'mediabarproductions.com' }],
        destination: 'https://www.mediabarproductions.com/video-production/post-production',
        statusCode: 301,
      },
      {
        source: '/video-post-production/',
        has: [{ type: 'host', value: 'mediabarproductions.com' }],
        destination: 'https://www.mediabarproductions.com/video-production/post-production',
        statusCode: 301,
      },
      { source: '/commericals', destination: '/video-production/commercials', statusCode: 301 },
      { source: '/commericals/', destination: '/video-production/commercials', statusCode: 301 },
      { source: '/commercials', destination: '/video-production/commercials', statusCode: 301 },
      { source: '/commercials/', destination: '/video-production/commercials', statusCode: 301 },
      { source: '/events', destination: '/video-production/events', statusCode: 301 },
      { source: '/events/', destination: '/video-production/events', statusCode: 301 },
      { source: '/interview-discussion-video-production', destination: '/video-production/interview', permanent: true },
      { source: '/medical-video-production-san-antonio', destination: '/video-production/medical', permanent: true },
      // Legacy GSC video URL on apex; www is canonical and this path 301/308s to the aerial service page.
      { source: '/aerial-video-photography', destination: '/video-production/aerial', permanent: true },
      { source: '/motiongraphics', destination: '/video-production/motion-graphics', permanent: true },
      { source: '/live-streaming-webcasting-san-antonio', destination: '/video-production/live-streaming', statusCode: 301 },
      { source: '/live-streaming-webcasting-san-antonio/', destination: '/video-production/live-streaming', statusCode: 301 },
      { source: '/video-post-production', destination: '/video-production/post-production', statusCode: 301 },
      { source: '/video-post-production/', destination: '/video-production/post-production', statusCode: 301 },
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
      { source: '/FAQs', destination: '/faq', permanent: true },
      // GSC 5xx: http://mediabarproductions.com/Job/5/professional-video-editor-contract---san-anto
      // Prefix covers truncated vs full slug, /Job/:id/:slug*, /Jobs, trailing slash.
      // Explicit 301 (not 308) + apex host rules skip the www path-preserving hop.
      ...gscLegacy301(GSC_JOB_SOURCES, CAREERS_PATH),

      // ── BLOG MIGRATION ──
      // Specific ID redirects must come before catch-alls. Do not rebuild ASP.NET pages.
      ...Object.entries(NEWS_GET_BY_ID).flatMap(([id, dest]) =>
        gscLegacy301(newsGetSourcesForId(id), dest),
      ),
      // Remaining /News/Get/:id/:slug* URLs (unknown IDs) go to /blog.
      // Get/30 truncated GSC slug is covered by the specific ID rule above.
      ...gscLegacy301(GSC_NEWS_GET_CATCHALL_SOURCES, NEWS_GET_FALLBACK),
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

      // Legacy URLs that 404 after the May 2026 cutover. Explicit 301 (not 308),
      // trailing-slash variants, and apex host rules so they do not chain through
      // trailingSlash:false or the www path-preserving hop.
      // /Home, /Marketing, /Photography, and /Video are case-sensitive and live in proxy.ts.
      ...gscLegacy301(['/services', '/services/', '/documentaries', '/documentaries/'], '/video-production'),
      ...gscLegacy301(['/portfolio', '/portfolio/', '/video-projects', '/video-projects/'], '/work'),
      ...gscLegacy301(
        [
          '/corporate-video-production',
          '/corporate-video-production/',
          '/services/corporate-video',
          '/services/corporate-video/',
          '/training-videos',
          '/training-videos/',
        ],
        '/video-production/corporate',
      ),
      ...gscLegacy301(['/design', '/design/', '/motion-graphics', '/motion-graphics/'], '/video-production/motion-graphics'),
      ...gscLegacy301(
        [
          '/ad',
          '/ad/',
          '/commercial-production',
          '/commercial-production/',
          '/services/commercials',
          '/services/commercials/',
        ],
        '/video-production/commercials',
      ),
      ...gscLegacy301(
        [
          '/drone-video',
          '/drone-video/',
          '/drone',
          '/drone/',
          '/services/drone',
          '/services/drone/',
        ],
        '/video-production/aerial',
      ),
      ...gscLegacy301(
        ['/real-estate-video', '/real-estate-video/', '/real-estate', '/real-estate/'],
        '/video-production/real-estate',
      ),
      ...gscLegacy301(['/portfolio/rbfcu', '/portfolio/rbfcu/'], '/work/rbfcu-go-beyond-banking'),
      ...gscLegacy301(['/studio-rental', '/studio-rental/'], '/studio'),
      ...gscLegacy301(['/testimonials', '/testimonials/'], '/clients'),
      ...gscLegacy301(['/event-video', '/event-video/'], '/video-production/events'),
      ...gscLegacy301(['/live-streaming', '/live-streaming/'], '/video-production/live-streaming'),
      ...gscLegacy301(['/medical-video', '/medical-video/'], '/video-production/medical'),
      ...gscLegacy301(['/food-video', '/food-video/'], '/video-production/food'),
      ...gscLegacy301(['/post-production', '/post-production/'], '/video-production/post-production'),
      // Exactly eight digits at the root (/23564225). Does not match other lengths or nested paths.
      ...gscLegacy301(['/:id(\\d{8})', '/:id(\\d{8})/'], '/work'),
    ]
  },
}

export default nextConfig
