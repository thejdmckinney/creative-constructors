# Booking System Documentation

## Overview

The booking system provides a professional, multi-step wizard for clients to schedule service consultations via Calendly integration. It features a Service-First Booking Flow that guides users through service selection, project details, calendar scheduling, and confirmation.

## Architecture

### Multi-Step Wizard Flow

1. **Service Selection** - Choose from 10 service categories
2. **Project Details** - Provide project information and preferences
3. **Calendar Scheduling** - Select appointment time via embedded Calendly
4. **Confirmation** - View booking summary and next steps

### Components

```
app/book/page.tsx - Main booking page with hero, wizard, FAQ
components/BookingWizard.tsx - State management and step orchestration
components/booking/
  ├── ServiceSelection.tsx - Step 1: Service category cards
  ├── ProjectDetails.tsx - Step 2: Project details form
  ├── CalendlyEmbed.tsx - Step 3: Embedded Calendly widget
  └── BookingConfirmation.tsx - Step 4: Success confirmation
```

## Setup Instructions

### 1. Configure Calendly URLs

Copy `.env.local.example` to `.env.local` and add your Calendly event URLs:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual Calendly URLs:

```bash
# Emergency Services
NEXT_PUBLIC_CALENDLY_EMERGENCY_URL=https://calendly.com/your-account/emergency-service

# Standard Services
NEXT_PUBLIC_CALENDLY_PLUMBING_URL=https://calendly.com/your-account/plumbing
NEXT_PUBLIC_CALENDLY_ELECTRICAL_URL=https://calendly.com/your-account/electrical
NEXT_PUBLIC_CALENDLY_HVAC_URL=https://calendly.com/your-account/hvac
NEXT_PUBLIC_CALENDLY_CARPENTRY_URL=https://calendly.com/your-account/carpentry
NEXT_PUBLIC_CALENDLY_PAINTING_URL=https://calendly.com/your-account/painting
NEXT_PUBLIC_CALENDLY_FLOORING_URL=https://calendly.com/your-account/flooring
NEXT_PUBLIC_CALENDLY_INSTALLATION_URL=https://calendly.com/your-account/installation
NEXT_PUBLIC_CALENDLY_MAINTENANCE_URL=https://calendly.com/your-account/maintenance
NEXT_PUBLIC_CALENDLY_CONSULTATION_URL=https://calendly.com/your-account/consultation
```

### 2. Create Calendly Event Types

In your Calendly account, create event types for each service:

**Recommended Event Settings:**
- **Duration**: 30 minutes for consultation calls
- **Location**: Phone call or video conference
- **Questions to Ask**:
  - Project Description (already prefilled from wizard)
  - Property Type (already prefilled from wizard)
  - Project Urgency (already prefilled from wizard)
  - Contact Method Preference (already prefilled from wizard)
  - Phone Number
  - Email Address
  - Best Time to Call (if phone consultation)

**Emergency Service Event:**
- **Duration**: 15 minutes (quick assessment)
- **Buffer Time**: 30 minutes before/after
- **Notice**: Minimum 2 hours notice
- **Special Instructions**: Include emergency contact number

### 3. Add Navigation Links

Update your navigation to include the booking page:

**Navigation Component** (`components/Navigation.tsx`):
```tsx
<Link href="/book" className="...">
  Book Now
</Link>
```

**Homepage Hero** (`app/page.tsx`):
```tsx
<Link href="/book" className="...">
  Schedule Consultation
</Link>
```

**Service Pages** (`app/services/*/page.tsx`):
```tsx
<Link href="/book" className="...">
  Book This Service
</Link>
```

### 4. Deploy to Vercel

Push your changes and ensure environment variables are configured in Vercel:

1. Go to Vercel Dashboard > Your Project > Settings > Environment Variables
2. Add all `NEXT_PUBLIC_CALENDLY_*` variables
3. Redeploy if needed

## Features

### Service Selection
- **10 Service Categories**: Emergency, Plumbing, Electrical, HVAC, Carpentry, Painting, Flooring, Installation, Maintenance, General Consultation
- **Emergency Badge**: Special highlighting for urgent services
- **Service-Specific Routing**: Each service maps to unique Calendly URL
- **Responsive Grid**: 3 columns desktop, stacked mobile

### Project Details Form
- **Property Type**: Residential or Commercial
- **Urgency Levels**: Emergency (today), This Week, This Month, Planning Ahead
- **Project Description**: Multi-line textarea for details
- **Contact Method**: Phone, Email, or Text preference
- **Form Validation**: Required field checking with error messages
- **Adaptive UI**: Urgency selector adapts based on service selection

### Calendly Integration
- **Embedded Widget**: Full Calendly calendar embedded in page
- **Prefilled Data**: Automatically passes project details to Calendly
- **Service Summary**: Shows booking details above calendar
- **Event Capture**: Captures scheduled event data for confirmation
- **Emergency Notice**: Special alert for emergency services

### Confirmation Page
- **Success Animation**: Green checkmark icon
- **Booking Summary**: Shows scheduled time, service, property type
- **What Happens Next**: 4-step process explanation
- **Preparation Checklist**: Service-specific preparation tips
- **Action Buttons**: Return home, view gallery, book another service
- **Contact Information**: Phone number for rescheduling

## Type Definitions

### BookingData
```typescript
type BookingData = {
  service: ServiceType | null
  propertyType: 'residential' | 'commercial' | ''
  urgency: 'emergency' | 'this-week' | 'this-month' | 'planning' | ''
  description: string
  photos: File[]
  contactMethod: 'phone' | 'email' | 'text' | ''
  scheduledEvent?: {
    eventUrl: string
    inviteeUrl: string
    startTime: string
    endTime: string
  }
}
```

### ServiceType
```typescript
type ServiceType = {
  id: string
  name: string
  description: string
  icon: string
  calendlyUrl: string
  isEmergency?: boolean
}
```

## SEO Configuration

The booking page includes optimized metadata:

```typescript
export const metadata: Metadata = {
  title: 'Book a Consultation | Creative Constructors',
  description: 'Schedule your free consultation with our expert team...',
  openGraph: {
    title: 'Book a Service Consultation',
    description: 'Professional handyman services...',
    type: 'website',
  },
}
```

**Target Keywords:**
- "book handyman service"
- "schedule consultation"
- "handyman booking"
- "service appointment"

## Future Enhancements

### Calendly Webhooks (Recommended)
Create API route to receive Calendly webhook events:

```typescript
// app/api/calendly-webhook/route.ts
export async function POST(request: Request) {
  const event = await request.json()
  
  // 1. Create project record in Sanity
  // 2. Send to CrewOpsPro queue
  // 3. Send custom confirmation email
  // 4. Track analytics event
  
  return Response.json({ received: true })
}
```

**Webhook Setup in Calendly:**
1. Go to Calendly Integrations > Webhooks
2. Add webhook URL: `https://your-domain.com/api/calendly-webhook`
3. Subscribe to: `invitee.created`, `invitee.canceled`

### Photo Upload Feature
The BookingData type includes a `photos` array for future photo upload:

```typescript
photos: File[]
```

**Implementation Steps:**
1. Add file input to ProjectDetails component
2. Upload to Sanity asset storage
3. Attach to Calendly event via prefill or webhook
4. Display in confirmation page

### SMS Confirmation
Integrate Twilio for SMS confirmations:

```typescript
// Send SMS when booking confirmed
await twilio.messages.create({
  to: phoneNumber,
  from: twilioNumber,
  body: `Your ${service.name} consultation is confirmed for ${startTime}`
})
```

### Analytics Tracking
Track booking funnel:

```typescript
// Track step progression
gtag('event', 'booking_step', {
  step: currentStep,
  service: bookingData.service?.name
})

// Track completed bookings
gtag('event', 'booking_complete', {
  service: bookingData.service?.name,
  urgency: bookingData.urgency,
  value: 1
})
```

## Troubleshooting

### Calendly Widget Not Loading
- Check that Calendly script loaded: `window.Calendly`
- Verify environment variables are set correctly
- Check browser console for CORS errors
- Ensure Calendly URLs are valid and public

### Import Errors in TypeScript
- Restart TypeScript language server
- Check that all files exist in `components/booking/`
- Run `npm run build` to verify production build

### Form Validation Not Working
- Check browser console for JavaScript errors
- Verify all required fields have validation
- Test with network throttling (slow 3G) to catch race conditions

### Event Not Captured from Calendly
- Check that `window.addEventListener('message')` is registered
- Verify Calendly event name: `calendly.event_scheduled`
- Check browser console for postMessage events
- Test with Calendly's test mode first

## Testing Checklist

- [ ] All 10 service selections work
- [ ] Emergency service shows special badge
- [ ] Form validation catches empty required fields
- [ ] Calendly widget loads for each service
- [ ] Event scheduling updates booking data
- [ ] Confirmation page shows correct booking summary
- [ ] "Book Another Service" resets wizard
- [ ] Mobile responsive on all steps
- [ ] Back buttons work correctly
- [ ] Progress indicator updates properly

## Production Deployment

1. **Environment Variables**: Confirm all Calendly URLs in Vercel
2. **Test Booking Flow**: Complete end-to-end test booking
3. **Check Analytics**: Verify tracking events fire
4. **Update Contact Number**: Replace placeholder `(555) 555-1234` with real number
5. **Add to Sitemap**: Include `/book` in sitemap.xml
6. **Monitor Performance**: Check PageSpeed for booking page
7. **Set Up Monitoring**: Alert on booking completion events

## Support

For questions or issues:
- Check Calendly API documentation: https://developer.calendly.com/
- Review Next.js environment variables: https://nextjs.org/docs/basic-features/environment-variables
- Test Calendly embed: https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview
