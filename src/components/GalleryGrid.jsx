import './GalleryGrid.css'

export default function GalleryGrid({ images }) {
  return (
    <section className="gallery-grid">
      {images.map((src, i) => (
        <div className="gallery-grid__item" key={i}>
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </section>
  )
}
