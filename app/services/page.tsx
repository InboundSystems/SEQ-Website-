import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Leaf,
  Sprout,
  Home,
  Scissors,
  Trash2,
  Grid2X2,
  Layers,
  Palette,
  Bug,
  TreeDeciduous,
  Truck,
  Wrench,
  Building2,
  RefreshCcw,
  Phone,
} from 'lucide-react';
import { FadeIn } from '@/components/home/AnimatedSection';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
];

export const metadata: Metadata = {
  title: 'Landscaping & Garden Services Brisbane',
  description:
    'Professional landscaping and garden maintenance services in Brisbane. Lawn mowing, garden maintenance, landscaping design, hedge trimming, mulching, irrigation and more. Call 0490 770 382 for a free quote.',
};

const allServices = [
  {
    icon: Leaf,
    title: 'Lawn Mowing',
    description: 'Regular mowing, edging and lawn care for Brisbane homes and businesses.',
    href: '/services/lawn-mowing-brisbane',
  },
  {
    icon: Sprout,
    title: 'Garden Maintenance',
    description: 'Ongoing weeding, pruning, edging and seasonal garden care on your schedule.',
    href: '/services/garden-maintenance-brisbane',
  },
  {
    icon: Home,
    title: 'Landscaping Design & Installation',
    description: 'Custom outdoor transformations from garden beds to complete landscapes.',
    href: '/services/landscaping-brisbane',
  },
  {
    icon: Scissors,
    title: 'Hedge & Tree Trimming',
    description: 'Precise hedge shaping and tree pruning for neat, healthy gardens.',
    href: '/services/hedge-trimming-brisbane',
  },
  {
    icon: Trash2,
    title: 'Garden Clean Up',
    description: 'One-off and ongoing garden clean-ups for overgrown or neglected gardens.',
    href: '/services/garden-clean-up-brisbane',
  },
  {
    icon: Grid2X2,
    title: 'Turf Laying',
    description: 'Instant turf supply and installation for residential and commercial properties.',
    href: '/services/turf-laying-brisbane',
  },
  {
    icon: Layers,
    title: 'Retaining Walls',
    description: 'Structural and decorative retaining wall construction across Brisbane.',
    href: '/services/landscaping-brisbane',
  },
  {
    icon: Palette,
    title: 'Garden Design',
    description: 'Creative garden design tailored to your space, style, and Brisbane\'s climate.',
    href: '/services/landscaping-brisbane',
  },
  {
    icon: Bug,
    title: 'Weed Removal',
    description: 'Professional weed control and removal for gardens and lawn areas.',
    href: '/services/garden-maintenance-brisbane',
  },
  {
    icon: TreeDeciduous,
    title: 'Mulching',
    description: 'Mulch supply and spreading to improve soil health and garden appearance.',
    href: '/services/mulching-brisbane',
  },
  {
    icon: Truck,
    title: 'Green Waste Removal',
    description: 'Efficient green waste collection and disposal after any garden work.',
    href: '/services/garden-clean-up-brisbane',
  },
  {
    icon: Wrench,
    title: 'Handyman Services',
    description: 'Minor repairs, property maintenance and general handyman work.',
    href: '/services/handyman-brisbane',
  },
  {
    icon: Building2,
    title: 'Commercial Grounds Maintenance',
    description: 'Ongoing grounds maintenance for offices, strata, retail and commercial sites.',
    href: '/services/garden-maintenance-brisbane',
  },
  {
    icon: RefreshCcw,
    title: 'Garden Restoration',
    description: 'Transform neglected or tired gardens back into beautiful outdoor spaces.',
    href: '/services/garden-clean-up-brisbane',
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Hero */}
      <section style={{ backgroundColor: '#1C3A2A' }} className="pt-32 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/80">Services</span>
          </nav>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Landscaping &amp; Garden Maintenance Services Brisbane
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: '#F5F0E8' }} className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: '#6B6B6B' }}>
              SEQ Landscaping &amp; Garden Maintenance offers a full range of professional
              landscaping and garden services across Brisbane Southside and Greater Brisbane.
              From regular lawn mowing and garden maintenance to complete landscape
              transformations — our experienced team delivers quality results every time.
              Based in Tarragindi, we service all surrounding suburbs with fast response times.
              Call Sam on{' '}
              <a href="tel:0490770382" className="font-medium hover:underline" style={{ color: '#1C3A2A' }}>
                0490 770 382
              </a>{' '}
              for a free, no-obligation quote.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: '#FDFAF5' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={i * 0.04}>
                  <Link href={service.href} className="block group">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 border-l-4 border-l-transparent hover:border-l-[#C17F3E] hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: '#F5F0E8' }}
                      >
                        <Icon size={18} style={{ color: '#2D5A3D' }} />
                      </div>
                      <h2
                        className="text-base font-bold mb-2"
                        style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-xs leading-relaxed flex-1" style={{ color: '#6B6B6B' }}>
                        {service.description}
                      </p>
                      <span
                        className="mt-3 text-xs font-medium group-hover:underline"
                        style={{ color: '#4A8C5C' }}
                      >
                        Learn More →
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#C17F3E' }} className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-sm text-white/85 mb-8">
            Call Sam for a free, no-obligation quote on any of our Brisbane landscaping services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0490770382"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium bg-white transition-all hover:opacity-90"
              style={{ color: '#C17F3E' }}
            >
              <Phone size={16} />
              Call Sam — 0490 770 382
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-medium text-white border-2 border-white/70 hover:bg-white/10 transition-all"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
