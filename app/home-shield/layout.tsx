import type { Metadata } from "next";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: `Home Shield Program - Annual Home Maintenance | ${seoConfig.business.name}`,
  description: `Skip the stress of home maintenance with Home Shield. Quarterly inspections, priority service, and direct access to our experts in Dallas-Fort Worth. From $249/month. Call ${seoConfig.business.phone}`,
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
