import { seoConfig } from "@/seo.config";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${seoConfig.baseUrl}${item.path}`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement,
  };
}

export function generateServiceSchema(serviceName: string, description: string, serviceType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": seoConfig.business.name,
      "image": `${seoConfig.baseUrl}/New-cc-logo.png`,
      "@id": seoConfig.baseUrl,
      "url": seoConfig.baseUrl,
      "telephone": seoConfig.business.phone,
      "email": seoConfig.business.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.business.address.streetAddress,
        "addressLocality": seoConfig.business.address.addressLocality,
        "addressRegion": seoConfig.business.address.addressRegion,
        "postalCode": seoConfig.business.address.postalCode,
        "addressCountry": seoConfig.business.address.addressCountry,
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": seoConfig.business.serviceArea.geo.geoMidpoint.latitude,
        "longitude": seoConfig.business.serviceArea.geo.geoMidpoint.longitude,
      },
      "priceRange": seoConfig.business.priceRange,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "127"
      }
    },
    "name": serviceName,
    "description": description,
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": seoConfig.business.serviceArea.geo.geoMidpoint.latitude,
        "longitude": seoConfig.business.serviceArea.geo.geoMidpoint.longitude,
      },
      "geoRadius": seoConfig.business.serviceArea.geo.geoRadius,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}
