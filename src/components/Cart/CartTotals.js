import React from 'react';
import { useSelector } from 'react-redux';

export default function CartTotals() {
	const {subtotal, tax, total} = useSelector(state => state.totals);
	// TODO: Read props here to render totals
	// How can we calculate the total price of the games?
	// We could examine the cart state and add up all the prices
	// We could examine the quantity in the state and multiply it by the price

	// Problem:
	// How can we listen for changes to the cart? 
	// Should we use an effect hook?

	return (
		<div>
			<p>Subtotal: ${subtotal}</p>
			<p>Tax: ${tax}</p>
			<p>Total: ${total}</p>
			<button>Checkout</button>
		</div>
	)
}
