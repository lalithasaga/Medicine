import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './Components/Table';
import ProductList from './Components/ProductList';
import CartButton from './Components/CartButton';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <CartButton />
      </div>
    </Router>
  );
}

export default App;
