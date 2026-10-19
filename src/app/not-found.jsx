import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="hero not-found">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <span className="cta-final__ghost" aria-hidden="true">
        404
      </span>

      <div className="container thank-you__inner">
        <h1>
          Page <span className="accent">Not Found</span>
        </h1>
        <p className="hero__sub thank-you__sub">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
          you back on track.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--lime">
            Back to Home
          </Link>
          <Link href="/contact-us" className="btn btn--ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
