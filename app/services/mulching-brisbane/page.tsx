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
  title: 'Garden Mulching Brisbane',
  description:
    'Mulch supply and installation across Brisbane Southside. Suppress weeds, retain moisture & improve garden health. Professional mulching service — free quotes on 0490 770 382.',
};

const services = [
  'Mulch supply and spreading',
  'Garden bed preparation before mulching',
  'Weed suppression mulching',
  'Various mulch types: pine bark, sugar cane, hardwood, pea straw',
  'Top-up mulching for existing beds',
  'Large area mulching for commercial properties',
];

const steps = [
  { title: 'Free Quote', description: 'Call Sam on 0490 770 382. We\'ll assess your garden beds and recommend the right mulch type and depth for your conditions.' },
  { title: 'Garden Bed Prep', description: 'We remove existing weeds and prepare garden beds before laying mulch for best results.' },
  { title: 'Mulch Supply & Spread', description: 'We source and deliver quality mulch and spread it evenly to the correct depth — 50–75mm for best weed suppression and moisture retention.' },
  { title: 'Clean Finish', description: 'We ensure a neat, clean finish and remove any excess material from paths, lawns, and garden edges.' },
];

const reasons = [
  'Locally based in Tarragindi — fast response across Brisbane Southside',
  'Fully insured with public liability cover',
  'Right mulch type recommended for your specific garden',
  'Supply and spreading included — fully managed service',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How much does mulching cost in Brisbane?',
    answer:
      'Mulching in Brisbane typically costs $80–$200 for a standard residential garden, including supply and spreading. Larger areas are priced per cubic metre. Call Sam on 0490 770 382 for a free quote based on your garden size.',
  },
  {
    question: 'What type of mulch is best for Brisbane gardens?',
    answer:
      'For most Brisbane gardens, hardwood mulch or pine bark provides the best longevity. Sugar cane mulch is excellent for vegetable gardens as it breaks down and feeds the soil. We\'ll recommend the right mulch type for your specific garden conditions.',
  },
  {
    question: 'How often should I mulch my Brisbane garden?',
    answer:
      'We recommend mulching Brisbane gardens once or twice per year — typically in spring before the hot season and again in autumn. A 50–75mm layer is ideal for weed suppression and moisture retention.',
  },
];

const relatedServices = [
  { title: 'Garden Maintenance Brisbane', href: '/services/garden-maintenance-brisbane' },
  { title: 'Weed Removal Brisbane', href: '/services/weed-removal-brisbane' },
  { title: 'Garden Clean Up Brisbane', href: '/services/garden-clean-up-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Garden Mulching Brisbane', url: '/services/mulching-brisbane' },
];

export default function MulchingPage() {
  return (
    <>
      <ServiceSchema name="Garden Mulching Brisbane" description="Mulch supply and installation across Brisbane Southside. Pine bark, hardwood, sugar cane and pea straw mulching for residential and commercial gardens." url="https://seqlandscaping.base44.app/services/mulching-brisbane" areaServed="Brisbane Southside, Greater Brisbane" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <ServicePageLayout h1="Garden Mulching Brisbane" breadcrumbs={breadcrumbs} ctaServiceName="Garden Mulching" relatedServices={relatedServices}>
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance provides professional garden mulching services across Brisbane Southside. In Brisbane&apos;s climate, mulching is one of the most valuable garden investments you can make — retaining soil moisture during dry spells, reducing watering frequency, suppressing weed growth, and keeping soil temperatures stable during summer. Our garden mulching Brisbane team supplies and spreads quality mulch to a professional standard.
            </p>
          </FadeIn>
        </section>
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Garden Mulching Services</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>How Our Mulching Process Works</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Why Brisbane Homeowners Choose SEQ Landscaping for Mulching</h2>
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
        <ServiceAreaSection serviceName="Garden Mulching" bgColor="#F5F0E8" />
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Frequently Asked Questions — Garden Mulching Brisbane</h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
