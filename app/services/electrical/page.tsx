import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/seo.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generateServiceSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: `Licensed Electrical Services in Dallas-Fort Worth | ${seoConfig.business.name}`,
  description: `Professional electrical services in Dallas-Fort Worth. Licensed electricians for installation, repair, and maintenance of residential and commercial electrical systems. Same-day service available. Call ${seoConfig.business.phone}`,
  keywords: [
    "electrician Dallas",
    "electrical services Fort Worth",
    "licensed electrician Dallas TX",
    "residential electrician",
    "commercial electrician Dallas",
    "electrical repair Dallas",
    "electrical installation",
    "circuit locator",
    "panel labeling",
    "circuit tracing",
    "electrical panel labeling",
  ],
  alternates: {
    canonical: "/services/electrical",
  },
  openGraph: {
    title: `Electrical Services | ${seoConfig.siteName}`,
    description:
      "Professional electrical services in Dallas-Fort Worth. Licensed electricians for installation, repair, and maintenance.",
    url: "/services/electrical",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Services", path: "/services" },
  { name: "Electrical Services", path: "/services/electrical" },
]);

const faqSchema = generateFAQSchema([
  {
    question: "Are your electricians licensed and insured?",
    answer: "Yes, all our electricians are fully licensed, insured, and continuously trained on the latest electrical codes and safety standards. We carry comprehensive liability insurance and workers' compensation coverage."
  },
  {
    question: "Do you handle both residential and commercial electrical work?",
    answer: "Absolutely! We provide electrical services for both residential homes and commercial properties. Our team has experience with everything from single-family homes to multi-unit buildings and commercial spaces."
  },
  {
    question: "Can you help with electrical emergencies?",
    answer: "Yes, we offer emergency electrical services for urgent issues like power outages, sparking outlets, burning smells, or any situation that poses a safety hazard. Call us immediately for emergency electrical problems."
  },
  {
    question: "How do I know if my electrical panel needs upgrading?",
    answer: "Signs include frequent breaker trips, flickering lights, burning smells, outdated panel (20+ years old), or if you're adding major appliances. We provide free panel inspections and upgrade recommendations."
  },
  {
    question: "Do you provide warranties on electrical work?",
    answer: "Yes, all our electrical work comes with a workmanship warranty. Specific warranty terms depend on the type of service, but we guarantee our work and will address any issues that arise."
  },
  {
    question: "Do you offer circuit locating and panel labeling?",
    answer: "Yes. We provide professional circuit locating (circuit tracing) and panel labeling to identify which breaker controls which areas or outlets in your home. This includes labeling each breaker, providing a clear panel map, and delivering a digital/photo record for your reference. It's a great way to speed future repairs and improve household safety."
  },
]);

const serviceSchema = generateServiceSchema({
  serviceName: 'Electrical Services',
  description: 'Licensed electrical services including installation, repair, panel work, and troubleshooting across Dallas-Fort Worth.',
  serviceUrl: `${seoConfig.baseUrl}/services/electrical`,
})

export default function ElectricalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs items={[
        { name: "Services", path: "/services" },
        { name: "Electrical Services", path: "/services/electrical" },
      ]} />

      {/* Hero Section */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Electrical Services
            </h1>
            <p className="text-xl text-silver">
              Professional electrical installation, repair, and maintenance services
              by licensed electricians serving the Dallas-Fort Worth area.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/cc-tech-installing-lighting.png"
                alt="Creative Constructors technician installing light fixture"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy">
                Expert Electrical Solutions
              </h2>
              <p className="text-gray-700 mb-6">
                Our licensed electricians provide comprehensive electrical services
                for residential and commercial properties. From simple repairs to
                complete electrical system installations, we ensure your property is
                safe, efficient, and up to code.
              </p>
            </div>
          </div>

          {/* Services Grid - Modern Card Layout */}
          <div className="mt-16 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-navy text-center">
              Our Electrical Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Lighting Installation</h4>
                <p className="text-gray-600 text-sm">
                  Indoor and outdoor lighting solutions to brighten your space and enhance safety.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🔌</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Outlets & Switches</h4>
                <p className="text-gray-600 text-sm">
                  Installation and repair of outlets, switches, and electrical fixtures throughout your property.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🌀</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Ceiling Fans</h4>
                <p className="text-gray-600 text-sm">
                  Professional ceiling fan installation to improve comfort and energy efficiency.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Surge Protection</h4>
                <p className="text-gray-600 text-sm">
                  Whole-house surge protection to safeguard your valuable electronics and appliances.
                </p>
              </div>

              {/* Service Card 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🔍</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Troubleshooting</h4>
                <p className="text-gray-600 text-sm">
                  Expert electrical troubleshooting and diagnostics to identify and resolve issues quickly.
                </p>
              </div>

              {/* Service Card 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">✓</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Code Compliance</h4>
                <p className="text-gray-600 text-sm">
                  Code compliance upgrades to ensure your electrical system meets current safety standards.
                </p>
              </div>

              {/* Service Card 7 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🚨</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Emergency Repairs</h4>
                <p className="text-gray-600 text-sm">
                  24/7 emergency electrical repair service when you need it most.
                </p>
              </div>

              {/* Service Card 8 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">📋</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Electrical Inspections</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive electrical inspections to ensure your system is safe and up to code.
                </p>
              </div>

              {/* Service Card 9 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">⚙️</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Breaker Replacements</h4>
                <p className="text-gray-600 text-sm">
                  Expert breaker replacement and repair to keep your electrical system running smoothly.
                </p>
              </div>

              {/* Service Card 10 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🧭</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Circuit Locator &amp; Panel Labeling</h4>
                <p className="text-gray-600 text-sm">
                  Professional circuit tracing and panel labeling to identify which breaker controls what in your home.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Feature Blocks */}
          <div className="bg-gray-50 -mx-4 px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-10 text-navy text-center">
                Why Choose Creative Constructors?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Licensed & Insured</h4>
                    <p className="text-gray-600">
                      All our electricians are fully licensed and insured for your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      $
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Transparent Pricing</h4>
                    <p className="text-gray-600">
                      Upfront, honest pricing with no hidden fees or surprises.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      ⭐
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Quality Workmanship</h4>
                    <p className="text-gray-600">
                      We guarantee exceptional quality on every project, big or small.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      🕐
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Same-Day Service</h4>
                    <p className="text-gray-600">
                      Fast, reliable service when you need it - often available same-day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      📍
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Serving DFW</h4>
                    <p className="text-gray-600">
                      Proudly serving the entire Dallas-Fort Worth metroplex.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Circuit Locator & Panel Labeling Section */}
          <div className="mt-16 mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-100">
              <div className="bg-navy text-white py-8 px-6 text-center">
                <div className="text-5xl mb-4">🧭</div>
                <h3 className="text-3xl font-bold mb-3">Circuit Locator &amp; Panel Labeling</h3>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  Not sure which breaker controls what? We'll trace every circuit, label your panel, and give you a documented map for future reference.
                </p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-navy flex items-center gap-2">
                      <span className="text-orange text-2xl">✓</span>
                      Why Get Your Panel Labeled?
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>Faster repairs — no more guessing which breaker to flip</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>Improved safety during DIY work or emergencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>Clear documentation for home buyers or contractors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>Eliminates confusion in remodeled homes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-navy flex items-center gap-2">
                      <span className="text-orange text-2xl">🔧</span>
                      What's Included
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>Professional circuit tracer equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>Durable, legible breaker labels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>Photo and digital copy of panel map</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>Notes on any wiring issues found</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center bg-gray-50 py-6 rounded-lg">
                  <p className="text-gray-700 mb-4 text-lg">
                    Perfect for homeowners, contractors, and property managers who need a clear understanding of their electrical system.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md"
                  >
                    Schedule Circuit Locating Service
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* TODO: Add detailed service information */}

            <h3 className="text-2xl font-bold mb-3 text-navy" style={{ display: 'none' }}>Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700" style={{ display: 'none' }}>
              <li>Indoor and outdoor lighting installation</li>
              <li>Outlet and switch installation and repair</li>
              <li>Ceiling fan installation</li>
              <li>Whole-house surge protection</li>
              <li>Electrical troubleshooting and diagnostics</li>
              <li>Code compliance upgrades</li>
              <li>Emergency electrical repairs</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 text-navy" style={{ display: 'none' }}>Why Choose Us?</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700" style={{ display: 'none' }}>
              <li>Licensed and insured electricians</li>
              <li>Upfront, transparent pricing</li>
              <li>Quality workmanship guaranteed</li>
              <li>Same-day service available</li>
              <li>Serving the DFW metroplex</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Professional Electrical Services Across DFW
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Serving these cities and surrounding areas
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Link href="/service-areas/university-park" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group border-2 border-orange/20 hover:border-orange">
              <div className="text-3xl mb-2">🏛️</div>
              <h3 className="font-bold text-navy group-hover:text-orange transition-colors">University Park</h3>
              <p className="text-sm text-gray-600 mt-1">Premium Service</p>
            </Link>
            <Link href="/service-areas/highland-park" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group border-2 border-orange/20 hover:border-orange">
              <div className="text-3xl mb-2">👑</div>
              <h3 className="font-bold text-navy group-hover:text-orange transition-colors">Highland Park</h3>
              <p className="text-sm text-gray-600 mt-1">Elite Service</p>
            </Link>
            <Link href="/service-areas/fort-worth" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="font-bold text-navy group-hover:text-orange transition-colors">Fort Worth</h3>
            </Link>
            <Link href="/service-areas/dallas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group">
              <div className="text-3xl mb-2">🌆</div>
              <h3 className="font-bold text-navy group-hover:text-orange transition-colors">Dallas</h3>
            </Link>
            <Link href="/service-areas/arlington" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group">
              <div className="text-3xl mb-2">⚾</div>
              <h3 className="font-bold text-navy group-hover:text-orange transition-colors">Arlington</h3>
            </Link>
            <Link href="/service-areas/plano" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group">
              <div className="text-3xl mb-2">🏘️</div>
              <h3 className="font-bold text-navy group-hover:text-orange transition-colors">Plano</h3>
            </Link>
            <Link href="/service-areas/garland" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-bold text-navy group-hover:text-orange transition-colors">Garland</h3>
            </Link>
            <Link href="/service-areas/richardson" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold text-navy group-hover:text-orange transition-colors">Richardson</h3>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/service-areas" className="text-orange hover:text-orange/80 font-bold">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Need Electrical Work Done?</h2>
          <p className="text-xl mb-8">
            Get a free quote for your electrical project today
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Related Services - Internal Linking */}
      <RelatedServices category="electrical" />
    </>
  );
}
