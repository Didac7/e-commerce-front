// src/App.jsx
// import React from 'react';
// import AppRouter from './routes/AppRouter';

// const App = () => <AppRouter />;

// export default App;


import React from 'react';
import AppRouter from './routes/AppRouter';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;