import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurantInfo } from '../data/restaurantData';
import { UtensilsCrossed, Mail, Phone, MapPin, Clock, Send, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'info');
      return;
    }
    setSubscribed(true);
    showToast('Thank you for subscribing to our VIP culinary newsletter!');
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <UtensilsCrossed className="footer-logo-icon" size={28} />
              <span className="footer-brand-name">{restaurantInfo.name}</span>
            </div>
            <p className="footer-desc">
              Dedicated to the art of exceptional dining. We blend time-honored artisanal culinary methods with modern innovation to create memorable flavor journeys.
            </p>
            <div className="footer-contact-details">
              <p><MapPin size={16} /> {restaurantInfo.address}</p>
              <p><Phone size={16} /> <a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a></p>
              <p><Mail size={16} /> <a href={`mailto:${restaurantInfo.email}`}>{restaurantInfo.email}</a></p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">Our Story & Chefs</Link></li>
              <li><Link to="/menu">Artisan Menu & Ordering</Link></li>
              <li><Link to="/reservations">Table Reservation</Link></li>
              <li><Link to="/contact">Contact & Location</Link></li>
              <li><Link to="/cart">Review Your Order</Link></li>
            </ul>
          </div>

          {/* Column 3: Hours of Service */}
          <div className="footer-col">
            <h4 className="footer-heading">Dining Hours</h4>
            <div className="footer-hours">
              <div className="hours-block">
                <span className="day-label">Monday – Friday</span>
                <span className="time-label">11:30 AM – 10:30 PM</span>
              </div>
              <div className="hours-block">
                <span className="day-label">Saturday & Sunday</span>
                <span className="time-label">10:00 AM – 11:30 PM</span>
              </div>
              <div className="hours-block highlight-brunch">
                <span className="day-label">Weekend Brunch</span>
                <span className="time-label">10:00 AM – 2:30 PM</span>
              </div>
            </div>
            <div className="reservation-hint">
              <Clock size={16} />
              <span>Kitchen closes 45 mins before closing</span>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">VIP Culinary Circle</h4>
            <p className="newsletter-text">
              Subscribe to receive exclusive seasonal tasting menus, wine pairing invitations, and secret chef specials.
            </p>
            {subscribed ? (
              <div className="newsletter-success">
                ✓ You are on the VIP guest list!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                  <Send size={16} />
                </button>
              </form>
            )}
            <p className="privacy-note">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.</p>
          <p className="assignment-badge">
            React JS Web Development Practical Project • Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};
