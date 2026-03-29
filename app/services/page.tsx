"use client";

import Link from "next/link";
import { useState } from "react";

// Metadata moved to layout.tsx or use next/head for client components

const serviceCategories = {
  Installation: [
    "Appliances",
    "Attic ladders",
    "Awnings",
    "Baseboards",
    "Bicycle storage",
    "Bifold doors & windows",
    "Blinds & curtains",
    "Child proofing",
    "Closet systems",
    "Crown molding",
    "Custom built ins",
    "Custom shelving",
    "Decks",
    "Deadbolts & locks",
    "Door installation",
    "Exterior shades & shutters",
    "Faucet installation",
    "Garage storage",
    "Garbage disposal",
    "Gate installation",
    "Toilet installation",
    "Shower valve replacements",
    "Recessed lighting",
    "Roman shades",
    "Curtain rods",
    "Garage door openers",
    "TV mounts",
  ],
  Repair: [
    "Chain link fences",
    "Awning repair",
    "Cabinets & handles",
    "Decks & railings",
    "Doors",
    "Windows",
    "Drywall repair",
    "Faucet leaks",
    "Fence repair",
    "Flooring repairs",
    "Gate & fence",
    "Grout repair",
    "Laminate flooring",
    "Linoleum flooring",
    "Roof flashing",
    "Shower doors",
    "Soffit repair",
    "Fascia repair",
    "Stairs & railings",
    "Ventilation repair",
    "Window screens",
    "Window sills",
    "Wood fencing",
    "Wood rot",
    "Garage door repair",
    "Floor squeaks",
    "Stair-step crack foundation repairs",
    "Settlement crack repair",
    "Tuck pointing",
    "Cosmetic crack repair",
  ],
  Maintenance: [
    "Attic restoration",
    "Bathroom plumbing",
    "Cabinet refacing",
    "Carpentry",
    "Caulking",
    "Ceiling painting",
    "Deck cleaning",
    "Deck refinishing",
    "Deck staining",
    "Deck waterproofing",
    "Door latch adjusting",
    "Door painting",
    "Drain cleaning",
    "Dryer vent cleaning",
    "Floor polishing",
    "Gutter cleaning",
    "Shower caulking",
    "Waterproofing",
    "Weather stripping",
    "Window caulking",
    "Wood door sealing",
    "Wood finishing",
    "Wood fence staining",
    "Breaker replacements",
  ],
  Assembly: [
    "Appliance assembly",
    "Baby gear assembly",
    "Basketball hoop assembly",
    "Bed frame assembly",
    "Bike rack assembly",
    "Desk assembly",
    "Exercise equipment assembly",
    "Fence assembly",
    "Fixture assembly",
    "Furniture assembly",
    "Garage storage assembly",
    "Office furniture assembly",
    "Outdoor equipment assembly",
    "Pergola assembly",
    "Pet furniture assembly",
    "Shelving assembly",
    "Sofa assembly",
    "Storage rack assembly",
  ],
  Painting: [
    "Interior painting",
    "Accent walls",
    "Brick painting",
    "Tile painting",
    "Doors & trim",
    "Exterior painting",
    "Garage floor epoxy",
  ],
  Electrical: [
    "Outlet replacement",
    "GFCI replacement",
    "Light fixture replacement",
    "Ceiling fan replacement",
    "Dimmer switch installation",
    "Smart switch installation",
    "Smart outlet installation",
    "Smart lighting installation",
    "Security camera installation",
    "Security system installation",
    "Breaker replacement",
    "Garage lighting",
    "Exterior lighting",
    "Landscape lighting",
    "Exhaust fan replacement",
    "Under cabinet lighting",
    "Accent lighting",
    "Chandelier installation",
  ],
};

const services = [
  {
    title: "Electrical Services",
    description:
      "Professional electrical installation, repair, and maintenance for residential and commercial properties. From panel upgrades to lighting installations.",
    href: "/services/electrical",
    icon: "⚡",
  },
  {
    title: "Plumbing Services",
    description:
      "Expert plumbing solutions including repairs, installations, and maintenance. We handle everything from leaky faucets to complete system overhauls.",
    href: "/services/plumbing",
    icon: "🔧",
  },
  {
    title: "HVAC Services",
    description:
      "Keep your home comfortable year-round with our heating, ventilation, and air conditioning services. Installation, repair, and maintenance available.",
    href: "/services/hvac",
    icon: "❄️",
  },
  {
    title: "Carpentry Services",
    description:
      "Custom carpentry and woodworking services for your home or business. From built-ins to trim work, we bring your vision to life.",
    href: "/services/carpentry",
    icon: "🔨",
  },
  {
    title: "Smart Home Installation",
    description:
      "Modernize your home with smart technology. From automated lighting and thermostats to security systems and voice control integration.",
    href: "/services/smart-home",
    icon: "🏠",
  },
  {
    title: "Decks & Patios",
    description:
      "Create the perfect outdoor living space with our deck and patio construction services. Custom designs built to last and enhance your property.",
    href: "/services/decks-patios",
    icon: "🏡",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof serviceCategories>("Installation");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-silver max-w-3xl">
            Comprehensive home services delivered by licensed, insured professionals.
            We're your one-stop solution for all residential and commercial projects
            in the Dallas-Fort Worth area.
          </p>
        </div>
      </section>

      {/* Detailed Services Table with Tabs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 text-navy text-center">
            Complete Service List
          </h2>
          <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
            Browse our comprehensive list of services by category. Every service is performed 
            by licensed professionals with quality guaranteed.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(serviceCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category as keyof typeof serviceCategories)}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  activeTab === category
                    ? "bg-royal-blue text-white shadow-lg scale-105"
                    : "bg-silver/30 text-navy hover:bg-silver/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Table */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-silver overflow-hidden">
            <div className="bg-gradient-to-r from-navy to-royal-blue text-white p-6">
              <h3 className="text-2xl font-bold">{activeTab} Services</h3>
              <p className="text-silver mt-2">
                {serviceCategories[activeTab].length} services available
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 p-1 bg-silver/20">
              {serviceCategories[activeTab].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded hover:bg-orange/5 transition-colors flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-royal-blue/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                    <svg
                      className="w-4 h-4 text-royal-blue group-hover:text-orange transition-colors"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-navy transition-colors font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-navy text-center">
            Featured Service Areas
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Learn more about our specialized service areas with detailed information 
            about what we offer.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.href}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-orange overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4 text-navy">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-block bg-royal-blue hover:bg-royal-blue/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-navy">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us for a free consultation. We'll help you determine the best
            solution for your project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
