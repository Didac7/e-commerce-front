import React, { useState } from 'react';
import productosIniciales from '../data/products'; // Cambiá la ruta si es diferente

const AdminProductos = () => {
  const [productos, setProductos] = useState(productosIniciales);
  const [nuevoProducto, setNuevoProducto] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
    image: ''
  });
  const [editandoId, setEditandoId] = useState(null);

  const manejarCambio = (e) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value
    });
  };

  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nuevoProducto.name || !nuevoProducto.price || !nuevoProducto.category) return;

    const nuevo = {
      ...nuevoProducto,
      id: Date.now(),
      price: parseFloat(nuevoProducto.price)
    };

    setProductos([...productos, nuevo]);
    setNuevoProducto({ id: '', name: '', price: '', category: '', image: '' });
  };

  const eliminarProducto = (id) => {
    const actualizados = productos.filter(p => p.id !== id);
    setProductos(actualizados);
  };

  const iniciarEdicion = (producto) => {
    setEditandoId(producto.id);
    setNuevoProducto(producto);
  };

  const guardarEdicion = () => {
    const actualizados = productos.map(p =>
      p.id === editandoId ? { ...nuevoProducto, price: parseFloat(nuevoProducto.price) } : p
    );
    setProductos(actualizados);
    setEditandoId(null);
    setNuevoProducto({ id: '', name: '', price: '', category: '', image: '' });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Gestión de Productos</h2>

      {/* Formulario */}
      <form onSubmit={editandoId ? guardarEdicion : agregarProducto} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input name="name" value={nuevoProducto.name} onChange={manejarCambio} placeholder="Nombre" className="p-2 border rounded" required />
        <input name="price" value={nuevoProducto.price} onChange={manejarCambio} placeholder="Precio" type="number" className="p-2 border rounded" required />
        <input name="category" value={nuevoProducto.category} onChange={manejarCambio} placeholder="Categoría" className="p-2 border rounded" required />
        <input name="image" value={nuevoProducto.image} onChange={manejarCambio} placeholder="URL de imagen" className="p-2 border rounded" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded col-span-1 md:col-span-2">
          {editandoId ? 'Guardar cambios' : 'Agregar producto'}
        </button>
      </form>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {productos.map((prod) => (
          <div key={prod.id} className="border p-4 rounded shadow flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={prod.image} alt={prod.name} className="w-24 h-24 object-cover" />
            <div className="flex-1">
              <h3 className="font-bold">{prod.name}</h3>
              <p>${prod.price}</p>
              <p className="text-sm text-gray-500">{prod.category}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => iniciarEdicion(prod)} className="bg-yellow-400 text-white px-3 py-1 rounded">Editar</button>
              <button onClick={() => eliminarProducto(prod.id)} className="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProductos;