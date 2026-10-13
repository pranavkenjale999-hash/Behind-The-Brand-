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

      document.title = pageTitle;
      setMetaTag('name', 'description', metaDesc);
      setCanonical(canonicalUrl);

      // OpenGraph
      setMetaTag('property', 'og:title', pageTitle);
      setMetaTag('property', 'og:description', metaDesc);
      setMetaTag('property', 'og:type', 'article');
      setMetaTag('property', 'og:url', canonicalUrl);
      setMetaTag('property', 'og:site_name', 'Behind the Brand');

      // Twitter Cards
      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:title', pageTitle);
      setMetaTag('name', 'twitter:description', metaDesc);

      // Keywords meta tag
      if (article.keywords && article.keywords.length > 0) {
        setMetaTag('name', 'keywords', article.keywords.join(', '));
      }

      // Schema.org Structured Data: Article + BreadcrumbList
      const articleSchema = {
        '@context': 'https://schema.org',
        '@graph': [
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
                'name': 'Home',
                'item': `${origin}/`
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Blog',
                'item': `${origin}/#stories`
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': article.brand,
                'item': canonicalUrl
              }
            ]
          }
        ]
      };

      setJsonLd(articleSchema);
    } else {
      // 2. Homepage SEO
      const homeTitle = 'Behind the Brand — Editorial Business & Branding Magazine';
      const homeDesc = 'Explore in-depth business case studies, marketing strategies, brand psychology, and consumer stories behind iconic global and Indian brands.';
      const homeCanonical = `${origin}/`;

      document.title = homeTitle;
      setMetaTag('name', 'description', homeDesc);
      setCanonical(homeCanonical);

      // OpenGraph
      setMetaTag('property', 'og:title', homeTitle);
      setMetaTag('property', 'og:description', homeDesc);
      setMetaTag('property', 'og:type', 'website');
      setMetaTag('property', 'og:url', homeCanonical);
      setMetaTag('property', 'og:site_name', 'Behind the Brand');

      // Twitter Cards
      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:title', homeTitle);
      setMetaTag('name', 'twitter:description', homeDesc);

      // Homepage Schema
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
            'name': 'Behind the Brand Essays',
            'description': homeDesc,
            'url': homeCanonical
          }
        ]
      };

      setJsonLd(homeSchema);
    }
  }, [article]);

  return null;
};
