import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  UtensilsCrossed,
  Sparkles,
  CheckCircle2,
  Tag,
  ShieldCheck
} from 'lucide-react';

export const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    tax,
    total,
    showToast
  } = useCart();

  // Promo code state
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');

  // Order type
  const [orderType, setOrderType] = useState('dine-in');

  // Checkout modal state
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Checkout form state
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    tableNumber: '',
    instructions: '',
  });

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'SAVOR10') {
      setDiscountPercent(0.10);
      showToast('10% Welcome Discount applied!');
    } else if (promoCode.trim().toUpperCase() === 'CHEF20') {
      setDiscountPercent(0.20);
      showToast('20% Gourmet Special Discount applied!');
    } else {
      setPromoError('Invalid coupon. Try "SAVOR10" for 10% off!');
    }
  };

  const discountAmount = subtotal * discountPercent;
  const finalTotal = Math.max(0, subtotal - discountAmount + tax);

  const handleProceedCheckout = () => {
    if (cartItems.length === 0) return;
    setShowCheckoutModal(true);
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    const orderNum = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(orderNum);
    setOrderConfirmed(true);
    clearCart();
  };

  return (
    <div className="cart-page">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="page-header-tag">Order Summary</span>
          <h1 className="page-header-title">Your Gourmet Selections</h1>
          <p className="page-header-subtitle">
            Review your selected dishes, specify dining preferences, and complete your order.
          </p>
        </div>
      </section>

      <div className="container cart-body-container">
        {orderConfirmed ? (
          /* Order Placed Success */
          <div className="order-success-box text-center">
            <CheckCircle2 size={64} className="text-success mb-3" />
            <h2>Order Placed Successfully!</h2>
            <p className="order-ref-text">Order Reference: <strong>#{orderNumber}</strong></p>
            <p className="order-message">
              Thank you, <strong>{customerInfo.name}</strong>! Your artisanal meal is being freshly prepared by our culinary team.
            </p>
            <div className="order-actions">
              <Link to="/menu" className="btn btn-primary">
                Return to Menu
              </Link>
            </div>
          </div>
        ) : cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="empty-cart-view text-center">
            <ShoppingBag size={64} className="empty-cart-icon" />
            <h2>Your Order Tray is Currently Empty</h2>
            <p>You haven't added any handcrafted dishes to your cart yet.</p>
            <Link to="/menu" className="btn btn-primary mt-3">
              Explore Our Artisanal Menu
            </Link>
          </div>
        ) : (
          /* Active Cart Grid */
          <div className="cart-grid">
            {/* Items List */}
            <div className="cart-items-panel">
              <div className="cart-panel-header">
                <h3>Selected Items ({cartItems.length})</h3>
                <button onClick={clearCart} className="btn-clear-cart">
                  Clear All
                </button>
              </div>

              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <img src={item.image} alt={item.name} className="cart-item-thumb" />

                    <div className="cart-item-details">
                      <h4 className="cart-item-title">{item.name}</h4>
                      <span className="cart-item-price-unit">${item.price.toFixed(2)} each</span>
                    </div>

                    {/* Quantity controls */}
                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="qty-btn"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="qty-btn"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <div className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="cart-remove-btn"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="cart-summary-panel">
              <h3 className="summary-title">Order Total</h3>

              {/* Dining Mode */}
              <div className="order-type-selector">
                <label className="type-option">
                  <input
                    type="radio"
                    name="orderType"
                    value="dine-in"
                    checked={orderType === 'dine-in'}
                    onChange={(e) => setOrderType(e.target.value)}
                  />
                  <span>Dine-In Table Order</span>
                </label>
                <label className="type-option">
                  <input
                    type="radio"
                    name="orderType"
                    value="takeout"
                    checked={orderType === 'takeout'}
                    onChange={(e) => setOrderType(e.target.value)}
                  />
                  <span>Curbside Pickup</span>
                </label>
                <label className="type-option">
                  <input
                    type="radio"
                    name="orderType"
                    value="delivery"
                    checked={orderType === 'delivery'}
                    onChange={(e) => setOrderType(e.target.value)}
                  />
                  <span>White-Glove Delivery</span>
                </label>
              </div>

              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="promo-form">
                <div className="promo-input-group">
                  <Tag size={16} className="promo-icon" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Coupon (e.g. SAVOR10)"
                    className="promo-input"
                  />
                  <button type="submit" className="btn btn-secondary promo-btn">
                    Apply
                  </button>
                </div>
                {promoError && <span className="promo-error">{promoError}</span>}
                {discountPercent > 0 && (
                  <span className="promo-applied">✓ {discountPercent * 100}% Discount Applied</span>
                )}
              </form>

              {/* Price Calculations */}
              <div className="summary-calculations">
                <div className="calc-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {discountPercent > 0 && (
                  <div className="calc-row discount-row">
                    <span>Discount ({discountPercent * 100}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="calc-row">
                  <span>State & Hospitality Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="calc-row total-row">
                  <span>Grand Total</span>
                  <span className="total-val">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleProceedCheckout}
                className="btn btn-primary btn-block btn-lg mt-4"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </button>

              <div className="secure-checkout-badge">
                <ShieldCheck size={16} />
                <span>Encrypted Order Processing • Freshly Made Guarantee</span>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Modal */}
        {showCheckoutModal && (
          <div className="modal-backdrop" onClick={() => setShowCheckoutModal(false)}>
            <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Finalize Your Order</h3>
                <button
                  className="modal-close-btn"
                  onClick={() => setShowCheckoutModal(false)}
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleConfirmOrder} className="checkout-form">
                <div className="form-group">
                  <label htmlFor="checkoutName">Your Name *</label>
                  <input
                    type="text"
                    id="checkoutName"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    placeholder="e.g. Catherine Bell"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="checkoutPhone">Phone Number *</label>
                  <input
                    type="tel"
                    id="checkoutPhone"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    placeholder="e.g. (555) 928-1039"
                    className="form-input"
                  />
                </div>

                {orderType === 'dine-in' ? (
                  <div className="form-group">
                    <label htmlFor="tableNumber">Table Number (if currently seated)</label>
                    <input
                      type="text"
                      id="tableNumber"
                      value={customerInfo.tableNumber}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, tableNumber: e.target.value })}
                      placeholder="e.g. Table 14"
                      className="form-input"
                    />
                  </div>
                ) : (
                  <div className="form-group">
                    <label htmlFor="checkoutAddress">Delivery Address *</label>
                    <input
                      type="text"
                      id="checkoutAddress"
                      required
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      placeholder="Street address, apartment or suite"
                      className="form-input"
                    />
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="checkoutInstructions">Kitchen Instructions</label>
                  <textarea
                    id="checkoutInstructions"
                    rows="2"
                    value={customerInfo.instructions}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, instructions: e.target.value })}
                    placeholder="e.g. Extra napkins, dressing on side, ring doorbell..."
                    className="form-input"
                  ></textarea>
                </div>

                <div className="checkout-summary-mini">
                  <span>Total Due at Completion:</span>
                  <strong>${finalTotal.toFixed(2)}</strong>
                </div>

                <div className="modal-buttons">
                  <button
                    type="button"
                    onClick={() => setShowCheckoutModal(false)}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Confirm & Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
