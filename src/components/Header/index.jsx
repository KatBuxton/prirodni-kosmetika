import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import headerImg from '../../img/header.jpg';
import homeImg from '../../img/home.svg';
import basketImg from '../../img/basket.svg';
import { useCart } from '../../cart-context';

export const Header = () => {
  const { cartItems } = useCart();
  const numberOfCartItems = cartItems?.length;

  return (
    <div className="header">
      <div
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: 'cover',
          backgroundPositionY: 'bottom',
          height: '300px',
          width: '100vw',
        }}
      ></div>
      <nav>
        <Link to="/" className="site-name">
          <img src={homeImg} alt="home icon" className="home-icon" />
        </Link>
        <Link to="/cart" className="site-cart">
          <img src={basketImg} alt="basket icon" className="basket-icon" />
          <span>{numberOfCartItems}</span>
        </Link>
      </nav>
      <div className="header-intro">
        <span className="header-name">Sabinky obchod</span>
        <span className="header-description">
          Ručně vyrobená kosmetika a drogerie přírodního původu
        </span>
      </div>
    </div>
  );
};
