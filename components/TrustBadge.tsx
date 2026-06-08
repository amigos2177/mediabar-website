// components/TrustBadge.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

const TRUSTINDEX_CERT_SRC =
  'https://cdn.trustindex.io/loader-cert.js?9839e447353d748717261a8aa01';

export default function TrustBadge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          const script = document.createElement('script');
          script.src = TRUSTINDEX_CERT_SRC;
          script.async = true;
          script.defer = true;
          el.appendChild(script);
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className="mt-6 flex justify-center min-h-[80px]"
      aria-label="Verified Google reviews badge"
    />
  );
}
