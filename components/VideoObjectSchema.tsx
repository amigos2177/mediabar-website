export type PortfolioVideo = {
  name: string;
  description?: string;
  thumbnailUrl: string | string[];
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
};

/**
 * VideoObject JSON-LD for a dedicated single-video watch page.
 * `pageUrl` must be the canonical watch URL (not a gallery, service, or listing page).
 */
export function VideoObjectSchema({
  videos,
  pageUrl,
}: {
  videos: PortfolioVideo[];
  pageUrl: string;
}) {
  const nodes = videos.map((v, index) => {
    const videoId = videos.length === 1 ? `${pageUrl}#video` : `${pageUrl}#video-${index + 1}`

    return {
      "@type": "VideoObject",
      "@id": videoId,
      name: v.name,
      ...(v.description ? { description: v.description } : {}),
      thumbnailUrl: v.thumbnailUrl,
      uploadDate: v.uploadDate,
      ...(v.duration ? { duration: v.duration } : {}),
      ...(v.contentUrl ? { contentUrl: v.contentUrl } : {}),
      ...(v.embedUrl ? { embedUrl: v.embedUrl } : {}),
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
      },
      inLanguage: "en-US",
      isFamilyFriendly: true,
      publisher: {
        "@id": "https://www.mediabarproductions.com/#business",
      },
    }
  });
  const schema =
    nodes.length === 1
      ? { "@context": "https://schema.org", ...nodes[0] }
      : { "@context": "https://schema.org", "@graph": nodes };
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
