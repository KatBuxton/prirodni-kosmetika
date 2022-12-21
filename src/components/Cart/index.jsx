import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import EmailOrderForm from '../EmailOrderForm';
import { useCart } from '../../cart-context';
// import removeImg from '../../img/delete.svg';
import zasilkovnaImg from '../../img/zasilkovna.png';

export const Cart = () => {
  const { cartItems, setCartItems } = useCart();

  JSON.parse(localStorage.getItem('cartItems'));

  const hasItems = cartItems?.length > 0;

  // const handleRemove = (item) => {
  //   removeItemFromCart(item);
  // };

  const handleErase = () => {
    setCartItems([]);
  };

  const cartContent = (
    <ul className="cart-items">
      {cartItems.map((item) => (
        <Link to={`/product/${item.index}`}>
          <li className="cart-item" key={item.index}>
            <div
              className="cart-item-image"
              style={{
                backgroundImage: `url(${item.image})`,
                width: '89px',
                height: '89px',
              }}
              alt={item.name}
            ></div>
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-price">{item.price}&nbsp;Kč</span>
            {/* <img
              className="cart-item-remove"
              src={removeImg}
              alt="cross"
              width="25px"
              onClick={handleRemove}
            ></img> */}
          </li>
        </Link>
      ))}
    </ul>
  );

  // const removeItemFromCartHandler = (index) => {
  //   const newCartItems = [...cartItems];
  //   setCartItems(newCartItems.splice(index, 1));
  // };

  const totalPrice = cartItems.reduce((prev, item) => {
    return prev + item.price + 79;
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
              <div className="shipping-fee cart-item">
                <div
                  className="cart-item-image"
                  style={{
                    backgroundImage: `url(${zasilkovnaImg})`,
                    width: '89px',
                    height: '89px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  alt="logo zasilkovny"
                ></div>
                <span className="cart-item-name">
                  DORUČENÍ NA POBOČKU ZÁSILKOVNY
                </span>
                <span className="cart-item-price">79&nbsp;Kč</span>
              </div>
              <div className="cart-price">
                <span className="cart-erase" onClick={handleErase}>
                  Vysypat košík
                </span>
                <span>Celkem {totalPrice} Kč</span>
              </div>
              <hr />
              <h2>Pro objednání vyplňte kontaktní údaje:</h2>
              <EmailOrderForm totalPrice={totalPrice} />
            </>
          )}
        </div>
        <div className="footer">Created by Katerina Buxton, 2022</div>
      </div>
    </>
  );
};
