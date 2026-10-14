import React, { useEffect } from 'react';
import { Article } from '../types';

interface SEOHeadProps {
  article?: Article | null;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ article }) => {
  useEffect(() => {
    const origin = window.location.origin;
    const currentUrl = window.location.href;

    // Helper to update or create a meta tag
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let tag = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Helper to update or create canonical link
    const setCanonical = (href: string) => {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Helper to inject JSON-LD schema
    const setJsonLd = (schemaData: object) => {
      let script = document.getElementById('seo-jsonld') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'seo-jsonld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schemaData);
    };

    if (article) {
      // 1. Article Page SEO
      const pageTitle = article.seoTitle || `${article.title} | Behind the Brand`;
      const metaDesc = article.metaDescription || article.description;
      const canonicalUrl = `${origin}/blog/${article.slug}`;
      const imageUrl = article.editorialImage 
        ? `${origin}${article.editorialImage}` 
        : `${origin}/apple_logo_official.svg`;

      document.title = pageTitle;
      setMetaTag('name', 'description', metaDesc);
      setCanonical(canonicalUrl);

      // OpenGraph
      setMetaTag('property', 'og:title', pageTitle);
      setMetaTag('property', 'og:description', metaDesc);
      setMetaTag('property', 'og:type', 'article');
      setMetaTag('property', 'og:url', canonicalUrl);
      setMetaTag('property', 'og:site_name', 'Behind the Brand');
      setMetaTag('property', 'og:image', imageUrl);

      // Twitter Cards
      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:title', pageTitle);
      setMetaTag('name', 'twitter:description', metaDesc);
      setMetaTag('name', 'twitter:image', imageUrl);

      // Keywords meta tag
      if (article.keywords && article.keywords.length > 0) {
        setMetaTag('name', 'keywords', article.keywords.join(', '));
      }

      // Schema.org Structured Data: Article + BreadcrumbList + Optional FAQPage
      const graphItems: object[] = [
        {
          '@type': 'BlogPosting',
          '@id': `${canonicalUrl}#article`,
          'isPartOf': {
            '@type': 'Blog',
            '@id': `${origin}/#blog`,
            'name': 'Behind the Brand',
            'publisher': {
              '@type': 'Organization',
              'name': 'Behind the Brand',
              'url': origin
            }
          },
          'headline': article.seoTitle || article.title,
          'description': metaDesc,
          'image': imageUrl,
          'mainEntityOfPage': canonicalUrl,
          'datePublished': '2026-01-15T09:00:00+05:30',
          'dateModified': '2026-10-08T12:00:00+05:30',
          'author': {
            '@type': 'Organization',
            'name': article.author || 'Behind the Brand Editorial Team'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Behind the Brand',
            'url': origin
          },
          'articleSection': article.category,
          'keywords': article.keywords ? article.keywords.join(', ') : undefined
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Behind the Brand Home',
              'item': `${origin}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Brand Case Studies',
              'item': `${origin}/#stories-grid`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': article.brand,
              'item': canonicalUrl
            }
          ]
        }
      ];

      if (article.content.faq && article.content.faq.length > 0) {
        graphItems.push({
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          'mainEntity': article.content.faq.map((item) => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': item.answer
            }
          }))
        });
      }

      const articleSchema = {
        '@context': 'https://schema.org',
        '@graph': graphItems
      };

      setJsonLd(articleSchema);
    } else {
      // 2. Homepage SEO
      const homeTitle = 'Behind the Brand — Brand Strategy & Editorial Case Studies';
      const homeDesc = 'Discover analytical brand marketing strategies, consumer psychology, and business case studies behind iconic brands like Apple, Nike, and Zudio.';
      const homeCanonical = `${origin}/`;
      const homeImage = `${origin}/editorial-apple-workspace.webp`;

      document.title = homeTitle;
      setMetaTag('name', 'description', homeDesc);
      setCanonical(homeCanonical);

      // OpenGraph
      setMetaTag('property', 'og:title', homeTitle);
      setMetaTag('property', 'og:description', homeDesc);
      setMetaTag('property', 'og:type', 'website');
      setMetaTag('property', 'og:url', homeCanonical);
      setMetaTag('property', 'og:site_name', 'Behind the Brand');
      setMetaTag('property', 'og:image', homeImage);

      // Twitter Cards
      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:title', homeTitle);
      setMetaTag('name', 'twitter:description', homeDesc);
      setMetaTag('name', 'twitter:image', homeImage);

      // Keywords meta tag
      setMetaTag(
        'name',
        'keywords',
        'Apple branding strategy, Nike marketing strategy, Zudio marketing strategy, branding case studies, marketing psychology, business strategy'
      );

      // Homepage Schema: WebSite + Blog + FAQPage for AEO
      const homeSchema = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${origin}/#website`,
            'url': homeCanonical,
            'name': 'Behind the Brand',
            'description': homeDesc,
            'publisher': {
              '@type': 'Organization',
              'name': 'Behind the Brand'
            }
          },
          {
            '@type': 'Blog',
            '@id': `${origin}/#blog`,
            'name': 'Behind the Brand Editorial Dossiers',
            'description': homeDesc,
            'url': homeCanonical
          },
          {
            '@type': 'FAQPage',
            '@id': `${origin}/#faq`,
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'What is Behind the Brand?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Behind the Brand is an independent editorial publication and business archive dedicated to decoding the marketing strategies, brand positioning, pricing power, and consumer psychology behind iconic global and Indian companies.'
                }
              },
              {
                '@type': 'Question',
                'name': "What is Apple's core branding strategy?",
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': "Apple's branding strategy is built on radical simplicity, emotional brand positioning, and obsessive design consistency across software, hardware, retail, and packaging, turning functional technology into an aspirational lifestyle identity."
                }
              },
              {
                '@type': 'Question',
                'name': "Why is Nike's marketing strategy effective?",
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': "Nike's marketing strategy succeeds by prioritizing emotional storytelling and the universal hero's journey over technical shoe specifications, empowering consumers to view themselves as everyday athletes through its 'Just Do It' philosophy."
                }
              },
              {
                '@type': 'Question',
                'name': 'How does Zudio make fashion affordable in India?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': "Zudio delivers affordable fast fashion by leveraging localized volume supply chains, zero mainstream television advertising spend, rapid micro-collection turnover, and pricing anchored below ₹999 under Trent's retail leadership."
                }
              },
              {
                '@type': 'Question',
                'name': 'Can I access each brand case study via a direct URL?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes. Every dossier in our 15-brand archive has its own permanent, direct URL (such as /blog/apple-branding-strategy, /blog/nike-marketing-strategy, and /blog/zudio-marketing-strategy) with complete executive takeaways and structured analysis.'
                }
              }
            ]
          }
        ]
      };

      setJsonLd(homeSchema);
    }
  }, [article]);

  return null;
};
