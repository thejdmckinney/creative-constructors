"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const services = [
  { name: "Electrical", href: "/services/electrical" },
  { name: "Installation", href: "/services#Installation" },
  { name: "Repair", href: "/services#Repair" },
  { name: "Maintenance", href: "/services#Maintenance" },
  { name: "Assembly", href: "/services#Assembly" },
  { name: "Painting", href: "/services#Painting" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center h-20">
          {/* Left Side - Phone Number */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:817-470-1889"
              className="flex items-center text-navy hover:text-orange transition-colors font-bold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              817-470-1889
            </a>
          </div>

          {/* Center - Logo with Navigation on sides */}
          <div className="hidden lg:flex items-center flex-1 justify-center gap-8">
            {/* Left Navigation */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className={clsx(
                  "font-medium transition-colors",
                  isActive("/") && pathname === "/"
                    ? "text-orange"
                    : "text-gray-700 hover:text-orange"
                )}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={clsx(
                    "font-medium transition-colors",
                    isActive("/services")
                      ? "text-orange"
                      : "text-gray-700 hover:text-orange"
                  )}
                >
                  Services
                </Link>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={clsx(
                          "block px-4 py-2 transition-colors",
                          isActive(service.href)
                            ? "bg-orange text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        )}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Logo in Center */}
            <Link href="/" className="flex items-center mx-8">
              <Image
                src="/New-cc-logo.png"
                alt="Creative Constructors LLC Logo"
                width={220}
                height={80}
                priority
                className="h-auto w-auto max-h-20"
              />
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className={clsx(
                  "font-medium transition-colors",
                  isActive("/about")
                    ? "text-orange"
                    : "text-gray-700 hover:text-orange"
                )}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={clsx(
                  "font-medium transition-colors",
                  isActive("/contact")
                    ? "text-orange"
                    : "text-gray-700 hover:text-orange"
                )}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Side - Request Service Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
            >
              Request Service
            </Link>
          </div>

          {/* Mobile - Logo and Menu Button */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex items-center">
              <Image
                src="/New-cc-logo.png"
                alt="Creative Constructors LLC Logo"
                width={180}
                height={60}
                priority
                className="h-auto w-auto max-h-14"
              />
            </Link>

            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <a
              href="tel:817-470-1889"
              className="flex items-center py-2 text-navy font-bold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              817-470-1889
            </a>
            <Link
              href="/"
              className={clsx(
                "block py-2 font-medium",
                isActive("/") && pathname === "/"
                  ? "text-orange"
                  : "text-gray-700"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={clsx(
                "block py-2 font-medium",
                isActive("/services") ? "text-orange" : "text-gray-700"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <div className="pl-4 space-y-1 mt-1">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={clsx(
                    "block py-1 text-sm",
                    isActive(service.href)
                      ? "text-orange"
                      : "text-gray-600"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              href="/about"
              className={clsx(
                "block py-2 font-medium",
                isActive("/about") ? "text-orange" : "text-gray-700"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={clsx(
                "block py-2 font-medium",
                isActive("/contact") ? "text-orange" : "text-gray-700"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mt-4 bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Service
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
