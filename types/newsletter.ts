// Newsletter type definitions for TypeScript

export interface Newsletter {
  _id: string;
  _type: 'newsletter';
  issueNumber: number;
  title: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  publishedAt: string;
  excerpt: string;
  body: string;
}

export interface NewsletterCard extends Omit<Newsletter, 'body'> {
  // Newsletter without body - used for index page cards
}

export interface NewsletterParams {
  slug: string;
}
