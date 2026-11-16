import React, { useState, useMemo } from 'react';
import { menuItems, menuCategories } from '../data/restaurantData';
import { DishCard } from '../components/DishCard';
import { Search, SlidersHorizontal, Sparkles, X, UtensilsCrossed } from 'lucide-react';

export const Menu = () => {
  // State for active category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for dietary filter
  const [selectedDietary, setSelectedDietary] = useState('all');

  // State for sorting
  const [sortBy, setSortBy] = useState('featured');

  // Filter and sort items dynamically
  const filteredDishes = useMemo(() => {
    return menuItems
      .filter((dish) => {
        // Category check
        const matchCategory = selectedCategory === 'all' || dish.category === selectedCategory;

        // Search text check (dish name, description, category)
        const matchSearch =
          dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dish.category.toLowerCase().includes(searchQuery.toLowerCase());

        // Dietary check
        const matchDietary =
          selectedDietary === 'all' ||
          (dish.dietary && dish.dietary.some(d => d.toLowerCase() === selectedDietary.toLowerCase()));

        return matchCategory && matchSearch && matchDietary;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [selectedCategory, searchQuery, selectedDietary, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedDietary('all');
    setSortBy('featured');
  };

  return (
    <div className="menu-page">
      {/* Menu Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="page-header-tag">Artisanal Gastronomy</span>
          <h1 className="page-header-title">Our Culinary Menu & Food Ordering</h1>
          <p className="page-header-subtitle">
            Explore our handcrafted creations, prepared fresh to order using finest organic and seasonal harvests.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container menu-container-wrapper">
        {/* Search & Filter Control Bar */}
        <div className="menu-control-bar">
          {/* Search Box */}
          <div className="menu-search-box">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, pasta, steaks, ingredients..."
              className="menu-search-input"
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Quick Dietary Filters */}
          <div className="dietary-filter-group">
            <span className="filter-label">Dietary:</span>
            <button
              className={`diet-pill ${selectedDietary === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedDietary('all')}
            >
              All
            </button>
            <button
              className={`diet-pill ${selectedDietary === 'vegetarian' ? 'active' : ''}`}
              onClick={() => setSelectedDietary('vegetarian')}
            >
              Vegetarian
            </button>
            <button
              className={`diet-pill ${selectedDietary === 'gluten-free' ? 'active' : ''}`}
              onClick={() => setSelectedDietary('gluten-free')}
            >
              Gluten-Free
            </button>
            <button
              className={`diet-pill ${selectedDietary === 'chef special' ? 'active' : ''}`}
              onClick={() => setSelectedDietary('chef special')}
            >
              Chef's Special
            </button>
          </div>

          {/* Sort Selector */}
          <div className="sort-selector-wrap">
            <label htmlFor="sort-by">Sort By:</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-dropdown"
            >
              <option value="featured">Chef's Highlights</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="category-tabs-scroll">
          <div className="category-tabs">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`category-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filter Indicators & Results Count */}
        <div className="results-info-row">
          <p className="results-count">
            Showing <strong>{filteredDishes.length}</strong> dish{filteredDishes.length !== 1 ? 'es' : ''}
            {selectedCategory !== 'all' && ` in "${menuCategories.find(c => c.id === selectedCategory)?.name}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>

          {(selectedCategory !== 'all' || searchQuery !== '' || selectedDietary !== 'all') && (
            <button onClick={clearAllFilters} className="btn-reset-filters">
              Reset Filters
            </button>
          )}
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length > 0 ? (
          <div className="dishes-grid">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="empty-state-box text-center">
            <UtensilsCrossed size={52} className="empty-icon" />
            <h3>No culinary dishes match your selection</h3>
            <p>Try searching for a different keyword or resetting your category and dietary filters.</p>
            <button onClick={clearAllFilters} className="btn btn-primary mt-3">
              View Full Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
