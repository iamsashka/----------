import React, { useState } from 'eact';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
    </div>
  );
}

export default Cart;