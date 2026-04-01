import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const services = [
  { label: 'Lawn Mowing', href: '/services/lawn-mowing-brisbane' },
  { label: 'Garden Maintenance', href: '/services/garden-maintenance-brisbane' },
  { label: 'Landscaping', href: '/services/landscaping-brisbane' },
  { label: 'Hedge Trimming', href: '/services/hedge-trimming-brisbane' },
  { label: 'Tree Trimming', href: '/services/tree-trimming-brisbane' },
  { label: 'Garden Clean Up', href: '/services/garden-clean-up-brisbane' },
  { label: 'Turf Laying', href: '/services/turf-laying-brisbane' },
  { label: 'Retaining Walls', href: '/services/retaining-walls-brisbane' },
];

const areas = [
  { label: 'Tarragindi', href: '/locations/tarragindi' },
  { label: 'Greenslopes', href: '/locations/greenslopes' },
  { label: 'Moorooka', href: '/locations/moorooka' },
  { label: 'Mount Gravatt', href: '/locations/mount-gravatt' },
  { label: 'Coorparoo', href: '/locations/coorparoo' },
  { label: 'Holland Park', href: '/locations/holland-park' },
  { label: 'Annerley', href: '/locations/annerley' },
  { label: 'Sunnybank', href: '/locations/sunnybank' },
  { label: 'Camp Hill', href: '/locations/camp-hill' },
  { label: '+ More', href: '/locations/tarragindi' },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C3A2A' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              SEQ Landscaping
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#E8C99A' }}>
              Brisbane Southside&apos;s trusted landscaping &amp; garden maintenance specialists.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social icon placeholders */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:border-[#C17F3E] hover:text-[#C17F3E] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:border-[#C17F3E] hover:text-[#C17F3E] transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#E8C99A' }}>
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service Areas */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#E8C99A' }}>
              Areas We Service
            </h3>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a.label}>
                  <Link
                    href={a.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#E8C99A' }}>
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                <span>48 Downes St, Tarragindi QLD 4105</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Phone size={16} className="flex-shrink-0" style={{ color: '#C17F3E' }} />
                <a href="tel:0490770382" className="hover:text-white transition-colors">
                  0490 770 382
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Mail size={16} className="flex-shrink-0" style={{ color: '#C17F3E' }} />
                <a href="mailto:samhindmarsh@seqlandscaping.net" className="hover:text-white transition-colors break-all">
                  samhindmarsh@seqlandscaping.net
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#C17F3E' }} />
                <div>
                  <p>Mon–Fri 7am–6pm</p>
                  <p>Sat 7am–3pm</p>
                </div>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#C17F3E' }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>&copy; 2026 SEQ Landscaping &amp; Garden Maintenance. All rights reserved.</p>
          <p>ABN: [ABN_PLACEHOLDER]</p>
        </div>
      </div>
    </footer>
  );
}
