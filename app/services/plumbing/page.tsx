import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description:
    "Professional plumbing services in Dallas-Fort Worth. Licensed plumbers for repair, installation, and maintenance of residential and commercial plumbing systems.",
  alternates: {
    canonical: "/services/plumbing",
  },
  openGraph: {
    title: `Plumbing Services | ${seoConfig.siteName}`,
    description:
      "Professional plumbing services in Dallas-Fort Worth. Licensed plumbers for repair, installation, and maintenance.",
    url: "/services/plumbing",
  },
};

export default function PlumbingPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Plumbing Services
            </h1>
            <p className="text-xl text-silver">
              {/* TODO: Customize content */}
              Expert plumbing solutions for all your residential and commercial needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* TODO: Add detailed service content */}
          <p className="text-gray-700 mb-6">
            Content coming soon. Our licensed plumbers provide comprehensive plumbing services including repairs, installations, and maintenance.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Need Plumbing Service?</h2>
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
