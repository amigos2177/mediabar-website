export const discoverySources = [
  'Google Search',
  'Google Maps / Business Profile',
  'AI assistant (ChatGPT, Perplexity, Copilot, or similar)',
  'Referral from a person or company',
  'YouTube',
  'CreativesInTexas.com',
  'Social media',
  'Past client or worked with Media Bar before',
  'Other',
  'Not sure',
] as const

export type DiscoverySource = (typeof discoverySources)[number]
