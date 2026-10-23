'use client';

import { useState } from 'react';
import { WorkTile } from '@/components/work/WorkTile';
import type { WorkCategory, WorkMedia } from '@/data/workMedia';

interface GalleryClientProps {
  items: WorkMedia[];
  categories: WorkCategory[];
}

export function GalleryClient({ items, categories }: GalleryClientProps) {
  const [active, setActive] = useState<'All' | WorkCategory>('All');

  const filtered = active === 'All' ? items : items.filter((item) => item.category === active);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {(['All', ...categories] as const).map((cat) => (
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

      {/* Photo wall — mixed portrait/landscape in columns */}
      <div className="columns-2 lg:columns-3 gap-3">
        {filtered.map((item) => (
          <div key={item.src} className="mb-3 break-inside-avoid">
            <WorkTile
              item={item}
              className={item.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-16 text-sm" style={{ color: '#6B6B6B' }}>No images in this category yet.</p>
      )}
    </div>
  );
}
