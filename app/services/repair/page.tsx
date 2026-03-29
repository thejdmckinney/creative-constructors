import { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const serviceArea = "Dallas-Fort Worth Metroplex";

export const metadata: Metadata = {
  title: `Expert Repair Services in ${serviceArea} | ${seoConfig.business.name}`,
  description: `Fast, reliable repair services in Dallas-Fort Worth. Drywall, fences, doors, windows, plumbing, electrical & more. Licensed technicians. Emergency repairs available 24/7. Call ${seoConfig.business.phone}`,
  keywords: [
    "repair services Dallas",
    "home repair Fort Worth",
    "emergency repairs Dallas",
    "drywall repair",
    "fence repair",
    "door repair",
    "window repair Dallas",
    "handyman repairs",
    "same day repairs",
    "24/7 repair services Dallas TX",
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/services/repair`,
  },
  openGraph: {
    title: `Expert Repair Services in ${serviceArea} | ${seoConfig.business.name}`,
    description: `Professional repair services throughout Dallas-Fort Worth. Fast response, quality repairs, guaranteed satisfaction.`,
    url: `${seoConfig.baseUrl}/services/repair`,
    siteName: seoConfig.business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${seoConfig.baseUrl}/New-cc-logo.png`,
        width: 1200,
        height: 630,
        alt: `${seoConfig.business.name} - Repair Services`,
      },
    ],
  },
};

const emergencyRepairs = [
  "Foundation crack repairs",
  "Storm damage repairs",
  "Water damage restoration",
  "Emergency electrical repairs",
  "Burst pipe repairs",
  "Roof leak repairs",
  "Broken window repairs",
  "Door lock failures",
];

const commonRepairs = [
  {
    category: "Structural Repairs",
    description: "Keep your home structurally sound with expert repairs to critical components.",
    items: [
      "Drywall repair and patching",
      "Stair-step crack foundation repairs",
      "Settlement crack repair",
      "Cosmetic crack repair",
      "Tuck pointing",
      "Stairs & railings repair",
      "Floor squeaks repair",
      "Wood rot repair",
    ],
    urgent: true,
  },
  {
    category: "Exterior Repairs",
    description: "Protect your home's exterior from the elements with professional repair services.",
    items: [
      "Fence repair (wood, chain link, all types)",
      "Gate & fence repair",
      "Deck & railing repair",
      "Soffit repair",
      "Fascia repair",
      "Roof flashing repair",
      "Window screens repair",
      "Window sills repair",
      "Awning repair",
    ],
    urgent: false,
  },
  {
    category: "Interior Repairs",
    description: "From minor fixes to major repairs, we handle all your interior repair needs.",
    items: [
      "Cabinets & handles repair",
      "Door repair",
      "Window repair",
      "Shower doors repair",
      "Flooring repairs (laminate, linoleum, all types)",
      "Grout repair",
      "Ventilation repair",
      "Garage door repair",
    ],
    urgent: false,
  },
  {
    category: "Plumbing Repairs",
    description: "Stop leaks and fix plumbing issues before they cause major damage.",
    items: [
      "Faucet leaks repair",
      "Drain repairs",
      "Pipe repairs",
      "Toilet repairs",
      "Water heater repairs",
      "Garbage disposal repairs",
    ],
    urgent: true,
  },
];

const repairProcess = [
  {
    step: "1",
    title: "Quick Assessment",
    description: "Contact us with your repair issue. We'll ask key questions to understand the problem and urgency.",
    icon: "📞",
  },
  {
    step: "2",
    title: "Fast Response",
    description: "Emergency repairs get same-day service. Standard repairs scheduled within 24-48 hours.",
    icon: "⚡",
  },
  {
    step: "3",
    title: "Expert Diagnosis",
    description: "Our technician inspects the damage, identifies root causes, and provides upfront pricing.",
    icon: "🔍",
  },
  {
    step: "4",
    title: "Quality Repair",
    description: "We fix it right using quality materials and proven techniques. Work is guaranteed.",
    icon: "🛠️",
  },
];

const whyChooseOurRepairs = [
  {
    title: "24/7 Emergency Service",
    description: "When disaster strikes, we're available around the clock. Emergency repairs get priority scheduling with same-day service availability.",
    icon: "🚨",
  },
  {
    title: "Fix It Right, Not Just Fast",
    description: "We don't just patch problems - we identify and fix root causes. Our repairs last because we do it right the first time.",
    icon: "✅",
  },
  {
    title: "Transparent Pricing",
    description: "Know what you'll pay before work begins. No hidden fees, no surprise charges. Our quotes include labor, materials, and cleanup.",
    icon: "💵",
  },
  {
    title: "Workmanship Warranty",
    description: "Every repair comes with our satisfaction guarantee. If our repair fails, we'll come back and fix it at no additional charge.",
    icon: "🛡️",
  },
  {
    title: "Licensed & Insured",
    description: "All technicians are licensed, insured, and background-checked. We carry comprehensive liability insurance for your protection.",
    icon: "📋",
  },
  {
    title: "Clean & Respectful",
    description: "We treat your home with respect. Floor protection, thorough cleanup, and attention to detail are standard on every job.",
    icon: "✨",
  },
];

const serviceAreas = [
  "Dallas", "Fort Worth", "Arlington", "Plano", "Irving", "Garland", 
  "Frisco", "McKinney", "Carrollton", "Denton", "Richardson", "Lewisville",
  "Allen", "Flower Mound", "Grapevine", "Bedford", "Euless", "Hurst",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Home Repair Services",
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
    },
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-15:00"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Repair Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Emergency Repairs",
          "itemListElement": emergencyRepairs.map(repair => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": repair
            }
          }))
        }
      ]
    }
  },
  "areaServed": serviceAreas.map(city => ({
    "@type": "City",
    "name": city
  }))
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Services", path: "/services" },
  { name: "Repair Services", path: "/services/repair" },
]);

const faqSchema = generateFAQSchema([
  {
    question: "Do you offer emergency repair services?",
    answer: "Yes! We offer 24/7 emergency repair services for urgent issues like water leaks, electrical problems, broken locks, and structural damage. Most emergency repairs can be addressed within 2-4 hours."
  },
  {
    question: "How much do repair services typically cost?",
    answer: "Repair costs vary based on the complexity and materials needed. We provide upfront pricing before starting any work. Simple repairs start around $150, while complex repairs may cost more. We'll give you a detailed estimate after inspection."
  },
  {
    question: "Will you identify the root cause or just fix the symptom?",
    answer: "We always diagnose the root cause of problems, not just treat symptoms. For example, if you have a leak, we'll find out why it's leaking and fix the underlying issue to prevent future problems."
  },
  {
    question: "Do repairs come with a warranty?",
    answer: "Yes, all our repair work includes a workmanship warranty. Specific warranty periods depend on the type of repair, but we stand behind our work and will address any issues that arise."
  },
  {
    question: "Can you work with my insurance company for covered repairs?",
    answer: "Absolutely. We have experience working with insurance companies and can provide detailed documentation, photos, and estimates for your claim. We'll work with your adjuster to ensure proper coverage."
  },
]);

export default function RepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="flex-grow">
        <Breadcrumbs items={[
          { name: "Services", path: "/services" },
          { name: "Repair Services", path: "/services/repair" },
        ]} />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-navy via-royal-blue to-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="inline-block bg-orange/20 border border-orange px-4 py-2 rounded-full text-sm font-bold mb-6">
                🚨 24/7 Emergency Repairs Available
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Fast, Reliable Repair Services in {serviceArea}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl">
                When something breaks, you need it fixed fast. Our expert technicians diagnose and repair 
                issues quickly, correctly, and at a fair price.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`tel:${seoConfig.business.phone}`}
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg text-center"
                >
                  Call Now: {seoConfig.business.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg text-center"
                >
                  Request Repair Quote
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold">Same Day</div>
                  <div className="text-sm text-gray-200">Emergency Service</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-gray-200">Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-gray-200">Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold">4.7★</div>
                  <div className="text-sm text-gray-200">Rated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Repairs Banner */}
        <section className="py-12 bg-orange text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Emergency Repairs? We're Here 24/7
              </h2>
              <p className="text-lg mb-6">
                Foundation cracks, storm damage, burst pipes, electrical emergencies - when you need help NOW, we respond fast.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {emergencyRepairs.map((repair, index) => (
                  <span
                    key={index}
                    className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {repair}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Repairs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
                Why Dallas-Fort Worth Trusts Us for Repairs
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Not all repair services are created equal. Here's what sets Creative Constructors apart.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseOurRepairs.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:border-orange hover:shadow-lg transition-all"
                  >
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-navy mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
                How Our Repair Process Works
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Simple, straightforward, and designed to get your repair done right.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {repairProcess.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow h-full border-t-4 border-royal-blue">
                      <div className="text-6xl mb-4 text-center">{step.icon}</div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-center">
                        {step.description}
                      </p>
                    </div>
                    {index < repairProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common Repairs We Handle */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
                Complete Repair Services in Dallas-Fort Worth
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                From minor fixes to major repairs, our licensed technicians handle it all with 
                expertise and care.
              </p>
              
              <div className="space-y-6">
                {commonRepairs.map((category, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-8 border-l-4 border-royal-blue shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="md:w-1/3">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-navy">
                            {category.category}
                          </h3>
                          {category.urgent && (
                            <span className="bg-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                              PRIORITY
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">
                          {category.description}
                        </p>
                      </div>
                      <div className="md:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {category.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start gap-2 bg-white p-3 rounded-lg border border-gray-200"
                            >
                              <svg
                                className="w-5 h-5 text-orange mt-0.5 flex-shrink-0"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Serving All of Dallas-Fort Worth
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fast repair service throughout the metroplex. Emergency repairs available 24/7.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {serviceAreas.map((city, index) => (
                  <span
                    key={index}
                    className="bg-white border-2 border-gray-200 hover:border-orange hover:bg-orange hover:text-white transition-all px-5 py-3 rounded-lg text-gray-700 font-medium shadow-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-lg">
                Don't see your city? <a href={`tel:${seoConfig.business.phone}`} className="text-orange hover:underline font-bold">Call us at {seoConfig.business.phone}</a> - we likely service your area!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
                Common Repair Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    How quickly can you respond to emergency repairs?
                  </h3>
                  <p className="text-gray-700">
                    For true emergencies (foundation damage, water damage, electrical hazards), we prioritize 
                    same-day service. We're available 24/7 for emergency calls and typically arrive within 
                    2-4 hours for critical situations. Standard repairs are usually scheduled within 24-48 hours.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    Do you provide free estimates for repairs?
                  </h3>
                  <p className="text-gray-700">
                    Yes! We provide free, no-obligation estimates for most repair work. For complex issues, 
                    we may need to perform a diagnostic visit (minimal fee applies) to properly assess the 
                    damage and provide accurate pricing. This fee is waived if you proceed with the repair.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    Are your repairs guaranteed?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely. All repairs come with our workmanship warranty. If our repair fails due to 
                    workmanship issues, we'll return and fix it at no additional charge. Specific warranty 
                    terms vary by repair type and will be clearly stated in your quote.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    Can you work with insurance for storm damage repairs?
                  </h3>
                  <p className="text-gray-700">
                    Yes, we frequently work with homeowners insurance for storm damage, water damage, and 
                    other covered repairs. We can provide detailed documentation and work directly with your 
                    insurance adjuster to help streamline the claims process.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    What if the repair reveals additional problems?
                  </h3>
                  <p className="text-gray-700">
                    We believe in transparent communication. If we discover additional issues during the 
                    repair, we'll stop work, explain the situation, and provide pricing for the additional 
                    repairs. You'll always have the option to proceed or decline - no surprise charges.
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
                Don't Let Repairs Wait - Get It Fixed Today
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Small problems become big problems when ignored. Contact us now for fast, 
                professional repairs you can count on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={`tel:${seoConfig.business.phone}`}
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg"
                >
                  Call for Emergency Service
                </a>
                <Link
                  href="/contact"
                  className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg"
                >
                  Schedule Repair Online
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-orange text-xl">✓</span>
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange text-xl">✓</span>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange text-xl">✓</span>
                  <span>Workmanship Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange text-xl">✓</span>
                  <span>Fair, Upfront Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services - Internal Linking */}
        <RelatedServices category="repair" />
      </main>
    </>
  );
}
