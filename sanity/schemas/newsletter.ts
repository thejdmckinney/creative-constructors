import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    defineField({
      name: 'issueNumber',
      title: 'Issue Number',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
      description: 'Sequential issue number (e.g., 1, 2, 3)',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
      description: 'The main headline/topic for this issue',
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
      description: 'Auto-generated from title - used in the URL',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          validation: (Rule) => Rule.required(),
        },
      ],
      description: 'Main image shown at the top of the newsletter',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description: 'When this issue was/will be published',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
      description: 'Short 1-2 sentence description for the index page card',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
      description: 'The full newsletter content with rich text formatting',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      issueNumber: 'issueNumber',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { title, issueNumber, publishedAt } = selection
      return {
        title: `Issue ${String(issueNumber).padStart(3, '0')}: ${title}`,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : 'No date set',
      }
    },
  },
  orderings: [
    {
      title: 'Issue Number, New to Old',
      name: 'issueNumberDesc',
      by: [{ field: 'issueNumber', direction: 'desc' }],
    },
    {
      title: 'Published Date, New to Old',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
