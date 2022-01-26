import React from "react";
import ContactForm from "../ContactForm";
import "./style.css";

function Footer() {
  return (
    <footer id="footer">
      <section id="footer-top">
        <article id="contact-text">
          <h1>Contact Me</h1>
        </article>
      </section>
      <section id="footer-bottom">
        <article id="contact-form-holder">
          <ContactForm />
        </article>
        <nav id="contact-details">
          <ul>
            <li>
              <p>DanielChrisMoore@gmail.com</p>
            </li>
            <li>
              <a
                href="https://github.com/wron1"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/in/danielmoore201"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
