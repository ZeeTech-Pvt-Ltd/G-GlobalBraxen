import { pageMeta } from '../lib/meta'
import Hero from '../sections/Hero'
import RoiCalculator from '../sections/RoiCalculator'
import Stats from '../sections/Stats'
import TrustUs from '../sections/TrustUs'
import ReviewsBand from '../sections/ReviewsBand'
import About from '../sections/About'
import Benefits from '../sections/Benefits'
import Security from '../sections/Security'
import HowItWorks from '../sections/HowItWorks'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/Faq'
import FinalCta from '../sections/FinalCta'

export const metadata = pageMeta(
  'G-GlobalBraxen - Official Crypto Trading Platform Australia',
  "G-GlobalBraxen - Australia's online trading platform. Trade crypto, forex, equities and more with AI-powered analysis and 24/7 access.",
  '/',
)

export default function Home() {
  return (
    <>
      <Hero />
      <RoiCalculator />
      <Stats />
      <HowItWorks />
      <About />
      <Benefits />
      <ReviewsBand />
      <TrustUs />
      <Testimonials />
      <Security />
      <Faq />
      <FinalCta />
    </>
  )
}
