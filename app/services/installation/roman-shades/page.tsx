import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roman Shade Installation Services | Creative Constructors",
  description: "Professional roman shade installation in Dallas-Fort Worth. Expert mounting, precise measurements, and flawless installation for all types of roman shades. Interior designer partnerships welcome.",
  keywords: [
    "roman shade installation Dallas",
    "window shade installation Fort Worth",
    "roman blind installation",
    "window treatment installation",
    "shade mounting service Dallas",
    "interior designer installation partner",
  ],
  openGraph: {
    title: "Roman Shade Installation Services | Creative Constructors",
    description: "Expert roman shade installation for homes and designers in Dallas-Fort Worth.",
    url: "/services/installation/roman-shades",
  },
};

export default function RomanShadesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange font-bold">🪟 Professional Installation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-barlow-condensed mb-6 leading-tight">
            Roman Shade Installation Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Expert installation for all types of roman shades. Precise measurements, perfect mounting, 
            and flawless operation—every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:817-470-1889"
              className="bg-orange hover:bg-orange/90 text-white font-bold py-5 px-10 rounded-lg transition-colors text-center text-lg shadow-xl"
            >
              📞 Call (817) 470-1889
            </a>
            <Link
              href="/book"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-5 px-10 rounded-lg transition-colors text-center text-lg shadow-xl"
            >
              Book Installation
            </Link>
          </div>
        </div>
      </section>

      {/* Types of Roman Shades We Install */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Roman Shades We Install
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Experienced with all styles and mounting systems
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">📐</div>
              <h3 className="text-2xl font-bold text-navy mb-4">Flat Roman Shades</h3>
              <p className="text-gray-600">
                Clean, modern flat fold design. Perfect for contemporary spaces and minimalist aesthetics.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold text-navy mb-4">Hobbled Roman Shades</h3>
              <p className="text-gray-600">
                Classic cascading folds that create elegant depth and texture when raised or lowered.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold text-navy mb-4">Waterfall Roman Shades</h3>
              <p className="text-gray-600">
                Soft, continuous curve design that adds sophisticated drama to any window.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-navy mb-4">Relaxed Roman Shades</h3>
              <p className="text-gray-600">
                Gentle dip at the bottom for a casual, inviting look with beautiful draping.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-navy mb-4">Custom Lined Shades</h3>
              <p className="text-gray-600">
                Single, double, or blackout lining options for light control and energy efficiency.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🔌</div>
              <h3 className="text-2xl font-bold text-navy mb-4">Motorized Roman Shades</h3>
              <p className="text-gray-600">
                Smart home integration with remote control or app-based operation for convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Installation Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Our Installation Process
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Professional installation that ensures perfect fit and function
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">Measurement Verification</h3>
              <p className="text-gray-600 text-sm">
                We verify all measurements and check mounting surfaces for proper installation
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">Hardware Prep</h3>
              <p className="text-gray-600 text-sm">
                Prepare mounting brackets and hardware, ensuring level and secure placement
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">Precise Mounting</h3>
              <p className="text-gray-600 text-sm">
                Install brackets and mount shades with precision for perfect alignment
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                4
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">Testing & Adjustment</h3>
              <p className="text-gray-600 text-sm">
                Test operation, adjust tension, and ensure smooth raising and lowering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Why Choose Creative Constructors?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Trusted by homeowners and interior designers throughout Dallas-Fort Worth
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Precision Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Meticulous attention to detail ensures perfect operation and beautiful appearance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Designer-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                We work seamlessly with interior designers to execute their vision perfectly
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Fast Turnaround</h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible scheduling and efficient installation to meet your timeline
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">All Mounting Types</h3>
              <p className="text-gray-600 leading-relaxed">
                Inside mount, outside mount, or ceiling mount—we handle all configurations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Damage Prevention</h3>
              <p className="text-gray-600 leading-relaxed">
                Careful protection of walls, trim, and fabrics during installation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Hardware Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced with all major brands and custom hardware systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Roman Shade Installation Across DFW
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Professional window treatment installation throughout the Dallas-Fort Worth area
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Common Questions
          </h2>
          <div className="space-y-6 mt-12">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: Do you install roman shades from any retailer or designer?
              </h3>
              <p className="text-gray-700">
                Yes! We install roman shades from any source—whether you purchased them from a big-box 
                retailer, online, through an interior designer, or from a custom workroom. We work with 
                all brands and mounting systems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: How long does roman shade installation typically take?
              </h3>
              <p className="text-gray-700">
                Most single window installations take 30-45 minutes. Multiple windows in the same room 
                can be done more efficiently. We'll provide a time estimate based on your specific project 
                during scheduling.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: What if the shades don't fit perfectly?
              </h3>
              <p className="text-gray-700">
                We verify measurements before installation and will advise if there are any issues. If 
                adjustments are needed, we'll work with you and your designer or retailer to find the 
                best solution before mounting.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: Can you install motorized roman shades?
              </h3>
              <p className="text-gray-700">
                Absolutely! We're experienced with all major motorized shade systems including Lutron, 
                Somfy, and others. We can integrate them with your existing smart home system as well.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange">
              <h3 className="text-xl font-bold text-navy mb-3">
                Q: Do you work directly with interior designers?
              </h3>
              <p className="text-gray-700">
                Yes! We partner with many interior designers in the DFW area for window treatment 
                installation. We understand designer specifications and can coordinate directly with 
                your clients when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-orange">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-white mb-4">
            Ready to Install Your Roman Shades?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get professional installation with precision and care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:817-470-1889"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-5 px-10 rounded-lg transition-colors text-lg shadow-xl"
            >
              📞 Call (817) 470-1889
            </a>
            <Link
              href="/book"
              className="bg-navy hover:bg-royal-blue text-white font-bold py-5 px-10 rounded-lg transition-colors text-lg shadow-xl"
            >
              📅 Book Online
            </Link>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            Serving homeowners & interior designers throughout Dallas-Fort Worth
          </p>
        </div>
      </section>
    </main>
  );
}
