// Each reducer handles a small slice of the app's state
// Now we need a reducer to handle adding items to the cart 
export default function cartReducer(cart = [], action) {
	let updatedCart = [...cart];
	const {img, name, price, id, cartItem, index} = action;
	switch (action.type) {
		case 'ADD':
			const newItem = {
				img,
				name,
				price,
				id,
				quantity: 1
			}
			updatedCart.splice(0, 0, newItem); // Add items in reverse order for better UX
			return updatedCart
		case 'REMOVE':
			updatedCart = updatedCart.filter(item => item.id !== id);
			return updatedCart
		case 'INCREMENT':
			updatedCart.splice(index, 1, cartItem);
			return updatedCart
		default:
			return cart
	}
}