import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { blogPosts } from '@/data/blogPosts';
import { FadeIn } from '@/components/home/AnimatedSection';

export const metadata: Metadata = {
  title: 'Landscaping & Garden Tips Blog — Brisbane | SEQ Landscaping',
  description:
    'Garden tips, lawn care advice, and landscaping guides for Brisbane homeowners. Expert advice from SEQ Landscaping & Garden Maintenance — Brisbane Southside.',
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
];

export default function BlogIndexPage() {
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
                    <Link href={crumb.url} style={{ color: '#E8C99A' }} className="hover:underline">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span style={{ color: '#FDFAF5' }}>{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Garden &amp; Landscaping Tips for Brisbane Homeowners
          </h1>
          <p className="text-lg" style={{ color: '#E8C99A' }}>
            Expert lawn care and garden advice from the SEQ Landscaping team.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl overflow-hidden border"
                style={{ borderColor: '#E8C99A', backgroundColor: '#FDFAF5' }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium" style={{ color: '#6B6B6B' }}>{post.date}</span>
                    <span style={{ color: '#E8C99A' }}>·</span>
                    <span className="text-xs font-medium" style={{ color: '#6B6B6B' }}>{post.readingTime}</span>
                  </div>
                  <h2
                    className="text-base font-bold mb-3 leading-snug"
                    style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#6B6B6B' }}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-center transition-opacity hover:opacity-90 self-start"
                    style={{ backgroundColor: '#1C3A2A', color: '#FDFAF5' }}
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 px-8 rounded-2xl text-center mt-14">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Need Help with Your Brisbane Garden?
            </h2>
            <p className="text-sm mb-6" style={{ color: '#6B6B6B' }}>
              Call Sam on 0490 770 382 for a free, no-obligation quote.
            </p>
            <a
              href="tel:0490770382"
              className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1C3A2A', color: '#FDFAF5' }}
            >
              Call 0490 770 382
            </a>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
