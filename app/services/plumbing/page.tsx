import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/seo.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Professional Plumbing Services in Dallas-Fort Worth | ${seoConfig.business.name}`,
  description: `Expert plumbing services in Dallas-Fort Worth. Licensed plumbers for repairs, installations, drain cleaning, water heaters, and emergency plumbing. 24/7 service available. Call ${seoConfig.business.phone}`,
  keywords: [
    "plumber Dallas",
    "plumbing services Fort Worth",
    "licensed plumber Dallas TX",
    "emergency plumber",
    "drain cleaning Dallas",
    "water heater repair",
    "plumbing repair Dallas",
    "residential plumber",
  ],
  alternates: {
    canonical: "/services/plumbing",
  },
  openGraph: {
    title: `Plumbing Services | ${seoConfig.siteName}`,
    description:
      "Professional plumbing services in Dallas-Fort Worth. Licensed plumbers for repairs, installations, and emergency service.",
    url: "/services/plumbing",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Services", path: "/services" },
  { name: "Plumbing Services", path: "/services/plumbing" },
]);

const faqSchema = generateFAQSchema([
  {
    question: "Do you offer 24/7 emergency plumbing services?",
    answer: "Yes! We provide 24/7 emergency plumbing services for urgent issues like burst pipes, major leaks, sewer backups, or any plumbing emergency that can't wait. Call us anytime for immediate assistance."
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Absolutely. All our plumbers are fully licensed, insured, and background-checked. We maintain comprehensive liability insurance and workers' compensation coverage for your protection."
  },
  {
    question: "How much does a typical plumbing service cost?",
    answer: "Costs vary depending on the service needed. We provide upfront, transparent pricing before starting any work. Simple repairs may start around $150, while larger installations vary by scope. Call for a free estimate."
  },
  {
    question: "Can you help with water heater installation?",
    answer: "Yes! We install and replace all types of water heaters including traditional tank, tankless, gas, and electric models. We'll help you choose the right system for your home and budget."
  },
  {
    question: "Do you provide warranties on plumbing work?",
    answer: "Yes, all our plumbing work comes with a workmanship warranty. We also offer manufacturer warranties on parts and fixtures we install. Specific terms depend on the service provided."
  },
]);

export default function PlumbingPage() {
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
      
      <Breadcrumbs items={[
        { name: "Services", path: "/services" },
        { name: "Plumbing Services", path: "/services/plumbing" },
      ]} />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Plumbing Services
            </h1>
            <p className="text-xl text-silver">
              Trusted plumbing installation, repair, and maintenance services
              by licensed plumbers serving the Dallas-Fort Worth area. Available 24/7 for emergencies.
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
                src="/cc-tech-plumbing-work.png"
                alt="Creative Constructors plumber working on pipes"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy">
                Expert Plumbing Solutions
              </h2>
              <p className="text-gray-700 mb-6">
                Our licensed plumbers provide comprehensive plumbing services
                for residential and commercial properties throughout the DFW metroplex.
                From minor repairs to major installations, we handle it all with
                expertise and professionalism. With 24/7 emergency service available,
                we're here when you need us most.
              </p>
              <p className="text-gray-700">
                Whether you're dealing with a leaky faucet, need a water heater
                replacement, or facing a plumbing emergency, our experienced team
                delivers reliable solutions that last.
              </p>
            </div>
          </div>

          {/* Services Grid - Modern Card Layout */}
          <div className="mt-16 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-navy text-center">
              Our Plumbing Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🚰</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Leak Repair</h4>
                <p className="text-gray-600 text-sm">
                  Fast detection and repair of leaks in pipes, faucets, toilets, and fixtures to prevent water damage.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🚿</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Drain Cleaning</h4>
                <p className="text-gray-600 text-sm">
                  Professional drain cleaning and clog removal for sinks, tubs, showers, and sewer lines.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🔥</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Water Heaters</h4>
                <p className="text-gray-600 text-sm">
                  Installation, repair, and replacement of tank and tankless water heaters.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🚽</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Toilet Repair</h4>
                <p className="text-gray-600 text-sm">
                  Complete toilet repair, replacement, and installation services for all makes and models.
                </p>
              </div>

              {/* Service Card 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Faucet Services</h4>
                <p className="text-gray-600 text-sm">
                  Faucet installation, repair, and replacement for kitchens, bathrooms, and utility areas.
                </p>
              </div>

              {/* Service Card 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">💧</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Sump Pumps</h4>
                <p className="text-gray-600 text-sm">
                  Sump pump installation, repair, and maintenance to protect your property from flooding.
                </p>
              </div>

              {/* Service Card 7 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🚨</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Emergency Plumbing</h4>
                <p className="text-gray-600 text-sm">
                  24/7 emergency plumbing service for burst pipes, major leaks, and urgent repairs.
                </p>
              </div>

              {/* Service Card 8 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🏠</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Repiping</h4>
                <p className="text-gray-600 text-sm">
                  Complete or partial repiping services to replace old, damaged, or corroded pipes.
                </p>
              </div>

              {/* Service Card 9 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🔍</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Inspections</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive plumbing inspections using camera technology to identify issues.
                </p>
              </div>

              {/* Service Card 10 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">♨️</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Gas Line Services</h4>
                <p className="text-gray-600 text-sm">
                  Safe gas line installation, repair, and leak detection for appliances and systems.
                </p>
              </div>

              {/* Service Card 11 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🚰</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Garbage Disposals</h4>
                <p className="text-gray-600 text-sm">
                  Installation, repair, and replacement of garbage disposal units.
                </p>
              </div>

              {/* Service Card 12 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">💦</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Water Filtration</h4>
                <p className="text-gray-600 text-sm">
                  Whole-house water filtration and softener system installation for cleaner water.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Feature Blocks */}
          <div className="bg-gray-50 -mx-4 px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-10 text-navy text-center">
                Why Choose Creative Constructors for Plumbing?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      ⏰
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">24/7 Emergency Service</h4>
                    <p className="text-gray-600">
                      Plumbing emergencies don't wait - neither do we. Call us anytime, day or night.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Licensed & Certified</h4>
                    <p className="text-gray-600">
                      All our plumbers are licensed, certified, and continuously trained on the latest techniques.
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
                    <h4 className="text-lg font-bold mb-2 text-navy">Upfront Pricing</h4>
                    <p className="text-gray-600">
                      No surprises - we provide clear, upfront pricing before any work begins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      🛡️
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Warranty Backed</h4>
                    <p className="text-gray-600">
                      All work is backed by our comprehensive warranty for your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      🚛
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Fully Stocked Trucks</h4>
                    <p className="text-gray-600">
                      Our trucks carry most parts needed, so we can fix issues on the first visit.
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
                    <h4 className="text-lg font-bold mb-2 text-navy">Highly Rated</h4>
                    <p className="text-gray-600">
                      Trusted by thousands of DFW homeowners with excellent reviews and ratings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Plumbing Issues Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-6 text-navy text-center">
              Common Plumbing Problems We Solve
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2 text-navy">Dripping Faucets</h4>
                <p className="text-gray-600 text-sm">
                  That constant drip wastes water and money. We'll fix it fast with quality parts that last.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2 text-navy">Running Toilets</h4>
                <p className="text-gray-600 text-sm">
                  A running toilet can waste hundreds of gallons per day. We'll diagnose and repair it quickly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2 text-navy">Low Water Pressure</h4>
                <p className="text-gray-600 text-sm">
                  From mineral buildup to pipe issues, we'll identify and fix what's causing low pressure.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2 text-navy">Slow Drains</h4>
                <p className="text-gray-600 text-sm">
                  Professional drain cleaning removes clogs and buildup to restore proper flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Plumber?</h2>
          <p className="text-xl mb-8">
            Get expert plumbing service today - available 24/7 for emergencies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Book Service Now
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-royal-blue font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services - Internal Linking */}
      <RelatedServices category="plumbing" />
    </>
  );
}
