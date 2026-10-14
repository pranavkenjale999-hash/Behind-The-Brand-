export type Category = 
  | 'All' 
  | 'India' 
  | 'Strategy' 
  | 'Psychology' 
  | 'Technology' 
  | 'Business' 
  | 'Marketing';

export interface ArticleSection {
  number: string;
  heading: string;
  paragraphs: string[];
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface Article {
  id: number;
  slug: string;
  number: string;
  brand: string;
  category: Exclude<Category, 'All'>;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  relatedKeywords?: string[];
  description: string;
  keywords: string[];
  readTime: string;
  publishDate?: string;
  author?: string;
  image?: string;
  editorialImage?: string;
  imageAlt?: string;
  visualTheme: {
    bg: string;
    text: string;
    accent: string;
    symbol: string;
  };
  content: {
    intro: string;
    sections: ArticleSection[];
    keyInsight: string;
    takeaway: string;
    faq?: ArticleFAQ[];
  };
  relatedIds: number[];
}
