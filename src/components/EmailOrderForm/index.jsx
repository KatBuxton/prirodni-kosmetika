import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useCart } from '../../cart-context';
import './style.css';

const EmailOrderForm = ({ totalPrice }) => {
  const { cartItems } = useCart();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6781dby',
        'template_8mfh52j',
        form.current,
        'QcAN6s6fqyqMQQjyC',
      )
      .then(
        (result) => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED!');
        },
      );
    console.log(cartItems);
  };

  function formatCartAsHtml(data) {
    return `<div>
       ${data.map((item) => `<b>${item.name}`).join('<br />')}
      </div>`;
  }

  function formatTotalPriceAsHtml() {
    return `${totalPrice}`;
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Jméno a příjmení" />
      <input type="email" name="user_email" placeholder="Email" />
      <input
        type="text"
        name="pickup_address"
        placeholder="Adresa pobočky Zásilkovny"
      />
      <textarea name="message" placeholder="Poznámka" />
      <div className="order-footer">
        <input type="hidden" name="cart" value={formatCartAsHtml(cartItems)} />
        <input
          type="hidden"
          name="total_price"
          value={formatTotalPriceAsHtml()}
        />
        <div className="order-info">
          <a
            href="https://www.zasilkovna.cz/pobocky"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hledat adresu pobočky Zásilkovny
          </a>
          <br />
          Kliknutím na tlačítko "Závazně objednat" bude vaše objednávka
          odeslána, na email vám přijdou údaje pro bankovní převod.
        </div>
        <button className="cart-order" type="submit">
          Závazně objednat
        </button>
      </div>
    </form>
  );
};

export default EmailOrderForm;
