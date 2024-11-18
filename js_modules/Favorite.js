import React, { useState } from 'eact';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;