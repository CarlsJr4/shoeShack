// Here we will write a reducer to handle totals
// We would have to rely on an external value though. Is this allowed?
// As long as we don't change the arguments it should be ok right?
export default function totalsReducer(state = {subtotal: 0.00, tax: 0.00, total: 0.00}, action) {
	switch (action.type) {
		case 'CALC_TOTALS':
			return state
		default: 
			return state
	}
}