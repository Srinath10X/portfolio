"use client";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div class="contactForm">
        <form action="https://formspree.io/f/xleqpqkb" method="POST">
          <h1>Get In Touch</h1>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button id="submit" type="submit">
            Send
          </button>
        </form>
        <div class="right"></div>
      </div>
    </>
  );
};

export default Contact;
