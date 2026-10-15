import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/shared/logo-emotionz.webp'
import Button from './Button.jsx'
import './Header.css'

const NAV_LINKS = [
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Investment', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__row">
        <NavLink to="/" className="site-header__logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Emotion Pictures" />
        </NavLink>

        <nav className={`site-header__nav ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="site-header__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/booking" variant="solid" className="site-header__cta site-header__cta--mobile">
            Book Your Session
          </Button>
        </nav>

        <div className="site-header__actions">
          <Button to="/booking" variant="solid" className="site-header__cta">
            Book Your Session
          </Button>
          <button
            type="button"
            className={`site-header__menu-btn ${open ? 'is-open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
