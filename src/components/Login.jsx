import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <form className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold text-blue-600">LOGIN</h1>
        <input
          type="text"
          placeholder="Usuario"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-indigo-400 hover:bg-indigo-500 text-white px-4 py-2 rounded"
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className="bg-indigo-400 hover:bg-indigo-500 text-white px-4 py-2 rounded"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;