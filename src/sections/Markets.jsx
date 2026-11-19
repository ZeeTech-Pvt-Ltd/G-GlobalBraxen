import Icon from '../components/Icon'
import { MARKETS } from '../data/content'

export default function Markets() {
  return (
    <section className="section section--tight" id="markets">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Markets</h2>
        </div>

        <div className="markets-grid" data-reveal-grid>
          {MARKETS.map(({ title, icon, text }) => (
            <div className="feature" data-reveal key={title}>
              <div className="feature__icon">
                <Icon name={icon} size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
