import { Shield, Leaf, Heart, Droplets } from 'lucide-react'
import './BrandPromise.css'

const promises = [
  {
    icon: <Leaf size={28} />,
    title: '100% Natural',
    description: 'Every ingredient comes straight from nature — herbs, flowers, fruits, and essential oils.',
  },
  {
    icon: <Shield size={28} />,
    title: 'No Toxins',
    description: 'Free from parabens, sulphates, artificial colours, and synthetic fragrances.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Hand-Made with Love',
    description: 'Each soap is carefully crafted by hand in small batches for premium quality.',
  },
  {
    icon: <Droplets size={28} />,
    title: 'Pure Freshness',
    description: 'Made fresh to order, ensuring maximum potency and a truly luxurious experience.',
  },
]

function BrandPromise() {
  return (
    <section className="brand-promise section" id="promise">
      <div className="brand-promise__bg" />
      <div className="container">
        <div className="brand-promise__header reveal">
          <span className="brand-promise__label">Why By-Me</span>
          <h2 className="section-title">Packed with Love, Purity & Purpose</h2>
          <p className="section-subtitle">
            We believe in gentle, natural care. Our soaps are a celebration of
            nature's finest ingredients — crafted to nourish your skin and soul.
          </p>
        </div>

        <div className="brand-promise__grid">
          {promises.map((item, i) => (
            <div key={i} className="brand-promise__card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="brand-promise__icon">{item.icon}</div>
              <h3 className="brand-promise__title">{item.title}</h3>
              <p className="brand-promise__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandPromise
