import { Link } from 'react-router-dom'
import arrow from '../assets/shared/arrow.svg'
import './Button.css'

export default function Button({
  children,
  to,
  href,
  variant = 'solid',
  className = '',
  onClick,
  type = 'button',
}) {
  const content = (
    <>
      <span>{children}</span>
      <img src={arrow} alt="" className="btn-arrow" />
    </>
  )

  const classes = `btn btn--${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
