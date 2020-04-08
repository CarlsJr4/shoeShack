import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import gamesReducer from './gamesReducer';
import totalsReducer from './totalsReducer';

// What are reducers?
// Reducers are functions that return state
// Reducers specify state changes 
// All of the application state is stored as a single object
// What will the state actually look like?

// Would we just use a useEffect to populate the games state?
// How would we incorporate an async request to the server using Redux? 
// This effect would only run one time when the component mounts
// We could couple a useEffect with an action, then we would dispatch the action to something that populates the games component

// const state = {
// 	allGames: [
// 		{
// 			name: 'Doom Eternal',
// 			price: 59.99,
// 			img: 'some-url'
// 		}
// 	],
// 	cart: [
// 		{
// 			name: 'Doom Eternal',
// 			price: 59.99,
// 			img: 'some-url',
// 			quantity: 1
// 		}
// 	],
// 	total: {
// 		subtotal: 59.99,
// 		tax: 5.00,
// 		subtotal: 64.99
// 	}
// }

// Reducers that we need:
// Update the cart
// Update the totals

const rootReducer = combineReducers({
	cart: cartReducer,
	games: gamesReducer,
	totals: totalsReducer
});

export default rootReducer;