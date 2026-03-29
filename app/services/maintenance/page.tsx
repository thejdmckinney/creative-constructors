import { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const serviceArea = "Dallas-Fort Worth Metroplex";

export const metadata: Metadata = {
  title: `Professional Home Maintenance Services in ${serviceArea} | ${seoConfig.business.name}`,
  description: `Preventive home maintenance in Dallas-Fort Worth. HVAC, plumbing, carpentry, deck care, waterproofing & more. Protect your investment with regular maintenance. Call ${seoConfig.business.phone}`,
  keywords: [
    "home maintenance Dallas",
    "preventive maintenance Fort Worth",
    "deck maintenance Dallas",
    "HVAC maintenance",
    "gutter cleaning Dallas",
    "home upkeep services",
    "seasonal maintenance",
    "property maintenance Dallas TX",
    "home care services",
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/services/maintenance`,
  },
  openGraph: {
    title: `Professional Home Maintenance Services in ${serviceArea} | ${seoConfig.business.name}`,
    description: `Keep your home in peak condition with expert maintenance services throughout Dallas-Fort Worth.`,
    url: `${seoConfig.baseUrl}/services/maintenance`,
    siteName: seoConfig.business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${seoConfig.baseUrl}/New-cc-logo.png`,
        width: 1200,
        height: 630,
        alt: `${seoConfig.business.name} - Maintenance Services`,
      },
    ],
  },
};

const maintenanceCategories = [
  {
    icon: "🏠",
    title: "Interior Maintenance",
    color: "from-blue-500 to-blue-600",
    services: [
      "Attic restoration and cleaning",
      "Bathroom plumbing maintenance",
      "Cabinet refacing and refinishing",
      "Carpentry touch-ups and repairs",
      "Ceiling painting and touch-ups",
      "Door latch adjusting and lubrication",
      "Door painting and refinishing",
      "Floor polishing and care",
      "Shower caulking and sealing",
      "Weather stripping replacement",
      "Window caulking and sealing",
      "Wood door sealing and treatment",
    ],
  },
  {
    icon: "🌳",
    title: "Exterior Maintenance",
    color: "from-green-500 to-green-600",
    services: [
      "Deck cleaning and washing",
      "Deck refinishing and restoration",
      "Deck staining and sealing",
      "Deck waterproofing",
      "Wood fence staining",
      "Wood finishing and protection",
      "Gutter cleaning and inspection",
      "Drain cleaning and clearing",
      "Dryer vent cleaning",
      "Waterproofing applications",
    ],
  },
  {
    icon: "⚡",
    title: "Systems Maintenance",
    color: "from-orange-500 to-orange-600",
    services: [
      "Breaker panel inspection and replacement",
      "HVAC filter changes",
      "Water heater flushing",
      "Smoke detector testing",
      "Carbon monoxide detector checks",
      "Electrical outlet testing",
      "Plumbing leak inspection",
      "Faucet maintenance and cleaning",
    ],
  },
  {
    icon: "🛡️",
    title: "Preventive Care",
    color: "from-purple-500 to-purple-600",
    services: [
      "Seasonal home inspections",
      "Caulking inspection and renewal",
      "Paint touch-up services",
      "Seal and weatherproof checks",
      "Safety device testing",
      "Exterior surface treatment",
      "Wood rot prevention",
      "Moisture barrier maintenance",
    ],
  },
];

const maintenancePlans = [
  {
    name: "Essential Care",
    price: "From $199",
    frequency: "Quarterly",
    icon: "🔧",
    features: [
      "Seasonal home inspection",
      "Gutter cleaning (2x per year)",
      "HVAC filter check",
      "Dryer vent cleaning",
      "Smoke/CO detector testing",
      "Minor caulking touch-ups",
      "Priority scheduling",
      "10% discount on repairs",
    ],
    popular: false,
  },
  {
    name: "Complete Care",
    price: "From $399",
    frequency: "Quarterly",
    icon: "⭐",
    features: [
      "Everything in Essential Care",
      "Deck cleaning and staining",
      "Wood treatment and sealing",
      "Plumbing inspection",
      "Electrical safety check",
      "Weather stripping replacement",
      "Preventive maintenance report",
      "15% discount on repairs",
      "Priority emergency service",
    ],
    popular: true,
  },
  {
    name: "Premium Care",
    price: "From $599",
    frequency: "Quarterly",
    icon: "💎",
    features: [
      "Everything in Complete Care",
      "Full exterior washing",
      "Interior touch-up painting",
      "Advanced waterproofing",
      "Quarterly home report",
      "Dedicated service manager",
      "24/7 emergency priority",
      "20% discount on all repairs",
      "Annual deep maintenance",
    ],
    popular: false,
  },
];

const whyMaintenance = [
  {
    stat: "80%",
    label: "Of Major Repairs",
    description: "Can be prevented with regular maintenance",
  },
  {
    stat: "$1,000s",
    label: "Saved Annually",
    description: "By catching small issues before they become major problems",
  },
  {
    stat: "2x Longer",
    label: "System Lifespan",
    description: "Proper maintenance doubles the life of your home systems",
  },
  {
    stat: "30%",
    label: "Higher Value",
    description: "Well-maintained homes sell faster and for more money",
  },
];

const seasonalTips = [
  {
    season: "Spring",
    icon: "🌸",
    color: "bg-green-50 border-green-200",
    tasks: [
      "Clean gutters and downspouts",
      "Inspect and repair deck/fence",
      "Check AC before summer heat",
      "Power wash exterior surfaces",
      "Inspect roof for winter damage",
      "Test sprinkler systems",
    ],
  },
  {
    season: "Summer",
    icon: "☀️",
    color: "bg-yellow-50 border-yellow-200",
    tasks: [
      "Inspect and seal driveway/walkways",
      "Check window/door caulking",
      "Clean dryer vents",
      "Inspect attic ventilation",
      "Service outdoor equipment",
      "Check exterior paint condition",
    ],
  },
  {
    season: "Fall",
    icon: "🍂",
    color: "bg-orange-50 border-orange-200",
    tasks: [
      "Final gutter cleaning before winter",
      "Test heating system",
      "Weatherstrip doors and windows",
      "Drain outdoor faucets",
      "Inspect and clean fireplace",
      "Check insulation in attic",
    ],
  },
  {
    season: "Winter",
    icon: "❄️",
    color: "bg-blue-50 border-blue-200",
    tasks: [
      "Check for drafts and seal",
      "Inspect plumbing for leaks",
      "Clean range hood filters",
      "Test smoke/CO detectors",
      "Reverse ceiling fan direction",
      "Check for ice dam formation",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Home Maintenance Services",
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
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "127"
    }
  }
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Services", path: "/services" },
  { name: "Maintenance Services", path: "/services/maintenance" },
]);

const faqSchema = generateFAQSchema([
  {
    question: "How often should I schedule home maintenance?",
    answer: "We recommend quarterly maintenance visits (every 3 months) for comprehensive home care. Some tasks like gutter cleaning should be done twice yearly, while HVAC filter changes should be monthly. Our maintenance plans are customized to your home's specific needs."
  },
  {
    question: "What's included in a maintenance plan?",
    answer: "Our maintenance plans include seasonal inspections, gutter cleaning, HVAC filter checks, dryer vent cleaning, smoke detector testing, minor caulking, and priority scheduling. Higher tier plans include deck staining, plumbing inspections, and more comprehensive services."
  },
  {
    question: "Can maintenance really prevent major repairs?",
    answer: "Absolutely! Studies show that 80% of major home repairs can be prevented with regular maintenance. For example, annual gutter cleaning prevents water damage that can cost thousands to repair. Regular HVAC maintenance doubles the lifespan of your system."
  },
  {
    question: "Do I need to be home during maintenance visits?",
    answer: "Not necessarily. Many of our regular maintenance customers provide access information, and we complete the work while they're at work. We'll provide a detailed report of all work completed and any issues found."
  },
  {
    question: "What if you find something that needs repair during maintenance?",
    answer: "We'll document any issues found and provide recommendations with pricing. Maintenance plan members receive discounts on repair services (10-20% depending on plan). You decide what to address immediately and what can wait."
  },
]);

export default function MaintenancePage() {
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
          { name: "Maintenance Services", path: "/services/maintenance" },
        ]} />
        
        {/* Hero Section */}
        <section className="relative bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-royal-blue/10 text-royal-blue px-4 py-2 rounded-full text-sm font-bold mb-4">
                    💡 Prevention is Better Than Repair
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                    Keep Your Home in Peak Condition with Professional Maintenance
                  </h1>
                  <p className="text-xl text-gray-700 mb-8">
                    Regular maintenance prevents costly repairs, extends the life of your home systems, 
                    and protects your biggest investment. Serving homeowners throughout {serviceArea}.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center"
                    >
                      Get Maintenance Quote
                    </Link>
                    <a
                      href={`tel:${seoConfig.business.phone}`}
                      className="inline-block bg-navy hover:bg-navy/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center"
                    >
                      {seoConfig.business.phone}
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {whyMaintenance.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-royal-blue to-navy text-white rounded-lg p-6 text-center"
                    >
                      <div className="text-4xl font-bold mb-2">{item.stat}</div>
                      <div className="text-sm font-bold mb-2 text-orange">{item.label}</div>
                      <div className="text-xs text-gray-200">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Plans */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  Maintenance Plans for Every Home
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose a plan that fits your needs and budget. All plans include priority scheduling 
                  and discounts on additional services.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {maintenancePlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                      plan.popular ? "ring-4 ring-orange scale-105 z-10" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-orange text-white text-center py-2 font-bold text-sm">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="p-8">
                      <div className="text-5xl text-center mb-4">{plan.icon}</div>
                      <h3 className="text-2xl font-bold text-navy text-center mb-2">
                        {plan.name}
                      </h3>
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-orange mb-1">{plan.price}</div>
                        <div className="text-gray-600 text-sm">{plan.frequency}</div>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm">
                            <svg
                              className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className={`block text-center font-bold py-3 px-6 rounded-lg transition-colors ${
                          plan.popular
                            ? "bg-orange hover:bg-orange/90 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-navy"
                        }`}
                      >
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8 text-gray-600">
                <p>Need a custom plan? <Link href="/contact" className="text-orange hover:underline font-bold">Contact us</Link> for personalized maintenance packages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  Comprehensive Home Maintenance Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From routine upkeep to seasonal care, we handle every aspect of home maintenance 
                  so you don't have to.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {maintenanceCategories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border-2 border-gray-100 hover:border-orange transition-all"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} text-white rounded-full text-3xl mb-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">
                      {category.title}
                    </h3>
                    <div className="grid gap-2">
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-center gap-2 text-gray-700 bg-white p-2 rounded"
                        >
                          <svg
                            className="w-4 h-4 text-orange flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Maintenance Guide */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  Your Seasonal Maintenance Guide
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Texas weather can be tough on homes. Stay ahead with our seasonal maintenance checklist.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {seasonalTips.map((season, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-8 border-2 ${season.color}`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-5xl">{season.icon}</div>
                      <h3 className="text-2xl font-bold text-navy">{season.season} Maintenance</h3>
                    </div>
                    <ul className="space-y-3">
                      {season.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-orange mt-0.5 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Schedule Seasonal Maintenance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Regular Maintenance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  The Value of Regular Home Maintenance
                </h2>
                <p className="text-xl text-gray-600">
                  Investing in maintenance today saves you from expensive repairs tomorrow.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    Save Money Long-Term
                  </h3>
                  <p className="text-gray-700">
                    A $200 annual gutter cleaning prevents $5,000+ in water damage repairs. Regular maintenance 
                    catches small issues before they become financial disasters.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Protect Your Investment
                  </h3>
                  <p className="text-gray-700">
                    Your home is likely your largest investment. Proper maintenance preserves its value and 
                    can increase resale value by 10-15%.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                    <span className="text-2xl">⏰</span>
                    Extend System Lifespan
                  </h3>
                  <p className="text-gray-700">
                    Regular HVAC maintenance can double the life of your system. Deck staining adds years before 
                    replacement is needed. Maintenance pays for itself.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                    <span className="text-2xl">😌</span>
                    Peace of Mind
                  </h3>
                  <p className="text-gray-700">
                    Know your home is being cared for by professionals. Avoid emergency breakdowns and the stress 
                    of unexpected repairs during holidays or bad weather.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Protecting Your Home Today
              </h2>
              <p className="text-xl mb-8 text-gray-100">
                Don't wait for problems to develop. Schedule your maintenance service and enjoy the 
                peace of mind that comes with a well-maintained home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg"
                >
                  Schedule Maintenance
                </Link>
                <a
                  href={`tel:${seoConfig.business.phone}`}
                  className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-10 rounded-lg transition-colors text-lg"
                >
                  Call {seoConfig.business.phone}
                </a>
              </div>
              <p className="mt-8 text-gray-200">
                Serving Dallas, Fort Worth, Plano, Frisco, and all surrounding areas
              </p>
            </div>
          </div>
        </section>

        {/* Related Services - Internal Linking */}
        <RelatedServices category="maintenance" />
      </main>
    </>
  );
}
