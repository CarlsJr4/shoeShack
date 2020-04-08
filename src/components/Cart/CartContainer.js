import React from 'react';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import { useSelector } from 'react-redux';

export default function Cart() {
	// TODO: A map function that renders cart items
	// We could pull these items from the store
	const cartItemState = useSelector(state => state.cart);
	const cartItems = cartItemState.forEach((item, i) => <CartItem key={i} item={item} />)

	return (
		<div>
			<h1>Cart</h1>
			{!cartItems ? <p>Your cart is empty.</p> : cartItems}
			<hr/>
			<CartTotals />
		</div>
	)
}
