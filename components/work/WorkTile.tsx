'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { WorkMedia } from '@/data/workMedia';

interface WorkTileProps {
  item: WorkMedia;
  sizes?: string;
  className?: string;
  showCaption?: boolean;
}

function WorkVideo({ item }: { item: WorkMedia }) {
  const ref = useRef<HTMLVideoElement>(null);

  // Only download and play clips while they're on screen
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={item.src}
      poster={item.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={item.alt}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

export function WorkTile({
  item,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className = 'aspect-[4/5]',
  showCaption = true,
}: WorkTileProps) {
  return (
    <figure className={`relative overflow-hidden rounded-md bg-[#E8E1D3] ${className}`}>
      {item.type === 'video' ? (
        <WorkVideo item={item} />
      ) : (
        <Image src={item.src} alt={item.alt} fill sizes={sizes} className="object-cover" />
      )}
      {showCaption && (
        <figcaption
          className="absolute inset-x-0 bottom-0 px-3 pt-8 pb-2.5 text-xs leading-snug text-white"
          style={{ background: 'linear-gradient(to top, rgba(20,40,28,0.85), transparent)' }}
        >
          {item.alt}
        </figcaption>
      )}
    </figure>
  );
}
