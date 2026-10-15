import Button from './Button.jsx'
import './TextBand.css'

export default function TextBand({ heading, body, actions = [] }) {
  return (
    <section className="text-band container">
      <div className="text-band__col">
        <h2 className="text-band__heading">{heading}</h2>
        <p className="text-band__body body-copy">{body}</p>
        {actions.length > 0 && (
          <div className="text-band__actions">
            {actions.map((action) => (
              <Button key={action.label} to={action.to} href={action.href} variant={action.variant ?? 'link'}>
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      <span className="text-band__divider" aria-hidden="true" />
    </section>
  )
}
