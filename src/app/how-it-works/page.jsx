import HowItWorks from '../../sections/HowItWorks'
import Faq from '../../sections/Faq'
import FinalCta from '../../sections/FinalCta'
import { pageMeta } from '../../lib/meta'

export const metadata = pageMeta(
  'How It Works - G-GlobalBraxen Trading Platform',
  'How G-GlobalBraxen works - sign up in minutes, deposit from 250 A$, and start trading crypto, forex, equities and more with AI-powered analysis.',
  '/how-it-works',
)

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero header, modeled on the FAQs page hero */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <span className="cta-final__ghost" aria-hidden="true">
          HOW
        </span>
        <div className="container hero__inner" data-reveal style={{ paddingBlock: 'clamp(40px, 5vw, 72px)', gridTemplateColumns: '1fr' }}>
          <div style={{ maxWidth: 860 }}>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              How It Works
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>
              How G-GlobalBraxen <span className="accent">Works</span>
            </h1>
            <p className="hero__sub">
              Getting started takes three simple steps - sign up, add funds and start trading.
              From there, you can trade manually or switch on the built-in analysis engine that
              scans the markets around the clock. Designed for Australian traders, with no prior
              experience required.
            </p>
          </div>
        </div>
      </section>

      {/* The three-step walkthrough */}
      <HowItWorks />

      {/* Common questions */}
      <Faq />

      {/* Closing CTA with registration form */}
      <FinalCta />
    </main>
  )
}
