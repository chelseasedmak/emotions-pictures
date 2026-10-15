import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import arrow from '../assets/shared/arrow.svg'
import './CollectionRow.css'

export default function CollectionRow({ heading, description, viewAllTo, cards }) {
  return (
    <section className="collection-row">
      <div className="container collection-row__head">
        <div>
          <h2 className="collection-row__heading">{heading}</h2>
          {description && <p className="collection-row__description">{description}</p>}
        </div>
        {viewAllTo && (
          <Button to={viewAllTo} variant="link" className="collection-row__view-all">
            View All
          </Button>
        )}
      </div>

      <div className="container collection-row__cards">
        {cards.map((card) => (
          <Link to={card.to} key={card.label} className="collection-row__card">
            <div className="collection-row__image">
              <img src={card.image} alt={card.label} loading="lazy" />
            </div>
            <span className="collection-row__label">
              <span>{card.label}</span>
              <img src={arrow} alt="" aria-hidden className="collection-row__arrow" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
