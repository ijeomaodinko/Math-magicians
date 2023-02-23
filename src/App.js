import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './components/Calculator.css';
import './components/NavBar.css';
import NavBar from './components/NavBar';
import Quotes from './pages/quotes';
import Home from './pages/home';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
