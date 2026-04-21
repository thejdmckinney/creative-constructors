import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/seo.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Smart Home Installation & Automation in Dallas-Fort Worth | ${seoConfig.business.name}`,
  description: `Transform your home with smart home technology. Expert installation of smart thermostats, lighting, locks, cameras, and home automation systems in Dallas-Fort Worth. Call ${seoConfig.business.phone}`,
  keywords: [
    "smart home Dallas",
    "home automation Fort Worth",
    "smart thermostat installation",
    "smart lighting Dallas",
    "smart lock installation",
    "home security cameras Dallas",
    "voice control home",
    "smart home integration",
  ],
  alternates: {
    canonical: "/services/smart-home",
  },
  openGraph: {
    title: `Smart Home Installation & Automation | ${seoConfig.siteName}`,
    description:
      "Transform your home with smart technology. Professional installation of smart home devices and automation systems in Dallas-Fort Worth.",
    url: "/services/smart-home",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Services", path: "/services" },
  { name: "Smart Home", path: "/services/smart-home" },
]);

const faqSchema = generateFAQSchema([
  {
    question: "What smart home devices can you install?",
    answer: "We install a wide range of smart home devices including smart thermostats (Nest, Ecobee), smart lighting systems, smart locks, video doorbells, security cameras, smart switches and outlets, and whole-home automation systems."
  },
  {
    question: "Do I need special wiring for smart home devices?",
    answer: "Most smart home devices work with existing wiring. Some devices like smart thermostats may require a C-wire, which we can install if needed. We'll assess your home's wiring and recommend the best solutions."
  },
  {
    question: "Can you integrate different smart home brands?",
    answer: "Yes! We specialize in integrating various smart home systems to work together seamlessly. Whether you have Amazon Alexa, Google Home, Apple HomeKit, or multiple platforms, we can create a unified smart home experience."
  },
  {
    question: "How much does smart home installation cost?",
    answer: "Costs vary depending on the devices and complexity. Simple installations like smart thermostats start around $200-300 including the device. Whole-home automation systems vary widely. Contact us for a custom quote based on your needs."
  },
  {
    question: "Will you teach me how to use my smart home system?",
    answer: "Absolutely! We provide hands-on training after installation to ensure you're comfortable using all features. We'll show you how to control devices via apps, voice commands, and automation routines."
  },
]);


export default function SmartHomePage() {
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
        { name: "Smart Home", path: "/services/smart-home" },
      ]} />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart Home Installation
            </h1>
            <p className="text-xl text-silver">
              Transform your home with cutting-edge smart technology. Professional
              installation and integration of smart home devices and automation systems
              throughout the Dallas-Fort Worth area.
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
                src="/cc-smart-home-tech.png"
                alt="Creative Constructors technician installing smart home devices"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy">
                Your Home, Smarter
              </h2>
              <p className="text-gray-700 mb-6">
                Experience the convenience, security, and energy savings of a smart home.
                Our certified technicians specialize in installing and integrating the
                latest smart home technology to create a seamless, automated living
                experience tailored to your lifestyle.
              </p>
              <p className="text-gray-700 mb-6">
                From voice-controlled lighting and climate control to advanced security
                systems and whole-home automation, we make smart living simple and accessible.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-orange">
                <h3 className="font-bold text-navy mb-2">Benefits of Smart Home Technology:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Save 10-30% on energy costs with smart thermostats</li>
                  <li>✓ Enhanced security with real-time monitoring</li>
                  <li>✓ Control your home from anywhere via smartphone</li>
                  <li>✓ Increase property value and appeal</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-16 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-navy text-center">
              Smart Home Services We Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🌡️</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Smart Thermostats</h4>
                <p className="text-gray-600 text-sm">
                  Nest, Ecobee, Honeywell installation with learning capabilities and remote control.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Smart Lighting</h4>
                <p className="text-gray-600 text-sm">
                  Automated lighting systems with Philips Hue, Lutron, and other smart bulbs and switches.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🔐</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Smart Locks</h4>
                <p className="text-gray-600 text-sm">
                  Keyless entry systems with smartphone control, temporary access codes, and auto-locking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">📹</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Security Cameras</h4>
                <p className="text-gray-600 text-sm">
                  Indoor and outdoor smart cameras with cloud storage, motion detection, and mobile alerts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🔔</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Video Doorbells</h4>
                <p className="text-gray-600 text-sm">
                  Ring, Nest Hello, and Arlo doorbell installation with two-way audio and video recording.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🔌</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Smart Outlets</h4>
                <p className="text-gray-600 text-sm">
                  Smart plugs and outlets for controlling any device remotely with scheduling capabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🎤</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Voice Control</h4>
                <p className="text-gray-600 text-sm">
                  Integration with Alexa, Google Assistant, and Siri for hands-free home control.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🏠</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Whole-Home Automation</h4>
                <p className="text-gray-600 text-sm">
                  Complete smart home systems with centralized control and custom automation routines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="text-4xl mb-3">🚪</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Smart Garage Doors</h4>
                <p className="text-gray-600 text-sm">
                  Smart garage door openers with remote access and activity notifications.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 -mx-4 px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-10 text-navy text-center">
                Why Choose Creative Constructors for Smart Home?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      🎓
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Certified Technicians</h4>
                    <p className="text-gray-600">
                      Our team is trained and certified in the latest smart home technologies and brands.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      🔗
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Seamless Integration</h4>
                    <p className="text-gray-600">
                      We integrate all your devices to work together perfectly, regardless of brand.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      �
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Training Included</h4>
                    <p className="text-gray-600">
                      We teach you how to use everything and provide ongoing support when needed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      ⚡
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-navy">Professional Installation</h4>
                    <p className="text-gray-600">
                      Clean, professional installation with proper wiring and configuration every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Home?</h2>
          <p className="text-xl mb-8">
            Get a free smart home consultation and discover what's possible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Book Consultation
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

      {/* Related Services */}
      <RelatedServices category="installation" />
    </>
  );
}
