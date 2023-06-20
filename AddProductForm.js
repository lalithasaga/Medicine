import React, { useState } from 'react';
import './AddProductForm.css';
function AddProductForm() {
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      medicineName,
      description,
      price
    };

    fetch('https://crudcrud.com/api/f9990d5e7b854486823cfea068b11381/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle successful creation of the product
        console.log('Product created:', data);
      })
      .catch(error => {
        // Handle error during product creation
        console.error('Error creating product:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Medicine Name:
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
