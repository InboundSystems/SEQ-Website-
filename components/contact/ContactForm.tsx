'use client';

import { useState } from 'react';

const services = [
  'Lawn Mowing & Edging',
  'Garden Maintenance',
  'Garden Clean-Up',
  'Landscaping',
  'Turf Laying',
  'Retaining Walls',
  'Garden Design',
  'Hedge Trimming',
  'Tree Trimming',
  'Weed Removal',
  'Mulching',
  'Green Waste Removal',
  'Commercial Grounds Maintenance',
  'Other',
];

const inputStyle = {
  borderColor: '#E8C99A',
  backgroundColor: '#FDFAF5',
  color: '#1A1A1A',
} as React.CSSProperties;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong — please call Sam directly on 0490 770 382.');
      }
    } catch {
      alert('Something went wrong — please call Sam directly on 0490 770 382.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="py-12 px-8 rounded-2xl text-center"
        style={{ backgroundColor: '#F5F0E8' }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: '#1C3A2A' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#FDFAF5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Thanks! We&apos;ll be in touch within 24 hours.
        </h3>
        <p className="text-sm" style={{ color: '#6B6B6B' }}>
          Or call Sam directly on{' '}
          <a href="tel:0490770382" className="font-semibold underline" style={{ color: '#1C3A2A' }}>
            0490 770 382
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/PLACEHOLDER_ID"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="_subject" value="New Quote Request — SEQ Landscaping and Garden Maintenance" />
      <input type="hidden" name="_next" value="https://seqlandscaping.com.au/thank-you" />

      <h2
        className="text-xl font-bold"
        style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        Send an Enquiry
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
            style={{ color: '#6B6B6B' }}
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
            style={inputStyle}
            placeholder="Sam Smith"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
            style={{ color: '#6B6B6B' }}
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
            style={inputStyle}
            placeholder="04xx xxx xxx"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
          style={{ color: '#6B6B6B' }}
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
          style={inputStyle}
          placeholder="you@email.com"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="suburb"
            className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
            style={{ color: '#6B6B6B' }}
          >
            Your Suburb *
          </label>
          <input
            type="text"
            id="suburb"
            name="suburb"
            required
            className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
            style={inputStyle}
            placeholder="Greenslopes"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
            style={{ color: '#6B6B6B' }}
          >
            Service Required
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
            style={inputStyle}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
          style={{ color: '#6B6B6B' }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 resize-none"
          style={inputStyle}
          placeholder="Tell us about your garden and what you need..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 px-6 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: '#1C3A2A', color: '#FDFAF5' }}
      >
        {submitting ? 'Sending…' : 'Send Enquiry'}
      </button>
      <p className="text-xs text-center" style={{ color: '#6B6B6B' }}>
        We typically respond within 2 business hours.
      </p>
    </form>
  );
}
