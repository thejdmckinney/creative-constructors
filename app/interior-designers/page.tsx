import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DesignerContactForm from "@/components/DesignerContactForm";

export const metadata: Metadata = {
  title: "Installation Services for Interior Designers | Creative Constructors",
  description: "Professional installation and finishing services for interior designers in Dallas-Fort Worth. We handle curtain rods, wall art, shelving, roman shades, rugs, furniture assembly & more. Your trusted installation partner.",
  keywords: [
    "interior designer installation services Dallas",
    "designer installation partner Fort Worth",
    "curtain rod installation Dallas",
    "wall art hanging service",
    "furniture assembly for designers",
    "finish work Dallas",
    "interior designer contractor Dallas",
    "design installation specialist",
  ],
  openGraph: {
    title: "Installation Services for Interior Designers | Creative Constructors",
    description: "Professional installation partner for interior designers in DFW. Expert finishing work that makes your designs shine.",
    url: "/interior-designers",
  },
};

export default function InteriorDesignersPage() {
  const services = [
    {
      icon: "🪟",
      title: "Window Treatments",
      items: ["Curtain rods & hardware", "Roman shades", "Blinds installation", "Drapery mounting"]
    },
    {
      icon: "🖼️",
      title: "Wall Art & Decor",
      items: ["Artwork hanging", "Gallery walls", "Mirrors", "Heavy piece mounting"]
    },
    {
      icon: "📐",
      title: "Shelving & Storage",
      items: ["Floating shelves", "Built-in units", "Custom closet systems", "Display shelving"]
    },
    {
      icon: "🛋️",
      title: "Furniture & Assembly",
      items: ["Furniture assembly", "Custom pieces", "Bed frames", "Modular units"]
    },
    {
      icon: "🎨",
      title: "Finish Work",
      items: ["Trim installation", "Molding & millwork", "Hardware installation", "Touch-up work"]
    },
    {
      icon: "🧵",
      title: "Specialty Installations",
      items: ["Rug installation", "Wallpaper prep", "Lighting fixtures", "Custom projects"]
    },
  ];

  const designerBenefits = [
    {
      icon: "✓",
      title: "Designer-Friendly Communication",
      description: "We speak your language. Provide specs, and we execute precisely."
    },
    {
      icon: "⏰",
      title: "Flexible Scheduling",
      description: "We work around your client's schedule and project timelines."
    },
    {
      icon: "🔧",
      title: "Professional Installation",
      description: "Meticulous work that honors your design vision and client's investment."
    },
    {
      icon: "📸",
      title: "Photo-Ready Results",
      description: "Installation quality that looks perfect in your portfolio shots."
    },
    {
      icon: "🤝",
      title: "Reliable Partnership",
      description: "Consistent quality, responsive communication, and dependable service."
    },
    {
      icon: "💼",
      title: "Professional Presentation",
      description: "Respectful, clean, and discreet service that reflects well on you."
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange font-bold">✨ For Interior Design Professionals</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-barlow-condensed mb-6 leading-tight">
            Your Trusted Installation Partner in Dallas-Fort Worth
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Focus on design while we handle the installation. Professional, reliable finishing services that make your vision a reality—on time, on spec, and beautifully executed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:817-470-1889"
              className="bg-orange hover:bg-orange/90 text-white font-bold py-5 px-10 rounded-lg transition-colors text-center text-lg shadow-xl"
            >
              📞 Call (817) 470-1889
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-5 px-10 rounded-lg transition-colors text-center text-lg shadow-xl"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Designers Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Why Interior Designers Partner With Us
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We understand the designer-client relationship and work to enhance it, not complicate it
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Installation Services We Provide
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            From window treatments to finish work—we handle it all
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="text-orange mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            How We Work Together
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            A seamless process designed for design professionals
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">You Design</h3>
              <p className="text-gray-600 text-sm">Share specs, measurements, and installation requirements with us</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">We Quote</h3>
              <p className="text-gray-600 text-sm">Fast, transparent pricing for your project scope</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">We Install</h3>
              <p className="text-gray-600 text-sm">Professional execution that brings your vision to life</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">Client Delighted</h3>
              <p className="text-gray-600 text-sm">Perfect installation that showcases your design beautifully</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-orange text-4xl">⭐</span>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold mb-6 italic">
            "Working with Creative Constructors has transformed how I deliver projects to my clients"
          </blockquote>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We've partnered with Creative Constructors on dozens of installations—from simple curtain rods to complex custom millwork. Jeremy and his team are professional, responsive, and consistently deliver flawless work. My clients love the results, and I love having a reliable installation partner I can count on.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
            <p className="font-bold">Dallas Interior Designer</p>
            <p className="text-sm text-gray-400">Partnership since 2024</p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Serving Designers Throughout DFW
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Professional installation services across the Dallas-Fort Worth metroplex
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center shadow-md border-2 border-orange/20">
              <div className="text-3xl mb-2">🏛️</div>
              <h3 className="font-bold text-navy">University Park</h3>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md border-2 border-orange/20">
              <div className="text-3xl mb-2">👑</div>
              <h3 className="font-bold text-navy">Highland Park</h3>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl mb-2">🌆</div>
              <h3 className="font-bold text-navy">Dallas</h3>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="font-bold text-navy">Fort Worth</h3>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas" className="text-orange hover:text-orange/80 font-bold text-lg">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ for Designers */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Common Questions from Designers
          </h2>
          <div className="space-y-6 mt-12">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: Can you work directly with my clients, or do I need to be present?
              </h3>
              <p className="text-gray-700">
                We're flexible. Many designers prefer we coordinate directly with their clients for scheduling and access, while others want to be present. We'll follow your preferred approach and always keep you in the loop.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: How do you handle billing—can I bill the client and pay you, or do you bill directly?
              </h3>
              <p className="text-gray-700">
                We're set up for both models. We can bill you directly and you mark up for your client, or we can bill the client directly while keeping you copied. Whatever works best for your business model.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: What if something doesn't go perfectly? How do you handle issues?
              </h3>
              <p className="text-gray-700">
                We stand behind our work 100%. If there's any issue, we fix it immediately at no charge. Your reputation is on the line, and we treat it as seriously as our own. We also carry full liability insurance for your protection.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: Do you offer designer/trade pricing or volume discounts?
              </h3>
              <p className="text-gray-700">
                Yes! We offer preferred pricing for designers who send us regular work. Let's discuss your typical project volume and we'll create a partnership structure that works for both of us.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: Can you handle last-minute or rush jobs?
              </h3>
              <p className="text-gray-700">
                We understand design timelines can shift. While we can't always accommodate same-day requests, we do our best to be flexible for our designer partners. Give us a call and we'll see what we can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your project needs and let's discuss how we can support your design vision
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <DesignerContactForm />
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Prefer to talk? Give us a call!</p>
            <a
              href="tel:817-470-1889"
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              � (817) 470-1889
            </a>
            <p className="text-sm text-gray-500 mt-6">
              Serving interior designers throughout Dallas-Fort Worth • Licensed & Insured • Trade-Friendly
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
