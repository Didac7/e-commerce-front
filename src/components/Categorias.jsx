import React from 'react';

const Categorias = ({ categorias, seleccionarCategoria }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Categorías</h3>
      <ul className="space-y-2">
        {categorias.map((cat) => (
          <li
            key={cat}
            onClick={() => seleccionarCategoria(cat)}
            className="cursor-pointer hover:text-blue-500"
          >
            {cat}
          </li>
        ))}
        {/* <li
          onClick={() => seleccionarCategoria("Todas")}
          className="cursor-pointer text-gray-500 hover:text-blue-500"
        >
          Ver todas
        </li> */}
      </ul>
    </div>
  );
};

export default Categorias