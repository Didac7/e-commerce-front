import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <form className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold text-blue-600">REGISTRO</h1>

        <input
          type="text"
          placeholder="Nombre completo"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="text"
          placeholder="Dirección"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="text"
          placeholder="Teléfono"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-2 rounded font-semibold"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
