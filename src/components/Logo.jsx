import { Link } from 'react-router-dom'
import { BRAND } from '../data/content'

// dark = rendered on the light page background
export default function Logo({ dark = false }) {
  return (
    <Link to="/" className={`logo${dark ? ' logo--dark' : ''}`} aria-label={`${BRAND} home`}>
      <span className="logo__mark">
        <svg width="24" height="24" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="17" fill="#fdc700" />
          <path
            d="M24 32.5l6 5.5 11-13"
            fill="none"
            stroke="#432004"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {BRAND}
    </Link>
  )
}
