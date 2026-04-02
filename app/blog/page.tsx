import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { seoConfig } from '@/seo.config'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog | Home Services Tips & Guides',
  description: 'Expert advice, DIY tips, and home improvement guides from Creative Constructors. Learn about home repairs, maintenance, installation, and more in the Dallas-Fort Worth area.',
  openGraph: {
    title: 'Blog | Creative Constructors',
    description: 'Expert advice, DIY tips, and home improvement guides from Creative Constructors.',
    url: `${seoConfig.baseUrl}/blog`,
  },
}

export const revalidate = 60 // Revalidate every 60 seconds

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
  }
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
}

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY)
  
  // Debug logging
  console.log('=== BLOG PAGE DEBUG ===')
  console.log('Posts fetched:', posts?.length || 0)
  console.log('Posts data:', JSON.stringify(posts, null, 2))
  console.log('======================')

  const breadcrumbItems = [
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-black font-barlow-condensed mb-6 text-navy">
              Home Services Blog
            </h1>
            <p className="text-xl text-gray-600">
              Expert advice, DIY tips, and home improvement guides from the professionals at Creative Constructors
            </p>
          </div>

          {/* Posts Grid */}
          {posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Featured Image */}
                  {post.featuredImage && (
                    <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                      <Image
                        src={urlFor(post.featuredImage.asset).width(800).height(400).url()}
                        alt={post.featuredImage.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((category) => (
                          <span
                            key={category.slug.current}
                            className="text-xs font-semibold text-royal-blue bg-blue-50 px-3 py-1 rounded-full"
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-2xl font-bold font-barlow-condensed text-navy mb-3 group-hover:text-royal-blue transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        {post.author.image && (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={urlFor(post.author.image).width(64).height(64).url()}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="font-medium">{post.author.name}</span>
                      </div>
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-8">
                No blog posts yet. Check back soon for expert home services tips and guides!
              </p>
              <Link
                href="/"
                className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
              >
                Return Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
