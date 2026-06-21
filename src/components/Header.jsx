import { useState, useEffect } from 'react'
import { ShoppingBag, Heart, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Our Story', href: '#story' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#footer' },
  ]

  const scrollTo = (href) => {
    setMenuOpen(false)
    if (window.lenis) {
      window.lenis.scrollTo(href)
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="header">
      <div className="header__inner container">
        {/* Logo */}
        <a href="#home" className="header__logo" onClick={(e) => { e.preventDefault(); scrollTo('#home') }}>
          <div className="header__logo-icon">
            <img src="/logo.png" alt="By-Me Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="header__logo-text">
            <span className="header__logo-brand">By-Me</span>
            <span className="header__logo-tagline">Hand Crafted</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header__nav-link"
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <button className="header__action-btn" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          <button className="header__action-btn header__cart-btn" aria-label="Cart" onClick={openCart}>
            <ShoppingBag size={20} />
            <span className="header__cart-count">{itemCount}</span>
          </button>
          <button
            className="header__menu-btn"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="header__mobile-link"
              style={{ transitionDelay: `${i * 0.06}s` }}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
