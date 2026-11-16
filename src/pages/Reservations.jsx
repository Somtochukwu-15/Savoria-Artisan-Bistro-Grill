import React, { useState } from 'react';
import { restaurantInfo } from '../data/restaurantData';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, Utensils, MapPin, Phone, ShieldCheck } from 'lucide-react';

export const Reservations = () => {
  // Form state
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: '2',
    seating: 'Main Dining Room',
    occasion: 'Casual Dining',
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [confirmedReservation, setConfirmedReservation] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field error on edit
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact telephone number is required.';
    }
    if (!formData.date) newErrors.date = 'Please choose a dining date.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Generate random reservation code
    const code = 'SAV-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedReservation({ ...formData, code, bookedAt: new Date().toLocaleTimeString() });
  };

  const handleReset = () => {
    setConfirmedReservation(null);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      time: '19:00',
      guests: '2',
      seating: 'Main Dining Room',
      occasion: 'Casual Dining',
      fullName: '',
      email: '',
      phone: '',
      specialRequests: '',
    });
  };

  return (
    <div className="reservations-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="page-header-tag">Table Reservations</span>
          <h1 className="page-header-title">Reserve Your Savoria Dining Experience</h1>
          <p className="page-header-subtitle">
            Secure an intimate table, family gathering, or celebration. We look forward to hosting you.
          </p>
        </div>
      </section>

      <div className="container reservation-body-container">
        {confirmedReservation ? (
          /* Confirmation Screen */
          <div className="reservation-success-card">
            <div className="success-icon-badge">
              <CheckCircle2 size={56} className="text-success" />
            </div>
            <h2>Reservation Confirmed!</h2>
            <p className="confirmation-lead">
              Thank you, <strong>{confirmedReservation.fullName}</strong>. We have reserved your table and sent a confirmation email to <strong>{confirmedReservation.email}</strong>.
            </p>

            <div className="reservation-ticket">
              <div className="ticket-header">
                <span className="ticket-title">{restaurantInfo.name}</span>
                <span className="ticket-ref">Ref: <strong>{confirmedReservation.code}</strong></span>
              </div>
              <div className="ticket-grid">
                <div className="ticket-item">
                  <span className="t-label">Date</span>
                  <span className="t-val">{confirmedReservation.date}</span>
                </div>
                <div className="ticket-item">
                  <span className="t-label">Time</span>
                  <span className="t-val">{confirmedReservation.time}</span>
                </div>
                <div className="ticket-item">
                  <span className="t-label">Guests</span>
                  <span className="t-val">{confirmedReservation.guests} Guest(s)</span>
                </div>
                <div className="ticket-item">
                  <span className="t-label">Seating Area</span>
                  <span className="t-val">{confirmedReservation.seating}</span>
                </div>
                <div className="ticket-item">
                  <span className="t-label">Occasion</span>
                  <span className="t-val">{confirmedReservation.occasion}</span>
                </div>
                <div className="ticket-item">
                  <span className="t-label">Contact Phone</span>
                  <span className="t-val">{confirmedReservation.phone}</span>
                </div>
              </div>
              {confirmedReservation.specialRequests && (
                <div className="ticket-notes">
                  <strong>Notes:</strong> {confirmedReservation.specialRequests}
                </div>
              )}
            </div>

            <div className="success-actions">
              <button onClick={handleReset} className="btn btn-primary">
                Book Another Reservation
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form */
          <div className="reservation-layout-grid">
            {/* Form Column */}
            <div className="reservation-form-panel">
              <div className="panel-heading">
                <h2>Table Reservation Details</h2>
                <p>Complete the form below to confirm your party and dining preferences.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="booking-form">
                {/* Row 1: Date & Time */}
                <div className="form-row two-cols">
                  <div className="form-group">
                    <label htmlFor="date">
                      <Calendar size={16} /> Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className={`form-input ${errors.date ? 'has-error' : ''}`}
                    />
                    {errors.date && <span className="field-error">{errors.date}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">
                      <Clock size={16} /> Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <optgroup label="Lunch / Midday">
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="13:30">01:30 PM</option>
                        <option value="14:00">02:00 PM</option>
                      </optgroup>
                      <optgroup label="Dinner / Evening">
                        <option value="17:00">05:00 PM</option>
                        <option value="17:30">05:30 PM</option>
                        <option value="18:00">06:00 PM</option>
                        <option value="18:30">06:30 PM</option>
                        <option value="19:00">07:00 PM (Popular)</option>
                        <option value="19:30">07:30 PM (Popular)</option>
                        <option value="20:00">08:00 PM</option>
                        <option value="20:30">08:30 PM</option>
                        <option value="21:00">09:00 PM</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Row 2: Guests & Seating */}
                <div className="form-row two-cols">
                  <div className="form-group">
                    <label htmlFor="guests">
                      <Users size={16} /> Party Size *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="1">1 Guest (Solo Dining)</option>
                      <option value="2">2 Guests (Couple)</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8 Guests (Large Party)</option>
                      <option value="10+">10+ Guests (Private Dining)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="seating">
                      <Sparkles size={16} /> Seating Ambiance
                    </label>
                    <select
                      id="seating"
                      name="seating"
                      value={formData.seating}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="Main Dining Room">Main Dining Room (Vibrant & Warm)</option>
                      <option value="Romantic Garden Patio">Romantic Garden Patio (Al Fresco)</option>
                      <option value="Chef's Open Counter">Chef's Open Kitchen Counter</option>
                      <option value="Private Wine Cellar">Private Wine Cellar Alcove</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Occasion */}
                <div className="form-group">
                  <label htmlFor="occasion">Special Occasion</label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="Casual Dining">Casual Dining / Friendly Get-Together</option>
                    <option value="Romantic Date Night">Romantic Date Night</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business Dinner">Business Dinner</option>
                  </select>
                </div>

                {/* Row 4: Guest Contact Details */}
                <div className="form-divider">
                  <span>Guest Contact Information</span>
                </div>

                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                  />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>

                <div className="form-row two-cols">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Special Dietary Preferences / Allergies / Notes</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows="3"
                    placeholder="Please specify any food allergies (nuts, shellfish), anniversary champagne requests, or accessibility needs."
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  Confirm Table Reservation
                </button>
              </form>
            </div>

            {/* Sidebar Details Column */}
            <div className="reservation-sidebar">
              <div className="reservation-policy-card">
                <h3>Reservation Guidelines</h3>
                <ul className="policy-list">
                  <li>
                    <strong>Table Holding:</strong> We hold reserved tables for up to 15 minutes past the booking time before releasing to walk-in patrons.
                  </li>
                  <li>
                    <strong>Cancellation Policy:</strong> Complimentary cancellation up to 4 hours prior to scheduled dining.
                  </li>
                  <li>
                    <strong>Dress Code:</strong> Smart casual elegant attire recommended.
                  </li>
                  <li>
                    <strong>Large Parties:</strong> For parties of 12 or more, please contact our events team directly.
                  </li>
                </ul>

                <div className="direct-call-box">
                  <Phone size={20} />
                  <div>
                    <span className="call-caption">Prefer to reserve by phone?</span>
                    <a href={`tel:${restaurantInfo.phone}`} className="call-number">
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
