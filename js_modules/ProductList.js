import React from 'eact';
import ProductItem from './ProductItem';

function ProductList({ products, limit }) {
  return (
    <ul>
      {products.slice(0, limit).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;