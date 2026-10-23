import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { WorkTile } from '@/components/work/WorkTile';
import type { WorkMedia } from '@/data/workMedia';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface RelatedService {
  title: string;
  href: string;
}

interface HeroImage {
  src: string;
  alt: string;
}

interface ServicePageLayoutProps {
  h1: string;
  breadcrumbs: BreadcrumbItem[];
  ctaServiceName: string;
  relatedServices: RelatedService[];
  /** Only pass a real job photo — pages without one get a text-led header */
  image?: HeroImage;
  /** Real job photos/clips shown under the page content */
  recentWork?: WorkMedia[];
  /** Max tiles in Recent Jobs (rounded down to a full row of 3) */
  recentWorkLimit?: number;
  children: ReactNode;
}

function QuoteSidebarCard() {
  return (
    <div
      className="rounded-2xl p-6 space-y-4"
      style={{ backgroundColor: '#1C3A2A' }}
    >
      <h3
        className="text-lg font-bold text-white"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        Get a Free Quote
      </h3>
      <p className="text-sm text-white/75">
        Text Sam for a straight answer on price — no surprises, no obligation.
      </p>
      <div className="space-y-3">
        <a
          href="sms:0432404881"
          className="flex items-center gap-3 text-sm font-medium text-white hover:opacity-80 transition-opacity"
        >
          <Phone size={16} style={{ color: '#C17F3E' }} />
          0432 404 881
        </a>
        <a
          href="mailto:samhindmarsh@seqlandscaping.net"
          className="flex items-center gap-3 text-xs text-white/75 hover:text-white transition-colors break-all"
        >
          <Mail size={16} style={{ color: '#C17F3E' }} />
          samhindmarsh@seqlandscaping.net
        </a>
      </div>
      <Link
        href="/contact"
        className="block w-full text-center px-5 py-3 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
        style={{ backgroundColor: '#C17F3E' }}
      >
        Send an Enquiry
      </Link>
    </div>
  );
}

function RelatedServicesCard({ services }: { services: RelatedService[] }) {
  return (
    <div className="rounded-2xl border border-black/8 p-6 space-y-3" style={{ backgroundColor: '#FDFAF5' }}>
      <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#6B6B6B' }}>
        Related Services
      </h3>
      <ul className="space-y-2">
        {services.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: '#1C3A2A' }}
            >
              <ChevronRight size={14} style={{ color: '#C17F3E' }} />
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="pt-2 border-t border-black/8">
        <Link
          href="/services"
          className="text-xs hover:underline"
          style={{ color: '#4A8C5C' }}
        >
          View all services →
        </Link>
      </div>
    </div>
  );
}

function RecentWork({ items, limit }: { items: WorkMedia[]; limit: number }) {
  // Trimmed to a full row of 3 so the grid never ends ragged
  const shown = items.length > 3 ? items.slice(0, Math.min(limit, items.length - (items.length % 3))) : items;
  return (
    <section className="py-10 border-t border-black/8">
      <h2
        className="text-2xl sm:text-3xl font-bold mb-2"
        style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        Recent Jobs
      </h2>
      <p className="text-sm mb-6" style={{ color: '#6B6B6B' }}>
        Straight off Sam&apos;s phone — real Brisbane Southside jobs, no stock photos.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {shown.map((item) => (
          <WorkTile
            key={item.src}
            item={item}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
          />
        ))}
      </div>
      <Link
        href="/gallery"
        className="inline-block mt-5 text-sm font-medium hover:underline"
        style={{ color: '#4A8C5C' }}
      >
        See more of our work →
      </Link>
    </section>
  );
}

function CTABanner({ serviceName }: { serviceName: string }) {
  return (
    <section style={{ backgroundColor: '#C17F3E' }} className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Get a Free {serviceName} Quote in Brisbane
        </h2>
        <p className="text-sm text-white/85 mb-6">
          Text Sam on 0432 404 881 for a straight answer on price — no obligation, no surprises.
        </p>
        <p className="text-3xl font-bold text-white mb-8">
          <a href="sms:0432404881" className="hover:opacity-80 transition-opacity">
            📞 0432 404 881
          </a>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="sms:0432404881"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-medium bg-white transition-all hover:opacity-90"
            style={{ color: '#C17F3E' }}
          >
            Text Sam Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-medium text-white border-2 border-white/70 hover:bg-white/10 transition-all"
          >
            Send Us a Message
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServicePageLayout({
  h1,
  breadcrumbs,
  ctaServiceName,
  relatedServices,
  image,
  recentWork,
  recentWorkLimit = 6,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero banner — dark green, not full-screen */}
      <section style={{ backgroundColor: '#1C3A2A' }} className="pt-32 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className={image ? 'lg:col-span-3' : 'lg:col-span-4'}>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 flex-wrap">
                {breadcrumbs.map((crumb, i) => (
                  <span key={crumb.url} className="flex items-center gap-2">
                    {i > 0 && <ChevronRight size={12} />}
                    {i < breadcrumbs.length - 1 ? (
                      <Link href={crumb.url} className="hover:text-white transition-colors">
                        {crumb.name}
                      </Link>
                    ) : (
                      <span className="text-white/80">{crumb.name}</span>
                    )}
                  </span>
                ))}
              </nav>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {h1}
              </h1>
              {!image && (
                <>
                  {/* Hand-drawn style underline */}
                  <svg
                    viewBox="0 0 220 14"
                    className="mt-4 w-44 h-3"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9C40 4 82 3 120 6s62 5 98-1"
                      stroke="#C17F3E"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="mt-6 text-base text-white/80 max-w-xl leading-relaxed">
                    Text Sam on{' '}
                    <a href="sms:0432404881" className="font-semibold text-white underline underline-offset-4 decoration-[#C17F3E]">
                      0432 404 881
                    </a>{' '}
                    with a few details about the job — he&apos;ll come out, have a look and give you a straight price.
                  </p>
                </>
              )}
            </div>
            {image && (
              <div className="lg:col-span-2">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <main className="lg:col-span-2 space-y-0">
            {children}
            {recentWork && recentWork.length > 0 && <RecentWork items={recentWork} limit={recentWorkLimit} />}
          </main>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <QuoteSidebarCard />
              <RelatedServicesCard services={relatedServices} />
              {/* Back to homepage */}
              <div className="text-sm">
                <Link href="/" className="hover:underline font-medium" style={{ color: '#2D5A3D' }}>
                  ← SEQ Landscaping and Garden Maintenance Brisbane
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Full-width CTA banner */}
      <CTABanner serviceName={ctaServiceName} />
    </>
  );
}
