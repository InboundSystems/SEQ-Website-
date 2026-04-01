'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryClientProps {
  images: GalleryImage[];
  categories: string[];
}

export function GalleryClient({ images, categories }: GalleryClientProps) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? images : images.filter((img) => img.category === active);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
            style={
              active === cat
                ? { backgroundColor: '#1C3A2A', color: '#FDFAF5' }
                : { backgroundColor: '#F5F0E8', color: '#1C3A2A' }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((img, i) => (
          <div key={`${img.src}-${i}`} className="rounded-2xl overflow-hidden aspect-[4/3] relative group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top, rgba(28,58,42,0.85) 0%, transparent 60%)' }}
            >
              <span className="text-white text-sm font-medium">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-16 text-sm" style={{ color: '#6B6B6B' }}>No images in this category yet.</p>
      )}
    </div>
  );
}
