import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Luxury Handyman Services in Highland Park, TX | Creative Constructors",
  description: "Elite handyman and home services for Highland Park's prestigious estates. Trusted by discerning homeowners for exceptional craftsmanship. Licensed, insured, and dedicated to perfection. Call (817) 470-1889.",
  keywords: [
    "handyman Highland Park",
    "Highland Park handyman",
    "luxury home repair Highland Park",
    "high-end home services Dallas",
    "Highland Park home maintenance",
    "premium handyman Dallas",
    "Highland Park electrician",
    "Highland Park plumber",
  ],
  openGraph: {
    title: "Luxury Handyman Services in Highland Park, TX | Creative Constructors",
    description: "Elite handyman and home services for Highland Park's prestigious estates. Exceptional craftsmanship for discerning homeowners.",
    url: "/service-areas/highland-park",
  },
};

export default function HighlandParkPage() {
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
      icon: "💎",
      title: "Estate-Level Service",
      description: "Exceptional care and attention befitting Highland Park's finest properties"
    },
    {
      icon: "🎯",
      title: "Precision Craftsmanship",
      description: "Master-level expertise for homes where every detail matters"
    },
    {
      icon: "🔐",
      title: "Privacy & Discretion",
      description: "Trusted, vetted professionals who respect your privacy and security"
    },
    {
      icon: "⚡",
      title: "Priority Service",
      description: "VIP scheduling and same-day response for Highland Park homeowners"
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Ultra Premium */}
      <section className="bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange font-bold">👑 Proudly Serving Highland Park</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-barlow-condensed mb-6 leading-tight">
            Elite Handyman Services for Highland Park's Prestigious Estates
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl leading-relaxed">
            Highland Park's most discerning homeowners trust Creative Constructors with their exceptional properties. We understand that in Highland Park, excellence isn't optional—it's expected. Our unwavering commitment to master craftsmanship and impeccable service has made us the preferred choice for homes that demand perfection.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl italic">
            "Highland Park and University Park represent 90% of our business—homeowners who know quality when they see it."
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

      {/* Premium Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            The Highland Park Standard
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Why Highland Park's finest estates choose Creative Constructors for their most critical home services
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

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Comprehensive Estate Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Expert solutions for every aspect of your Highland Park estate
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

      {/* Trust & Excellence Section */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange text-4xl">⭐</span>
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed mb-6">
              Trusted by Highland Park's Elite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Highland Park homeowners demand excellence, and we deliver it consistently. From historic estates to modern architectural masterpieces, we bring the same meticulous attention to detail and craftsman-level expertise to every project—no matter the size.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">What Sets Us Apart in Highland Park:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-orange text-2xl mr-4 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Historic Home Expertise</h4>
                  <p className="text-gray-300 text-sm">Deep understanding of vintage architecture and period-appropriate solutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange text-2xl mr-4 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Luxury Materials Knowledge</h4>
                  <p className="text-gray-300 text-sm">Experience with high-end finishes, custom millwork, and premium systems</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange text-2xl mr-4 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Absolute Discretion</h4>
                  <p className="text-gray-300 text-sm">Background-checked, bonded professionals who respect your privacy</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange text-2xl mr-4 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Long-Term Relationships</h4>
                  <p className="text-gray-300 text-sm">Building lasting partnerships with Highland Park homeowners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Deep Dive */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-6 text-center">
            Highland Park Specialists
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-center mb-8 text-lg leading-relaxed">
              Highland Park isn't just another service area for us—it's where we've built our reputation. We understand the unique challenges of maintaining historic estates, the importance of period-appropriate repairs, and the level of craftsmanship that Highland Park properties deserve. From Lakeside Drive to Beverly Drive, we've worked on some of the most beautiful homes in Dallas.
            </p>
            <div className="bg-orange/5 border-l-4 border-orange rounded-r-xl p-8 my-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Serving Highland Park's Prestigious Streets:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                <div>• Lakeside Drive</div>
                <div>• Beverly Drive</div>
                <div>• Armstrong Parkway</div>
                <div>• Turtle Creek Blvd</div>
                <div>• Preston Road</div>
                <div>• Euclid Avenue</div>
                <div>• Miramar Avenue</div>
                <div>• Drexel Drive</div>
                <div>• Lexington Avenue</div>
                <div>• Gillon Avenue</div>
                <div>• Abbott Avenue</div>
                <div>• Fairfax Avenue</div>
              </div>
            </div>
            <p className="text-gray-700 text-center text-lg leading-relaxed">
              Whether your home is a 1920s Georgian Revival or a contemporary estate, we have the expertise to maintain it at the highest standard.
            </p>
          </div>
        </div>
      </section>

      {/* Home Shield Premium */}
      <section className="py-20 px-4 bg-gradient-to-br from-royal-blue to-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-3 mb-6">
            <span className="text-orange font-bold text-lg">🛡️ ELITE MAINTENANCE PROGRAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed mb-6">
            The Creative Constructors Home Shield
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The majority of our Highland Park clients protect their estates with our quarterly preventive maintenance program. Four comprehensive visits per year ensure your home's systems are optimized, small issues are resolved before they become expensive problems, and your property maintains its pristine condition year-round.
          </p>
          <Link
            href="/home-shield"
            className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-5 px-10 rounded-lg transition-colors text-lg shadow-xl"
          >
            Discover Home Shield →
          </Link>
        </div>
      </section>

      {/* Final Premium CTA */}
      <section className="py-20 px-4 bg-orange">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-white mb-4">
            Your Home Deserves Excellence
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join the Highland Park homeowners who trust Creative Constructors with their most prized possession
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
            VIP service for Highland Park residents • Licensed & Insured • Background Checked • Fully Bonded
          </p>
        </div>
      </section>
    </main>
  );
}
