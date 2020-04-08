import React from 'react'
import CartItemOptions from './CartItemOptions'

export default function CartItem({item}) {
	return (
		<div className="cartItem">
			<img src={item.img} alt={item.name}/>
			<div className="cartItem__info">
				<p>{item.name}</p>
				<p>${item.price}</p>
				<CartItemOptions item={item} />
			</div>
		</div>
	)
}
