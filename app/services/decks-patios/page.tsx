import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Decks & Patios",
  description:
    "Professional deck and patio construction in Dallas-Fort Worth. Custom outdoor living spaces built to last by experienced craftsmen.",
  alternates: {
    canonical: "/services/decks-patios",
  },
  openGraph: {
    title: `Decks & Patios | ${seoConfig.siteName}`,
    description:
      "Professional deck and patio construction in Dallas-Fort Worth. Custom outdoor living spaces built to last.",
    url: "/services/decks-patios",
  },
};

export default function DecksPatiosPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Decks & Patios
            </h1>
            <p className="text-xl text-silver">
              {/* TODO: Customize content */}
              Create beautiful outdoor living spaces that enhance your property.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* TODO: Add detailed service content */}
          <p className="text-gray-700 mb-6">
            Content coming soon. We design and build custom decks and patios for your outdoor enjoyment.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Outdoor Space?</h2>
          <p className="text-xl mb-8">Contact us for a free consultation</p>
          <Link
            href="/contact"
            className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
