import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CartItemOptions({id, index}) {
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();

	function deleteItem(id) {
		dispatch({
			type: 'REMOVE',
			id
		})
	}

	function handleQuantityChange(e, id) {
		const newQuantity = e.target.value;
		const cartItem = cart.find(item => item.id == id);
		cartItem.quantity = newQuantity;
		dispatch({
			type: 'INCREMENT',
			cartItem,
			index
		})
	}

	return (
		<div className="cartItem__options">
			<label htmlFor="cartItem__qty">Quantity:</label>	
			<select onChange={(e) => handleQuantityChange(e, id)} name="cartItem__qty" id="cartItem__qty">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>
			<button onClick={() => deleteItem(id)}>Delete</button>
		</div>
	)
}
