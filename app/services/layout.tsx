import type { Metadata } from "next";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: `Professional Home Services in Dallas-Fort Worth | ${seoConfig.business.name}`,
  description: `Full suite of home services including plumbing, electrical, HVAC, painting, carpentry, flooring, and more across Dallas-Fort Worth. Licensed & insured. 15+ years experience. Call ${seoConfig.business.phone}`,
  keywords: [
    "home services Dallas",
    "handyman services Fort Worth",
    "home repair DFW",
    "home improvement Dallas",
    "residential contractor Fort Worth",
    "home maintenance Dallas",
    "licensed handyman DFW",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Home Services | ${seoConfig.siteName}`,
    description: "Full suite of home services across Dallas-Fort Worth. Professional installation, repair, maintenance, and more.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
