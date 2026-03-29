import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/seo.config";

const serviceArea = "Dallas-Fort Worth Metroplex";

export const metadata: Metadata = {
  title: `Professional Installation Services in ${serviceArea} | ${seoConfig.business.name}`,
  description: `Expert installation services in Dallas-Fort Worth. Appliances, doors, windows, lighting, garage systems, shelving & more. Licensed & insured. Same-day service available. Call ${seoConfig.business.phone}`,
  keywords: [
    "installation services Dallas",
    "installation services Fort Worth",
    "appliance installation Dallas",
    "door installation Fort Worth",
    "window installation Dallas",
    "garage door installation",
    "shelving installation",
    "professional installers Dallas TX",
    "home installation services",
    "residential installation",
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/services/installation`,
  },
  openGraph: {
    title: `Professional Installation Services in ${serviceArea} | ${seoConfig.business.name}`,
    description: `Expert installation services throughout Dallas-Fort Worth. Quality workmanship, licensed professionals, satisfaction guaranteed.`,
    url: `${seoConfig.baseUrl}/services/installation`,
    siteName: seoConfig.business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${seoConfig.baseUrl}/New-cc-logo.png`,
        width: 1200,
        height: 630,
        alt: `${seoConfig.business.name} - Installation Services`,
      },
    ],
  },
};

const installationServices = [
  {
    category: "Appliances & Kitchen",
    items: [
      "Appliance installation (dishwashers, ranges, refrigerators)",
      "Garbage disposal installation",
      "Faucet installation",
      "Under cabinet lighting",
    ],
    icon: "🏠",
  },
  {
    category: "Doors & Windows",
    items: [
      "Door installation (interior & exterior)",
      "Bifold doors & windows",
      "Deadbolts & locks",
      "Child proofing installations",
    ],
    icon: "🚪",
  },
  {
    category: "Lighting & Electrical",
    items: [
      "Recessed lighting installation",
      "Chandelier installation",
      "Ceiling fan installation",
      "Smart lighting systems",
      "Landscape lighting",
      "Garage lighting",
    ],
    icon: "💡",
  },
  {
    category: "Storage & Organization",
    items: [
      "Custom shelving installation",
      "Closet systems",
      "Garage storage systems",
      "Custom built-ins",
      "Bicycle storage solutions",
    ],
    icon: "📦",
  },
  {
    category: "Outdoor & Exterior",
    items: [
      "Deck installation",
      "Gate installation",
      "Awning installation",
      "Exterior shades & shutters",
    ],
    icon: "🌳",
  },
  {
    category: "Home Finishing",
    items: [
      "Baseboards installation",
      "Crown molding installation",
      "Blinds & curtains",
      "Curtain rods",
      "Roman shades",
    ],
    icon: "🎨",
  },
  {
    category: "Bathroom & Plumbing",
    items: [
      "Toilet installation",
      "Shower valve replacements",
      "Attic ladder installation",
    ],
    icon: "🚿",
  },
  {
    category: "Technology & Entertainment",
    items: [
      "TV mounts installation",
      "Garage door openers",
      "Smart home device installation",
    ],
    icon: "📺",
  },
];

const whyChooseUs = [
  {
    title: "Licensed & Insured Professionals",
    description: "Every installer is fully licensed, insured, and background-checked. We carry comprehensive liability insurance for your complete peace of mind.",
    icon: "✅",
  },
  {
    title: "Same-Day Service Available",
    description: "Need it done today? We offer same-day installation services throughout Dallas-Fort Worth. Call before noon for same-day availability.",
    icon: "⚡",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy, we'll make it right - no questions asked.",
    icon: "⭐",
  },
  {
    title: "Upfront Flat-Rate Pricing",
    description: "No surprises, no hidden fees. You'll know exactly what you're paying before we start. Our quotes include all labor, materials, and cleanup.",
    icon: "💰",
  },
];

const serviceAreas = [
  "Dallas", "Fort Worth", "Arlington", "Plano", "Irving", "Garland", 
  "Frisco", "McKinney", "Carrollton", "Denton", "Richardson", "Lewisville",
  "Allen", "Flower Mound", "Grapevine", "Bedford", "Euless", "Hurst",
  "Coppell", "The Colony", "Southlake", "Keller", "Wylie", "DeSoto"
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Installation Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": seoConfig.business.name,
    "image": `${seoConfig.baseUrl}/New-cc-logo.png`,
    "@id": seoConfig.baseUrl,
    "url": seoConfig.baseUrl,
    "telephone": seoConfig.business.phone,
    "email": seoConfig.business.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": seoConfig.business.serviceArea.geo.geoMidpoint.latitude,
      "longitude": seoConfig.business.serviceArea.geo.geoMidpoint.longitude
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": seoConfig.business.serviceArea.geo.geoMidpoint.latitude,
        "longitude": seoConfig.business.serviceArea.geo.geoMidpoint.longitude
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "127"
    }
  },
  "areaServed": serviceAreas.map(city => ({
    "@type": "City",
    "name": city,
    "containedIn": {
      "@type": "State",
      "name": "Texas"
    }
  })),
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD"
  }
};

export default function InstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Installation Services in {serviceArea}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Expert installers for your home or business. Licensed, insured, and ready to serve you today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/contact"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Free Quote
                </Link>
                <a
                  href={`tel:${seoConfig.business.phone}`}
                  className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Call {seoConfig.business.phone}
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-orange text-xl">✓</span>
                  <span>Same-Day Service Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange text-xl">✓</span>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange text-xl">✓</span>
                  <span>100% Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-navy">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-navy">5,000+</div>
                <div className="text-gray-600">Jobs Completed</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-navy">4.7★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-navy">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Our Installation Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                Expert Installation Services You Can Trust
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl text-center mb-8">
                  When it comes to home installations, proper setup is everything. A poorly installed fixture, 
                  appliance, or system can lead to costly repairs, safety hazards, and endless frustration. That's 
                  why Dallas-Fort Worth homeowners trust Creative Constructors for professional installation services 
                  that are done right the first time.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-navy mb-4">Why Professional Installation Matters</h3>
                    <p>
                      DIY installations might seem like a cost-saving option, but one mistake can lead to expensive 
                      damage, voided warranties, or even safety issues. Our licensed installers bring years of 
                      experience and the right tools to ensure your installation is safe, functional, and built to last.
                    </p>
                    <p className="mt-4">
                      From complex electrical fixtures to heavy appliances, we handle the hard work so you can enjoy 
                      peace of mind knowing it's installed correctly.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-navy mb-4">Our Installation Advantage</h3>
                    <p>
                      We don't just install - we ensure everything works perfectly before we leave. Every installation 
                      includes proper assembly, secure mounting, level alignment, electrical or plumbing connections 
                      (when applicable), testing for functionality, and complete cleanup.
                    </p>
                    <p className="mt-4">
                      Plus, we respect your home and your time. Our installers arrive on schedule, work efficiently, 
                      protect your floors and walls, and leave your space cleaner than we found it.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange/10 to-royal-blue/10 border-l-4 border-orange p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold text-navy mb-4">Most Popular Installation Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-bold text-navy mb-2">Home Essentials:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Smart home devices and automation systems</li>
                        <li>• TV mounting and entertainment centers</li>
                        <li>• Custom shelving and storage solutions</li>
                        <li>• Ceiling fans and lighting fixtures</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-navy mb-2">Major Installations:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Kitchen and bathroom appliances</li>
                        <li>• Garage door openers and systems</li>
                        <li>• Door and window installations</li>
                        <li>• Deck construction and outdoor structures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12 bg-navy text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-xl mb-6">
                    Whether you've already purchased your items or need help selecting the right products, 
                    we're here to provide expert installation services that exceed your expectations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                      Request Free Quote
                    </Link>
                    <a
                      href={`tel:${seoConfig.business.phone}`}
                      className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                      Call {seoConfig.business.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
                Why Dallas-Fort Worth Homeowners Choose Creative Constructors
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseUs.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-royal-blue mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Installation Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
                Complete Installation Services in Dallas-Fort Worth
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                From appliances to lighting, doors to decks - we install it all. Professional installation 
                with guaranteed results throughout the {serviceArea}.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {installationServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all p-8 border-l-4 border-orange"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-navy">
                        {service.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-orange mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-br from-royal-blue to-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Our Simple Installation Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                  <p className="text-gray-200">
                    Call or submit a quote request. We respond within 30 minutes during business hours.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Get Quote</h3>
                  <p className="text-gray-200">
                    Receive upfront, flat-rate pricing with no hidden fees. Know exactly what you'll pay.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Schedule</h3>
                  <p className="text-gray-200">
                    Choose a time that works for you. Same-day and emergency services available.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-3">Done Right</h3>
                  <p className="text-gray-200">
                    Expert installation with complete cleanup. We don't leave until you're 100% satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Proudly Serving the Entire Dallas-Fort Worth Metroplex
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Professional installation services throughout DFW and surrounding areas
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {serviceAreas.map((city, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-orange hover:text-white transition-colors px-4 py-2 rounded-full text-gray-700 font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">
                Don't see your city? <a href={`tel:${seoConfig.business.phone}`} className="text-orange hover:underline font-bold">Call us</a> - we likely service your area!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    Do you offer same-day installation services?
                  </h3>
                  <p className="text-gray-700">
                    Yes! We offer same-day installation services throughout Dallas-Fort Worth. Call us before noon 
                    to check availability for same-day service. For emergency installations, we're available 24/7.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    Are your installers licensed and insured?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely. All our installers are fully licensed, insured, and background-checked. We carry 
                    comprehensive liability insurance to protect you and your property. You can request proof of 
                    insurance at any time.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    Do you provide the materials or do I need to purchase them?
                  </h3>
                  <p className="text-gray-700">
                    We can do either! We're happy to source all materials for your installation project, or you can 
                    purchase them yourself. If you already have the materials, we'll inspect them before installation 
                    to ensure they're suitable. Our quotes will clearly state what's included.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    What's included in your installation pricing?
                  </h3>
                  <p className="text-gray-700">
                    Our flat-rate pricing includes all labor, necessary hardware and materials (unless you're 
                    providing them), complete cleanup, and removal of old fixtures when applicable. No hidden 
                    fees - you'll know exactly what you're paying upfront.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    How long does a typical installation take?
                  </h3>
                  <p className="text-gray-700">
                    Installation time varies by project. Simple installations like TV mounts or curtain rods may 
                    take 1-2 hours. More complex projects like garage door openers or custom shelving systems may 
                    take 4-8 hours. We'll give you an accurate time estimate with your quote.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    Do you warranty your installation work?
                  </h3>
                  <p className="text-gray-700">
                    Yes! All installation work comes with our workmanship warranty. If there's any issue with our 
                    installation (not manufacturer defects), we'll return and fix it at no charge. Specific warranty 
                    terms vary by service and will be included in your quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-navy to-royal-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready for Professional Installation?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Join thousands of satisfied Dallas-Fort Worth homeowners who trust Creative Constructors 
                for expert installation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/contact"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Request Free Quote
                </Link>
                <a
                  href={`tel:${seoConfig.business.phone}`}
                  className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Call Now: {seoConfig.business.phone}
                </a>
              </div>
              <p className="text-gray-200 text-lg">
                ⏰ <strong>Same-Day Service Available</strong> | 💯 <strong>100% Satisfaction Guaranteed</strong> | ⚡ <strong>Fast Response Times</strong>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
