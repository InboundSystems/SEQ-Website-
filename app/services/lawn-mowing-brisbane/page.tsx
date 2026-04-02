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
  title: 'Lawn Mowing Brisbane',
  description:
    'Professional lawn mowing across Brisbane Southside. Weekly, fortnightly & one-off services available. Crisp edges, the perfect cut, every time. Free quotes — call Sam on 0490 770 382.',
};

const services = [
  'Standard lawn mowing (all lawn sizes)',
  'Lawn edging and trimming',
  'Catcher/no-catcher options',
  'Lawn striping and finishing',
  'Fortnightly, monthly and one-off services',
  'Commercial and residential properties',
];

const steps = [
  {
    title: 'Free Quote',
    description:
      'Call Sam on 0490 770 382 or submit an enquiry online. We\'ll confirm the price before we start — no surprises.',
  },
  {
    title: 'We Come to You',
    description:
      'Our team arrives at your Brisbane Southside property fully equipped with professional-grade mowing equipment.',
  },
  {
    title: 'Professional Cut & Edge',
    description:
      'We mow, edge, and trim to a precise finish — leaving your lawn clean and tidy every time.',
  },
  {
    title: 'Ongoing or One-Off',
    description:
      'Set up a regular weekly or fortnightly schedule, or book us whenever you need us.',
  },
];

const reasons = [
  'Locally based in Tarragindi — fast response across Brisbane Southside',
  'Fully insured with public liability cover',
  'Professional-grade equipment for a superior finish',
  'Flexible scheduling — weekly, fortnightly, monthly or one-off',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How much does lawn mowing cost in Brisbane?',
    answer:
      'Lawn mowing in Brisbane starts from around $60 for a standard residential lawn. Pricing depends on lawn size, condition, and service frequency. We offer discounted rates for regular contracts. Call Sam on 0490 770 382 for a free, no-obligation quote specific to your property.',
  },
  {
    question: 'Do you offer regular lawn mowing contracts in Brisbane?',
    answer:
      'Yes — we offer weekly, fortnightly, and monthly lawn mowing contracts across Brisbane Southside. Regular clients receive priority scheduling and consistent service from the same team. Contact us to set up an ongoing arrangement.',
  },
  {
    question: 'Do you service my Brisbane suburb for lawn mowing?',
    answer:
      'We service all Brisbane Southside suburbs and Greater Brisbane including Tarragindi, Greenslopes, Moorooka, Mount Gravatt, Coorparoo, Holland Park, Annerley, Sunnybank, and many more. Call Sam on 0490 770 382 to confirm your suburb.',
  },
];

const relatedServices = [
  { title: 'Garden Maintenance Brisbane', href: '/services/garden-maintenance-brisbane' },
  { title: 'Garden Clean Up Brisbane', href: '/services/garden-clean-up-brisbane' },
  { title: 'Turf Laying Brisbane', href: '/services/turf-laying-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Lawn Mowing Brisbane', url: '/services/lawn-mowing-brisbane' },
];

export default function LawnMowingPage() {
  return (
    <>
      <ServiceSchema
        name="Lawn Mowing Brisbane"
        description="Professional lawn mowing services across Brisbane Southside and Greater Brisbane. Weekly, fortnightly and one-off services available."
        url="https://seqlandscaping.base44.app/services/lawn-mowing-brisbane"
        areaServed="Brisbane Southside, Greater Brisbane"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <ServicePageLayout
        h1="Lawn Mowing Brisbane"
        breadcrumbs={breadcrumbs}
        ctaServiceName="Lawn Mowing"
        relatedServices={relatedServices}
      >
        {/* Section 2 — Intro */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 -mx-6 px-6 lg:-mx-0 lg:px-0 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance provides professional lawn mowing services
              across Brisbane Southside and Greater Brisbane. Based in Tarragindi, our lawn mowing
              Brisbane team delivers reliable, consistent results — whether you need a one-off cut
              or a regular lawn mowing contract to keep your garden looking its best year-round.
            </p>
          </FadeIn>
        </section>

        {/* Section 3 — Our Services */}
        <section className="py-10">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Our Lawn Mowing Services
            </h2>
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

        {/* Section 4 — Process */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-8"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              How Our Lawn Mowing Process Works
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
              Why Brisbane Homeowners Choose SEQ Landscaping and Garden Maintenance for Lawn Mowing
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
        <ServiceAreaSection serviceName="Lawn Mowing" bgColor="#F5F0E8" />

        {/* Section 7 — FAQ */}
        <section className="py-10">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Frequently Asked Questions — Lawn Mowing Brisbane
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
