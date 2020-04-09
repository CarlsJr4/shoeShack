import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import gamesReducer from './gamesReducer';
import totalsReducer from './totalsReducer';

const rootReducer = combineReducers({
	cart: cartReducer,
	games: gamesReducer,
	totals: totalsReducer
});

export default rootReducer;