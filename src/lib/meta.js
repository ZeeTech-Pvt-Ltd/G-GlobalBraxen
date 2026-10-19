import { BRAND, SITE_URL } from '../data/content'

// Builds per-page metadata mirroring the old useMeta behaviour plus the
// static index.html tags: title, description, canonical, and full
// OG/Twitter tags including the 1200x630 share image.
export function pageMeta(title, description, path) {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      type: 'website',
      siteName: BRAND,
      locale: 'en_AU',
      title,
      description,
      url: `${SITE_URL}${path}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  }
}
