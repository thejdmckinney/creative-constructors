import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Handyman Services in Garland, TX | Creative Constructors",
  description: "Professional handyman and home repair services in Garland, TX. Licensed & insured. Electrical, plumbing, HVAC, carpentry & more. Same-day service available. Call (817) 470-1889.",
  keywords: [
    "handyman Garland",
    "Garland handyman",
    "home repair Garland TX",
    "electrician Garland",
    "plumber Garland",
    "HVAC Garland",
    "Garland home services",
  ],
  openGraph: {
    title: "Handyman Services in Garland, TX | Creative Constructors",
    description: "Professional handyman and home repair services in Garland, TX. Licensed & insured. Same-day service available.",
    url: "/service-areas/garland",
  },
};

export default function GarlandPage() {
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
    "Downtown Garland",
    "Firewheel",
    "Lake Highlands",
    "Woodbridge",
    "Buckingham",
    "Northridge",
    "Beltway Park",
    "Oakcrest",
    "Centerville",
    "Richfield",
    "Duck Creek",
    "Rowlett Creek",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange font-bold">📍 Serving Garland, TX</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-barlow-condensed mb-6">
            Professional Handyman Services in Garland, Texas
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Your trusted local handyman serving Garland and surrounding areas. Licensed, insured, and ready to help with all your home repair and improvement needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:817-470-1889"
              className="bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center text-lg"
            >
              📞 Call (817) 470-1889
            </a>
            <Link
              href="/book"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-center text-lg"
            >
              📅 Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-12 text-center">
            Why Garland Residents Choose Creative Constructors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Fast Response</h3>
              <p className="text-gray-600">Same-day service available for emergency repairs in Garland</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Trusted Locally</h3>
              <p className="text-gray-600">Serving Garland homeowners with 5-star rated service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Our Services in Garland
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Comprehensive home services for Garland residents
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-center group"
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
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Garland Neighborhoods We Serve
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Proudly serving homeowners throughout Garland and surrounding communities
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood}
                className="bg-gray-50 px-4 py-3 rounded-lg text-center text-gray-700 hover:bg-orange/10 hover:text-orange transition-colors"
              >
                {neighborhood}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-16 px-4 bg-gradient-to-br from-navy to-royal-blue text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed mb-6 text-center">
            Your Local Garland Handyman
          </h2>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-gray-300 text-center mb-6">
              Creative Constructors has been serving homeowners in Garland, TX with reliable, professional handyman services. From routine maintenance to emergency repairs, we're your trusted partner for keeping your Garland home in perfect condition.
            </p>
            <p className="text-gray-300 text-center mb-6">
              Whether you live near Firewheel, Downtown Garland, or anywhere in the Garland area, we're ready to help with electrical work, plumbing repairs, HVAC maintenance, smart home installations, and much more.
            </p>
          </div>
          <div className="text-center mt-8">
            <a
              href="tel:817-470-1889"
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Call for Service in Garland: (817) 470-1889
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your handyman service in Garland today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              📅 Schedule Service
            </Link>
            <Link
              href="/contact"
              className="bg-navy hover:bg-royal-blue text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              💬 Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
