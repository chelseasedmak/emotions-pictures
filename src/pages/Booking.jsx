import { useState } from 'react'
import heroBg from '../assets/booking/hero-bg.webp'
import Button from '../components/Button.jsx'
import categoryPortraits from '../assets/home/category-portraits.webp'
import categorySenior from '../assets/home/category-senior.webp'
import categorySports from '../assets/home/category-sports.webp'
import categoryConcerts from '../assets/home/category-concerts.webp'
import categoryFamily from '../assets/home/category-family.webp'
import './Booking.css'

const EXPERIENCES = [
  { label: 'Portraits', image: categoryPortraits },
  { label: 'Senior Portraits', image: categorySenior },
  { label: 'Sports Coverage', image: categorySports },
  { label: 'Concerts & Events', image: categoryConcerts },
  { label: 'Family & Lifestyle', image: categoryFamily },
]

// The Figma file only specifies 5 generic "Option" placeholder tiles for this
// section — package-tier names and blurbs below are invented to make the
// step functional (see report for details).
const PACKAGES = [
  { label: 'Essential', blurb: '1 hour · digital gallery' },
  { label: 'Signature', blurb: '2 hours · edited highlights' },
  { label: 'Premium', blurb: 'Half day · full gallery + album' },
  { label: 'Deluxe', blurb: 'Full day · multiple locations' },
  { label: 'Custom', blurb: 'Tell us what you need' },
]

const DATES = ['Thu, Nov 6', 'Fri, Nov 7', 'Sat, Nov 8', 'Sun, Nov 9', 'Mon, Nov 10', 'Tue, Nov 11']
const TIMES = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM']

const ADDONS = [
  'Extra Hour of Coverage',
  'Printed Keepsake Album',
  'Second Shooter',
  'Rush Editing (48-Hour Turnaround)',
  'Drone Aerial Shots',
]

const STEP_LABELS = ['One', 'Two', 'Three', 'Four']

export default function Booking() {
  const [step, setStep] = useState(1)
  const [experience, setExperience] = useState(null)
  const [pkg, setPkg] = useState(null)
  const [location, setLocation] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [contact, setContact] = useState({ name: '', email: '' })
  const [addons, setAddons] = useState([])
  const [confirmed, setConfirmed] = useState(false)

  const canContinueStep1 = Boolean(experience && pkg)
  const canContinueStep2 = Boolean(date && time)
  const canContinueStep3 = Boolean(contact.name && contact.email)

  const goNext = () => setStep((s) => Math.min(s + 1, 4))
  const goBack = () => setStep((s) => Math.max(s - 1, 1))

  const toggleAddon = (label) => {
    setAddons((prev) => (prev.includes(label) ? prev.filter((a) => a !== label) : [...prev, label]))
  }

  return (
    <section className="booking">
      <div className="booking__media">
        <img src={heroBg} alt="" style={{ opacity: 0.2 }} />
      </div>
      <div className="booking__scrim" />

      <div className="container booking__content">
        <h1 className="booking__title">Book Your Session</h1>
        <p className="booking__subcopy">
          Reserve your date in a few simple steps. Select your photography type, pick an available time, and lock
          in your session.
        </p>

        <div className="booking__progress">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`booking__progress-seg ${i < step ? 'is-done' : ''}`} />
          ))}
        </div>
        <p className="booking__step-label">
          {confirmed ? 'Booking Confirmed' : `Step ${STEP_LABELS[step - 1]} of Four`}
        </p>

        {confirmed ? (
          <div className="booking__confirmation">
            <h2>Thank you, {contact.name.split(' ')[0] || 'friend'}.</h2>
            <p className="body-copy">
              Your session request has been received. We&rsquo;ll follow up at {contact.email} within 1&ndash;2
              business days to finalize the details.
            </p>
            <Button to="/" variant="link">Return Home</Button>
          </div>
        ) : (
          <>
            {step === 1 && (
              <div className="booking__step">
                <h2 className="booking__step-heading">Choose Your Experience</h2>
                <div className="booking__type-grid">
                  {EXPERIENCES.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={`booking__type-tile ${experience === item.label ? 'is-selected' : ''}`}
                      style={{ backgroundImage: `url(${item.image})` }}
                      onClick={() => setExperience(item.label)}
                    >
                      <span className="booking__type-scrim" />
                      <span className="booking__type-label">{item.label}</span>
                    </button>
                  ))}
                </div>

                <h2 className="booking__step-heading">Package / Option Selection</h2>
                <div className="booking__package-grid">
                  {PACKAGES.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={`booking__package-tile ${pkg === item.label ? 'is-selected' : ''}`}
                      onClick={() => setPkg(item.label)}
                    >
                      <span className="booking__package-name">{item.label}</span>
                      <span className="booking__package-blurb">{item.blurb}</span>
                    </button>
                  ))}
                </div>

                <div className="booking__field-row">
                  <label className="booking__field">
                    <span>Location / Venue</span>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, studio, or venue name"
                    />
                  </label>
                  <label className="booking__field">
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 555-5555"
                    />
                  </label>
                </div>

                <div className="booking__actions">
                  <Button variant="solid" onClick={goNext} type="button" className={canContinueStep1 ? '' : 'is-disabled'}>
                    CONTINUE
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="booking__step">
                <h2 className="booking__step-heading">Pick an Available Date</h2>
                <div className="booking__pill-grid">
                  {DATES.map((d) => (
                    <button
                      key={d}
                      type="button"
                      className={`booking__pill ${date === d ? 'is-selected' : ''}`}
                      onClick={() => setDate(d)}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <h2 className="booking__step-heading">Pick a Time</h2>
                <div className="booking__pill-grid">
                  {TIMES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`booking__pill ${time === t ? 'is-selected' : ''}`}
                      onClick={() => setTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="booking__actions">
                  <Button variant="link" onClick={goBack} type="button">Back</Button>
                  <Button variant="solid" onClick={goNext} type="button" className={canContinueStep2 ? '' : 'is-disabled'}>
                    CONTINUE
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="booking__step">
                <h2 className="booking__step-heading">Your Details So Far</h2>
                <dl className="booking__recap">
                  <div><dt>Experience</dt><dd>{experience || '—'}</dd></div>
                  <div><dt>Package</dt><dd>{pkg || '—'}</dd></div>
                  <div><dt>Location</dt><dd>{location || '—'}</dd></div>
                  <div><dt>Phone</dt><dd>{phone || '—'}</dd></div>
                </dl>

                <h2 className="booking__step-heading">Contact Details</h2>
                <div className="booking__field-row">
                  <label className="booking__field">
                    <span>Full Name</span>
                    <input
                      type="text"
                      value={contact.name}
                      onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                    />
                  </label>
                  <label className="booking__field">
                    <span>Email Address</span>
                    <input
                      type="email"
                      value={contact.email}
                      onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                    />
                  </label>
                </div>

                <h2 className="booking__step-heading">Optional Add-Ons</h2>
                <div className="booking__addon-grid">
                  {ADDONS.map((label) => (
                    <button
                      key={label}
                      type="button"
                      className={`booking__addon ${addons.includes(label) ? 'is-selected' : ''}`}
                      onClick={() => toggleAddon(label)}
                    >
                      <span className="booking__addon-check" aria-hidden="true" />
                      {label}
                    </button>
                  ))}
                </div>

                <div className="booking__actions">
                  <Button variant="link" onClick={goBack} type="button">Back</Button>
                  <Button variant="solid" onClick={goNext} type="button" className={canContinueStep3 ? '' : 'is-disabled'}>
                    CONTINUE
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="booking__step">
                <h2 className="booking__step-heading">Review &amp; Confirm</h2>
                <dl className="booking__summary">
                  <div><dt>Experience</dt><dd>{experience || '—'}</dd></div>
                  <div><dt>Package</dt><dd>{pkg || '—'}</dd></div>
                  <div><dt>Location</dt><dd>{location || '—'}</dd></div>
                  <div><dt>Phone</dt><dd>{phone || '—'}</dd></div>
                  <div><dt>Date</dt><dd>{date || '—'}</dd></div>
                  <div><dt>Time</dt><dd>{time || '—'}</dd></div>
                  <div><dt>Name</dt><dd>{contact.name || '—'}</dd></div>
                  <div><dt>Email</dt><dd>{contact.email || '—'}</dd></div>
                  <div><dt>Add-Ons</dt><dd>{addons.length ? addons.join(', ') : 'None'}</dd></div>
                </dl>

                <div className="booking__actions">
                  <Button variant="link" onClick={goBack} type="button">Back</Button>
                  <Button variant="solid" onClick={() => setConfirmed(true)} type="button">
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
