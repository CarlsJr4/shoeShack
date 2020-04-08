import React, { useEffect } from 'react';
import ItemsCard from './ItemsCard';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4} from 'uuid';

export default function ItemsContainer() {
	const dispatch = useDispatch();
	const games = useSelector(state => state.games);

	function retrieveGames() {
	// Normally we'd put an async request in here and get the results
	// Normally, ID would come directly from the database
		let games = [
			{
				name: 'Doom Eternal',
				price: 59.99,
				img: 'https://picsum.photos/200',
				id: uuidv4()
			},
			{
				name: 'Animal Crossing: New Horizons',
				price: 59.99,
				img: 'https://picsum.photos/201',
				id: uuidv4()
			},
			{
				name: 'Beat Saber',
				price: 29.99,
				img: 'https://picsum.photos/202',
				id: uuidv4()
			},
			{
				name: 'God of War',
				price: 39.99,
				img: 'https://picsum.photos/203',
				id: uuidv4()
			}
		]
		return games
	}

	useEffect(() => {
		dispatch({type: 'GET_GAMES', data: retrieveGames()});
	}, [dispatch])

	return (
		<div>
			<h1>Items</h1>
			<div className="itemsContainer">
				{games.map((game) => 
					<ItemsCard 
						id={game.id} 
						key={game.id} 
						game={game}
					/>
				)}
			</div>
		</div>
	)
}
