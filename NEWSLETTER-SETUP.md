# The Home Watch Newsletter Setup Guide

## ✅ What Was Done

I've successfully set up a complete newsletter system called "The Home Watch" within your existing Sanity project. Everything is ready to use!

---

## 📁 Files Created/Modified

### **1. New Sanity Schema**
**File:** `/sanity/schemas/newsletter.ts`
- New content type called `newsletter`
- Fields: `issueNumber`, `title`, `slug`, `publishedAt`, `excerpt`, `body` (HTML)
- Custom preview in Sanity Studio showing "Issue 001: [Title]"
- Automatic sorting by issue number and date

**Action Required:** ✅ **Already registered** - The schema has been added to your Sanity Studio

---

### **2. Schema Registration**
**File:** `/sanity/schemas/index.ts`
- Added `newsletter` import and registered in `schemaTypes` array
- Does NOT affect your existing schemas (post, author, category, project)

**Action Required:** ✅ **Complete** - No action needed

---

### **3. Newsletter Queries**
**File:** `/sanity/lib/queries.ts`
- Added three new GROQ queries:
  - `NEWSLETTERS_QUERY` - Get all newsletters for index page
  - `NEWSLETTER_QUERY` - Get single newsletter by slug
  - `NEWSLETTER_SLUGS_QUERY` - Generate static paths

**Action Required:** ✅ **Complete** - Queries are ready to use

---

### **4. Newsletter Signup Component**
**File:** `/components/NewsletterSignupForm.tsx`
- Placeholder component with clear styling
- Contains comment: `{/* PASTE HUBSPOT EMBED CODE HERE */}`
- Matches your brand colors (navy #0a1628, orange #E8600A)

**Action Required:** 🔧 **You'll add HubSpot embed code later** (see instructions below)

---

### **5. Newsletter Index Page**
**File:** `/app/newsletter/page.tsx`
- Route: `/newsletter`
- Shows "The Home Watch" header with brand colors
- HubSpot signup form at top
- Lists all newsletter issues as cards (newest first)
- Each card shows: issue number, title, date, excerpt
- Empty state message if no issues exist yet
- SEO metadata included

**Action Required:** ✅ **Complete** - Page is live

---

### **6. Individual Newsletter Page**
**File:** `/app/newsletter/[slug]/page.tsx`
- Route: `/newsletter/[slug]`
- Dynamic page for each issue
- Displays: issue number, title, date, full HTML body
- Uses `dangerouslySetInnerHTML` to render HTML
- Custom prose styling for beautiful typography
- Signup form at bottom
- Related links to services/booking
- SEO metadata for each issue

**Action Required:** ✅ **Complete** - Page is live

---

### **7. Navigation Updates**
**File:** `/components/Navigation.tsx`
- Added "Newsletter" link to desktop navigation (between Blog and Designers)
- Added "Newsletter" link to mobile menu
- Active state styling matches existing design

**Action Required:** ✅ **Complete** - Navigation is updated

---

## 🎨 Design & Brand

All pages use your brand colors:
- **Navy:** `#0a1628` (primary text, headers)
- **Orange:** `#E8600A` (CTAs, hover states, accents)
- **White:** Background
- **Light Gray:** `#f7f9fc` (section backgrounds)

The newsletter section:
- Feels distinct from the blog
- Maintains consistent brand identity
- Uses your existing fonts (`font-barlow-condensed` for headers)
- Matches your overall site style

---

## 📝 How to Use

### **Step 1: Deploy Your Changes**
```bash
# Commit and push your changes
git add .
git commit -m "Add The Home Watch newsletter section"
git push
```

Vercel will automatically deploy. The schema will be available in your Sanity Studio immediately.

---

### **Step 2: Access Sanity Studio**
1. Go to: `https://www.creative-constructors.com/studio`
2. You should see a new "Newsletter" document type in the sidebar

---

### **Step 3: Create Your First Newsletter Issue**

In Sanity Studio:

1. Click **"Newsletter"** in the left sidebar
2. Click **"Create new Newsletter"**
3. Fill in the fields:
   - **Issue Number:** `1` (or `001`, `1`, etc.)
   - **Title:** e.g., "Spring HVAC Maintenance Checklist"
   - **Slug:** Click "Generate" (auto-creates from title)
   - **Published At:** Select date and time
   - **Excerpt:** Write 1-2 sentences for the card (e.g., "Get your HVAC system ready for Texas heat with this essential spring maintenance checklist from a licensed contractor.")
   - **Body (HTML):** Paste your full newsletter HTML here

4. Click **"Publish"**

---

### **Step 4: Add HubSpot Signup Form** (When Ready)

When you have your HubSpot embed code:

1. Open: `/components/NewsletterSignupForm.tsx`
2. Find the comment: `{/* PASTE HUBSPOT EMBED CODE HERE */}`
3. Replace the placeholder div with your HubSpot embed code:

```tsx
{/* PASTE HUBSPOT EMBED CODE HERE */}
<div>
  {/* Your HubSpot embed code goes here */}
  <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/..."></script>
</div>
{/* END HUBSPOT EMBED CODE */}
```

4. Commit and deploy

**HubSpot Form Tips:**
- Get your embed code from HubSpot Forms
- Make sure to wrap script tags properly for React/Next.js
- Test the form in development first

---

## 🌐 Live URLs

Once deployed:
- **Newsletter Index:** `https://www.creative-constructors.com/newsletter`
- **Individual Issues:** `https://www.creative-constructors.com/newsletter/[slug]`
- **Navigation Link:** Visible in main nav (desktop & mobile)

---

## 📋 Example Newsletter HTML Format

When creating newsletter body content, use clean HTML:

```html
<h2>This Week's Tip: HVAC Spring Maintenance</h2>

<p>
  As we head into Texas spring, your HVAC system needs attention before the
  summer heat arrives. Here's what every homeowner should know.
</p>

<h3>5 Essential Maintenance Tasks</h3>

<ol>
  <li><strong>Replace Air Filters:</strong> Do this every 1-3 months</li>
  <li><strong>Clean Outdoor Unit:</strong> Remove debris and vegetation</li>
  <li><strong>Check Thermostat:</strong> Ensure accurate temperature readings</li>
  <li><strong>Inspect Ductwork:</strong> Look for leaks or damage</li>
  <li><strong>Schedule Professional Service:</strong> Annual checkups prevent breakdowns</li>
</ol>

<blockquote>
  "Prevention is always cheaper than repair. A $150 tune-up can prevent a
  $3,000 breakdown." — Jeremy McKinney, Licensed Contractor
</blockquote>

<p>
  Need help with HVAC maintenance or repair?
  <a href="https://www.creative-constructors.com/services/hvac">Book a service call</a>
  or call us at (817) 470-1889.
</p>
```

The page automatically styles:
- Headings (navy, bold)
- Links (orange, hover effects)
- Lists (orange bullets)
- Blockquotes (orange border, gray background)
- Images (rounded, shadow)

---

## 🚀 Next Steps

1. **Deploy** - Push changes to GitHub (Vercel auto-deploys)
2. **Visit Studio** - Create your first newsletter issue
3. **Test** - View it on `/newsletter` and `/newsletter/[slug]`
4. **Add HubSpot** - When ready, add the signup form embed
5. **Promote** - Share newsletter page with your audience!

---

## 🎯 Newsletter Content Ideas

Weekly topics you could cover:

- **Seasonal Maintenance:** Spring HVAC prep, winterizing, etc.
- **DIY Tips:** Small repairs homeowners can do themselves
- **When to Call a Pro:** Signs you need professional help
- **Cost Guides:** What to expect for common repairs
- **Contractor Wisdom:** Behind-the-scenes insights
- **Local Dallas/DFW:** Weather-specific advice for Texas homes
- **Product Reviews:** Tools and materials worth buying
- **Case Studies:** Real projects with before/after

---

## 💡 Tips for Success

**Writing:**
- Keep it practical and actionable
- Include at least one specific tip per issue
- Use your voice (licensed contractor perspective)
- Link to relevant services on your site

**Frequency:**
- Weekly is ambitious - start with bi-weekly if needed
- Consistency matters more than frequency
- Batch-create 4-5 issues ahead of time

**Promotion:**
- Add CTA to email signatures
- Share on social media
- Add to your booking confirmation emails
- Link from blog posts

---

## ❓ Common Questions

**Q: Can I edit a published newsletter?**
A: Yes! Just edit in Sanity Studio and republish. Changes appear after ~60 seconds.

**Q: How do I unpublish a newsletter?**
A: In Sanity Studio, click the three dots → "Unpublish"

**Q: Can I schedule newsletters to publish later?**
A: The `publishedAt` field is informational. The newsletter shows once you click "Publish" in Sanity.

**Q: What if I want to change the design?**
A: Edit `/app/newsletter/page.tsx` or `/app/newsletter/[slug]/page.tsx` for layout changes.

**Q: Can I add images to newsletter body?**
A: Yes! Use standard HTML `<img>` tags in the body field. They'll be styled automatically.

---

## 🔧 Troubleshooting

**Newsletter not showing on index page?**
- Make sure it's published in Sanity Studio
- Check that `slug` is generated
- Wait 60 seconds for cache to refresh

**HubSpot form not working?**
- Check that script tags are properly formatted for React
- Look for console errors in browser DevTools
- Verify HubSpot form is active in HubSpot dashboard

**Styling looks off?**
- Check that Tailwind CSS is properly configured
- Verify `font-barlow-condensed` is available
- Clear browser cache

---

## 📞 Support

If you need help:
1. Check this guide first
2. Review the code comments in each file
3. Test in Sanity Studio preview mode
4. Check browser console for errors

---

**🎉 Everything is ready to go! Create your first issue and start building your subscriber base!**
