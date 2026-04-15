import { Metadata } from 'next'
import { client, urlFor } from '@/sanity/lib/client'
import {
  HERO_PROJECT_QUERY,
  FEATURED_PROJECTS_QUERY,
  ALL_PROJECTS_QUERY,
} from '@/sanity/lib/queries'
import { seoConfig } from '@/seo.config'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Our Work | Project Gallery & Transformations',
  description:
    'See the difference Creative Constructors makes. Browse our gallery of completed home repair, renovation, and improvement projects across the Dallas-Fort Worth area.',
  openGraph: {
    title: 'Our Work | Creative Constructors',
    description:
      'See our completed home repair and renovation projects across Dallas-Fort Worth.',
    url: `${seoConfig.baseUrl}/gallery`,
  },
}

export const revalidate = 60

type Project = {
  _id: string
  title: string
  slug: { current: string }
  featuredImages?: Array<{
    asset: any
    alt: string
    caption?: string
  }>
  beforeImage?: {
    asset: any
    alt: string
  }
  afterImage?: {
    asset: any
    alt: string
  }
  serviceType: string
  transformationType?: string
  location: string
  completedDate: string
  challenge?: string
  solution?: string
  result?: string
  testimonial?: {
    quote: string
    clientName: string
  }
}

export default async function GalleryPage() {
  const [heroProject, featuredProjects, allProjects] = await Promise.all([
    client.fetch<Project>(HERO_PROJECT_QUERY),
    client.fetch<Project[]>(FEATURED_PROJECTS_QUERY),
    client.fetch<Project[]>(ALL_PROJECTS_QUERY),
  ])

  // Helper to get featured images (new format) or fallback to before/after (legacy)
  const getFeaturedImages = (project: Project) => {
    if (project.featuredImages && project.featuredImages.length >= 2) {
      return project.featuredImages
    }
    // Fallback to legacy before/after
    const images = []
    if (project.beforeImage) images.push(project.beforeImage)
    if (project.afterImage) images.push(project.afterImage)
    return images
  }

  // Helper to get main display image
  const getMainImage = (project: Project) => {
    const featured = getFeaturedImages(project)
    return featured[0] || project.afterImage || project.beforeImage
  }

  const breadcrumbItems = [{ name: 'Gallery', path: '/gallery' }]

  // Prepare hero images outside JSX
  const heroImages = heroProject ? getFeaturedImages(heroProject) : []
  const showHero = heroImages.length >= 2

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section with Interactive Slider */}
        {showHero && heroProject && (
          <section className="relative bg-navy py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-black font-barlow-condensed text-white text-center mb-6">
                  Our Work Speaks for Itself
                </h1>
                <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                  Explore real transformations from real homes across the Dallas-Fort Worth area.
                  Drag the slider to compare images.
                </p>

                {/* Interactive Slider with Featured Images */}
                <div className="w-full h-[400px] md:h-[600px] mb-8">
                  <BeforeAfterSlider
                    beforeImage={urlFor(heroImages[0].asset).width(1200).url()}
                    afterImage={urlFor(heroImages[1].asset).width(1200).url()}
                    beforeAlt={heroImages[0].alt}
                    afterAlt={heroImages[1].alt}
                  />
                </div>

                {/* Hero Project Details */}
                <div className="bg-white rounded-xl p-8 shadow-2xl">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h2 className="text-3xl font-bold font-barlow-condensed text-navy">
                      {heroProject.title}
                    </h2>
                    <span className="bg-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {heroProject.serviceType}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    📍 {heroProject.location} • 📅{' '}
                    {new Date(heroProject.completedDate).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  {heroProject.challenge && (
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                      <div>
                        <h3 className="font-bold text-navy mb-2">The Challenge</h3>
                        <p className="text-gray-700">{heroProject.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-navy mb-2">The Solution</h3>
                        <p className="text-gray-700">{heroProject.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-navy mb-2">The Result</h3>
                        <p className="text-gray-700">{heroProject.result}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Projects Section */}
        {featuredProjects && featuredProjects.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy text-center mb-4">
                  Featured Transformations
                </h2>
                <p className="text-xl text-gray-600 text-center mb-16">
                  Our most impressive projects showcasing our expertise and craftsmanship
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {featuredProjects.map((project) => {
                    const projectImages = getFeaturedImages(project)
                    if (projectImages.length < 2) return null

                    return (
                    <Link
                      key={project._id}
                      href={`/gallery/${project.slug.current}`}
                      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Featured Images Side by Side */}
                      <div className="grid grid-cols-2 h-64">
                        <div className="relative">
                          <Image
                            src={urlFor(projectImages[0].asset).width(400).height(400).url()}
                            alt={projectImages[0].alt}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded text-xs font-bold">
                            BEFORE
                          </div>
                        </div>
                        <div className="relative">
                          <Image
                            src={urlFor(projectImages[1].asset).width(400).height(400).url()}
                            alt={projectImages[1].alt}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-orange text-white px-3 py-1 rounded text-xs font-bold">
                            AFTER
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-50 text-royal-blue px-3 py-1 rounded-full text-xs font-semibold">
                            {project.serviceType}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {project.location}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold font-barlow-condensed text-navy mb-3 group-hover:text-orange transition-colors">
                          {project.title}
                        </h3>

                        {project.challenge && (
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>
                              <span className="font-semibold text-navy">Challenge:</span>{' '}
                              {project.challenge}
                            </p>
                            {project.result && (
                              <p>
                                <span className="font-semibold text-navy">Result:</span>{' '}
                                {project.result}
                              </p>
                            )}
                          </div>
                        )}

                        {project.testimonial && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm italic text-gray-600">
                              "{project.testimonial.quote}"
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              — {project.testimonial.clientName}
                            </p>
                          </div>
                        )}
                      </div>
                    </Link>
                  )})}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Projects Gallery - Masonry Layout */}
        {allProjects && allProjects.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy text-center mb-4">
                  All Projects
                </h2>
                <p className="text-xl text-gray-600 text-center mb-12">
                  Browse our complete portfolio of transformations
                </p>

                {/* Bento Box / Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {allProjects.map((project, index) => {
                    // Create varied tile sizes for Bento box effect
                    const isLarge = index % 7 === 0
                    const isTall = index % 5 === 0
                    const mainImage = getMainImage(project)
                    
                    if (!mainImage) return null

                    return (
                      <Link
                        key={project._id}
                        href={`/gallery/${project.slug.current}`}
                        className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ${
                          isLarge ? 'md:col-span-2 md:row-span-2' : isTall ? 'md:row-span-2' : ''
                        }`}
                      >
                        <div className={`relative ${isLarge ? 'h-96' : isTall ? 'h-80' : 'h-64'}`}>
                          <Image
                            src={urlFor(mainImage.asset).width(600).url()}
                            alt={mainImage.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-bold font-barlow-condensed text-lg mb-1">
                              {project.title}
                            </h3>
                            <p className="text-sm opacity-90">{project.location}</p>
                            <span className="inline-block mt-2 bg-orange px-3 py-1 rounded-full text-xs font-semibold">
                              {project.serviceType}
                            </span>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-white mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create your own before & after story
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange/90 transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
