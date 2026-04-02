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
