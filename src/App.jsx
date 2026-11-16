import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Reservations } from './pages/Reservations';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="app-layout">
        {/* Persistent Navigation */}
        <Navbar />

        {/* Dynamic Route View */}
        <main className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Toast Alerts */}
        <Toast />

        {/* Persistent Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
