import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './style.css';
import { HomePage } from './components/HomePage';
import { ProductPage } from './components/ProductPage';
import content from './content';
import { CategoryContext } from './category-context';
import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { CartContext } from './cart-context';

const App = () => {
  const [filteredItems, setFilteredItems] = useState(content);
  const [category, setCategory] = useState('');
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')),
  );
  const [itemQuantity, setItemQuantity] = useState(1);

  useEffect(
    (cartItems) => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    },
    [cartItems],
  );

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const changeCart = (newCartItem) => {
    setCartItems([...cartItems, newCartItem]);
  };

  console.log('cartItems in App', cartItems);

  const changeItemQuantity = (newItemQuantity) => {
    setItemQuantity(newItemQuantity);
    console.log('itemQuantity:', itemQuantity);
  };

  const filterByCategory = (category) => {
    const newContent = content.filter((product) => {
      return product.category === category;
    });
    setFilteredItems(newContent);
    console.log(filteredItems);
  };

  const resetCategory = () => {
    setFilteredItems(content);
    setCategory('');
  };

  const removeItemFromCart = (index) => {
    const newCartItems = [...cartItems];
    setCartItems(newCartItems.splice(index, 1));
  };

  // const arr = [];
  // for (var i = 0; i < count; i++) {
  //   arr.push(newCartItem);
  // }
  // setCartItems([...cartItems, ...arr]);

  // const handleAddToCart = (product, quantity) => {
  //   const addedProducts = [...cartProducts, product.name];
  //   setCartProducts(addedProducts);
  // };

  return (
    <CategoryContext.Provider
      value={{ category, changeCategory, filterByCategory, resetCategory }}
    >
      <CartContext.Provider
        value={{
          cartItems,
          setCartItems,
          changeCart,
          changeItemQuantity,
          removeItemFromCart,
        }}
      >
        <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  content={content}
                  // setSelectedItems={setSelectedFilters}
                  filteredItems={filteredItems}
                  // onAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/product/:productId"
              element={<ProductPage content={content} />}
            />
            <Route path="/cart" element={<Cart content={content} />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </CategoryContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
