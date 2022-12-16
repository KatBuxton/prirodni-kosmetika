import React from 'react';
import './style.css';
import EmailOrderForm from '../EmailOrderForm';
import { useCart } from '../../cart-context';
import removeImg from '../../img/delete.svg';

export const Cart = () => {
  const { cartItems, removeItemFromCart } = useCart();

  JSON.parse(localStorage.cartItems);

  const hasItems = cartItems.length > 0;

  const handleRemove = (item) => {
    removeItemFromCart(item);
  };

  const cartContent = (
    <ul className="cart-items">
      {cartItems.map((item) => (
        <li className="cart-item" key={item.index}>
          <div
            className="cart-item-image"
            style={{
              backgroundImage: `url(${item.image})`,
              width: '89px',
              height: '89px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            alt={item.name}
          ></div>
          <span className="cart-item-name">{item.name}</span>
          <span className="cart-item-price">{item.price}&nbsp;Kč</span>
          <img
            className="cart-item-remove"
            src={removeImg}
            alt="cross"
            width="25px"
            onClick={handleRemove}
          ></img>
        </li>
      ))}
    </ul>
  );

  // const removeItemFromCartHandler = (index) => {
  //   const newCartItems = [...cartItems];
  //   setCartItems(newCartItems.splice(index, 1));
  // };

  const totalPrice = cartItems.reduce((prev, item) => {
    return prev + item.price;
  }, 0);

  //tohle funguje stejne jako ^
  // let totalPrice = 0;
  // for (let i = 0; i < cartItems.length; i += 1) {
  //   totalPrice += cartItems[i].price;
  // }

  return (
    <>
      <div className="cart">
        <div className="cart-content">
          {hasItems ? <h2>V košíku máte:</h2> : <h2>Košík je prázdný</h2>}
          {cartContent}
          {hasItems && (
            <>
              <div className="cart-price">
                <span>Celkem {totalPrice} Kč</span>
              </div>
              <h2>Pro objednání vyplňte kontaktní údaje:</h2>
              <EmailOrderForm />
            </>
          )}
        </div>
        <div className="footer">Created by Katerina Buxton, 2022</div>
      </div>
    </>
  );
};
