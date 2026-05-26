import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/seo.config";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "HVAC Repair in University Park, TX | Heating & Air Conditioning",
  description: "HVAC services in University Park, TX. AC repair, heating repair, system installation, maintenance. 15+ years experience. Same-day emergency service. Call (817) 470-1889.",
  keywords: [
    "HVAC University Park TX",
    "University Park HVAC",
    "AC repair University Park",
    "heating repair University Park",
    "air conditioning University Park",
    "HVAC installation University Park",
    "furnace repair University Park",
    "emergency HVAC University Park",
  ],
  openGraph: {
    title: "HVAC Repair in University Park, TX | Creative Constructors",
    description: "Professional HVAC services for University Park homes. AC & heating repair, installation, maintenance. Same-day service available.",
    url: "/services/hvac/university-park",
  },
};

export default function HVACUniversityParkPage() {
  const hvacServices = [
    "AC Repair & Maintenance",
    "Heating System Repair",
    "HVAC System Installation",
    "Thermostat Installation & Upgrade",
    "Air Filter Replacement",
    "Duct Cleaning & Repair",
    "System Tune-ups",
    "Emergency HVAC Service",
    "Energy Efficiency Upgrades",
    "Smart Thermostat Integration",
  ];

  const nearbyAreas = [
    { name: "Highland Park", href: "/services/hvac/highland-park" },
    { name: "Dallas", href: "/services/hvac/dallas" },
    { name: "Plano", href: "/services/hvac/plano" },
  ];

  const otherServices = [
    { name: "Electrical", href: "/services/electrical/university-park", icon: "⚡" },
    { name: "Plumbing", href: "/services/plumbing/university-park", icon: "🔧" },
    { name: "Smart Home", href: "/services/smart-home/university-park", icon: "🏠" },
    { name: "Carpentry", href: "/services/carpentry/university-park", icon: "🔨" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "HVAC Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": seoConfig.business.name,
              "telephone": seoConfig.business.phone,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "University Park",
                "addressRegion": "TX"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "University Park"
            }
          }),
        }}
      />

      <section className="relative bg-navy text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-4 py-2 mb-4">
                <span className="text-orange font-bold text-sm">❄️ Professional HVAC Service</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                HVAC Repair in University Park, TX
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">
                Expert heating and air conditioning services for University Park homes. Keep your home comfortable year-round with professional HVAC repair, maintenance, and installation.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange">15+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange">24/7</div>
                    <div className="text-sm text-gray-300">Emergency Service</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl">
                  Call {seoConfig.business.phone}
                </PhoneLink>
                <Link href="/book" className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl">
                  Book Service
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Trusted HVAC service since 2011</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">24/7 emergency AC & heating repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Upfront pricing on all services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Energy-efficient solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-navy text-center">HVAC Services in University Park</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hvacServices.map((service) => (
              <div key={service} className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange">
                <div className="flex items-start gap-3">
                  <span className="text-orange text-2xl">❄️</span>
                  <h3 className="text-lg font-semibold text-navy">{service}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-orange/10 to-orange/5 rounded-xl p-8 border-2 border-orange/20">
            <h3 className="text-2xl font-bold text-navy mb-4">AC Not Working? We're Available 24/7</h3>
            <p className="text-gray-700 mb-4">
              Texas summers are brutal. When your AC fails, you need immediate help. We offer emergency HVAC service with fast response times.
            </p>
            <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg">
              Emergency: {seoConfig.business.phone}
            </PhoneLink>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-navy text-center">Other Services in University Park</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-navy text-center">HVAC Services in Nearby Areas</h2>
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
          <h2 className="text-4xl font-bold mb-6">Need HVAC Service in University Park?</h2>
          <p className="text-xl mb-8">
            ❄️ 24/7 emergency service • Same-day repairs • Licensed & insured
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
