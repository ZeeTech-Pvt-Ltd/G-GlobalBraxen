import { useEffect, useRef, useState } from 'react'

// Mirrors the live site's ROI calculator (g-globalbraxen.com/assets/js/calc.js):
// profit = ceil(amount x (1 + rate)^days), rate = 5% daily compound.
const RATE = 0.05
const MIN_AMOUNT = 250
const MAX_AMOUNT = 100000
const MIN_DAYS = 1
const MAX_DAYS = 100

const formatUsd = (n) => `$${n.toLocaleString('en-AU')}`

export default function RoiCalculator() {
  const [amount, setAmount] = useState('250')
  const [days, setDays] = useState(50)
  const [showCta, setShowCta] = useState(false)
  const ctaTimer = useRef(null)

  const parsed = Number(amount)
  const clamped = Number.isFinite(parsed)
    ? Math.min(MAX_AMOUNT, Math.max(MIN_AMOUNT, parsed))
    : MIN_AMOUNT
  const profit = Math.ceil(clamped * Math.pow(1 + RATE, days))

  const handleFirstInteraction = () => {
    if (showCta) return
    clearTimeout(ctaTimer.current)
    ctaTimer.current = setTimeout(() => setShowCta(true), 2500)
  }

  useEffect(() => () => clearTimeout(ctaTimer.current), [])

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Estimate your returns</span>
          <h2>Calculator ROI</h2>
          <p>Adjust the amount and term to see your potential profit.</p>
        </div>

        <div className="roi-calc__panel" data-reveal>
          <div className="roi-calc__fields">
            <div className="roi-calc__field">
              <label className="roi-calc__label" htmlFor="roi-amount">
                Investment Amount
              </label>
              <div className="roi-calc__input">
                <input
                  id="roi-amount"
                  type="number"
                  value={amount}
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  onChange={(e) => {
                    setAmount(e.target.value)
                    handleFirstInteraction()
                  }}
                  onBlur={() => setAmount(String(clamped))}
                  aria-label="Enter amount"
                />
                <span className="roi-calc__symbol" aria-hidden="true">
                  $
                </span>
              </div>
            </div>

            <div className="roi-calc__field">
              <label className="roi-calc__label" htmlFor="roi-days">
                {days} days
              </label>
              <input
                id="roi-days"
                className="roi-calc__range"
                type="range"
                value={days}
                min={MIN_DAYS}
                max={MAX_DAYS}
                onChange={(e) => {
                  setDays(Number(e.target.value))
                  handleFirstInteraction()
                }}
                aria-label="Choose number of days"
              />
            </div>
          </div>

          <div className="roi-calc__result">
            <p className="roi-calc__result-label">Your Profit</p>
            <div className="roi-calc__result-value">{formatUsd(profit)}</div>
            {showCta && (
              <a className="btn btn--lime btn--block" href="#register">
                Start with {formatUsd(clamped)}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
