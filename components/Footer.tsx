import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/seo.config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
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

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-silver">
              <li>
                {/* TODO: Add actual phone number */}
                <a
                  href={`tel:${seoConfig.business.phone}`}
                  className="hover:text-orange transition-colors"
                >
                  {seoConfig.business.phone}
                </a>
              </li>
              <li>
                {/* TODO: Add actual email */}
                <a
                  href={`mailto:${seoConfig.business.email}`}
                  className="hover:text-orange transition-colors"
                >
                  {seoConfig.business.email}
                </a>
              </li>
              <li className="pt-2">
                <p className="text-sm">
                  Serving the Dallas-Fort Worth Metroplex
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-royal-blue mt-8 pt-8 text-center text-silver text-sm">
          <p>
            &copy; {currentYear} {seoConfig.siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
