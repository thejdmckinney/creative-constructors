import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Luxury Handyman Services in University Park, TX | Creative Constructors",
  description: "Premier handyman and home services for University Park's finest homes. Trusted by discerning homeowners. Licensed, insured, and dedicated to exceptional craftsmanship. Call (817) 470-1889.",
  keywords: [
    "handyman University Park",
    "University Park handyman",
    "luxury home repair University Park",
    "high-end home services Dallas",
    "University Park home maintenance",
    "premium handyman Dallas",
    "University Park electrician",
    "University Park plumber",
  ],
  openGraph: {
    title: "Luxury Handyman Services in University Park, TX | Creative Constructors",
    description: "Premier handyman and home services for University Park's finest homes. Exceptional craftsmanship for discerning homeowners.",
    url: "/service-areas/university-park",
  },
};

export default function UniversityParkPage() {
  const services = [
    { name: "Emergency Services", icon: "⚠", href: "/services/emergency" },
    { name: "Electrical", icon: "⚡", href: "/services/electrical" },
    { name: "Plumbing", icon: "�", href: "/services/plumbing" },
    { name: "HVAC", icon: "🌡", href: "/services/hvac" },
    { name: "Smart Home", icon: "🔌", href: "/services/smart-home" },
    { name: "Carpentry", icon: "🔨", href: "/services/carpentry" },
    { name: "Painting", icon: "🖌", href: "/services/painting" },
    { name: "Flooring", icon: "◼", href: "/services/flooring" },
  ];

  const premiumFeatures = [
    {
      icon: "👔",
      title: "White-Glove Service",
      description: "Professional, respectful service that honors your home and schedule"
    },
    {
      icon: "🏆",
      title: "Master Craftsmanship",
      description: "Expert attention to detail for homes that demand excellence"
    },
    {
      icon: "🔒",
      title: "Discretion & Trust",
      description: "Background-checked, bonded, and trusted by UP's finest families"
    },
    {
      icon: "⚡",
      title: "Same-Day Response",
      description: "Priority scheduling for University Park homeowners"
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Premium Feel */}
      <section className="bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange font-bold">🏛️ Proudly Serving University Park</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-barlow-condensed mb-6 leading-tight">
            Premier Handyman Services for University Park's Finest Homes
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl leading-relaxed">
            Trusted by discerning homeowners in University Park. We understand that your home isn't just valuable—it's irreplaceable. Our commitment to exceptional craftsmanship and white-glove service has made us the preferred choice for UP residents who demand excellence.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl italic">
            "90% of our business comes from University Park and Highland Park homeowners who trust us with their most valued asset."
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:817-470-1889"
              className="bg-orange hover:bg-orange/90 text-white font-bold py-5 px-10 rounded-lg transition-colors text-center text-lg shadow-xl"
            >
              📞 Call (817) 470-1889
            </a>
            <Link
              href="/book"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-5 px-10 rounded-lg transition-colors text-center text-lg shadow-xl"
            >
              📅 Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Features - What Sets Us Apart */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            The University Park Difference
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Why University Park homeowners choose Creative Constructors for their most important home projects
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange/20 to-orange/5 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Premium Presentation */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Comprehensive Home Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Expert solutions for every aspect of your University Park home
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 text-center group border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-navy group-hover:text-orange transition-colors text-lg">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange text-4xl">⭐</span>
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed mb-6">
              Trusted by University Park's Finest
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              University Park homeowners trust Creative Constructors with everything from routine maintenance to complex renovations. We understand the unique needs of historic and luxury homes, and we treat every property with the care and respect it deserves.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">What University Park Homeowners Value Most:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-orange text-2xl mr-4 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Respect for Your Home</h4>
                  <p className="text-gray-300 text-sm">We protect your floors, clean up meticulously, and treat your home like our own</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange text-2xl mr-4 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Expert Problem-Solving</h4>
                  <p className="text-gray-300 text-sm">Complex issues in historic homes require experience and craftsmanship</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange text-2xl mr-4 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Reliable Communication</h4>
                  <p className="text-gray-300 text-sm">Clear updates, transparent pricing, and respect for your time</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange text-2xl mr-4 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Long-Term Partnership</h4>
                  <p className="text-gray-300 text-sm">Building lasting relationships with homeowners who trust us with all their needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-6 text-center">
            Deep University Park Experience
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-center mb-8 text-lg leading-relaxed">
              We know University Park inside and out. From the tree-lined streets near SMU to the prestigious homes along Turtle Creek, we've worked on hundreds of properties in this iconic neighborhood. We understand the architectural styles, the common issues with older homes, and the level of quality UP homeowners expect.
            </p>
            <div className="bg-orange/5 border-l-4 border-orange rounded-r-xl p-8 my-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Serving University Park Areas:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                <div>• SMU Campus Area</div>
                <div>• Armstrong Parkway</div>
                <div>• Preston Road Corridor</div>
                <div>• Turtle Creek Area</div>
                <div>• Lovers Lane</div>
                <div>• University Boulevard</div>
                <div>• Hillcrest Avenue</div>
                <div>• Southwestern Boulevard</div>
                <div>• Daniel Avenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Shield Mention - Premium Maintenance */}
      <section className="py-20 px-4 bg-gradient-to-br from-royal-blue to-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-3 mb-6">
            <span className="text-orange font-bold text-lg">🛡️ PREMIUM MAINTENANCE PROGRAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed mb-6">
            The Creative Constructors Home Shield
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Many of our University Park clients protect their investment with quarterly preventive maintenance visits. Small issues are caught early, filters are changed, systems are inspected—giving you complete peace of mind.
          </p>
          <Link
            href="/home-shield"
            className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-5 px-10 rounded-lg transition-colors text-lg shadow-xl"
          >
            Learn About Home Shield →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-orange">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-white mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join hundreds of satisfied University Park homeowners who trust Creative Constructors with their most valuable asset
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:817-470-1889"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-5 px-10 rounded-lg transition-colors text-lg shadow-xl"
            >
              📞 Call (817) 470-1889
            </a>
            <Link
              href="/book"
              className="bg-navy hover:bg-royal-blue text-white font-bold py-5 px-10 rounded-lg transition-colors text-lg shadow-xl"
            >
              📅 Schedule Your Service
            </Link>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            Same-day service available for University Park residents • Licensed & Insured • Background Checked
          </p>
        </div>
      </section>
    </main>
  );
}
