import React from 'react';
import ItemsAddToCart from './ItemsAddToCart';

export default function ItemsCard() {
	
	// TODO: Customize the item card based on props

	return (
		<div className="itemsContainer__card">
			<img src="https://picsum.photos/200" alt="Video game"/>
			<h3>DOOM Eternal</h3>
			<p>$59.99</p>
			<ItemsAddToCart />
		</div>
	)
}
