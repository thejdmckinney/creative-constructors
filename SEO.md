# SEO Guide for Creative Constructors Website

This guide explains how to manage and update SEO settings for the website.

## Table of Contents

1. [Centralized SEO Configuration](#centralized-seo-configuration)
2. [Page-Level Metadata](#page-level-metadata)
3. [Structured Data](#structured-data)
4. [Sitemap Management](#sitemap-management)
5. [Best Practices](#best-practices)

## Centralized SEO Configuration

The `seo.config.ts` file at the project root contains all centralized SEO settings. **Update this file first** when making site-wide SEO changes.

### Configuration File Location

```
/seo.config.ts
```

### Key Settings

```typescript
export const seoConfig = {
  siteName: "Creative Constructors LLC",
  defaultTitle: "Creative Constructors LLC | Professional Home Services in Dallas, TX",
  defaultDescription: "Licensed and insured home services contractor...",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://creativeconstructors.com",
  twitterHandle: "@CreativeConstr",
  // ... business information for structured data
};
```

### What to Update

- **siteName**: Your business name
- **defaultTitle**: Default page title (used when page doesn't specify)
- **defaultDescription**: Default meta description
- **baseUrl**: Your production domain (set via environment variable)
- **twitterHandle**: Your Twitter/X handle
- **business.phone**: Business phone number
- **business.email**: Contact email
- **business.address**: Full business address
- **business.serviceArea**: Service area information

## Page-Level Metadata

Every page should export a `metadata` object using Next.js 14's Metadata API.

### Basic Page Metadata Template

```typescript
import type { Metadata } from "next";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description under 160 characters.",
  alternates: {
    canonical: "/page-url",
  },
  openGraph: {
    title: `Page Title | ${seoConfig.siteName}`,
    description: "Page description for social sharing.",
    url: "/page-url",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Page Title | ${seoConfig.siteName}`,
    description: "Page description for Twitter.",
  },
};
```

### Updating Page Metadata

1. Open the page file (e.g., `app/about/page.tsx`)
2. Find the `export const metadata` block
3. Update the `title` and `description` fields
4. Ensure the `canonical` URL matches the page's URL
5. Update OpenGraph and Twitter card fields

### Metadata Best Practices

#### Title Tags
- Keep under 60 characters
- Include primary keyword near the beginning
- End with brand name (automatically added via template)
- Format: `Primary Keyword | Creative Constructors LLC`

#### Meta Descriptions
- Keep between 120-160 characters
- Include a call to action
- Naturally include keywords
- Make it compelling to increase click-through rate

#### Canonical URLs
- Always set a canonical URL for every page
- Use relative paths: `/about` not `https://site.com/about`
- Prevents duplicate content issues

## Structured Data

Structured data helps search engines understand your business information.

### LocalBusiness Schema (Home Page)

Location: `app/page.tsx`

The home page includes LocalBusiness structured data (JSON-LD format):

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: seoConfig.business.legalName,
  // ... more fields
};
```

### What to Update

After updating business information in `seo.config.ts`, the structured data will automatically reflect those changes. You may also want to add:

- **sameAs**: Social media profile URLs
- **priceRange**: Update if pricing changes
- **openingHours**: Update business hours
- **image**: Add logo URL once uploaded

### Testing Structured Data

Use Google's Rich Results Test:
1. Go to https://search.google.com/test/rich-results
2. Enter your page URL or paste the HTML
3. Fix any errors or warnings

## Sitemap Management

The sitemap is automatically generated on every build using `next-sitemap`.

### Configuration File

Location: `next-sitemap.config.js`

### How It Works

1. When you run `npm run build`, the sitemap is generated
2. Files created: `public/sitemap.xml` and `public/robots.txt`
3. Automatically includes all pages in the `app/` directory
4. Custom priorities are set for important pages

### Adding New Pages to Sitemap

**Good news**: New pages are automatically added! No manual work needed.

Just create a new page in the `app/` directory and it will appear in the sitemap after the next build.

### Customizing Page Priority

Edit `next-sitemap.config.js`:

```js
const priorities = {
  '/': 1.0,                          // Home page (highest)
  '/services': 0.9,                  // Main services page
  '/contact': 0.9,                   // Contact page
  '/services/electrical': 0.85,      // Important service
  '/about': 0.8,                     // About page
  // Add more pages here
};
```

Priority scale: 0.0 to 1.0 (1.0 is highest priority)

### Updating Sitemap

```bash
npm run build
```

The sitemap is regenerated automatically during the build process.

### Robots.txt Configuration

The `robots.txt` file is also generated automatically. Default settings:

```
User-agent: *
Allow: /

Sitemap: https://creativeconstructors.com/sitemap.xml
```

To customize, edit the `robotsTxtOptions` in `next-sitemap.config.js`.

## Best Practices

### Technical SEO Checklist

- ✅ Every page has unique title and description
- ✅ All titles under 60 characters
- ✅ All descriptions between 120-160 characters
- ✅ Canonical URLs set for all pages
- ✅ Structured data on home page
- ✅ Sitemap.xml generated and accessible
- ✅ Robots.txt generated and accessible
- ✅ Images use next/image with alt text
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Mobile-responsive design
- ✅ Fast page load times (Next.js optimizations)

### Content SEO Tips

1. **Keyword Research**
   - Focus on location-based keywords: "Dallas electrical services", "DFW plumber"
   - Use long-tail keywords: "emergency HVAC repair Dallas"
   - Check Google Search Console for keyword opportunities

2. **On-Page SEO**
   - Use keywords naturally in content
   - Include keywords in headings
   - Write for users first, search engines second
   - Add internal links between related pages

3. **Local SEO**
   - Mention Dallas-Fort Worth throughout the site
   - Include city and neighborhood names in content
   - Claim and optimize Google Business Profile
   - Get listed in local directories

### URL Structure

Follow these URL guidelines:

- Use lowercase letters
- Use hyphens for spaces (not underscores)
- Keep URLs short and descriptive
- Include target keyword when possible

Examples:
- ✅ `/services/electrical`
- ✅ `/services/hvac-repair`
- ❌ `/services/electrical_SERVICES`
- ❌ `/services/page1`

### Image Optimization

Always use the Next.js `Image` component:

```tsx
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text with keywords"
  width={800}
  height={600}
  priority={false} // Set true for above-the-fold images
/>
```

### Internal Linking

Link related pages together:
- Service pages should link to contact page
- Home page links to all main sections
- Service pages cross-link to related services
- Use descriptive anchor text (not "click here")

## Monitoring & Maintenance

### Tools to Use

1. **Google Search Console**
   - Monitor search performance
   - Check for indexing issues
   - Submit sitemap
   - View which queries bring traffic

2. **Google Analytics**
   - Track visitor behavior
   - See which pages are popular
   - Monitor conversion goals

3. **PageSpeed Insights**
   - Check page load speed
   - Get optimization suggestions
   - Monitor Core Web Vitals

### Monthly SEO Tasks

- [ ] Check Google Search Console for errors
- [ ] Review top performing pages
- [ ] Update content on underperforming pages
- [ ] Add new service pages or content as business grows
- [ ] Check backlinks and remove bad ones
- [ ] Update business information if changed

### When Deploying

Every time you deploy:

1. Verify sitemap is accessible: `yoursite.com/sitemap.xml`
2. Verify robots.txt is accessible: `yoursite.com/robots.txt`
3. Check a few pages in Google's Rich Results Test
4. Submit updated sitemap to Google Search Console

## Environment Variables

Set these in your hosting platform (Vercel, Netlify, etc.):

```bash
NEXT_PUBLIC_BASE_URL=https://creativeconstructors.com
RESEND_API_KEY=your_resend_api_key_here
```

## Questions?

For technical SEO questions, refer to:
- Next.js Metadata API: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- next-sitemap docs: https://github.com/iamvishnusankar/next-sitemap

For content SEO, Google's SEO Starter Guide is excellent:
- https://developers.google.com/search/docs/beginner/seo-starter-guide
