# How to Add a New Service Page

This guide explains how to add a new service page to the Creative Constructors website.

## Step-by-Step Instructions

### 1. Create the Service Page File

Create a new folder and page file in the `app/services/` directory:

```
app/services/your-new-service/page.tsx
```

### 2. Copy the Service Page Template

Use this template for your new service page:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export const metadata: Metadata = {
  title: "Your Service Name",
  description:
    "Professional [service] in Dallas-Fort Worth. [Brief description of what you offer].",
  alternates: {
    canonical: "/services/your-service-url",
  },
  openGraph: {
    title: `Your Service Name | ${seoConfig.siteName}`,
    description:
      "Professional [service] in Dallas-Fort Worth. [Brief description].",
    url: "/services/your-service-url",
  },
};

export default function YourServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Service Name
            </h1>
            <p className="text-xl text-silver">
              Brief, compelling description of your service
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-4 text-navy">
              Service Overview
            </h2>
            <p className="text-gray-700 mb-6">
              Detailed description of your service...
            </p>

            <h3 className="text-2xl font-bold mb-3 text-navy">What We Offer:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Service feature 1</li>
              <li>Service feature 2</li>
              <li>Service feature 3</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 text-navy">Why Choose Us?</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Benefit 1</li>
              <li>Benefit 2</li>
              <li>Benefit 3</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-royal-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us for a free quote on your project
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
```

### 3. Add to Navigation

Update `components/Navigation.tsx` to include your new service:

```tsx
const services = [
  // ... existing services
  { name: "Your Service Name", href: "/services/your-service-url" },
];
```

### 4. Add to Footer

Update `components/Footer.tsx` to include your new service in the footer links:

```tsx
<li>
  <Link
    href="/services/your-service-url"
    className="text-silver hover:text-orange transition-colors"
  >
    Your Service Name
  </Link>
</li>
```

### 5. Add to Services Landing Page

Update `app/services/page.tsx` to include your new service in the grid:

```tsx
const services = [
  // ... existing services
  {
    title: "Your Service Name",
    description: "Brief description of your service offering.",
    href: "/services/your-service-url",
    icon: "🔧", // Choose an appropriate emoji
  },
];
```

### 6. Add to Home Page

Update `app/page.tsx` to include your new service in the home page services grid (same format as step 5).

### 7. Update Sitemap Priority (Optional)

If this is an important service page, you can update `next-sitemap.config.js` to give it higher priority:

```js
const priorities = {
  '/': 1.0,
  '/services': 0.9,
  '/services/your-service-url': 0.85, // Add this line
  '/contact': 0.9,
  '/about': 0.8,
};
```

### 8. Build and Deploy

After making these changes:

```bash
npm run build
```

This will automatically generate the updated sitemap including your new service page.

## Best Practices

### SEO Considerations

- **Title**: Keep under 60 characters, include the service name and "Dallas-Fort Worth" or "DFW"
- **Description**: Keep under 160 characters, focus on benefits and location
- **Content**: Use proper heading hierarchy (h1 → h2 → h3)
- **Keywords**: Naturally include location-based keywords throughout the content

### Content Structure

- Start with a compelling hero section
- Include a detailed service overview
- List specific services or features
- Highlight benefits and differentiators
- End with a clear call-to-action

### URL Format

Use lowercase with hyphens:
- ✅ `/services/window-installation`
- ❌ `/services/Window_Installation`
- ❌ `/services/windowInstallation`

## Testing

After adding a new service:

1. Check that it appears in the navigation dropdown
2. Check that it appears on the services landing page
3. Check that it appears in the footer
4. Verify the page loads correctly
5. Check that the metadata is correct (view page source)
6. Test on mobile devices

## Questions?

If you need help adding a service page, refer to the existing service pages in `app/services/` as examples.
