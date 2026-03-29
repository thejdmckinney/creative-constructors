import Link from "next/link";

interface RelatedService {
  name: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  currentService?: string;
  category?: "installation" | "repair" | "maintenance" | "assembly" | "painting" | "electrical";
}

const allServices = {
  installation: {
    name: "Installation Services",
    href: "/services/installation",
    description: "Professional installation for appliances, fixtures, and more",
  },
  repair: {
    name: "Repair Services",
    href: "/services/repair",
    description: "Fast, reliable repairs for your home and property",
  },
  maintenance: {
    name: "Maintenance Services",
    href: "/services/maintenance",
    description: "Preventive care to protect your home investment",
  },
  assembly: {
    name: "Assembly Services",
    href: "/services/assembly",
    description: "Expert furniture and equipment assembly",
  },
  painting: {
    name: "Painting Services",
    href: "/services/painting",
    description: "Interior and exterior painting excellence",
  },
  electrical: {
    name: "Electrical Services",
    href: "/services/electrical",
    description: "Licensed electrical work for home and business",
  },
};

export default function RelatedServices({ currentService, category }: RelatedServicesProps) {
  // Get related services (exclude current)
  const related = Object.entries(allServices)
    .filter(([key]) => key !== category)
    .map(([_, service]) => service)
    .slice(0, 3);

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white border-t-2 border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Explore Our Other Services
            </h2>
            <p className="text-gray-600">
              Complete home services under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {related.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-2 border-transparent hover:border-orange"
              >
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-orange transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-orange font-bold inline-flex items-center gap-2">
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-navy hover:bg-navy/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
