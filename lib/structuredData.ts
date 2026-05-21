import { seoConfig } from '@/seo.config'

export function generateServiceSchema({
  serviceName,
  description,
  serviceUrl,
}: {
  serviceName: string
  description: string
  serviceUrl: string
}) {
  const business = seoConfig.business
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phone,
      url: business.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.streetAddress,
        addressLocality: business.address.addressLocality,
        addressRegion: business.address.addressRegion,
        postalCode: business.address.postalCode,
        addressCountry: business.address.addressCountry,
      },
    },
    serviceType: serviceName,
    url: serviceUrl,
  }
}
