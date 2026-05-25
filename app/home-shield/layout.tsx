import type { Metadata } from "next";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: `Home Shield Program - University Park & Highland Park Home Maintenance`,
  description: `Home Shield: Year-round home care for University Park & Highland Park estates. 4 quarterly inspections, preventive maintenance, small repairs included. Direct access to Jeremy. From $249/month. ${seoConfig.business.phone}`,
  keywords: [
    "home maintenance program Dallas",
    "home maintenance plan Fort Worth",
    "preventive home maintenance DFW",
    "home inspection service Dallas",
    "home shield warranty",
    "annual home maintenance Dallas",
    "home care plan Fort Worth",
    "property maintenance program",
  ],
  alternates: {
    canonical: "/home-shield",
  },
  openGraph: {
    title: `Home Shield Program | ${seoConfig.siteName}`,
    description: "Year-round protection and peace of mind with quarterly inspections, priority service, and expert care for your home.",
    url: "/home-shield",
  },
};

export default function HomeShieldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
