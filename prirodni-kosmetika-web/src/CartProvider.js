import { CartContext } from './cart-context';
import { React, useState } from 'react';

const defaultCartState = [];

// const cartReducer = (state, action) => {
//   if (action.type === 'ADD') {
//     const updatedItems = state.items.concat(action.item);
//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;
//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   return defaultCartState;
// };

export const CartProvider = () => {
  const { cartItems, setCartItems } = useState([]);

  const addItemToCartHandler = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCartHandler = (index) => {
    const newCartItems = [...cartItems];
    setCartItems(newCartItems.splice(index, 1));
  };

  const totalPrice = () => {
    cartItems.content.reduce(
      (total, currentItem) => (total = total + currentItem.salary),
      0,
    );
  };

  const cartContext = {
    items: cartItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updatePrice: totalPrice,
  };

  return <CartContext.Provider value={cartContext}></CartContext.Provider>;
};
