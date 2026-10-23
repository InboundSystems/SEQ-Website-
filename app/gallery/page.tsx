import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { GalleryClient } from '@/components/gallery/GalleryClient';
import { workMedia, workCategories } from '@/data/workMedia';
import { FadeIn } from '@/components/home/AnimatedSection';

export const metadata: Metadata = {
  title: 'Gallery — Brisbane Landscaping & Garden Work',
  description:
    'Real photos and videos of our lawn mowing, hedge trimming, garden maintenance and mulching jobs across Brisbane Southside. SEQ Landscaping & Garden Maintenance.',
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Gallery', url: '/gallery' },
];


export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section style={{ backgroundColor: '#1C3A2A' }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {i > 0 && <span style={{ color: '#4A8C5C' }}>/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.url} style={{ color: '#E8C99A' }} className="hover:underline">{crumb.name}</Link>
                  ) : (
                    <span style={{ color: '#FDFAF5' }}>{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Our Work
          </h1>
          <p className="text-lg" style={{ color: '#E8C99A' }}>
            Real jobs, straight off Sam&apos;s phone — lawns, hedges and gardens across Brisbane Southside.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <FadeIn>
          <GalleryClient items={workMedia} categories={workCategories} />
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section style={{ backgroundColor: '#C17F3E' }} className="py-10 px-8 rounded-2xl text-center mt-14">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Like What You See?</h2>
            <p className="text-white mb-6 text-sm">Get a free quote for your garden — text Sam on 0432 404 881.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="sms:0432404881"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1C3A2A', color: '#FDFAF5' }}
              >
                Text 0432 404 881
              </a>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm border-2 border-white text-white transition-opacity hover:opacity-80"
              >
                Send an Enquiry
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
