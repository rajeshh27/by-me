import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'The LimePop soap is absolutely divine! My skin feels so fresh and clean after every wash. I love that it\'s completely natural — no harsh chemicals. The citrus fragrance lingers beautifully throughout the day.',
    rating: 5,
    product: 'LimePop',
  },
  {
    id: 2,
    name: 'Ananya Reddy',
    location: 'Bangalore',
    text: 'I gifted the By-Me basket to my mother and she was thrilled! The packaging is gorgeous and every soap smells incredible. This brand truly understands what "handcrafted with love" means.',
    rating: 5,
    product: 'Gift Basket',
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    location: 'Delhi',
    text: 'As someone with sensitive skin, finding the right soap was always a challenge. The Honey Lavender bar has been a game-changer — gentle, soothing, and leaves my skin feeling moisturized.',
    rating: 5,
    product: 'Honey Lavender',
  },
  {
    id: 4,
    name: 'Sneha Iyer',
    location: 'Chennai',
    text: 'The Charcoal Detox soap is perfect for my oily skin. It deep cleanses without stripping moisture. I\'ve been using it for 3 months now and my skin has never looked better!',
    rating: 5,
    product: 'Charcoal Detox',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Jaipur',
    text: 'Coffee Bliss is my morning essential now. The gentle exfoliation wakes up my skin and the aroma is heavenly. Truly a premium product at a fair price.',
    rating: 4,
    product: 'Coffee Bliss',
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="testimonials section" id="testimonials">
      <div className="testimonials__bg-pattern" />
      <div className="container">
        <div className="testimonials__header reveal">
          <span className="testimonials__label">Loved By Many</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real stories from real people who made the switch to natural, handcrafted skincare.
          </p>
        </div>

        <div className="testimonials__carousel reveal">
          <div className="testimonials__card">
            <div className="testimonials__quote-icon">
              <Quote size={32} />
            </div>

            <div className="testimonials__stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < testimonials[current].rating ? 'var(--clr-tan)' : 'none'}
                  color={i < testimonials[current].rating ? 'var(--clr-tan)' : 'var(--clr-border)'}
                />
              ))}
            </div>

            <p className="testimonials__text">{testimonials[current].text}</p>

            <div className="testimonials__author">
              <div className="testimonials__avatar">
                {testimonials[current].name.charAt(0)}
              </div>
              <div className="testimonials__author-info">
                <span className="testimonials__name">{testimonials[current].name}</span>
                <span className="testimonials__meta">
                  {testimonials[current].location} • {testimonials[current].product}
                </span>
              </div>
            </div>
          </div>

          <div className="testimonials__controls">
            <button className="testimonials__arrow" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonials__arrow" onClick={next} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
