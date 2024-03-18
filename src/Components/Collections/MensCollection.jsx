import React, { useState, useEffect } from 'react';

function MensCollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products'); 
        if (!response.ok) throw new Error('Data could not be fetched!');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>{product.name} - ${product.price}</li> 
        ))}
      </ul>
    </div>
  );
}

export default MensCollection;
