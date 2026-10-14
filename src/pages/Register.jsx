import { Link } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

export default function Register() {
  useMeta({
    title: 'Register - Create Your G-GlobalBraxen Account',
    canonical: `${SITE_URL}/register`,
    description:
      'Create your free G-GlobalBraxen account in minutes - name, email and phone number is all you need to start trading crypto, forex, equities and more.',
  })

  return (
    <main className="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <span className="eyebrow eyebrow--light">Get started</span>
          <h1>Register with G-GlobalBraxen</h1>
          <p className="contact__lede">
            Opening an account takes minutes - just your name, email and phone number. Once you
            are in, you get access to crypto, forex, equities and more, all from one dashboard.
          </p>

          <p className="contact__hint">
            Start with a minimum deposit of just 250 A$ and trade at your own pace. The platform
            is built for first-timers: clear guides, an AI-powered analysis engine, and a local
            support team ready to help. There is no registration fee.
          </p>

          <div className="contact__help">
            <span>Prefer to ask questions first?</span>
            <Link to="/faqs">Visit our FAQs</Link>
          </div>
        </div>

        <RegistrationForm
          idPrefix="register"
          title="Create your free account"
          subtitle="Fill in your details and start trading in minutes."
        />
      </div>
    </main>
  )
}
