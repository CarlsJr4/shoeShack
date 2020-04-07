import React from 'react';
import ItemsContainer from './Items/ItemsContainer';
import CartContainer from  './Cart/CartContainer';

export default function Shop() {
	// Normally, state would have lived here. Because of Redux, state will now live in the store.  
	// Things we would need to keep track of:
	// All available games, images, titles, and prices
	// Games added to the cart 
	// The totals

	// State would have to live here because the items component needs to send data to the cart component. 
	// Luckily, we can use redux to make event handling easy. 
	// We also need to be unable to add an item to the cart twice
	// We need a way to remove cart items

	return (
		<section className="shop">
			<ItemsContainer />
			<CartContainer />
		</section>
	)
}
