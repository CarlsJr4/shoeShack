// Each reducer handles a small slice of the app's state
// Now we need a reducer to handle adding items to the cart 
export default function cartReducer(cart = [], action) {
	switch (action.type) {
		case 'ADD':
			let updatedCart = [...cart];
			const {img, name, price} = action;
			const newItem = {
				img,
				name,
				price
			}
			updatedCart.push(newItem);
			return updatedCart
		default:
			return cart
	}
}