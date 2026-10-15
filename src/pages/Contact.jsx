import { useState } from 'react'
import contactHero from '../assets/contact/contact-hero.webp'
import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'
import './Contact.css'

const PHOTOGRAPHY_TYPES = [
  'Portraits',
  'Senior Portraits',
  'Sports Coverage',
  'Concerts & Events',
  'Family & Lifestyle',
]

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  photographyType: '',
  date: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact inquiry submitted:', form)
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero__media">
          <img src={contactHero} alt="Wedding party smiling together in the sun" />
        </div>
        <div className="contact-hero__scrim" />

        <div className="container contact-hero__content">
          <h1 className="contact-hero__title">Let&rsquo;s Get in Touch</h1>
          <div className="contact-hero__row">
            <p className="contact-hero__subcopy">
              Have a vision or inquiry? Drop a message below or jump straight to booking
            </p>
            <Button to="/booking" variant="solid">Book Your Session</Button>
          </div>
          <span className="contact-hero__divider" />

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__row">
              <label className="contact-form__field">
                <span className="visually-hidden">First Name</span>
                <input
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={updateField('firstName')}
                  required
                />
              </label>
              <label className="contact-form__field">
                <span className="visually-hidden">Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={updateField('lastName')}
                  required
                />
              </label>
            </div>

            <div className="contact-form__row">
              <label className="contact-form__field">
                <span className="visually-hidden">Email Address</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={updateField('email')}
                  required
                />
              </label>
              <label className="contact-form__field">
                <span className="visually-hidden">Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={updateField('phone')}
                />
              </label>
            </div>

            <label className="contact-form__field contact-form__field--full contact-form__field--select">
              <span className="visually-hidden">Select Photography Type</span>
              <select
                name="photographyType"
                value={form.photographyType}
                onChange={updateField('photographyType')}
                required
              >
                <option value="" disabled>
                  Select Photography Type
                </option>
                {PHOTOGRAPHY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <span className="contact-form__caret" aria-hidden="true">&darr;</span>
            </label>

            <label className="contact-form__field contact-form__field--full contact-form__field--select">
              <span className="visually-hidden">Desired Date / Timeline</span>
              <input
                type="text"
                name="date"
                placeholder="Desired Date / Timeline"
                value={form.date}
                onChange={updateField('date')}
              />
              <span className="contact-form__caret" aria-hidden="true">&darr;</span>
            </label>

            <label className="contact-form__field contact-form__field--full contact-form__field--textarea">
              <span className="visually-hidden">Message / Project Details</span>
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={updateField('message')}
                placeholder="Message / Project Details"
              />
            </label>

            {submitted && (
              <p className="contact-form__status" role="status">
                Thank you — your inquiry has been sent. We&rsquo;ll be in touch soon.
              </p>
            )}

            <div className="contact-form__actions">
              <Button to="/booking" variant="solid">Book Your Session</Button>
              <Button type="submit" variant="solid">Send Inquiry</Button>
            </div>
          </form>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
