import React from 'react';
import ItemsContainer from './Items/ItemsContainer';
import CartContainer from './Cart/CartContainer';

export default function Shop() {
  return (
    <section className="shop">
      <ItemsContainer />
      <CartContainer />
    </section>
  );
}
