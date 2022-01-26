import React from "react";
import "./style.css";

function ContactForm() {
  return (
    <form
      id="contact-form"
      action="https://formspree.io/f/xzbodobo"
      method="POST"
    >
      <article className="form-item-holder">
        <h3>Email</h3>
        <input
          className="form-input"
          id="email-input"
          type="email"
          name="_replyto"
        />
      </article>
      <article className="form-item-holder">
        <h3> Body</h3>
        <textarea className="form-input" id="body-input" name="body"></textarea>
      </article>
      <article id="submit-holder">
        <input id="submit-input" type="submit" value="Send" />
      </article>
    </form>
  );
}

export default ContactForm;
