# Savoria Artisan Restaurant & Grill 🍽️

> **React JS Web Development Individual Practical Project Assignment**  
> **Course:** React JS  
> **Institution:** New Horizon  
> **Submission Deadline:** 13 November 2026  
> **Selected Business Type:** Restaurant & Food Ordering Web Application

---

## 📖 Project Overview

**Savoria Artisan Restaurant & Grill** is a modern, responsive, and interactive single-page web application built with **React JS** and **Vite**. The application serves as an online home and digital ordering solution for an upscale artisanal restaurant.

It allows customers to explore chef-curated menus, filter by meal categories and dietary preferences, search for dishes in real time, place food orders with an interactive shopping cart (persisted in Local Storage), reserve dining tables with instant ticket confirmation, and connect with the restaurant through a validated contact form.

---

## ✨ Features & Project Requirements Satisfied

### 1. Multi-Page Architecture (React Router)
- **Home Page (`/`)**: Dynamic hero banner with welcome message, value pillars (Farm-to-Table, Hearth-Fired, Master Chefs), featured recommendations showcase, guest testimonials, and interactive CTAs.
- **About Us Page (`/about`)**: Background and founding story (since 2014), clear Mission, Vision & Core Values cards, executive culinary director & pastry chef team profiles, and local sourcing promise.
- **Menu & Food Ordering Page (`/menu`)**:
  - Displays over 13 handcrafted dishes across Starters, Mains, Handcrafted Pasta, Wood-Fired Grill, Desserts, and Drinks.
  - Interactive **live search bar** with query reset.
  - Category navigation tabs using array `.map()`.
  - Dietary filter pills (*Vegetarian, Gluten-Free, Chef's Special*).
  - Sorting selector (*Price: Low to High, High to Low, Top Rated, Chef's Highlights*).
  - Reusable `<DishCard />` components with props, rating stars, calorie tags, and favorite toggles.
- **Table Reservation Page (`/reservations`)**:
  - Controlled interactive booking form with state management and input validation.
  - Selection for date, time slot, guest party size (1 to 10+), dining area ambiance, and special requests.
  - Instant digital reservation ticket receipt with unique booking reference code.
- **Contact Page (`/contact`)**:
  - Contact information cards (Address, Phone, Email, Operating Hours).
  - Functional controlled contact form containing **Full Name, Email address, Subject, Message, and Submit button**.
  - Form validation for required fields and email syntax.
  - Success feedback screen with auto-reset functionality.
- **Shopping Cart & Checkout (`/cart`)**:
  - Global Cart state powered by **React Context API** (`useContext`).
  - Item increment/decrement/remove controls.
  - Dynamic subtotal, 10% tax, and total calculation.
  - Coupon code input (Try coupon: `SAVOR10` for 10% off or `CHEF20` for 20% off).
  - Order type selector (*Dine-In, Curbside Pickup, Delivery*).
  - Complete checkout modal with order confirmation reference.
  - **Local Storage Persistence**: Cart items persist when the browser is refreshed.
- **404 Catch-All Page (`*`)**: Friendly page not found handler with redirect back to Home.
