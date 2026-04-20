import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: `${seoConfig.business.name} | Professional Home Services in Dallas-Fort Worth`,
  description: `Expert home services in Dallas-Fort Worth. Installation, repair, maintenance, assembly, painting & electrical. Licensed & insured. 15+ years experience. Call ${seoConfig.business.phone} for same-day service.`,
  keywords: [
    "home services Dallas",
    "handyman Fort Worth",
    "home repair Dallas TX",
    "installation services Dallas",
    "professional contractor Dallas",
    "home maintenance Fort Worth",
    "licensed contractor Dallas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
  },
};

const services = [
  {
    title: "Electrical",
    description: "Professional electrical installation, repair, and maintenance services.",
    href: "/services/electrical",
    icon: "⚡",
  },
  {
    title: "Plumbing",
    description: "Expert plumbing solutions for residential and commercial properties.",
    href: "/services/plumbing",
    icon: "🔧",
  },
  {
    title: "HVAC",
    description: "Heating, ventilation, and air conditioning installation and repair.",
    href: "/services/hvac",
    icon: "❄️",
  },
  {
    title: "Carpentry",
    description: "Custom carpentry and woodworking for your home or business.",
    href: "/services/carpentry",
    icon: "🔨",
  },
  {
    title: "Smart Home Installation",
    description: "Modernize your home with smart technology. From automated lighting and thermostats to security systems and voice control integration.",
    href: "/services/smart-home",
    icon: "🏠",
  },
  {
    title: "Decks & Patios",
    description: "Beautiful outdoor living spaces built to last.",
    href: "/services/decks-patios",
    icon: "🏡",
  },
];

export default function Home() {
  // Structured Data (JSON-LD) for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": seoConfig.baseUrl,
    name: seoConfig.business.legalName,
    image: `${seoConfig.baseUrl}/New-cc-logo.png`,
    url: seoConfig.business.url,
    telephone: seoConfig.business.phone,
    email: seoConfig.business.email,
    priceRange: seoConfig.business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: seoConfig.business.address.streetAddress,
      addressLocality: seoConfig.business.address.addressLocality,
      addressRegion: seoConfig.business.address.addressRegion,
      postalCode: seoConfig.business.address.postalCode,
      addressCountry: seoConfig.business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: seoConfig.business.serviceArea.geo.geoMidpoint.latitude,
      longitude: seoConfig.business.serviceArea.geo.geoMidpoint.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "City",
      name: seoConfig.business.serviceArea.name,
    },
    sameAs: [
      // TODO: Add social media profiles
      // "https://www.facebook.com/creativeconstructors",
      // "https://www.instagram.com/creativeconstructors",
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-navy text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional Home Services in Dallas, TX
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-silver">
              Licensed, insured, and ready to bring your projects to life. From electrical to decks, we do it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center"
              >
                Book Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block bg-royal-blue hover:bg-royal-blue/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-navy">
              Your Trusted Partner for Quality Workmanship
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {/* TODO: Add company story and values */}
              At Creative Constructors LLC, we pride ourselves on delivering exceptional craftsmanship and reliable service across the Dallas-Fort Worth metroplex. With years of experience and a commitment to excellence, we're here to handle all your home improvement needs.
            </p>
            <p className="text-lg text-gray-700">
              Whether you need electrical work, plumbing repairs, HVAC maintenance, custom carpentry, new flooring, or a beautiful deck or patio, our team of licensed professionals is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy">Our Services</h2>
            <p className="text-lg text-gray-700">
              Comprehensive home services to meet all your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-t-4 border-orange"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-navy">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2 text-navy">Licensed & Insured</h3>
              <p className="text-gray-700">
                Fully licensed and insured for your peace of mind
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-2 text-navy">Serving DFW Area</h3>
              <p className="text-gray-700">
                Proudly serving the entire Dallas-Fort Worth metroplex
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-2 text-navy">Quality Guaranteed</h3>
              <p className="text-gray-700">
                Committed to exceptional workmanship on every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and quote
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
