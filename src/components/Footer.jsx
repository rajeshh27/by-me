import { Mail, Phone, MapPin, AtSign, Globe, Send, ArrowUp } from 'lucide-react'
import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="footer">
      {/* Newsletter Band */}
      <div className="footer__newsletter">
        <div className="container">
          <div className="footer__newsletter-inner">
            <div className="footer__newsletter-text">
              <h3>Join the By-Me Family</h3>
              <p>Get early access to new soaps, exclusive offers & self-care tips.</p>
            </div>
            <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="footer__newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="footer__newsletter-btn liquid-glass-green">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon">
                  <img src="/logo12.jpeg" alt="By-Me Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <span className="footer__logo-brand">By-Me</span>
                  <span className="footer__logo-tagline">The Hand Crafted Product</span>
                </div>
              </div>
              <p className="footer__brand-desc">
                Handcrafted natural soaps made with love, purity & purpose. 
                Every bar is a celebration of nature's finest ingredients.
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Instagram">
                  <AtSign size={18} />
                </a>
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  <Globe size={18} />
                </a>
                <a href="#" className="footer__social-link" aria-label="Twitter">
                  <Send size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links-col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Shop All</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#testimonials">Reviews</a></li>
                <li><a href="#footer">Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className="footer__links-col">
              <h4 className="footer__col-title">Products</h4>
              <ul className="footer__links">
                <li><a href="#products">LimePop</a></li>
                <li><a href="#products">Coffee Bliss</a></li>
                <li><a href="#products">Honey Lavender</a></li>
                <li><a href="#products">Turmeric Glow</a></li>
                <li><a href="#products">Gift Baskets</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__links-col">
              <h4 className="footer__col-title">Get in Touch</h4>
              <ul className="footer__contact">
                <li>
                  <Mail size={16} />
                  <a href="mailto:hello@byme.in">hello@byme.in</a>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              © {new Date().getFullYear()} By-Me. All rights reserved. Made with 🌿 in India.
            </p>
            <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
