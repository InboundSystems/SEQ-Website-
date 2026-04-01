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
  title: 'Green Waste Removal Brisbane',
  description:
    'Fast green waste removal across Brisbane Southside. Garden prunings, branches, lawn clippings and bulk green waste collected and disposed of. Free quotes — call Sam on 0490 770 382.',
};

const services = [
  'General garden pruning and clipping removal',
  'Bulk green waste after clean-ups',
  'Branch and tree debris removal',
  'Lawn clippings and catcher disposal',
  'Post-renovation garden waste',
  'Regular commercial green waste removal',
];

const steps = [
  { title: 'Free Quote', description: 'Call Sam on 0490 770 382. Tell us the volume and type of green waste and we\'ll provide a fast, fair quote.' },
  { title: 'Scheduled Collection', description: 'We arrange a convenient time to collect your green waste — often same day or next day for smaller loads.' },
  { title: 'Loading & Removal', description: 'Our team loads and removes all green waste efficiently, leaving your property clean and tidy.' },
  { title: 'Responsible Disposal', description: 'All green waste is taken to approved disposal and recycling facilities — composted or mulched where possible.' },
];

const reasons = [
  'Locally based in Tarragindi — fast response across Brisbane Southside',
  'Fully insured with public liability cover',
  'Same day or next day collection often available',
  'All green waste responsibly disposed of or recycled',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How much does green waste removal cost in Brisbane?',
    answer:
      'Green waste removal in Brisbane typically starts from around $100 for a small load. Pricing depends on volume and access. We provide a free quote based on your specific situation — call Sam on 0490 770 382.',
  },
  {
    question: 'Do you offer same day green waste removal in Brisbane?',
    answer:
      'Yes — for smaller loads, same day or next day collection is often available across Brisbane Southside. Call Sam on 0490 770 382 to check availability in your area.',
  },
  {
    question: 'What counts as green waste?',
    answer:
      'Green waste includes lawn clippings, garden prunings, hedge trimmings, leaves, branches, weeds, and plant matter. It does NOT include treated timber, soil, rocks, or general household waste. If you\'re unsure, give us a call and we\'ll advise.',
  },
];

const relatedServices = [
  { title: 'Garden Clean Up Brisbane', href: '/services/garden-clean-up-brisbane' },
  { title: 'Tree Trimming Brisbane', href: '/services/tree-trimming-brisbane' },
  { title: 'Hedge Trimming Brisbane', href: '/services/hedge-trimming-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Green Waste Removal Brisbane', url: '/services/green-waste-removal-brisbane' },
];

export default function GreenWasteRemovalPage() {
  return (
    <>
      <ServiceSchema name="Green Waste Removal Brisbane" description="Fast green waste removal across Brisbane Southside. Garden prunings, branches, lawn clippings and bulk green waste collected and responsibly disposed of." url="https://seqlandscaping.base44.app/services/green-waste-removal-brisbane" areaServed="Brisbane Southside, Greater Brisbane" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <ServicePageLayout h1="Green Waste Removal Brisbane" breadcrumbs={breadcrumbs} ctaServiceName="Green Waste Removal" relatedServices={relatedServices}>
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance provides fast, reliable green waste removal services across Brisbane Southside. Whether you&apos;ve just completed a garden clean-up, tree trimming, or hedge job — or simply have an accumulation of clippings and prunings — our green waste removal Brisbane team will collect and responsibly dispose of it all, often same day or next day.
            </p>
          </FadeIn>
        </section>
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Green Waste Removal Services</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>How Our Green Waste Removal Process Works</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Why Brisbane Homeowners Choose SEQ Landscaping for Green Waste Removal</h2>
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
        <ServiceAreaSection serviceName="Green Waste Removal" bgColor="#F5F0E8" />
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Frequently Asked Questions — Green Waste Removal Brisbane</h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
