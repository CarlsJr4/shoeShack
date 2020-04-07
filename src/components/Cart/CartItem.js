import React from 'react'
import CartItemOptions from './CartItemOptions'

export default function CartItem() {
	return (
		<div className="cartItem">
			<img src="https://picsum.photos/100" alt="Video game"/>
			<div className="cartItem__info">
				<p>DOOM Eternal</p>
				<p>$59.99</p>
				<CartItemOptions />
			</div>
		</div>
	)
}
