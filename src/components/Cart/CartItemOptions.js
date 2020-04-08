import React from 'react';
import { useDispatch } from 'react-redux';

export default function CartItemOptions({id}) {
	const dispatch = useDispatch();

	function deleteItem(id) {
		dispatch({
			type: 'REMOVE',
			id
		})
	}

	return (
		<div className="cartItem__options">
			<label htmlFor="cartItem__qty">Quantity:</label>	
			<select name="cartItem__qty" id="cartItem__qty">
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
