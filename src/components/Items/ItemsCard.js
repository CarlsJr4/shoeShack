import React from 'react';
import ItemsAddToCart from './ItemsAddToCart';

export default function ItemsCard({game}) {
	
	// TODO: Customize the item card based on props from the state (use the store!)
	// You would need to pass in props manually because the store doesn't know which game you're using

	return (
		<div className="itemsContainer__card">
			<img src={game.img} alt="Video game"/>
			<h3>{game.name}</h3>
			<p>${game.price}</p>
			<ItemsAddToCart item={game} />
		</div>
	)
}
