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
    description: "Professional electrical installation, repair, and maintenance services. Panel upgrades, outlet installation, lighting, ceiling fan installation, and troubleshooting. Same-day emergency service available.",
    href: "/services/electrical",
    icon: "⚡",
  },
  {
    title: "Plumbing",
    description: "Expert plumbing solutions for residential and commercial properties. Leak repairs, fixture installation, drain cleaning, water heater service, pipe repairs, and emergency plumbing.",
    href: "/services/plumbing",
    icon: "🔧",
  },
  {
    title: "HVAC",
    description: "Heating, ventilation, and air conditioning installation and repair. System maintenance, filter replacement, thermostat upgrades, duct work, and 24/7 emergency HVAC service.",
    href: "/services/hvac",
    icon: "❄️",
  },
  {
    title: "Carpentry",
    description: "Expert custom carpentry and woodworking for your home or business. Built-in shelving, custom cabinetry, door installation, trim work, cabinet repairs, crown molding, and bespoke furniture pieces.",
    href: "/services/carpentry",
    icon: "🔨",
  },
  {
    title: "Smart Home Installation",
    description: "Modernize your home with integrated smart technology. Automated lighting systems, smart thermostats, advanced security cameras, video doorbells, voice control integration, and whole-home automation.",
    href: "/services/smart-home",
    icon: "🏠",
  },
  {
    title: "Decks & Patios",
    description: "Beautiful outdoor living spaces built to last. Custom deck design and construction, patio installation, pergolas, gazebos, outdoor kitchens, fire pits, deck repairs, and weatherproofing.",
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
      <section className="relative bg-navy text-white py-24 px-4 overflow-hidden">
        {/* Background Image with Overlay - Shows Quality Work */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cc-tech-installing-lighting.png"
            alt="Creative Constructors technician installing professional lighting - quality work in action"
            fill
            className="object-cover opacity-30"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/85 to-navy/75"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-4 py-2 mb-6">
              <span className="text-orange font-bold text-sm">🏆 15+ Years of Excellence in DFW</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional Home Services in Dallas, TX
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-silver">
              Licensed, insured, and ready to bring your projects to life. From electrical to decks, we do it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl hover:shadow-2xl"
              >
                Book Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block bg-royal-blue hover:bg-royal-blue/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl hover:shadow-2xl"
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
              At Creative Constructors LLC, we pride ourselves on delivering exceptional craftsmanship and reliable service across the Dallas-Fort Worth metroplex. <strong>Since 2011, we've served DFW homeowners for over 15 years</strong> with a unwavering commitment to excellence—handling everything from small repairs to complete renovations.
            </p>
            <p className="text-lg text-gray-700">
              Whether you need electrical work, plumbing repairs, HVAC maintenance, custom carpentry, smart home installation, or a beautiful deck or patio, our team of licensed professionals is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Craftsmanship Showcase */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-navy">
                Hands-On Craftsmanship You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Creative Constructors, every project gets personal attention from experienced professionals. 
                We don't just manage projects—we roll up our sleeves and do the work ourselves.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From electrical installations to custom carpentry, smart home technology to outdoor living spaces, 
                we bring over 15 years of hands-on experience and meticulous attention to detail to every job. 
                When you hire us, you're getting skilled craftsmen who take genuine pride in their work.
              </p>
              <Link
                href="/about"
                className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="order-first md:order-last">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/pic-of-me.png"
                  alt="Jeremy McKinney cutting angle iron - professional craftsmanship at Creative Constructors"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Shield Promotion */}
      <section className="py-16 px-4 bg-gradient-to-br from-navy via-royal-blue to-navy text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-4 py-2 mb-4">
                <span className="text-orange font-bold text-sm">🛡️ NEW PROGRAM</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Introducing <span className="text-orange">Home Shield</span>
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Your home deserves year-round protection. Get quarterly expert inspections, priority service, 
                and direct access to our team—all for one predictable monthly price.
              </p>
              <ul className="space-y-3 mb-8 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-orange text-2xl">✓</span>
                  <span>Quarterly professional home inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-2xl">✓</span>
                  <span>Priority scheduling & 24/7 emergency access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-2xl">✓</span>
                  <span>Direct line to Jeremy for any concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-2xl">✓</span>
                  <span>10% discount on all repairs & upgrades</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/home-shield"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl hover:shadow-2xl"
                >
                  Learn More About Home Shield
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-2">🏠</div>
                  <h3 className="text-3xl font-bold mb-2">Starting at</h3>
                  <div className="text-6xl font-black text-orange mb-2">$249</div>
                  <div className="text-xl text-gray-300">per month</div>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-center text-gray-300">
                    <strong className="text-white">Available exclusively</strong> for University Park & Highland Park residents
                  </p>
                </div>
              </div>
            </div>
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
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-t-4 border-orange hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-navy">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-orange font-semibold group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy">See Our Work in Action</h2>
            <p className="text-lg text-gray-700">
              Real projects, real transformations, real results from across the DFW metroplex
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80">
              <Image
                src="/cc-tech-installing-lighting.png"
                alt="Professional lighting installation project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Lighting Installation</h3>
                  <p className="text-sm text-gray-200">Professional electrical work</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80">
              <Image
                src="/pic-of-me.png"
                alt="Custom metalwork and fabrication"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Custom Craftsmanship</h3>
                  <p className="text-sm text-gray-200">Precision cutting & fabrication</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80">
              <Image
                src="/me-and-ash.png"
                alt="Family-owned business serving DFW"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Family-Owned</h3>
                  <p className="text-sm text-gray-200">Trusted by DFW since 2011</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-navy hover:bg-navy/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2 text-navy">15+ Years Experience</h3>
              <p className="text-gray-700">
                Serving Dallas-Fort Worth since 2011 with proven expertise
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2 text-navy">Licensed & Insured</h3>
              <p className="text-gray-700">
                Fully licensed and insured for your complete peace of mind
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2 text-navy">Fast Response Time</h3>
              <p className="text-gray-700">
                We respond within 2 hours and offer same-day service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-4">
            Get your free consultation and detailed quote today
          </p>
          <p className="text-lg text-gray-200 mb-8">
            ⚡ <strong>We respond within 2 hours</strong> • Same-day service available • No obligation quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-xl hover:shadow-2xl"
            >
              Get Free Quote
            </Link>
            <Link
              href="/book"
              className="inline-block bg-white hover:bg-gray-100 text-royal-blue font-bold py-4 px-8 rounded-lg transition-colors shadow-xl hover:shadow-2xl"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
