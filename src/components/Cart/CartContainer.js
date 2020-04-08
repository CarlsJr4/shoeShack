import React from 'react';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import { useSelector } from 'react-redux';

export default function Cart() {
	const cartItemState = useSelector(state => state.cart);
	const cartItems = cartItemState.map((item) => 
		<CartItem 
			key={item.id} 
			id={item.id} 
			item={item} 
		/>
	)

	return (
		<div className="cartContainer">
			<h1>Cart</h1>
			<div className="cartContainer__items">
				{(cartItemState.length > 0) ? cartItems :  <p>Your cart is empty.</p>}
			</div>
			<div className="cartContainer__totals">
				<CartTotals />
			</div>
		</div>
	)
}
