import type { Metadata } from "next";
import { seoConfig } from "@/seo.config";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Creative Constructors LLC for a free quote on your home services project. Serving the Dallas-Fort Worth area with professional electrical, plumbing, HVAC, and more.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${seoConfig.siteName}`,
    description:
      "Contact us for a free quote on your home services project in Dallas-Fort Worth.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-silver">
              Ready to get started? Fill out the form below and we'll get back to
              you as soon as possible with a free quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-navy">Phone</h3>
                  <p className="text-gray-700">
                    {/* TODO: Add actual phone number */}
                    <a
                      href={`tel:${seoConfig.business.phone}`}
                      className="text-orange hover:text-orange/80"
                    >
                      {seoConfig.business.phone}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-navy">Email</h3>
                  <p className="text-gray-700">
                    {/* TODO: Add actual email */}
                    <a
                      href={`mailto:${seoConfig.business.email}`}
                      className="text-orange hover:text-orange/80"
                    >
                      {seoConfig.business.email}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-navy">Service Area</h3>
                  <p className="text-gray-700">
                    {seoConfig.business.serviceArea.name}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-navy">Hours</h3>
                  <p className="text-gray-700">
                    {/* TODO: Add actual hours */}
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-navy">
                    Emergency Services
                  </h3>
                  <p className="text-gray-700">
                    Need immediate assistance? We offer emergency services for
                    urgent electrical, plumbing, and HVAC issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
