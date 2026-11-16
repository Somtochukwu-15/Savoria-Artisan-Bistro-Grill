import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="not-found-page text-center">
      <div className="container not-found-content">
        <UtensilsCrossed size={72} className="not-found-icon" />
        <h1 className="error-code">404</h1>
        <h2>Dish or Page Not Found</h2>
        <p>The page you are looking for may have been retired from our seasonal menu or moved to another link.</p>
        <Link to="/" className="btn btn-primary mt-4">
          <Home size={18} />
          <span>Back to Savoria Home</span>
        </Link>
      </div>
    </div>
  );
};
