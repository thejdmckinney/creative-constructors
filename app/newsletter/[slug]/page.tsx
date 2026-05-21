import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { NEWSLETTER_QUERY, NEWSLETTER_SLUGS_QUERY } from "@/sanity/lib/queries";
import NewsletterSignupForm from "@/components/NewsletterSignupForm";
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Newsletter {
  _id: string;
  issueNumber: number;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  publishedAt: string;
  featuredImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt: string;
  };
  content: any[];
}

// Generate static params for all newsletters
export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(NEWSLETTER_SLUGS_QUERY);
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each newsletter
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const newsletter: Newsletter = await client.fetch(NEWSLETTER_QUERY, {
    slug: params.slug,
  });

  if (!newsletter) {
    return {
      title: "Newsletter Not Found",
    };
  }

  return {
    title: `Issue #${String(newsletter.issueNumber).padStart(3, '0')}: ${newsletter.title} | The Home Watch`,
    description: newsletter.excerpt,
    openGraph: {
      title: `Issue #${String(newsletter.issueNumber).padStart(3, '0')}: ${newsletter.title}`,
      description: newsletter.excerpt,
      url: `/newsletter/${newsletter.slug.current}`,
    },
  };
}

async function getNewsletter(slug: string): Promise<Newsletter | null> {
  const newsletter = await client.fetch(
    NEWSLETTER_QUERY,
    { slug },
    {
      next: { revalidate: 60 },
    }
  );
  return newsletter;
}

export default async function NewsletterIssuePage({
  params,
}: {
  params: { slug: string };
}) {
  const newsletter = await getNewsletter(params.slug);

  if (!newsletter) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy via-[#0d1f3d] to-navy text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/newsletter"
            className="inline-flex items-center text-orange hover:text-orange/80 font-bold mb-6 transition-colors"
          >
            ← Back to All Issues
          </Link>
          
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-4">
            <span className="text-orange font-bold">
              Issue #{String(newsletter.issueNumber).padStart(3, '0')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black font-barlow-condensed mb-4">
            {newsletter.title}
          </h1>
          
          <p className="text-gray-300 text-lg">
            {new Date(newsletter.publishedAt).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            {newsletter.featuredImage && (
              <div className="w-full aspect-[21/9] relative overflow-hidden">
                <img
                  src={urlFor(newsletter.featuredImage.asset)
                    .width(1200)
                    .height(514)
                    .quality(90)
                    .url()}
                  alt={newsletter.featuredImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Newsletter Body - Rendered with PortableText */}
            <div className="p-8 md:p-12">
              <div
                className="newsletter-content prose prose-lg max-w-none
                  prose-headings:font-barlow-condensed 
                  prose-headings:font-black 
                  prose-headings:text-navy
                  prose-h1:text-4xl
                  prose-h2:text-3xl
                  prose-h3:text-2xl
                  prose-p:text-gray-700
                  prose-p:leading-relaxed
                  prose-a:text-orange
                  prose-a:no-underline
                  prose-a:font-bold
                  hover:prose-a:underline
                  prose-strong:text-navy
                  prose-ul:text-gray-700
                  prose-ol:text-gray-700
                  prose-li:marker:text-orange
                  prose-blockquote:border-l-4
                  prose-blockquote:border-orange
                  prose-blockquote:bg-gray-50
                  prose-blockquote:py-2
                  prose-blockquote:px-4
                  prose-img:rounded-lg
                  prose-img:shadow-md"
              >
                <PortableText value={newsletter.content} />
              </div>
            </div>
          </article>

          {/* Signup CTA */}
          <div className="mt-12">
            <NewsletterSignupForm />
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              href="/newsletter"
              className="inline-flex items-center text-navy hover:text-orange font-bold transition-colors"
            >
              ← View All Issues
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-black font-barlow-condensed text-navy mb-6 text-center">
            Need Professional Help?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/services"
              className="bg-gray-50 hover:bg-orange hover:text-white border-2 border-gray-200 hover:border-orange rounded-lg p-6 text-center transition-all group"
            >
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold text-navy group-hover:text-white">Our Services</h3>
            </Link>
            <Link
              href="/book"
              className="bg-gray-50 hover:bg-orange hover:text-white border-2 border-gray-200 hover:border-orange rounded-lg p-6 text-center transition-all group"
            >
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-bold text-navy group-hover:text-white">Book Online</h3>
            </Link>
            <a
              href="tel:817-470-1889"
              className="bg-gray-50 hover:bg-orange hover:text-white border-2 border-gray-200 hover:border-orange rounded-lg p-6 text-center transition-all group"
            >
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-bold text-navy group-hover:text-white">Call Us</h3>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
