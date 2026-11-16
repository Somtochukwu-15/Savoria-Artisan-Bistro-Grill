import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { restaurantInfo } from '../data/restaurantData';
import { UtensilsCrossed, ShoppingBag, Menu, X, CalendarDays, PhoneCall } from 'lucide-react';

export const Navbar = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Top micro-bar */}
      <div className="header-topbar">
        <div className="container topbar-inner">
          <div className="topbar-info">
            <span>📍 {restaurantInfo.address}</span>
            <span className="separator">•</span>
            <span>📞 <a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a></span>
          </div>
          <div className="topbar-hours">
            <span>🕒 Open Daily from 11:30 AM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="header-main">
        <div className="container header-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="Savoria Home">
            <div className="logo-icon-wrapper">
              <UtensilsCrossed size={24} className="logo-icon" />
            </div>
            <div className="logo-text">
              <span className="logo-title">{restaurantInfo.shortName}</span>
              <span className="logo-tagline">ARTISAN BISTRO & GRILL</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Menu & Ordering
            </NavLink>
            <NavLink
              to="/reservations"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Reservations
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Action buttons */}
          <div className="header-actions">
            {/* Cart Icon */}
            <Link to="/cart" className="cart-btn" aria-label={`View Cart with ${totalItems} items`}>
              <ShoppingBag size={22} />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>

            {/* Book Table Button */}
            <Link to="/reservations" className="btn btn-primary header-cta-btn">
              <CalendarDays size={16} />
              <span>Book a Table</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="logo-text">
                <span className="logo-title">{restaurantInfo.shortName}</span>
                <span className="logo-tagline">ARTISAN BISTRO</span>
              </div>
              <button
                className="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                About Us
              </NavLink>
              <NavLink to="/menu" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Menu & Food Ordering
              </NavLink>
              <NavLink to="/reservations" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Book a Table
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Contact Us
              </NavLink>
              <NavLink to="/cart" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                My Cart ({totalItems} items)
              </NavLink>
            </nav>

            <div className="mobile-drawer-footer">
              <Link to="/reservations" className="btn btn-primary btn-block">
                Reserve a Table
              </Link>
              <div className="mobile-contact-snippet">
                <p>📞 {restaurantInfo.phone}</p>
                <p>📍 {restaurantInfo.city}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
