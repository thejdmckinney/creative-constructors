# Public Assets Folder

This folder contains static assets that will be served directly from the root URL.

## Add Your Logo Here

Drag your logo file into this folder. Supported formats:
- PNG (recommended for photos/complex images)
- SVG (recommended for logos - scalable and crisp)
- JPG/JPEG

### Recommended naming:
- `logo.svg` or `logo.png` - Main logo
- `logo-white.svg` or `logo-white.png` - White version for dark backgrounds (if needed)
- `favicon.ico` - Browser tab icon (16x16 or 32x32 pixels)

## After Adding Your Logo:

Update these files to use your logo image:

1. **Navigation** (`components/Navigation.tsx` around line 35)
2. **Footer** (`components/Footer.tsx` around line 13)
3. **Structured Data** (`app/page.tsx` around line 72)

### Example Usage:

```tsx
import Image from "next/image";

<Image 
  src="/logo.png" 
  alt="Creative Constructors LLC Logo"
  width={200} 
  height={80}
  priority
/>
```

## Other Assets You Can Add:

- `favicon.ico` - Browser tab icon
- `apple-touch-icon.png` - iOS home screen icon (180x180)
- `og-image.jpg` - Social media share image (1200x630)
- Service photos, team photos, project galleries, etc.

## Notes:

- Files in this folder are accessible at the root URL (e.g., `/logo.png`)
- The `sitemap.xml` and `robots.txt` are auto-generated during build
- Next.js Image component automatically optimizes images
