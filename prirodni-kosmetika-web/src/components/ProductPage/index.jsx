import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import imageUrl from '../ProductCard/lemons.jpg';
import { useContext } from 'react';
import { CartContext } from '../../cart-context';

export const ProductPage = ({ content, onAddToCart }) => {
  const amountInputRef = useRef();
  const { productId } = useParams();
  const cartCtx = useContext(CartContext);

  const addToCarlHandler = (amount) => {
    cartCtx.addItem({
      id: content.product.index,
      name: content.product.name,
      amount: amount,
      price: content.product.price,
    });
  };

  console.log('cartCTX', cartCtx);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  // //tohle pak smazu:
  // const handleOnClick = (product) => {
  //   onAddToCart(product.name, 1);
  //   console.log(product.name);
  // };

  return (
    <>
      {content
        .filter((item) => item.index === productId)
        .map((product) => (
          <div className="product-container" key={product.index}>
            <div
              style={{
                backgroundImage: `url(${product.image})`,
                width: '400px',
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              alt={product.name}
            ></div>
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-amount">{product.amount}</span>
              <br></br>
              <p className="product-description">{product.description}</p>
              <span className="product-details">{product.details}</span>
              <br></br>
              <span className="product-ingredients">{product.ingredients}</span>
              <br></br>
              <span className="product-price">{product.price} Kč</span>
              <div className="add-to-cart">
                <input
                  ref={amountInputRef}
                  label="amount"
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="amount-input"
                  onChange={submitHandler}
                />
                <button name="Add to cart" onClick={addToCarlHandler}>
                  Vložit do košíku
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
