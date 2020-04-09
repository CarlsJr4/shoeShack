// Here we will write a reducer to handle totals
// We would have to rely on an external value though. Is this allowed?
// As long as we don't change the arguments it should be ok right?
export default function totalsReducer(state = {subtotal: 0, tax: 0, total: 0}, action) {
	switch (action.type) {
		case 'CALC_TOTALS':
			const {subtotal, tax, total} = action.totals;
			const priceInfo = {
				subtotal, 
				tax, 
				total
			}
			return priceInfo
		default: 
			return state
	}
}