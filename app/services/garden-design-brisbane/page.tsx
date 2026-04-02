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
  title: 'Garden Design Brisbane',
  description:
    'Custom garden design for Brisbane homes. Landscape design, garden makeovers, new planting plans & outdoor transformations. Free design consultation — call Sam on 0490 770 382.',
};

const services = [
  'Custom garden design consultations',
  'New garden bed design and planting',
  'Front garden design and kerb appeal improvements',
  'Backyard transformation planning',
  'Plant selection for Brisbane\'s subtropical climate',
  'Low-maintenance garden design',
  'Water-wise garden planning',
  'Integration with retaining walls and hard landscaping',
];

const steps = [
  { title: 'Free Design Consultation', description: 'Sam visits your property, listens to your vision, and assesses your space — no charge, no obligation.' },
  { title: 'Design & Planning', description: 'We develop a garden design tailored to your space, lifestyle, and Brisbane\'s climate — including plant selection and layout.' },
  { title: 'Detailed Quote', description: 'We provide a clear, itemised quote covering plants, materials, and all installation work. No surprises.' },
  { title: 'Installation', description: 'Our team completes the full installation to the agreed design — and we\'re not happy until you are.' },
];

const reasons = [
  'Local knowledge of Brisbane\'s subtropical climate and soil',
  'Fully insured with public liability cover',
  'Design and installation by the same team — no handover issues',
  'Plant selections proven to thrive in Brisbane conditions',
  '5-star rated by Brisbane homeowners',
  'Free design consultation — call Sam on 0490 770 382',
];

const faqs = [
  {
    question: 'How does the garden design process work at SEQ Landscaping and Garden Maintenance?',
    answer:
      'We start with a free consultation where Sam visits your property, discusses your vision, assesses the space, and recommends a design. We then provide a detailed quote covering plants, materials, and installation. Once approved, we handle the complete installation.',
  },
  {
    question: 'How much does garden design cost in Brisbane?',
    answer:
      'Basic garden design consultations are included in the cost of installation for most projects. For larger or more complex design projects, we can provide a standalone design service. Call Sam on 0490 770 382 to discuss your specific project.',
  },
  {
    question: 'What plants do you recommend for Brisbane gardens?',
    answer:
      'We recommend climate-appropriate plants that thrive in Brisbane\'s subtropical conditions — including native species, drought-tolerant varieties, and fast-growing screening plants. Popular choices include Lilly Pilly, Lomandra, Grevillea, and Murraya. We\'ll tailor planting choices to your garden\'s conditions.',
  },
];

const relatedServices = [
  { title: 'Landscaping Brisbane', href: '/services/landscaping-brisbane' },
  { title: 'Retaining Walls Brisbane', href: '/services/retaining-walls-brisbane' },
  { title: 'Turf Laying Brisbane', href: '/services/turf-laying-brisbane' },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Garden Design Brisbane', url: '/services/garden-design-brisbane' },
];

export default function GardenDesignPage() {
  return (
    <>
      <ServiceSchema name="Garden Design Brisbane" description="Custom garden design and installation for Brisbane homes. Landscape design, planting plans, garden makeovers and outdoor transformations." url="https://seqlandscaping.base44.app/services/garden-design-brisbane" areaServed="Brisbane Southside, Greater Brisbane" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <ServicePageLayout h1="Garden Design Brisbane" breadcrumbs={breadcrumbs} ctaServiceName="Garden Design" relatedServices={relatedServices}>
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl mb-2">
          <FadeIn>
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              SEQ Landscaping &amp; Garden Maintenance offers custom garden design services across Brisbane Southside and Greater Brisbane. From front garden redesigns and backyard transformations to complete landscape plans — our garden design Brisbane team creates beautiful, functional outdoor spaces tailored to your vision and Brisbane&apos;s subtropical climate. Free design consultations available.
            </p>
          </FadeIn>
        </section>
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Garden Design Services</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>How Our Garden Design Process Works</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Why Brisbane Homeowners Choose SEQ Landscaping and Garden Maintenance for Garden Design</h2>
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
        <ServiceAreaSection serviceName="Garden Design" bgColor="#F5F0E8" />
        <section className="py-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Frequently Asked Questions — Garden Design Brisbane</h2>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </section>
      </ServicePageLayout>
    </>
  );
}
