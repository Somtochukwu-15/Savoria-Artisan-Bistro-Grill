import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast, showToast } = useCart();

  if (!toast) return null;

  return (
    <aside aria-label="Notification" className={`toast-notification toast-${toast.type || 'success'}`}>
      <div className="toast-icon">
        {toast.type === 'info' ? <Info size={20} /> : <CheckCircle2 size={20} />}
      </div>
      <div className="toast-content">
        <p className="toast-message">{toast.message}</p>
      </div>
    </aside>
  );
};
