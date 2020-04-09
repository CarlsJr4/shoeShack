import React, { useEffect } from 'react';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
	const dispatch = useDispatch();
	const cartItemState = useSelector(state => state.cart);

	const cartItems = cartItemState.map((item, i) => 
		<CartItem 
			key={item.id} 
			id={item.id} 
			item={item}
			index={i} 
		/>
	);

	function twoDecimals(value) {
		return Number.parseFloat(value).toFixed(2);
	}

	function calcTotals(items) {
		const prices = items.map(item => {
			let finalPrice = item.price * item.quantity
			return finalPrice
		});
		
		const subtotalReducer = (accumulator, currentValue) => accumulator + currentValue;
		let subtotal = prices.reduce(subtotalReducer, 0);
		let tax = subtotal * 0.10;
		let total = subtotal + tax;

		subtotal = twoDecimals(subtotal);
		tax = twoDecimals(tax);
		total = twoDecimals(total);

		return {
			subtotal,
			tax,
			total
		}
	}

	useEffect(() => {
		const totals = calcTotals(cartItemState);
		dispatch({
			type: 'CALC_TOTALS',
			totals
		})
	});

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
