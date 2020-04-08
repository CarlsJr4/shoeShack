export default function gamesReducer(gameList = [], action) {
	switch (action.type) {
		case 'GET_GAMES':
			return action.data
		default: 
			return gameList
	}
}