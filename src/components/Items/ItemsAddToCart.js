import React from 'react';
import { useDispatch } from 'react-redux';

export default function ItemsAddToCart({game, id}) {
	const dispatch = useDispatch();

	function addToCart() {
		// Here, we need to dispatch an action with arguments
		dispatch({
			type: 'ADD',
			img: game.img,
			name: game.name,
			price: game.price,
			id
		});
		return
	}

	return (
		<button onClick={addToCart}>Add to cart</button>
	)
}
