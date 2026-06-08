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
    <section className="bg-[#1A1A1A] px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#CC0000]">
          Client Reviews
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Trusted Across San Antonio
        </h2>
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="text-2xl tracking-tight text-[#C9A84C]">★★★★★</span>
          <span className="text-lg font-medium text-white">5.0 · 37 Google Reviews</span>
        </div>
        <div ref={containerRef} className="mt-10 min-h-[320px]" aria-label="Google customer reviews" />
      </div>
    </section>
  );
}
