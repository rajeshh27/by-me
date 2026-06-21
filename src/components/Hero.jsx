import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, Leaf, Droplets, Sparkles } from 'lucide-react'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)
  const badgesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        titleRef.current.querySelectorAll('.hero__title-line'),
        { y: 80, opacity: 0, rotateX: -15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          imageRef.current,
          { x: 60, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 1.2 },
          '-=1'
        )
        .fromTo(
          badgesRef.current.querySelectorAll('.hero__badge'),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.12 },
          '-=0.6'
        )

      // Parallax on the hero image
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 80,
        scale: 1.05,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Decorative elements */}
      <div className="hero__bg-gradient" />
      <div className="hero__bg-circle hero__bg-circle--1" />
      <div className="hero__bg-circle hero__bg-circle--2" />
      <div className="hero__leaf hero__leaf--1">🌿</div>
      <div className="hero__leaf hero__leaf--2">🍃</div>
      <div className="hero__leaf hero__leaf--3">🌱</div>

      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__title" ref={titleRef}>
            <div className="hero__title-line">
              <span className="hero__title-text">More Than</span>
            </div>
            <div className="hero__title-line">
              <span className="hero__title-text hero__title-text--accent">Soap,</span>
            </div>
            <div className="hero__title-line">
              <span className="hero__title-text">It's <em>Self-Care</em></span>
            </div>
          </div>

          <p className="hero__subtitle" ref={subtitleRef}>
            Handcrafted with love, purity & purpose. Our natural soaps are
            made from the finest botanical ingredients — no toxins, no
            chemicals, just pure freshness for your skin.
          </p>

          <div className="hero__cta-group" ref={ctaRef}>
            <a href="#products" className="hero__cta liquid-glass-green"
              onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <span>Shop Collection</span>
              <ArrowRight size={18} />
            </a>
            <a href="#story" className="hero__cta-secondary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Our Story
            </a>
          </div>

          <div className="hero__badges" ref={badgesRef}>
            <div className="hero__badge">
              <Leaf size={16} />
              <span>100% Natural</span>
            </div>
            <div className="hero__badge">
              <Droplets size={16} />
              <span>No Toxins</span>
            </div>
            <div className="hero__badge">
              <Sparkles size={16} />
              <span>Hand-Made</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" ref={imageRef}>
          <div className="hero__image-wrapper">
            <img
              src="/images/hero-banner.webp"
              alt="By-Me handcrafted natural soaps collection"
              className="hero__image"
            />
            <div className="hero__image-overlay" />
          </div>
          <div className="hero__floating-card hero__floating-card--1">
            <span className="hero__floating-emoji">🌿</span>
            <span>Pure Freshness</span>
          </div>
          <div className="hero__floating-card hero__floating-card--2">
            <span className="hero__floating-emoji">✨</span>
            <span>8 Unique Soaps</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero
