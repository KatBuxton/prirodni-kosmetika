import { createContext, useContext } from 'react';

export const CartContext = createContext({
  items: [],
  // addItem: (item) => {},
  // removeItem: (index) => {},
});

export const useCart = () => useContext(CartContext);

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

// export const CartProvider = () => {
//   const { cartItems, setCartItems } = useCart();

//   const addItemToCartHandler = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeItemFromCartHandler = (index) => {
//     const newCartItems = [...cartItems];
//     setCartItems(newCartItems.splice(index, 1));
//   };

//   const totalPrice = (cartItems) => {
//     cartItems.content.reduce(
//       (total, currentItem) => (total = total + currentItem.salary),
//       0,
//     );
//   };

// };
