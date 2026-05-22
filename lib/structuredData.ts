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

/**
 * Generate enhanced LocalBusiness schema with all SEO data
 */
export function generateEnhancedLocalBusinessSchema() {
  const business = seoConfig.business
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${business.url}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    logo: `${business.url}/new-cc-logo-bg-removed.png`,
    image: [
      `${business.url}/new-cc-logo-bg-removed.png`,
    ],
    
    // Contact Information
    telephone: business.phone,
    email: business.email,
    
    // Address
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    
    // Service Areas
    areaServed: [
      {
        '@type': 'City',
        name: 'Dallas',
        '@id': 'https://www.wikidata.org/wiki/Q16557',
      },
      {
        '@type': 'City',
        name: 'Fort Worth',
        '@id': 'https://www.wikidata.org/wiki/Q16558',
      },
      {
        '@type': 'City',
        name: 'Plano',
      },
      {
        '@type': 'City',
        name: 'Arlington',
      },
      {
        '@type': 'City',
        name: 'Garland',
      },
      {
        '@type': 'City',
        name: 'Richardson',
      },
      {
        '@type': 'City',
        name: 'Highland Park',
      },
      {
        '@type': 'City',
        name: 'University Park',
      },
    ],
    
    // Opening Hours
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
    
    // Business Details
    priceRange: business.priceRange,
    paymentAccepted: 'Cash, Credit Card, Check, Venmo, Zelle',
    currenciesAccepted: 'USD',
    
    // Additional Properties
    slogan: 'Reliable, Skilled & Ready to Build',
    foundingDate: '2011',
    
    // Aggregate Rating (update with real data)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    
    // Services Offered
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Services',
            areaServed: 'Dallas-Fort Worth',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plumbing Services',
            areaServed: 'Dallas-Fort Worth',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC Services',
            areaServed: 'Dallas-Fort Worth',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carpentry Services',
            areaServed: 'Dallas-Fort Worth',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Painting Services',
            areaServed: 'Dallas-Fort Worth',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Flooring Installation',
            areaServed: 'Dallas-Fort Worth',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deck & Patio Construction',
            areaServed: 'Dallas-Fort Worth',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Smart Home Installation',
            areaServed: 'Dallas-Fort Worth',
          },
        },
      ],
    },
  }
}

/**
 * Generate Review schema for testimonials
 */
export function generateReviewSchema(reviews: Array<{
  author: string
  rating: number
  text: string
  date: string
}>) {
  return reviews.map(review => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
    datePublished: review.date,
  }))
}

/**
 * Generate HowTo schema for service guides
 */
export function generateHowToSchema({
  name,
  description,
  steps,
  estimateTime,
  totalCost,
}: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; image?: string }>
  estimateTime?: string
  totalCost?: { currency: string; value: number }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime: estimateTime,
    estimatedCost: totalCost,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  }
}

/**
 * Generate VideoObject schema for video content
 */
export function generateVideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  embedUrl,
}: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  embedUrl: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration, // Format: PT1M33S (1 minute 33 seconds)
    embedUrl,
    contentUrl: embedUrl,
  }
}
