import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './FormStyles.css';

function Form() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current.user_name.value || !form.current.user_email.value || !form.current.subject.value || !form.current.message.value) {
      setMessage("All fields are required.");
      return;
    }

    setIsSending(true);
    setMessage(""); 
    emailjs.sendForm(
      'service_km1w2rw', 
      'template_5i2438g', 
      form.current,
      'sUEsRhUslKDIFMOuk'
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        setMessage("Your message has been sent successfully!");
        form.current.reset(); // Clear the form
      },
      (error) => {
        console.log('FAILED...', error.text);
        setMessage("Failed to send message. Please try again.");
      }
    ).finally(() => {
      setIsSending(false);
    });
  }

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name:</label>
        <input type="text" name="user_name" required />

        <label>Email:</label>
        <input type="email" name="user_email" required />

        <label>Subject:</label>
        <input type="text" name="subject" required />

        <label>Message:</label>
        <textarea rows="6" placeholder="Type your message here:" name="message" required></textarea>

        <button className="btn" type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Submit'}
        </button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default Form;
