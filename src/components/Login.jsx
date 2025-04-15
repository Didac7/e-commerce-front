// import React from 'react';

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-700">
//       <form className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-4">
//         <h1 className="text-center text-2xl font-bold text-blue-600">LOGIN</h1>
//         <input
//           type="text"
//           placeholder="Usuario"
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <div className="flex justify-between">
//           <button
//             type="submit"
//             className="bg-indigo-400 hover:bg-indigo-500 text-white px-4 py-2 rounded"
//           >
//             Iniciar sesión
//           </button>
//           <button
//             type="button"
//             className="bg-indigo-400 hover:bg-indigo-500 text-white px-4 py-2 rounded"
//           >
//             Registrarse
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from './Register';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Simulación de login (debes validarlo con una API real)
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulando login
    localStorage.setItem('user', username);

    // Obtener la ruta de redirección guardada
    const redirectTo = localStorage.getItem('redirectAfterLogin') || '/';

    // Limpiar la ruta de redirección después de usarla
    localStorage.removeItem('redirectAfterLogin');
    
    // Redirigir al usuario
    navigate(redirectTo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold text-blue-600">LOGIN</h1>
        <input
          type="text"
          placeholder="Usuario"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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