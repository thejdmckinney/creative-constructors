import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Plumber in Highland Park, TX | Licensed Plumbing Services",
  description: "Licensed plumber serving Highland Park, TX. Leak repairs, drain cleaning, fixture installation, water heaters. 15+ years experience. Same-day service. Call (817) 470-1889.",
  keywords: [
    "plumber Highland Park TX",
    "Highland Park plumber",
    "plumbing services Highland Park",
    "leak repair Highland Park",
    "licensed plumber Highland Park",
    "emergency plumber Highland Park",
    "luxury home plumber Highland Park",
  ],
  openGraph: {
    title: "Plumber in Highland Park, TX | Creative Constructors",
    description: "Licensed plumbing services for Highland Park's finest homes. Leak repairs, drain cleaning, installations. Same-day service.",
    url: "/services/plumbing/highland-park",
  },
};

export default function PlumbingHighlandParkPage() {
  const plumbingServices = [
    "Leak Detection & Repair",
    "Drain Cleaning & Unclogging",
    "Fixture Installation & Repair",
    "Water Heater Service & Replacement",
    "Toilet Repair & Installation",
    "Faucet & Sink Repair",
    "Garbage Disposal Service",
    "Sewer Line Inspection",
    "Pipe Repair & Replacement",
    "Sump Pump Installation",
  ];

  const nearbyAreas = [
    { name: "University Park", href: "/services/plumbing/university-park" },
    { name: "Dallas", href: "/services/plumbing/dallas" },
    { name: "Plano", href: "/services/plumbing/plano" },
  ];

  const otherServices = [
    { name: "Electrical", href: "/services/electrical/highland-park", icon: "⚡" },
    { name: "HVAC", href: "/services/hvac/highland-park", icon: "❄️" },
    { name: "Smart Home", href: "/services/smart-home/highland-park", icon: "🏠" },
    { name: "Carpentry", href: "/services/carpentry/highland-park", icon: "🔨" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": seoConfig.business.name,
              "telephone": seoConfig.business.phone,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Highland Park",
                "addressRegion": "TX"
              }
            }
          }),
        }}
      />

      <section className="relative bg-navy text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-4 py-2 mb-4">
                <span className="text-orange font-bold text-sm">🔧 Licensed & Insured Plumber</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Plumber in Highland Park, TX
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">
                Elite plumbing services for Highland Park's prestigious homes. Fast, reliable, and professional plumbing solutions with white-glove service.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange">15+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange">2hr</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl">
                  Call {seoConfig.business.phone}
                </PhoneLink>
                <Link href="/book" className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl">
                  Book Online
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Trusted since 2011</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Same-day emergency service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Upfront pricing, no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Clean, professional service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-navy text-center">Plumbing Services in Highland Park</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plumbingServices.map((service) => (
              <div key={service} className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange">
                <div className="flex items-start gap-3">
                  <span className="text-orange text-2xl">🔧</span>
                  <h3 className="text-lg font-semibold text-navy">{service}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-orange/10 to-orange/5 rounded-xl p-8 border-2 border-orange/20">
            <h3 className="text-2xl font-bold text-navy mb-4">Emergency Plumbing Available 24/7</h3>
            <p className="text-gray-700 mb-4">
              Burst pipes and plumbing emergencies require immediate attention. We're available for Highland Park residents.
            </p>
            <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg">
              Emergency: {seoConfig.business.phone}
            </PhoneLink>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-navy text-center">Other Services in Highland Park</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service) => (
              <Link key={service.href} href={service.href} className="group bg-white rounded-lg p-6 hover:shadow-xl transition-all border-t-4 border-orange hover:scale-105">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{service.name}</h3>
                <div className="flex items-center text-orange font-semibold">
                  <span>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-navy text-center">Plumbing Services in Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyAreas.map((area) => (
              <Link key={area.href} href={area.href} className="bg-gray-50 hover:bg-orange hover:text-white text-navy font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Plumber in Highland Park?</h2>
          <p className="text-xl mb-8">
            🔧 Same-day service • Upfront pricing • Licensed & insured
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg shadow-xl">
              Call {seoConfig.business.phone}
            </PhoneLink>
            <Link href="/book" className="inline-block bg-white hover:bg-gray-100 text-royal-blue font-bold py-4 px-8 rounded-lg shadow-xl">
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
