import { ReactNode } from 'react';
import Link from 'next/link';
import { Phone, Mail, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface RelatedService {
  title: string;
  href: string;
}

interface ServicePageLayoutProps {
  h1: string;
  breadcrumbs: BreadcrumbItem[];
  ctaServiceName: string;
  relatedServices: RelatedService[];
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
        Call Sam for a straight answer on price — no surprises, no obligation.
      </p>
      <div className="space-y-3">
        <a
          href="tel:0490770382"
          className="flex items-center gap-3 text-sm font-medium text-white hover:opacity-80 transition-opacity"
        >
          <Phone size={16} style={{ color: '#C17F3E' }} />
          0490 770 382
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
          Call Sam on 0490 770 382 for a straight answer on price — no obligation, no surprises.
        </p>
        <p className="text-3xl font-bold text-white mb-8">
          <a href="tel:0490770382" className="hover:opacity-80 transition-opacity">
            📞 0490 770 382
          </a>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:0490770382"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-medium bg-white transition-all hover:opacity-90"
            style={{ color: '#C17F3E' }}
          >
            Call Sam Now
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
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero banner — dark green, not full-screen */}
      <section style={{ backgroundColor: '#1C3A2A' }} className="pt-32 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {h1}
          </h1>
        </div>
      </section>

      {/* Main content + sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <main className="lg:col-span-2 space-y-0">{children}</main>

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
