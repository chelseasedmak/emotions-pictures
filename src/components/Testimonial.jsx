import './Testimonial.css'

export default function Testimonial({ image, quote, author }) {
  return (
    <section className="testimonial">
      <div className="testimonial__media">
        <img src={image} alt="" style={{ opacity: 0.6 }} />
      </div>
      <div className="testimonial__scrim" />
      <div className="container testimonial__content">
        <span className="testimonial__mark" aria-hidden="true">&ldquo;</span>
        <p className="testimonial__quote">{quote}</p>
        <div className="testimonial__author">
          <span>{author}</span>
          <span className="testimonial__stars" aria-label="5 star rating">
            &#9733; &#9733; &#9733; &#9733; &#9733;
          </span>
        </div>
      </div>
    </section>
  )
}
