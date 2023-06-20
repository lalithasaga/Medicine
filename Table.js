import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Table.css';

function Table() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://crudcrud.com/api/f9990d5e7b854486823cfea068b11381/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.medicineName}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/products">View Products</Link>
    </div>
  );
}

export default Table;
