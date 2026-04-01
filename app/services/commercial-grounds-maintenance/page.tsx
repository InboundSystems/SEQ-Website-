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
  title: 'Commercial Grounds Maintenance Brisbane',
  description:
    'Reliable commercial grounds maintenance across Brisbane. Lawn mowing, garden care, rubbish removal and regular upkeep for offices, strata, retail and industrial sites. Call Sam on 0490 770 382.',
};

const services = [
  'Regular commercial lawn mowing and edging',
  'Garden bed maintenance and weeding',
  'Hedge and shrub trimming',
  'Car park and common area maintenance',
  'Green waste and rubbish removal',
  'Strata and body corporate grounds maintenance',
  'Retail and office park garden care',
  'Industrial site grounds upkeep',
];

const steps = [
  { title: 'Site Assessment', description: 'Call Sam on 0490 770 382 or email us. We\'ll visit your site, assess the scope, and provide a detailed quote tailored to your property\'s requirements.' },
  { title: 'Customised Maintenance Plan', description: 'We develop a maintenance schedule — weekly, fortnightly, or monthly — to keep your grounds consistently presentable year-round.' },
  { title: 'Reliable Regular Service', description: 'Our team arrives on schedule, every time. We\'ll notify you in advance of any changes due to weather and make up missed visits promptly.' },
  { title: 'Ongoing Communication', description: 'You\'ll have direct contact with Sam. We report any issues noticed on site and adjust the maintenance scope as your property\'s needs change.' },
];

const reasons = [
  'Reliable scheduling — we show up when expected, every time',
  'Fully insured with public liability cover',
  'Direct communication with Sam — no call centres',
  'Flexible contracts: weekly, fortnightly, monthly',
  'Experience with strata, retail, office and industrial sites',
  'Free on-site quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'What types of commercial properties do you maintain?',
    answer:
      'We maintain a wide range of commercial properties across Brisbane Southside including office parks, retail centres, strata and body corporate complexes, industrial sites, childcare centres, and medical facilities. If you have grounds that need regular maintenance, we can help — call Sam on 0490 770 382 to discuss your specific property.',
  },
  {
    question: 'Do you offer regular commercial maintenance contracts?',
    answer:
      'Yes — we offer flexible ongoing maintenance contracts on weekly, fortnightly, or monthly schedules. Regular contracts ensure your grounds are always presentable and allow us to plan resources efficiently, which often results in better pricing than ad hoc visits.',
  },
  {
    question: 'Are you insured for commercial property work?',
    answer:
      'Yes — SEQ Landscaping & Garden Maintenance carries full public liability insurance, which is essential for commercial property maintenance. We can provide certificates of currency as required by your property management or body corporate.',
  },
];

const relatedServices = [
  { title: 'Garden Maintenance Brisbane', href: '/services/garden-maintenance-brisbane' },
  { title: 'Lawn Mowing Brisbane', href: '/services/lawn-mowing-brisbane' },
  { title: 'Green Waste Removal Brisbane', href: '/services/green-waste-removal-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Commercial Grounds Maintenance Brisbane', url: '/services/commercial-grounds-maintenance' },
];

export default function CommercialGroundsMaintenancePage() {
  return (
    <>
      <ServiceSchema name="Commercial Grounds Maintenance Brisbane" description="Reliable commercial grounds maintenance across Brisbane. Regular lawn mowing, garden care, hedge trimming and common area upkeep for strata, retail, office and industrial sites." url="https://seqlandscaping.base44.app/services/commercial-grounds-maintenance" areaServed="Brisbane Southside, Greater Brisbane" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <ServicePageLayout h1="Commercial Grounds Maintenance Brisbane" breadcrumbs={breadcrumbs} ctaServiceName="Commercial Grounds Maintenance" relatedServices={relatedServices}>
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance provides professional commercial grounds maintenance services across Brisbane Southside and Greater Brisbane. From strata complexes and body corporate sites to office parks, retail centres, and industrial properties — our commercial grounds maintenance Brisbane team delivers reliable, consistent upkeep that keeps your property looking its best year-round. Direct service from Sam, not a call centre.
            </p>
          </FadeIn>
        </section>
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Commercial Grounds Maintenance Services</h2>
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

        {/* Extra section — commercial reliability */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Consistency You Can Count On</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
              Commercial grounds maintenance is different from residential work — your tenants, clients, and visitors see your grounds every day. That means reliability matters as much as quality. At SEQ Landscaping, we show up on schedule, communicate proactively about any changes, and treat your commercial property with the same care we&apos;d give our own. We&apos;re fully insured, and we&apos;ll provide the documentation your body corporate or property manager requires. Our clients include strata complexes, childcare facilities, medical centres, and retail strips across Brisbane Southside.
            </p>
          </FadeIn>
        </section>

        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>How Our Commercial Maintenance Process Works</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Why Brisbane Businesses Choose SEQ Landscaping</h2>
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
        <ServiceAreaSection serviceName="Commercial Grounds Maintenance" bgColor="#FDFAF5" />
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Frequently Asked Questions — Commercial Grounds Maintenance Brisbane</h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
