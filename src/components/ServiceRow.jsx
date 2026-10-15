import Button from './Button.jsx'
import './ServiceRow.css'

export default function ServiceRow({
  kicker,
  title,
  description,
  viewPortfolioTo,
  image,
  ctaLabel,
  reverse = false,
}) {
  return (
    <section className={`service-row container ${reverse ? 'is-reverse' : ''}`}>
      <div className="service-row__text">
        {kicker && <p className="service-row__kicker eyebrow">{kicker}</p>}
        <h2 className="service-row__title">{title}</h2>
        <p className="service-row__description body-copy">{description}</p>
        <div className="service-row__links">
          {viewPortfolioTo && (
            <Button to={viewPortfolioTo} variant="link">
              View Portfolio
            </Button>
          )}
          {ctaLabel && (
            <Button to="/booking" variant="solid">
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
      {image && (
        <div className="service-row__media">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
    </section>
  )
}
