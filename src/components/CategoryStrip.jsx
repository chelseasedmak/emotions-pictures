import { Link } from 'react-router-dom'
import './CategoryStrip.css'

export default function CategoryStrip({ categories }) {
  return (
    <section className="category-strip">
      {categories.map((cat, i) => (
        <Link
          to={cat.to}
          key={cat.label}
          className={`category-strip__item ${i === 0 ? 'is-featured' : ''}`}
          style={{ backgroundImage: `url(${cat.image})` }}
        >
          <span className="category-strip__scrim" />
          {i === 0 ? (
            <span className="category-strip__featured-copy">
              <span className="category-strip__title">{cat.label}</span>
              <span className="category-strip__desc">
                Natural, confident, and intentionally created around your personality.
              </span>
              <span className="category-strip__view">View More</span>
            </span>
          ) : (
            <span className="category-strip__vertical">{cat.label}</span>
          )}
        </Link>
      ))}
    </section>
  )
}
