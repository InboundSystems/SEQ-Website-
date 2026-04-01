import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { suburbs } from '@/data/suburbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { FadeIn } from '@/components/home/AnimatedSection';

export function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = suburbs.find((s) => s.slug === slug);
  if (!suburb) return {};
  return {
    title: `Landscaping ${suburb.name} Brisbane`,
    description: `SEQ Landscaping & Garden Maintenance services ${suburb.name} with lawn mowing, garden maintenance, tree trimming & more. Local Brisbane Southside experts. Free quotes — call 0490 770 382.`,
  };
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb: slug } = await params;
  const suburb = suburbs.find((s) => s.slug === slug);

  if (!suburb) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-2xl font-bold mb-4" style={{ color: '#1C3A2A' }}>
          Suburb not found
        </p>
        <Link href="/" style={{ color: '#2D5A3D' }} className="underline">
          Return home
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: `Landscaping ${suburb.name}`, url: `/locations/${suburb.slug}` },
  ];

  const faqs = [
    {
      question: `Do you service ${suburb.name} for lawn mowing and garden maintenance?`,
      answer: `Yes — ${suburb.name} is within our core Brisbane Southside service area. We regularly service homes and businesses in ${suburb.name} ${suburb.postcode}. Call Sam on 0490 770 382 to confirm availability.`,
    },
    {
      question: `How much does lawn mowing cost in ${suburb.name}?`,
      answer: `Lawn mowing prices start from $60 for a standard residential lawn in ${suburb.name}. Call Sam on 0490 770 382 for a free, no-obligation quote based on your property size.`,
    },
    {
      question: `Do you offer regular garden maintenance contracts in ${suburb.name}?`,
      answer: `Yes — we offer weekly, fortnightly, and monthly garden maintenance contracts for ${suburb.name} properties. Ongoing clients receive priority scheduling and consistent service. Contact us to set up a maintenance plan.`,
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section style={{ backgroundColor: '#1C3A2A' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {i > 0 && <span style={{ color: '#4A8C5C' }}>/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.url} style={{ color: '#E8C99A' }} className="hover:underline">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span style={{ color: '#FDFAF5' }}>{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Landscaping {suburb.name}
          </h1>
          <p className="text-lg" style={{ color: '#E8C99A' }}>
            Professional lawn mowing, garden maintenance &amp; landscaping in {suburb.name} {suburb.postcode}.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        {/* Intro */}
        <FadeIn>
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance provides professional landscaping and garden maintenance throughout {suburb.name} and surrounding areas. Based in nearby Tarragindi, our team services {suburb.name} {suburb.postcode} regularly — offering fast response times and local knowledge that out-of-area operators simply can&apos;t match. {suburb.localDetails}
            </p>
          </section>
        </FadeIn>

        {/* Lawn Mowing */}
        <FadeIn>
          <section className="py-4">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Lawn Mowing {suburb.name}
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#1A1A1A' }}>
              Our{' '}
              <Link href="/services/lawn-mowing-brisbane" style={{ color: '#2D5A3D' }} className="underline">
                lawn mowing service
              </Link>{' '}
              in {suburb.name} covers all residential and commercial properties. We use professional-grade mowing equipment to deliver a clean, consistent finish — and offer weekly, fortnightly, or monthly contracts to suit your needs.
            </p>
          </section>
        </FadeIn>

        {/* Garden Maintenance */}
        <FadeIn>
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Garden Maintenance {suburb.name}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#1A1A1A' }}>
              We provide ongoing{' '}
              <Link href="/services/garden-maintenance-brisbane" style={{ color: '#2D5A3D' }} className="underline">
                garden maintenance
              </Link>{' '}
              in {suburb.name} including weeding, pruning, edging, fertilising, and seasonal clean-ups. Regular contracts available — we&apos;ll keep your garden looking its best year-round.
            </p>
          </section>
        </FadeIn>

        {/* Landscaping Services */}
        <FadeIn>
          <section className="py-4">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Landscaping Services {suburb.name}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#1A1A1A' }}>
              From new garden bed installation to complete outdoor transformations,{' '}
              <Link href="/services/landscaping-brisbane" style={{ color: '#2D5A3D' }} className="underline">
                SEQ Landscaping
              </Link>{' '}
              delivers custom landscaping solutions for {suburb.name} properties. Contact Sam to discuss your project.
            </p>
          </section>
        </FadeIn>

        {/* Why choose */}
        <FadeIn>
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Why {suburb.name} Homeowners Choose SEQ Landscaping
            </h2>
            <ul className="space-y-3">
              {[
                `Locally based — fast response for ${suburb.name} and surrounds`,
                '5-star rated by Brisbane homeowners',
                'Fully insured and professionally equipped',
                'One-off and ongoing contracts available',
                'Free quotes, no obligation',
                'Direct communication with Sam — the business owner',
              ].map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                  <span className="text-sm" style={{ color: '#1A1A1A' }}>{reason}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* FAQ */}
        <FadeIn>
          <section className="py-4">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Frequently Asked Questions — Landscaping {suburb.name}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} style={{ borderLeft: '3px solid #C17F3E' }} className="pl-5">
                  <h3 className="font-semibold text-sm mb-2" style={{ color: '#1C3A2A' }}>
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Nearby suburbs */}
        <FadeIn>
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Nearby Areas We Also Service
            </h2>
            <div className="flex flex-wrap gap-3">
              {suburb.nearbySuburbs.map((nearby) => {
                const nearbyData = suburbs.find(
                  (s) => s.name === nearby || s.slug === nearby.toLowerCase().replace(/\s+/g, '-')
                );
                const href = nearbyData
                  ? `/locations/${nearbyData.slug}`
                  : `/locations/${nearby.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <Link
                    key={nearby}
                    href={href}
                    className="px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: '#1C3A2A', color: '#FDFAF5' }}
                  >
                    {nearby}
                  </Link>
                );
              })}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section style={{ backgroundColor: '#C17F3E' }} className="py-10 px-8 rounded-2xl text-center">
            <h2
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Get a Free Quote in {suburb.name}
            </h2>
            <p className="text-white mb-2 text-sm">
              Ready to book lawn mowing or garden maintenance in {suburb.name}? Call Sam directly on{' '}
              <a href="tel:0490770382" className="font-bold underline">
                0490 770 382
              </a>{' '}
              or send us a message below.
            </p>
            <p className="text-white mb-6 text-sm">
              Email:{' '}
              <a href="mailto:samhindmarsh@seqlandscaping.net" className="underline">
                samhindmarsh@seqlandscaping.net
              </a>
            </p>
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
