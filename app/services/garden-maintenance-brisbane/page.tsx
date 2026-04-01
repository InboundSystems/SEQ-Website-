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
  title: 'Garden Maintenance Brisbane',
  description:
    'Reliable garden maintenance in Brisbane — weeding, pruning, edging, fertilising & seasonal clean-ups. Regular contracts available. Call Sam on 0490 770 382 for a free quote.',
};

const services = [
  'Regular weeding and garden bed maintenance',
  'Pruning and shaping of shrubs and plants',
  'Lawn edging and garden border maintenance',
  'Fertilising and soil treatment',
  'Seasonal garden clean-ups',
  'Mulch top-ups and replenishment',
  'Garden waste removal',
  'Irrigation checking and minor adjustments',
];

const steps = [
  {
    title: 'Free Quote',
    description:
      'Call Sam on 0490 770 382 or send an enquiry online. We\'ll assess your garden and confirm pricing before any work begins.',
  },
  {
    title: 'We Come to You',
    description:
      'Our experienced team arrives at your Brisbane Southside property with all the tools and equipment needed.',
  },
  {
    title: 'Professional Garden Care',
    description:
      'We weed, prune, edge and tidy your garden to a professional standard — tailored to your specific needs.',
  },
  {
    title: 'Ongoing or One-Off',
    description:
      'Set up a regular maintenance schedule that works for you, or book us for a one-off visit whenever your garden needs attention.',
  },
];

const reasons = [
  'Locally based in Tarragindi — fast response across Brisbane Southside',
  'Fully insured with public liability cover',
  'Experienced team with a genuine love of gardens',
  'Flexible scheduling — fortnightly, monthly or one-off visits',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How often should I get garden maintenance done in Brisbane?',
    answer:
      "For most Brisbane Southside homes, fortnightly or monthly garden maintenance keeps gardens healthy and presentable. Brisbane's subtropical climate means faster growth — particularly in summer. We'll recommend the right frequency after assessing your garden. Call Sam on 0490 770 382 for a free quote.",
  },
  {
    question: 'What does a garden maintenance visit include?',
    answer:
      'A standard garden maintenance visit from SEQ Landscaping includes weeding garden beds, pruning overgrown shrubs, edging lawn borders, removing garden debris, and a general tidy. We tailor each visit to your garden\'s specific needs — let us know what matters most to you.',
  },
  {
    question: 'Do you offer ongoing garden maintenance contracts in Brisbane?',
    answer:
      'Yes — we offer weekly, fortnightly, and monthly garden maintenance contracts across Brisbane Southside. Ongoing clients receive priority booking and consistent service from our experienced team. Call Sam on 0490 770 382 to discuss a maintenance plan.',
  },
];

const relatedServices = [
  { title: 'Lawn Mowing Brisbane', href: '/services/lawn-mowing-brisbane' },
  { title: 'Garden Clean Up Brisbane', href: '/services/garden-clean-up-brisbane' },
  { title: 'Landscaping Brisbane', href: '/services/landscaping-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Garden Maintenance Brisbane', url: '/services/garden-maintenance-brisbane' },
];

export default function GardenMaintenancePage() {
  return (
    <>
      <ServiceSchema
        name="Garden Maintenance Brisbane"
        description="Professional garden maintenance services across Brisbane Southside — weeding, pruning, edging, fertilising and seasonal clean-ups."
        url="https://seqlandscaping.base44.app/services/garden-maintenance-brisbane"
        areaServed="Brisbane Southside, Greater Brisbane"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <ServicePageLayout
        h1="Garden Maintenance Brisbane"
        breadcrumbs={breadcrumbs}
        ctaServiceName="Garden Maintenance"
        relatedServices={relatedServices}
      >
        {/* Section 2 — Intro */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance provides reliable, professional garden
              maintenance services across Brisbane Southside. From regular weeding and pruning to
              seasonal garden clean-ups and fertilising, our garden maintenance Brisbane team keeps
              your outdoor space looking its best year-round — without the effort.
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
              Our Garden Maintenance Services
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
              How Our Garden Maintenance Process Works
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
              Why Brisbane Homeowners Choose SEQ Landscaping for Garden Maintenance
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
        <ServiceAreaSection serviceName="Garden Maintenance" bgColor="#F5F0E8" />

        {/* Section 7 — FAQ */}
        <section className="py-10">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Frequently Asked Questions — Garden Maintenance Brisbane
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
