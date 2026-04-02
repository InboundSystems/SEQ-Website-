'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled ? 'rgba(253, 250, 245, 0.97)' : 'rgba(0,0,0,0)',
          backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <motion.span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                animate={{ color: scrolled ? '#1C3A2A' : '#ffffff' }}
                transition={{ duration: 0.3 }}
              >
                SEQ Landscaping and Garden Maintenance
              </motion.span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} className="relative group">
                    <motion.span
                      className="text-sm font-medium transition-colors"
                      animate={{ color: scrolled ? '#1A1A1A' : '#ffffff' }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.label}
                    </motion.span>
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#4A8C5C] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: '#C17F3E' }}
              >
                Get a Free Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg"
                aria-label="Toggle menu"
              >
                <motion.span animate={{ color: scrolled ? '#1C3A2A' : '#ffffff' }} transition={{ duration: 0.3 }}>
                  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: '#1C3A2A' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-medium text-white hover:text-[#E8C99A] transition-colors"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center px-8 py-3 rounded-full text-base font-medium text-white"
                  style={{ backgroundColor: '#C17F3E' }}
                >
                  Get a Free Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
