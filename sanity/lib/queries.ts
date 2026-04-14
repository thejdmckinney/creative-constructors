import { groq } from 'next-sanity'

// Get all published posts
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  featuredImage{
    asset,
    alt
  },
  author->{
    name,
    slug,
    image
  },
  categories[]->{
    title,
    slug
  }
}`

// Get a single post by slug
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  featuredImage{
    asset,
    alt
  },
  author->{
    name,
    slug,
    image,
    bio,
    role
  },
  categories[]->{
    title,
    slug
  },
  tags,
  body,
  seo
}`

// Get slugs for static generation
export const POST_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)][].slug.current`

// Get hero project (for gallery page hero section)
export const HERO_PROJECT_QUERY = groq`*[_type == "project" && heroProject == true][0] {
  _id,
  title,
  slug,
  featuredImages[]{
    asset,
    alt,
    caption
  },
  beforeImage{
    asset,
    alt
  },
  afterImage{
    asset,
    alt
  },
  serviceType,
  location,
  completedDate,
  challenge,
  solution,
  result
}`

// Get featured projects
export const FEATURED_PROJECTS_QUERY = groq`*[_type == "project" && featured == true] | order(completedDate desc) [0...4] {
  _id,
  title,
  slug,
  featuredImages[]{
    asset,
    alt,
    caption
  },
  beforeImage{
    asset,
    alt
  },
  afterImage{
    asset,
    alt
  },
  serviceType,
  transformationType,
  location,
  completedDate,
  challenge,
  solution,
  result,
  testimonial
}`

// Get all projects for gallery
export const ALL_PROJECTS_QUERY = groq`*[_type == "project"] | order(completedDate desc) {
  _id,
  title,
  slug,
  featuredImages[]{
    asset,
    alt,
    caption
  },
  beforeImage{
    asset,
    alt
  },
  afterImage{
    asset,
    alt
  },
  serviceType,
  transformationType,
  location,
  completedDate
}`

// Get a single project by slug
export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  featuredImages[]{
    asset,
    alt,
    caption
  },
  beforeImage{
    asset,
    alt
  },
  afterImage{
    asset,
    alt
  },
  gallery[]{
    asset,
    alt,
    caption
  },
  serviceType,
  transformationType,
  location,
  completedDate,
  challenge,
  solution,
  result,
  testimonial,
  duration,
  seo
}`

// Get project slugs for static generation
export const PROJECT_SLUGS_QUERY = groq`*[_type == "project" && defined(slug.current)][].slug.current`

