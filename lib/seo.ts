import type { Metadata } from 'next'

const BASE_URL = 'https://www.mediabarproductions.com'
const SITE_NAME = 'Media Bar Productions'

interface BuildMetadataArgs {
  title: string
  description: string
  path: string
  ogImage?: string
}

export function buildMetadata({ title, description, path, ogImage }: BuildMetadataArgs): Metadata {
  const url = path === '/' ? BASE_URL : `${BASE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      ...(ogImage && { images: [{ url: ogImage }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
