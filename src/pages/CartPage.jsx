import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return <div className="text-center p-8 text-gray-600">El carrito está vacío.</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      <ul className="space-y-4">
        {cartItems.map(item => (
          <li key={item.id} className="bg-white shadow p-4 rounded flex justify-between items-center">
            <span>{item.name} (x{item.quantity})</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Vaciar carrito
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Proceder al pago
        </button>
      </div>
    </div>
  );
};

export default CartPage;