import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { useCart } from '../../cart-context';

export const ProductPage = ({ content }) => {
  const { productId } = useParams();
  const { changeCart, changeItemQuantity } = useCart();

  const quantityChangeHandler = (event) => {
    event.preventDefault();
    const enteredAmount = event.target.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      return;
    }
    changeItemQuantity(enteredAmountNumber);
  };

  const addItemToCartHandler = (item) => {
    changeCart(item);
  };

  // const addToCartHandler = (amount) => {
  //   cartCtx.addItem({
  //     id: props.id,
  //     name: props.name,
  //     amount: amount,
  //     price: props.price,
  //   });
  // };

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
                  label="amount"
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="amount-input"
                  onChange={quantityChangeHandler}
                />
                <button
                  name="Add to cart"
                  onClick={() => {
                    addItemToCartHandler(product);
                  }}
                >
                  Vložit do košíku
                </button>
              </div>
            </div>
          </div>
        ))}
      <div className="footer">Created by Katerina Buxton, 2022</div>
    </>
  );
};
