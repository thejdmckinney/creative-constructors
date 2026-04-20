# Booking System Setup Checklist

## ✅ Completed
- [x] Main booking page created (`/app/book/page.tsx`)
- [x] Multi-step wizard with state management (`BookingWizard.tsx`)
- [x] Service selection component (10 services)
- [x] Project details form component
- [x] Calendly embed component
- [x] Booking confirmation component
- [x] Environment variable configuration
- [x] Type definitions and validation
- [x] SEO metadata optimization
- [x] Mobile responsive design
- [x] Comprehensive documentation

## 🔧 Required Setup Steps

### 1. Configure Calendly URLs (REQUIRED)
```bash
# Copy example environment file
cp .env.local.example .env.local

# Edit .env.local and add your Calendly event URLs
# Replace https://calendly.com/your-account/... with your actual URLs
```

**Action Items:**
- [ ] Create 10 Calendly event types (one for each service)
- [ ] Copy event URLs to `.env.local`
- [ ] Test each Calendly link works

### 2. Update Contact Phone Number
**Current placeholder:** `(555) 555-1234`

**Files to update:**
- [ ] `app/book/page.tsx` - Line ~120 (FAQ section)
- [ ] `components/booking/CalendlyEmbed.tsx` - Line ~95 (Emergency notice)
- [ ] `components/booking/BookingConfirmation.tsx` - Line ~191 (Contact info)

**Find & Replace:**
```
Find: (555) 555-1234
Replace: YOUR_ACTUAL_PHONE_NUMBER
```

### 3. Add Navigation Links

**Navigation Component** (`components/Navigation.tsx`):
- [ ] Add "Book Now" button to main navigation
- [ ] Add mobile navigation link

**Homepage** (`app/page.tsx`):
- [ ] Add "Schedule Consultation" CTA to hero section
- [ ] Add booking link to services overview

**Service Pages** (`app/services/*/page.tsx`):
- [ ] Add "Book This Service" CTA to each service page

### 4. Test Locally
```bash
# Start development server
npm run dev

# Visit http://localhost:3000/book
# Test complete booking flow
```

**Testing Checklist:**
- [ ] All 10 services display correctly
- [ ] Service selection advances to details
- [ ] Form validation works (try submitting empty)
- [ ] Calendly widget loads
- [ ] Complete a test booking
- [ ] Confirmation page displays
- [ ] Mobile responsive (use browser dev tools)

### 5. Deploy to Vercel

**Vercel Dashboard > Settings > Environment Variables:**
- [ ] Add `NEXT_PUBLIC_CALENDLY_EMERGENCY_URL`
- [ ] Add `NEXT_PUBLIC_CALENDLY_PLUMBING_URL`
- [ ] Add `NEXT_PUBLIC_CALENDLY_ELECTRICAL_URL`
- [ ] Add `NEXT_PUBLIC_CALENDLY_HVAC_URL`
- [ ] Add `NEXT_PUBLIC_CALENDLY_CARPENTRY_URL`
- [ ] Add `NEXT_PUBLIC_CALENDLY_PAINTING_URL`
- [ ] Add `NEXT_PUBLIC_CALENDLY_FLOORING_URL`
- [ ] Add `NEXT_PUBLIC_CALENDLY_INSTALLATION_URL`
- [ ] Add `NEXT_PUBLIC_CALENDLY_MAINTENANCE_URL`
- [ ] Add `NEXT_PUBLIC_CALENDLY_CONSULTATION_URL`

**Deployment:**
```bash
# Commit changes
git add .
git commit -m "Add professional booking system with Calendly integration"
git push origin main

# Vercel will auto-deploy
```

## 🎯 Optional Enhancements

### Analytics Tracking
- [ ] Set up Google Analytics event tracking
- [ ] Track booking funnel drop-off points
- [ ] Monitor service popularity

### Calendly Webhooks
- [ ] Create `/api/calendly-webhook` endpoint
- [ ] Auto-create Sanity project records
- [ ] Send custom confirmation emails
- [ ] Integrate with CrewOpsPro

### Email Notifications
- [ ] Set up Resend email templates
- [ ] Send booking confirmation to client
- [ ] Send notification to team
- [ ] Include preparation checklist

### Photo Upload
- [ ] Add file input to ProjectDetails
- [ ] Upload to Sanity assets
- [ ] Display in confirmation page

## 📊 Success Metrics

Track these KPIs after launch:
- Booking conversion rate (visitors → scheduled appointments)
- Most popular services
- Average time to complete booking
- Drop-off points in funnel
- Mobile vs desktop bookings

## 🚨 Important Notes

1. **Calendly URLs are PUBLIC** - Use `NEXT_PUBLIC_` prefix for client-side access
2. **Test Mode First** - Use Calendly test mode before going live
3. **Emergency Service** - Requires 2-hour minimum notice (configure in Calendly)
4. **Mobile First** - 60%+ of bookings likely from mobile devices
5. **Accessibility** - All components include keyboard navigation

## 📖 Documentation

Comprehensive documentation available:
- **Setup Guide**: `BOOKING-SYSTEM.md`
- **API Reference**: See TypeScript interfaces in components
- **Environment Variables**: `.env.local.example`

## ✨ What You Get

- **Professional Design**: Clean, modern UI matching brand
- **Mobile Optimized**: Responsive on all devices
- **Service-Specific**: Custom Calendly URLs per service
- **Smart Validation**: Prevents incomplete bookings
- **Emergency Handling**: Special flow for urgent requests
- **SEO Optimized**: Metadata for search engines
- **Conversion Focused**: Trust badges, FAQs, clear CTAs
- **Future-Ready**: Built for webhooks, analytics, photo upload

## Need Help?

1. Check `BOOKING-SYSTEM.md` for detailed documentation
2. Review component comments for inline guidance
3. Test with browser dev tools for debugging
4. Check Calendly embed documentation for widget issues

---

**Ready to Launch?** Complete steps 1-5 above, then test thoroughly before promoting to customers.
