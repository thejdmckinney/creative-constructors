import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { POST_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/queries'
import { seoConfig } from '@/seo.config'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { PortableText } from 'next-sanity'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  featuredImage: {
    asset: { url: string; metadata: any }
    alt: string
  }
  author: {
    name: string
    slug: { current: string }
    image?: any
    bio?: string
    role?: string
  }
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
  tags?: string[]
  body: any
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(POST_SLUGS_QUERY)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch<Post>(POST_QUERY, { slug })

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt
  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage.asset).width(1200).height(630).url()
    : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${seoConfig.baseUrl}/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: imageUrl ? [{ url: imageUrl, alt: post.featuredImage.alt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await client.fetch<Post>(POST_QUERY, { slug })

  if (!post) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${slug}` },
  ]

  // Portable Text components
  const portableTextComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset) return null
        return (
          <figure className="my-8">
            <div className="relative w-full h-96">
              <Image
                src={urlFor(value).width(1200).height(600).url()}
                alt={value.alt || 'Blog image'}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {value.caption && (
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {value.caption}
              </figcaption>
            )}
          </figure>
        )
      },
    },
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-bold font-barlow-condensed text-navy mt-12 mb-4">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-bold font-barlow-condensed text-navy mt-8 mb-3">
          {children}
        </h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-xl font-bold font-barlow-condensed text-navy mt-6 mb-2">
          {children}
        </h4>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-orange pl-6 py-2 my-6 italic text-gray-700">
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a
            href={value.href}
            rel={rel}
            target={value.blank ? '_blank' : undefined}
            className="text-royal-blue hover:text-navy underline font-medium"
          >
            {children}
          </a>
        )
      },
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside my-6 space-y-2 text-gray-700">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside my-6 space-y-2 text-gray-700">{children}</ol>
      ),
    },
  }

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="max-w-4xl mx-auto mb-12">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <span
                    key={category.slug.current}
                    className="text-sm font-semibold text-royal-blue bg-blue-50 px-4 py-2 rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-black font-barlow-condensed text-navy mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).width(96).height(96).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-bold text-navy">{post.author.name}</p>
                  {post.author.role && (
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  )}
                </div>
              </div>
              <div className="text-sm">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={urlFor(post.featuredImage.asset).width(1200).height(630).url()}
                  alt={post.featuredImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-navy max-w-none">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {post.author.bio && (
              <div className="mt-12 p-8 bg-silver/20 rounded-xl">
                <h3 className="text-xl font-bold font-barlow-condensed text-navy mb-4">
                  About the Author
                </h3>
                <div className="flex gap-4">
                  {post.author.image && (
                    <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={urlFor(post.author.image).width(160).height(160).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-navy text-lg">{post.author.name}</p>
                    {post.author.role && (
                      <p className="text-sm text-gray-600 mb-2">{post.author.role}</p>
                    )}
                    <p className="text-gray-700">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 text-center bg-gradient-to-r from-navy to-royal-blue p-12 rounded-xl text-white">
              <h2 className="text-3xl font-bold font-barlow-condensed mb-4">
                Need Professional Help?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact Creative Constructors for expert home services in Dallas-Fort Worth
              </p>
              <Link
                href="/contact"
                className="inline-block bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-royal-blue hover:text-navy font-bold transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.featuredImage
              ? urlFor(post.featuredImage.asset).width(1200).height(630).url()
              : undefined,
            datePublished: post.publishedAt,
            author: {
              '@type': 'Person',
              name: post.author.name,
            },
            publisher: {
              '@type': 'Organization',
              name: seoConfig.siteName,
              url: seoConfig.baseUrl,
            },
          }),
        }}
      />
    </>
  )
}
