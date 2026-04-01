import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FadeIn } from '@/components/home/AnimatedSection';

export const metadata: Metadata = {
  title: 'About SEQ Landscaping — Brisbane Southside Local',
  description:
    'SEQ Landscaping & Garden Maintenance is a locally owned Brisbane Southside business run by Sam. Fully insured, 5-star rated. Lawn mowing, landscaping, garden maintenance and more.',
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
];

const services = [
  { name: 'Lawn Mowing & Edging', href: '/services/lawn-mowing-brisbane' },
  { name: 'Garden Maintenance', href: '/services/garden-maintenance-brisbane' },
  { name: 'Garden Clean-Up', href: '/services/garden-clean-up-brisbane' },
  { name: 'Landscaping', href: '/services/landscaping-brisbane' },
  { name: 'Turf Laying', href: '/services/turf-laying-brisbane' },
  { name: 'Retaining Walls', href: '/services/retaining-walls-brisbane' },
  { name: 'Garden Design', href: '/services/garden-design-brisbane' },
  { name: 'Hedge Trimming', href: '/services/hedge-trimming-brisbane' },
  { name: 'Tree Trimming', href: '/services/tree-trimming-brisbane' },
  { name: 'Weed Removal', href: '/services/weed-removal-brisbane' },
  { name: 'Mulching', href: '/services/mulching-brisbane' },
  { name: 'Green Waste Removal', href: '/services/green-waste-removal-brisbane' },
  { name: 'Commercial Grounds Maintenance', href: '/services/commercial-grounds-maintenance' },
];

const whyLocal = [
  'We know Brisbane Southside\'s soil, climate, and suburb conditions',
  'Fast response times — we\'re based in Tarragindi',
  'You speak directly to Sam, not a call centre',
  'We genuinely care about our local community and clients',
  'We build long-term relationships, not one-off transactions',
];

const suburbs = [
  'Tarragindi', 'Greenslopes', 'Moorooka', 'Mount Gravatt', 'Upper Mount Gravatt',
  'Annerley', 'Holland Park', 'Coorparoo', 'Camp Hill', 'Carina',
  'Sunnybank', 'Sunnybank Hills', 'Salisbury', 'Rocklea',
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section style={{ backgroundColor: '#1C3A2A' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
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
            About SEQ Landscaping
          </h1>
          <p className="text-lg" style={{ color: '#E8C99A' }}>
            Brisbane Southside&apos;s locally owned landscaping and garden maintenance specialists.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        {/* Local specialists intro */}
        <FadeIn>
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-5" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Brisbane Southside Local Specialists</h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#1A1A1A' }}>
              <p>
                SEQ Landscaping &amp; Garden Maintenance is a locally owned and operated business based in Tarragindi, Brisbane. We provide professional lawn mowing, garden maintenance, landscaping, and garden services across Brisbane Southside and Greater Brisbane.
              </p>
              <p>
                Our business was built on one simple principle: do excellent work, treat people honestly, and show up when we say we will. Brisbane Southside homeowners choose us because they get to deal directly with Sam — the owner — not a call centre or an unfamiliar subcontractor. Every job gets personal attention from start to finish.
              </p>
              <p>
                We&apos;re fully insured with public liability cover, and we bring the same standards to a small lawn mowing job as we do to a large landscaping project. Whether you need a one-off garden clean-up or an ongoing maintenance contract, we&apos;d love to help.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why choose local */}
        <FadeIn>
          <section className="py-4">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Why Choose a Local Brisbane Business?</h2>
            <ul className="space-y-3">
              {whyLocal.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                  <span className="text-sm" style={{ color: '#1A1A1A' }}>{reason}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* Services at a glance */}
        <FadeIn>
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 text-sm hover:underline"
                  style={{ color: '#2D5A3D' }}
                >
                  <span style={{ color: '#C17F3E' }}>→</span>
                  {service.name}
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Suburb coverage */}
        <FadeIn>
          <section className="py-4">
            <h2 className="text-2xl font-bold mb-5" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Areas We Serve</h2>
            <p className="text-sm mb-5" style={{ color: '#6B6B6B' }}>
              Based in Tarragindi, we service all of Brisbane Southside and Greater Brisbane including:
            </p>
            <div className="flex flex-wrap gap-2">
              {suburbs.map((suburb) => (
                <span
                  key={suburb}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#F5F0E8', color: '#1C3A2A' }}
                >
                  {suburb}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#F5F0E8', color: '#6B6B6B' }}>
                + all surrounding suburbs
              </span>
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section style={{ backgroundColor: '#1C3A2A' }} className="py-10 px-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Ready to Get Started?</h2>
            <p className="mb-6 text-sm" style={{ color: '#E8C99A' }}>Call Sam directly for a free, no-obligation quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0490770382"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C17F3E', color: '#FDFAF5' }}
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
