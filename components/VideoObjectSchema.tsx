export type PortfolioVideo = {
  name: string;
  description?: string;
  thumbnailUrl: string | string[];
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
};

export function VideoObjectSchema({ videos }: { videos: PortfolioVideo[] }) {
  const nodes = videos.map((v) => {
    const identity = v.contentUrl
      ?? v.embedUrl
      ?? `https://www.mediabarproductions.com/work#video-${encodeURIComponent(v.name)}`

    return {
      "@type": "VideoObject",
      "@id": identity.includes("#") ? identity : `${identity}#video`,
      name: v.name,
      ...(v.description ? { description: v.description } : {}),
      thumbnailUrl: v.thumbnailUrl,
      uploadDate: v.uploadDate,
      ...(v.duration ? { duration: v.duration } : {}),
      ...(v.contentUrl ? { contentUrl: v.contentUrl } : {}),
      ...(v.embedUrl ? { embedUrl: v.embedUrl } : {}),
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
