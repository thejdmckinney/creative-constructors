import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/seo.config";
import PhoneLink from "./PhoneLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <Image
              src="/new-cc-logo-bg-removed.png"
              alt="Creative Constructors LLC Logo"
              width={180}
              height={60}
              className="h-auto w-auto max-h-16 mb-4"
            />
            <p className="text-silver text-sm">
              Reliable, Skilled & Ready to Build.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-silver hover:text-orange transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-orange hover:text-orange/80 transition-colors font-bold"
                >
                  📅 Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/electrical"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Electrical
                </Link>
              </li>
              <li>
                <Link
                  href="/services/plumbing"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Plumbing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hvac"
                  className="text-silver hover:text-orange transition-colors"
                >
                  HVAC
                </Link>
              </li>
              <li>
                <Link
                  href="/services/carpentry"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Carpentry
                </Link>
              </li>
              <li>
                <Link
                  href="/services/smart-home"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Smart Home Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/decks-patios"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Decks & Patios
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/service-areas"
                  className="text-silver hover:text-orange transition-colors"
                >
                  All Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/university-park"
                  className="text-orange hover:text-orange/80 transition-colors font-semibold"
                >
                  University Park
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/highland-park"
                  className="text-orange hover:text-orange/80 transition-colors font-semibold"
                >
                  Highland Park
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/fort-worth"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Fort Worth
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/dallas"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Dallas
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/arlington"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Arlington
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/plano"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Plano
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/garland"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Garland
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/richardson"
                  className="text-silver hover:text-orange transition-colors"
                >
                  Richardson
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info with Schema Markup */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address 
              className="space-y-2 text-silver not-italic"
              itemScope 
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content={seoConfig.business.name} />
              <meta itemProp="url" content={seoConfig.baseUrl} />
              
              <div>
                <PhoneLink 
                  className="hover:text-orange transition-colors block"
                  showIcon
                />
              </div>
              
              <div>
                <a
                  href={`mailto:${seoConfig.business.email}`}
                  className="hover:text-orange transition-colors"
                  itemProp="email"
                >
                  ✉️ {seoConfig.business.email}
                </a>
              </div>
              
              <div className="pt-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p className="text-sm font-semibold text-white mb-1">📍 Office Location:</p>
                <p className="text-sm">
                  <span itemProp="streetAddress">{seoConfig.business.address.streetAddress}</span><br />
                  <span itemProp="addressLocality">{seoConfig.business.address.addressLocality}</span>, <span itemProp="addressRegion">{seoConfig.business.address.addressRegion}</span> <span itemProp="postalCode">{seoConfig.business.address.postalCode}</span>
                </p>
              </div>
              
              <div className="pt-2">
                <p className="text-sm font-semibold text-white mb-1">🏆 Licensed & Insured</p>
                <p className="text-xs text-silver">Serving Dallas-Fort Worth Since 2011</p>
              </div>
              
              <div className="pt-2">
                <p className="text-sm font-semibold text-orange">
                  Serving the Dallas-Fort Worth Metroplex
                </p>
                <p className="text-xs text-silver mt-1">
                  Available 24/7 for Emergency Services
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Trust Signals & Certifications */}
        <div className="border-t border-royal-blue mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-sm font-semibold text-white mb-3">Why Choose Creative Constructors?</h3>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-silver">
              <div className="flex items-center gap-2">
                <span className="text-orange text-lg">✓</span>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange text-lg">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange text-lg">✓</span>
                <span>Same-Day Service Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange text-lg">✓</span>
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange text-lg">✓</span>
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-royal-blue pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-silver text-sm">
            <p>
              &copy; {currentYear} {seoConfig.siteName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-orange transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-orange transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
