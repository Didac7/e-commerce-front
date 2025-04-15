// src/routes/AppRouter.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';
// import Navbar from '../components/Navbar';
// import HomePage from '../pages/HomePage';
// import ProductDetailPage from '../pages/ProductDetailPage';
// import CartPage from '../pages/CartPage';

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/registro" element={<RegisterPage />} />
//         <Route path="/inicio" element={<HomePage />} />
//         <Route path="/producto/:id" element={<ProductDetailPage />} />
//         <Route path="/carrito" element={<CartPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;


// // src/routes/AppRouter.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';
// import Navbar from '../components/Navbar';
// import HomePage from '../pages/HomePage';
// import ProductDetailPage from '../pages/ProductDetailPage';
// import CartPage from '../pages/CartPage';

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} /> {/* Página de inicio por defecto */}
//         <Route path="/login" element={<LoginPage />} /> {/* Login ahora es /login */}
//         <Route path="/registro" element={<RegisterPage />} />
//         <Route path="/producto/:id" element={<ProductDetailPage />} />
//         <Route path="/carrito" element={<CartPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;

// src/routes/AppRouter.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';
// import Navbar from '../components/Navbar';
// import HomePage from '../pages/HomePage';
// import ProductDetailPage from '../pages/ProductDetailPage';
// import CartPage from '../pages/CartPage';

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} /> {/* 👈 Esta es la página inicial */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/registro" element={<RegisterPage />} />
//         <Route path="/inicio" element={<HomePage />} />
//         <Route path="/producto/:id" element={<ProductDetailPage />} />
//         <Route path="/carrito" element={<CartPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CartPage from '../pages/CartPage';
import Footer from '../components/Footer';

const AppRoutes = () => {
  const location = useLocation();

  // Mostrar el Footer solo en '/' o '/inicio'
  const mostrarFooter = location.pathname === '/' || location.pathname === '/inicio';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/producto/:id" element={<ProductDetailPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>

      {/* {mostrarFooter && <Footer />} */}
    </>
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default AppRouter;