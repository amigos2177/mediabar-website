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
  const nodes = videos.map((v) => ({
    "@type": "VideoObject",
    name: v.name,
    ...(v.description ? { description: v.description } : {}),
    thumbnailUrl: v.thumbnailUrl,
    uploadDate: v.uploadDate,
    ...(v.duration ? { duration: v.duration } : {}),
    ...(v.embedUrl ? { embedUrl: v.embedUrl } : {}),
  }));
  const schema =
    nodes.length === 1
      ? { "@context": "https://schema.org", ...nodes[0] }
      : { "@context": "https://schema.org", "@graph": nodes };
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
