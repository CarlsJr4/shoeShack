import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ItemsAddToCart({ game, id }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  function addToCart() {
    const cartIds = cart.map(item => item.id);
    if (cartIds.includes(id)) {
      alert('Item is already in cart.');
      return;
    }

    dispatch({
      type: 'ADD',
      img: game.img,
      name: game.name,
      price: game.price,
      id,
    });
    return;
  }

  return <button onClick={addToCart}>Add to cart</button>;
}
