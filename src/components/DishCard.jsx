import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Star, Clock, Flame, Plus, Check, Heart } from 'lucide-react';

export const DishCard = ({ dish }) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(dish);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <article className="dish-card">
      <div className="dish-image-wrapper">
        <img
          src={dish.image}
          alt={dish.name}
          className="dish-image"
          loading="lazy"
        />
        {/* Favorite Icon Button */}
        <button
          className={`dish-fav-btn ${isLiked ? 'liked' : ''}`}
          onClick={toggleFavorite}
          aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={18} fill={isLiked ? '#e63946' : 'none'} color={isLiked ? '#e63946' : '#ffffff'} />
        </button>

        {/* Dietary Badges */}
        <div className="dish-badges">
          {dish.dietary && dish.dietary.map((tag, index) => (
            <span
              key={index}
              className={`dietary-badge ${tag.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="dish-details">
        <div className="dish-meta-row">
          <div className="dish-rating">
            <Star size={15} className="star-icon" fill="#f59e0b" color="#f59e0b" />
            <span className="rating-score">{dish.rating.toFixed(1)}</span>
            <span className="rating-count">({dish.reviews})</span>
          </div>

          <div className="dish-time">
            <Clock size={14} />
            <span>{dish.prepTime}</span>
          </div>
        </div>

        <h3 className="dish-title">{dish.name}</h3>

        <p className="dish-description">{dish.description}</p>

        <div className="dish-footer">
          <div className="dish-price-wrap">
            <span className="currency">$</span>
            <span className="price-amount">{dish.price.toFixed(2)}</span>
            <span className="calorie-tag">{dish.calories}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`add-to-cart-btn ${isAdded ? 'btn-added' : ''}`}
            aria-label={`Add ${dish.name} to order`}
          >
            {isAdded ? (
              <>
                <Check size={16} />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus size={16} />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
