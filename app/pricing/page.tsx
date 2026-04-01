import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQAccordion } from '@/components/services/FAQAccordion';
import { FadeIn } from '@/components/home/AnimatedSection';

export const metadata: Metadata = {
  title: 'Pricing Guide — Landscaping & Garden Services Brisbane',
  description:
    'Transparent pricing for lawn mowing, garden maintenance, landscaping, mulching and more across Brisbane Southside. Indicative costs to help you budget. Free quotes — call Sam on 0490 770 382.',
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Pricing', url: '/pricing' },
];

const pricingData = [
  {
    category: 'Lawn Mowing & Edging',
    items: [
      { service: 'Small yard (under 200m²)', price: '$60–$90' },
      { service: 'Medium yard (200–500m²)', price: '$90–$140' },
      { service: 'Large yard (500m²+)', price: '$140–$220+' },
      { service: 'Fortnightly maintenance discount', price: '~10% off' },
    ],
  },
  {
    category: 'Garden Maintenance',
    items: [
      { service: 'Standard garden tidy-up (hourly)', price: '$80–$110/hr' },
      { service: 'Regular fortnightly maintenance', price: 'From $120/visit' },
      { service: 'Hedge trimming (small–medium hedge)', price: '$80–$180' },
      { service: 'Weed removal (standard garden bed)', price: 'From $80' },
    ],
  },
  {
    category: 'Garden Clean-Up & Waste Removal',
    items: [
      { service: 'Half-day garden clean-up', price: '$280–$420' },
      { service: 'Full-day garden clean-up', price: '$520–$750' },
      { service: 'Green waste removal (small load)', price: 'From $100' },
      { service: 'Green waste removal (large load)', price: '$150–$280' },
    ],
  },
  {
    category: 'Landscaping & Construction',
    items: [
      { service: 'Turf laying (supply + install, per m²)', price: '$25–$45/m²' },
      { service: 'Retaining wall — timber sleeper (per lin. m)', price: '$200–$320/lm' },
      { service: 'Retaining wall — concrete block (per lin. m)', price: '$300–$450/lm' },
      { service: 'Mulch supply and spreading', price: '$80–$200' },
    ],
  },
  {
    category: 'Tree Services',
    items: [
      { service: 'Tree trimming — small tree', price: 'From $150' },
      { service: 'Tree trimming — medium tree', price: '$200–$400' },
      { service: 'Palm frond removal', price: 'From $120' },
      { service: 'Stump grinding (small–medium)', price: 'From $180' },
    ],
  },
];

const faqs = [
  {
    question: 'Are these prices fixed or indicative?',
    answer:
      'These are indicative price ranges to help you budget. Actual pricing depends on your property\'s specific size, condition, access, and scope of work. We always provide a free, no-obligation quote before starting any work — call Sam on 0490 770 382.',
  },
  {
    question: 'Do you charge a call-out fee?',
    answer:
      'No — we do not charge a call-out fee for quotes. Site assessments and quotes are completely free with no obligation to proceed.',
  },
  {
    question: 'Do you offer discounts for regular maintenance?',
    answer:
      'Yes — clients on regular fortnightly or monthly maintenance schedules receive discounted rates compared to one-off visits. Regular clients also get priority scheduling. Ask Sam about our maintenance packages when you call.',
  },
  {
    question: 'How do I get an exact quote?',
    answer:
      'Call Sam on 0490 770 382 or email samhindmarsh@seqlandscaping.net. For larger jobs we\'ll arrange a free on-site visit. For routine services like lawn mowing we can often quote over the phone based on your yard size.',
  },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section style={{ backgroundColor: '#1C3A2A' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {i > 0 && <span style={{ color: '#4A8C5C' }}>/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.url} style={{ color: '#E8C99A' }} className="hover:underline">{crumb.name}</Link>
                  ) : (
                    <span style={{ color: '#FDFAF5' }}>{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Pricing Guide
          </h1>
          <p className="text-lg" style={{ color: '#E8C99A' }}>
            Indicative pricing for landscaping and garden services across Brisbane Southside. Free quotes — call Sam on 0490 770 382.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Intro */}
        <FadeIn>
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-8 px-8 rounded-2xl mb-10">
            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              We believe in transparent, fair pricing. The ranges below give you a guide to typical costs for our services across Brisbane Southside. Every job is different — property size, access, condition, and scope all affect the final price — so we always provide a <strong>free, no-obligation quote</strong> before starting any work. Call Sam directly on <a href="tel:0490770382" className="font-semibold hover:underline" style={{ color: '#1C3A2A' }}>0490 770 382</a>.
            </p>
          </section>
        </FadeIn>

        {/* Pricing Sections */}
        {pricingData.map((section) => (
          <FadeIn key={section.category}>
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>{section.category}</h2>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: '#E8C99A' }}>
                {section.items.map((item, i) => (
                  <div
                    key={item.service}
                    className="flex items-center justify-between px-6 py-4 gap-4"
                    style={{ backgroundColor: i % 2 === 0 ? '#FDFAF5' : '#F5F0E8' }}
                  >
                    <span className="text-sm" style={{ color: '#1A1A1A' }}>{item.service}</span>
                    <span className="font-semibold text-sm whitespace-nowrap" style={{ color: '#1C3A2A' }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        ))}

        {/* FAQ */}
        <FadeIn>
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Pricing FAQs</h2>
            <FAQAccordion faqs={faqs} />
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section style={{ backgroundColor: '#C17F3E' }} className="py-10 px-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Get a Free Quote</h2>
            <p className="text-white mb-6 text-sm">No call-out fees. No obligation. Just a straight answer from Sam.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0490770382"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1C3A2A', color: '#FDFAF5' }}
              >
                Call 0490 770 382
              </a>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm border-2 border-white text-white transition-opacity hover:opacity-80"
              >
                Send an Enquiry
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
