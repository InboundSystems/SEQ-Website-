/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://seqlandscaping.base44.app',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Homepage
    if (path === '/') return { loc: path, changefreq: 'daily', priority: 1.0 };
    // Service pages
    if (path.startsWith('/services/')) return { loc: path, changefreq: 'weekly', priority: 0.9 };
    // Other core pages
    if (['/services', '/pricing', '/about', '/contact', '/gallery', '/blog'].includes(path)) {
      return { loc: path, changefreq: 'monthly', priority: 0.6 };
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority };
  },
  additionalPaths: async (config) => {
    const suburbanSlugs = [
      'tarragindi', 'greenslopes', 'moorooka', 'mount-gravatt', 'coorparoo',
      'holland-park', 'annerley', 'sunnybank', 'camp-hill', 'upper-mount-gravatt',
      'yeronga', 'fairfield', 'west-end', 'indooroopilly', 'logan', 'ipswich',
      'nathan', 'salisbury', 'yeerongpilly', 'coopers-plains', 'robertson',
      'holland-park-west', 'mount-gravatt-east', 'wishart', 'sunnybank-hills',
      'macgregor', 'eight-mile-plains', 'runcorn', 'kuraby', 'highgate-hill',
      'dutton-park', 'woolloongabba', 'kangaroo-point', 'east-brisbane',
      'corinda', 'sherwood',
    ];
    const blogSlugs = [
      'how-often-mow-lawn-brisbane',
      'garden-maintenance-vs-landscaping-brisbane',
      'brisbane-lawn-care-calendar',
    ];
    const locationPaths = suburbanSlugs.map((slug) => ({
      loc: `/locations/${slug}`,
      changefreq: 'weekly',
      priority: 0.8,
    }));
    const blogPaths = blogSlugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.7,
    }));
    return [...locationPaths, ...blogPaths];
  },
};
