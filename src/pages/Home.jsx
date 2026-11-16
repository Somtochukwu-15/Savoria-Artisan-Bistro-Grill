import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantInfo, menuItems, customerReviews } from '../data/restaurantData';
import { DishCard } from '../components/DishCard';
import {
  Utensils,
  Sparkles,
  CalendarCheck,
  Award,
  Leaf,
  Flame,
  ArrowRight,
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const Home = () => {
  // Filter featured chef specials for the home page showcase
  const featuredDishes = menuItems.filter(item => item.featured).slice(0, 4);

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-backdrop-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Michelin-Recognized Artisanal Dining</span>
          </div>

          <h1 className="hero-title">
            Welcome to <span className="highlight-text">{restaurantInfo.name}</span>
          </h1>

          <p className="hero-subtitle">
            {restaurantInfo.heroSubtitle}
          </p>

          <div className="hero-cta-group">
            <Link to="/menu" className="btn btn-primary btn-lg">
              <Utensils size={18} />
              <span>Explore Menu & Order</span>
            </Link>
            <Link to="/reservations" className="btn btn-outline btn-lg">
              <CalendarCheck size={18} />
              <span>Reserve a Table</span>
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="hero-stats-strip">
            {restaurantInfo.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-item">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. VALUE PILLARS / HIGHLIGHTS */}
      <section className="section-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <Leaf size={28} />
              </div>
              <h3 className="feature-title">Farm-to-Table Fresh</h3>
              <p className="feature-desc">
                Partnered with 24 organic local farms to ensure every vegetable, herb, and microgreen is picked at dawn.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Flame size={28} />
              </div>
              <h3 className="feature-title">Wood-Fired Hearth</h3>
              <p className="feature-desc">
                Custom white-oak fired ovens infusing delicate smoke and unmatched caramelization into dry-aged steaks and crusts.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Award size={28} />
              </div>
              <h3 className="feature-title">Master Craftsmanship</h3>
              <p className="feature-desc">
                Led by Michelin-trained executive chefs bringing together classic French technique with soulful Italian heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHEF'S FEATURED SIGNATURES */}
      <section className="section-featured-dishes">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Chef's Recommendations</span>
            <h2 className="section-heading">Signature Culinary Masterpieces</h2>
            <p className="section-subtext">
              Handpicked by Executive Chef Matteo Rossi, each dish represents the pinnacle of seasonal flavor and culinary balance.
            </p>
          </div>

          {/* Grid using reusable DishCard components */}
          <div className="dishes-grid">
            {featuredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="featured-bottom-cta">
            <Link to="/menu" className="btn btn-secondary">
              <span>View Complete 13+ Item Menu</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE SAVORIA STORY HIGHLIGHT */}
      <section className="section-story-highlight">
        <div className="container">
          <div className="story-split-grid">
            <div className="story-images-composition">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                alt="Savoria Restaurant Interior Dining"
                className="story-main-img"
              />
              <div className="story-floating-badge">
                <span className="badge-highlight">12+</span>
                <span className="badge-text">Years of Culinary Excellence</span>
              </div>
            </div>

            <div className="story-text-content">
              <span className="section-eyebrow">Our Philosophy</span>
              <h2 className="section-heading">A Symphony of Flavors, Fire, and Warm Hospitality</h2>
              <p className="lead-paragraph">
                At {restaurantInfo.name}, dining is not merely sustenance — it is a multisensory journey that lingers in your memory.
              </p>
              <p className="story-paragraph">
                Founded in 2014, our restaurant was built around a singular passion: honoring the purity of natural ingredients while elevating them with contemporary culinary imagination. From handmade morning pasta to midnight wine pairings, our hearth is always warm.
              </p>

              <div className="story-checklist">
                <div className="check-item">
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>100% Non-GMO, sustainably sourced meats and seafood</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Extensive temperature-controlled cellar with 400+ vintage wines</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Private dining rooms and romantic garden patio available</span>
                </div>
              </div>

              <div className="story-action-row">
                <Link to="/about" className="btn btn-primary">
                  <span>Discover Our Story & Chefs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUEST TESTIMONIALS */}
      <section className="section-testimonials">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Guest Experiences</span>
            <h2 className="section-heading">Words From Our Cherished Patrons</h2>
          </div>

          <div className="testimonials-grid">
            {customerReviews.map((review) => (
              <div key={review.id} className="testimonial-card">
                <Quote className="quote-watermark" size={40} />
                <div className="testimonial-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-comment">"{review.comment}"</p>
                <div className="testimonial-author">
                  <img src={review.avatar} alt={review.author} className="author-avatar" />
                  <div>
                    <h4 className="author-name">{review.author}</h4>
                    <span className="author-role">{review.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TABLE RESERVATION CALLOUT */}
      <section className="section-reservation-banner">
        <div className="container banner-inner">
          <div className="banner-text">
            <h2>Ready for an Unforgettable Culinary Evening?</h2>
            <p>Tables fill quickly for dinner and weekend brunch. Secure your reservation now or order online for delivery.</p>
          </div>
          <div className="banner-buttons">
            <Link to="/reservations" className="btn btn-primary btn-lg">
              Book a Table Online
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
