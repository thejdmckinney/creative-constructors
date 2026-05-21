import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterSignupForm from "@/components/NewsletterSignupForm";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generateFAQSchema } from "@/lib/schema";
import { generateServiceSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: `Circuit Locator & Panel Labeling | Electrical Services | Creative Constructors`,
  description:
    "Professional circuit tracing and electrical panel labeling in Dallas-Fort Worth. Identify which breaker controls which circuit, get a labeled panel map, and a digital copy for your records.",
  keywords: [
    "circuit locator",
    "panel labeling",
    "circuit tracing",
    "electrical panel labeling",
    "electrician Dallas",
  ],
  alternates: {
    canonical: "/services/electrical/circuit-locator",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Services", path: "/services" },
  { name: "Electrical Services", path: "/services/electrical" },
  { name: "Circuit Locator & Panel Labeling", path: "/services/electrical/circuit-locator" },
]);

const faqSchema = generateFAQSchema([
  {
    question: "What is circuit locating and panel labeling?",
    answer: "Circuit locating uses specialized tracers to identify which breaker controls each circuit, and panel labeling is the process of marking each breaker and creating a clear panel map for your records."
  },
  {
    question: "How long does a panel labeling visit take?",
    answer: "Most homes can be fully traced and labeled in 60–120 minutes depending on the number of circuits and complexity of the panel. We'll give a time estimate after a quick assessment."
  },
  {
    question: "Is circuit tracing safe?",
    answer: "Yes. We use professional, non-invasive tracers and follow strict safety protocols. If any circuit requires shutdown or more invasive work we will review options with you before proceeding."
  }
]);

const serviceSchema = generateServiceSchema({
  serviceName: 'Circuit Locator & Panel Labeling',
  description: 'Circuit tracing and panel labeling service including labeled breakers and a digital panel map for homeowners in Dallas-Fort Worth.',
  serviceUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://creative-constructors.com'}/services/electrical/circuit-locator`,
})

export default function CircuitLocatorPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: "Electrical Services", path: "/services/electrical" },
          { name: "Circuit Locator & Panel Labeling", path: "/services/electrical/circuit-locator" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Circuit Locator &amp; Panel Labeling</h1>
            <p className="text-xl text-silver">
              Precise circuit tracing and durable panel labeling to make future work faster and safer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-bold text-navy">Why This Matters</h2>
            <p>
              A properly labeled electrical panel saves time, prevents mistakes, and improves safety during DIY projects and professional repairs. Remodels, additions, and past repairs often leave panels undocumented — we solve that by tracing each circuit and producing a reliable, readable panel map.
            </p>

            <h3 className="text-xl font-bold text-navy">What We Provide</h3>
            <ul>
              <li>Full circuit tracing using professional equipment</li>
              <li>Durable, legible labeling on each breaker</li>
              <li>A printed/photo and digital copy of your panel map</li>
              <li>Notes on multi-wire branches, shared neutrals, and any anomalies we find</li>
            </ul>

            <h3 className="text-xl font-bold text-navy">How Our Visit Works</h3>
            <ol>
              <li>We arrive with non-invasive circuit tracers and testing gear.</li>
              <li>We identify and verify circuit destinations (lights, outlets, appliances).</li>
              <li>We label each breaker, document the panel, and provide a clear map.</li>
              <li>We review the findings with you and recommend any necessary upgrades.</li>
            </ol>

            <h3 className="text-xl font-bold text-navy">Who Should Get This</h3>
            <p>
              Homeowners planning renovations, buyers prepping for inspections, or anyone who wants faster, safer electrical work in the future. This is great for older homes or properties with undocumented changes.
            </p>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-bold text-navy">Schedule a Circuit Tracing Visit</p>
                  <p className="text-gray-600 text-sm">Includes labeling and a digital panel map.</p>
                </div>
                <div>
                  <Link href="/contact" className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Questions? Call (817) 470-1889 or use the contact form — we’re happy to walk you through the process.
            </p>

            {/* Visible FAQ section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-4">Frequently Asked Questions</h3>
              <div>
                <h4 className="font-bold">What is circuit locating and panel labeling?</h4>
                <p className="text-gray-700 mb-3">We identify which breaker controls each circuit and label your panel so future work is faster and safer.</p>

                <h4 className="font-bold">How long will it take?</h4>
                <p className="text-gray-700 mb-3">Most homes take between 1–2 hours depending on panel complexity.</p>

                <h4 className="font-bold">Will you provide a map I can keep?</h4>
                <p className="text-gray-700 mb-3">Yes — you'll receive a photo/digital copy and we provide a downloadable template you can print or keep digitally.</p>

                <a href="/panel-map-template.svg" download className="inline-block bg-navy text-white px-4 py-2 rounded-md font-bold">Download Panel Map Template</a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <NewsletterSignupForm />
          </div>
        </div>
      </section>
    </main>
  );
}
