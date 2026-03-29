/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://creative-constructors.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/contact': 0.9,
      '/about': 0.8,
      // Main service pages (high priority)
      '/services/installation': 0.9,
      '/services/repair': 0.9,
      '/services/maintenance': 0.9,
      '/services/assembly': 0.9,
      '/services/painting': 0.9,
      '/services/electrical': 0.9,
    };

    // Set higher changefreq for service pages
    const changefreqs = {
      '/': 'daily',
      '/services': 'daily',
      '/services/installation': 'weekly',
      '/services/repair': 'weekly',
      '/services/maintenance': 'weekly',
      '/services/assembly': 'weekly',
      '/services/painting': 'weekly',
      '/services/electrical': 'weekly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
