import React from 'react';

function ProductListingPage() {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 9.99 },
    { id: 3, name: 'Product 3', price: 12.99 }
  ];

  return (
    <div>
      <h1>Product Listing</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.name}</a> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListingPage;