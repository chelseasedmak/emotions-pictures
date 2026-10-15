import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
      <h1 className="section-heading">Page not found</h1>
      <p className="body-copy" style={{ marginTop: '1rem' }}>
        <Link to="/">Return home</Link>
      </p>
    </div>
  )
}
