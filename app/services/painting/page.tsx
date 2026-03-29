import { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const serviceArea = "Dallas-Fort Worth Metroplex";

export const metadata: Metadata = {
  title: `Professional Painting Services in ${serviceArea} | ${seoConfig.business.name}`,
  description: `Expert interior & exterior painting in Dallas-Fort Worth. Cabinet painting, deck staining, ceiling painting & more. Quality finishes, clean work. Call ${seoConfig.business.phone}`,
  keywords: [
    "painting services Dallas",
    "interior painting Fort Worth",
    "exterior painting Dallas",
    "cabinet painting",
    "deck staining Dallas",
    "professional painters Dallas TX",
    "house painting near me",
    "commercial painting Dallas",
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/services/painting`,
  },
  openGraph: {
    title: `Professional Painting Services in ${serviceArea} | ${seoConfig.business.name}`,
    description: `Transform your space with expert painting services throughout Dallas-Fort Worth.`,
    url: `${seoConfig.baseUrl}/services/painting`,
    siteName: seoConfig.business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${seoConfig.baseUrl}/New-cc-logo.png`,
        width: 1200,
        height: 630,
        alt: `${seoConfig.business.name} - Painting Services`,
      },
    ],
  },
};

const paintingServices = [
  {
    name: "Cabinet Painting",
    icon: "🗄️",
    description: "Transform your kitchen or bathroom with professional cabinet refinishing and painting",
    features: ["Color transformation", "Smooth, durable finish", "Hardware reinstallation", "Minimal disruption"],
    beforeAfter: true,
    popular: true,
  },
  {
    name: "Ceiling Painting",
    icon: "⬆️",
    description: "Professional ceiling painting with clean lines and even coverage",
    features: ["Water stain coverage", "Popcorn texture refresh", "Edge protection", "Zero overspray"],
    beforeAfter: false,
    popular: false,
  },
  {
    name: "Deck Staining",
    icon: "🏡",
    description: "Protect and beautify your deck with quality staining and sealing",
    features: ["Weather protection", "UV resistance", "Wood preservation", "Multiple color options"],
    beforeAfter: true,
    popular: true,
  },
  {
    name: "Door Painting",
    icon: "🚪",
    description: "Refresh interior and exterior doors with precision painting",
    features: ["Interior & exterior", "Hardware removal/reinstall", "Smooth finish", "Quick turnaround"],
    beforeAfter: false,
    popular: false,
  },
  {
    name: "Exterior Painting",
    icon: "🏠",
    description: "Boost curb appeal and protect your home with expert exterior painting",
    features: ["Weather-resistant paint", "Surface preparation", "Trim & accent colors", "Power washing included"],
    beforeAfter: true,
    popular: true,
  },
  {
    name: "Interior Painting",
    icon: "🎨",
    description: "Transform any room with professional interior painting services",
    features: ["Multiple rooms or whole home", "Color consultation", "Furniture protection", "Same-day cleanup"],
    beforeAfter: true,
    popular: true,
  },
  {
    name: "Touch-Up Painting",
    icon: "🖌️",
    description: "Small repairs and touch-ups to keep your paint looking fresh",
    features: ["Color matching", "Patch & paint", "Minor repairs", "Quick service"],
    beforeAfter: false,
    popular: false,
  },
];

const paintingProcess = [
  {
    phase: "Consultation & Quote",
    icon: "📋",
    color: "bg-blue-500",
    steps: [
      "Free in-home consultation",
      "Surface inspection",
      "Color recommendations",
      "Detailed written estimate",
    ],
  },
  {
    phase: "Preparation",
    icon: "🧹",
    color: "bg-purple-500",
    steps: [
      "Furniture protection & moving",
      "Surface cleaning & repair",
      "Taping & masking",
      "Primer application if needed",
    ],
  },
  {
    phase: "Application",
    icon: "🎨",
    color: "bg-orange-500",
    steps: [
      "Professional-grade materials",
      "Multiple coats for coverage",
      "Clean lines & edges",
      "Quality inspection",
    ],
  },
  {
    phase: "Completion",
    icon: "✨",
    color: "bg-green-500",
    steps: [
      "Thorough cleanup",
      "Touch-ups as needed",
      "Furniture returned",
      "Final walkthrough",
    ],
  },
];

const whyChoosePainting = [
  {
    title: "Premium Paint Products",
    icon: "🏆",
    description: "We use only top-tier paints from Sherwin-Williams, Benjamin Moore, and Behr. Quality materials mean better coverage, durability, and a beautiful finish that lasts.",
  },
  {
    title: "Meticulous Preparation",
    icon: "🔍",
    description: "Great paint jobs start with proper prep. We fill holes, sand surfaces, repair damage, and prime correctly. No shortcuts - just professional-quality prep work.",
  },
  {
    title: "Clean, Careful Work",
    icon: "🧤",
    description: "We protect your floors, furniture, and fixtures with drop cloths and plastic. Our painters are neat, respectful, and leave your space cleaner than we found it.",
  },
  {
    title: "Precise Application",
    icon: "✏️",
    description: "Straight lines, smooth finishes, and even coverage. Our experienced painters have the skills and tools to deliver flawless results on every project.",
  },
  {
    title: "Color Expertise",
    icon: "🎨",
    description: "Not sure what color to choose? We offer free color consultation to help you select the perfect shades that complement your space and style.",
  },
  {
    title: "Warranty Backed",
    icon: "🛡️",
    description: "We stand behind our work with a satisfaction guarantee. If you're not completely happy, we'll make it right - no questions asked.",
  },
];

const colorPalettes = [
  {
    mood: "Calm & Serene",
    description: "Perfect for bedrooms and bathrooms",
    colors: [
      { name: "Soft Blue", hex: "#A8DADC" },
      { name: "Sage Green", hex: "#B7C9A8" },
      { name: "Warm Gray", hex: "#D4D4D4" },
      { name: "Cream", hex: "#F8F4E8" },
    ],
  },
  {
    mood: "Warm & Inviting",
    description: "Ideal for living rooms and kitchens",
    colors: [
      { name: "Terracotta", hex: "#E07856" },
      { name: "Warm Beige", hex: "#E8D5C4" },
      { name: "Soft Yellow", hex: "#F9E4A7" },
      { name: "Clay", hex: "#C9A58A" },
    ],
  },
  {
    mood: "Bold & Modern",
    description: "Great for accent walls and statements",
    colors: [
      { name: "Navy Blue", hex: "#1B3A6B" },
      { name: "Forest Green", hex: "#2D5016" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Deep Red", hex: "#8B2635" },
    ],
  },
  {
    mood: "Fresh & Clean",
    description: "Timeless choices for any space",
    colors: [
      { name: "Crisp White", hex: "#FFFFFF" },
      { name: "Off-White", hex: "#F5F5F5" },
      { name: "Light Gray", hex: "#E5E5E5" },
      { name: "Pale Blue", hex: "#E8F4F8" },
    ],
  },
];

const paintingFAQ = [
  {
    question: "How long does a typical painting project take?",
    answer: "Interior rooms typically take 1-2 days including prep and drying time. Whole home interiors take 3-5 days. Exterior painting depends on home size but usually takes 3-7 days. We'll provide a specific timeline in your estimate.",
  },
  {
    question: "Do I need to move my furniture?",
    answer: "No! We'll carefully move furniture away from walls and protect everything with drop cloths. For large items, we'll work around them. We return everything to its original position when finished.",
  },
  {
    question: "What if I don't know what color to choose?",
    answer: "We offer free color consultations! We can show you samples, discuss color psychology, and recommend colors based on your lighting, decor, and personal style. We can also provide sample patches before committing.",
  },
  {
    question: "How long should I wait before using freshly painted spaces?",
    answer: "Paint is typically dry to the touch within a few hours. You can use the space the same day, but we recommend waiting 24 hours before moving furniture back. Full cure time is 2-4 weeks for maximum durability.",
  },
  {
    question: "Do you paint in winter or during rain?",
    answer: "For interior painting, weather doesn't affect us. For exterior painting, we monitor conditions carefully. We avoid painting during rain, extreme cold, or high humidity, but Texas weather usually allows year-round exterior work.",
  },
  {
    question: "How do you ensure clean lines and no paint on trim?",
    answer: "We use premium painter's tape, steady hands, and quality brushes. Our painters are experienced in cutting clean lines. We tape off all trim, fixtures, and edges carefully before painting begins.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Professional Painting Services",
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
  { name: "Painting Services", path: "/services/painting" },
]);

const faqSchema = generateFAQSchema(paintingFAQ);

export default function PaintingPage() {
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
          { name: "Painting Services", path: "/services/painting" },
        ]} />
        
        {/* Hero Section */}
        <section className="relative bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-orange to-royal-blue text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
                  🎨 COLOR YOUR WORLD BEAUTIFUL
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
                  Professional Painting Services
                </h1>
                <p className="text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
                  Transform your home or business with expert painting - from single rooms to full exteriors
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Serving {serviceArea} with quality craftsmanship and stunning results
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg"
                  >
                    Get Free Estimate
                  </Link>
                  <a
                    href={`tel:${seoConfig.business.phone}`}
                    className="inline-block bg-navy hover:bg-navy/90 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg"
                  >
                    {seoConfig.business.phone}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">3,000+</div>
                  <div className="text-sm">Rooms Painted</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">4.7★</div>
                  <div className="text-sm">Customer Rating</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-6 col-span-2 md:col-span-1">
                  <div className="text-3xl font-bold mb-2">Free</div>
                  <div className="text-sm">Color Consult</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Painting Services */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-navy mb-4">
                  Our Painting Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From cabinets to ceilings, interiors to exteriors - we handle all your painting needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {paintingServices.map((service, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border-2 ${
                      service.popular ? "border-orange" : "border-gray-100"
                    }`}
                  >
                    {service.popular && (
                      <div className="inline-block bg-orange text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                        POPULAR
                      </div>
                    )}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-navy mb-2">{service.name}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-700"
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
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    {service.beforeAfter && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-xs text-orange font-bold">✨ DRAMATIC TRANSFORMATION</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Painting Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-navy mb-4">
                  Our Professional Painting Process
                </h2>
                <p className="text-xl text-gray-600">
                  Quality results come from following a proven process from start to finish
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {paintingProcess.map((phase, index) => (
                  <div key={index} className="relative">
                    {index < paintingProcess.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-gray-300 to-gray-400 z-0"></div>
                    )}
                    <div className="relative z-10">
                      <div className={`${phase.color} text-white w-32 h-32 rounded-full flex items-center justify-center text-6xl mx-auto mb-4 shadow-xl`}>
                        {phase.icon}
                      </div>
                      <div className="absolute top-0 right-0 md:right-auto md:left-[105px] bg-navy text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-navy text-center mb-4">
                        {phase.phase}
                      </h3>
                      <ul className="space-y-2">
                        {phase.steps.map((step, stepIndex) => (
                          <li
                            key={stepIndex}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <svg
                              className="w-4 h-4 text-orange mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Painting Services */}
        <section className="py-16 bg-gradient-to-br from-navy to-royal-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Why Choose Creative Constructors for Painting?
                </h2>
                <p className="text-xl text-gray-200">
                  Experience, quality materials, and meticulous attention to detail
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChoosePainting.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                  >
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-200">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Color Inspiration */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-navy mb-4">
                  Color Inspiration & Trends
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Not sure what color to choose? Explore popular palettes and get inspired
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {colorPalettes.map((palette, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border-2 border-gray-100 hover:border-orange transition-all"
                  >
                    <h3 className="text-2xl font-bold text-navy mb-2">{palette.mood}</h3>
                    <p className="text-gray-600 mb-6">{palette.description}</p>
                    <div className="grid grid-cols-4 gap-3">
                      {palette.colors.map((color, colorIndex) => (
                        <div key={colorIndex} className="text-center">
                          <div
                            className="w-full aspect-square rounded-lg shadow-md mb-2 border-2 border-gray-200"
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <div className="text-xs font-semibold text-gray-700">{color.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-700 mb-4">
                  💡 <strong>Free Color Consultation:</strong> We'll help you choose the perfect colors for your space
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-orange hover:text-orange/80 font-bold underline"
                >
                  Schedule a consultation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-navy mb-4">
                  Painting Questions Answered
                </h2>
                <p className="text-xl text-gray-600">
                  Common questions about our painting services
                </p>
              </div>

              <div className="space-y-6">
                {paintingFAQ.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-navy mb-3 flex items-start gap-3">
                      <span className="text-orange flex-shrink-0">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-700 ml-8">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-orange to-orange/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Get a free, detailed estimate for your painting project. Most projects can start within days!
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
              <div className="mt-8 space-y-2">
                <p className="text-white/90">
                  ✨ Free color consultation | 🎨 Premium paint brands | 🛡️ Satisfaction guaranteed
                </p>
                <p className="text-white/80 text-sm">
                  Serving Dallas, Fort Worth, Plano, Frisco, Arlington, McKinney, and all DFW areas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services - Internal Linking */}
        <RelatedServices category="painting" />
      </main>
    </>
  );
}
