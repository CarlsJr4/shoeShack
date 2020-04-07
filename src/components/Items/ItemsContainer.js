import React from 'react';
import ItemsCard from './ItemsCard';

export default function ItemsContainer() {

	// TODO: Add a map function that renders multiple item cards

	return (
		<div>
			<h1>Items</h1>
			<div className="itemsContainer">
				<ItemsCard />
			</div>
		</div>
	)
}
