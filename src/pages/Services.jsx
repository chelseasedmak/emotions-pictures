import PageHero from '../components/PageHero.jsx'
import ServiceRow from '../components/ServiceRow.jsx'
import CtaBand from '../components/CtaBand.jsx'

import heroBg from '../assets/services/hero-bg.webp'
import servicePortraits from '../assets/services/service-portraits.webp'
import serviceSenior from '../assets/services/service-senior.webp'
import serviceSports from '../assets/services/service-sports.webp'
import serviceConcerts from '../assets/services/service-concerts.webp'
import serviceFamily from '../assets/services/service-family.webp'
import serviceCustom from '../assets/services/service-custom.webp'

const SERVICES = [
  {
    kicker: '60 min session • 15 edited images • On-location or studio',
    title: 'Portrait Sessions',
    description:
      'Portraits That Feel Like You. Natural, confident, and intentionally created around your personality. Ideal for personal branding, creative headshots, and individual portraiture.',
    viewPortfolioTo: '/portfolio/portraits',
    image: servicePortraits,
    ctaLabel: 'Book Portrait Session',
  },
  {
    kicker: '90 min session • 25 edited images • Multiple outfit changes',
    title: 'Senior Portraits',
    description:
      'Your Senior Year. Your Story. Your Moment. Modern senior photography designed to capture personality, confidence, style, and individuality with an editorial edge.',
    viewPortfolioTo: '/portfolio/senior-portraits',
    image: serviceSenior,
    ctaLabel: 'Book Senior Session',
  },
  {
    kicker: 'Event-based duration • Full gallery deliverable • Action & sideline coverage',
    title: 'Sports Coverage',
    description:
      'Intensity. Emotion. Competition. Powerful sports photography capturing athletes, competition, emotion, movement, and the high-energy moments surrounding the action.',
    viewPortfolioTo: '/portfolio/sports',
    image: serviceSports,
    ctaLabel: 'Inquire for Sports',
  },
  {
    kicker: 'Hourly rates • High-res digital download • Fast event turnaround',
    title: 'Concerts & Events',
    description:
      'Experience the Moment Again. Dynamic photography capturing the atmosphere, energy, people, and unforgettable live moments of performances and special events.',
    viewPortfolioTo: '/portfolio/concerts-events',
    image: serviceConcerts,
    ctaLabel: 'Inquire for Events',
  },
  {
    kicker: '60 min session • 20 edited images • On-location lifestyle',
    title: 'Family & Lifestyle',
    description:
      'The Moments Between the Poses. Authentic images centered around connection, personality, relationships, and genuine interaction, no stiff or forced poses.',
    viewPortfolioTo: '/portfolio/family-lifestyle',
    image: serviceFamily,
    ctaLabel: 'Book Your Session',
  },
  {
    kicker: 'Bespoke quotes • Flexible hours • Full commercial/creative rights',
    title: 'Custom Projects',
    description: 'Special concepts, travel, tailored production.',
    viewPortfolioTo: '/portfolio',
    image: serviceCustom,
    ctaLabel: "Let's Collaborate",
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        image={heroBg}
        size="tall"
        align="center"
        showScroll
        dim={0.3}
        title="Services & Investment"
        description={
          <p>
            An Investment in Real Moments. Transparent packages tailored to your vision. Every session is designed
            to deliver timeless, high-end imagery.
          </p>
        }
        actions={[{ label: 'Book Your Session', to: '/booking', variant: 'solid' }]}
      />

      {SERVICES.map((service, i) => (
        <ServiceRow key={service.title} {...service} reverse={i % 2 === 1} />
      ))}

      <CtaBand />
    </>
  )
}
