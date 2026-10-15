import { NavLink } from 'react-router-dom'
import logo from '../assets/shared/logo-emotionz.webp'
import mark from '../assets/shared/footer-logo.svg'
import './Footer.css'

const NAV_LINKS = [
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Investment', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <img src={logo} alt="Emotion Pictures" className="site-footer__logo" />
        <nav className="site-footer__nav">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} to={link.to} className="site-footer__link">
              {link.label}
            </NavLink>
          ))}
        </nav>
        <img src={mark} alt="" className="site-footer__mark" />
      </div>
    </footer>
  )
}
