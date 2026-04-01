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
  title: 'Weed Removal Brisbane',
  description:
    'Professional weed removal and control across Brisbane Southside. Garden weeding, lawn weed treatment & ongoing weed management. Free quotes — call Sam on 0490 770 382.',
};

const services = [
  'Manual garden bed weeding',
  'Lawn weed identification and treatment',
  'Pre-emergent weed control',
  'Ongoing weed management contracts',
  'Invasive weed removal',
  'Edge and border weeding',
];

const steps = [
  { title: 'Free Quote', description: 'Call Sam on 0490 770 382. We\'ll assess your garden\'s weed situation and recommend the most effective approach.' },
  { title: 'Weed Assessment', description: 'We identify weed species and determine whether manual removal, herbicide treatment, or a combination is most appropriate for your garden.' },
  { title: 'Professional Removal', description: 'Our team manually removes weeds or applies targeted treatments — always with care for your plants, soil, and any children or pets.' },
  { title: 'Ongoing Management', description: 'We recommend and set up a regular maintenance schedule to keep weeds under control long-term.' },
];

const reasons = [
  'Locally based in Tarragindi — fast response across Brisbane Southside',
  'Fully insured with public liability cover',
  'Safe approach — child and pet safety always considered',
  'Flexible: manual weeding or targeted herbicide treatment',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How often do Brisbane gardens need weeding?',
    answer:
      'Brisbane\'s subtropical climate means weeds grow aggressively year-round, particularly in summer. Most Brisbane gardens benefit from weeding every 4–8 weeks. We offer regular maintenance contracts that include weeding to keep your garden consistently tidy.',
  },
  {
    question: 'Do you use chemicals for weed removal?',
    answer:
      'We offer both manual weeding and selective herbicide treatment depending on the situation. We\'ll recommend the safest and most effective approach for your garden and let you know before applying any treatments. Child and pet safety is always considered.',
  },
  {
    question: 'How much does weed removal cost in Brisbane?',
    answer:
      'Weed removal pricing depends on garden size and weed density. A typical residential garden weeding service starts from around $80. For heavily overgrown areas, a one-off clean-up followed by a maintenance contract is often the most cost-effective approach. Call Sam for a free quote.',
  },
];

const relatedServices = [
  { title: 'Garden Maintenance Brisbane', href: '/services/garden-maintenance-brisbane' },
  { title: 'Garden Clean Up Brisbane', href: '/services/garden-clean-up-brisbane' },
  { title: 'Mulching Brisbane', href: '/services/mulching-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Weed Removal Brisbane', url: '/services/weed-removal-brisbane' },
];

export default function WeedRemovalPage() {
  return (
    <>
      <ServiceSchema name="Weed Removal Brisbane" description="Professional weed removal and control across Brisbane Southside. Manual weeding, lawn weed treatment and ongoing weed management contracts." url="https://seqlandscaping.base44.app/services/weed-removal-brisbane" areaServed="Brisbane Southside, Greater Brisbane" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <ServicePageLayout h1="Weed Removal Brisbane" breadcrumbs={breadcrumbs} ctaServiceName="Weed Removal" relatedServices={relatedServices}>
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance provides professional weed removal services across Brisbane Southside and Greater Brisbane. Brisbane&apos;s subtropical climate creates year-round weed pressure — our weed removal Brisbane team offers both manual removal and targeted treatment to keep your garden beds and lawns weed-free, clean, and healthy.
            </p>
          </FadeIn>
        </section>
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Weed Removal Services</h2>
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
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>How Our Weed Removal Process Works</h2>
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
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Why Brisbane Homeowners Choose SEQ Landscaping for Weed Removal</h2>
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
        <ServiceAreaSection serviceName="Weed Removal" bgColor="#F5F0E8" />
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Frequently Asked Questions — Weed Removal Brisbane</h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
