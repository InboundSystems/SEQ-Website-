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
  title: 'Garden Clean Up Brisbane',
  description:
    'One-off garden clean-ups for Brisbane homes. Overgrown gardens, pre-sale tidy-ups, new home clean-outs. Fast turnaround. Call Sam on 0490 770 382 for a free quote.',
};

const included = [
  'Removal of overgrown weeds and plants',
  'Pruning and cutting back overgrown shrubs and hedges',
  'Lawn mowing and edging',
  'Removal of dead plants and garden debris',
  'Green waste removal and disposal',
  'Leaf and garden litter clean-up',
  'Mulching of cleared garden beds',
  'General garden tidy and presentation',
];

const situations = [
  {
    title: 'Pre-Sale Property Preparation',
    description:
      'Kerb appeal sells homes. A professional clean-up before listing can dramatically improve first impressions and add real value.',
  },
  {
    title: 'New Home Move-In',
    description:
      "Moving into a property with an overgrown or neglected garden? We'll restore it quickly so you can enjoy your new home.",
  },
  {
    title: 'Seasonal Clean-Ups',
    description:
      "After summer or before spring, a one-off professional clean-up resets your garden and sets it up for the season ahead.",
  },
  {
    title: 'Rental Property Maintenance',
    description:
      "End-of-tenancy or routine inspections — we handle garden clean-ups for Brisbane landlords and property managers.",
  },
  {
    title: 'Neglected Gardens',
    description:
      "No judgment. We've seen it all. Whatever state your garden is in, we'll bring it back to life.",
  },
];

const steps = [
  {
    title: 'Free Quote',
    description: 'Call Sam on 0490 770 382 or submit an enquiry. We\'ll assess the scope and confirm pricing before any work begins.',
  },
  {
    title: 'Scope Assessment',
    description: 'We assess the garden in person and confirm the full scope and price before starting — no hidden costs.',
  },
  {
    title: 'Full Clean-Up',
    description: 'Our team arrives fully equipped — trucks, tools, and green waste disposal. We work systematically through the garden, clearing, pruning, mowing and tidying.',
  },
  {
    title: 'Green Waste Removed',
    description: 'All green waste is removed from your property. We leave your garden completely clean — nothing left behind.',
  },
];

const reasons = [
  'Locally based in Tarragindi — fast response across Brisbane Southside',
  'Fully insured with public liability cover',
  'Fast turnaround — most garden clean-ups completed same day or same week',
  'Full green waste removal included — we take everything away',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How much does a garden clean up cost in Brisbane?',
    answer:
      'Garden clean-up costs in Brisbane vary based on garden size and the amount of overgrowth. A standard residential clean-up typically ranges from $200–$600. Large or heavily overgrown gardens may be more. We provide a free, no-obligation quote before any work begins — call Sam on 0490 770 382.',
  },
  {
    question: 'Do you remove all garden waste after a clean up?',
    answer:
      'Yes — all green waste and garden debris is removed from your property as part of our standard clean-up service. We bring the trucks and equipment needed to take everything away, leaving your garden clean and clear.',
  },
  {
    question: 'How quickly can you do a garden clean up in Brisbane?',
    answer:
      'We offer fast turnaround on garden clean-ups across Brisbane Southside. Most residential clean-ups can be completed within the same week of enquiry — often sooner. Call Sam on 0490 770 382 to check availability for your suburb.',
  },
];

const relatedServices = [
  { title: 'Lawn Mowing Brisbane', href: '/services/lawn-mowing-brisbane' },
  { title: 'Garden Maintenance Brisbane', href: '/services/garden-maintenance-brisbane' },
  { title: 'Turf Laying Brisbane', href: '/services/turf-laying-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Garden Clean Up Brisbane', url: '/services/garden-clean-up-brisbane' },
];

export default function GardenCleanUpPage() {
  return (
    <>
      <ServiceSchema
        name="Garden Clean Up Brisbane"
        description="One-off and ongoing garden clean-up services across Brisbane Southside. Green waste removal, pruning, lawn mowing and full garden tidy-ups."
        url="https://seqlandscaping.base44.app/services/garden-clean-up-brisbane"
        areaServed="Brisbane Southside, Greater Brisbane"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <ServicePageLayout
        h1="Garden Clean Up Brisbane"
        breadcrumbs={breadcrumbs}
        ctaServiceName="Garden Clean Up"
        relatedServices={relatedServices}
      >
        {/* Section 2 — Intro */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              Need a garden clean up in Brisbane? SEQ Landscaping &amp; Garden Maintenance
              specialises in one-off and ongoing garden clean-up services across Brisbane Southside.
              Whether your garden has become overgrown, you&apos;re preparing a property for sale,
              or you&apos;ve just moved into a new home — our garden clean up Brisbane team will
              transform your outdoor space fast.
            </p>
          </FadeIn>
        </section>

        {/* Section 3 — What's Included */}
        <section className="py-10">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              What&apos;s Included in a Garden Clean Up
            </h2>
            <ul className="space-y-3">
              {included.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#2D5A3D' }} />
                  <span className="text-sm" style={{ color: '#1A1A1A' }}>{s}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        {/* Section 3b — Situations (extra for critical gap page) */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Common Garden Clean Up Situations We Handle
            </h2>
            <div className="space-y-5">
              {situations.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: '#1C3A2A' }}>
                      {s.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Section 4 — Process */}
        <section className="py-10">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-8"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              How Our Garden Clean Up Process Works
            </h2>
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-sm"
                    style={{ backgroundColor: '#1C3A2A' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: '#1C3A2A' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>
        </section>

        {/* Section 5 — Why Choose SEQ */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Why Brisbane Homeowners Choose SEQ for Garden Clean Ups
            </h2>
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

        {/* Section 6 — Service Areas */}
        <ServiceAreaSection serviceName="Garden Clean Up" bgColor="#FDFAF5" />

        {/* Section 7 — FAQ */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Frequently Asked Questions — Garden Clean Up Brisbane
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
