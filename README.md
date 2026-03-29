# Creative Constructors LLC Website

A professional marketing website for Creative Constructors LLC, a home services contractor based in Dallas, Texas. Built with Next.js 14, TypeScript, and Tailwind CSS with SEO as a first-class priority.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for modern, responsive styling
- **SEO Optimized** with metadata API, structured data, and auto-generated sitemaps
- **Contact Form** with React Hook Form and Resend integration
- **Barlow Font Family** via next/font for optimal font loading
- **Mobile-First Design** with responsive navigation and layouts

## 🎨 Brand Colors

- Navy Blue: `#1B3A6B`
- Royal Blue: `#2A6DB5`
- Orange: `#F47920`
- Silver/Gray: `#D4D8DD`
- White: `#FFFFFF`

## 📁 Project Structure

```
creative-constructors/
├── app/
│   ├── layout.tsx           # Root layout with fonts and navigation
│   ├── page.tsx             # Home page with hero, services, CTA
│   ├── globals.css          # Global styles
│   ├── services/
│   │   ├── page.tsx         # Services landing page
│   │   ├── electrical/
│   │   ├── plumbing/
│   │   ├── hvac/
│   │   ├── carpentry/
│   │   ├── flooring/
│   │   └── decks-patios/
│   ├── about/
│   │   └── page.tsx         # About us page
│   ├── contact/
│   │   └── page.tsx         # Contact page with form
│   └── api/
│       └── contact/
│           └── route.ts     # Contact form API endpoint
├── components/
│   ├── Navigation.tsx       # Sticky nav with dropdown
│   ├── Footer.tsx           # Site footer
│   └── ContactForm.tsx      # Contact form with validation
├── seo.config.ts            # Centralized SEO configuration
├── next-sitemap.config.js   # Sitemap generation config
├── SERVICES.md              # Guide for adding new services
└── SEO.md                   # Complete SEO documentation
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm, pnpm, yarn, or bun package manager

### Installation

1. **Clone or navigate to the project directory**

```bash
cd creative-constructors
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key_here
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Set environment variables:
   - `NEXT_PUBLIC_BASE_URL` - Your production URL
   - `RESEND_API_KEY` - Your Resend API key
4. Deploy!

### Environment Variables

Required for production:

- `NEXT_PUBLIC_BASE_URL` - Your production domain (e.g., https://creativeconstructors.com)
- `RESEND_API_KEY` - API key from [Resend](https://resend.com) for contact form emails

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery.

### Setup Steps:

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain
3. Create an API key
4. Add the API key to your environment variables
5. Update the email settings in `app/api/contact/route.ts`:
   - Change `from` email to use your verified domain
   - Change `to` email to your business email

## 🔍 SEO Configuration

### Update Business Information

Edit `seo.config.ts` to update:
- Business name and contact info
- Default titles and descriptions
- Address and service area
- Social media handles

### Add/Update Page Metadata

Each page has a `metadata` export. Update the `title` and `description` for each page.

### Sitemap

The sitemap is automatically generated on build. Access it at `/sitemap.xml`.

**For detailed SEO instructions, see [SEO.md](./SEO.md)**

## 🔧 Adding New Service Pages

**For step-by-step instructions, see [SERVICES.md](./SERVICES.md)**

Quick steps:
1. Create new folder in `app/services/your-service/`
2. Add `page.tsx` with metadata and content
3. Update Navigation, Footer, and Services page
4. Build to regenerate sitemap

## 📝 Content TODOs

Throughout the codebase, you'll find `TODO` comments marking places where content needs to be added:

- Business phone number
- Business email
- Street address and postal code
- Logo images
- Service page detailed content
- Company history and team information
- Social media profile URLs

Search for `TODO:` in the codebase to find all items.

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (generates sitemap)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📚 Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Resend](https://resend.com/) - Email delivery
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) - Sitemap generation
- [clsx](https://github.com/lukeed/clsx) - Conditional classnames

## 📖 Documentation

- [SERVICES.md](./SERVICES.md) - How to add new service pages
- [SEO.md](./SEO.md) - Complete SEO guide and best practices

## 🤝 Support

For questions or issues with the website:
1. Check the documentation files (SERVICES.md, SEO.md)
2. Review existing code examples in the codebase
3. Consult Next.js documentation: https://nextjs.org/docs

## 📄 License

This project is proprietary and confidential to Creative Constructors LLC.
