import React from 'react';
import { useDispatch } from 'react-redux';

export default function ItemsAddToCart({item}) {
	// Task: Add an onclick listener to this button to submit an action to the store

	// Need to link this button to an action
	// We need to get the action arguments from the state store
	// But how will this button know which game it needs?
	// The itemsContainer will use a mapping function to render all the props needed

	// Because we have redux, we don't need to pass this listener all the way to the app level
	// We just need to call the action using our props, and Redux will take care of the state updates
	const dispatch = useDispatch();

	function addToCart() {
		// Here, we need to dispatch an action with arguments
		dispatch({
			type: 'ADD',
			img: item.img,
			name: item.name,
			price: item.price
		});
		return
	}

	return (
		<button onClick={addToCart}>Add to cart</button>
	)
}
