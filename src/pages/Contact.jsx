import React, { useState } from 'react';
import { restaurantInfo } from '../data/restaurantData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Contact = () => {
  const { showToast } = useCart();

  // Controlled form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Submission status state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle controlled input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time error clearance
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    // Validate Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    // Validate Subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    return newErrors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast('Please fix the errors indicated in the form.', 'info');
      return;
    }

    // Simulate sending form to server
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Your message has been sent successfully!');
    }, 800);
  };

  // Reset form to send another message
  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="page-header-tag">Get In Touch</span>
          <h1 className="page-header-title">Contact Savoria Artisan Restaurant</h1>
          <p className="page-header-subtitle">
            Have an inquiry about private dining, catering, dietary accommodations, or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="container contact-content-wrapper">
        <div className="contact-grid">
          {/* Column 1: Contact Information Cards */}
          <div className="contact-info-panel">
            <span className="section-eyebrow">Connect With Us</span>
            <h2 className="contact-panel-title">We Welcome Your Visit & Inquiries</h2>
            <p className="contact-panel-text">
              Whether reserving our chef's private table, inquiring about custom event catering, or simply asking about our seasonal ingredients, our team responds promptly.
            </p>

            <div className="info-cards-list">
              {/* Address Card */}
              <div className="info-card">
                <div className="info-card-icon">
                  <MapPin size={22} />
                </div>
                <div className="info-card-details">
                  <h4>Restaurant Location</h4>
                  <p>{restaurantInfo.address}</p>
                  <span className="info-subtext">{restaurantInfo.city} (Valet Parking Available)</span>
                </div>
              </div>

              {/* Telephone Card */}
              <div className="info-card">
                <div className="info-card-icon">
                  <Phone size={22} />
                </div>
                <div className="info-card-details">
                  <h4>Telephone & Reservations</h4>
                  <p><a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a></p>
                  <span className="info-subtext">Lines open daily 10:00 AM – 10:00 PM</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="info-card">
                <div className="info-card-icon">
                  <Mail size={22} />
                </div>
                <div className="info-card-details">
                  <h4>Email Concierge</h4>
                  <p><a href={`mailto:${restaurantInfo.email}`}>{restaurantInfo.email}</a></p>
                  <span className="info-subtext">Direct inquiries: {restaurantInfo.supportEmail}</span>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="info-card">
                <div className="info-card-icon">
                  <Clock size={22} />
                </div>
                <div className="info-card-details">
                  <h4>Hours of Hospitality</h4>
                  <p>{restaurantInfo.hours.weekdays}</p>
                  <p>{restaurantInfo.hours.weekends}</p>
                </div>
              </div>
            </div>

            {/* Interactive Location Note */}
            <div className="location-transport-hint">
              <strong>🚇 Transit & Parking:</strong> Conveniently located 2 blocks from Powell St. Transit Station with complimentary valet parking from 5:30 PM.
            </div>
          </div>

          {/* Column 2: Controlled Contact Form */}
          <div className="contact-form-panel">
            {isSubmitted ? (
              /* Success Feedback State */
              <div className="form-success-card">
                <div className="success-icon-wrap">
                  <CheckCircle size={52} className="text-success" />
                </div>
                <h3>Message Received!</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. Your message regarding <em>"{formData.subject}"</em> has been transmitted to our management team.
                </p>
                <p className="success-hint">
                  A representative will reach out to you at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button onClick={handleReset} className="btn btn-primary mt-3">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <h3 className="form-title">Send Us a Direct Message</h3>
                <p className="form-subtitle">Fields marked with an asterisk (*) are required.</p>

                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alexander Hamilton"
                    className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                  />
                  {errors.fullName && (
                    <div className="field-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alexander@example.com"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                  />
                  {errors.email && (
                    <div className="field-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Private Dining Inquiry / Event Catering"
                    className={`form-input ${errors.subject ? 'has-error' : ''}`}
                  />
                  {errors.subject && (
                    <div className="field-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your questions, catering requests, or dietary details here..."
                    className={`form-input form-textarea ${errors.message ? 'has-error' : ''}`}
                  ></textarea>
                  {errors.message && (
                    <div className="field-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block btn-lg"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
