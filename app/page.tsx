import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Scissors,
  Sprout,
  TreeDeciduous,
  Leaf,
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
import { WorkTile } from '@/components/work/WorkTile';
import { workItem } from '@/data/workMedia';

export const metadata: Metadata = {
  title: 'Lawn Mowing & Garden Maintenance Brisbane | SEQ Landscaping and Garden Maintenance',
  description:
    "Brisbane Southside's trusted lawn mowing and garden maintenance specialists. Servicing Tarragindi, Annerley, Moorooka, Fairfield, Salisbury & all South Brisbane suburbs. Free quotes — text Sam on 0432 404 881.",
};

const services = [
  {
    icon: Leaf,
    title: 'Lawn Mowing',
    description:
      'Regular mowing, edging and lawn care for Brisbane Southside homes and businesses. Consistent results every time.',
    href: '/services/lawn-mowing-brisbane',
    image: '/images/work/lawn-mowing-backyard-stripes.jpg',
    imageAlt: 'Backyard lawn freshly mowed with stripes, whipper snipper still on the grass',
  },
  {
    icon: Sprout,
    title: 'Garden Maintenance',
    description:
      'Ongoing weeding, pruning, edging and seasonal garden care on your schedule. We keep it looking its best year-round.',
    href: '/services/garden-maintenance-brisbane',
    image: '/images/work/hedge-and-garden-front-path.jpg',
    imageAlt: 'Front path garden bed and creeper wall kept neat',
  },
  {
    icon: Scissors,
    title: 'Hedge & Tree Trimming',
    description:
      'Precise hedge shaping and tree pruning for neat, healthy gardens year-round. Professional results guaranteed.',
    href: '/services/hedge-trimming-brisbane',
    image: '/images/work/hedge-trimming-driveway-screen.jpg',
    imageAlt: 'Rounded hedge screen beside a driveway',
  },
  {
    icon: TreeDeciduous,
    title: 'Green Waste & Mulching',
    description:
      'Green waste removal and mulch supply & spread to keep your garden healthy and looking its best.',
    href: '/services/mulching-brisbane',
    image: '/images/work/mulching-garden-bed.jpg',
    imageAlt: 'Fresh mulch laid around lomandras along a fence line',
  },
];

// Services without job photos yet — listed as text rather than with stock images
const otherServices: { title: string; href?: string }[] = [
  { title: 'Landscaping', href: '/services/landscaping-brisbane' },
  { title: 'Garden Design', href: '/services/garden-design-brisbane' },
  { title: 'Turf Laying', href: '/services/turf-laying-brisbane' },
  { title: 'Garden Clean-Ups', href: '/services/garden-clean-up-brisbane' },
  { title: 'Weed Removal', href: '/services/weed-removal-brisbane' },
  { title: 'Green Waste Removal', href: '/services/green-waste-removal-brisbane' },
  { title: 'Commercial Grounds', href: '/services/commercial-grounds-maintenance' },
  { title: 'Handyman Work' },
];

// Homepage feature wall — the strongest hedge and garden jobs
const featured = workItem('hedge-trimming-tall-screen.jpg');
const featureGrid = [
  workItem('hedge-trimming-walkthrough.mp4'),
  workItem('hedge-and-garden-front-path.jpg'),
  workItem('hedge-trimming-picket-fence.jpg'),
  workItem('front-garden-and-lawn.jpg'),
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
    description: 'Text Sam and get a straight answer on price — no surprises.',
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
    text: 'Sam and the team transformed our backyard in Greenslopes. Professional, on time, and the results speak for themselves. Will absolutely be using SEQ Landscaping and Garden Maintenance for ongoing maintenance.',
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.title} delay={i * 0.06}>
                    <Link
                      href={service.href}
                      className="group relative block aspect-[4/3] overflow-hidden rounded-md"
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(20,40,28,0.9) 0%, rgba(20,40,28,0.35) 45%, transparent 70%)' }}
                      />
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon size={18} style={{ color: '#E8C99A' }} />
                          <h3
                            className="text-2xl font-bold text-white"
                            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                          >
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-white/85 max-w-md mb-3">
                          {service.description}
                        </p>
                        <span className="text-sm font-medium group-hover:underline" style={{ color: '#E8C99A' }}>
                          See the work →
                        </span>
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={0.2}>
              <div className="mt-12 pt-8 border-t border-black/10">
                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#6B6B6B' }}>
                  We also do
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {otherServices.map((s) => (
                    <li key={s.title} className="text-base" style={{ color: '#1C3A2A' }}>
                      {s.href ? (
                        <Link href={s.href} className="underline underline-offset-4 decoration-[#C17F3E]/60 hover:decoration-[#C17F3E]">
                          {s.title}
                        </Link>
                      ) : (
                        s.title
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 3b — Hedge & garden feature wall */}
        <section className="py-24" style={{ backgroundColor: '#F5F0E8' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C17F3E' }}>
                Recent work
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Hedges cut square. Gardens kept tidy.
              </h2>
              <p className="text-base" style={{ color: '#6B6B6B' }}>
                Every photo here is a real job, taken on the day. No stock photos.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="col-span-2 lg:row-span-2">
                  <WorkTile
                    item={featured}
                    className="aspect-[4/5] lg:aspect-auto lg:h-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {featureGrid.map((item) => (
                  <WorkTile
                    key={item.src}
                    item={item}
                    className="aspect-[4/5]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Link
                href="/gallery"
                className="inline-flex items-center mt-8 text-sm font-medium hover:underline"
                style={{ color: '#1C3A2A' }}
              >
                See all our work →
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Section 4 — Why Choose SEQ */}
        <section className="overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — image with dark overlay */}
              <FadeIn direction="left">
                <div className="relative flex items-center justify-center px-12 py-24 min-h-[400px] overflow-hidden">
                  <Image
                    src="/images/work/hedge-trimming-backyard-screen.jpg"
                    alt="Backyard hedge screens trimmed around a lawn"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28, 58, 42, 0.8)' }} />
                  <h2
                    className="relative z-10 text-3xl sm:text-4xl font-bold text-white leading-tight"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    Why Brisbane Homeowners Choose SEQ Landscaping and Garden Maintenance
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
                  title="SEQ Landscaping and Garden Maintenance location — 48 Downes St, Tarragindi QLD 4105"
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
                      href="sms:0432404881"
                      className="text-sm font-medium hover:underline"
                      style={{ color: '#1A1A1A' }}
                    >
                      0432 404 881
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
                <a href="sms:0432404881" className="hover:opacity-80 transition-opacity">
                  📞 0432 404 881
                </a>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="sms:0432404881"
                  className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium bg-white transition-all hover:opacity-90 hover:scale-105"
                  style={{ color: '#C17F3E' }}
                >
                  Text Sam Now
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
