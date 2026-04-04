import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'e.g., "McKinney Kitchen Renovation" or "Plano Foundation Repair"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project in the Featured Projects section',
      initialValue: false,
    }),
    defineField({
      name: 'heroProject',
      title: 'Hero Project',
      type: 'boolean',
      description: 'Use this as the main hero project (only one should be selected)',
      initialValue: false,
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Additional Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Plumbing', value: 'plumbing' },
          { title: 'Electrical', value: 'electrical' },
          { title: 'HVAC', value: 'hvac' },
          { title: 'Carpentry', value: 'carpentry' },
          { title: 'Painting', value: 'painting' },
          { title: 'Flooring', value: 'flooring' },
          { title: 'Installation', value: 'installation' },
          { title: 'Repair', value: 'repair' },
          { title: 'Maintenance', value: 'maintenance' },
          { title: 'Assembly', value: 'assembly' },
          { title: 'Decks & Patios', value: 'decks-patios' },
          { title: 'Smart Home', value: 'smart-home' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'transformationType',
      title: 'Transformation Type',
      type: 'string',
      description: 'How would you categorize this transformation?',
      options: {
        list: [
          { title: 'Outdated to Modern', value: 'outdated-to-modern' },
          { title: 'Damaged to Restored', value: 'damaged-to-restored' },
          { title: 'Unsafe to Safe', value: 'unsafe-to-safe' },
          { title: 'Basic to Beautiful', value: 'basic-to-beautiful' },
          { title: 'Problem to Solution', value: 'problem-to-solution' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City or neighborhood (e.g., "McKinney, TX" or "Plano")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'completedDate',
      title: 'Completion Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      description: 'What problem did the homeowner have?',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'solution',
      title: 'The Solution',
      type: 'text',
      description: 'What did you do to fix it?',
      rows: 4,
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: 'result',
      title: 'The Result',
      type: 'text',
      description: 'What was the outcome? What improvements were made?',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 3,
        },
        {
          name: 'clientName',
          title: 'Client Name',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
      description: 'e.g., "2 days", "1 week", "3 weeks"',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      serviceType: 'serviceType',
      location: 'location',
      media: 'afterImage',
      completedDate: 'completedDate',
    },
    prepare(selection) {
      const { title, serviceType, location, completedDate } = selection
      const date = completedDate ? new Date(completedDate).toLocaleDateString() : 'No date'
      return {
        title: title,
        subtitle: `${serviceType} • ${location} • ${date}`,
        media: selection.media,
      }
    },
  },
})
