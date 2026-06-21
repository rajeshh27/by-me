import './Story.css'

function Story() {
  return (
    <section className="story section" id="story">
      <div className="container">
        <div className="story__grid">
          <div className="story__image-col reveal-left">
            <div className="story__image-wrapper">
              <img
                src="/images/about-section.webp"
                alt="By-Me soap making process with natural ingredients"
                className="story__image"
                loading="lazy"
              />
              <div className="story__image-accent" />
            </div>
            <div className="story__stat-cards">
              <div className="story__stat">
                <span className="story__stat-number">8</span>
                <span className="story__stat-label">Unique Soaps</span>
              </div>
              <div className="story__stat">
                <span className="story__stat-number">100%</span>
                <span className="story__stat-label">Natural</span>
              </div>
              <div className="story__stat">
                <span className="story__stat-number">0</span>
                <span className="story__stat-label">Chemicals</span>
              </div>
            </div>
          </div>

          <div className="story__content-col reveal-right">
            <span className="story__label">Our Story</span>
            <h2 className="story__title">
              Born from a Love for <em>Nature</em> & <em>Craft</em>
            </h2>
            <div className="story__text">
              <p>
                By-Me began in a small kitchen with a simple belief — what you
                put on your skin matters just as much as what you eat. We were
                tired of ingredient lists we couldn't pronounce and products
                wrapped in empty promises.
              </p>
              <p>
                So we went back to the basics. Ancient recipes, time-tested
                botanicals, and the healing wisdom of nature. Every bar of
                By-Me soap is a small act of rebellion against mass-produced
                skincare — handcrafted in small batches, with ingredients you
                can see, smell, and trust.
              </p>
              <p>
                From the zesty kick of our LimePop to the calming embrace of
                Honey Lavender, each soap tells a story of care, patience, and
                purpose. This isn't just soap. It's self-care, made by hand,
                made by us — made <strong>By-Me</strong>.
              </p>
            </div>
            <div className="story__values">
              <div className="story__value">
                <div className="story__value-dot" />
                <span>Small Batch Production</span>
              </div>
              <div className="story__value">
                <div className="story__value-dot" />
                <span>Sustainably Sourced</span>
              </div>
              <div className="story__value">
                <div className="story__value-dot" />
                <span>Eco-Friendly Packaging</span>
              </div>
              <div className="story__value">
                <div className="story__value-dot" />
                <span>Cruelty Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
