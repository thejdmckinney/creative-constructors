import { MetadataRoute } from 'next'
import { seoConfig } from '@/seo.config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    sitemap: `${seoConfig.baseUrl}/sitemap.xml`,
    host: seoConfig.baseUrl,
  }
}
