import { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'
import caseStudies from '@/src/data/case-studies.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brylcodesdev.vercel.app'
  
  const mainRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/work', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/experience', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/process', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/stack', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
    { url: '/terms-of-service', priority: 0.5, changeFrequency: 'yearly' },
    { url: '/cookie-policy', priority: 0.5, changeFrequency: 'yearly' },
    { url: '/sla-agreement', priority: 0.5, changeFrequency: 'yearly' },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as any,
    priority: 0.7,
  }))

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as any,
    priority: 0.8,
  }))

  return [...mainRoutes, ...serviceRoutes, ...caseStudyRoutes]
}
