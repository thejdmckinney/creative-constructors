import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export async function GET() {
  try {
    const posts = await client.fetch(POSTS_QUERY)
    
    // Also check for ALL posts (including drafts and those without slugs)
    const allPosts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "hasSlug": defined(slug.current),
      slug,
      publishedAt
    }`)
    
    return NextResponse.json({ 
      success: true, 
      publishedWithSlug: posts?.length || 0,
      allPosts: allPosts?.length || 0,
      posts: posts || [],
      debug: allPosts || []
    })
  } catch (err) {
    return NextResponse.json({ 
      success: false, 
      error: (err as Error).message 
    }, { status: 500 })
  }
}
