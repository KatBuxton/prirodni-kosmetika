import { createContext, useContext } from 'react';

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const useCart = () => useContext(CartContext);
