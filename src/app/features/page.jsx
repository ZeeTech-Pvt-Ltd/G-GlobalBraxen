import Benefits from '../../sections/Benefits'
import Security from '../../sections/Security'
import Stats from '../../sections/Stats'
import RoiCalculator from '../../sections/RoiCalculator'
import FinalCta from '../../sections/FinalCta'
import { pageMeta } from '../../lib/meta'

export const metadata = pageMeta(
  'Features - G-GlobalBraxen Trading Platform',
  'Explore G-GlobalBraxen features - AI-powered analysis, automated trading, bank-grade security and 24/7 access for Australians.',
  '/features',
)

export default function Features() {
  return (
    <main>
      {/* Hero header, modeled on the How It Works page hero */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <span className="cta-final__ghost" aria-hidden="true">
          FX
        </span>
        <div className="container hero__inner" data-reveal style={{ paddingBlock: 'clamp(40px, 5vw, 72px)', gridTemplateColumns: '1fr' }}>
          <div style={{ maxWidth: 860 }}>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              Features
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>
              G-GlobalBraxen <span className="accent">Features</span>
            </h1>
            <p className="hero__sub">
              Everything you need to trade with confidence, in one platform - AI-powered market
              analysis, automated trade management, bank-grade security and round-the-clock access
              to more than 65 currencies.
            </p>
          </div>
        </div>
      </section>

      {/* Platform benefits - icon cards */}
      <Benefits />

      {/* Security features */}
      <Security />

      {/* Platform numbers */}
      <Stats />

      {/* ROI calculator */}
      <RoiCalculator />

      {/* Closing CTA with registration form */}
      <FinalCta />
    </main>
  )
}
