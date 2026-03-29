import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "HVAC Services",
  description:
    "Professional HVAC services in Dallas-Fort Worth. Heating, ventilation, and air conditioning installation, repair, and maintenance by licensed technicians.",
  alternates: {
    canonical: "/services/hvac",
  },
  openGraph: {
    title: `HVAC Services | ${seoConfig.siteName}`,
    description:
      "Professional HVAC services in Dallas-Fort Worth. Installation, repair, and maintenance by licensed technicians.",
    url: "/services/hvac",
  },
};

export default function HvacPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">HVAC Services</h1>
            <p className="text-xl text-silver">
              {/* TODO: Customize content */}
              Keep your home comfortable year-round with expert HVAC services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* TODO: Add detailed service content */}
          <p className="text-gray-700 mb-6">
            Content coming soon. Our certified HVAC technicians provide installation, repair, and maintenance services.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Need HVAC Service?</h2>
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
