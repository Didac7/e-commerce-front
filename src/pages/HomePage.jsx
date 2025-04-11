// import React from 'react';
// import products from '../data/products';
// import ProductCard from '../components/ProductCard';

// const HomePage = () => {
//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold text-center mb-6">Catálogo de Productos</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

//????????????????????????????????????????????????????????????????????????????????

// import React, { useState } from 'react';
// import productosData from '../data/productos';
// import Categorias from '../components/Categorias';
// import ListaProductos from '../components/ListaProductos'; // tu componente que muestra productos

// const HomePage = () => {
//   const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

//   const categoriasUnicas = [
//     ...new Set(productosData.map((producto) => producto.categoria)),
//   ];

//   const productosFiltrados =
//     categoriaSeleccionada === 'Todas'
//       ? productosData
//       : productosData.filter(
//           (producto) => producto.categoria === categoriaSeleccionada
//         );

//   return (
//     <div className="flex flex-col lg:flex-row">
//       <aside className="w-full lg:w-1/4 p-4">
//         <Categorias
//           categorias={categoriasUnicas}
//           seleccionarCategoria={setCategoriaSeleccionada}
//         />
//       </aside>

//       <main className="w-full lg:w-3/4 p-4">
//         <h2 className="text-xl font-bold mb-4">
//           {categoriaSeleccionada === 'Todas'
//             ? 'Todos los productos'
//             : `Categoría: ${categoriaSeleccionada}`}
//         </h2>
//         <ListaProductos productos={productosFiltrados} />
//       </main>
//     </div>
//   );
// };

// export default HomePage;


// src/pages/HomePage.jsx
import React, { useState } from 'react';
import products from '../data/products'; // Asegúrate de que esta ruta sea correcta
import Categorias from '../components/Categorias';
import ProductCard from '../components/ProductCard'; // Suponiendo que ya tienes un componente para mostrar productos

const HomePage = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Obtenemos las categorías únicas de los productos
  const categoriasUnicas = [
    ...new Set(products.map((producto) => producto.category)),
  ];

  // Filtramos los productos según la categoría seleccionada
  const productosFiltrados =
    categoriaSeleccionada === 'Todas'
      ? products
      : products.filter(
          (producto) => producto.category === categoriaSeleccionada
        );

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/4 p-4">
        <Categorias
          categorias={categoriasUnicas}
          seleccionarCategoria={setCategoriaSeleccionada}
        />
      </aside>

      <main className="w-full lg:w-3/4 p-4">
        <h2 className="text-xl font-bold mb-4">
          {categoriaSeleccionada === 'Todas'
            ? 'Todos los productos'
            : `Categoría: ${categoriaSeleccionada}`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} product={producto} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;