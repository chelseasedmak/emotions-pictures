import categoryPortraits from '../assets/home/category-portraits.webp'
import categorySenior from '../assets/home/category-senior.webp'
import categorySports from '../assets/home/category-sports.webp'
import categoryConcerts from '../assets/home/category-concerts.webp'
import categoryFamily from '../assets/home/category-family.webp'

import portraits1 from '../assets/portfolio/portraits-1.webp'
import portraits2 from '../assets/portfolio/portraits-2.webp'
import portraits3 from '../assets/portfolio/portraits-3.webp'
import portraits4 from '../assets/portfolio/portraits-4.webp'

import senior1 from '../assets/portfolio/senior-1.webp'
import senior2 from '../assets/portfolio/senior-2.webp'
import senior3 from '../assets/portfolio/senior-3.webp'
import senior4 from '../assets/portfolio/senior-4.webp'

import sports1 from '../assets/portfolio/sports-1.webp'
import sports2 from '../assets/portfolio/sports-2.webp'
import sports3 from '../assets/portfolio/sports-3.webp'
import sports4 from '../assets/portfolio/sports-4.webp'

import concerts1 from '../assets/portfolio/concerts-1.webp'
import concerts2 from '../assets/portfolio/concerts-2.webp'
import concerts3 from '../assets/portfolio/concerts-3.webp'
import concerts4 from '../assets/portfolio/concerts-4.webp'

import family1 from '../assets/portfolio/family-1.webp'
import family2 from '../assets/portfolio/family-2.webp'
import family3 from '../assets/portfolio/family-3.webp'
import family4 from '../assets/portfolio/family-4.webp'

export const PORTFOLIO_CATEGORIES = [
  {
    slug: 'portraits',
    label: 'Portraits',
    bannerImage: categoryPortraits,
    description: 'Natural, confident, and intentionally created around your personality.',
    collections: [
      { slug: 'hundred-rack-cigarillo', label: 'Hundred Rack Cigarillo', image: portraits1 },
      { slug: 'floral-collection', label: 'Floral Collection', image: portraits2 },
      { slug: 'stupid-jewelry-stupid-guaps', label: 'Stupid Jewelry Stupid Guaps', image: portraits3 },
      { slug: 'classic-collection', label: 'Classic Collection', image: portraits4 },
    ],
  },
  {
    slug: 'senior-portraits',
    label: 'Senior Portraits',
    bannerImage: categorySenior,
    description: 'Natural, confident, and intentionally created around your personality.',
    collections: [
      { slug: 'jesco-white-2025', label: 'Jesco White 2025', image: senior1 },
      { slug: 'sue-bob-2026', label: 'Sue Bob 2026', image: senior2 },
      { slug: 'bertie-mae-white-2024', label: 'Bertie Mae White 2024', image: senior3 },
      { slug: 'kirk-white-2026', label: 'Kirk White 2026', image: senior4 },
    ],
  },
  {
    slug: 'sports',
    label: 'Sports',
    bannerImage: categorySports,
    description: 'Natural, confident, and intentionally created around your personality.',
    collections: [
      { slug: 'basketball-collection', label: 'Basketball Collection', image: sports1 },
      { slug: 'tennis-collection', label: 'Tennis Collection', image: sports2 },
      { slug: 'golf-collection', label: 'Golf Collection', image: sports3 },
      { slug: 'skateboard-collection', label: 'Skateboard Collection', image: sports4 },
    ],
  },
  {
    slug: 'concerts-events',
    label: 'Concerts & Events',
    bannerImage: categoryConcerts,
    description: 'Natural, confident, and intentionally created around your personality.',
    collections: [
      { slug: 'outdoor-concerts', label: 'Outdoor Concerts', image: concerts1 },
      { slug: 'indoor-concerts', label: 'Indoor Concerts', image: concerts2 },
      { slug: 'general-events', label: 'General Events', image: concerts3 },
      { slug: 'wedding-collection', label: 'Wedding Collection', image: concerts4 },
    ],
  },
  {
    slug: 'family-lifestyle',
    label: 'Family & Lifestyle',
    bannerImage: categoryFamily,
    description: 'Natural, confident, and intentionally created around your personality.',
    collections: [
      { slug: 'lifestyle-collection', label: 'Lifestyle Collection', image: family1 },
      { slug: 'children-collection', label: 'Children Collection', image: family2 },
      { slug: 'family-collection', label: 'Family Collection', image: family3 },
      { slug: 'pet-collection', label: 'Pet Collection', image: family4 },
    ],
  },
]

export function getCategory(slug) {
  return PORTFOLIO_CATEGORIES.find((c) => c.slug === slug)
}
