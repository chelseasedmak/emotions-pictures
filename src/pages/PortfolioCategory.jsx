import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { getCategory } from '../data/portfolioCategories.js'
import arrow from '../assets/shared/arrow.svg'
import './PortfolioCategory.css'

export default function PortfolioCategory() {
  const { category } = useParams()
  const cat = getCategory(category)

  if (!cat) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h1 className="section-heading">Category not found</h1>
        <p className="body-copy" style={{ marginTop: '1rem' }}>
          <Link to="/portfolio">Back to Portfolio</Link>
        </p>
      </div>
    )
  }

  return (
    <>
      <PageHero
        image={cat.bannerImage}
        size="tall"
        align="center"
        showScroll
        dim={0.45}
        title={cat.label}
        description={<p>{cat.description}</p>}
        actions={[{ label: 'Book Your Session', to: '/booking', variant: 'solid' }]}
      />

      <section className="portfolio-category container">
        <div className="portfolio-category__head">
          <h2>Collections</h2>
          <p className="body-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        <div className="portfolio-category__grid">
          {cat.collections.map((c) => (
            <Link to={`/portfolio/${cat.slug}/${c.slug}`} key={c.slug} className="portfolio-category__card">
              <div className="portfolio-category__image">
                <img src={c.image} alt={c.label} loading="lazy" />
              </div>
              <span className="portfolio-category__label">
                <span>{c.label}</span>
                <img src={arrow} alt="" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
