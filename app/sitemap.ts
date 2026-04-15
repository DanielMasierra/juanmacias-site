import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://juanmacias.site',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: 'https://juanmacias.site/es',
          en: 'https://juanmacias.site/en',
          pt: 'https://juanmacias.site/pt',
        }
      }
    }
  ];
}
