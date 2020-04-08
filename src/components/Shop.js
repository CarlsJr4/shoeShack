import React from 'react';
import ItemsContainer from './Items/ItemsContainer';
import CartContainer from  './Cart/CartContainer';

export default function Shop() {
	// Things we would need to keep track of:
	// All available games, images, titles, and prices
	// Games added to the cart 
	// The totals

	return (
		<section className="shop">
			<ItemsContainer />
			<CartContainer />
		</section>
	)
}
