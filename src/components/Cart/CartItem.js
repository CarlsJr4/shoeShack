import React from 'react'
import CartItemOptions from './CartItemOptions'

export default function CartItem({item, id, index}) {
	return (
		<div className="cartItem">
			<img src={item.img} alt={item.name}/>
			<div className="cartItem__info">
				<p>{item.name}</p>
				<p>${item.price}</p>
				<CartItemOptions id={id} index={index} />
			</div>
		</div>
	)
}
