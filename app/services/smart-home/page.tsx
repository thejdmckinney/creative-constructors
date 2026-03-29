import { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

const serviceArea = "Dallas-Fort Worth Metroplex";

export const metadata: Metadata = {
  title: `Smart Home Installation Services in ${serviceArea} | ${seoConfig.business.name}`,
  description: `Professional smart home installation services in ${serviceArea}. From automated lighting and thermostats to security systems and voice control integration. Expert installation by licensed technicians.`,
  alternates: {
    canonical: `${seoConfig.baseUrl}/services/smart-home`,
  },
  openGraph: {
    title: `Smart Home Installation Services | ${seoConfig.business.name}`,
    description: `Modernize your home with professional smart home technology installation in ${serviceArea}.`,
    url: `${seoConfig.baseUrl}/services/smart-home`,
    siteName: seoConfig.business.name,
    locale: "en_US",
    type: "website",
  },
};

export default function SmartHomePage() {
  const services = [
    {
      title: "Smart Lighting",
      description: "Automated lighting control with dimming, scheduling, and voice commands. Create the perfect ambiance for any occasion.",
      icon: "💡",
    },
    {
      title: "Smart Thermostats",
      description: "Energy-efficient climate control that learns your preferences and optimizes your heating and cooling automatically.",
      icon: "🌡️",
    },
    {
      title: "Security Systems",
      description: "Advanced security with smart locks, doorbell cameras, motion sensors, and 24/7 monitoring capabilities.",
      icon: "🔒",
    },
    {
      title: "Voice Control Integration",
      description: "Seamless integration with Amazon Alexa, Google Assistant, and Apple HomeKit for hands-free home control.",
      icon: "🎙️",
    },
    {
      title: "Smart Plugs & Switches",
      description: "Convert existing appliances and fixtures to smart devices with programmable plugs and switches.",
      icon: "🔌",
    },
    {
      title: "Home Automation Hubs",
      description: "Centralized control systems that connect all your smart devices for unified home automation.",
      icon: "🎛️",
    },
    {
      title: "Video Surveillance",
      description: "High-definition security cameras with remote viewing, motion detection, and cloud storage options.",
      icon: "📹",
    },
    {
      title: "Smart Garage Doors",
      description: "Remote garage door control and monitoring from anywhere with real-time notifications.",
      icon: "🚪",
    },
    {
      title: "Whole-Home Integration",
      description: "Complete smart home systems that connect lighting, security, climate, and entertainment seamlessly.",
      icon: "🏠",
    },
  ];

  const features = [
    {
      title: "Expert Installation",
      description: "Our certified technicians ensure proper installation and configuration of all smart home devices for optimal performance and security.",
    },
    {
      title: "System Design",
      description: "We design custom smart home solutions tailored to your lifestyle, budget, and existing home infrastructure.",
    },
    {
      title: "Training & Support",
      description: "Comprehensive training on your new smart home system, plus ongoing support to help you get the most from your investment.",
    },
    {
      title: "Future-Proof Technology",
      description: "We install scalable systems that grow with your needs and integrate with emerging smart home technologies.",
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy to-royal-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Home Installation Services
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Transform your house into an intelligent home with cutting-edge automation technology. 
              Professional installation by licensed technicians in the {serviceArea}.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
              Our Smart Home Services
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              From single device installation to complete home automation systems, we provide 
              comprehensive smart home solutions that enhance comfort, security, and efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-silver hover:border-royal-blue rounded-lg p-6 transition-all hover:shadow-lg group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-royal-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              Why Choose Creative Constructors for Smart Home Installation?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-royal-blue mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              Benefits of a Smart Home
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Energy Savings</h3>
                <p className="text-gray-600">
                  Smart thermostats and lighting can reduce energy bills by up to 30% through automated optimization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Enhanced Security</h3>
                <p className="text-gray-600">
                  Monitor and control your home from anywhere with advanced security systems and real-time alerts.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ✨
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Convenience</h3>
                <p className="text-gray-600">
                  Control lighting, temperature, locks, and more with voice commands or from your smartphone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-navy to-royal-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Modernize Your Home?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us today for a free consultation and discover how smart home technology 
              can transform your daily life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Schedule Consultation
              </Link>
              <a
                href={`tel:${seoConfig.business.phone}`}
                className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Call {seoConfig.business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
