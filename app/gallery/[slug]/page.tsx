import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client, urlFor } from '@/sanity/lib/client'
import { PROJECT_QUERY, PROJECT_SLUGS_QUERY } from '@/sanity/lib/queries'
import { seoConfig } from '@/seo.config'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

type Project = {
  _id: string
  title: string
  slug: { current: string }
  featuredImages?: Array<{
    asset: any
    alt: string
  }>
  beforeImage?: {
    asset: any
    alt: string
  }
  afterImage?: {
    asset: any
    alt: string
  }
  gallery?: Array<{
    asset: any
    alt?: string
    caption?: string
  }>
  serviceType: string
  transformationType?: string
  location: string
  completedDate: string
  challenge: string
  solution: string
  result: string
  testimonial?: {
    quote: string
    clientName: string
  }
  duration?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(PROJECT_SLUGS_QUERY)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await client.fetch<Project>(PROJECT_QUERY, { slug })

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const title = project.seo?.metaTitle || `${project.title} | Project Gallery`
  const description =
    project.seo?.metaDescription ||
    `${project.challenge} See the transformation in ${project.location}.`

  // Use first featured image or fallback to afterImage
  const metaImage = project.featuredImages?.[0] || project.afterImage
  const imageUrl = metaImage
    ? urlFor(metaImage.asset).width(1200).height(630).url()
    : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${seoConfig.baseUrl}/gallery/${slug}`,
      images: imageUrl ? [imageUrl] : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await client.fetch<Project>(PROJECT_QUERY, { slug })

  if (!project) {
    notFound()
  }

  // Helper to get featured images (new format) or fallback to before/after (legacy)
  const getFeaturedImages = () => {
    if (project.featuredImages && project.featuredImages.length >= 2) {
      return project.featuredImages
    }
    // Fallback to legacy before/after
    const images = []
    if (project.beforeImage) images.push(project.beforeImage)
    if (project.afterImage) images.push(project.afterImage)
    return images
  }

  const featuredImages = getFeaturedImages()
  const hasSlider = featuredImages.length >= 2

  const breadcrumbItems = [
    { name: 'Gallery', path: '/gallery' },
    { name: project.title, path: `/gallery/${slug}` },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                {project.serviceType}
              </span>
              {project.transformationType && (
                <span className="bg-blue-50 text-royal-blue px-4 py-2 rounded-full text-sm font-semibold">
                  {project.transformationType.replace(/-/g, ' ')}
                </span>
              )}
            </div>

            <h1 className="text-5xl md:text-6xl font-black font-barlow-condensed text-navy mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-600 text-lg">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  {new Date(project.completedDate).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              {project.duration && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{project.duration}</span>
                </div>
              )}
            </div>
          </header>

          {/* Featured Images Slider */}
          {hasSlider && (
            <div className="max-w-6xl mx-auto mb-16">
              <div className="w-full aspect-[16/9]">
                <BeforeAfterSlider
                  beforeImage={urlFor(featuredImages[0].asset).fit('max').url()}
                  afterImage={urlFor(featuredImages[1].asset).fit('max').url()}
                  beforeAlt={featuredImages[0].alt}
                  afterAlt={featuredImages[1].alt}
                />
              </div>
            </div>
          )}

          {/* Additional Featured Images (if more than 2) */}
          {featuredImages.length > 2 && (
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold font-barlow-condensed text-navy mb-6 text-center">
                More Featured Images
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredImages.slice(2).map((img, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={urlFor(img.asset).width(800).url()}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold font-barlow-condensed text-navy mb-8">
                Project Story
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⚠️</span>
                    </div>
                    <h3 className="text-xl font-bold font-barlow-condensed text-navy">
                      The Challenge
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold font-barlow-condensed text-navy">
                      The Solution
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold font-barlow-condensed text-navy">
                      The Result
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.result}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Images */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold font-barlow-condensed text-navy mb-8">
                More Photos
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <Image
                      src={urlFor(image.asset).width(600).url()}
                      alt={image.alt || `Project image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-contain"
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
                        {image.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-navy text-white rounded-xl shadow-2xl p-8 md:p-12">
                <svg
                  className="w-12 h-12 text-orange mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <p className="text-orange font-bold">— {project.testimonial.clientName}</p>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-orange to-orange/80 text-white rounded-xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed mb-4">
                Need Similar Work Done?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                We'd love to help transform your home too!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>

          {/* Back to Gallery */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-royal-blue hover:text-navy font-semibold transition-colors"
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
              Back to Gallery
            </Link>
          </div>
        </div>
      </article>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: project.title,
            description: project.challenge,
            image: featuredImages.length > 0 
              ? urlFor(featuredImages[0].asset).width(1200).url()
              : undefined,
            datePublished: project.completedDate,
            provider: {
              '@type': 'Organization',
              name: 'Creative Constructors LLC',
              address: {
                '@type': 'PostalAddress',
                addressLocality: project.location,
                addressRegion: 'TX',
              },
            },
          }),
        }}
      />
    </>
  )
}
