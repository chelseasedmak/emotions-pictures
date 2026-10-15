import PageHero from '../components/PageHero.jsx'
import CollectionRow from '../components/CollectionRow.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { PORTFOLIO_CATEGORIES } from '../data/portfolioCategories.js'
import heroBg from '../assets/portfolio/hero-bg.webp'

export default function Portfolio() {
  return (
    <>
      <PageHero
        image={heroBg}
        size="tall"
        align="center"
        showScroll
        dim={0.45}
        title="Portfolio"
        description={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
        }
        actions={[{ label: 'Book Your Session', to: '/booking', variant: 'solid' }]}
      />

      {PORTFOLIO_CATEGORIES.map((cat) => (
        <CollectionRow
          key={cat.slug}
          heading={cat.label}
          description={cat.description}
          viewAllTo={`/portfolio/${cat.slug}`}
          cards={cat.collections.map((c) => ({
            label: c.label,
            image: c.image,
            to: `/portfolio/${cat.slug}/${c.slug}`,
          }))}
        />
      ))}

      <CtaBand />
    </>
  )
}
