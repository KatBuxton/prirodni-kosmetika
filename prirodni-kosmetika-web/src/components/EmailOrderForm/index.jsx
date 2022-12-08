import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailOrderForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        'service_6781dby',
        'template_oggo729',
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
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Jméno a příjmení</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Poznámka</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailOrderForm;
