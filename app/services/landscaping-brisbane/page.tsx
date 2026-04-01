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
  title: 'Landscaping Brisbane',
  description:
    'Custom landscaping design and installation across Brisbane Southside. Garden transformations, new garden beds, pathways, retaining walls & outdoor living. Free quotes — call 0490 770 382.',
};

const services = [
  'Custom garden design and installation',
  'New garden beds and planting',
  'Lawn areas, pathways and outdoor living spaces',
  'Retaining walls — structural and decorative',
  'Complete outdoor transformations for residential properties',
  'Commercial landscaping — offices, strata, retail precincts',
  'Garden restoration and renovation',
  'Soil preparation and plant selection suited to Brisbane climate',
];

const steps = [
  {
    title: 'Free Consultation & Quote',
    description:
      'Call Sam on 0490 770 382. We\'ll visit your property, discuss your vision, and provide a clear, itemised quote with no hidden costs.',
  },
  {
    title: 'Design & Planning',
    description:
      'Sam works with you to design an outdoor space that suits your lifestyle, budget, and Brisbane\'s subtropical climate.',
  },
  {
    title: 'Installation',
    description:
      'Our experienced team completes all work to a professional standard — from excavation and preparation through to planting and finishing.',
  },
  {
    title: 'Final Handover',
    description:
      'We walk you through the completed project, provide care instructions, and ensure you\'re completely satisfied before we leave.',
  },
];

const reasons = [
  'Locally based in Tarragindi — we know Brisbane Southside gardens inside out',
  'Fully insured with public liability cover',
  'End-to-end service — design, installation and aftercare',
  'Both residential and commercial landscaping projects',
  '5-star rated by Brisbane homeowners',
  'Free, itemised quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How much does landscaping cost in Brisbane?',
    answer:
      'Landscaping costs in Brisbane vary widely based on scope — from $500 for a simple garden bed installation to $10,000+ for a complete outdoor transformation. We provide free, itemised quotes so you know exactly what\'s included. Call Sam on 0490 770 382.',
  },
  {
    question: 'Do you offer landscaping design as well as installation?',
    answer:
      "Yes — SEQ Landscaping offers both design and installation. Sam will discuss your vision, assess your space, and recommend a design that suits your budget and Brisbane's climate. We handle everything from concept to completion.",
  },
  {
    question: 'Do you landscape commercial properties in Brisbane?',
    answer:
      'Yes — we service both residential and commercial properties across Brisbane Southside and Greater Brisbane. Commercial clients include office parks, strata complexes, retail precincts, and property developers. Contact us to discuss your commercial landscaping project.',
  },
];

const relatedServices = [
  { title: 'Turf Laying Brisbane', href: '/services/turf-laying-brisbane' },
  { title: 'Garden Maintenance Brisbane', href: '/services/garden-maintenance-brisbane' },
  { title: 'Garden Clean Up Brisbane', href: '/services/garden-clean-up-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Landscaping Brisbane', url: '/services/landscaping-brisbane' },
];

export default function LandscapingPage() {
  return (
    <>
      <ServiceSchema
        name="Landscaping Brisbane"
        description="Custom landscaping design and installation across Brisbane Southside. Garden transformations, new garden beds, pathways, retaining walls and complete outdoor living areas."
        url="https://seqlandscaping.base44.app/services/landscaping-brisbane"
        areaServed="Brisbane Southside, Greater Brisbane"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <ServicePageLayout
        h1="Landscaping Brisbane"
        breadcrumbs={breadcrumbs}
        ctaServiceName="Landscaping"
        relatedServices={relatedServices}
      >
        {/* Section 2 — Intro */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance delivers custom landscaping design and
              installation across Brisbane Southside and Greater Brisbane. From new garden beds and
              pathways to complete outdoor transformations, our landscaping Brisbane team brings
              your vision to life — on time and on budget. We work on residential and commercial
              properties of all sizes.
            </p>
          </FadeIn>
        </section>

        {/* Section 3 — Services */}
        <section className="py-10">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Our Landscaping Services
            </h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#2D5A3D' }} />
                  <span className="text-sm" style={{ color: '#1A1A1A' }}>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm" style={{ color: '#6B6B6B' }}>
              Looking for retaining walls specifically?{' '}
              <span style={{ color: '#4A8C5C' }}>
                Retaining wall services coming soon — contact us to discuss your project.
              </span>
            </p>
          </FadeIn>
        </section>

        {/* Section 4 — Process */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-8"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              How Our Landscaping Process Works
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
        <section className="py-10">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Why Brisbane Homeowners Choose SEQ Landscaping
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
        <ServiceAreaSection serviceName="Landscaping" bgColor="#F5F0E8" />

        {/* Section 7 — FAQ */}
        <section className="py-10">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Frequently Asked Questions — Landscaping Brisbane
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
