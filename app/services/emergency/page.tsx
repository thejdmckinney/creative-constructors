import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/seo.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `24/7 Emergency Home Repair Services in Dallas-Fort Worth | ${seoConfig.business.name}`,
  description: `Fast, reliable emergency home repair services in Dallas-Fort Worth. Available 24/7 for plumbing emergencies, electrical issues, HVAC failures, and urgent repairs. Call ${seoConfig.business.phone} now!`,
  keywords: [
    "emergency plumber Dallas",
    "24/7 home repair Fort Worth",
    "emergency electrician Dallas",
    "urgent home repair",
    "emergency HVAC Dallas",
    "same-day repair service",
    "emergency handyman Dallas",
    "after hours repair",
  ],
  alternates: {
    canonical: "/services/emergency",
  },
  openGraph: {
    title: `24/7 Emergency Services | ${seoConfig.siteName}`,
    description:
      "Fast, reliable emergency home repair services available 24/7 in Dallas-Fort Worth. When you need help now, we're here.",
    url: "/services/emergency",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Services", path: "/services" },
  { name: "Emergency Services", path: "/services/emergency" },
]);

const faqSchema = generateFAQSchema([
  {
    question: "Do you really offer 24/7 emergency service?",
    answer: "Yes! We have technicians on call 24 hours a day, 7 days a week, including holidays. When you have an emergency, we're here to help - day or night."
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer: "We prioritize emergency calls and typically respond within 1-2 hours, depending on your location and current demand. We'll give you an estimated arrival time when you call."
  },
  {
    question: "What qualifies as an emergency?",
    answer: "Emergencies include burst pipes, major leaks, electrical hazards, power outages, HVAC failures in extreme weather, gas leaks, sewage backups, and any situation that threatens safety or could cause significant property damage."
  },
  {
    question: "Is emergency service more expensive?",
    answer: "Emergency calls may include an after-hours fee, but we provide upfront pricing before starting work. We believe in transparent pricing even in emergency situations."
  },
  {
    question: "What areas do you cover for emergency services?",
    answer: "We provide emergency services throughout the Dallas-Fort Worth metroplex. Call us to confirm service availability in your specific area."
  },
]);

export default function EmergencyPage() {
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
        { name: "Emergency Services", path: "/services/emergency" },
      ]} />
      
      {/* Hero Section - Emergency Red */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl animate-pulse">🚨</span>
              <h1 className="text-5xl md:text-6xl font-bold">
                24/7 Emergency Services
              </h1>
            </div>
            <p className="text-xl text-red-50 mb-6">
              When disaster strikes, you need help fast. Our emergency response team
              is available 24 hours a day, 7 days a week to handle urgent home repairs
              throughout the Dallas-Fort Worth area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${seoConfig.business.phone}`}
                className="inline-block bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-8 rounded-lg transition-colors text-lg text-center"
              >
                📞 Call Now: {seoConfig.business.phone}
              </a>
              <Link
                href="/book"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg text-center"
              >
                Request Emergency Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Notice Bar */}
      <div className="bg-yellow-400 text-red-900 py-3 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="font-bold text-lg">
            ⚠️ For life-threatening emergencies, call 911 first. For gas leaks, evacuate and call your utility company immediately.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/cc-emergency-response.png"
                alt="Creative Constructors emergency response team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy">
                Fast, Professional Emergency Response
              </h2>
              <p className="text-gray-700 mb-6">
                Home emergencies don't wait for business hours. That's why we maintain
                a dedicated emergency response team ready to help whenever disaster strikes.
                From burst pipes flooding your home to electrical failures in the middle
                of the night, we're just one call away.
              </p>
              <p className="text-gray-700 mb-6">
                Our emergency technicians arrive fully equipped to handle urgent situations,
                minimize damage, and restore safety to your home. We understand the stress
                of home emergencies, and we're committed to providing fast, reliable service
                when you need it most.
              </p>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="font-bold text-red-900 mb-2">Our Emergency Promise:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Available 24/7/365 - even holidays</li>
                  <li>✓ Rapid response within 1-2 hours</li>
                  <li>✓ Fully stocked emergency vehicles</li>
                  <li>✓ Licensed, insured technicians</li>
                  <li>✓ Upfront emergency pricing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emergency Services Grid */}
          <div className="mt-16 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-navy text-center">
              Emergency Services We Provide
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Emergency Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="text-4xl mb-3">💧</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Burst Pipes & Leaks</h4>
                <p className="text-gray-600 text-sm">
                  Immediate response to burst pipes, major leaks, and water emergencies to prevent flooding and damage.
                </p>
              </div>

              {/* Emergency Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Electrical Emergencies</h4>
                <p className="text-gray-600 text-sm">
                  Power outages, sparking outlets, burning smells, and electrical hazards requiring immediate attention.
                </p>
              </div>

              {/* Emergency Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="text-4xl mb-3">🔥</div>
                <h4 className="text-xl font-bold mb-2 text-navy">HVAC Failures</h4>
                <p className="text-gray-600 text-sm">
                  Emergency heating and cooling repairs during extreme weather when comfort and safety are at risk.
                </p>
              </div>

              {/* Emergency Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="text-4xl mb-3">🚽</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Sewage Backups</h4>
                <p className="text-gray-600 text-sm">
                  Fast response to sewage backups and drain emergencies that create health hazards.
                </p>
              </div>

              {/* Emergency Card 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="text-4xl mb-3">🔥</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Water Heater Failures</h4>
                <p className="text-gray-600 text-sm">
                  Emergency water heater repair and replacement when you're left without hot water.
                </p>
              </div>

              {/* Emergency Card 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="text-4xl mb-3">⛈️</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Storm Damage</h4>
                <p className="text-gray-600 text-sm">
                  Emergency repairs for storm damage, roof leaks, and weather-related home damage.
                </p>
              </div>

              {/* Emergency Card 7 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="text-4xl mb-3">🚪</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Lock-Outs & Security</h4>
                <p className="text-gray-600 text-sm">
                  Emergency lockout service and security repairs when you're locked out or security is compromised.
                </p>
              </div>

              {/* Emergency Card 8 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="text-4xl mb-3">🪟</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Broken Windows/Doors</h4>
                <p className="text-gray-600 text-sm">
                  Emergency board-up and repair service for broken windows and doors compromising security.
                </p>
              </div>

              {/* Emergency Card 9 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="text-4xl mb-3">💨</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Gas Line Issues</h4>
                <p className="text-gray-600 text-sm">
                  Immediate response to suspected gas leaks and gas line emergencies for your safety.
                </p>
              </div>
            </div>
          </div>

          {/* When to Call Section */}
          <div className="bg-gray-50 -mx-4 px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-navy text-center">
                When to Call for Emergency Service
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-3 text-red-600">Call Immediately If:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Water is actively flooding your home</li>
                    <li>• You smell gas or suspect a gas leak</li>
                    <li>• Electrical sparking or burning smell</li>
                    <li>• No heat during freezing temperatures</li>
                    <li>• Sewage backing up into your home</li>
                    <li>• Broken water line or main shut-off failure</li>
                    <li>• Storm damage compromising structure</li>
                    <li>• Any situation threatening safety</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-3 text-orange">Can Usually Wait:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Slow dripping faucet</li>
                    <li>• Running toilet (contained)</li>
                    <li>• Minor cracks or cosmetic damage</li>
                    <li>• Scheduled maintenance needs</li>
                    <li>• Non-critical repairs</li>
                    <li>• Upgrades and improvements</li>
                    <li>• Routine service calls</li>
                    <li>• Planned renovations</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6 text-sm">
                Not sure if it's an emergency? Call us anyway - we'll help you determine the urgency and best course of action.
              </p>
            </div>
          </div>

          {/* Our Emergency Process */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-navy text-center">
              Our Emergency Response Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold text-navy mb-2">You Call</h4>
                <p className="text-gray-600 text-sm">
                  Reach our 24/7 emergency line and speak with a real person immediately.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold text-navy mb-2">We Respond</h4>
                <p className="text-gray-600 text-sm">
                  Licensed technician dispatched to your location within 1-2 hours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold text-navy mb-2">We Assess</h4>
                <p className="text-gray-600 text-sm">
                  Quick assessment and upfront pricing before starting emergency repairs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="font-bold text-navy mb-2">We Fix It</h4>
                <p className="text-gray-600 text-sm">
                  Professional repair to stop the emergency and restore safety.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-navy text-center">
              Why Choose Creative Constructors for Emergencies?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    ⚡
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy">Rapid Response</h4>
                  <p className="text-gray-600">
                    We prioritize emergencies and typically arrive within 1-2 hours of your call.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    🚛
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy">Fully Equipped</h4>
                  <p className="text-gray-600">
                    Our emergency vehicles carry extensive parts and equipment for on-the-spot repairs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy">Licensed Experts</h4>
                  <p className="text-gray-600">
                    Only fully licensed, insured technicians respond to emergency calls.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    $
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy">Transparent Pricing</h4>
                  <p className="text-gray-600">
                    Clear pricing even in emergencies - no surprise charges after the work is done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-6xl block mb-6 animate-pulse">🚨</span>
          <h2 className="text-4xl font-bold mb-6">Need Emergency Service Right Now?</h2>
          <p className="text-xl mb-8">
            Don't wait - our emergency response team is standing by 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${seoConfig.business.phone}`}
              className="inline-block bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-8 rounded-lg transition-colors text-xl"
            >
              📞 Call Emergency Line: {seoConfig.business.phone}
            </a>
            <Link
              href="/book"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold py-4 px-8 rounded-lg transition-colors text-xl"
            >
              Request Service Online
            </Link>
          </div>
          <p className="mt-6 text-red-100 text-sm">
            Available 24 hours a day, 7 days a week, 365 days a year
          </p>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices category="repair" />
    </>
  );
}
