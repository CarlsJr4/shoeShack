import React from 'react';
import Items from './Items/Items';
import Cart from  './Cart/Cart';

export default function Shop() {
	return (
		<section className="shop">
			<Items />
			<Cart />
		</section>
	)
}
