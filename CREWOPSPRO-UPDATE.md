# CrewOpsPro Integration Update Required

## Summary
The Creative Constructors website has been updated to use a **flexible featured images** system instead of rigid before/after images. This allows projects like wall art installation or light fixture installation to showcase their best photos without requiring a "before" image.

## What Changed

### Old System (DEPRECATED)
```typescript
{
  beforeImage: { asset, alt },  // Required - single image
  afterImage: { asset, alt }    // Required - single image
}
```

### New System (CURRENT)
```typescript
{
  featuredImages: [             // Required - array of 2-4 images
    { asset, alt },
    { asset, alt },
    { asset, alt },  // optional 3rd
    { asset, alt }   // optional 4th
  ]
}
```

## CrewOpsPro Code Updates Needed

### Current Publishing Code (NEEDS UPDATE)
Your current code in CrewOpsPro likely looks like this:

```typescript
// OLD - DON'T USE THIS ANYMORE
const mutations = [
  {
    create: {
      _type: 'project',
      title: projectData.title,
      slug: { _type: 'slug', current: generateSlug(projectData.title) },
      beforeImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: beforeImageId },
        alt: 'Before photo'
      },
      afterImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: afterImageId },  
        alt: 'After photo'
      },
      // ... other fields
    }
  }
]
```

### New Publishing Code (USE THIS)
```typescript
// NEW - Use this pattern instead
const mutations = [
  {
    create: {
      _type: 'project',
      title: projectData.title,
      slug: { _type: 'slug', current: generateSlug(projectData.title) },
      featuredImages: [
        {
          _type: 'image',
          _key: generateKey(), // Generate unique key for each image
          asset: { _type: 'reference', _ref: image1Id },
          alt: 'First featured photo'
        },
        {
          _type: 'image',
          _key: generateKey(),
          asset: { _type: 'reference', _ref: image2Id },
          alt: 'Second featured photo'
        },
        {
          _type: 'image',
          _key: generateKey(),
          asset: { _type: 'reference', _ref: image3Id },
          alt: 'Third featured photo'
        }
        // Can add up to 4 total
      ],
      serviceType: projectData.serviceType,
      location: projectData.location,
      completedDate: projectData.completedDate,
      challenge: projectData.challenge,
      solution: projectData.solution,      // User-provided from CrewOpsPro UI
      result: projectData.result,          // User-provided from CrewOpsPro UI
      featured: projectData.featured || false,
      heroProject: false,
      gallery: projectData.gallery || [],
      testimonial: projectData.testimonial || null,
      duration: projectData.duration || null,
      transformationType: projectData.transformationType || null,
      // ... other fields
    }
  }
]
```

## UI Changes Needed in CrewOpsPro

### Photo Selection
1. **Remove**: "Before Photo" / "After Photo" selectors
2. **Add**: "Featured Photos" selector that allows:
   - Selecting 2-4 photos from the project
   - Reordering the photos (drag and drop)
   - Setting alt text for each photo
3. **Label**: First two photos as "Primary Images" (will appear in before/after slider)
4. **Label**: Photos 3-4 as "Additional Featured" (will appear in grid below slider)

### Project Story Fields (REQUIRED)
Add these text input fields to the CrewOpsPro UI:

1. **Challenge** (already exists)
   - Multi-line text area (3-4 rows)
   - Max 300 characters
   - Description: "What problem did the homeowner have?"
   
2. **Solution** (NEW - needs to be added)
   - Multi-line text area (4-5 rows)
   - Max 400 characters
   - Description: "What did you do to fix it? Detail the work performed."
   - REQUIRED field
   
3. **Result** (NEW - needs to be added)
   - Multi-line text area (3-4 rows)
   - Max 300 characters
   - Description: "What was the outcome? What improvements were made?"
   - REQUIRED field

**Important**: Remove any auto-population logic for `solution` and `result`. These should be filled in manually just like `challenge` to provide authentic, specific project details.


## Helper Function for Key Generation
```typescript
function generateKey(): string {
  return Math.random().toString(36).substr(2, 9)
}
```

## Validation Rules
- **Minimum**: 2 featured images required
- **Maximum**: 4 featured images allowed
- **Fields**: Each image needs `_type`, `_key`, `asset`, and `alt`

## Backward Compatibility
The website still supports old projects with `beforeImage`/`afterImage` via fallback logic. This means:
- ✅ Existing published projects will continue to work
- ✅ You can update CrewOpsPro gradually
- ✅ New projects should use `featuredImages` array
- ⚠️ Publishing with old format still works but is deprecated

## Testing Your Update
After updating CrewOpsPro code:

1. Publish a test project with 2 featured images
2. Check that it appears on https://creative-constructors.com/gallery
3. Click into the project detail page
4. Verify the before/after slider shows your first 2 images
5. Try publishing with 3-4 images and verify the grid displays extras

## Gallery behavior & fixes

If images were previously cropped or the slider wasn't interactive, we've made the following adjustments in the website code to address those problems:

- Images in the project detail view now use `object-contain` so the full photo is visible within the viewing area (the container keeps a fixed height but the image is fully visible; black bars may appear on the sides for some aspect ratios).
- The before/after slider is now clickable anywhere to immediately set the slider position and supports dragging (mouse + touch). This fixes cases where the handle did not move or the slider only reacted after a delay.

What you should check in CrewOpsPro before publishing:

- Upload images at reasonable resolutions (1200–3000px on the long side) to ensure the slider and gallery look crisp.
- Ensure the first two `featuredImages` are the pair you want to compare in the slider (they'll appear left/right respectively).

How to verify after publishing:

1. Open the project detail page on the website.
2. The slider should show the two primary images and you should be able to click anywhere on the image to move the divider and drag the handle with mouse or touch.
3. Scroll to the "More Featured Images" and "More Photos" sections — each photo should show in full (no important parts cropped).

If you prefer the older cropped look for thumbnails, we can keep `object-cover` for the grid tiles and only use `object-contain` in the detail view — tell me which you prefer and I’ll revert grid behavior accordingly.

## Questions?
If you need help implementing this update in CrewOpsPro, let me know and I can provide more specific code examples for your setup.
