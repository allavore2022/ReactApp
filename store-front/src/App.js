import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products cart={ cart } setCart={ setCart } />}/>
        <Route path="/cart" element={<Cart cart={ cart } setCart={ setCart } />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
