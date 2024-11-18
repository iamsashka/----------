import React from 'eact';

function ProductDetails({ id }) {
  const product = getProductById(id);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Цена: {product.price} руб.</p>
      <p>Категория: {product.category}</p>
      <p>Описание: {product.description}</p>
      <button onClick={() => addToFavorite(product)}>Добавить в избранное</button>
      <button onClick={() => addToCart(product)}>Добавить в корзину</button>
    </div>
  );
}

export default ProductDetails;