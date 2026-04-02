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
  title: 'Tree Trimming Brisbane',
  description:
    'Professional tree trimming and pruning across Brisbane Southside. Safe, tidy results. Dead branch removal, crown thinning, shape pruning. Free quotes — call Sam on 0490 770 382.',
};

const services = [
  'Crown thinning and lifting',
  'Dead branch removal',
  'Shape pruning for aesthetics and safety',
  'Fruit tree pruning',
  'Palm trimming and frond removal',
  'Stump grinding (partnered with licensed operators for larger removals)',
  'General tree maintenance and inspection',
];

const steps = [
  { title: 'Free On-Site Assessment', description: 'Call Sam on 0490 770 382. We\'ll visit your property, assess the tree, and provide a clear quote before any work begins.' },
  { title: 'Safety Setup', description: 'Our team arrives with the correct equipment and establishes a safe work zone before starting.' },
  { title: 'Professional Trimming', description: 'We trim, prune, and shape with precision — removing dead wood, improving structure, and enhancing the tree\'s health.' },
  { title: 'Full Clean-Up', description: 'All branches and debris are removed from site, leaving your property completely tidy.' },
];

const reasons = [
  'Locally based in Tarragindi — fast response across Brisbane Southside',
  'Fully insured with public liability cover',
  'Safe, professional approach to all tree work',
  'Partnered with licensed operators for complex removals',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation on-site quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How much does tree trimming cost in Brisbane?',
    answer:
      'Tree trimming in Brisbane typically starts from $150 for a small tree. Pricing depends on tree size, access, and scope of work. We provide a free on-site assessment and quote before any work begins — call Sam on 0490 770 382.',
  },
  {
    question: 'Do you do stump grinding in Brisbane?',
    answer:
      'Yes — we offer stump grinding and removal for smaller stumps as part of our tree service. For large or complex stumps, we work with licensed specialists to ensure the job is done safely. Call us to discuss your specific situation.',
  },
  {
    question: 'What areas do you service for tree trimming in Brisbane?',
    answer:
      'We service all Brisbane Southside suburbs for tree trimming — Tarragindi, Greenslopes, Moorooka, Mount Gravatt, Coorparoo, Holland Park, Annerley, Sunnybank, Camp Hill, and all surrounding areas.',
  },
];

const relatedServices = [
  { title: 'Hedge Trimming Brisbane', href: '/services/hedge-trimming-brisbane' },
  { title: 'Garden Clean Up Brisbane', href: '/services/garden-clean-up-brisbane' },
  { title: 'Green Waste Removal Brisbane', href: '/services/green-waste-removal-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Tree Trimming Brisbane', url: '/services/tree-trimming-brisbane' },
];

export default function TreeTrimmingPage() {
  return (
    <>
      <ServiceSchema name="Tree Trimming Brisbane" description="Professional tree trimming and pruning services across Brisbane Southside. Crown thinning, dead branch removal, palm trimming and shape pruning." url="https://seqlandscaping.base44.app/services/tree-trimming-brisbane" areaServed="Brisbane Southside, Greater Brisbane" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <ServicePageLayout h1="Tree Trimming Brisbane" breadcrumbs={breadcrumbs} ctaServiceName="Tree Trimming" relatedServices={relatedServices}>
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance provides professional tree trimming and pruning services across Brisbane Southside. Based in Tarragindi, our tree trimming Brisbane team handles everything from palm frond removal and dead branch clearing to crown thinning and fruit tree pruning — safely and efficiently, with full clean-up included.
            </p>
          </FadeIn>
        </section>
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Tree Trimming Services</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>How Our Tree Trimming Process Works</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Why Brisbane Homeowners Choose SEQ Landscaping and Garden Maintenance for Tree Trimming</h2>
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
        <ServiceAreaSection serviceName="Tree Trimming" bgColor="#F5F0E8" />
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Frequently Asked Questions — Tree Trimming Brisbane</h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
