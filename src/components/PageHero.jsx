import Button from './Button.jsx'
import './PageHero.css'

export default function PageHero({
  image,
  imageAlt = '',
  size = 'tall',
  align = 'center',
  title,
  description,
  actions = [],
  showScroll = false,
  dim = 0.55,
  children,
}) {
  return (
    <section className={`page-hero page-hero--${size} page-hero--${align}`}>
      <div className="page-hero__media">
        <img src={image} alt={imageAlt} style={{ opacity: dim }} />
      </div>
      <div className="page-hero__scrim" />

      <div className="container page-hero__content">
        {title && <h1 className="page-hero__title">{title}</h1>}
        {description && <div className="page-hero__description">{description}</div>}
        {actions.length > 0 && (
          <div className="page-hero__actions">
            {actions.map((action) => (
              <Button key={action.label} to={action.to} href={action.href} variant={action.variant ?? 'link'}>
                {action.label}
              </Button>
            ))}
          </div>
        )}
        {children}
      </div>

      {showScroll && (
        <div className="page-hero__scroll">
          <span className="page-hero__scroll-line" />
          <span>Scroll</span>
        </div>
      )}
    </section>
  )
}
