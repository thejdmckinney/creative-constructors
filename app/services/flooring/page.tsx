import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Flooring Services",
  description:
    "Professional flooring services in Dallas-Fort Worth. Hardwood, laminate, tile, and vinyl flooring installation and restoration.",
  alternates: {
    canonical: "/services/flooring",
  },
  openGraph: {
    title: `Flooring Services | ${seoConfig.siteName}`,
    description:
      "Professional flooring services in Dallas-Fort Worth. Installation and restoration by experienced craftsmen.",
    url: "/services/flooring",
  },
};

export default function FlooringPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Flooring Services
            </h1>
            <p className="text-xl text-silver">
              {/* TODO: Customize content */}
              Transform your space with quality flooring installation and restoration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* TODO: Add detailed service content */}
          <p className="text-gray-700 mb-6">
            Content coming soon. We install and restore hardwood, laminate, tile, vinyl, and more.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for New Floors?</h2>
          <p className="text-xl mb-8">Contact us for a free quote</p>
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
