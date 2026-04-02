import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FadeIn } from '@/components/home/AnimatedSection';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact SEQ Landscaping and Garden Maintenance — Free Quotes Brisbane',
  description:
    'Contact SEQ Landscaping & Garden Maintenance for a free quote. Call Sam on 0490 770 382 or send an enquiry. Based in Tarragindi, serving all of Brisbane Southside.',
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section style={{ backgroundColor: '#1C3A2A' }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
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
            Contact Us
          </h1>
          <p className="text-lg" style={{ color: '#E8C99A' }}>
            Free quotes — call Sam directly or send an enquiry below.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left: Contact info + form */}
          <div className="space-y-8">
            <FadeIn>
              {/* Contact details */}
              <section style={{ backgroundColor: '#F5F0E8' }} className="py-8 px-8 rounded-2xl">
                <h2 className="text-xl font-bold mb-5" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Get in Touch</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#6B6B6B' }}>Phone</p>
                      <a href="tel:0490770382" className="text-sm font-semibold hover:underline" style={{ color: '#1C3A2A' }}>0490 770 382</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#6B6B6B' }}>Email</p>
                      <a href="mailto:samhindmarsh@seqlandscaping.net" className="text-sm font-semibold hover:underline" style={{ color: '#1C3A2A' }}>samhindmarsh@seqlandscaping.net</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#6B6B6B' }}>Based In</p>
                      <p className="text-sm" style={{ color: '#1A1A1A' }}>48 Downes St, Tarragindi QLD 4105</p>
                      <p className="text-xs mt-0.5" style={{ color: '#6B6B6B' }}>Serving all of Brisbane Southside & Greater Brisbane</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#6B6B6B' }}>Hours</p>
                      <p className="text-sm" style={{ color: '#1A1A1A' }}>Monday – Saturday, 7am – 5pm</p>
                    </div>
                  </li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn>
              <ContactForm />
            </FadeIn>
          </div>

          {/* Right: Google Maps */}
          <FadeIn>
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-2xl overflow-hidden" style={{ height: '420px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=48+Downes+St+Tarragindi+QLD+4105&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SEQ Landscaping and Garden Maintenance — 48 Downes St, Tarragindi QLD 4105"
                />
              </div>
              <div style={{ backgroundColor: '#F5F0E8' }} className="py-6 px-6 rounded-2xl">
                <h3 className="font-bold mb-3" style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}>Service Area</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
                  Based in Tarragindi, we service all of Brisbane Southside including Greenslopes, Moorooka, Mount Gravatt, Annerley, Holland Park, Coorparoo, Camp Hill, Sunnybank, Salisbury, Rocklea, and all surrounding suburbs. We also service Logan and Ipswich — call to confirm your area.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
