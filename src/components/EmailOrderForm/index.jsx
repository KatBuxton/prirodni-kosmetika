import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useCart } from '../../cart-context';
import './style.css';

const EmailOrderForm = () => {
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

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Jméno a příjmení</label> */}
      <input type="text" name="user_name" placeholder="Jméno a příjmení" />
      {/* <label>Email</label> */}
      <input type="email" name="user_email" placeholder="Email" />
      {/* <label>Poznámka</label> */}
      <textarea name="message" placeholder="Poznámka" />
      <div className="order-footer">
        <input type="hidden" name="cart" value={formatCartAsHtml(cartItems)} />
        <span className="order-info">
          Kliknutím na tlačítko "Závazně objednat" bude vaše objednávka
          odeslána, na email vám přijdou údaje pro bankovní převod.
        </span>
        <button className="cart-order" type="submit">
          Závazně objednat
        </button>
      </div>
    </form>
  );
};

export default EmailOrderForm;
