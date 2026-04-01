import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, BlogSection } from '@/data/blogPosts';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FadeIn } from '@/components/home/AnimatedSection';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
  };
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2
          key={index}
          className="text-xl sm:text-2xl font-bold mt-8 mb-4"
          style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          {section.text}
        </h2>
      );
    case 'paragraph':
      return (
        <p key={index} className="text-sm leading-relaxed mb-4" style={{ color: '#1A1A1A' }}>
          {section.text}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-2 mb-4 pl-2">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#1A1A1A' }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#C17F3E' }} />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-2xl font-bold mb-4" style={{ color: '#1C3A2A' }}>
          Post not found
        </p>
        <Link href="/blog" style={{ color: '#2D5A3D' }} className="underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => post.relatedSlugs.includes(p.slug));

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section style={{ backgroundColor: '#1C3A2A' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              <li className="flex items-center gap-2">
                <Link href="/" style={{ color: '#E8C99A' }} className="hover:underline">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#4A8C5C' }}>/</span>
                <Link href="/blog" style={{ color: '#E8C99A' }} className="hover:underline">Blog</Link>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#4A8C5C' }}>/</span>
                <span style={{ color: '#FDFAF5' }} className="line-clamp-1">{post.title}</span>
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm" style={{ color: '#E8C99A' }}>By Sam — SEQ Landscaping</span>
            <span style={{ color: '#4A8C5C' }}>·</span>
            <span className="text-sm" style={{ color: '#E8C99A' }}>{post.date}</span>
            <span style={{ color: '#4A8C5C' }}>·</span>
            <span className="text-sm" style={{ color: '#E8C99A' }}>{post.readingTime}</span>
          </div>
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <FadeIn>
          {/* Article body */}
          <article className="mb-12">
            {post.content.map((section, i) => renderSection(section, i))}
          </article>

          {/* Suburb links */}
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-6 px-8 rounded-2xl mb-8">
            <p className="text-sm font-semibold mb-3" style={{ color: '#1C3A2A' }}>
              We service Brisbane Southside including:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Tarragindi', slug: 'tarragindi' },
                { name: 'Greenslopes', slug: 'greenslopes' },
                { name: 'Moorooka', slug: 'moorooka' },
                { name: 'Mount Gravatt', slug: 'mount-gravatt' },
                { name: 'Annerley', slug: 'annerley' },
                { name: 'Holland Park', slug: 'holland-park' },
                { name: 'Sunnybank', slug: 'sunnybank' },
                { name: 'Camp Hill', slug: 'camp-hill' },
              ].map((s) => (
                <Link
                  key={s.slug}
                  href={`/locations/${s.slug}`}
                  className="px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: '#1C3A2A', color: '#FDFAF5' }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section style={{ backgroundColor: '#F5F0E8' }} className="py-8 px-8 rounded-2xl mb-12 text-center">
            <p className="font-semibold mb-3" style={{ color: '#1C3A2A' }}>
              Need help with your Brisbane garden?
            </p>
            <a
              href="tel:0490770382"
              className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1C3A2A', color: '#FDFAF5' }}
            >
              Call Sam on 0490 770 382
            </a>
          </section>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h2
                className="text-xl font-bold mb-5"
                style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block p-5 rounded-2xl border hover:border-[#C17F3E] transition-colors"
                    style={{ borderColor: '#E8C99A', backgroundColor: '#FDFAF5' }}
                  >
                    <p className="text-xs mb-2" style={{ color: '#6B6B6B' }}>{related.date} · {related.readingTime}</p>
                    <p
                      className="text-sm font-semibold leading-snug"
                      style={{ color: '#1C3A2A', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                      {related.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </FadeIn>
      </div>
    </>
  );
}
