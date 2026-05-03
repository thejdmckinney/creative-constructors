# Mapbox Integration Setup Guide

## What Was Added

I've integrated Mapbox into your `/service-areas` page to display an interactive map of your Dallas-Fort Worth service coverage area. Here's what was implemented:

### Files Created/Modified

1. **`/components/ServiceAreaMap.tsx`** - New Mapbox component with:
   - Interactive map centered on Dallas-Fort Worth
   - Service area boundaries for all your service cities
   - Different colors for premium areas (University Park, Highland Park)
   - Hover effects on areas
   - Labels showing city names
   - Responsive sizing

2. **`/app/service-areas/page.tsx`** - Updated to:
   - Import the ServiceAreaMap component
   - Display the map above the service areas grid

3. **`.env.local`** - Added:
   - Mapbox access token environment variable placeholder

## Setup Instructions

### Step 1: Get Your Mapbox Access Token

1. Go to [Mapbox Account](https://account.mapbox.com/tokens/)
2. Sign in to your Mapbox account
3. You should see your default public token, or create a new one
4. Copy your token

### Step 2: Add Token to Environment

1. Open `.env.local` in your project root
2. Replace `your_mapbox_access_token_here` with your actual Mapbox token:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi...
   ```
3. Save the file

### Step 3: Test It Out

1. Run your dev server: `npm run dev`
2. Navigate to `/service-areas`
3. You should see the interactive map displaying the service areas

## Map Features

- **Visual Service Areas**: Color-coded regions showing your coverage
- **Premium Areas**: University Park and Highland Park highlighted in orange
- **Interactive Hover**: Hover over areas to see them highlighted
- **City Labels**: Text labels for easy identification
- **Responsive**: Adapts to different screen sizes

## Customization Options

### Adjusting Service Area Boundaries

Edit the coordinates in `/components/ServiceAreaMap.tsx` in the `sourceData` section. Currently, approximate bounding boxes are used. For more accuracy, you can:

1. Use real GeoJSON coordinates from Google Maps
2. Visit [Geojson.io](https://geojson.io/) to draw precise boundaries
3. Replace the polygon coordinates in the component

### Changing Colors

In `ServiceAreaMap.tsx`, modify:
- `'#2E5090'` - Regular service area color (navy)
- `'#FF8C42'` - Regular area hover color (orange)
- `'#FFB347'` - Premium area color
- `'#FF6B35'` - Premium area hover color

### Map Style

Change the map style in the component initialization:
```typescript
style: 'mapbox://styles/mapbox/streets-v12',
```

Other options:
- `'mapbox://styles/mapbox/dark-v11'`
- `'mapbox://styles/mapbox/light-v11'`
- `'mapbox://styles/mapbox/outdoors-v12'`
- `'mapbox://styles/mapbox/satellite-v9'`

## Pricing & Considerations

- **Free Tier**: Up to 50,000 map views/month
- **Generous Free Tier**: Should cover most business websites
- **If you exceed free tier**: Mapbox charges per 1,000 map views

Monitor your usage at [Mapbox Account](https://account.mapbox.com/billing/overview/)

## Troubleshooting

### Map not showing?
1. Check that `NEXT_PUBLIC_MAPBOX_TOKEN` is set in `.env.local`
2. Verify the token is valid (not expired or revoked)
3. Check browser console for errors

### Token not working?
1. Regenerate token at [Mapbox Account](https://account.mapbox.com/tokens/)
2. Make sure it's a public token (starts with `pk.`)
3. Restart your dev server

### Performance issues?
- The map is lazy-loaded (only renders when component mounts)
- Consider reducing zoom level or simplifying boundaries if needed

## Next Steps

1. **Implement Click Events**: Add functionality to navigate to city pages when areas are clicked
2. **Add Markers**: Place pins for your office location or service centers
3. **Real-Time Availability**: Show active service availability by area
4. **Analytics**: Track which areas users are viewing most
5. **Improved Boundaries**: Use actual municipal boundaries for accuracy

Enjoy your new interactive map! 🗺️
