import PageHero from '../components/PageHero.jsx'
import CategoryStrip from '../components/CategoryStrip.jsx'
import TextBand from '../components/TextBand.jsx'
import Testimonial from '../components/Testimonial.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import CtaBand from '../components/CtaBand.jsx'

import heroBg from '../assets/home/hero-bg.webp'
import categoryPortraits from '../assets/home/category-portraits.webp'
import categorySenior from '../assets/home/category-senior.webp'
import categorySports from '../assets/home/category-sports.webp'
import categoryConcerts from '../assets/home/category-concerts.webp'
import categoryFamily from '../assets/home/category-family.webp'

import gallery1 from '../assets/home/gallery-1.webp'
import gallery2 from '../assets/home/gallery-2.webp'
import gallery3 from '../assets/home/gallery-3.webp'
import gallery4 from '../assets/home/gallery-4.webp'
import gallery5 from '../assets/home/gallery-5.webp'
import gallery6 from '../assets/home/gallery-6.webp'
import gallery7 from '../assets/home/gallery-7.webp'
import gallery8 from '../assets/home/gallery-8.webp'

const CATEGORIES = [
  { label: 'Portraits', image: categoryPortraits, to: '/portfolio/portraits' },
  { label: 'Senior Portraits', image: categorySenior, to: '/portfolio/senior-portraits' },
  { label: 'Sports', image: categorySports, to: '/portfolio/sports' },
  { label: 'Concerts & Events', image: categoryConcerts, to: '/portfolio/concerts-events' },
  { label: 'Family & Lifestyle', image: categoryFamily, to: '/portfolio/family-lifestyle' },
]

const GALLERY = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8]

export default function Home() {
  return (
    <>
      <PageHero
        image={heroBg}
        size="tall"
        align="center"
        showScroll
        title="Real Moments. Timeless Images."
        description={
          <>
            <p>Portrait, sports, senior, and event photography created to capture more than how the moment looked.</p>
            <p className="lead">We capture how it felt.</p>
          </>
        }
        actions={[
          { label: 'Book Your Session', to: '/booking', variant: 'solid' },
          { label: 'Explore the Portfolio', to: '/portfolio', variant: 'link' },
        ]}
      />

      <CategoryStrip categories={CATEGORIES} />

      <TextBand
        heading="About Emotion Pictures"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        actions={[
          { label: 'Book Your Session', to: '/booking', variant: 'solid' },
          { label: 'Read More', to: '/about', variant: 'link' },
        ]}
      />

      <Testimonial
        image={heroBg}
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        author="Claudia Reese"
      />

      <GalleryGrid images={GALLERY} />

      <CtaBand />
    </>
  )
}
