import React from 'eact';

function ProductItem({ product }) {
  return (
    <li>
      <h2>{product.name}</h2>
      <p>Цена: {product.price} руб.</p>
      <p>Категория: {product.category}</p>
      <button onClick={() => addToFavorite(product)}>Добавить в избранное</button>
      <button onClick={() => addToCart(product)}>Добавить в корзину</button>
    </li>
  );
}

export default ProductItem;