// import React from 'react';

// const Register = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-700">
//       <form className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4">
//         <h1 className="text-center text-2xl font-bold text-blue-600">REGISTRO</h1>

//         <input
//           type="text"
//           placeholder="Nombre completo"
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="email"
//           placeholder="Correo electrónico"
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="text"
//           placeholder="Nombre de usuario"
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="password"
//           placeholder="Confirmar contraseña"
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="text"
//           placeholder="Dirección"
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="text"
//           placeholder="Teléfono"
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-2 rounded font-semibold"
//           >
//             Registrarse
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;

///////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [formulario, setFormulario] = useState({
//     nombreCompleto: '',
//     correo: '',
//     username: '',
//     password: '',
//     confirmarPassword: '',
//     direccion: '',
//     telefono: '',
//   });

//   const [mensaje, setMensaje] = useState('');

//   const handleChange = (e) => {
//     setFormulario({
//       ...formulario,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formulario.password !== formulario.confirmarPassword) {
//       setMensaje('❌ Las contraseñas no coinciden');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8000/api/registro/', {
//         username: formulario.username,
//         password: formulario.password,
//         correo: formulario.correo,
//         nombre_completo: formulario.nombreCompleto,
//         direccion: formulario.direccion,
//         telefono: formulario.telefono,
//       });

//       setMensaje('✅ Usuario registrado con éxito');
//       setFormulario({
//         nombreCompleto: '',
//         correo: '',
//         username: '',
//         password: '',
//         confirmarPassword: '',
//         direccion: '',
//         telefono: '',
//       });
//     } catch (error) {
//       if (error.response) {
//         setMensaje(`❌ ${error.response.data.error}`);
//       } else {
//         setMensaje('❌ Error al conectar con el servidor');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-700">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4"
//       >
//         <h1 className="text-center text-2xl font-bold text-blue-600">REGISTRO</h1>

//         <input
//           type="text"
//           name="nombreCompleto"
//           placeholder="Nombre completo"
//           value={formulario.nombreCompleto}
//           onChange={handleChange}
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="email"
//           name="correo"
//           placeholder="Correo electrónico"
//           value={formulario.correo}
//           onChange={handleChange}
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="text"
//           name="username"
//           placeholder="Nombre de usuario"
//           value={formulario.username}
//           onChange={handleChange}
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Contraseña"
//           value={formulario.password}
//           onChange={handleChange}
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="password"
//           name="confirmarPassword"
//           placeholder="Confirmar contraseña"
//           value={formulario.confirmarPassword}
//           onChange={handleChange}
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="text"
//           name="direccion"
//           placeholder="Dirección"
//           value={formulario.direccion}
//           onChange={handleChange}
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />
//         <input
//           type="text"
//           name="telefono"
//           placeholder="Teléfono"
//           value={formulario.telefono}
//           onChange={handleChange}
//           className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//         />

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-2 rounded font-semibold"
//           >
//             Registrarse
//           </button>
//         </div>

//         {mensaje && (
//           <p className="text-center text-sm font-medium text-red-600 mt-2">{mensaje}</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Register;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // ✅ Importar

// const Register = () => {
//   const [formulario, setFormulario] = useState({
//     nombreCompleto: '',
//     correo: '',
//     username: '',
//     password: '',
//     confirmarPassword: '',
//     direccion: '',
//     telefono: '',
//   });

//   const [mensaje, setMensaje] = useState('');
//   const navigate = useNavigate(); // ✅ Hook para redirigir

//   const handleChange = (e) => {
//     setFormulario({
//       ...formulario,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     if (formulario.password !== formulario.confirmarPassword) {
//       setMensaje('❌ Las contraseñas no coinciden');
//       return;
//     }

//     try {
//       //await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/registrar/`, {
//       // await axios.post("http://localhost:8000/api/registrar/", {
//       //   username: formulario.username,
//       //   password: formulario.password,
//       //   password2: formulario.confirmarPassword, // 👈 CORRECTO
//       //   correo: formulario.correo,
//       //   nombre_completo: formulario.nombreCompleto,
//       //   direccion: formulario.direccion,
//       //   telefono: formulario.telefono,
//       // });

//       await axios.post("http://localhost:8000/api/registrar/", {
//         username: formulario.username,
//         password: formulario.password,
//         password2: formulario.confirmarPassword,
//         email: formulario.correo, // 👈 CAMBIO aquí (no "correo")
      
//         // Vamos a dividir nombreCompleto en nombre y apellido simples
//         first_name: formulario.nombreCompleto.split(" ")[0] || '',
//         last_name: formulario.nombreCompleto.split(" ").slice(1).join(" ") || '',
      
//         rol: "CLIENTE" // o "CLIENTE", según el sistema que estés manejando
//       });
      

//       setMensaje('✅ Usuario registrado con éxito');

//       // Limpiar formulario (opcional si rediriges)
//       setFormulario({
//         nombreCompleto: '',
//         correo: '',
//         username: '',
//         password: '',
//         confirmarPassword: '',
//         direccion: '',
//         telefono: '',
//       });

//       // ✅ Redirigir al login después de 1 segundo
//       setTimeout(() => {
//         navigate('/login');
//       }, 1000);

//     } catch (error) {
//       if (error.response) {
//         const errores = error.response.data;
//         const mensajes = Object.values(errores).flat().join('\n');
//         setMensaje(`❌ ${mensajes}`);
//       } else {
//         setMensaje('❌ Error al conectar con el servidor');
//       }
//     }
//   };

//   return (
//           <div className="min-h-screen flex items-center justify-center bg-gray-700">
//             <form
//               onSubmit={handleSubmit}
//               className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4"
//             >
//               <h1 className="text-center text-2xl font-bold text-blue-600">REGISTRO</h1>
      
//               <input
//                 type="text"
//                 name="nombreCompleto"
//                 placeholder="Nombre completo"
//                 value={formulario.nombreCompleto}
//                 onChange={handleChange}
//                 className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//               />
//               <input
//                 type="email"
//                 name="correo"
//                 placeholder="Correo electrónico"
//                 value={formulario.correo}
//                 onChange={handleChange}
//                 className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//               />
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Nombre de usuario"
//                 value={formulario.username}
//                 onChange={handleChange}
//                 className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Contraseña"
//                 value={formulario.password}
//                 onChange={handleChange}
//                 className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//               />
//               <input
//                 type="password"
//                 name="confirmarPassword"
//                 placeholder="Confirmar contraseña"
//                 value={formulario.confirmarPassword}
//                 onChange={handleChange}
//                 className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//               />
//               <input
//                 type="text"
//                 name="direccion"
//                 placeholder="Dirección"
//                 value={formulario.direccion}
//                 onChange={handleChange}
//                 className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//               />
//               <input
//                 type="text"
//                 name="telefono"
//                 placeholder="Teléfono"
//                 value={formulario.telefono}
//                 onChange={handleChange}
//                 className="text-center p-2 border border-gray-600 rounded bg-gray-300"
//               />
      
//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-2 rounded font-semibold"
//                 >
//                   Registrarse
//                 </button>
//               </div>
      
//               {mensaje && (
//                 <p className="text-center text-sm font-medium text-red-600 mt-2">{mensaje}</p>
//               )}
//             </form>
//           </div>
//         );
// };

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formulario, setFormulario] = useState({
    nombreCompleto: '',
    correo: '',
    username: '',
    password: '',
    confirmarPassword: '',
  });

  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formulario.password !== formulario.confirmarPassword) {
      setMensaje('❌ Las contraseñas no coinciden');
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/registrar/", {
        username: formulario.username,
        password: formulario.password,
        password2: formulario.confirmarPassword,
        email: formulario.correo,
        first_name: formulario.nombreCompleto.split(" ")[0] || '',
        last_name: formulario.nombreCompleto.split(" ").slice(1).join(" ") || '',
        rol: "CLIENTE"
      });

      setMensaje('✅ Usuario registrado con éxito');

      setFormulario({
        nombreCompleto: '',
        correo: '',
        username: '',
        password: '',
        confirmarPassword: '',
      });

      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      if (error.response) {
        const errores = error.response.data;
        const mensajes = Object.values(errores).flat().join('\n');
        setMensaje(`❌ ${mensajes}`);
      } else {
        setMensaje('❌ Error al conectar con el servidor');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4"
      >
        <h1 className="text-center text-2xl font-bold text-blue-600">REGISTRO</h1>

        <input
          type="text"
          name="nombreCompleto"
          placeholder="Nombre completo"
          value={formulario.nombreCompleto}
          onChange={handleChange}
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formulario.correo}
          onChange={handleChange}
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={formulario.username}
          onChange={handleChange}
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formulario.password}
          onChange={handleChange}
          className="text-center p-2 border border-gray-600 rounded bg-gray-300"
        />
        <input
          type="password"
          name="confirmarPassword"
          placeholder="Confirmar contraseña"
          value={formulario.confirmarPassword}
          onChange={handleChange}
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

        {mensaje && (
          <p className="text-center text-sm font-medium text-red-600 mt-2">{mensaje}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
