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
  title: 'Hedge Trimming Brisbane',
  description:
    'Expert hedge trimming and shaping across Brisbane Southside. Neat, precise results for all hedge varieties. Privacy screens, box hedges, feature hedges. Free quotes — call 0490 770 382.',
};

const services = [
  'Box hedge trimming and shaping',
  'Privacy screen shaping',
  'Feature hedge sculpting',
  'Small tree and shrub pruning',
  'Hedge maintenance contracts',
  'All hedge varieties including Lilly Pilly, Murraya, Viburnum, Photinia',
];

const steps = [
  { title: 'Free Quote', description: 'Call Sam on 0490 770 382. We\'ll assess your hedges and confirm pricing — no surprises.' },
  { title: 'We Come to You', description: 'Our team arrives fully equipped with professional hedge trimming tools and safety gear.' },
  { title: 'Precise Trimming', description: 'We trim, shape, and clean up your hedges to a precise, professional finish — every time.' },
  { title: 'Ongoing or One-Off', description: 'Set up a regular trimming schedule or book us whenever your hedges need attention.' },
];

const reasons = [
  'Locally based in Tarragindi — fast response across Brisbane Southside',
  'Fully insured with public liability cover',
  'Precision trimming for all Brisbane hedge varieties',
  'Flexible scheduling — regular contracts or one-off visits',
  '5-star rated by Brisbane homeowners',
  'Free, no-obligation quotes — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How often should hedges be trimmed in Brisbane?',
    answer:
      'Most Brisbane hedges need trimming every 6–12 weeks in the growing season (spring–summer) and less frequently in winter. Fast-growing varieties like Lilly Pilly may need trimming every 4–6 weeks in summer. We\'ll recommend a schedule after assessing your hedges.',
  },
  {
    question: 'Can you shape overgrown hedges in Brisbane?',
    answer:
      'Yes — we regularly restore overgrown hedges in Brisbane. Heavy pruning back to shape is part of our service. We\'ll assess whether the hedge can be restored or needs replacement and advise accordingly.',
  },
  {
    question: 'How much does hedge trimming cost in Brisbane?',
    answer:
      'Hedge trimming in Brisbane starts from around $80 for a small hedge. Pricing depends on hedge length, height, and density. Call Sam on 0490 770 382 for a free, no-obligation quote.',
  },
];

const relatedServices = [
  { title: 'Tree Trimming Brisbane', href: '/services/tree-trimming-brisbane' },
  { title: 'Garden Maintenance Brisbane', href: '/services/garden-maintenance-brisbane' },
  { title: 'Garden Clean Up Brisbane', href: '/services/garden-clean-up-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Hedge Trimming Brisbane', url: '/services/hedge-trimming-brisbane' },
];

export default function HedgeTrimmingPage() {
  return (
    <>
      <ServiceSchema name="Hedge Trimming Brisbane" description="Expert hedge trimming and shaping services across Brisbane Southside. All hedge varieties, privacy screens, box hedges and feature hedges." url="https://seqlandscaping.base44.app/services/hedge-trimming-brisbane" areaServed="Brisbane Southside, Greater Brisbane" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <ServicePageLayout h1="Hedge Trimming Brisbane" breadcrumbs={breadcrumbs} ctaServiceName="Hedge Trimming" relatedServices={relatedServices}>
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance provides expert hedge trimming services across Brisbane Southside and Greater Brisbane. Based in Tarragindi, our hedge trimming Brisbane team delivers neat, precise results for all hedge varieties — from privacy screens and Lilly Pilly to box hedges and sculpted feature hedges. Regular contracts available.
            </p>
          </FadeIn>
        </section>
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Hedge Trimming Services</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>How Our Hedge Trimming Process Works</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Why Brisbane Homeowners Choose SEQ Landscaping for Hedge Trimming</h2>
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
        <ServiceAreaSection serviceName="Hedge Trimming" bgColor="#F5F0E8" />
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Frequently Asked Questions — Hedge Trimming Brisbane</h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
