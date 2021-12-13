import React from 'react';
import NavBar from './components/layout/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './context/CartContext';
import Footer from './components/layout/Footer/Footer'

function App() {

  return (

      <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <Footer/>   
        </BrowserRouter>
      </CartProvider>
    
  );
}

export default App;