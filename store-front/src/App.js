import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
