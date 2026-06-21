import { ShoppingBag, Eye } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './Products.css'

const products = [
  {
    id: 1,
    name: 'LimePop',
    tagline: 'Zesty Fresh Cleanse',
    price: 249,
    image: '/images/limepop.webp',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Coffee Bliss',
    tagline: 'Energizing Exfoliant',
    price: 279,
    image: '/images/coffee.webp',
    badge: null,
  },
  {
    id: 3,
    name: 'Honey Lavender',
    tagline: 'Calm & Nourish',
    price: 299,
    image: '/images/honey-lavender.webp',
    badge: 'New',
  },
  {
    id: 4,
    name: 'Turmeric Glow',
    tagline: 'Radiance Booster',
    price: 269,
    image: '/images/turmeric.webp',
    badge: null,
  },
  {
    id: 5,
    name: 'Rose Petal',
    tagline: 'Gentle & Romantic',
    price: 289,
    image: '/images/rose.webp',
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'Charcoal Detox',
    tagline: 'Deep Purifying',
    price: 299,
    image: '/images/charcoal.webp',
    badge: null,
  },
  {
    id: 7,
    name: 'Aloe Vera',
    tagline: 'Soothe & Hydrate',
    price: 259,
    image: '/images/aloe-vera.webp',
    badge: null,
  },
  {
    id: 8,
    name: 'Gift Basket',
    tagline: 'The Perfect Present',
    price: 1499,
    image: '/images/gift-basket.webp',
    badge: 'Gift Set',
  },
]

function Products() {
  const { addToCart } = useCart()

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="products__header reveal">
          <span className="products__label">Our Collection</span>
          <h2 className="section-title">Treat Your Skin Kindly</h2>
          <p className="section-subtitle">
            Each soap is a unique blend of nature's finest ingredients,
            handcrafted to transform your daily routine into a ritual of self-care.
          </p>
        </div>

        <div className="products__grid">
          {products.map((product, i) => (
            <div key={product.id} className="product-card reveal-scale" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="product-card__image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card__image"
                  loading="lazy"
                />
                <div className="product-card__overlay">
                  <button className="product-card__action-btn liquid-glass" aria-label="Quick view">
                    <Eye size={18} />
                  </button>
                  <button 
                    className="product-card__action-btn liquid-glass" 
                    aria-label="Add to cart"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
                {product.badge && (
                  <span className={`product-card__badge product-card__badge--${product.badge.toLowerCase().replace(' ', '-')}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="product-card__info">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__tagline">{product.tagline}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">₹{product.price}</span>
                  <button 
                    className="product-card__add-btn liquid-glass-green"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
