// import React from "react";
// import { useCart } from "../context/CartContext";

// const CartPage = () => {
//   const { cartItems, removeFromCart, clearCart } = useCart();

//   if (cartItems.length === 0) {
//     return (
//       <div className="text-center p-8 text-gray-600">
//         El carrito está vacío.
//       </div>
//     );
//   }

//   const handleCheckout = async () => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//       alert("Debes iniciar sesión para comprar");
//       return;
//     }

//     const pedidoData = {
//       //cliente_id: user.cliente_id, // 🔥 Asegúrate que tengas el id del cliente al logear
//       cliente_id: user?.cliente_id,
//       detalles: cartItems.map((item) => ({
//         producto_id: item.id,
//         cantidad: item.quantity,
//         precio: item.price,
//       })),
//     };

//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/procesar-pedido/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(pedidoData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Error al procesar el pedido");
//       }

//       alert("¡Pedido realizado con éxito!");
//       clearCart(); // 🔥 Limpia el carrito
//     } catch (error) {
//       console.error(error);
//       alert("Hubo un error al procesar tu pedido.");
//     }
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
//       <ul className="space-y-4">
//         {cartItems.map((item) => (
//           <li
//             key={item.id}
//             className="bg-white shadow p-4 rounded flex justify-between items-center"
//           >
//             <span>
//               {item.name} (x{item.quantity})
//             </span>
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="text-red-500 hover:underline"
//             >
//               Eliminar
//             </button>
//           </li>
//         ))}
//       </ul>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={clearCart}
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//         >
//           Vaciar carrito
//         </button>
//         <button
//           onClick={handleCheckout}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Proceder al pago
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";

// const CartPage = () => {
//   const { cartItems, removeFromCart, clearCart } = useCart();
//   const [mostrarModal, setMostrarModal] = useState(false);
//   const [factura, setFactura] = useState({
//     nombre: "",
//     nit: "",
//     direccion: "",
//   });

//   const handleChange = (e) => {
//     setFactura({ ...factura, [e.target.name]: e.target.value });
//   };

//   const handleCheckout = async () => {
//     setMostrarModal(true);
//   };

//   const procesarPago = async () => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     const pedidoData = {
//       cliente_id: user?.cliente_id,
//       detalles: cartItems.map((item) => ({
//         producto_id: item.id,
//         cantidad: item.quantity,
//         precio: item.price,
//       })),
//       factura,
//     };

//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/procesar-pedido/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(pedidoData),
//         }
//       );

//       if (!response.ok) throw new Error("Error al procesar el pedido");

//       alert("¡Pedido realizado con éxito!");
//       clearCart();
//       setMostrarModal(false);
//     } catch (error) {
//       console.error(error);
//       alert("Hubo un error al procesar tu pedido.");
//     }
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto relative">
//       <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
//       <ul className="space-y-4">
//         {cartItems.map((item) => (
//           <li key={item.id} className="bg-white shadow p-4 rounded flex justify-between items-center">
//             <span>{item.name} (x{item.quantity})</span>
//             <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">Eliminar</button>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-4 flex justify-between">
//         <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
//           Vaciar carrito
//         </button>
//         <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//           Proceder al pago
//         </button>
//       </div>

//       {/* Modal */}
//       {mostrarModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
//             <h3 className="text-xl font-semibold mb-4">Datos de Factura</h3>
//             <input name="nombre" onChange={handleChange} value={factura.nombre} placeholder="Nombre o razón social" className="w-full p-2 mb-2 border rounded" />
//             <input name="nit" onChange={handleChange} value={factura.nit} placeholder="NIT / CI" className="w-full p-2 mb-2 border rounded" />
//             <input name="direccion" onChange={handleChange} value={factura.direccion} placeholder="Dirección" className="w-full p-2 mb-4 border rounded" />

//             <div className="text-center mb-4">
//               <p>Escanea el siguiente código para simular tu pago:</p>
//               <img
//                 src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://banco-ejemplo.com/pago/orden/123456"
//                 alt="QR Pago"
//                 className="mx-auto my-2"
//               />
//             </div>

//             <div className="flex justify-between">
//               <button onClick={() => setMostrarModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancelar</button>
//               <button onClick={procesarPago} className="bg-green-600 text-white px-4 py-2 rounded">Confirmar Pedido</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [factura, setFactura] = useState({
    nombre: "",
    nit: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setFactura({ ...factura, [e.target.name]: e.target.value });
  };

  const handleOpenModal = () => {
    setMostrarModal(true);
  };

  const handleCheckout = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Debes iniciar sesión para comprar");
      return;
    }

    const pedidoData = {
      cliente_id: user?.cliente_id,
      detalles: cartItems.map((item) => ({
        producto_id: item.id,
        cantidad: item.quantity,
        precio: item.price,
      })),
      factura: factura,
    };

    try {
      console.log("📦 Datos enviados al backend:", pedidoData);
      const response = await fetch("http://localhost:8000/api/procesar-pedido/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pedidoData),
      });

      if (!response.ok) {
        throw new Error("Error al procesar el pedido");
      }

      const pedido = await response.json(); // { id: ... }

      const pdfResponse = await fetch(`http://localhost:8000/api/generar-pdf/${pedido.id}/`, {
        method: "GET",
      });

      if (!pdfResponse.ok) {
        throw new Error("Error al generar el PDF");
      }

      const blob = await pdfResponse.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `factura_pedido_${pedido.id}.pdf`;
      link.click();

      clearCart();
      setMostrarModal(false);
      alert("¡Pedido confirmado y PDF generado!");
    } catch (error) {
      console.error(error);
      alert("Hubo un error al procesar tu pedido.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto relative">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="bg-white shadow p-4 rounded flex justify-between items-center">
            <span>{item.name} (x{item.quantity})</span>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">Eliminar</button>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between">
        <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Vaciar carrito
        </button>
        <button onClick={handleOpenModal} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Proceder al pago
        </button>
      </div>

      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Datos de Factura</h3>
            <input name="nombre" onChange={handleChange} value={factura.nombre} placeholder="Nombre o razón social" className="w-full p-2 mb-2 border rounded" />
            <input name="nit" onChange={handleChange} value={factura.nit} placeholder="NIT / CI" className="w-full p-2 mb-2 border rounded" />
            <input name="direccion" onChange={handleChange} value={factura.direccion} placeholder="Dirección" className="w-full p-2 mb-4 border rounded" />

            <div className="text-center mb-4">
              <p>Escanea el siguiente código para simular tu pago:</p>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://banco-ejemplo.com/pago/orden/123456"
                alt="QR Pago"
                className="mx-auto my-2"
              />
            </div>

            <div className="flex justify-between">
              <button onClick={() => setMostrarModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancelar</button>
              <button onClick={handleCheckout} className="bg-green-600 text-white px-4 py-2 rounded">Confirmar Pedido</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

