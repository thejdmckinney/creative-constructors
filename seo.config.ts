/**
 * Centralized SEO configuration for Creative Constructors LLC
 * Update this file to change SEO metadata across the entire site
 */

export const seoConfig = {
  siteName: "Creative Constructors LLC",
  defaultTitle: "Creative Constructors LLC | Professional Home Services in Dallas, TX",
  defaultDescription:
    "Licensed and insured home services contractor serving the Dallas-Fort Worth area. Expert electrical, plumbing, HVAC, carpentry, flooring, and deck construction services.",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://creative-constructors.com",
  twitterHandle: "@CreativeConstr", // TODO: Update with actual Twitter handle
  twitterCardType: "summary_large_image" as const,
  locale: "en_US",
  type: "website" as const,
  
  // Business information for structured data
  business: {
    name: "Creative Constructors LLC",
    legalName: "Creative Constructors LLC",
    address: {
      streetAddress: "4601 Elm Ridge Dr",
      addressLocality: "Garland",
      addressRegion: "TX",
      postalCode: "75044",
      addressCountry: "US",
    },
    phone: "+1-817-470-1889",
    email: "info@creative-constructors.com",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://creative-constructors.com",
    serviceArea: {
      name: "Dallas-Fort Worth Metroplex",
      geo: {
        type: "GeoCircle",
        geoMidpoint: {
          latitude: "32.7767",
          longitude: "-96.7970",
        },
        geoRadius: "50000", // 50km radius
      },
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-15:00",
  },
} as const;

export type SeoConfig = typeof seoConfig;
