# 🚨 URGENT: Vercel Deployment Fix

## The Problem
Your site is getting 404 errors because Vercel doesn't have the Sanity environment variables configured.

## The Solution (5 minutes)

### Step 1: Add Environment Variables to Vercel

1. **Go to Vercel Settings:**
   - Visit: https://vercel.com/thejdmckinney/creative-constructors/settings/environment-variables
   - Or: Dashboard → Your Project → Settings → Environment Variables

2. **Add These Variables:**

   **Variable 1:**
   - Name: `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - Value: `mppq9qo8`
   - Environment: Production, Preview, Development (check all 3)
   - Click "Save"

   **Variable 2:**
   - Name: `NEXT_PUBLIC_SANITY_DATASET`
   - Value: `production`
   - Environment: Production, Preview, Development (check all 3)
   - Click "Save"

### Step 2: Redeploy

After adding the variables, Vercel will automatically trigger a new deployment. If not:
- Go to Deployments tab
- Click the three dots (...) on the latest deployment
- Click "Redeploy"

### Step 3: Verify

Once deployed (takes ~2-3 minutes):
- Visit https://www.creative-constructors.com
- Should work normally
- Visit https://www.creative-constructors.com/blog
- Should show "No blog posts yet" message (until you create posts)
- Visit https://www.creative-constructors.com/studio
- Should load the Sanity Studio

---

## Why This Happened

The environment variables (Sanity project ID and dataset) are stored in `.env.local` which is:
1. **Gitignored** (not pushed to GitHub for security)
2. **Only on your local machine**
3. **Not automatically copied to Vercel**

This is correct for security, but means you need to manually add them to Vercel.

---

## ✅ Fallback Values Added

I've updated the code to use fallback values (`mppq9qo8` and `production`) so the build won't completely fail if variables are missing. However, **you should still add the environment variables to Vercel** for best practices.

---

## After Adding Variables

Your site will work perfectly! The blog will be ready to use once you:
1. Visit https://www.creative-constructors.com/studio
2. Create your first author
3. Create your first blog post
4. Publish it

---

## Need Help?

If you're having trouble finding the Vercel settings:
1. Log in to Vercel
2. Select your "creative-constructors" project
3. Click "Settings" in the top nav
4. Click "Environment Variables" in the left sidebar

**Takes less than 5 minutes to fix!** 🚀
