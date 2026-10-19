import Script from 'next/script'
import { Epilogue, Manrope } from 'next/font/google'
import '../styles/global.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RevealProvider from '../components/RevealProvider'
import ScrollToTop from '../components/ScrollToTop'
import { BRAND, SITE_URL } from '../data/content'

// Google Fonts, self-hosted at build time by next/font. The CSS
// variables map onto --font-heading / --font-body in global.css.
const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-epilogue',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'G-GlobalBraxen - Official Crypto Trading Platform Australia',
  description:
    "G-GlobalBraxen - Australia's online trading platform. Trade crypto, forex, equities and more with AI-powered analysis and 24/7 access.",
  keywords:
    'G-GlobalBraxen, G-GlobalBraxen platform, G-GlobalBraxen Australia, G-GlobalBraxen review, crypto trading Australia, automated crypto trading, AI trading platform, Bitcoin, Ethereum, Solana',
  robots: 'index, follow, max-image-preview:large',
  verification: { google: '7yjmempZdXTNn_WP5n3GWhaCzHFYDJF3ufYtWu17vcE' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: BRAND,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export const viewport = {
  themeColor: '#27272a',
}

// Organization + WebSite structured data, carried over from the Vite
// index.html head.
const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: BRAND,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.svg`,
      email: 'support@g-globalbraxen.net',
      areaServed: 'AU',
      description:
        "G-GlobalBraxen - Australia's online trading platform. Trade crypto, forex, equities and more with AI-powered analysis and 24/7 access.",
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: BRAND,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-AU',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${manrope.variable}`}>
      <body>
        {/* Google Analytics (GA4) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7LEJBRBCHG" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "G-7LEJBRBCHG");`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />

        <RevealProvider>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </RevealProvider>
      </body>
    </html>
  )
}
