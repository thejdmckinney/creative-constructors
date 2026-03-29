import type { Metadata } from "next";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Creative Constructors LLC, a licensed and insured home services contractor serving the Dallas-Fort Worth area with quality workmanship and reliable service.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${seoConfig.siteName}`,
    description:
      "Licensed and insured home services contractor serving Dallas-Fort Worth with quality workmanship.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-silver">
              Your trusted partner for quality home services in Dallas-Fort Worth
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* TODO: Add company history and story */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Creative Constructors LLC was founded with a simple mission: to provide
                reliable, high-quality home services to the Dallas-Fort Worth community.
                We believe that every project, no matter the size, deserves attention to
                detail and professional craftsmanship.
              </p>
              <p className="text-gray-700 text-lg">
                Over the years, we've built a reputation for excellence by consistently
                delivering outstanding results and treating every customer's home as if
                it were our own.
              </p>
            </div>

            {/* TODO: Add values and differentiators */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy">
                Why Choose Us?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-navy">
                    Licensed & Insured
                  </h3>
                  <p className="text-gray-700">
                    Fully licensed and insured for your protection and peace of mind
                    on every project.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-navy">
                    Quality Workmanship
                  </h3>
                  <p className="text-gray-700">
                    We take pride in delivering exceptional craftsmanship that stands
                    the test of time.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-navy">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-700">
                    Upfront quotes with no hidden fees or surprises along the way.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-navy">
                    Local Expertise
                  </h3>
                  <p className="text-gray-700">
                    Deep knowledge of the DFW area and its unique home service needs.
                  </p>
                </div>
              </div>
            </div>

            {/* TODO: Add team information */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy">
                Our Commitment
              </h2>
              <p className="text-gray-700 text-lg">
                We're committed to building lasting relationships with our clients
                through honest communication, reliable service, and superior results.
                When you choose Creative Constructors, you're choosing a partner who
                cares about your home as much as you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Let's discuss your next project
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
