import React, { useEffect } from 'react';
import ItemsCard from './ItemsCard';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import white from '../../assets/images/white-shoe.jpg';
import black from '../../assets/images/black-shoe.jpg';
import black2 from '../../assets/images/black-shoe-2.jpg';
import blue from '../../assets/images/blue-shoe.jpg';
import green from '../../assets/images/green-shoe.jpg';

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
        img: white,
        id: uuidv4(),
      },
      {
        name: 'Animal Crossing: New Horizons',
        price: 59.99,
        img: black,
        id: uuidv4(),
      },
      {
        name: 'Beat Saber',
        price: 29.99,
        img: black2,
        id: uuidv4(),
      },
      {
        name: 'God of War',
        price: 39.99,
        img: blue,
        id: uuidv4(),
      },
      {
        name: 'God of War',
        price: 39.99,
        img: green,
        id: uuidv4(),
      },
    ];
    return games;
  }

  useEffect(() => {
    dispatch({ type: 'GET_GAMES', data: retrieveGames() });
  }, [dispatch]);

  return (
    <div>
      <h1>Items</h1>
      <div className="itemsContainer">
        {games.map(game => (
          <ItemsCard id={game.id} key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
