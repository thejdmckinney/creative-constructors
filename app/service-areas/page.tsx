import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Dallas-Fort Worth Handyman Services | Creative Constructors",
  description: "Professional handyman services across Dallas-Fort Worth metroplex. Serving Fort Worth, Dallas, Arlington, Plano, Garland, Richardson & surrounding areas. Licensed & insured.",
  keywords: [
    "DFW handyman",
    "Dallas Fort Worth handyman",
    "handyman near me",
    "North Texas handyman",
    "metroplex home repair",
    "DFW home services",
  ],
  openGraph: {
    title: "Service Areas | Dallas-Fort Worth Handyman Services",
    description: "Professional handyman services across the Dallas-Fort Worth metroplex. Licensed & insured.",
    url: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      name: "Fort Worth",
      slug: "fort-worth",
      description: "Serving Fort Worth and the greater Tarrant County area",
      neighborhoods: 12,
      icon: "🏛️",
    },
    {
      name: "Dallas",
      slug: "dallas",
      description: "Professional services throughout Dallas County",
      neighborhoods: 12,
      icon: "🌆",
    },
    {
      name: "Arlington",
      slug: "arlington",
      description: "Trusted handyman services in Arlington",
      neighborhoods: 12,
      icon: "⚾",
    },
    {
      name: "Plano",
      slug: "plano",
      description: "Expert home repair services in Plano",
      neighborhoods: 12,
      icon: "🏘️",
    },
    {
      name: "Garland",
      slug: "garland",
      description: "Reliable handyman services in Garland",
      neighborhoods: 12,
      icon: "🏠",
    },
    {
      name: "Richardson",
      slug: "richardson",
      description: "Quality home services in Richardson",
      neighborhoods: 12,
      icon: "🔧",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange font-bold">📍 Serving Dallas-Fort Worth Metroplex</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-barlow-condensed mb-6">
            Professional Handyman Services Across DFW
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Creative Constructors proudly serves homeowners throughout the Dallas-Fort Worth metroplex with licensed, insured, and professional handyman services. From routine repairs to emergency fixes, we're your trusted local experts.
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

      {/* Service Areas Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Cities We Serve
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Select your city to learn more about our services in your area
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white border-2 border-gray-200 hover:border-orange rounded-xl p-8 transition-all hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-black font-barlow-condensed text-navy group-hover:text-orange mb-2 transition-colors">
                  {area.name}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-2">📍</span>
                  <span>{area.neighborhoods}+ neighborhoods served</span>
                </div>
                <div className="flex items-center text-orange font-bold group-hover:translate-x-2 transition-transform">
                  View Services <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-6 text-center">
            Comprehensive Coverage Across North Texas
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-center mb-8">
              Creative Constructors has built a reputation for reliable, professional handyman services throughout the Dallas-Fort Worth metroplex. We serve homeowners in Fort Worth, Dallas, Arlington, Plano, Garland, Richardson, and surrounding communities with a full range of home repair and improvement services.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-navy mb-6 text-center">Our Service Commitment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2">Fast Response Times</h4>
                    <p className="text-gray-600 text-sm">Same-day service available for emergency repairs throughout our service area</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2">Licensed & Insured</h4>
                    <p className="text-gray-600 text-sm">Fully licensed and insured for your protection and peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2">5-Star Rated</h4>
                    <p className="text-gray-600 text-sm">Trusted by homeowners across DFW with exceptional service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2">Full-Service</h4>
                    <p className="text-gray-600 text-sm">From electrical to plumbing, HVAC to smart home - we do it all</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-12 text-center">
            Services Available in All Areas
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Emergency Services", icon: "🚨", href: "/services/emergency" },
              { name: "Electrical", icon: "⚡", href: "/services/electrical" },
              { name: "Plumbing", icon: "🚰", href: "/services/plumbing" },
              { name: "HVAC", icon: "❄️", href: "/services/hvac" },
              { name: "Smart Home", icon: "🏠", href: "/services/smart-home" },
              { name: "Carpentry", icon: "🪵", href: "/services/carpentry" },
              { name: "Painting", icon: "🎨", href: "/services/painting" },
              { name: "Flooring", icon: "🔲", href: "/services/flooring" },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-gray-50 p-6 rounded-xl hover:bg-orange/10 hover:shadow-md transition-all text-center group"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-navy group-hover:text-orange transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block text-orange hover:text-orange/80 font-bold text-lg"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-navy to-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Select your city above or contact us directly to schedule your service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:817-470-1889"
              className="bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              📞 Call (817) 470-1889
            </a>
            <Link
              href="/book"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              📅 Book Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
