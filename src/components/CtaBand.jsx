import heroBg from '../assets/home/hero-bg.webp'
import PageHero from './PageHero.jsx'

export default function CtaBand({
  title = 'Ready to capture your moment?',
  description = 'Every session is intentionally crafted around your personality, vision, and unique style. Let’s create images that feel as good as the moment did.',
  actionLabel = 'Book Your Session',
  actionTo = '/booking',
}) {
  return (
    <PageHero
      image={heroBg}
      size="short"
      align="top"
      dim={0.3}
      title={title}
      description={<p>{description}</p>}
      actions={[{ label: actionLabel, to: actionTo, variant: 'solid' }]}
    />
  )
}
