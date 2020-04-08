import React, { useEffect } from 'react';
import ItemsCard from './ItemsCard';
import { useDispatch, useSelector } from 'react-redux';

export default function ItemsContainer() {
	const dispatch = useDispatch();
	const games = useSelector(state => state.games);

	const gameCards = games.map((game, i) => <ItemsCard key={i} game={game}/>)

	function retrieveGames() {
	// Normally we'd put an async request in here and get the results
		let games = [
			{
				name: 'Doom Eternal',
				price: 59.99,
				img: 'https://picsum.photos/200'
			},
			{
				name: 'Animal Crossing: New Horizons',
				price: 59.99,
				img: 'https://picsum.photos/201'
			},
			{
				name: 'Beat Saber',
				price: 29.99,
				img: 'https://picsum.photos/202'
			},
			{
				name: 'God of War',
				price: 39.99,
				img: 'https://picsum.photos/203'
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
				{gameCards}
			</div>
		</div>
	)
}
