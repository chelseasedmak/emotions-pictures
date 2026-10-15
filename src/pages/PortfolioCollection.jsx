import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { getCategory } from '../data/portfolioCategories.js'
import heroBg from '../assets/portfolio-collection/hero-bg.webp'
import photo06 from '../assets/portfolio-collection/photo-06-tall.webp'
import photo07 from '../assets/portfolio-collection/photo-07-short.webp'
import photo08 from '../assets/portfolio-collection/photo-08-tall.webp'
import photo09 from '../assets/portfolio-collection/photo-09-tall.webp'
import photo10 from '../assets/portfolio-collection/photo-10-short.webp'
import photo11 from '../assets/portfolio-collection/photo-11-tall.webp'
import photo12 from '../assets/portfolio-collection/photo-12-square.webp'
import photo13 from '../assets/portfolio-collection/photo-13-short.webp'
import photo14 from '../assets/portfolio-collection/photo-14-short.webp'
import photo15 from '../assets/portfolio-collection/photo-15-short.webp'
import photo16 from '../assets/portfolio-collection/photo-16-tall.webp'
import photo19 from '../assets/portfolio-collection/photo-19-tall.webp'
import photo20 from '../assets/portfolio-collection/photo-20-short.webp'
import photo21 from '../assets/portfolio-collection/photo-21-short.webp'
import './PortfolioCollection.css'

const COLUMNS = [
  [photo06, photo09, photo12, photo19],
  [photo07, photo08, photo10, photo20, photo16],
  [photo13, photo14, photo11, photo15, photo21],
]

function titleCase(slug = '') {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export default function PortfolioCollection() {
  const { category, collection } = useParams()
  const cat = getCategory(category)
  const collectionEntry = cat?.collections.find((c) => c.slug === collection)
  const title = collectionEntry?.label ?? titleCase(collection)

  if (!cat) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h1 className="section-heading">Collection not found</h1>
        <p className="body-copy" style={{ marginTop: '1rem' }}>
          <Link to="/portfolio">Back to Portfolio</Link>
        </p>
      </div>
    )
  }

  return (
    <>
      <PageHero
        image={heroBg}
        size="short"
        align="top"
        dim={0.2}
        title={title}
        description={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        }
        actions={[{ label: 'Book Your Session', to: '/booking', variant: 'solid' }]}
      />

      <section className="collection-grid container">
        {COLUMNS.map((col, i) => (
          <div className="collection-grid__column" key={i}>
            {col.map((src, j) => (
              <div className="collection-grid__item" key={j}>
                <img src={src} alt={`${title} photo ${i}-${j}`} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </section>

      <CtaBand />
    </>
  )
}
