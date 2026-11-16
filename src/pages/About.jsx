import React from 'react';
import { restaurantInfo, chefsTeam } from '../data/restaurantData';
import { Target, Compass, Award, HeartHandshake, ShieldCheck, Sparkles, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="page-header-tag">About Savoria</span>
          <h1 className="page-header-title">Our Heritage, Passion & Culinary Vision</h1>
          <p className="page-header-subtitle">
            Discover the dedication, artisanal roots, and master craftspeople behind every plate we serve.
          </p>
        </div>
      </section>

      {/* 1. BACKGROUND & HISTORY */}
      <section className="section-about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="section-eyebrow">The Origin Story</span>
              <h2 className="section-heading">Born from a Hearth, Grown with Dedication</h2>
              <p className="lead-paragraph">
                Founded in 2014 by Executive Chef Matteo Rossi, {restaurantInfo.name} began as a humble 30-seat rustic bistro with a single wood-burning oven and an uncompromising philosophy.
              </p>
              <p className="body-text">
                Tired of mass-produced dining and artificial ingredients, Chef Matteo envisioned a gathering place where food celebrated the soil, sea, and seasons. Over the past twelve years, Savoria has expanded into one of the city's most beloved gastronomic destinations while staying true to its founding artisanal ethos.
              </p>
              <p className="body-text">
                Every single day at 5:00 AM, our bakers knead sourdough for our table breads, our pasta artisans hand-roll ribbons of pappardelle and tortelli, and our kitchen team welcomes fresh deliveries from local partner farms.
              </p>

              <div className="heritage-metrics-grid">
                <div className="heritage-metric">
                  <span className="metric-val">2014</span>
                  <span className="metric-desc">Founded with Passion</span>
                </div>
                <div className="heritage-metric">
                  <span className="metric-val">100%</span>
                  <span className="metric-desc">Organic Farm Partners</span>
                </div>
                <div className="heritage-metric">
                  <span className="metric-val">16</span>
                  <span className="metric-desc">Culinary Accolades</span>
                </div>
              </div>
            </div>

            <div className="about-story-imagery">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Chef preparing fresh ingredients"
                className="story-chef-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION, VISION & OBJECTIVES */}
      <section className="section-mission-vision">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Our Guiding North Star</span>
            <h2 className="section-heading">Mission, Vision & Core Values</h2>
            <p className="section-subtext">
              The foundational pillars that guide our culinary philosophy and daily guest interactions.
            </p>
          </div>

          <div className="pillars-grid">
            {/* Mission Card */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <Target size={32} />
              </div>
              <h3 className="pillar-title">Our Mission</h3>
              <p className="pillar-desc">
                To craft deeply memorable culinary moments by honoring authentic gastronomic traditions, using only regenerative local ingredients, and providing warmth and hospitality to every patron.
              </p>
            </div>

            {/* Vision Card */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <Compass size={32} />
              </div>
              <h3 className="pillar-title">Our Vision</h3>
              <p className="pillar-desc">
                To be the benchmark for sustainable, innovative, and heart-centered fine casual dining, inspiring people to reconnect with real food and convivial joy.
              </p>
            </div>

            {/* Objectives & Values Card */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <HeartHandshake size={32} />
              </div>
              <h3 className="pillar-title">Our Core Values</h3>
              <ul className="pillar-list">
                <li><strong>Artisanal Integrity:</strong> No shortcuts or artificial flavorings.</li>
                <li><strong>Local Sustainability:</strong> Zero waste kitchen initiative.</li>
                <li><strong>Hospitality First:</strong> Welcoming every guest like family.</li>
                <li><strong>Continual Mastery:</strong> Ongoing innovation by our culinary team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHEFS & MASTER CULINARY TEAM */}
      <section className="section-chefs-team">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">The Culinary Masters</span>
            <h2 className="section-heading">Meet Our Executive Chefs</h2>
            <p className="section-subtext">
              Driven by creativity and decades of international acclaim, our team turns every plate into a canvas.
            </p>
          </div>

          <div className="chefs-grid">
            {chefsTeam.map((chef, index) => (
              <div key={index} className="chef-profile-card">
                <div className="chef-img-box">
                  <img src={chef.image} alt={chef.name} className="chef-img" />
                  <div className="chef-specialty-badge">
                    <ChefHat size={16} />
                    <span>{chef.specialty}</span>
                  </div>
                </div>

                <div className="chef-info-box">
                  <h3 className="chef-name">{chef.name}</h3>
                  <span className="chef-role">{chef.role}</span>
                  <p className="chef-bio">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOURCING & QUALITY PROMISE */}
      <section className="section-sourcing-promise">
        <div className="container">
          <div className="promise-box">
            <div className="promise-icon-header">
              <ShieldCheck size={40} />
              <h3>The Savoria Quality Guarantee</h3>
            </div>
            <p>
              We believe great dining starts in the soil. That's why 100% of our produce is grown within 75 miles of our restaurant, our meats are pasture-raised without hormones or antibiotics, and our seafood is strictly Monterey Bay Aquarium Seafood Watch certified.
            </p>
            <div className="promise-cta">
              <Link to="/menu" className="btn btn-primary">
                Explore What We Cook
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
