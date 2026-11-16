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

---

## 🛠️ Technologies Used

- **React 18** (Functional Components, Hooks, Context API)
- **Vite** (Next-generation frontend tooling and fast dev server)
- **React Router DOM (v6)** (Client-side routing and SPA navigation)
- **Lucide React** (Clean, accessible SVG iconography)
- **CSS3** (CSS Custom Properties, Flexbox, CSS Grid, Media Queries)
- **Google Fonts** (*Playfair Display* & *Outfit*)
- **HTML5 & JSX**

---

## 📂 Project Directory Structure

```text
savoria-restaurant/
├── public/
│   └── restaurant-icon.svg      # Favicon and brand SVG icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive header with mobile drawer & cart badge
│   │   ├── Footer.jsx           # Footer with hours, newsletter & credits
│   │   ├── DishCard.jsx         # Reusable card component for menu items
│   │   └── Toast.jsx            # Toast alerts for user actions
│   ├── context/
│   │   └── CartContext.jsx      # React Context for cart state & LocalStorage sync
│   ├── data/
│   │   └── restaurantData.js    # Data source for menu items, chefs, and reviews
│   ├── pages/
│   │   ├── Home.jsx             # Welcome & overview page
│   │   ├── About.jsx            # Heritage, mission, vision & chefs
│   │   ├── Menu.jsx             # Products/dishes page with search & filter
│   │   ├── Reservations.jsx     # Interactive table booking form
│   │   ├── Contact.jsx          # Contact info & validated message form
│   │   ├── Cart.jsx             # Shopping cart tray & checkout modal
│   │   └── NotFound.jsx         # 404 fallback page
│   ├── styles/
│   │   └── index.css            # Master external responsive stylesheet
│   ├── App.jsx                  # Main application component & routes
│   └── main.jsx                 # Application entry point with BrowserRouter
├── .gitignore                   # Prevents node_modules from uploading to GitHub
├── index.html                   # HTML entry file
├── package.json                 # Project dependencies and run scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

---

## 🚀 Installation & Running Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed on your computer.

### Step 1: Open the Project in Visual Studio Code
1. Open **Visual Studio Code**.
2. Click **File** → **Open Folder...**
3. Browse to and select the `savoria-restaurant` project folder.
4. Click **Open**.

### Step 2: Open the Integrated Terminal in VS Code
1. At the top menu of VS Code, click **Terminal** → **New Terminal** (or press `` Ctrl + ` `` / `` Cmd + ` ``).

### Step 3: Install Dependencies
In the VS Code terminal, run:
```bash
npm install
```
*(This will download all necessary packages specified in `package.json`).*

### Step 4: Run the Development Server
In the terminal, run:
```bash
npm run dev
```

### Step 5: Open in Your Browser
Click on the local URL shown in your terminal (typically `http://localhost:5173/`) to preview the live application.

---

## 🌐 How to Publish Online (Free Deployment)

### Option 1: Deploy with Netlify (Recommended)
1. Push your repository to **GitHub** (see Git steps below).
2. Go to [Netlify](https://www.netlify.com/) and sign in with your GitHub account.
3. Click **"Add new site"** → **"Import an existing project"**.
4. Choose your GitHub repository `savoria-restaurant`.
5. Netlify will automatically detect:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Click **"Deploy Savoria"**. Netlify will build and give you a public live URL (e.g., `https://savoria-restaurant.netlify.app`).

### Option 2: Deploy with Vercel
1. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **"Add New Project"**.
3. Select your GitHub repository.
4. Click **"Deploy"**. Vercel will build and assign you a live `.vercel.app` URL.

---

## 🐙 Git and GitHub Setup Instructions

*(Remember: `node_modules` is included in `.gitignore` so it will never be uploaded).*

1. Initialize Git repository:
   ```bash
   git init
   ```
2. Add all files to staging:
   ```bash
   git add .
   ```
3. Commit the project:
   ```bash
   git commit -m "Complete Savoria Restaurant React application"
   ```
4. Create a new repository on your GitHub account (named e.g. `savoria-restaurant-react`).
5. Link your local project to GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/savoria-restaurant-react.git
   git branch -M main
   git push -u origin main
   ```

---

## 📝 Submission Checklist (Google Form)

- [x] Full Name
- [x] Matriculation Number
- [x] Department
- [x] Project Title: **Savoria Artisan Restaurant & Grill Web Application**
- [x] Short Description: *A responsive, full-featured modern React restaurant web app featuring menu search, filtering, table booking, shopping cart, and contact validation.*
- [x] Business Type: **Restaurant & Food Ordering Application**
- [x] GitHub Repository URL: *(your repository link)*
- [x] Live Application URL: *(your Netlify or Vercel link)*
- [x] Hosting Platform Used: Netlify / Vercel
- [x] Tested on Mobile & Desktop: Yes
- [x] Tested and Runs Successfully: Yes
