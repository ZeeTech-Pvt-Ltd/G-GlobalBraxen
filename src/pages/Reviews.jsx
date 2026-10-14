import Icon from '../components/Icon'
import ReviewsBand from '../sections/ReviewsBand'
import Testimonials from '../sections/Testimonials'
import FinalCta from '../sections/FinalCta'
import useMeta from '../hooks/useMeta'
import { BRAND, RATING, RATING_BREAKDOWN, REVIEW_CARDS, SITE_URL } from '../data/content'

export default function Reviews() {
  useMeta({
    title: `${BRAND} Reviews - Ratings & Member Feedback`,
    canonical: `${SITE_URL}/g-globalbraxen-reviews`,
    description:
      `${BRAND} reviews from Australian traders - overall rating ${RATING.score}/5 from ${RATING.reviews} member reviews. Read verified feedback about the platform.`,
  })

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BRAND,
    url: SITE_URL,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING.score,
      reviewCount: RATING.reviews,
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {/* Hero header, modeled on the FAQs page hero */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <span className="cta-final__ghost" aria-hidden="true">
          REVIEWS
        </span>
        <div className="container hero__inner" data-reveal style={{ paddingBlock: 'clamp(40px, 5vw, 72px)', gridTemplateColumns: '1fr' }}>
          <div style={{ maxWidth: 860 }}>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              Reviews
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>
              G-GlobalBraxen <span className="accent">Reviews</span>
            </h1>
            <p className="hero__sub">
              See what Australian traders say about G-GlobalBraxen - from first-time members
              testing the waters to experienced investors running the platform alongside their
              day jobs. Every review below comes from a verified member account.
            </p>
          </div>
        </div>
      </section>

      {/* Overall rating summary with star distribution */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Rating summary</span>
            <h2>How members rate G-GlobalBraxen</h2>
            <p>Based on verified member reviews collected across Australia.</p>
          </div>

          <div className="rating-summary" data-reveal>
            <div className="rating-summary__overall">
              <div className="rating-summary__score">{RATING.score}</div>
              <span className="rating__stars" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="star" size={20} filled />
                ))}
              </span>
              <p>
                {RATING.score}/5 from {RATING.reviews} reviews
              </p>
            </div>

            <div className="rating-breakdown">
              {RATING_BREAKDOWN.map(({ stars, pct }) => (
                <div className="rating-breakdown__row" key={stars}>
                  <span className="rating-breakdown__label">{stars} stars</span>
                  <span className="rating-breakdown__bar">
                    <span className="rating-breakdown__fill" style={{ width: `${pct}%` }} />
                  </span>
                  <span className="rating-breakdown__pct">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust band with verified quotes */}
      <ReviewsBand />

      {/* Member review cards */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Member reviews</span>
            <h2>What our members are saying</h2>
            <p>Detailed feedback from verified G-GlobalBraxen members.</p>
          </div>

          <div className="reviews-grid" data-reveal-grid>
            {REVIEW_CARDS.map(({ name, location, photo, stars, title, text, date }) => (
              <article className="review-card" data-reveal key={name}>
                <div className="review-card__head">
                  <span className="testimonial__stars" aria-label={`${stars} star rating`}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="star" size={16} filled={i <= stars} />
                    ))}
                  </span>
                  <span className="testimonial__badge">
                    <Icon name="check" size={13} strokeWidth={2.5} />
                    Verified
                  </span>
                </div>

                <h3 className="review-card__title">{title}</h3>
                <p className="review-card__text">“{text}”</p>

                <div className="review-card__meta">
                  <img
                    className="testimonial__avatar"
                    src={photo}
                    alt={`${name} - verified member`}
                    loading="lazy"
                  />
                  <div>
                    <div className="testimonial__name">{name}</div>
                    <div className="testimonial__loc">{location}, Australia</div>
                  </div>
                  <span className="review-card__date">{date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel of member stories */}
      <Testimonials />

      {/* Closing CTA with registration form */}
      <FinalCta />
    </main>
  )
}
