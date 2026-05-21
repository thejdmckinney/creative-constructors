# The Home Watch - Quick Start Guide

## 🚀 Create Your First Newsletter (5 Minutes)

### Step 1: Deploy
```bash
git add .
git commit -m "Add newsletter section"
git push
```
Wait ~2 minutes for Vercel to deploy.

---

### Step 2: Open Sanity Studio
Visit: `https://www.creative-constructors.com/studio`

---

### Step 3: Create Newsletter Issue

1. Click **"Newsletter"** in left sidebar
2. Click **"Create new Newsletter"** button
3. Fill in fields:

| Field | Example | Notes |
|-------|---------|-------|
| **Issue Number** | `1` | Just a number, e.g., 1, 2, 3 |
| **Title** | "Spring HVAC Maintenance Checklist" | The headline |
| **Slug** | _(click Generate)_ | Auto-creates URL-friendly version |
| **Published At** | _(select today's date)_ | When it goes live |
| **Excerpt** | "Get your HVAC ready for Texas heat with this essential spring maintenance checklist." | 1-2 sentences (shows on cards) |
| **Body (HTML)** | _(paste HTML below)_ | Full newsletter content |

4. Click **"Publish"**
5. Visit `https://www.creative-constructors.com/newsletter` to see it live!

---

## 📄 Sample Newsletter HTML (Copy & Customize)

```html
<h2>This Week's Home Maintenance Tip</h2>

<p>
  Welcome to the first issue of The Home Watch! Every week, I'll share practical 
  advice to help you maintain and improve your home. Let's dive in.
</p>

<h3>Spring HVAC Maintenance Checklist</h3>

<p>
  As a licensed contractor in DFW, I've seen too many AC breakdowns that could 
  have been prevented with simple spring maintenance. Here's what you need to do:
</p>

<ol>
  <li><strong>Replace Your Air Filter</strong> - Do this every 1-3 months. A dirty filter reduces efficiency and can damage your system.</li>
  <li><strong>Clean the Outdoor Unit</strong> - Remove leaves, grass clippings, and debris. Clear 2 feet around the unit.</li>
  <li><strong>Check Your Thermostat</strong> - Make sure it's reading accurately and responding properly.</li>
  <li><strong>Inspect Visible Ductwork</strong> - Look for disconnected ducts or obvious damage in your attic or crawlspace.</li>
  <li><strong>Schedule Professional Service</strong> - Annual tune-ups catch small issues before they become expensive repairs.</li>
</ol>

<blockquote>
  "I tell every homeowner: a $150 tune-up in spring can prevent a $3,000 breakdown 
  in July when you need AC most." — Jeremy McKinney, Creative Constructors
</blockquote>

<h3>DIY or Call a Pro?</h3>

<p>
  <strong>You can do:</strong> Filter changes, outdoor unit cleaning, basic thermostat checks
</p>

<p>
  <strong>Call us for:</strong> Refrigerant levels, electrical issues, ductwork repairs, 
  system tune-ups, or if your system is over 10 years old
</p>

<h3>Next Week's Topic</h3>

<p>
  I'll cover gutter maintenance and why it's critical before Texas spring storms. 
  Subscribe below to get it delivered to your inbox!
</p>

<p>
  <strong>Need HVAC help now?</strong> 
  <a href="https://www.creative-constructors.com/services/hvac">View our HVAC services</a> 
  or call (817) 470-1889 to schedule.
</p>
```

---

## 🎨 HTML Tips

### Headers
```html
<h2>Main Section Title</h2>
<h3>Subsection Title</h3>
```

### Emphasis
```html
<strong>Bold text</strong>
<em>Italic text</em>
```

### Lists
```html
<ul>
  <li>Bullet point</li>
  <li>Another point</li>
</ul>

<ol>
  <li>Numbered item 1</li>
  <li>Numbered item 2</li>
</ol>
```

### Links
```html
<a href="https://www.creative-constructors.com/services">Link text</a>
```

### Quotes
```html
<blockquote>
  "Your quote here" — Attribution
</blockquote>
```

### Images
```html
<img src="/path-to-image.jpg" alt="Description" />
```

---

## ✅ After Publishing

Your newsletter will appear at:
- **Index:** `creative-constructors.com/newsletter`
- **Individual issue:** `creative-constructors.com/newsletter/[your-slug]`
- **Navigation:** "Newsletter" link in main menu

---

## 🔄 To Edit After Publishing

1. Go back to Sanity Studio
2. Click on the newsletter issue
3. Make changes
4. Click "Publish" again
5. Changes appear in ~60 seconds

---

## 📧 Adding HubSpot Signup Form (Later)

When you're ready:
1. Get embed code from HubSpot
2. Open `/components/NewsletterSignupForm.tsx`
3. Find comment: `{/* PASTE HUBSPOT EMBED CODE HERE */}`
4. Replace placeholder with your HubSpot code
5. Commit and deploy

---

## 💡 Weekly Newsletter Ideas

- **Seasonal:** "Winterizing Your Home," "Summer Energy Savings"
- **How-To:** "Fix a Running Toilet," "Patch Drywall Like a Pro"
- **Preventive:** "5 Things to Check Monthly," "Annual Home Inspection Checklist"
- **Local:** "Dealing with Texas Heat," "DFW Storm Prep"
- **Behind the Scenes:** "What Contractors Look For," "Red Flags in Home Repairs"

---

**That's it! You're ready to publish your first issue of The Home Watch! 🎉**
