// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; // 👈 ícono del carrito
import { useCart } from '../context/CartContext'; // 👈 para mostrar número de ítems

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-indigo-500 p-4 flex justify-between items-center">
      <Link to="/inicio">
        <h1 className="text-white font-bold text-xl">Mi Ecommerce</h1>
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/carrito" className="relative">
          <ShoppingCart className="text-white w-6 h-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

        <Link to="/" className="text-white hover:underline">
          Iniciar sesión
        </Link>
        <Link to="/registro" className="text-white hover:underline">
          Registrarse
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
