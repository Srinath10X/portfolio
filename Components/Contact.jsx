"use client";
import "./Contact.css";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div class="contactForm" id="contact">
        <form action="https://formspree.io/f/xleqpqkb" method="POST">
          <h1 id="contact_title">Get In Touch</h1>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button id="submit" type="submit">
            Send
          </button>
        </form>
        <div class="right-contact">
          <Image src={"/mail.png"} height={300} width={300} />
        </div>
      </div>
    </>
  );
};

export default Contact;
