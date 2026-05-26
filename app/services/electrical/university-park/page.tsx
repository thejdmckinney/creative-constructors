import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/seo.config";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Electrician in University Park, TX | Licensed Electrical Services",
  description: "Licensed electrician serving University Park, TX. Panel upgrades, outlet installation, lighting, ceiling fans, troubleshooting. 15+ years experience. Same-day service. Call (817) 470-1889.",
  keywords: [
    "electrician University Park TX",
    "University Park electrician",
    "electrical services University Park",
    "panel upgrade University Park",
    "licensed electrician University Park",
    "emergency electrician University Park",
    "outlet installation University Park",
    "lighting installation University Park",
  ],
  openGraph: {
    title: "Electrician in University Park, TX | Creative Constructors",
    description: "Licensed electrical services for University Park homes. Panel upgrades, lighting, repairs. Same-day service available.",
    url: "/services/electrical/university-park",
  },
};

export default function ElectricalUniversityParkPage() {
  const electricalServices = [
    "Panel Upgrades & Replacements",
    "Outlet & Switch Installation",
    "Lighting Installation & Repair",
    "Ceiling Fan Installation",
    "GFCI Outlet Installation",
    "Circuit Breaker Replacement",
    "Electrical Troubleshooting",
    "Code Compliance Updates",
    "Smoke Detector Installation",
    "Landscape Lighting",
  ];

  const nearbyAreas = [
    { name: "Highland Park", href: "/services/electrical/highland-park" },
    { name: "Dallas", href: "/services/electrical/dallas" },
    { name: "Plano", href: "/services/electrical/plano" },
  ];

  const otherServices = [
    { name: "Plumbing", href: "/services/plumbing/university-park", icon: "🔧" },
    { name: "HVAC", href: "/services/hvac/university-park", icon: "❄️" },
    { name: "Smart Home", href: "/services/smart-home/university-park", icon: "🏠" },
    { name: "Carpentry", href: "/services/carpentry/university-park", icon: "🔨" },
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Electrical Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": seoConfig.business.name,
              "image": `${seoConfig.baseUrl}/New-cc-logo.png`,
              "telephone": seoConfig.business.phone,
              "priceRange": seoConfig.business.priceRange,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "University Park",
                "addressRegion": "TX",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "University Park",
              "sameAs": "https://en.wikipedia.org/wiki/University_Park,_Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Electrical Services",
              "itemListElement": electricalServices.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service
                }
              }))
            }
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cc-tech-installing-lighting.png"
            alt="Electrician installing lighting in University Park"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-4 py-2 mb-4">
                <span className="text-orange font-bold text-sm">⚡ Licensed & Insured Electrician</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Electrician in University Park, TX
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Expert electrical services for University Park's finest homes. From panel upgrades to smart lighting, we deliver safe, code-compliant electrical work with white-glove service.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">15+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">2hr</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl">
                  Call {seoConfig.business.phone}
                </PhoneLink>
                <Link
                  href="/book"
                  className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl"
                >
                  Book Online
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 text-white">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-200">Licensed, insured, and trusted by University Park homeowners since 2011</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-200">Same-day service available with 2-hour response time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-200">All work code-compliant and warranty-backed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-200">White-glove service that respects your home</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy">Our Electrical Services in University Park</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From routine repairs to complete electrical system upgrades, we handle all your residential electrical needs with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricalServices.map((service) => (
              <div key={service} className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange">
                <div className="flex items-start gap-3">
                  <span className="text-orange text-2xl">⚡</span>
                  <h3 className="text-lg font-semibold text-navy">{service}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-orange/10 to-orange/5 rounded-xl p-8 border-2 border-orange/20">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚠️</div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">Emergency Electrical Service</h3>
                <p className="text-gray-700 mb-4">
                  Electrical emergencies don't wait for business hours. We offer same-day emergency service for University Park residents. If you're experiencing power outages, sparking outlets, burning smells, or any electrical emergency—call us immediately.
                </p>
                <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Emergency: {seoConfig.business.phone}
                </PhoneLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems We Solve */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-navy text-center">Common Electrical Issues We Solve</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-navy mb-4">Outdated Electrical Panels</h3>
              <p className="text-gray-700 mb-4">
                Many University Park homes have older electrical panels that can't handle modern power demands. We upgrade panels to safely support your home's electrical needs, prevent circuit overloads, and ensure compliance with current electrical codes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Frequent circuit breaker trips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Insufficient power for modern appliances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Adding electric vehicle charging</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-navy mb-4">Lighting Upgrades & Installation</h3>
              <p className="text-gray-700 mb-4">
                Transform your home with professional lighting installation. From elegant chandeliers to modern recessed lighting, landscape lighting, and smart lighting systems—we handle it all with attention to detail.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Chandelier installation & replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Recessed & track lighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Outdoor & landscape lighting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-navy mb-4">Outlet & Switch Problems</h3>
              <p className="text-gray-700 mb-4">
                Faulty outlets and switches aren't just inconvenient—they're safety hazards. We diagnose and repair electrical issues, install GFCI outlets in wet areas, add USB outlets, and ensure your home's electrical system is safe and functional.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Non-working or sparking outlets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>GFCI outlet installation (bathrooms, kitchens)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>USB outlet upgrades</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-navy mb-4">Smart Home Integration</h3>
              <p className="text-gray-700 mb-4">
                Modernize your University Park home with smart electrical systems. We install smart switches, dimmers, thermostats, and integrate everything seamlessly with your home automation system.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Smart switch & dimmer installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Voice control integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">•</span>
                  <span>Automated lighting scenes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services in University Park */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-navy text-center">Other Services in University Park</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all border-t-4 border-orange hover:scale-105"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{service.name}</h3>
                <div className="flex items-center text-orange font-semibold group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-navy text-center">Electrical Services in Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-white hover:bg-orange hover:text-white text-navy font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Professional Electrical Service?</h2>
          <p className="text-xl mb-4">
            Trusted by University Park homeowners for over 15 years
          </p>
          <p className="text-lg text-gray-200 mb-8">
            ⚡ We respond within 2 hours • Same-day service available • Licensed & insured
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-xl">
              Call {seoConfig.business.phone}
            </PhoneLink>
            <Link
              href="/book"
              className="inline-block bg-white hover:bg-gray-100 text-royal-blue font-bold py-4 px-8 rounded-lg transition-colors shadow-xl"
            >
              Schedule Service Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
