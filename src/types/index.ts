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

export interface Article {
  id: number;
  number: string;
  brand: string;
  category: Exclude<Category, 'All'>;
  title: string;
  description: string;
  keywords: string[];
  readTime: string;
  image?: string;
  imageAlt?: string;
  useOriginalLogoImage?: boolean;
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
  };
  relatedIds: number[];
}
