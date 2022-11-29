import React, { useContext } from 'react';
import './style.css';
import { CartContext } from '../../cart-context';

export const Cart = ({ props }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div className="cart">
      <div className="cart-header">
        {hasItems ? <h2>Košík je prázdný</h2> : <h2>V košíku máte</h2>}
      </div>
      {cartItems}
      <div className="cart-total">
        <span>Celkem: </span>
        <span>{totalAmount},-</span>
      </div>
      <div>{hasItems && <button className="cart-order">Objednat</button>}</div>
    </div>
  );
};
