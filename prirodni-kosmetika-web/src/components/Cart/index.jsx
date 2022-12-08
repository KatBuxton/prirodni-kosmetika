import React from 'react';
import './style.css';
// import EmailOrderForm from '../EmailOrderForm';
import { useCart } from '../../cart-context';

export const Cart = () => {
  const { cartItems } = useCart();

  const hasItems = cartItems.length > 0;

  const cartContent = (
    <ul className="cart-items">
      {cartItems.map((item) => (
        <li className="cart-item" key={item.index}>
          <div
            className="cart-item-image"
            style={{
              backgroundImage: `url(${item.image})`,
              width: '100px',
              height: '100px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            alt={item.name}
          ></div>
          <span className="cart-item-name">{item.name}</span>
          <span className="cart-item-price">{item.price} Kč</span>
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
            <div className="cart-footer">
              <div className="cart-total">
                <span>Celkem </span>
                <span>{totalPrice} Kč</span>
              </div>
              <button className="cart-order">Závazně objednat</button>
            </div>
          )}
          {/* <EmailOrderForm /> */}
        </div>
        <div className="footer">Created by Katerina Buxton, 2022</div>
      </div>
    </>
  );
};
