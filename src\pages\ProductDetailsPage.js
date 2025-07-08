import React from 'react';

function ProductDetailsPage({ match }) {
  const productId = match.params.id;
  const product = { id: 1, name: 'Product 1', price: 10.99 };

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetailsPage;