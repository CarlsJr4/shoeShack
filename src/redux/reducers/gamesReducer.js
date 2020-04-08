export default function gamesReducer(gameList = [], action) {
	switch (action.type) {
		case 'GET_GAMES':
			console.log(action)
			return action.data
		default: 
			return gameList
	}
}