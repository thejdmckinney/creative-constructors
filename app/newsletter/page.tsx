import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { NEWSLETTERS_QUERY } from "@/sanity/lib/queries";
import NewsletterSignupForm from "@/components/NewsletterSignupForm";

export const metadata: Metadata = {
  title: "The Home Watch Newsletter | Weekly Home Maintenance Tips | Creative Constructors",
  description: "Get practical home advice from a licensed DFW contractor. Weekly tips on maintenance, repairs, and home improvements delivered to your inbox.",
  keywords: [
    "home maintenance newsletter",
    "home repair tips",
    "DFW contractor",
    "home improvement advice",
    "weekly home tips",
    "handyman newsletter",
  ],
  openGraph: {
    title: "The Home Watch Newsletter | Creative Constructors",
    description: "Practical home advice from a licensed DFW contractor",
    url: "/newsletter",
  },
};

interface Newsletter {
  _id: string;
  issueNumber: number;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  publishedAt: string;
}

async function getNewsletters(): Promise<Newsletter[]> {
  const newsletters = await client.fetch(NEWSLETTERS_QUERY, {}, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  return newsletters;
}

export default async function NewsletterPage() {
  const newsletters = await getNewsletters();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-[#0d1f3d] to-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange font-bold">📰 Weekly Newsletter</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black font-barlow-condensed mb-4">
            The Home Watch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Practical home advice from a licensed DFW contractor
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every week, get actionable tips on home maintenance, repair insights, seasonal checklists, and contractor wisdom to help you protect and improve your home.
          </p>
        </div>
      </section>

      {/* Newsletter Signup Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <NewsletterSignupForm />
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-8">
            Past Issues
          </h2>

          {newsletters.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <p className="text-gray-600 text-lg mb-4">
                📰 The first issue of The Home Watch is coming soon!
              </p>
              <p className="text-gray-500">
                Sign up above to get notified when we publish.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {newsletters.map((newsletter) => (
                <Link
                  key={newsletter._id}
                  href={`/newsletter/${newsletter.slug.current}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border-2 border-transparent hover:border-orange"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block bg-navy text-white font-bold text-sm px-3 py-1 rounded-full">
                          Issue #{String(newsletter.issueNumber).padStart(3, '0')}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {new Date(newsletter.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black font-barlow-condensed text-navy group-hover:text-orange transition-colors mb-2">
                        {newsletter.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {newsletter.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center text-orange font-bold group-hover:translate-x-2 transition-transform whitespace-nowrap">
                      Read Issue <span className="ml-2">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-4">
            Need Help With Your Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From routine repairs to emergency fixes, Creative Constructors is your trusted local handyman service across the Dallas-Fort Worth metroplex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:817-470-1889"
              className="bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center text-lg"
            >
              📞 Call (817) 470-1889
            </a>
            <Link
              href="/book"
              className="bg-navy hover:bg-navy/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center text-lg"
            >
              📅 Book Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
