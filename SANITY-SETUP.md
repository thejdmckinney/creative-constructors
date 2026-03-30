# Sanity CMS Setup

This project uses **Sanity CMS** for blog content management with an embedded Studio.

## 🎨 Accessing the Studio

The Sanity Studio is embedded in your Next.js app:
- **Local:** http://localhost:3000/studio
- **Production:** https://www.creative-constructors.com/studio

## 📋 Project Details

- **Project ID:** `mppq9qo8`
- **Dataset:** `production`
- **Organization ID:** `oWuUE8twJ`

## 🔧 Environment Variables

### Required Variables (Already set locally in `.env.local`):
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=mppq9qo8
NEXT_PUBLIC_SANITY_DATASET=production
```

### For Vercel Deployment:
You need to add these environment variables to your Vercel project:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the following:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `mppq9qo8`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`

## 📝 Schema Overview

### Content Types:
1. **Blog Post** (`post`)
   - Title, slug, excerpt
   - Featured image (with alt text)
   - Author reference
   - Categories (references)
   - Tags (array of strings)
   - Publish date
   - Rich text body (Portable Text)
   - SEO settings (meta title, description, keywords)

2. **Author** (`author`)
   - Name, slug
   - Profile image
   - Bio, role

3. **Category** (`category`)
   - Title, slug
   - Description

4. **Block Content** (`blockContent`)
   - Rich text with images, links, code blocks
   - Headings (H2, H3, H4)
   - Lists, quotes

## 🚀 Creating Your First Blog Post

1. **Access the Studio:**
   - Go to http://localhost:3000/studio
   - Or https://www.creative-constructors.com/studio

2. **Create an Author First:**
   - Click "Author" in the sidebar
   - Click "Create new Author"
   - Fill in name, role, bio, and upload image
   - Generate slug from name
   - Publish

3. **Create Categories (Optional):**
   - Click "Category" in the sidebar
   - Create categories like "Home Repair", "DIY Tips", "Installation Guides"

4. **Create a Blog Post:**
   - Click "Blog Post" in the sidebar
   - Click "Create new Blog Post"
   - Fill in:
     - Title (auto-generates slug)
     - Author (select from dropdown)
     - Featured Image (upload and add alt text)
     - Excerpt (short summary, 150-200 characters)
     - Categories
     - Tags
     - Body content (use the rich text editor)
     - SEO Settings (optional - defaults to title/excerpt if not set)
   - Publish when ready

## 🎨 Rich Text Features

The body editor supports:
- **Text formatting:** Bold, italic, code
- **Headings:** H2, H3, H4
- **Links:** Internal and external with optional new tab
- **Images:** Upload with caption and alt text
- **Blockquotes**
- **Lists:** Bulleted and numbered
- **Code blocks:** With syntax highlighting for multiple languages

## 📱 Blog Pages

### Blog Listing Page: `/blog`
- Shows all published posts
- Grid layout with featured images
- Categories, author, and publish date
- Excerpt preview
- Responsive design

### Individual Post Page: `/blog/[slug]`
- Full post content with Portable Text rendering
- Featured image hero
- Author bio section
- Tags
- Breadcrumb navigation
- SEO-optimized with BlogPosting schema
- "Get a Free Quote" CTA
- Back to blog link

## 🔄 Content Updates

Changes made in the Studio appear on your site:
- **Development:** Changes appear immediately after save
- **Production:** Changes appear after ~60 seconds (ISR revalidation)

## 📊 SEO Features

Each blog post automatically includes:
- Unique meta title and description
- Open Graph tags for social sharing
- Twitter Card support
- BlogPosting JSON-LD schema
- Breadcrumb navigation
- Optimized images with alt text

## 🎯 Tips for Great Blog Content

1. **Use descriptive titles** (50-60 characters)
2. **Write compelling excerpts** (150-160 characters)
3. **Always add alt text** to images for accessibility and SEO
4. **Use headings** (H2, H3) to structure content
5. **Add internal links** to your service pages
6. **Include relevant categories and tags**
7. **Upload high-quality featured images** (1200x630px recommended)

## 🛠️ CORS Configuration

CORS origins are already configured for:
- ✅ https://creative-constructors.com
- ✅ https://www.creative-constructors.com
- ✅ http://localhost:3000

## 📦 Dependencies

- `sanity` - Sanity CMS core
- `@sanity/vision` - GROQ query tool in Studio
- `@sanity/image-url` - Image URL builder
- `next-sanity` - Next.js integration
- `styled-components` - Required by Sanity UI

## 🔐 Security

- `.env.local` is gitignored (contains sensitive data)
- Public environment variables are safe to expose (prefixed with `NEXT_PUBLIC_`)
- Studio requires authentication via Sanity login

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text Guide](https://www.sanity.io/guides/introduction-to-portable-text)
- [Next.js + Sanity Integration](https://www.sanity.io/plugins/next-sanity)
