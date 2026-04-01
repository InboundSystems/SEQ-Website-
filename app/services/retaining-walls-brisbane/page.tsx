import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { ServiceAreaSection } from '@/components/services/ServiceAreaSection';
import { FAQAccordion } from '@/components/services/FAQAccordion';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { FadeIn } from '@/components/home/AnimatedSection';

export const metadata: Metadata = {
  title: 'Retaining Walls Brisbane',
  description:
    'Retaining wall design and construction across Brisbane Southside. Sleeper walls, block walls, stone walls. Residential and commercial. Free quotes — call Sam on 0490 770 382.',
};

const services = [
  'Timber sleeper retaining walls',
  'Concrete block retaining walls',
  'Natural stone retaining walls',
  'Garden terrace creation and levelling',
  'Drainage design behind retaining walls',
  'Repair and replacement of existing failing walls',
  'Residential and commercial retaining wall projects',
];

const steps = [
  { title: 'Free On-Site Quote', description: 'Call Sam on 0490 770 382. We\'ll visit your property, assess the site conditions, and provide a detailed quote including wall type recommendation.' },
  { title: 'Design & Planning', description: 'We design the wall to suit your site — including drainage, footings, and material selection for Brisbane\'s climate and soil.' },
  { title: 'Professional Construction', description: 'Our team builds your retaining wall to the highest standard, with correct drainage to ensure longevity through Brisbane\'s wet seasons.' },
  { title: 'Finishing & Clean-Up', description: 'We complete all finishing work and remove all construction debris, leaving your property clean and your garden transformed.' },
];

const reasons = [
  'Locally based in Tarragindi — we know Brisbane Southside\'s hilly terrain',
  'Fully insured with public liability cover',
  'Built to last — correct drainage and footings every time',
  'All wall types: sleeper, block, stone',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation on-site quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How much does a retaining wall cost in Brisbane?',
    answer:
      'Retaining wall costs in Brisbane typically range from $200–$450 per linear metre, depending on wall type, height, and site conditions. Timber sleeper walls are generally more affordable; concrete block and stone walls are more expensive but longer-lasting. Call Sam on 0490 770 382 for a free quote.',
  },
  {
    question: 'Do you need council approval for a retaining wall in Brisbane?',
    answer:
      'In Brisbane, retaining walls under 1 metre generally don\'t require council approval. Walls over 1 metre, or near property boundaries, may require a development application. We\'ll advise you on requirements during your free quote — call Sam on 0490 770 382.',
  },
  {
    question: "What's the best type of retaining wall for Brisbane?",
    answer:
      "For most residential Brisbane properties, timber sleeper walls offer excellent value and blend well with garden aesthetics. Concrete block walls are ideal for larger commercial applications or where maximum longevity is required. We'll recommend the right solution for your specific site.",
  },
];

const relatedServices = [
  { title: 'Landscaping Brisbane', href: '/services/landscaping-brisbane' },
  { title: 'Garden Design Brisbane', href: '/services/garden-design-brisbane' },
  { title: 'Turf Laying Brisbane', href: '/services/turf-laying-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Retaining Walls Brisbane', url: '/services/retaining-walls-brisbane' },
];

export default function RetainingWallsPage() {
  return (
    <>
      <ServiceSchema name="Retaining Walls Brisbane" description="Retaining wall design and construction across Brisbane Southside. Timber sleeper, concrete block and natural stone walls for residential and commercial properties." url="https://seqlandscaping.base44.app/services/retaining-walls-brisbane" areaServed="Brisbane Southside, Greater Brisbane" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <ServicePageLayout h1="Retaining Walls Brisbane" breadcrumbs={breadcrumbs} ctaServiceName="Retaining Wall" relatedServices={relatedServices}>
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance designs and builds retaining walls across Brisbane Southside and Greater Brisbane. Whether you need a timber sleeper wall to manage a sloped garden, a concrete block retaining wall for a commercial site, or natural stone for a premium finish — our retaining walls Brisbane team delivers durable, beautifully finished results built for Brisbane&apos;s climate.
            </p>
          </FadeIn>
        </section>
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Retaining Wall Services</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#2D5A3D' }} />
                  <span className="text-sm" style={{ color: '#1A1A1A' }}>{s}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        {/* Extra section — Brisbane terrain */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Retaining Walls for Brisbane&apos;s Hilly Terrain</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
              Brisbane Southside&apos;s hilly suburbs — from Mount Gravatt and Upper Mount Gravatt to Tarragindi and Greenslopes — create particular demand for retaining walls. We build walls that work with Brisbane&apos;s climate and soil conditions, including correct drainage to prevent failure in wet seasons. A properly designed retaining wall not only solves erosion and slope problems — it creates usable, level garden space and dramatically improves the appearance of sloped properties.
            </p>
          </FadeIn>
        </section>

        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>How Our Retaining Wall Process Works</h2>
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-sm" style={{ backgroundColor: '#1C3A2A' }}>{i + 1}</div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: '#1C3A2A' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>
        </section>
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Why Brisbane Homeowners Choose SEQ Landscaping for Retaining Walls</h2>
            <ul className="space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                  <span className="text-sm" style={{ color: '#1A1A1A' }}>{r}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>
        <ServiceAreaSection serviceName="Retaining Walls" bgColor="#FDFAF5" />
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Frequently Asked Questions — Retaining Walls Brisbane</h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
