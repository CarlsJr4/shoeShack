import React, { useEffect } from 'react';
import ItemsCard from './ItemsCard';
import { useDispatch, useSelector } from 'react-redux';

export default function ItemsContainer() {
	// We could use an effect hook here to populate this component with data from the store
	// We could probably use a fake state
	// Or we could implement some kind of default state?

	// TODO: Add a map function that renders multiple item cards
	// Take the information from the state store, then pass the props in

	// Problem: We need to populate this component with all of our games
	// Solution: An API call to retrieve data
	
	// How can we do this? 
	// useEffect hook
	// axios
	// Send an action
	// Read values from the store 
	// The store is initially empty, we need to populate it
	// Remember that we have a single reducer that can determine any action you send
	
	// Steps
	// useEffect 
	// Async request
	// dispatch -> action and data from async request
	// reducer -> update the store
	// This component now has access to all the games

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
				img: 'https://picsum.photos/200'
			},
			{
				name: 'Beat Saber',
				price: 29.99,
				img: 'https://picsum.photos/200'
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
