import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Smart Home Installation in Highland Park, TX | Home Automation",
  description: "Smart home installation in Highland Park, TX. Automated lighting, smart thermostats, security cameras, voice control. 15+ years experience. Call (817) 470-1889.",
  keywords: [
    "smart home Highland Park TX",
    "home automation Highland Park",
    "smart lighting Highland Park",
    "smart thermostat Highland Park",
    "security cameras Highland Park",
    "voice control Highland Park",
    "luxury smart home Highland Park",
  ],
  openGraph: {
    title: "Smart Home Installation in Highland Park, TX | Creative Constructors",
    description: "Professional smart home installation for Highland Park estates. Lighting, security, climate control, whole-home automation.",
    url: "/services/smart-home/highland-park",
  },
};

export default function SmartHomeHighlandParkPage() {
  const smartServices = [
    "Smart Lighting Systems",
    "Smart Thermostat Installation",
    "Security Camera Installation",
    "Video Doorbell Setup",
    "Voice Control Integration",
    "Smart Lock Installation",
    "Whole-Home Automation",
    "Smart Garage Door Openers",
    "Automated Shade Systems",
    "Home Theater Integration",
  ];

  const nearbyAreas = [
    { name: "University Park", href: "/services/smart-home/university-park" },
    { name: "Dallas", href: "/services/smart-home/dallas" },
    { name: "Plano", href: "/services/smart-home/plano" },
  ];

  const otherServices = [
    { name: "Electrical", href: "/services/electrical/highland-park", icon: "⚡" },
    { name: "Plumbing", href: "/services/plumbing/highland-park", icon: "🔧" },
    { name: "HVAC", href: "/services/hvac/highland-park", icon: "❄️" },
    { name: "Carpentry", href: "/services/carpentry/highland-park", icon: "🔨" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Smart Home Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": seoConfig.business.name,
              "telephone": seoConfig.business.phone,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Highland Park",
                "addressRegion": "TX"
              }
            }
          }),
        }}
      />

      <section className="relative bg-navy text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-4 py-2 mb-4">
                <span className="text-orange font-bold text-sm">🏠 Smart Home Experts</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Smart Home Installation in Highland Park, TX
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">
                Transform your Highland Park estate with intelligent automation. From lighting and climate to security and entertainment—we create seamless smart home experiences for luxury homes.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange">15+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange">100%</div>
                    <div className="text-sm text-gray-300">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl">
                  Call {seoConfig.business.phone}
                </PhoneLink>
                <Link href="/book" className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-xl">
                  Free Consultation
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Expert installation & integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Works with all major platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Custom automation design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl">✓</span>
                  <span className="text-gray-200">Ongoing support & training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-navy text-center">Smart Home Services in Highland Park</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartServices.map((service) => (
              <div key={service} className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange">
                <div className="flex items-start gap-3">
                  <span className="text-orange text-2xl">🏠</span>
                  <h3 className="text-lg font-semibold text-navy">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-navy text-center">Other Services in Highland Park</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service) => (
              <Link key={service.href} href={service.href} className="group bg-white rounded-lg p-6 hover:shadow-xl transition-all border-t-4 border-orange hover:scale-105">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{service.name}</h3>
                <div className="flex items-center text-orange font-semibold">
                  <span>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-navy text-center">Smart Home Services in Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyAreas.map((area) => (
              <Link key={area.href} href={area.href} className="bg-gray-50 hover:bg-orange hover:text-white text-navy font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Estate?</h2>
          <p className="text-xl mb-8">
            🏠 Free consultation • Expert installation • Ongoing support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg shadow-xl">
              Call {seoConfig.business.phone}
            </PhoneLink>
            <Link href="/book" className="inline-block bg-white hover:bg-gray-100 text-royal-blue font-bold py-4 px-8 rounded-lg shadow-xl">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
