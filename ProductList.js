import React, { useEffect, useState } from 'react';
import './ProductList.css';
import CartButton from './CartButton';
function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://crudcrud.com/api/f9990d5e7b854486823cfea068b11381/products')
      .then(response => response.json())
      .then(data => {
        setProducts(prevProducts => [...prevProducts, ...data]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);

  // Add the additional data
  useEffect(() => {
    const newProducts = [
      {
        _id: '1',
        medicineName: 'paracetmol',
        description: 'used to solve fever',
        price: 20,
        numOfProductsAdded: 0
      },
      {
        _id: '2',
        medicineName: 'Dolo',
        description: 'used to solve fever',
        price: 20,
        numOfProductsAdded: 0
      }
    ];

    setProducts(prevProducts => [...prevProducts, ...newProducts]);
  }, []);

  const handleAddToCart = (productId) => {
    // Find the product by ID
    const product = products.find(product => product._id === productId);

    if (product) {
      // Increment the "numOfProductsAdded" value
      const updatedProducts = products.map(p => {
        if (p._id === productId) {
          return { ...p, numOfProductsAdded: p.numOfProductsAdded + 1 };
        }
        return p;
      });

      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Num of Products Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.medicineName}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.numOfProductsAdded}</td>
                <td>
                  <button onClick={() => handleAddToCart(product._id)}>
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
