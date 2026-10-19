import type { MetadataRoute } from 'next'
import { SITE_URL } from '../data/content'

export const dynamic = 'force-static'

// All public routes, including the newer pages the old static
// sitemap.xml was missing.
const ROUTES = [
  '/',
  '/about-us',
  '/features',
  '/how-it-works',
  '/register',
  '/g-globalbraxen-reviews',
  '/contact-us',
  '/faqs',
  '/privacy-policy',
  '/terms-of-use',
  '/risk-disclosure',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date('2026-10-19'),
  }))
}
