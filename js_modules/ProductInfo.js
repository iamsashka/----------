import React from 'eact';

function ProductInfo({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to Cart</button>
      <button>Add to Favorites</button>
    </div>
  );
}

export default ProductInfo;