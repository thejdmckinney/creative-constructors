import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Handyman Services in Dallas, TX | Creative Constructors",
  description: "Professional handyman and home repair services in Dallas, TX. Licensed & insured. Electrical, plumbing, HVAC, carpentry & more. Same-day service available. Call (817) 470-1889.",
  keywords: [
    "handyman Dallas",
    "Dallas handyman",
    "home repair Dallas TX",
    "electrician Dallas",
    "plumber Dallas",
    "HVAC Dallas",
    "Dallas home services",
  ],
  openGraph: {
    title: "Handyman Services in Dallas, TX | Creative Constructors",
    description: "Professional handyman and home repair services in Dallas, TX. Licensed & insured. Same-day service available.",
    url: "/service-areas/dallas",
  },
};

export default function DallasPage() {
  const services = [
    { name: "Emergency Services", icon: "🚨", href: "/services/emergency" },
    { name: "Electrical", icon: "⚡", href: "/services/electrical" },
    { name: "Plumbing", icon: "🚰", href: "/services/plumbing" },
    { name: "HVAC", icon: "❄️", href: "/services/hvac" },
    { name: "Smart Home", icon: "🏠", href: "/services/smart-home" },
    { name: "Repair", icon: "🔧", href: "/services/repair" },
    { name: "Installation", icon: "🔨", href: "/services/installation" },
    { name: "Painting", icon: "🎨", href: "/services/painting" },
  ];

  const neighborhoods = [
    "Uptown",
    "Oak Lawn",
    "Highland Park",
    "University Park",
    "Lake Highlands",
    "East Dallas",
    "Deep Ellum",
    "Bishop Arts District",
    "Lakewood",
    "M Streets",
    "Knox Henderson",
    "Preston Hollow",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black font-barlow-condensed mb-6">
            Dallas's Trusted Handyman Service
          </h1>
          <p className="text-xl md:text-2xl text-silver mb-8">
            Professional Home Services Throughout Dallas, TX
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${seoConfig.business.phone}`}
              className="bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>📞 Call Now: {seoConfig.business.phone}</span>
            </a>
            <Link
              href="/book"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-12 text-center">
            Why Dallas Homeowners Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-navy mb-3">Fast Response</h3>
              <p className="text-gray-700">
                Same-day service available for Dallas residents. We understand your time is valuable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-navy mb-3">Licensed & Insured</h3>
              <p className="text-gray-700">
                Fully licensed, insured, and background-checked professionals serving Dallas since 2010.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-navy mb-3">5-Star Rated</h3>
              <p className="text-gray-700">
                Hundreds of 5-star reviews from satisfied Dallas homeowners and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-12 text-center">
            Our Services in Dallas
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-orange rounded-lg p-6 text-center transition-all group"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-navy group-hover:text-orange transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-8 text-center">
            Dallas Neighborhoods We Serve
          </h2>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                <p className="text-navy font-medium">{neighborhood}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600">
            Don't see your neighborhood? We serve all of Dallas and surrounding areas.{" "}
            <a href={`tel:${seoConfig.business.phone}`} className="text-orange font-bold hover:underline">
              Call to confirm service availability
            </a>
          </p>
        </div>
      </section>

      {/* About Dallas Service */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-8">
            Your Local Dallas Handyman
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Creative Constructors LLC is proud to serve homeowners and businesses throughout Dallas, Texas. 
              As a locally-operated handyman service, we understand the unique needs of Dallas properties - 
              from luxury homes in Highland Park to modern lofts in Deep Ellum.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you need emergency electrical repairs in Uptown, plumbing services in Oak Lawn, 
              or HVAC maintenance in Lake Highlands, our experienced team is ready to help. We offer same-day 
              service for urgent repairs and flexible scheduling for routine maintenance.
            </p>
            <p className="text-gray-700 mb-4">
              Our Dallas customers appreciate our:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Transparent, upfront pricing with no hidden fees</li>
              <li>Respect for your property - we always clean up after ourselves</li>
              <li>Expert knowledge of Dallas building codes and requirements</li>
              <li>Warranty on all workmanship</li>
              <li>Friendly, professional service from start to finish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange to-orange/90 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed mb-6">
            Ready to Get Started in Dallas?
          </h2>
          <p className="text-xl mb-8">
            Call today for a free estimate on your home service project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${seoConfig.business.phone}`}
              className="bg-white hover:bg-gray-100 text-orange font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              📞 {seoConfig.business.phone}
            </a>
            <Link
              href="/book"
              className="bg-navy hover:bg-royal-blue text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Book Online Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
