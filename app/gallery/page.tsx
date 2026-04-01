import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { GalleryClient, GalleryImage } from '@/components/gallery/GalleryClient';
import { FadeIn } from '@/components/home/AnimatedSection';

export const metadata: Metadata = {
  title: 'Gallery — Brisbane Landscaping & Garden Work',
  description:
    'See examples of our landscaping, lawn mowing, garden maintenance, turf laying and retaining wall work across Brisbane Southside. SEQ Landscaping & Garden Maintenance.',
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Gallery', url: '/gallery' },
];

const categories = [
  'Lawn Mowing',
  'Garden Maintenance',
  'Landscaping',
  'Turf Laying',
  'Retaining Walls',
  'Garden Clean-Up',
];

const images: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Freshly mowed lawn with crisp edges — Greenslopes',
    category: 'Lawn Mowing',
  },
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    alt: 'Manicured garden beds with native plantings',
    category: 'Garden Maintenance',
  },
  {
    src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    alt: 'Freshly laid Sir Walter buffalo turf — Tarragindi',
    category: 'Turf Laying',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    alt: 'Timber sleeper retaining wall — Mount Gravatt',
    category: 'Retaining Walls',
  },
  {
    src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80',
    alt: 'Garden clean-up — overgrown beds cleared and mulched',
    category: 'Garden Clean-Up',
  },
  {
    src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80',
    alt: 'Landscaped backyard with garden bed borders',
    category: 'Landscaping',
  },
  {
    src: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80',
    alt: 'Lawn edging and mowing — Holland Park',
    category: 'Lawn Mowing',
  },
  {
    src: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&q=80',
    alt: 'Garden bed preparation and planting',
    category: 'Garden Maintenance',
  },
  {
    src: 'https://images.unsplash.com/photo-1599685315640-4a4a84c7b0d2?w=800&q=80',
    alt: 'New turf installation — Moorooka',
    category: 'Turf Laying',
  },
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    alt: 'Concrete block retaining wall with garden terrace',
    category: 'Retaining Walls',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    alt: 'Before and after garden clean-up — Annerley',
    category: 'Garden Clean-Up',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Complete backyard landscaping transformation',
    category: 'Landscaping',
  },
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
            Examples of our landscaping, garden maintenance and lawn care work across Brisbane Southside.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <FadeIn>
          <GalleryClient images={images} categories={categories} />
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section style={{ backgroundColor: '#C17F3E' }} className="py-10 px-8 rounded-2xl text-center mt-14">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Like What You See?</h2>
            <p className="text-white mb-6 text-sm">Get a free quote for your garden — call Sam on 0490 770 382.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0490770382"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1C3A2A', color: '#FDFAF5' }}
              >
                Call 0490 770 382
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
