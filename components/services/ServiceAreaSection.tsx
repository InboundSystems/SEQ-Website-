import Link from 'next/link';
import { FadeIn } from '@/components/home/AnimatedSection';

const DEFAULT_SUBURBS = [
  'Tarragindi',
  'Greenslopes',
  'Moorooka',
  'Mount Gravatt',
  'Coorparoo',
  'Holland Park',
  'Annerley',
  'Sunnybank',
  'Camp Hill',
  'Upper Mount Gravatt',
  'Yeronga',
  'Fairfield',
  'Coopers Plains',
  'Acacia Ridge',
];

interface ServiceAreaSectionProps {
  serviceName: string;
  extraSuburbs?: string[];
  bgColor?: string;
}

export function ServiceAreaSection({
  serviceName,
  extraSuburbs = [],
  bgColor = '#F5F0E8',
}: ServiceAreaSectionProps) {
  const suburbs = [...DEFAULT_SUBURBS, ...extraSuburbs];

  return (
    <section className="py-16" style={{ backgroundColor: bgColor }}>
      <div className="space-y-6">
        <FadeIn>
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Areas We Service for {serviceName}
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-2xl" style={{ color: '#6B6B6B' }}>
            We provide {serviceName.toLowerCase()} services across all Brisbane Southside suburbs
            including {suburbs.slice(0, 6).join(', ')}, and more. Based in Tarragindi, we offer
            fast response times that out-of-area operators simply can&apos;t match.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mt-4">
            {suburbs.map((suburb) => {
              const slug = suburb
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
              return (
                <Link
                  key={suburb}
                  href={`/locations/${slug}`}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:opacity-80"
                  style={{ backgroundColor: '#1C3A2A' }}
                >
                  {suburb}
                </Link>
              );
            })}
          </div>
        </FadeIn>

        {/* Internal links to key suburb pages */}
        <FadeIn delay={0.15}>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <span style={{ color: '#6B6B6B' }}>Key areas:</span>
            {['Tarragindi', 'Greenslopes', 'Moorooka', 'Mount Gravatt', 'Coorparoo'].map(
              (suburb) => (
                <Link
                  key={suburb}
                  href={`/locations/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-medium hover:underline"
                  style={{ color: '#2D5A3D' }}
                >
                  {serviceName} {suburb}
                </Link>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
