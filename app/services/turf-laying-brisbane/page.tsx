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
  title: 'Turf Laying Brisbane',
  description:
    'Professional turf installation across Brisbane. Instant turf supply and laying for residential and commercial properties. Free quotes — call Sam on 0490 770 382.',
};

const services = [
  'Instant turf supply and installation',
  'Site preparation and soil conditioning',
  'Old lawn removal and disposal',
  'Turf variety selection advice (Buffalo, Kikuyu, Couch, Zoysia)',
  'Levelling and grading before laying',
  'Post-installation watering guidance',
  'Residential and commercial turf projects',
];

const varieties = [
  {
    name: 'Sir Walter Buffalo',
    description: 'Drought-tolerant, soft underfoot, and ideal for Brisbane Southside conditions. The most popular choice for Brisbane families.',
  },
  {
    name: 'Kikuyu',
    description: 'Fast-growing, budget-friendly and suits high-traffic areas. Great for kids and pets.',
  },
  {
    name: 'Couch Grass',
    description: 'Fine blade, great for sports lawns and formal garden settings. Dense and hard-wearing.',
  },
  {
    name: 'Zoysia',
    description: 'Low-maintenance, dense coverage and handles shade better than most turf varieties. Ideal for partially shaded Brisbane gardens.',
  },
];

const steps = [
  {
    title: 'Free Quote & Site Assessment',
    description: 'Call Sam on 0490 770 382 for a free quote. We\'ll assess your site and recommend the right turf variety for your conditions.',
  },
  {
    title: 'Turf Sourced Fresh',
    description: 'We source fresh, quality turf from trusted Brisbane suppliers — delivered and laid same day for best establishment.',
  },
  {
    title: 'Site Preparation',
    description: 'Remove old lawn, grade and condition the soil for optimal root contact and establishment.',
  },
  {
    title: 'Professional Laying',
    description: 'Turf is laid precisely with no gaps and clean, sharp edges. Every roll is fitted and pressed for firm contact.',
  },
  {
    title: 'First Water & Aftercare',
    description: 'We water immediately after laying and provide full aftercare instructions so your turf establishes perfectly.',
  },
];

const reasons = [
  'Locally based in Tarragindi — fast response across Brisbane Southside',
  'Fully insured with public liability cover',
  'Quality turf sourced fresh from Brisbane suppliers — laid same day',
  'Expert advice on turf variety selection for Brisbane conditions',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How much does turf laying cost in Brisbane?',
    answer:
      'Turf laying in Brisbane typically costs $15–$25 per square metre, including supply and installation. The total cost depends on area size, turf variety chosen, and site preparation required. Call Sam on 0490 770 382 for a free, no-obligation quote for your property.',
  },
  {
    question: "What's the best time of year to lay turf in Brisbane?",
    answer:
      "Turf can be laid year-round in Brisbane's subtropical climate. Spring and early autumn are ideal — temperatures are warm enough for establishment but not extreme. Avoid laying during Brisbane's hottest summer days if possible, as new turf needs consistent watering during establishment.",
  },
  {
    question: 'How long does new turf take to establish in Brisbane?',
    answer:
      'New turf in Brisbane typically takes 2–4 weeks to establish — roots bonding with the soil and becoming stable enough to mow. During this period, consistent watering is essential. We provide full aftercare instructions with every turf laying job.',
  },
];

const relatedServices = [
  { title: 'Landscaping Brisbane', href: '/services/landscaping-brisbane' },
  { title: 'Garden Maintenance Brisbane', href: '/services/garden-maintenance-brisbane' },
  { title: 'Garden Clean Up Brisbane', href: '/services/garden-clean-up-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Turf Laying Brisbane', url: '/services/turf-laying-brisbane' },
];

export default function TurfLayingPage() {
  return (
    <>
      <ServiceSchema
        name="Turf Laying Brisbane"
        description="Professional turf supply and installation across Brisbane Southside. Residential and commercial turf laying with site preparation and aftercare."
        url="https://seqlandscaping.base44.app/services/turf-laying-brisbane"
        areaServed="Brisbane Southside, Greater Brisbane"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <ServicePageLayout
        h1="Turf Laying Brisbane"
        breadcrumbs={breadcrumbs}
        ctaServiceName="Turf Laying"
        relatedServices={relatedServices}
      >
        {/* Section 2 — Intro */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              Looking for professional turf laying in Brisbane? SEQ Landscaping &amp; Garden
              Maintenance supplies and installs quality instant turf across Brisbane Southside and
              Greater Brisbane. Whether you&apos;re replacing a tired lawn, installing turf in a
              newly landscaped area, or laying grass in a new build — our turf laying Brisbane team
              delivers a professional result every time.
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
              Our Turf Laying Services
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

        {/* Section 3b — Turf Varieties (extra for this page) */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Turf Varieties We Install in Brisbane
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {varieties.map((v) => (
                <div
                  key={v.name}
                  className="bg-white rounded-xl p-5 border-l-4"
                  style={{ borderLeftColor: '#2D5A3D' }}
                >
                  <h3 className="font-semibold text-sm mb-2" style={{ color: '#1C3A2A' }}>
                    {v.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B6B6B' }}>
                    {v.description}
                  </p>
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
              How Our Turf Laying Process Works
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
              Why Brisbane Homeowners Choose SEQ Landscaping for Turf Laying
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
        <ServiceAreaSection serviceName="Turf Laying" bgColor="#FDFAF5" />

        {/* Section 7 — FAQ */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Frequently Asked Questions — Turf Laying Brisbane
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
