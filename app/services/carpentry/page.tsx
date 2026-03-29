import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Carpentry Services",
  description:
    "Professional carpentry services in Dallas-Fort Worth. Custom woodworking, trim work, built-ins, and more by skilled craftsmen.",
  alternates: {
    canonical: "/services/carpentry",
  },
  openGraph: {
    title: `Carpentry Services | ${seoConfig.siteName}`,
    description:
      "Professional carpentry services in Dallas-Fort Worth. Custom woodworking and trim work by skilled craftsmen.",
    url: "/services/carpentry",
  },
};

export default function CarpentryPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Carpentry Services
            </h1>
            <p className="text-xl text-silver">
              {/* TODO: Customize content */}
              Custom carpentry and woodworking to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* TODO: Add detailed service content */}
          <p className="text-gray-700 mb-6">
            Content coming soon. Our skilled carpenters provide custom woodworking and carpentry services.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Need Carpentry Work?</h2>
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
