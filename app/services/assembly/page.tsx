import { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const serviceArea = "Dallas-Fort Worth Metroplex";

export const metadata: Metadata = {
  title: `Professional Furniture & Equipment Assembly in ${serviceArea} | ${seoConfig.business.name}`,
  description: `Expert assembly services in Dallas-Fort Worth. Furniture, fitness equipment, outdoor gear, office furniture & more. Fast, reliable assembly. Call ${seoConfig.business.phone}`,
  keywords: [
    "furniture assembly Dallas",
    "IKEA assembly Fort Worth",
    "fitness equipment assembly",
    "office furniture assembly Dallas",
    "outdoor furniture assembly",
    "professional assembly services",
    "furniture installer Dallas TX",
    "equipment assembly near me",
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/services/assembly`,
  },
  openGraph: {
    title: `Professional Furniture & Equipment Assembly in ${serviceArea} | ${seoConfig.business.name}`,
    description: `Save time and frustration with expert assembly services throughout Dallas-Fort Worth.`,
    url: `${seoConfig.baseUrl}/services/assembly`,
    siteName: seoConfig.business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${seoConfig.baseUrl}/New-cc-logo.png`,
        width: 1200,
        height: 630,
        alt: `${seoConfig.business.name} - Assembly Services`,
      },
    ],
  },
};

const assemblyServices = [
  {
    category: "Home Furniture",
    icon: "🛋️",
    gradient: "from-blue-500 to-blue-600",
    description: "Living room, bedroom, and dining furniture assembly",
    items: [
      { name: "Bed frame assembly", time: "1-2 hours", complexity: "Medium" },
      { name: "Bookshelf assembly", time: "30-90 min", complexity: "Easy" },
      { name: "Chair assembly", time: "15-30 min", complexity: "Easy" },
      { name: "Dresser assembly", time: "1-2 hours", complexity: "Medium" },
      { name: "Entertainment center assembly", time: "2-3 hours", complexity: "Complex" },
      { name: "Nightstand assembly", time: "30-45 min", complexity: "Easy" },
      { name: "Table assembly", time: "45-90 min", complexity: "Medium" },
    ],
  },
  {
    category: "Outdoor & Recreation",
    icon: "🏕️",
    gradient: "from-green-500 to-green-600",
    description: "Outdoor furniture, playground, and recreational equipment",
    items: [
      { name: "Gazebo assembly", time: "4-6 hours", complexity: "Complex" },
      { name: "Outdoor furniture assembly", time: "1-3 hours", complexity: "Medium" },
      { name: "Patio furniture assembly", time: "1-2 hours", complexity: "Medium" },
      { name: "Pergola assembly", time: "6-8 hours", complexity: "Complex" },
      { name: "Playset assembly", time: "6-10 hours", complexity: "Complex" },
      { name: "Trampoline assembly", time: "2-3 hours", complexity: "Medium" },
    ],
  },
  {
    category: "Fitness Equipment",
    icon: "💪",
    gradient: "from-orange-500 to-orange-600",
    description: "Exercise machines and home gym equipment",
    items: [
      { name: "Elliptical assembly", time: "2-3 hours", complexity: "Complex" },
      { name: "Exercise bike assembly", time: "1-2 hours", complexity: "Medium" },
      { name: "Treadmill assembly", time: "2-4 hours", complexity: "Complex" },
      { name: "Weight bench assembly", time: "1-2 hours", complexity: "Medium" },
    ],
  },
  {
    category: "Office Furniture",
    icon: "💼",
    gradient: "from-purple-500 to-purple-600",
    description: "Desks, cabinets, and office storage solutions",
    items: [
      { name: "Desk assembly", time: "1-2 hours", complexity: "Medium" },
      { name: "Filing cabinet assembly", time: "30-60 min", complexity: "Easy" },
      { name: "Office chair assembly", time: "15-30 min", complexity: "Easy" },
    ],
  },
];

const whyChooseAssembly = [
  {
    icon: "⏱️",
    title: "Save Your Time",
    description: "Why spend 3+ hours struggling with instructions when our experts can do it in half the time? We've assembled thousands of items and know every trick.",
  },
  {
    icon: "🔧",
    title: "Professional Tools",
    description: "We bring all the right tools for the job. No more stripped screws, missing parts, or improvised solutions. Just professional-grade equipment and expertise.",
  },
  {
    icon: "✅",
    title: "Done Right, First Time",
    description: "Our technicians have assembled it all. We follow manufacturer specifications precisely and ensure everything is secure, level, and functional.",
  },
  {
    icon: "🛡️",
    title: "Damage Prevention",
    description: "We protect your floors, walls, and new furniture during assembly. Our careful approach prevents the scratches and dents that often happen during DIY assembly.",
  },
  {
    icon: "📦",
    title: "Box Cleanup Included",
    description: "We'll haul away all the packaging, boxes, and assembly debris. When we're done, you just enjoy your new furniture - no cleanup required.",
  },
  {
    icon: "💯",
    title: "Satisfaction Guaranteed",
    description: "If you're not completely satisfied with our assembly work, we'll make it right. We stand behind every piece we assemble with our quality guarantee.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Contact Us",
    description: "Tell us what you need assembled. Send photos of the box or product name, and we'll provide a quick estimate.",
    icon: "📞",
  },
  {
    step: 2,
    title: "Schedule Service",
    description: "Choose a time that works for you. We offer flexible scheduling including evenings and weekends.",
    icon: "📅",
  },
  {
    step: 3,
    title: "We Assemble",
    description: "Our experienced technician arrives with all tools needed. We assemble your items quickly and professionally.",
    icon: "🔨",
  },
  {
    step: 4,
    title: "Enjoy Your Items",
    description: "We clean up all packaging and debris. Your furniture is ready to use immediately - no stress, no mess.",
    icon: "✨",
  },
];

const pricingGuide = [
  {
    complexity: "Simple Items",
    badge: "EASY",
    badgeColor: "bg-green-500",
    price: "$75-$150",
    examples: ["Chairs", "Nightstands", "Small bookcases", "Office chairs", "Filing cabinets"],
    time: "15-60 minutes",
  },
  {
    complexity: "Medium Items",
    badge: "MEDIUM",
    badgeColor: "bg-blue-500",
    price: "$150-$350",
    examples: ["Bed frames", "Dressers", "Desks", "Dining tables", "Exercise bikes", "Outdoor furniture"],
    time: "1-3 hours",
  },
  {
    complexity: "Complex Items",
    badge: "COMPLEX",
    badgeColor: "bg-orange-500",
    price: "$350-$800+",
    examples: ["Entertainment centers", "Treadmills", "Ellipticals", "Playsets", "Gazebos", "Pergolas"],
    time: "3-10 hours",
  },
];

const popularBrands = [
  "IKEA", "Wayfair", "Ashley Furniture", "Amazon Basics", "Costco", "West Elm",
  "Pottery Barn", "Target", "Walmart", "NordicTrack", "Peloton", "Bowflex",
  "ProForm", "Lifetime", "Backyard Discovery", "Step2", "KidKraft",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Furniture and Equipment Assembly Services",
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
  { name: "Assembly Services", path: "/services/assembly" },
]);

const faqSchema = generateFAQSchema([
  {
    question: "How much does furniture assembly cost?",
    answer: "Assembly costs depend on item complexity. Simple items (chairs, nightstands) run $75-$150 and take 15-60 minutes. Medium items (bed frames, desks) cost $150-$350 and take 1-3 hours. Complex items (playsets, treadmills) range from $350-$800+ and take 3-10 hours. We provide upfront quotes."
  },
  {
    question: "Do I need to provide tools?",
    answer: "No! We bring all professional-grade tools needed for assembly. You don't need to provide anything - we even bring extra hardware in case pieces are missing from your package."
  },
  {
    question: "How long does assembly typically take?",
    answer: "It varies by item. A simple bookshelf takes 30-60 minutes. A bed frame takes 1-2 hours. A playset can take 6-10 hours. We're typically 2-3x faster than DIY assembly because we do this professionally every day."
  },
  {
    question: "What if parts are missing or damaged?",
    answer: "We'll identify any missing or damaged parts during assembly and help you contact the manufacturer for replacements. We can often improvise temporary solutions or return to complete assembly once replacement parts arrive."
  },
  {
    question: "Will you remove all the packaging?",
    answer: "Yes! Box cleanup is included in our service. We'll break down all boxes, bag up packaging materials, and haul everything away. When we leave, you'll just see your beautifully assembled furniture - no mess!"
  },
]);

export default function AssemblyPage() {
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
          { name: "Assembly Services", path: "/services/assembly" },
        ]} />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-royal-blue via-navy to-royal-blue text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-orange px-6 py-2 rounded-full text-sm font-bold mb-6">
                🔧 NO STRESS, NO FRUSTRATION, JUST RESULTS
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional Assembly Services
              </h1>
              <p className="text-2xl mb-4 text-gray-100">
                From IKEA furniture to playsets - we assemble it all quickly and correctly
              </p>
              <p className="text-lg mb-8 text-gray-200">
                Serving {serviceArea} with fast, reliable assembly services
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg"
                >
                  Get Free Estimate
                </Link>
                <a
                  href={`tel:${seoConfig.business.phone}`}
                  className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-10 rounded-lg transition-colors text-lg"
                >
                  {seoConfig.business.phone}
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">2,500+</div>
                  <div className="text-sm text-gray-200">Items Assembled</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">Same Day</div>
                  <div className="text-sm text-gray-200">Service Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">4.7★</div>
                  <div className="text-sm text-gray-200">Customer Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-gray-200">Satisfaction Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assembly Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-navy mb-4">
                  What We Assemble
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  If it comes in a box with instructions, we can assemble it. Here are our most popular services.
                </p>
              </div>

              <div className="space-y-8">
                {assemblyServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-orange transition-all"
                  >
                    <div className="md:flex">
                      <div className={`md:w-1/3 bg-gradient-to-br ${service.gradient} text-white p-8 flex flex-col justify-center`}>
                        <div className="text-6xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{service.category}</h3>
                        <p className="text-gray-100">{service.description}</p>
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="grid gap-4">
                          {service.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-orange hover:shadow-md transition-all"
                            >
                              <div className="flex items-center gap-3 flex-1">
                                <svg
                                  className="w-5 h-5 text-orange flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="font-semibold text-navy">{item.name}</span>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <span className="text-gray-600 hidden sm:block">⏱️ {item.time}</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                  item.complexity === "Easy" ? "bg-green-100 text-green-700" :
                                  item.complexity === "Medium" ? "bg-blue-100 text-blue-700" :
                                  "bg-orange-100 text-orange-700"
                                }`}>
                                  {item.complexity}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Don't see what you need? We assemble almost anything!</p>
                <Link
                  href="/contact"
                  className="inline-block text-orange hover:text-orange/80 font-bold underline"
                >
                  Ask about your specific item →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Assembly Service */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-navy mb-4">
                  Why Choose Creative Constructors for Assembly?
                </h2>
                <p className="text-xl text-gray-600">
                  Skip the frustration and enjoy your new furniture the same day
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseAssembly.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange"
                  >
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-navy mb-4">
                  How Assembly Service Works
                </h2>
                <p className="text-xl text-gray-600">
                  Simple, straightforward process from quote to completion
                </p>
              </div>

              <div className="relative">
                {/* Connection line for desktop */}
                <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-royal-blue via-orange to-royal-blue" style={{ top: '80px' }}></div>
                
                <div className="grid md:grid-cols-4 gap-8 relative">
                  {howItWorks.map((step, index) => (
                    <div key={index} className="text-center relative">
                      <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-royal-blue to-navy text-white rounded-full text-5xl mb-6 shadow-lg relative z-10 border-4 border-white">
                        {step.icon}
                      </div>
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-20">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-16 bg-gradient-to-br from-navy to-royal-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Assembly Service Pricing Guide
                </h2>
                <p className="text-xl text-gray-200">
                  Transparent pricing based on item complexity - no surprises
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {pricingGuide.map((tier, index) => (
                  <div
                    key={index}
                    className="bg-white text-navy rounded-xl p-8 shadow-xl hover:scale-105 transition-transform"
                  >
                    <div className={`inline-block ${tier.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                      {tier.badge}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{tier.complexity}</h3>
                    <div className="text-3xl font-bold text-orange mb-4">{tier.price}</div>
                    <div className="text-sm text-gray-600 mb-6">⏱️ Typical time: {tier.time}</div>
                    <div className="border-t border-gray-200 pt-6">
                      <div className="font-bold text-sm mb-3 text-gray-700">EXAMPLES:</div>
                      <ul className="space-y-2">
                        {tier.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8 text-gray-200">
                <p className="mb-2">✨ All prices include assembly, cleanup, and box removal</p>
                <p>📦 Multiple items? Ask about our package discounts!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Brands */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy mb-4">
                We Assemble All Major Brands
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From big-box retailers to specialty furniture stores - we've assembled them all
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {popularBrands.map((brand, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-orange hover:text-white text-gray-700 px-6 py-3 rounded-full font-semibold transition-colors cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-gray-600">
                And many more! If you bought it, we can assemble it.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-orange to-orange/90 rounded-2xl shadow-2xl p-12 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Skip the Assembly Headache?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Get a fast, free estimate for your assembly project. Most items assembled same-day or next-day!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-white hover:bg-gray-100 text-orange font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg"
                  >
                    Request Free Estimate
                  </Link>
                  <a
                    href={`tel:${seoConfig.business.phone}`}
                    className="inline-block bg-navy hover:bg-navy/90 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg"
                  >
                    Call {seoConfig.business.phone}
                  </a>
                </div>
                <p className="mt-8 text-white/80 text-sm">
                  📍 Serving Dallas, Fort Worth, Plano, Frisco, Arlington, Irving, and all DFW suburbs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services - Internal Linking */}
        <RelatedServices category="assembly" />
      </main>
    </>
  );
}
