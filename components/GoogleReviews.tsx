// components/GoogleReviews.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

const TRUSTINDEX_LOADER_SRC =
  'https://cdn.trustindex.io/loader.js?393ccb17351c746ab026b3cce4d';

export default function GoogleReviews() {
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
          script.src = TRUSTINDEX_LOADER_SRC;
          script.async = true;
          script.defer = true;
          el.appendChild(script);
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <section className="bg-[#1A1A1A] px-6 pt-20 pb-20">
      <div className="mx-auto max-w-5xl">
        <div ref={containerRef} className="mt-12 min-h-[320px]" aria-label="Google customer reviews" />
      </div>
    </section>
  );
}
