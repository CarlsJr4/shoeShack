import React from 'react'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

export default function Cart() {
	return (
		<div>
			<h1>Cart</h1>
			<CartItem />
			<hr/>
			<CartTotals />
		</div>
	)
}
