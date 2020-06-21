import React from 'react';
import ItemsAddToCart from './ItemsAddToCart';

export default function ItemsCard({ game, id }) {
  return (
    <div className="itemsContainer__card">
      <img src={game.img} alt={game.name} />
      <h3>{game.name}</h3>
      <p>${game.price}</p>
      <ItemsAddToCart game={game} id={id} />
    </div>
  );
}
