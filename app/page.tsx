import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Scissors,
  Sprout,
  Home,
  TreeDeciduous,
  Leaf,
  Wrench,
  MapPin,
  Shield,
  Calendar,
  MessageSquare,
  Star,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { HeroSection } from '@/components/home/HeroSection';
import { FadeIn, ScaleIn } from '@/components/home/AnimatedSection';

export const metadata: Metadata = {
  title: 'Lawn Mowing & Garden Maintenance Brisbane | SEQ Landscaping',
  description:
    "Brisbane Southside's trusted lawn mowing and garden maintenance specialists. Servicing Tarragindi, Annerley, Moorooka, Fairfield, Salisbury & all South Brisbane suburbs. Free quotes — call Sam on 0490 770 382.",
};

const services = [
  {
    icon: Leaf,
    title: 'Lawn Mowing',
    description:
      'Regular mowing, edging and lawn care for Brisbane Southside homes and businesses. Consistent results every time.',
    href: '/services/lawn-mowing-brisbane',
  },
  {
    icon: Sprout,
    title: 'Garden Maintenance',
    description:
      'Ongoing weeding, pruning, edging and seasonal garden care on your schedule. We keep it looking its best year-round.',
    href: '/services/garden-maintenance-brisbane',
  },
  {
    icon: Home,
    title: 'Landscaping Design',
    description:
      'Custom outdoor transformations — from new garden beds to complete landscape installations. Your vision, our expertise.',
    href: '/services/landscaping-brisbane',
  },
  {
    icon: Scissors,
    title: 'Hedge & Tree Trimming',
    description:
      'Precise hedge shaping and tree pruning for neat, healthy gardens year-round. Professional results guaranteed.',
    href: '/services/hedge-trimming-brisbane',
  },
  {
    icon: TreeDeciduous,
    title: 'Green Waste & Mulching',
    description:
      'Green waste removal and mulch supply & spread to keep your garden healthy and looking its best.',
    href: '/services/mulching-brisbane',
  },
  {
    icon: Wrench,
    title: 'Handyman Services',
    description:
      'Minor repairs, property maintenance and general handyman work across Brisbane Southside. No job too small.',
    href: '/services/handyman-brisbane',
  },
];

const trustSignals = [
  'Fully Insured',
  '5-Star Rated',
  'Free Quotes',
  'Brisbane Southside Based',
  'Same-Week Service Available',
];

const reasons = [
  {
    icon: MapPin,
    title: 'Locally Based in Tarragindi',
    description: 'Fast response times for all Brisbane Southside suburbs.',
  },
  {
    icon: Shield,
    title: 'Fully Insured & Professional',
    description: "Public liability insurance. You're protected on every job.",
  },
  {
    icon: Calendar,
    title: 'One-Off & Ongoing Contracts',
    description: 'Whether you need a one-time clean-up or weekly maintenance.',
  },
  {
    icon: MessageSquare,
    title: 'Free No-Obligation Quotes',
    description: 'Call Sam and get a straight answer on price — no surprises.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: 'Trusted by Brisbane homeowners across Tarragindi, Greenslopes, Moorooka & beyond.',
  },
  {
    icon: Zap,
    title: 'Fast Response Times',
    description: 'Same-week service available for most jobs across our service area.',
  },
];

const suburbs = [
  'Tarragindi', 'Greenslopes', 'Moorooka', 'Mount Gravatt', 'Coorparoo',
  'Holland Park', 'Annerley', 'Sunnybank', 'Camp Hill', 'Upper Mount Gravatt',
  'Yeronga', 'Fairfield', 'West End', 'Indooroopilly', 'Logan', 'Ipswich',
  '+ All Surrounding Suburbs',
];

const testimonials = [
  {
    text: 'Sam and the team transformed our backyard in Greenslopes. Professional, on time, and the results speak for themselves. Will absolutely be using SEQ Landscaping for ongoing maintenance.',
    author: 'Michael T.',
    suburb: 'Greenslopes',
  },
  {
    text: 'Best lawn mowing service in Brisbane Southside. Reliable, affordable, and they actually care about doing a quality job. Highly recommend.',
    author: 'Sarah K.',
    suburb: 'Moorooka',
  },
  {
    text: "Had SEQ come out for a full garden clean-up before we listed our home. The difference was incredible. Sold above asking price — can't say landscaping didn't play a part!",
    author: 'James R.',
    suburb: 'Coorparoo',
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Navbar />
      <main>
        {/* Section 1 — Hero */}
        <HeroSection />

        {/* Section 2 — Trust Bar */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-6 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {trustSignals.map((signal) => (
                  <div key={signal} className="flex items-center gap-2">
                    <CheckCircle2 size={18} style={{ color: '#2D5A3D' }} />
                    <span className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                      {signal}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 3 — Services Grid */}
        <section style={{ backgroundColor: '#FDFAF5' }} className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Our Landscaping &amp; Garden Services
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
                Professional services across Brisbane Southside — from regular lawn mowing to
                complete garden transformations.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.title} delay={i * 0.08}>
                    <div className="service-card group relative bg-white rounded-2xl p-8 shadow-sm border border-black/5 border-l-4 border-l-transparent hover:border-l-[#C17F3E] hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: '#F5F0E8' }}
                      >
                        <Icon size={22} style={{ color: '#2D5A3D' }} />
                      </div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#6B6B6B' }}>
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="text-sm font-medium hover:underline transition-colors"
                        style={{ color: '#4A8C5C' }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4 — Why Choose SEQ */}
        <section className="overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — dark green */}
              <FadeIn direction="left">
                <div
                  className="flex items-center justify-center px-12 py-24 min-h-[400px]"
                  style={{ backgroundColor: '#1C3A2A' }}
                >
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-white leading-tight"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    Why Brisbane Homeowners Choose SEQ Landscaping
                  </h2>
                </div>
              </FadeIn>

              {/* Right — cream */}
              <FadeIn direction="right">
                <div className="px-10 py-16" style={{ backgroundColor: '#F5F0E8' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {reasons.map((reason) => {
                      const Icon = reason.icon;
                      return (
                        <div key={reason.title} className="flex gap-4">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: '#1C3A2A' }}
                          >
                            <Icon size={18} className="text-white" />
                          </div>
                          <div>
                            <h3
                              className="font-semibold text-sm mb-1"
                              style={{ color: '#1C3A2A' }}
                            >
                              {reason.title}
                            </h3>
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: '#6B6B6B' }}
                            >
                              {reason.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section 5 — Service Areas */}
        <section style={{ backgroundColor: '#F5F0E8' }} className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-10">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-5"
                style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                We Service All Brisbane Southside Suburbs
              </h2>
              <p className="text-base max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B6B6B' }}>
                Based in Tarragindi, SEQ Landscaping &amp; Garden Maintenance provides lawn mowing,
                garden maintenance, and landscaping services across Brisbane Southside and Greater
                Brisbane. Our team services all surrounding suburbs with fast response times and
                local knowledge you won&apos;t find with out-of-area operators.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap justify-center gap-3">
                {suburbs.map((suburb) => {
                  const slug = suburb.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                  return (
                    <Link
                      key={suburb}
                      href={`/locations/${slug}`}
                      className="px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:opacity-80"
                      style={{ backgroundColor: '#1C3A2A' }}
                    >
                      {suburb}
                    </Link>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 6 — Testimonials */}
        <section style={{ backgroundColor: '#1C3A2A' }} className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                What Brisbane Homeowners Say
              </h2>
            </FadeIn>

            {/* TODO: Replace with live Google reviews widget once review count grows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <FadeIn key={t.author} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 flex flex-col gap-5 h-full">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} fill="#F59E0B" style={{ color: '#F59E0B' }} />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#1A1A1A' }}>
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#1C3A2A' }}>
                        {t.author}
                      </p>
                      <p className="text-xs" style={{ color: '#6B6B6B' }}>
                        {t.suburb}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 — Google Maps */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Find Us — Based in Tarragindi, Brisbane
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5">
                {/* Replace src with actual embed URL from Google Maps → Share → Embed */}
                <iframe
                  src="https://www.google.com/maps?q=48+Downes+St+Tarragindi+QLD+4105&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SEQ Landscaping location — 48 Downes St, Tarragindi QLD 4105"
                />
              </div>

              {/* Contact card */}
              <div
                className="rounded-2xl p-10 space-y-6"
                style={{ backgroundColor: '#F5F0E8' }}
              >
                <h3
                  className="text-2xl font-bold"
                  style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                    <p className="text-sm" style={{ color: '#1A1A1A' }}>
                      48 Downes St, Tarragindi QLD 4105
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="flex-shrink-0" style={{ color: '#C17F3E' }} />
                    <a
                      href="tel:0490770382"
                      className="text-sm font-medium hover:underline"
                      style={{ color: '#1A1A1A' }}
                    >
                      0490 770 382
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="flex-shrink-0" style={{ color: '#C17F3E' }} />
                    <a
                      href="mailto:samhindmarsh@seqlandscaping.net"
                      className="text-sm hover:underline break-all"
                      style={{ color: '#1A1A1A' }}
                    >
                      samhindmarsh@seqlandscaping.net
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                    <div className="text-sm" style={{ color: '#1A1A1A' }}>
                      <p>Mon–Fri: 7am–6pm</p>
                      <p>Sat: 7am–3pm</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#C17F3E' }}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 — CTA Banner */}
        <ScaleIn>
          <section style={{ backgroundColor: '#C17F3E' }} className="py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Ready to Transform Your Garden?
              </h2>
              <p className="text-base text-white/85 mb-8">
                Get a free, no-obligation quote from Brisbane Southside&apos;s trusted landscaping specialists.
              </p>
              <p className="text-3xl font-bold text-white mb-10">
                <a href="tel:0490770382" className="hover:opacity-80 transition-opacity">
                  📞 0490 770 382
                </a>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:0490770382"
                  className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium bg-white transition-all hover:opacity-90 hover:scale-105"
                  style={{ color: '#C17F3E' }}
                >
                  Call Sam Now
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium text-white border-2 border-white/70 hover:bg-white/10 transition-all"
                >
                  Send Us a Message
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium text-white border-2 border-white/70 hover:bg-white/10 transition-all"
                >
                  View Pricing Guide
                </Link>
              </div>
            </div>
          </section>
        </ScaleIn>
      </main>
      <Footer />
    </>
  );
}
