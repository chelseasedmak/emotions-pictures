import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import aboutHero from '../assets/about/about-hero.webp'
import './About.css'

export default function About() {
  return (
    <>
      <div className="about-hero">
        <PageHero
          image={aboutHero}
          imageAlt="Family laughing together during a portrait session"
          size="short"
          align="top"
          dim={0.5}
          title={
            <>
              Photography With Emotion
              <br />
              Behind Every Frame.
            </>
          }
          description={
            <p>
              At Emotion Pictures, photography is about more than just capturing how a moment looked, it&rsquo;s
              about capturing how it felt. Whether it&rsquo;s the high-octane energy of a athletic event, the quiet
              confidence of a portrait session, or the candid laughter of family, our goal is to create authentic,
              visually striking images that stand the test of time.
              <br />
              <br />
              No stiff, awkward poses or generic, corporate templates. Every session is intentionally crafted around
              your personality, vision, and unique style. We focus on natural interactions and real moments to
              deliver a sophisticated, cinematic experience from start to finish.
            </p>
          }
          actions={[{ label: 'Book Your Session', to: '/booking', variant: 'solid' }]}
        />
      </div>

      <CtaBand />
    </>
  )
}
