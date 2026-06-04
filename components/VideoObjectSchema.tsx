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
  const data = videos.map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.name,
    ...(v.description ? { description: v.description } : {}),
    thumbnailUrl: v.thumbnailUrl,
    uploadDate: v.uploadDate,
    ...(v.duration ? { duration: v.duration } : {}),
    ...(v.embedUrl ? { embedUrl: v.embedUrl } : {}),
  }));
  const json = JSON.stringify(data.length === 1 ? data[0] : data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
